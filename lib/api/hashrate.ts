// ETC network hashrate from 2miners pool API
// ISR: Next.js caches this response and re-fetches at most once per hour.
// The API is NOT called on every page request — only on cache miss.
// Field: nodes[0].networkhashps — global network hashrate in H/s

interface TwoMinersStats {
  nodes: Array<{ networkhashps: string }>;
}

const FALLBACK_HASHRATE_THS = 210;

export async function fetchHashrateTHs(): Promise<number> {
  try {
    const res = await fetch("https://etc.2miners.com/api/stats", {
      next: { revalidate: 3600 }, // 1 hour cache — one API call per hour max
    });
    if (!res.ok) throw new Error(`2miners ${res.status}`);
    const data: TwoMinersStats = await res.json();
    const hps = parseFloat(data.nodes?.[0]?.networkhashps ?? "0");
    if (!hps) throw new Error("No hashrate data");
    // H/s → TH/s, 1 decimal place
    return Math.round((hps / 1e12) * 10) / 10;
  } catch {
    return FALLBACK_HASHRATE_THS;
  }
}
