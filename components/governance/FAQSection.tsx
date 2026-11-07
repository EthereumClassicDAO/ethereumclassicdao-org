import { type ReactNode } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Accordion } from "@/components/ui/Accordion";
import { WYOMING_FILING_URL } from "@/lib/network-links";

const faqItems: { question: string; answer: ReactNode }[] = [
  {
    question: "What is a DAO LLC?",
    answer: (
      <>
        A DAO LLC is a limited liability company formed under Wyoming&apos;s Decentralized Autonomous Organization Supplement, which recognizes a DAO as a form of LLC and gives its members limited liability. Ethereum Classic DAO LLC was registered in Wyoming in 2025 (Filing ID{" "}
        <a
          href={WYOMING_FILING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand-green)] transition hover:opacity-80"
        >
          2025-001671865
        </a>
        ). ECIP-1114 names it as the legal wrapper it contemplates for Olympia DAO, for the off-chain acts an on-chain organization cannot perform: once Olympia DAO is operating, it would carry out the off-chain obligations a passed proposal has fixed, such as the engagement for an audit the DAO voted to fund. It is downstream of Olympia DAO in authority, holds no on-chain role, and until Olympia DAO is operating holds no role in anything ECIP-1114 specifies.
      </>
    ),
  },
  {
    question: "Who is responsible for the Olympia upgrade?",
    answer:
      "Olympia is a set of draft ECIPs in the ECIPs repository, and it follows the ECIP process, ECIP-1000. Its activation blocks are decided at the Olympia Core Devs Call and recorded in ECIP-1111. Client releases that implement it are their maintainers' to publish: Core-Geth's from ethereumclassic/core-geth, where Ethereum Classic's core developers do the day-to-day work and Ethereum Classic DAO LLC maintains and funds it today as the funder of last resort.",
  },
  {
    question: "What role has the ETC Cooperative played, and what changes with Olympia?",
    answer:
      "The ETC Cooperative, a US 501(c)(3) non-profit, funded Ethereum Classic's public goods from 2017, and funded and maintained Core-Geth from January 2022 through the Mystique and Spiral upgrades. It entered maintenance mode at the end of 2024, and the services it maintained continue in the ethereumclassic organization, where Ethereum Classic's core developers do the day-to-day work and Ethereum Classic DAO LLC maintains and funds those services today as the funder of last resort. Olympia was proposed to give that work a funding source in the protocol, one that would not depend on any single organization's continued support.",
  },
  {
    question: "What is the significance of Grayscale's support for Ethereum Classic?",
    answer:
    (
      <>
        Grayscale launched the Grayscale Ethereum Classic Trust ({" "}
        <a
          href="https://www.otcmarkets.com/stock/ETCG/quote"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand-green)] transition hover:opacity-80"
        >
          ETCG
        </a>
        ) in 2018, years before Bitcoin ETFs existed as a product category, and became a major institutional donor to the ETC Cooperative, indirectly funding the core client development of the network underpinning its product. The trust&apos;s capital comes from a globally distributed pool of retail and institutional investors, so the funding that reached Ethereum Classic&apos;s development through the Cooperative did not originate with a single entity. Bitcoin, Litecoin and Dogecoin have no native smart contracts, so their development funding depends on off-chain organizations. Olympia proposes an on-chain path instead: once the Treasury&apos;s address is published, any holder, through ETCG, a direct wallet or any future product, could contribute to it directly.
      </>
    ),
  },
  {
    question: "How is the Treasury funded?",
    answer:
      "As proposed, by the EIP-1559 base fee, which ECIP-1111 would credit to the Treasury transaction by transaction. Ethereum destroys that fee, and Ethereum Classic does not charge one today, so nothing is taken from what miners earn: block rewards and priority-fee tips go to miners unchanged. Once its address is published, anyone could also contribute to it directly, and a miner could name it as a block's beneficiary; no ECIP requires either.",
  },
  {
    question: "Who can participate in governance?",
    answer:
      "Olympia DAO's members, the Core Contributors holding CoreNFT, would vote on funding proposals. After a published bootstrap list, members are admitted by a governance vote on a contributor's record, one at a time, with no committee. Submitting a proposal is open to any address while the proposal threshold is zero, and to members above it. Ecosystem Growth DAOs are open to anyone without membership. Node operators, miners and exchanges take part in protocol change through the client releases they run.",
  },
  {
    question: "How does voting work?",
    answer:
      "Each member holds one CoreNFT, a soulbound token carrying one vote that cannot be delegated or transferred. Votes are For, Against or Abstain. A proposal passes when it reaches quorum and its For votes exceed its Against votes, and it then waits out the Timelock's delay before it executes. Quorum, the voting delay, the voting period and the Timelock delay are on-chain settings, changed only by proposal.",
  },
  {
    question: "What does EVM alignment to Glamsterdam mean for builders?",
    answer:
      "ECIP-1121 would advance Ethereum Classic's execution layer through Dencun, Pectra and Fusaka and carry that work into Glamsterdam, adopting most of the execution-layer EIPs that do not depend on Proof-of-Stake or blob data availability. Contracts could use transient storage, MCOPY, the BLS12-381 and secp256r1 precompiles and EIP-7702 account code, and with EIP-1559 active, tooling that assumes type-2 transactions would no longer need an Ethereum Classic-specific path.",
  },
  {
    question: "When does Olympia activate?",
    answer:
      "Olympia is a proposal, targeted for mainnet activation in 2027. Its activation blocks for Mordor and mainnet are TBD: they are decided at the Olympia Core Devs Call and recorded in ECIP-1111, once the governance contracts are deployed, reviewed and rehearsed on Mordor.",
  },
  {
    question: "How are treasury funds protected from misuse?",
    answer:
      "As specified, funds leave only by a proposal that passes a vote, waits out a public timelock delay and executes through the Governor, and there is no admin key, multisig or committee. The contracts that hold or move funds are unmodified OpenZeppelin, CoreNFT votes cannot be bought or delegated, and the interface members vote through screens each recipient against a sanctions list (ECIP-1119). Every action is reconstructible from event logs, and no off-chain entity can unilaterally approve or veto one.",
  },
  {
    question: "Is Ethereum Classic a security or commodity?",
    answer:
    (
      <>
        In the EU, ETC qualifies as a decentralized asset under MiCA, in force since December 2024, exempt from per-asset issuer requirements. In Japan, ETC is recognized on the FSA Green List. In the US, ETC is positioned as a digital commodity candidate under the CLARITY Act, pending Senate passage. As a Proof-of-Work network with no pre-mine, no ICO and no foundation controlling the protocol, Ethereum Classic has no single party that controls it.{" "}
        <a
          href="/regulation"
          className="text-[var(--brand-green)] transition hover:opacity-80"
        >
          View ETC&apos;s full regulatory profile →
        </a>
      </>
    ),
  },
];

export function FAQSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="frequently-asked-questions-heading" className="section-gradient py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="frequently-asked-questions-heading" className="text-3xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Technical questions about how Olympia&apos;s governance would work,
              institutional questions about the DAO LLC and the regulatory
              profile, and practical questions about who could take part and how
              the Treasury would be funded.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-10">
              <Accordion items={faqItems} defaultAllOpen />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
