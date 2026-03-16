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
            The only Proof-of-Work blockchain with native EVM smart contracts.
            Every framework, library, and IDE that works with Ethereum works
            with Ethereum Classic &mdash; just change the chain ID.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
