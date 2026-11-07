import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Accordion } from "@/components/ui/Accordion";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { OlympiaEcipsSection } from "@/components/olympia/OlympiaEcipsSection";
import { OlympiaActivationSection } from "@/components/olympia/OlympiaActivationSection";
import { OlympiaEvmSection } from "@/components/olympia/OlympiaEvmSection";
import { OlympiaGovernanceSection } from "@/components/olympia/OlympiaGovernanceSection";
import { LegalWrapperSection } from "@/components/olympia/LegalWrapperSection";
import { OlympiaClientsSection } from "@/components/olympia/OlympiaClientsSection";
import { PropertiesSection } from "@/components/ecosystem/PropertiesSection";
import { OLYMPIA_STATUS } from "@/lib/network-links";

const ECIPS_REPO_URL = "https://github.com/ethereumclassic/ECIPs";

export const metadata: Metadata = {
  title: "Olympia: EVM Alignment Through Glamsterdam",
  description:
    "Olympia is a proposed Ethereum Classic upgrade: EVM alignment through Glamsterdam and an EIP-1559 base fee credited to a treasury. Draft ECIPs, block TBD.",
  keywords: [
    "Olympia upgrade",
    "Olympia proposal",
    "Ethereum Classic upgrade",
    "Glamsterdam",
    "EVM alignment",
    "ECIP-1111",
    "ECIP-1112",
    "ECIP-1113",
    "ECIP-1114",
    "ECIP-1121",
    "EIP-1559",
    "Sovereignty Vault",
    "Olympia DAO",
    "Olympia Treasury",
    "Dencun",
    "Pectra",
    "Fusaka",
    "EIP-7702",
    "EIP-1153",
    "MCOPY",
    "Ethereum Classic node upgrade",
    "Core-Geth",
  ],
};

// Plain strings: the page's FAQPage structured data is built from this array.
const faqItems: { question: string; answer: string }[] = [
  {
    question: "Is Olympia active?",
    answer:
      "No. Olympia is a proposal: its ECIPs are drafts and its activation block is TBD. It is targeted for mainnet activation in 2027, and no released client implements it.",
  },
  {
    question: "When would Olympia activate?",
    answer:
      "It is targeted for mainnet activation in 2027. The activation blocks for Mordor and mainnet are decided at the Olympia Core Devs Call and recorded in ECIP-1111, and both read TBD. Before an activation block is scheduled, the governance contracts are deployed, reviewed and rehearsed on Mordor, and the Treasury's address is published.",
  },
  {
    question: "How would the base fee reach the Treasury?",
    answer:
      "ECIP-1111 activates EIP-1559 and credits each transaction's base fee to the Sovereignty Vault address, inside that transaction's own state transition, where Ethereum destroys it. The credit runs no contract code. Ethereum Classic has no base fee today, so nothing is taken from what miners earn now.",
  },
  {
    question: "Would miner rewards change?",
    answer:
      "No. ECIP-1111 leaves block rewards and priority-fee tips unaffected, and the base fee it introduces goes to the Treasury rather than to miners. Paying miners from base-fee revenue is the subject of ECIP-1115, through ordinary funding proposals, and of ECIP-1116, a separate hard fork after Olympia.",
  },
  {
    question: "Who could spend from the Treasury?",
    answer:
      "Only Olympia DAO, by a funding proposal that passes a vote of CoreNFT members, is queued in the Timelock and executes after its delay. The Governor is the Timelock's sole executor, and there is no admin key, multisig or committee. The Treasury's address is permanent, and the logic behind it can be repaired by a proposal.",
  },
  {
    question: "Would Olympia DAO decide protocol upgrades?",
    answer:
      "No. Protocol change remains with the ECIP process, ECIP-1000. A funding proposal can pay for work on Ethereum Classic without conferring any authority over its specification, and an upgrade takes effect only when client teams release it and the network runs it.",
  },
  {
    question: "What would Ethereum Classic DAO LLC do?",
    answer:
      "ECIP-1114 names Ethereum Classic DAO LLC as the legal wrapper it contemplates for Olympia DAO, for the off-chain acts an on-chain organization cannot perform, without acquiring authority over it. Once Olympia DAO is operating, the LLC would carry out the off-chain obligations a passed proposal has fixed, such as signing the engagement for a security audit the DAO voted to fund. It is downstream of Olympia DAO in authority, holds no on-chain role and no position in the ECIP process, and holds no role in anything ECIP-1114 specifies until Olympia DAO is operating.",
  },
  {
    question: "Does Olympia adopt all of Glamsterdam?",
    answer:
      "No. ECIP-1121 includes Glamsterdam and adopts part of its set. Some of its EIPs are blocked on a dependency that is out of scope, and those tied to Proof-of-Stake or blob data availability are excluded or deferred. The EIP lists on this page give each one.",
  },
  {
    question: "Which client should I run?",
    answer:
      "Core-Geth, the recommended client: run its v1.13 line. Fukuii, which its maintainers mark alpha, is an alternative to try beside it. No released client implements Olympia.",
  },
  {
    question: "What happens to a node that does not upgrade?",
    answer:
      "Once the activation blocks are set and client releases implement them, a node that has not moved to such a release by the activation block stops following the chain at that block. Operators move by the steps their client's maintainers publish.",
  },
];

