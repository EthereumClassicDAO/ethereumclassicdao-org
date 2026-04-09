import { StatsGrid } from "@/components/ui/StatsGrid";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { FadeIn } from "@/components/ui/FadeIn";
import type { EtcStats } from "@/lib/api/etc-stats";
import { formatUSD, formatCompact, formatBlockTime, formatPercent } from "@/lib/format";

export function NetworkStatsSection({ stats }: { stats: EtcStats }) {
  const heroStats = [
    {
      value: formatUSD(stats.price),
      label: "ETC Price",
      context: `${formatPercent(stats.priceChange24h)} (24h)`,
      contextColor: (stats.priceChange24h >= 0 ? "green" : "red") as "green" | "red",
    },
    { value: formatUSD(stats.marketCap), label: "Market Cap" },
    { value: formatCompact(stats.totalTransactions), label: "Total Transactions" },
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

  return (
    <>
      <SectionDivider variant="strong" />
      <section className="section-deep py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
              Overview
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
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
        </div>
      </section>
    </>
  );
}
