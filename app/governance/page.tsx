import type { Metadata } from "next";
import { GovernanceHeroSection } from "@/components/governance/GovernanceHeroSection";
import { HowItWorksSection } from "@/components/governance/HowItWorksSection";
import { TreasuryFundingSection } from "@/components/governance/TreasuryFundingSection";
import { SafeguardsSection } from "@/components/governance/SafeguardsSection";
import { FAQSection } from "@/components/governance/FAQSection";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "How Olympia governance works — on-chain proposal submission, voting, treasury funding, and execution for Ethereum Classic.",
};

export default function GovernancePage() {
  return (
    <main>
      <GovernanceHeroSection />
      <HowItWorksSection />
      <TreasuryFundingSection />
      <SafeguardsSection />
      <FAQSection />
    </main>
  );
}
