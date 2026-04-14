import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const brokerages = [
  { name: "Charles Schwab", tag: "IRA · Taxable", href: "https://www.schwab.com" },
  { name: "Fidelity Investments", tag: "IRA · Taxable", href: "https://www.fidelity.com" },
  { name: "Interactive Brokers", tag: "IRA · Taxable", href: "https://www.interactivebrokers.com" },
  { name: "E*Trade (Morgan Stanley)", tag: "IRA · Taxable", href: "https://us.etrade.com" },
  { name: "Webull", tag: "Taxable · Commission-free", href: "https://www.webull.com" },
  { name: "OTC Markets Group", tag: "Direct · OTCQX", href: "https://www.otcmarkets.com/stock/ETCG/company-info" },
];

const dataSources = [
  { label: "Yahoo Finance", ticker: "ETCG", href: "https://finance.yahoo.com/quote/ETCG" },
  { label: "Bloomberg", ticker: "ETCG:US", href: "https://www.bloomberg.com/quote/ETCG:US" },
  { label: "Seeking Alpha", ticker: "ETCG", href: "https://seekingalpha.com/symbol/ETCG" },
  { label: "CNBC", ticker: "ETCG", href: "https://www.cnbc.com/quotes/ETCG" },
];

export function TradFiAccessSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="etc-in-traditional-finance-heading" className="section-alt relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--brand-green)]">
              Brokerage Access
            </p>
            <h2 id="etc-in-traditional-finance-heading" className="mt-2 text-3xl font-bold tracking-tight">
              ETC in Traditional Finance
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              ETCG trades through standard brokerage infrastructure &mdash; no
              crypto exchange account, no self-custody wallet, no seed phrase,
              and no special onboarding. Search the ticker at any major brokerage
              and it settles alongside equities and ETFs with standard T+1
              settlement and the same tax reporting your brokerage already
              provides. It is IRA-eligible at major full-service platforms,
              meaning ETC exposure is accessible within the retirement account
              structures that most institutional mandates and individual
              investors already use. For allocators who cannot hold crypto
              directly, ETCG is the current path.
            </p>
          </FadeIn>

          {/* Brokerage grid */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {brokerages.map((b, i) => (
              <FadeIn key={b.name} delay={i * 60}>
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] px-4 py-4 transition-colors hover:border-[var(--brand-green)]/30"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold">{b.name}</p>
                    <span className="shrink-0 font-mono text-[10px] text-[var(--text-subtle)] transition-colors group-hover:text-[var(--brand-green)]">
                      ↗
                    </span>
                  </div>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wide text-[var(--brand-green)]/60">
                    {b.tag}
                  </p>
                </a>
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
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-semibold text-[var(--brand-green)] transition-opacity hover:opacity-70"
                  >
                    {d.ticker}
                  </a>
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
