import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { OLYMPIA_DAO_URL, OLYMPIA_STATUS, ecipUrl } from "@/lib/network-links";

const ecips = [1113, 1114, 1117, 1118, 1119];

export function GovernanceHeroSection() {
  return (
    <section className="hero-gradient noise-overlay relative pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Governance
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-[var(--brand-green)]">Olympia</span> Governance
          </h1>
          <p className="mt-4">
            <span className="badge-pending">{OLYMPIA_STATUS}</span>
          </p>
          <p className="mt-6 text-lg text-[var(--text-muted)]">
            Olympia DAO is the governance ECIP-1113 specifies: the only route by
            which the base fee accumulating at the Sovereignty Vault address could
            be spent. Its members, the Core Contributors holding CoreNFT, would vote
            on funding proposals. Each proposal&rsquo;s recipients would be
            screened at the vote, and a program could be paid in milestones.
            Ecosystem Growth DAOs would take a season&rsquo;s funding by proposal
            and decide its allocation themselves.
          </p>
          <p className="mt-4 text-base text-[var(--text-muted)]">
            Protocol change stays with the ECIP process, and the network adopts an
            upgrade by running a client release that implements it. ECIP-1114
            names Ethereum Classic DAO LLC as the legal wrapper it contemplates for
            Olympia DAO, downstream of Olympia DAO in authority: once Olympia DAO is
            operating, Ethereum Classic DAO would carry out the off-chain
            obligations a passed proposal has fixed, and would decide none of them.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {ecips.map((n) => (
              <a
                key={n}
                href={ecipUrl(n)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
              >
                ECIP-{n}
              </a>
            ))}
          </div>
          <div className="mt-6">
            <a
              href={OLYMPIA_DAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
            >
              Visit the Olympia DAO site
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
