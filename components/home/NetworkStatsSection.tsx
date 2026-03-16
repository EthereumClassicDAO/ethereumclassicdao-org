import { StatsGrid } from "@/components/ui/StatsGrid";
import { SectionDivider } from "@/components/ui/SectionDivider";
import type { EtcStats } from "@/lib/api/etc-stats";
import { formatUSD, formatCompact, formatBlockTime } from "@/lib/format";

export function NetworkStatsSection({ stats }: { stats: EtcStats }) {
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
      value: "3",
      label: "Independent Clients",
      context: "fukuii, core-geth, besu — zero single points of failure",
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
          <StatsGrid stats={sectionStats} variant="section" />
        </div>
      </section>
    </>
  );
}
