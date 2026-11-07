import type { Metadata } from "next";
import { TreasuryHeroSection } from "@/components/treasury/TreasuryHeroSection";
import { TreasuryFundingSection } from "@/components/treasury/TreasuryFundingSection";
import { TreasuryGuaranteesSection } from "@/components/treasury/TreasuryGuaranteesSection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Olympia Treasury: The Proposed Design",
  description:
    "As proposed, the Olympia Treasury would hold the EIP-1559 base fee at a permanent address, the Sovereignty Vault, spendable only through on-chain governance.",
  keywords: [
    "Olympia Treasury",
    "Ethereum Classic treasury",
    "protocol treasury",
    "Sovereignty Vault",
    "ECIP-1111",
    "ECIP-1112",
    "ECIP-1113",
    "EIP-1559 base fee",
    "base fee revenue",
    "protocol-funded development",
    "on-chain treasury",
    "OpenZeppelin Governor",
    "soulbound governance token",
    "core development funding",
    "ETC funding model",
  ],
};

export default function TreasuryPage() {
  return (
    <main>
      <TreasuryHeroSection />
      <TreasuryFundingSection />
      <TreasuryGuaranteesSection />
      <SectionDivider />
      <BreadcrumbJsonLd name="Treasury" path="/treasury" />
    </main>
  );
}