export default function OlympiaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient relative pt-32 pb-16">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
              Olympia
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              The <span className="text-[var(--brand-green)]">Olympia</span> Upgrade
            </h1>
            <p className="mt-4">
              <span className="badge-pending">{OLYMPIA_STATUS}</span>
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-6 text-lg text-[var(--text-muted)]">
              Olympia is a proposed upgrade to Ethereum Classic, targeted for
              mainnet activation in 2027. Its ECIPs are drafts, and{" "}
              <a
                href={ECIPS_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-[var(--text-primary)]"
              >
                the ECIPs repository
              </a>{" "}
              is the authority on what it specifies.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[var(--text-muted)]">
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]" />
                <span>
                  <span className="font-semibold text-[var(--text-primary)]">EVM alignment (ECIP-1121):</span>{" "}
                  advances the execution layer through Dencun, Pectra and Fusaka, and
                  carries that work into Glamsterdam.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]" />
                <span>
                  <span className="font-semibold text-[var(--text-primary)]">A base fee market (ECIP-1111):</span>{" "}
                  EIP-1559 and EIP-3198, with the base fee credited to a permanent
                  address where Ethereum destroys it. Block rewards and priority-fee
                  tips are unaffected.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]" />
                <span>
                  <span className="font-semibold text-[var(--text-primary)]">A treasury and its governance (ECIP-1112, ECIP-1113):</span>{" "}
                  the Sovereignty Vault address, and Olympia DAO, the only route by
                  which the balance there could be spent.
                </span>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <a
                href="#activation"
                className="text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
              >
                Activation &darr;
              </a>
              <Link
                href="/treasury"
                className="text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
              >
                The Treasury &rarr;
              </Link>
              <Link
                href="/governance"
                className="text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
              >
                Governance &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <OlympiaEcipsSection />
      <OlympiaActivationSection />
      <OlympiaEvmSection />
      <OlympiaGovernanceSection />
      <LegalWrapperSection />
      <PropertiesSection hubLink={false} />
      <OlympiaClientsSection />

      {/* FAQ */}
      <section aria-labelledby="olympia-faq-heading" className="section-gradient py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 id="olympia-faq-heading" className="mb-2 text-2xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mb-8 text-sm text-[var(--text-muted)]">
              Common questions about the Olympia proposal, its Treasury, its
              governance, and node operations.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <Accordion items={faqItems} defaultAllOpen />
          </FadeIn>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
      <BreadcrumbJsonLd name="Olympia" path="/olympia" />
    </main>
  );
}
