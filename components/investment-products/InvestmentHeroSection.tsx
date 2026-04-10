import { FadeIn } from "@/components/ui/FadeIn";

const stats = [
  {
    value: "ETCG",
    label: "Est. 2018 · Oldest ETC regulated product",
    detail: "Grantor trust on OTCQX Best Market",
  },
  {
    value: "OTC Markets",
    label: "Available at major brokerages",
    detail: "Charles Schwab, Fidelity, Interactive Brokers",
  },
  {
    value: "ETF Conversion",
    label: "GBTC + ETHE conversions",
    detail: "Regulatory and legal template established",
  },
];

export function InvestmentHeroSection() {
  return (
    <section className="hero-gradient noise-overlay relative pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Institutional Products
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Institutional Access to Ethereum Classic
          </h1>
          <p className="mt-4 text-base text-[var(--text-muted)]">
            From regulated trust products trading today to the expanding
            investment product landscape. ETC is accessible through the same
            TradFi infrastructure used for equities, bonds, and commodities.
          </p>
          <a
            href="https://www.grayscale.com/funds/grayscale-ethereum-classic-trust"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] px-5 py-2.5 text-sm font-semibold text-[var(--brand-green)] transition-colors hover:bg-[rgba(0,255,174,0.12)]"
          >
            Grayscale Ethereum Classic Trust →
          </a>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 100}>
              <div className="rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6">
                <p className="text-2xl font-bold tracking-tight text-[var(--brand-green)]">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-medium">{s.label}</p>
                <p className="mt-2 text-xs text-[var(--text-subtle)]">
                  {s.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
