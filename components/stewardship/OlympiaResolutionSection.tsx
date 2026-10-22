import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function OlympiaResolutionSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="olympia-resolution-heading" className="section-alt py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
              The Resolution
            </p>
            <h2 id="olympia-resolution-heading" className="mt-2 text-3xl font-bold tracking-tight">
              Why Olympia Was Proposed
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-muted)]">
              Olympia was proposed to close this gap in the protocol itself. Its
              specifications are drafts. As proposed, it would add a fee market
              in which the basefee of every transaction is credited to a
              protocol treasury rather than destroyed, and on-chain governance
              through which that treasury could fund core client development,
              critical infrastructure and network security: the work described
              on this page. Block rewards and tips would go entirely to miners,
              as they do today.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-muted)]">
              Each organization that carried this work did so on its own
              balance sheet, for as long as it could. A funding source in the
              protocol would not close or leave.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-muted)]">
              The work does not wait for it. Ethereum Classic&rsquo;s core
              developers do the day-to-day work on the client and the
              infrastructure today, the DAO maintains and funds them as the
              funder of last resort, and sponsorship is how the stakeholders who
              depend on them share that cost.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href="/olympia"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
              >
                The Olympia upgrade
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/governance"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
              >
                How the treasury would be governed
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
