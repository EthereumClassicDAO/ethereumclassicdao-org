import type { Metadata } from "next";
import { EcosystemHeroSection } from "@/components/ecosystem/EcosystemHeroSection";
import { NetworkConfigSection } from "@/components/ecosystem/NetworkConfigSection";
import { DeveloperToolingSection } from "@/components/ecosystem/DeveloperToolingSection";
import { ClientsSection } from "@/components/ecosystem/ClientsSection";
import { MiningSection } from "@/components/ecosystem/MiningSection";
import { EquipmentSection } from "@/components/ecosystem/EquipmentSection";
import { InstitutionalProductsSection } from "@/components/ecosystem/InstitutionalProductsSection";
import { DeveloperLinksSection } from "@/components/ecosystem/DeveloperLinksSection";
import { PropertiesSection } from "@/components/ecosystem/PropertiesSection";

export const metadata: Metadata = {
  title: "Ecosystem",
  description:
    "Build on Ethereum Classic — full EVM developer tooling, chain configuration, client implementations, mining, and institutional products.",
};

export default function EcosystemPage() {
  return (
    <main>
      <EcosystemHeroSection />
      <NetworkConfigSection />
      <DeveloperToolingSection />
      <ClientsSection />
      <MiningSection />
      <EquipmentSection />
      <InstitutionalProductsSection />
      <DeveloperLinksSection />
      <PropertiesSection />
    </main>
  );
}
