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
            Proof-of-Work as Energy Infrastructure
          </h1>
          <p className="mt-4 text-base text-[var(--text-muted)]">
            Mining is not waste. It is programmable demand. Ethereum
            Classic&rsquo;s Proof-of-Work network functions as a global, 24/7,
            permissionless buyer of last resort for stranded and excess energy
            worldwide.
          </p>
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
