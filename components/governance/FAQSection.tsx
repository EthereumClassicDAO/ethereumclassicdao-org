import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Accordion } from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "What is a DAO LLC?",
    answer:
      "A DAO LLC is a legal entity recognized under Wyoming law that wraps a decentralized autonomous organization in a traditional corporate structure. It provides limited liability protection to members while preserving on-chain governance. Ethereum Classic DAO LLC was registered in Wyoming in 2025 (Filing ID 2025-001671865).",
  },
  {
    question: "How is the Treasury funded?",
    answer:
      "The Olympia Treasury is funded by 100% of the EIP-1559 basefee — the portion of transaction fees that would otherwise be burned. Block rewards remain completely untouched and go entirely to miners. This creates sustainable development funding without inflation or miner impact.",
  },
  {
    question: "Who can submit proposals?",
    answer:
      "Any community member can submit a governance proposal on-chain. There are no gatekeepers or permission requirements. Proposals define the action to execute, the target contract, and supporting rationale.",
  },
  {
    question: "How does voting work?",
    answer:
      "Voting power is tied to soulbound (non-transferable) NFT membership tokens. During the voting period, holders cast on-chain votes for or against proposals. A quorum threshold must be met, and a majority of votes must approve the proposal for it to pass.",
  },
  {
    question: "What is the Olympia hard fork?",
    answer:
      "The Olympia hard fork is the most significant protocol upgrade in Ethereum Classic's history. It introduces EIP-1559 fee markets, protocol-level treasury funding, and sets the foundation for on-chain governance. Three independent client implementations (core-geth, besu, fukuii) support the upgrade.",
  },
  {
    question: "When does Olympia activate?",
    answer:
      "Olympia will first activate on the Mordor testnet for community validation and multi-client testing. Once testnet validation is complete, mainnet activation will follow. Specific activation blocks will be announced through official Ethereum Classic governance channels.",
  },
  {
    question: "How are funds protected from misuse?",
    answer:
      "Multiple safeguards protect treasury funds: a configurable timelock delay on all approved proposals, three-layer on-chain sanctions screening (submission, voting, and execution), soulbound voting tokens that prevent vote buying, and full on-chain transparency for every transaction.",
  },
  {
    question: "Is Ethereum Classic a security or commodity?",
    answer:
      "Ethereum Classic is positioned for classification as a digital commodity under the proposed CLARITY Act. As a Proof-of-Work blockchain with no pre-mine, no ICO, and decentralized governance, ETC aligns with commodity characteristics. The regulatory classification is pending congressional action.",
  },
];

export function FAQSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-gradient py-28">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Common questions about Olympia governance, treasury funding, and
              the DAO LLC structure.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-10">
              <Accordion items={faqItems} />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
