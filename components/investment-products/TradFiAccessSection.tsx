import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const brokerages = [
  { name: "Charles Schwab", tag: "IRA · Taxable" },
  { name: "Fidelity Investments", tag: "IRA · Taxable" },
  { name: "Interactive Brokers", tag: "IRA · Taxable" },
  { name: "E*Trade (Morgan Stanley)", tag: "IRA · Taxable" },
  { name: "Webull", tag: "Taxable · Commission-free" },
  { name: "OTC Markets Group", tag: "Direct · OTCQX" },
];

const dataSources = [
  { label: "Yahoo Finance", ticker: "ETCG" },
  { label: "Bloomberg", ticker: "ETCG:US" },
  { label: "Seeking Alpha", ticker: "ETCG" },
  { label: "CNBC", ticker: "ETCG" },
];

export function TradFiAccessSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-alt relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
              Brokerage Access
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              No crypto account required
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[var(--text-muted)]">
              ETCG is an OTCQX-listed grantor trust. Search the ticker at your
              existing brokerage — it trades alongside equities and ETFs.
              IRA-eligible at major full-service platforms.
            </p>
          </FadeIn>

          {/* Brokerage grid */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {brokerages.map((b, i) => (
              <FadeIn key={b.name} delay={i * 60}>
                <div className="rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] px-4 py-4 transition-colors hover:border-[var(--brand-green)]/20">
                  <p className="text-sm font-semibold">{b.name}</p>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wide text-[var(--brand-green)]/60">
                    {b.tag}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Data providers strip */}
          <FadeIn>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--divider)] pt-6">
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-[var(--text-subtle)]">
                Track on
              </span>
              {dataSources.map((d) => (
                <span key={d.label} className="text-sm text-[var(--text-muted)]">
                  {d.label}{" "}
                  <span className="font-mono font-semibold text-[var(--brand-green)]">
                    {d.ticker}
                  </span>
                </span>
              ))}
              <span className="ml-auto text-xs italic text-[var(--text-subtle)] opacity-60">
                OTC security. Not investment advice.
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
