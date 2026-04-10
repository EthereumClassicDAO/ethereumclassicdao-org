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
            Two complementary systems designed to work together.
            Membership-based on-chain governance handles binding protocol
            decisions. Open prediction markets give the broader public a
            financially incentivized stake in network direction.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
