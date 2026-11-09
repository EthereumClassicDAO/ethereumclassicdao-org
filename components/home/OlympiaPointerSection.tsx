import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { OLYMPIA_STATUS } from "@/lib/network-links";

export function OlympiaPointerSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="olympia-pointer-heading" className="section-gradient py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
              Olympia
            </p>
            <h2 id="olympia-pointer-heading" className="mt-2 text-3xl font-bold tracking-tight">
              An Upgrade in Development
            </h2>
            <p className="mt-4">
              <span className="badge-pending">{OLYMPIA_STATUS}</span>
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--text-muted)]">
              Olympia is a proposed upgrade to Ethereum Classic, targeted for
              mainnet activation in 2027, and its ECIPs are drafts. As proposed, it
              would advance the execution layer through Dencun, Pectra and Fusaka
              and carry that work into Glamsterdam. It would also credit the
              EIP-1559 base fee to a treasury that only on-chain governance could
              spend, so that the maintenance of Ethereum Classic&rsquo;s public
              goods could have a funding source in the protocol.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
              ECIP-1114 names Ethereum Classic DAO LLC as the legal wrapper Olympia
              DAO would use for the off-chain acts an on-chain organization cannot
              perform, such as signing an audit engagement Olympia DAO has voted to
              fund. Ethereum Classic DAO would be downstream of Olympia DAO in
              authority, and it holds no role in Olympia until Olympia DAO is
              operating.
            </p>
            <Link
              href="/olympia"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
            >
              The Olympia proposal <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
