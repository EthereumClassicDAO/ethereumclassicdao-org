import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const paid = [
  {
    label: "Client development",
    detail: "Tracking upstream security fixes, cutting and verifying releases",
  },
  {
    label: "Bootnode servers",
    detail: "The entry points a new node contacts first",
  },
  {
    label: "Domains",
    detail: "The names the discovery lists and services are published under",
  },
];

export function FundingGapSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="funding-gap-heading" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="funding-gap-heading" className="text-3xl font-bold tracking-tight">
              The Gap Behind the Instability
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-muted)]">
              Ethereum Classic has no protocol-layer funding mechanism for its
              critical infrastructure or its core developers. No part of the
              network&rsquo;s fee or issuance revenue pays for the client, the
              bootnodes or the discovery lists. Whether that work is done has
              depended on whether some organization chose to pay for it.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-muted)]">
              That dependency is a source of instability for the network itself.
              When the funding ends, the maintenance ends with it, and a
              consensus client that is not maintained accumulates unpatched
              vulnerabilities while exchanges, mining pools and custodians go on
              running it.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-muted)]">
              Ethereum Classic&rsquo;s core developers maintain this work, and
              the DAO pays for it today. A funder of last resort keeps the work
              alive. It does not make the work
              sustainable, and it leaves the network one backer away from the
              same gap.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="mt-10 text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
              What the DAO pays for today
            </p>
          </FadeIn>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {paid.map((item, i) => (
              <FadeIn key={item.label} delay={140 + i * 80} className="h-full">
                <div className="h-full rounded-lg border-l-2 border-[var(--brand-green)] bg-[var(--bg-elevated)] p-4">
                  <p className="text-sm font-bold tracking-tight">{item.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
