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
      "The Olympia Treasury is funded by basefee revenue, voluntary on-chain donations, and mining rewards directed to the treasury address. Block rewards and tips remain completely untouched and go entirely to miners. This creates sustainable, transparent funding without inflation or miner impact.",
  },
  {
    question: "Who can submit proposals?",
    answer:
      "Anyone can submit governance proposals on-chain. Olympia DAO members vote using non-transferable membership NFTs, while public sentiment is captured through futarchy prediction markets. Proposals define the action to execute and the supporting rationale.",
  },
  {
    question: "How does voting work?",
    answer:
      "Governance operates on two layers. The Olympia DAO uses non-transferable membership NFTs for critical protocol decisions — security maintenance, EVM parity, and client funding. Members cast on-chain votes during a defined voting period, and proposals require both quorum and majority to pass. Public participation is enabled through futarchy prediction markets, where anyone can stake on proposal outcomes to signal community sentiment and inform treasury allocation.",
  },
  {
    question: "What is the Olympia upgrade?",
    answer:
      "The Olympia upgrade is the most significant protocol enhancement in Ethereum Classic's history. It introduces improved fee markets, protocol-level treasury funding, and the foundation for on-chain governance. Independent client implementations support the upgrade.",
  },
  {
    question: "When does Olympia activate?",
    answer:
      "Olympia activates on the Mordor testnet first, followed by Ethereum Classic mainnet pending successful testnet validation. Exact activation dates are coordinated across the independent client teams.",
  },
  {
    question: "How are funds protected from misuse?",
    answer:
      "Multiple safeguards protect treasury funds: a configurable timelock delay on all approved proposals, three-layer on-chain sanctions screening (submission, voting, and execution), non-transferable voting tokens that prevent vote buying, and full on-chain transparency for every transaction.",
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
