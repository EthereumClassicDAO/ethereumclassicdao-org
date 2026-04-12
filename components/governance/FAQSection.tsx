import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Accordion } from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "What is a DAO LLC?",
    answer:
      "A DAO LLC is a legal entity recognized under Wyoming law that wraps a decentralized autonomous organization in a traditional corporate structure. It provides limited liability protection to members while preserving on-chain governance. Ethereum Classic DAO LLC was registered in Wyoming in 2025 (Filing ID 2025-001671865). The Wyoming DAO LLC executes on-chain decisions in the real world, including contracts, vendor agreements, and institutional relationships, on behalf of what the Olympia DAO approves on-chain.",
  },
  {
    question: "Who is responsible for the Olympia upgrade?",
    answer:
      "Olympia is coordinated by the same developers, organizations, and community stewards who have delivered every Ethereum Classic network upgrade since 2016: Gotham, Die Hard, Defuse Difficulty Bomb, Thanos, and the full EVM compatibility series spanning Gas Reprice, Atlantis, Agharta, Phoenix, Magneto, Mystique, and Spiral. The ETC Cooperative, a US 501(c)(3) non-profit, funds Ethereum Classic's client development teams and has managed the hard fork coordination process throughout that history. Stakeholder outreach, client release sequencing, and cross-client testing are all established practice. Olympia is a significant upgrade carried forward by a team with a clean delivery record across a decade of ETC network upgrades.",
  },
  {
    question: "What role has the ETC Cooperative played, and what changes with Olympia?",
    answer:
      "The ETC Cooperative is a US 501(c)(3) non-profit that has funded Ethereum Classic's core client development for years, contributing millions of dollars to the network's client teams and infrastructure through every upgrade cycle. Every hard fork, every client release, and every cross-client coordination effort has been backed by their balance sheet. Olympia is what they were building toward: a protocol-native funding model that does not depend on any single organization's continued generosity. The model changes, not the commitment. The ETC Cooperative continues as an active steward, and any developer, mining operation, hardware manufacturer, investment product issuer, or individual worldwide can now contribute directly on-chain without fielding a team or managing a non-profit to do it. The regulatory clarity now taking shape globally, with ETC classified as a digital commodity under the CLARITY Act, a decentralized asset under MiCA, and a qualifying stablecoin platform under the GENIUS Act, means the full spectrum of participants can engage with confidence.",
  },
  {
    question: "What is the significance of Grayscale's support for Ethereum Classic?",
    answer:
      "Grayscale launched the Grayscale Ethereum Classic Trust (ETCG) in 2018, years before Bitcoin ETFs existed as a product category, and became a major institutional donor to the ETC Cooperative, indirectly funding the network's core client development at a time when no other investment product issuer was doing anything comparable. What Grayscale was practicing on Ethereum Classic in 2018 is now a recognized trend: ETF issuers funding protocol development, corporate treasury strategies reinvesting in network ecosystems. They were years ahead. Taking that model on-chain is only possible on Ethereum Classic because ETC is the only Proof-of-Work blockchain with native smart contracts. Bitcoin, Litecoin, and Dogecoin depend entirely on off-chain organizations and institutional trust to fund development. Olympia DAO eliminates that dependency, making ETC the first PoW network to fund its own core development through a fully transparent, permissionless, on-chain process, opening that path to every holder, whether through ETCG, a direct wallet, or any future investment product.",
  },
  {
    question: "How is the Treasury funded?",
    answer:
      "The Olympia Treasury is funded by basefee revenue, voluntary on-chain donations, and mining rewards directed to the treasury address. Block rewards and tips remain completely untouched and go entirely to miners. Futarchy prediction market activity generates additional transaction volume that flows back into the treasury as basefee revenue. Any stakeholder, whether exchanges, custodians, miners, investment product issuers, or institutions holding ETC on behalf of fund shareholders, can contribute directly on-chain with no overhead. Stakeholders who prefer a traditional giving model can contribute through the ETC Cooperative, a US 501(c)(3) non-profit that accepts tax-deductible donations.",
  },
  {
    question: "Who can participate in governance?",
    answer:
      "Three systems operate in parallel. Binding protocol decisions are made by Olympia DAO members holding non-transferable membership NFTs — any EVM developer worldwide can submit proposals and bid for development funds, infrastructure contracts, or service agreements with no employment relationship or preferred vendor status required. Public participation is open to everyone through futarchy prediction markets, where anyone can stake on proposal outcomes without membership and earn financial rewards for accurate predictions. The network participant layer provides a third governance signal: miners, exchanges, wallets, and infrastructure providers govern through the client software they run. The three tiers are mutually dependent — developers build the software, users create the value, and network participants make it real.",
  },
  {
    question: "How does voting work?",
    answer:
      "Governance operates on three complementary layers. The Olympia DAO uses non-transferable membership NFTs for binding protocol decisions scoped to core client software, critical infrastructure, network security, treasury allocation, and emergency responses — members cast weighted on-chain votes, and proposals require both quorum and majority to pass. Open futarchy prediction markets allow anyone to stake on proposal outcomes without membership, earn financial rewards for accurate predictions, and generate basefee revenue that flows back to the protocol treasury. The network participant layer provides a third governance signal: miners, exchanges, wallets, and infrastructure providers run the software that makes the network real. Protocol changes achieve distributed consensus when the broader network adopts them — an expression of interdependence across all three tiers.",
  },
  {
    question: "What does EVM alignment to Fusaka mean for builders?",
    answer:
      "Olympia closes years of EVM divergence in a single upgrade. ECIP-1121 delivers the remaining execution-layer improvements from Dencun, Pectra, and Fusaka that are independent of Proof-of-Stake. After Olympia, Solidity 0.8.x, Foundry, Hardhat, wagmi, viem, and ethers.js all work on ETC without modification, patching, or ETC-specific forks. One codebase deploys to every EVM chain. Before Olympia, ETC could not claim full compatibility with current Ethereum tooling. After Olympia, it can.",
  },
  {
    question: "When does Olympia activate?",
    answer:
      "Olympia activates on Mordor testnet first. The mainnet activation block is announced after a successful Mordor run and a coordinated stakeholder readiness check with exchanges, mining pools, node operators, and infrastructure providers. The process follows the same sequence used for every previous ETC hard fork. All client implementations publish Olympia-compatible releases well before activation.",
  },
  {
    question: "How are treasury funds protected from misuse?",
    answer:
      "Multiple safeguards protect treasury funds. A configurable timelock delay on all approved proposals gives the community time to review before execution. Three-layer on-chain sanctions screening at proposal submission, voting, and execution prevents sanctioned addresses from participating or receiving funds. Non-transferable voting tokens prevent vote buying. All treasury transactions are publicly recorded and independently verifiable on-chain. The Wyoming DAO LLC provides an additional layer of legal accountability for real-world execution.",
  },
  {
    question: "Is Ethereum Classic a security or commodity?",
    answer:
      "ETC's three-layer governance architecture strengthens its regulatory profile across all major frameworks. In the EU, ETC qualifies as a decentralized asset under MiCA, in force since December 2024, exempt from per-asset issuer requirements. In Japan, ETC is recognized on the FSA Green List. In the US, ETC is positioned as a digital commodity candidate under the CLARITY Act, pending Senate passage. The Olympia DAO, futarchy markets, and the network participant layer together ensure no single party controls the protocol — the core decentralization criterion each framework applies.",
  },
];

export function FAQSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="frequently-asked-questions-heading" className="section-gradient py-28">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 id="frequently-asked-questions-heading" className="text-3xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Common questions about Olympia governance, treasury funding, and
              the DAO LLC structure.
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
