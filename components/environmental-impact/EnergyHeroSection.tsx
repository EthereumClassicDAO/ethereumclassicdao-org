import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

const stats = [
  {
    value: "Only mature PoW",
    label: "with native smart contracts",
    detail: "Solidity and the EVM on PoW consensus",
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
            Mining is not waste: it is flexible, programmable demand for
            electricity. That distinction changes the frame. Proof-of-Work
            mining is an industrial electricity consumer that goes to the energy
            instead of requiring the energy to come to it. A solar farm in a
            remote valley, a gas well with no pipeline, a hydro installation
            with no transmission line: each produces energy that is stranded,
            and Proof-of-Work mining turns that stranded energy into productive
            output.
          </p>
          <p className="mt-3 text-base text-[var(--text-muted)]">
            Unlike most industrial electricity consumers, miners respond to
            price in seconds. When power is cheap and abundant, they ramp up;
            when the grid needs capacity, they curtail, faster than conventional
            demand-response programs. Grid operators increasingly value that
            flexibility: miners are not just buyers but elastic buyers, which
            improves grid economics for every other participant.
          </p>
          <p className="mt-3 text-base text-[var(--text-muted)]">
            Ethereum Classic is the only mature Proof-of-Work network with
            native smart contracts, running the EVM through Ethereum&rsquo;s Shanghai
            upgrade. The same network that acts as a global energy demand
            signal also settles smart contracts, and ETC trades against major
            world currencies in 300+ markets. That combination of Proof-of-Work
            energy economics and smart contract infrastructure makes ETC an
            energy platform, not just an energy consumer.
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
