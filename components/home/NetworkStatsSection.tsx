import { StatsGrid } from "@/components/ui/StatsGrid";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { FadeIn } from "@/components/ui/FadeIn";
import type { EtcStats } from "@/lib/api/etc-stats";
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

function OverviewTable({ heading, rows }: { heading: string; rows: Row[] }) {
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

export function NetworkStatsSection({ stats, hashrateTHs }: { stats: EtcStats; hashrateTHs: number }) {
  const heroStats = [
    {
      value: formatUSD(stats.price),
      label: "ETC Price",
      context: `${formatPercent(stats.priceChange24h)} (24h)`,
      contextColor: (stats.priceChange24h >= 0 ? "green" : "red") as
        | "green"
        | "red",
    },
    { value: formatUSD(stats.marketCap), label: "Market Cap" },
    {
      value: formatCompact(stats.totalTransactions),
      label: "Total Transactions",
    },
    { value: "2015", label: "Network Origin" },
  ];

  const sectionStats = [
    {
      value: formatUSD(stats.marketCap),
      label: "Market Capitalization",
      context: `Rank #${stats.marketCapRank} by market cap`,
    },
    {
      value: formatCompact(stats.totalAddresses),
      label: "Total Addresses",
      context: "All-time unique addresses on Ethereum Classic",
    },
    {
      value: formatCompact(stats.totalBlocks),
      label: "Total Blocks",
      context: "Blocks produced since genesis (2015)",
    },
    {
      value: formatBlockTime(stats.averageBlockTimeMs),
      label: "Block Time",
      context: "Average time between blocks",
    },
  ];

  const priceChangeColor: "green" | "red" =
    stats.priceChange24h >= 0 ? "green" : "red";

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
    { label: "Network Hashrate", value: `${Math.round(hashrateTHs)} TH/s *` },
  ];

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
      <SectionDivider variant="strong" />
      <section aria-labelledby="ethereum-classic-network-heading" className="section-deep py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
              Overview
            </p>
            <h2 id="ethereum-classic-network-heading" className="mt-3 text-3xl font-bold tracking-tight">
              Ethereum Classic Network
            </h2>
            <p className="mt-3 mb-10 text-sm text-[var(--text-muted)]">
              Live network and market data from Blockscout and CoinGecko.
            </p>
          </FadeIn>
          <StatsGrid stats={heroStats} variant="section" />
          <div className="mt-6">
            <StatsGrid stats={sectionStats} variant="section" />
          </div>

          <FadeIn>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <OverviewTable heading="Network" rows={networkRows} />
              <OverviewTable heading="Economics" rows={economicsRows} />
            </div>
            <p className="mt-4 text-xs text-[var(--text-subtle)]">
              * Hashrate approximate, based on pool data. Data refreshes every
              10 minutes.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
