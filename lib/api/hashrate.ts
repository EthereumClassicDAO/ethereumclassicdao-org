// ETC network hashrate — current value + 7-day history
// ISR: revalidates at most once per hour (not per page request)
// Sources:
//   Current:  2miners /api/stats → nodes[0].networkhashps (H/s)
//   History:  Blockscout /api/v2/blocks/{height} → difficulty / avg_block_time → TH/s
//             Sampled every 12 hours over 7 days (14 requests, one per data point)

const BLOCKSCOUT = "https://etc.blockscout.com/api/v2";
const ETC_AVG_BLOCK_TIME_S = 13; // seconds
const BLOCKS_PER_12H = Math.round((12 * 3600) / ETC_AVG_BLOCK_TIME_S); // ~3323

export interface HashratePoint {
  label: string; // "Apr 3", "Apr 3 12:00", etc.
  hashrateTHs: number;
}

// ─── Current hashrate (2miners) ──────────────────────────────────────────────

interface TwoMinersStats {
  nodes: Array<{ networkhashps: string }>;
}

const FALLBACK_THS = 210;

export async function fetchHashrateTHs(): Promise<number> {
  try {
    const res = await fetch("https://etc.2miners.com/api/stats", {
      next: { revalidate: 3600 }, // 1 hour cache — one API call per hour max
    });
    if (!res.ok) throw new Error(`2miners ${res.status}`);
    const data: TwoMinersStats = await res.json();
    const hps = parseFloat(data.nodes?.[0]?.networkhashps ?? "0");
    if (!hps) throw new Error("No hashrate data");
    return Math.round((hps / 1e12) * 10) / 10; // H/s → TH/s, 1 decimal
  } catch {
    return FALLBACK_THS;
  }
}

// ─── 7-day hashrate history (Blockscout blocks) ──────────────────────────────

interface BlockscoutBlock {
  difficulty: string;
  timestamp: string; // ISO 8601
  height: number;
}

interface BlockscoutStats {
  total_blocks: string;
}

function formatLabel(isoTimestamp: string): string {
  const d = new Date(isoTimestamp);
  const month = d.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
  const day = d.getUTCDate();
  const hours = d.getUTCHours();
  // Only show time component for intra-day points
  if (hours === 0 || hours === 12) {
    return hours === 0 ? `${month} ${day}` : `${month} ${day} 12:00`;
  }
  return `${month} ${day}`;
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

export async function fetchHashrateHistory(): Promise<HashratePoint[]> {
  // 1. Get current block height
  let currentHeight: number;
  try {
    const res = await fetch(`${BLOCKSCOUT}/stats`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`stats ${res.status}`);
    const data: BlockscoutStats = await res.json();
    currentHeight = parseInt(data.total_blocks, 10);
    if (!currentHeight) throw new Error("No block height");
  } catch {
    return [];
  }

  // 2. Sample 14 blocks: current height stepping back by 12h intervals (7 days)
  const NUM_POINTS = 14;
  const blocks = await Promise.all(
    Array.from({ length: NUM_POINTS }, (_, i) => {
      const stepsBack = NUM_POINTS - 1 - i; // oldest first
      const height = Math.max(1, currentHeight - stepsBack * BLOCKS_PER_12H);
      return fetchBlock(height);
    }),
  );

  // 3. Convert difficulty → TH/s
  const points: HashratePoint[] = [];
  for (const block of blocks) {
    if (!block) continue;
    const difficulty = parseFloat(block.difficulty);
    if (!difficulty) continue;
    const hashrateTHs =
      Math.round((difficulty / ETC_AVG_BLOCK_TIME_S / 1e12) * 10) / 10;
    points.push({ label: formatLabel(block.timestamp), hashrateTHs });
  }

  return points;
}
