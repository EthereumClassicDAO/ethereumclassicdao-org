import { StatsGrid } from "@/components/ui/StatsGrid";
import { SectionDivider } from "@/components/ui/SectionDivider";

const stats = [
  {
    value: "170+",
    unit: "TH/s",
    label: "Network Hashrate",
    context: "Post-Merge mining infrastructure",
  },
  {
    value: "300+",
    label: "Trading Markets",
    context: "Binance, Coinbase, OKX, Kraken, Upbit, Bybit, and 20+ more exchanges",
  },
  {
    value: "3",
    label: "Independent Clients",
    context: "core-geth, besu, fukuii",
  },
  {
    value: "2016",
    label: "Network Origin",
    context: "Oldest EVM-compatible blockchain",
  },
];

export function NetworkStatsSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section className="section-deep py-24">
        <div className="mx-auto max-w-6xl px-6">
          <StatsGrid stats={stats} variant="section" />
        </div>
      </section>
    </>
  );
}
