import type { Metadata } from "next";
import { GovernanceHeroSection } from "@/components/governance/GovernanceHeroSection";
import { HowItWorksSection } from "@/components/governance/HowItWorksSection";
import { StewardshipSection } from "@/components/governance/StewardshipSection";
import { FAQSection } from "@/components/governance/FAQSection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Olympia Governance, as Proposed",
  description:
    "Olympia DAO would spend its Treasury only by votes of CoreNFT members, fund Ecosystem Growth DAOs by season, and leave protocol change to ECIP-1000.",
  keywords: [
    "Olympia DAO",
    "on-chain governance",
    "OpenZeppelin Governor",
    "CoreNFT",
    "Olympia Funding Proposal",
    "Ecosystem Growth DAO",
    "milestone funding",
    "sanctions screening",
    "protocol treasury",
    "EIP-1559 base fee",
    "ECIP-1113",
    "ECIP-1114",
    "ECIP-1117",
    "Ethereum Classic governance",
    "Wyoming DAO LLC",
    "DAO voting",
  ],
};

export default function GovernancePage() {
  return (
    <main>
      <GovernanceHeroSection />
      <HowItWorksSection />
      <SectionDivider />
      <StewardshipSection />
      <FAQSection />
      <BreadcrumbJsonLd name="Governance" path="/governance" />
    </main>
  );
}
