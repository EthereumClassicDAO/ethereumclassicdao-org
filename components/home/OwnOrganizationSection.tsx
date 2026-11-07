import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Cite } from "@/components/ui/Cite";
import { OWN_ORGANIZATION_PROPERTIES } from "@/lib/public-goods";
import { COOPERATIVE_TRANSITION_URL, CORE_GETH_SPONSOR_URL } from "@/lib/network-links";

export function OwnOrganizationSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="own-organization-heading" className="section-alt py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="own-organization-heading" className="text-3xl font-bold tracking-tight">
              Kept in the Project&rsquo;s Own Organization
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-muted)]">
              Every repository in the ethereumclassic organization has more than
              one admin and more than one maintainer, so no single person or
              employer is a point of failure. The repositories stay where they are
              no matter who maintains or funds them, so the software Ethereum
              Classic runs on{" "}
              <Cite href={CORE_GETH_SPONSOR_URL}>
                belongs to the network rather than to whoever is paying for it
                that year
              </Cite>
              .
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {OWN_ORGANIZATION_PROPERTIES.map((p, i) => (
              <FadeIn key={p.label} delay={i * 80} className="h-full">
                <div className="flex h-full flex-col justify-between rounded-lg border-l-2 border-[var(--brand-green)] bg-[var(--bg-elevated)] p-4">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--brand-green)]">
                    {p.label}
                  </p>
                  <div>
                    <p className="mt-1.5 text-sm font-bold leading-snug tracking-tight">{p.value}</p>
                    <p className="mt-1 text-[10px] text-[var(--text-muted)]">{p.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={280}>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
              Before you move a node, a pool or an application to a new source of
              software or data,{" "}
              <Cite href={COOPERATIVE_TRANSITION_URL}>
                confirm which organization publishes it
              </Cite>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
