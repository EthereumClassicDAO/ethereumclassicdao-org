import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import type { EtcStats } from "@/lib/api/etc-stats";
import { fetchHashrateTHs } from "@/lib/api/hashrate";
import {
  formatUSD,
  formatCompact,
  formatSupply,
  formatBlockTime,
  formatPercent,
} from "@/lib/format";

interface Row {
  label: string;
  value: string;
  color?: "green" | "red";
}

function OverviewTable({
  heading,
  rows,
}: {
  heading: string;
  rows: Row[];
}) {
  return (
    <div className="rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] overflow-hidden">
      <div className="px-6 py-4 border-b border-[var(--divider)]">
        <p className="text-sm font-semibold tracking-wide">{heading}</p>
      </div>
      <div>
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center justify-between px-6 py-3 ${
              i % 2 === 0 ? "bg-[var(--bg-card)]" : ""
            }`}
          >
            <span className="text-sm text-[var(--text-muted)]">
              {row.label}
            </span>
            <span
              className={`text-sm font-mono font-medium ${
                row.color === "green"
                  ? "text-[var(--color-success)]"
                  : row.color === "red"
                    ? "text-[var(--color-error)]"
                    : "text-[var(--text-primary)]"
              }`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function EtcOverviewSection({ stats }: { stats: EtcStats }) {
  const hashrateTHs = await fetchHashrateTHs();
  const networkRows: Row[] = [
    { label: "Genesis Date", value: "July 30, 2015" },
    { label: "Consensus", value: "Proof-of-Work (ETChash)" },
    { label: "Chain ID", value: "61 (mainnet)" },
    { label: "Total Blocks", value: formatCompact(stats.totalBlocks) },
    {
      label: "Total Transactions",
      value: formatCompact(stats.totalTransactions),
    },
    { label: "Total Addresses", value: formatCompact(stats.totalAddresses) },
    {
      label: "Average Block Time",
      value: formatBlockTime(stats.averageBlockTimeMs),
    },
    { label: "Network Hashrate", value: `${hashrateTHs.toFixed(1)} TH/s *` },
  ];

  const priceChangeColor: "green" | "red" =
    stats.priceChange24h >= 0 ? "green" : "red";

  const economicsRows: Row[] = [
    { label: "ETC Price", value: formatUSD(stats.price) },
    {
      label: "24h Change",
      value: formatPercent(stats.priceChange24h),
      color: priceChangeColor,
    },
    { label: "Market Cap", value: formatUSD(stats.marketCap) },
    { label: "Market Cap Rank", value: `#${stats.marketCapRank}` },
    { label: "24h Volume", value: formatUSD(stats.volume24h) },
    {
      label: "Circulating Supply",
      value: formatSupply(stats.circulatingSupply),
    },
    { label: "Max Supply", value: formatSupply(stats.maxSupply) },
    { label: "All-Time High", value: formatUSD(stats.ath) },
  ];

  return (
    <>
      <SectionDivider />
      <section className="section-alt py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mt-0 grid gap-6 md:grid-cols-2">
              <OverviewTable heading="Network" rows={networkRows} />
              <OverviewTable heading="Economics" rows={economicsRows} />
            </div>
          </FadeIn>

          <p className="mt-4 text-xs text-[var(--text-subtle)]">
            * Hashrate is derived from on-chain block difficulty and the
            network&rsquo;s measured average block time, via Blockscout.
            Refreshed hourly.
          </p>
        </div>
      </section>
    </>
  );
}
