import { FadeIn } from "@/components/ui/FadeIn";
import { StatsGrid } from "@/components/ui/StatsGrid";
import type { EtcStats } from "@/lib/api/etc-stats";
import { formatUSD, formatCompact, formatPercent } from "@/lib/format";

const entityCards = [
  { label: "Incorporated", value: "May 2025", detail: "Wyoming DAO LLC" },
  { label: "Status", value: "Active", detail: "Good Standing" },
  { label: "Network", value: "Proof-of-Work", detail: "EVM Compatible" },
];

const regulatoryCards = [
  { label: "CLARITY Act", value: "Digital Commodity", detail: "CFTC · United States" },
  { label: "GENIUS Act", value: "Stablecoin Platform", detail: "United States" },
  { label: "MiCA", value: "Decentralized Asset", detail: "European Union" },
  { label: "FSA Green List", value: "Recognized Asset", detail: "Japan" },
];

export function MissionSection({ stats }: { stats: EtcStats }) {
  const networkStats = [
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
  return (
    <section className="hero-gradient noise-overlay geo-lines grid-overlay relative min-h-dvh pt-40 pb-32">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Wyoming DAO LLC
          </p>
          <h1 className="mt-4 text-6xl font-bold leading-[0.9] tracking-[-0.04em] md:text-8xl">
            Ethereum Classic DAO
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-[var(--text-secondary)] md:text-2xl">
            Building the software and infrastructure for global adoption of
            Ethereum Classic &mdash; the largest Proof-of-Work smart contract
            platform.
          </p>
          <p className="mt-4 max-w-2xl text-base text-[var(--text-muted)]">
            Maintaining core software, critical infrastructure, and ecosystem
            alignment for the only EVM-compatible blockchain secured by
            Proof-of-Work &mdash; positioned for US regulatory compliance
            under the CLARITY Act and GENIUS Act.
          </p>
        </FadeIn>

        <div className="mt-16">
          <StatsGrid stats={networkStats} variant="hero" />
        </div>

        {/* Entity cards */}
        <div className="mt-16 grid grid-cols-3 gap-3">
          {entityCards.map((m, i) => (
            <FadeIn key={m.label} delay={i * 80}>
              <div className="flex flex-col justify-between rounded-lg bg-[var(--bg-elevated)] border-l-2 border-[var(--brand-green)] p-4 min-h-[80px]">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  {m.label}
                </p>
                <div>
                  <p className="mt-1.5 text-sm font-bold tracking-tight leading-snug">
                    {m.value}
                  </p>
                  {m.detail && (
                    <p className="mt-1 text-[10px] text-[var(--text-muted)]">
                      {m.detail}
                    </p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Regulatory positioning cards */}
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {regulatoryCards.map((m, i) => (
            <FadeIn key={m.label} delay={300 + i * 80}>
              <div className="flex flex-col justify-between rounded-lg bg-[var(--bg-elevated)] border-l-2 border-[var(--brand-green)] p-4 min-h-[80px]">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  {m.label}
                </p>
                <div>
                  <p className="mt-1.5 text-sm font-bold tracking-tight leading-snug">
                    {m.value}
                  </p>
                  {m.detail && (
                    <p className="mt-1 text-[10px] text-[var(--text-muted)]">
                      {m.detail}
                    </p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
