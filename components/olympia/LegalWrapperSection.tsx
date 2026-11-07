import { Building2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ecipUrl } from "@/lib/network-links";

/**
 * What ECIP-1114 contemplates for Ethereum Classic DAO LLC under Olympia. Every sentence is read
 * from ECIP-1114 §"Off-Chain Legal Interface and Donations" and ECIP-1113 §"Prohibited Features".
 */
export function LegalWrapperSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="legal-wrapper-heading" className="py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                <Building2 size={20} aria-hidden="true" className="text-[var(--brand-green)]" />
              </div>
              <h2 id="legal-wrapper-heading" className="text-2xl font-bold tracking-tight">
                Ethereum Classic DAO LLC and Olympia
              </h2>
            </div>
            <div className="mt-5 max-w-3xl space-y-4 text-sm leading-relaxed text-[var(--text-muted)]">
              <p>
                ECIP-1114 names Ethereum Classic DAO LLC, Wyoming Filing ID
                2025-001671865, as the legal wrapper it contemplates for Olympia
                DAO. An on-chain organization has no legal personality: it cannot
                sign a contract, engage an auditor or pay a contractor in fiat. A
                registered entity supplies that personality for the off-chain acts,
                without acquiring authority over the on-chain organization.
              </p>
              <p>
                Once Olympia DAO is operating, the LLC would carry out the off-chain
                obligations a passed proposal has fixed. If the DAO votes to fund a
                security audit, for example, the LLC signs the engagement with the
                auditing firm; the proposal, not the LLC, set the auditor, the scope
                and the amount. In ECIP-1114&rsquo;s words, the LLC is downstream of
                Olympia DAO in authority: Olympia DAO is not its subsidiary, and the
                LLC holds no position in the ECIP process, which is ECIP-1000&rsquo;s.
              </p>
              <p>
                No off-chain entity can unilaterally approve or veto a governance
                action, the LLC holds no on-chain role, and the Treasury&rsquo;s
                balance moves only by a passed, timelocked proposal. Donations the
                LLC receives off-chain are its own and are accounted for separately.
                Until Olympia DAO is operating, the LLC holds no role in anything
                ECIP-1114 specifies.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] text-[var(--text-subtle)]">
              <a
                href={ecipUrl(1114)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--text-primary)]"
              >
                ECIP-1114 §&ldquo;Off-Chain Legal Interface and Donations&rdquo;
              </a>
              <a
                href={ecipUrl(1113)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--text-primary)]"
              >
                ECIP-1113 §&ldquo;Prohibited Features&rdquo;
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
