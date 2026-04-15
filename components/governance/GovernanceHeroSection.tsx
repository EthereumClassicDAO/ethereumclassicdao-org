import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function GovernanceHeroSection() {
  return (
    <section className="hero-gradient noise-overlay relative pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
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
            financially incentivized stake in network direction. Network
            participants — miners, exchanges, wallets, and infrastructure
            providers — govern through the client software they choose to run.
          </p>
          <p className="mt-4 text-base text-[var(--text-muted)]">
            For the first time, core development funding is open to every
            developer in the EVM ecosystem — submitted on-chain, decided
            on-chain, executed on-chain. The operating model changes, not
            the commitment.
          </p>
          <p className="mt-4 text-base text-[var(--text-muted)]">
            Governance is implemented through the OpenZeppelin Governor 5.x
            framework on the largest Proof-of-Work smart contract platform —
            the only Proof-of-Work network to fund its own core development
            through a fully transparent, permissionless, on-chain process.
            The Wyoming-registered Ethereum Classic DAO LLC handles what
            on-chain governance cannot directly execute: off-chain contracts,
            vendor agreements, and milestone disbursements that require a
            named legal counterparty. On-chain decisions, off-chain execution.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
              ECIP-1113
            </span>
            <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
              ECIP-1114
            </span>
            <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
              ECIP-1117
            </span>
            <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
              ECIP-1118
            </span>
            <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
              ECIP-1119
            </span>
            <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
              Software Releases
            </span>
          </div>
          <div className="mt-6">
            <a
              href="https://olympiadao.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
            >
              Visit the Olympia DAO
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
