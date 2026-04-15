import type { Metadata } from "next";
import { GovernanceHeroSection } from "@/components/governance/GovernanceHeroSection";
import { HowItWorksSection } from "@/components/governance/HowItWorksSection";
import { TreasuryFundingSection } from "@/components/governance/TreasuryFundingSection";
import { StewardshipSection } from "@/components/governance/StewardshipSection";
import { FAQSection } from "@/components/governance/FAQSection";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "Olympia Governance Architecture",
  description:
    "Three-layer governance for Ethereum Classic: binding on-chain DAO decisions via OpenZeppelin Governor 5.x, open futarchy prediction markets for public participation, and the network participant layer. Protocol treasury funded by EIP-1559 basefee. Wyoming DAO LLC executes on-chain approvals in the real world.",
  keywords: [
    "Olympia DAO",
    "on-chain governance",
    "OpenZeppelin Governor",
    "futarchy",
    "prediction markets",
    "protocol treasury",
    "EIP-1559 basefee",
    "ECIP-1112",
    "Ethereum Classic governance",
    "Wyoming DAO LLC",
    "blockchain governance",
    "decentralized governance",
    "membership NFT",
    "treasury DAO",
    "on-chain proposal",
    "DAO voting",
    "governance smart contract",
  ],
};

export default function GovernancePage() {
  return (
    <main>
      <GovernanceHeroSection />
      <HowItWorksSection />
      <TreasuryFundingSection />
      <SectionDivider />
      <StewardshipSection />
      <FAQSection />
    </main>
  );
}
