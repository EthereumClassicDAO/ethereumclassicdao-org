import { FadeIn } from "@/components/ui/FadeIn";

export function EcosystemHeroSection() {
  return (
    <section className="hero-gradient noise-overlay relative pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Ecosystem
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Build on Ethereum Classic
          </h1>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            Open-source tools, client implementations, and governance
            infrastructure for the largest Proof-of-Work smart contract platform.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
