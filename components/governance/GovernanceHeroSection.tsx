import { FadeIn } from "@/components/ui/FadeIn";

export function GovernanceHeroSection() {
  return (
    <section className="hero-gradient noise-overlay relative pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Governance
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Olympia Governance Framework
          </h1>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            Three complementary systems designed to work together.
            Binding on-chain governance handles core protocol decisions,
            informed by open prediction markets that give any participant a
            financially incentivized stake in network direction. And network
            participants — miners, exchanges, wallets, and infrastructure
            providers — govern through the client software they choose to run.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
