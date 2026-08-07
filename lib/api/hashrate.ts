// ETC network hashrate — current value + multi-timeframe history
// ISR: revalidates at most once per hour (not per page request)
// Sources:
//   Current:  Blockscout /api/v2/blocks/{height} → difficulty / avg_block_time → TH/s
//   History:  same formula, 14 sampled blocks per timeframe, all fetched in parallel
//
// Block time is read from Blockscout's `average_block_time`, never hardcoded.
// ETC's average drifts with difficulty, so a fixed divisor skews every hashrate
// figure on the site; /stats carries the live value in the same response this
// module already fetches for the block height.

const BLOCKSCOUT = "https://etc.blockscout.com/api/v2";

// Used only when /stats is unreachable or reports something implausible.
const FALLBACK_BLOCK_TIME_S = 13.6;

export type TimePeriod = "week" | "month" | "year" | "all";

export interface HashratePoint {
  label: string;
  hashrateTHs: number;
}

export type HashrateHistories = Record<TimePeriod, HashratePoint[]>;

// ─── Current hashrate (Blockscout difficulty) ─────────────────────────────────

// Shown only when the live source is unreachable. Deliberately not maintained as
// a near-live figure: a stale number that looks live is worse than one labelled
// as an estimate, so anything rendering this MUST also render FALLBACK_NOTE.
const FALLBACK_THS = 155;

/** Caption for a reading where `isFallback` is true. */
export const HASHRATE_FALLBACK_NOTE =
  "Live network data is temporarily unavailable — this is an approximate placeholder, not a current reading.";

export interface NetworkHashrate {
  /** Terahashes per second. */
  ths: number;
  /** True when the live source failed and `ths` is the static placeholder. */
  isFallback: boolean;
}

interface BlockscoutStats {
  total_blocks: string;
  /** Milliseconds. */
  average_block_time?: number | string;
}

/**
 * Blockscout reports `average_block_time` in milliseconds. Guard the range so a
 * unit change upstream degrades to the fallback instead of silently scaling
 * every hashrate figure on the site by 1000x.
 */
function parseAvgBlockTimeS(stats: BlockscoutStats): number {
  const ms = Number(stats.average_block_time);
  if (!Number.isFinite(ms) || ms <= 0) return FALLBACK_BLOCK_TIME_S;
  const seconds = ms / 1000;
  if (seconds < 1 || seconds > 120) return FALLBACK_BLOCK_TIME_S;
  return seconds;
}

function toTHs(difficulty: number, blockTimeS: number): number {
  return Math.round((difficulty / blockTimeS / 1e12) * 10) / 10;
}

async function fetchStats(): Promise<BlockscoutStats | null> {
  try {
    const res = await fetch(`${BLOCKSCOUT}/stats`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function fetchHashrate(): Promise<NetworkHashrate> {
  const stats = await fetchStats();
  if (!stats) return { ths: FALLBACK_THS, isFallback: true };

  const currentHeight = parseInt(stats.total_blocks, 10);
  if (!currentHeight) return { ths: FALLBACK_THS, isFallback: true };

  const block = await fetchBlock(currentHeight);
  if (!block) return { ths: FALLBACK_THS, isFallback: true };

  const difficulty = parseFloat(block.difficulty);
  if (!difficulty) return { ths: FALLBACK_THS, isFallback: true };

  return { ths: toTHs(difficulty, parseAvgBlockTimeS(stats)), isFallback: false };
}

/** Convenience for callers that only need the number. */
export async function fetchHashrateTHs(): Promise<number> {
  return (await fetchHashrate()).ths;
}

// ─── Historical hashrate (Blockscout blocks) ─────────────────────────────────

interface BlockscoutBlock {
  difficulty: string;
  timestamp: string;
  height: number;
}

const NUM_POINTS = 14;

// How many blocks span each timeframe, at the network's measured block time
const TIMEFRAME_BLOCKS: Record<
  TimePeriod,
  (currentHeight: number, blockTimeS: number) => number
> = {
  week: (_h, t) => Math.round((7 * 24 * 3600) / t),
  month: (_h, t) => Math.round((30 * 24 * 3600) / t),
  year: (_h, t) => Math.round((365 * 24 * 3600) / t),
  all: (h) => h, // genesis → now
};

function formatLabel(isoTimestamp: string, period: TimePeriod): string {
  const d = new Date(isoTimestamp);
  const month = d.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
  const day = d.getUTCDate();
  const year = d.getUTCFullYear();
  const hours = d.getUTCHours();

  if (period === "week") {
    return hours === 0 ? `${month} ${day}` : `${month} ${day} 12:00`;
  }
  if (period === "month") {
    return `${month} ${day}`;
  }
  if (period === "year") {
    return `${month} '${String(year).slice(2)}`;
  }
  // all: show year + month for older points, year only for well-separated points
  return `${month} '${String(year).slice(2)}`;
}

async function fetchBlock(height: number): Promise<BlockscoutBlock | null> {
  try {
    const res = await fetch(`${BLOCKSCOUT}/blocks/${height}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

async function fetchHashrateHistoryFor(
  period: TimePeriod,
  currentHeight: number,
  blockTimeS: number,
): Promise<HashratePoint[]> {
  const totalBlocks = TIMEFRAME_BLOCKS[period](currentHeight, blockTimeS);
  const intervalBlocks = Math.floor(totalBlocks / (NUM_POINTS - 1));

  const blocks = await Promise.all(
    Array.from({ length: NUM_POINTS }, (_, i) => {
      // oldest first: i=0 is furthest back, i=13 is current
      const stepsBack = NUM_POINTS - 1 - i;
      const height = Math.max(1, currentHeight - stepsBack * intervalBlocks);
      return fetchBlock(height);
    }),
  );

  const points: HashratePoint[] = [];
  for (const block of blocks) {
    if (!block) continue;
    const difficulty = parseFloat(block.difficulty);
    if (!difficulty) continue;
    const hashrateTHs = toTHs(difficulty, blockTimeS);
    points.push({ label: formatLabel(block.timestamp, period), hashrateTHs });
  }
  return points;
}

// Fetches all four timeframes in parallel — called once at ISR build time
export async function fetchAllHashrateHistories(): Promise<HashrateHistories> {
  // Height and block time both come from the same /stats response
  const stats = await fetchStats();
  const currentHeight = stats ? parseInt(stats.total_blocks, 10) : 0;

  if (!currentHeight) {
    return { week: [], month: [], year: [], all: [] };
  }

  const blockTimeS = parseAvgBlockTimeS(stats!);

  const [week, month, year, all] = await Promise.all([
    fetchHashrateHistoryFor("week", currentHeight, blockTimeS),
    fetchHashrateHistoryFor("month", currentHeight, blockTimeS),
    fetchHashrateHistoryFor("year", currentHeight, blockTimeS),
    fetchHashrateHistoryFor("all", currentHeight, blockTimeS),
  ]);

  return { week, month, year, all };
}
