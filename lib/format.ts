/** Compact USD formatting: "$8.99", "$73.8M", "$1.40B" */
export function formatUSD(n: number): string {
  if (n >= 1_000_000_000) {
    return `$${(n / 1_000_000_000).toFixed(2)}B`;
  }
  if (n >= 1_000_000) {
    return `$${(n / 1_000_000).toFixed(1)}M`;
  }
  if (n >= 1_000) {
    return `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  }
  return `$${n.toFixed(2)}`;
}

/** Compact number formatting: "142.8M", "601.1M", "24.2M" */
export function formatCompact(n: number): string {
  if (n >= 1_000_000_000) {
    return `${(n / 1_000_000_000).toFixed(1)}B`;
  }
  if (n >= 1_000_000) {
    return `${(n / 1_000_000).toFixed(1)}M`;
  }
  if (n >= 1_000) {
    return `${(n / 1_000).toFixed(1)}K`;
  }
  return n.toLocaleString("en-US");
}

/** Supply formatting: "155.9M ETC" */
export function formatSupply(n: number): string {
  return `${formatCompact(n)} ETC`;
}

/** Block time from ms: "~11s" */
export function formatBlockTime(ms: number): string {
  return `~${Math.round(ms / 1000)}s`;
}

/** Percentage with sign: "+8.07%" or "-2.35%" */
export function formatPercent(n: number): string {
  const sign = n >= 0 ? "+" : "";
  return `${sign}${n.toFixed(2)}%`;
}

/** Gwei formatting: "8.83 Gwei" */
export function formatGwei(n: number): string {
  return `${n.toFixed(2)} Gwei`;
}
