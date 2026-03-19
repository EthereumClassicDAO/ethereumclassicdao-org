import { FadeIn } from "@/components/ui/FadeIn";

export function GovernanceHeroSection() {
  return (
    <section className="hero-gradient noise-overlay relative pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Governance
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Olympia Governance Framework
          </h1>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            Membership-based governance with on-chain proposals, voting, and
            execution. Transparent, auditable, and built on Ethereum Classic.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
