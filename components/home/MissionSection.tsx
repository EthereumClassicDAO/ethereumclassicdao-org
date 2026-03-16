import { FadeIn } from "@/components/ui/FadeIn";
import { StatsGrid } from "@/components/ui/StatsGrid";

const networkStats = [
  { value: "170+", unit: "TH/s", label: "Network Hashrate" },
  { value: "3", label: "Independent Client Implementations" },
  { value: "11", label: "Protocol Proposals" },
  { value: "2016", label: "Network Origin" },
];

const entityMetrics = [
  { label: "Incorporated", value: "May 2025", detail: "Wyoming DAO LLC" },
  { label: "Status", value: "Active", detail: "Good Standing" },
  { label: "Network", value: "Proof-of-Work", detail: "EVM Compatible" },
  { label: "Asset Class", value: "Digital Commodity", detail: null, footnote: true },
];

export function MissionSection() {
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
            Driving adoption and long-term development of Ethereum Classic
            &mdash; the largest Proof-of-Work smart contract platform.
          </p>
          <p className="mt-4 max-w-2xl text-base text-[var(--text-muted)]">
            Governance, treasury management, and protocol coordination for
            the only EVM-compatible blockchain secured by Proof-of-Work.
          </p>
        </FadeIn>

        <div className="mt-16">
          <StatsGrid stats={networkStats} variant="hero" />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4">
          {entityMetrics.map((m, i) => (
            <FadeIn key={m.label} delay={i * 80}>
              <div className="rounded-lg bg-[var(--bg-elevated)] border-l-2 border-[var(--brand-green)] p-4">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  {m.label}
                </p>
                <p className="mt-1.5 text-lg font-bold tracking-tight">
                  {m.value}
                  {m.footnote && (
                    <span className="text-[var(--text-subtle)]">*</span>
                  )}
                </p>
                {m.detail && (
                  <p className="mt-0.5 text-[10px] text-[var(--text-muted)]">
                    {m.detail}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-4 text-xs text-[var(--text-subtle)]">
          * Classification pending under the CLARITY Act
        </p>
      </div>
    </section>
  );
}
