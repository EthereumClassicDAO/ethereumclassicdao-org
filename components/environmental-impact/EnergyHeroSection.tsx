import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

const stats = [
  {
    value: "Largest PoW",
    label: "with native smart contracts",
    detail: "Full Solidity EVM on PoW consensus",
  },
  {
    value: "24/7",
    label: "Global energy demand signal",
    detail: "Continuous, permissionless, every time zone",
  },
  {
    value: "Any Scale",
    label: "Stranded energy monetization",
    detail: "Retail GPU through institutional ASIC",
  },
];

export function EnergyHeroSection() {
  return (
    <section className="hero-gradient noise-overlay relative pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Energy &amp; Sustainability
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Proof-of-Work as <span className="text-[var(--brand-green)]">Energy Infrastructure</span>
          </h1>
          <p className="mt-4 text-base text-[var(--text-muted)]">
            Mining is not waste &mdash; it is programmable demand. The
            distinction matters because it changes the frame entirely: PoW
            mining is the only industrial electricity consumer that ships to the
            energy rather than requiring the energy to ship to it. A solar farm
            in a remote valley, a gas well with no pipeline, a hydro
            installation with no transmission line &mdash; all of them are
            stranded. Proof-of-Work mining turns stranded into productive.
          </p>
          <p className="mt-3 text-base text-[var(--text-muted)]">
            Unlike every other industrial electricity consumer, miners respond
            to price in seconds. When power is cheap and abundant, they ramp up.
            When the grid needs capacity, they curtail &mdash; faster than any
            conventional demand-response program. This flexibility is what grid
            operators increasingly value: not just a buyer, but an elastic buyer
            that improves grid economics for every other participant.
          </p>
          <p className="mt-3 text-base text-[var(--text-muted)]">
            Ethereum Classic is the only Proof-of-Work network with full EVM
            execution. The same network that functions as a global energy demand
            signal also settles programmable financial contracts denominated
            across major global currencies on 300+ exchanges. That combination
            &mdash; PoW energy economics layered with smart contract
            infrastructure &mdash; is what distinguishes ETC as an energy
            platform, not just an energy consumer.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/regulation"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] px-5 py-2.5 text-sm font-semibold text-[var(--brand-green)] transition-colors hover:bg-[rgba(0,255,174,0.12)]"
            >
              Regulatory Framework →
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
