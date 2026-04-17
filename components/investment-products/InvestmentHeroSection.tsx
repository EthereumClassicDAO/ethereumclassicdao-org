import Link from "next/link";
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
            Institutional <span className="text-[var(--brand-green)]">Access</span> to Ethereum Classic
          </h1>
          <p className="mt-4 text-base text-[var(--text-muted)]">
            ETC has had regulated investment product exposure since May 2018
            &mdash; before most institutional digital asset infrastructure
            existed. The Grayscale Ethereum Classic Trust was among the earliest
            digital asset grantor trusts, applying the same structure Grayscale
            used for GBTC (2013) and ETHE (2017) to Ethereum Classic. It
            predated the ETF era and has traded as an SEC-reporting security for
            over six years.
          </p>
          <p className="mt-3 text-base text-[var(--text-muted)]">
            The product landscape is now expanding. GBTC converted to a spot
            Bitcoin ETF in January 2024. ETHE followed in July 2024. Regulatory
            precedent for the trust-to-ETF conversion path is established, and
            every issuer that built infrastructure for BTC and ETH investment
            products already has the custody relationships, legal framework, and
            distribution agreements needed for an ETC product. ETC is accessible
            today through the same brokerage accounts used for equities, bonds,
            and commodities &mdash; no crypto exchange, no self-custody, and no
            special onboarding required.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.grayscale.com/funds/grayscale-ethereum-classic-trust"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] px-5 py-2.5 text-sm font-semibold text-[var(--brand-green)] transition-colors hover:bg-[rgba(0,255,174,0.12)]"
            >
              Grayscale Ethereum Classic Trust →
            </a>
            <Link
              href="/regulation"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--divider)] bg-[var(--bg-elevated)] px-5 py-2.5 text-sm font-semibold text-[var(--text-muted)] transition-colors hover:border-[var(--border-brand)] hover:text-[var(--brand-green)]"
            >
              Regulatory Framework →
            </Link>
            <Link
              href="/environmental-impact"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--divider)] bg-[var(--bg-elevated)] px-5 py-2.5 text-sm font-semibold text-[var(--text-muted)] transition-colors hover:border-[var(--border-brand)] hover:text-[var(--brand-green)]"
            >
              Energy Infrastructure →
            </Link>
          </div>
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
