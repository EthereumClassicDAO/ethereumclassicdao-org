import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Cite } from "@/components/ui/Cite";
import {
  COOPERATIVE_TRANSITION_URL,
  CORE_GETH_HISTORY_URL,
  CORE_GETH_REPO_URL,
  CORE_GETH_REVIEW_POLICY_URL,
  ETC_ORG_URL,
} from "@/lib/network-links";

const properties = [
  {
    label: "Where it lives",
    value: "ethereumclassic",
    detail: "The community's organization since July 2016",
  },
  {
    label: "Who can change it",
    value: "More than one maintainer",
    detail: "Each repository has more than one admin",
  },
  {
    label: "How a change lands",
    value: "Reviewed pull request",
    detail: "Approved by a reviewer other than its author",
  },
];

const records = [
  {
    label: "Where each service the ETC Cooperative maintained continues",
    href: COOPERATIVE_TRANSITION_URL,
  },
  { label: "Core-Geth project history", href: CORE_GETH_HISTORY_URL },
  { label: "How a change reaches Core-Geth", href: CORE_GETH_REVIEW_POLICY_URL },
];

export function StandingHomeSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="standing-home-heading" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="standing-home-heading" className="text-3xl font-bold tracking-tight">
              One Home, Whoever Maintains It
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-muted)]">
              The <Cite href={ETC_ORG_URL}>ethereumclassic organization</Cite>{" "}
              has held the Ethereum Classic community&rsquo;s shared resources
              since July 2016: the website from the start, the ECIPs since 2018
              and, since December 2024,{" "}
              <Cite href={CORE_GETH_REPO_URL}>Core-Geth</Cite>. Keeping a
              reference client in the project&rsquo;s own organization is
              ordinary practice, as with Bitcoin Core at bitcoin/bitcoin and
              go-ethereum at ethereum/go-ethereum.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-muted)]">
              Before that, this work moved each time the organization carrying
              it closed or left. The client changed repositories, and the
              bootnodes and discovery lists changed operators. A repository in
              the community&rsquo;s organization stays where it is no matter who
              maintains or funds it, which is what makes it a fixed place for
              the network to point at.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {properties.map((p, i) => (
              <FadeIn key={p.label} delay={i * 80} className="h-full">
                <div className="flex h-full flex-col justify-between rounded-lg border-l-2 border-[var(--brand-green)] bg-[var(--bg-elevated)] p-4">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--brand-green)]">
                    {p.label}
                  </p>
                  <div>
                    <p className="mt-1.5 text-sm font-bold leading-snug tracking-tight">
                      {p.value}
                    </p>
                    <p className="mt-1 text-[10px] text-[var(--text-muted)]">{p.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={280}>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {records.map((record) => (
                <a
                  key={record.href}
                  href={record.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {record.label}
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
