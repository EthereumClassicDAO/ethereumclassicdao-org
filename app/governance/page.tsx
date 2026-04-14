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
