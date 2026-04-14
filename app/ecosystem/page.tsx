import type { Metadata } from "next";
import { EcosystemHeroSection } from "@/components/ecosystem/EcosystemHeroSection";
import { NetworkConfigSection } from "@/components/ecosystem/NetworkConfigSection";
import { DeveloperToolingSection } from "@/components/ecosystem/DeveloperToolingSection";
import { ClientsSection } from "@/components/ecosystem/ClientsSection";
import { MiningSection } from "@/components/ecosystem/MiningSection";
import { InstitutionalProductsSection } from "@/components/ecosystem/InstitutionalProductsSection";
import { IntegrationsSection } from "@/components/ecosystem/IntegrationsSection";
import { DeveloperLinksSection } from "@/components/ecosystem/DeveloperLinksSection";
import { PropertiesSection } from "@/components/ecosystem/PropertiesSection";

export const metadata: Metadata = {
  title: "Build on Ethereum Classic — EVM Developer Ecosystem",
  description:
    "Full EVM compatibility on Ethereum Classic. Foundry, Hardhat, wagmi, viem, and ethers.js work without modification. Chain IDs: 61 (mainnet), 63 (Mordor testnet). GPU and ASIC mining. Institutional access via ETCG. The same toolchain used for Ethereum deploys to ETC after Olympia.",
};

export default function EcosystemPage() {
  return (
    <main>
      <EcosystemHeroSection />
      <NetworkConfigSection />
      <DeveloperToolingSection />
      <DeveloperLinksSection />
      <ClientsSection />
      <MiningSection />
      <InstitutionalProductsSection />
      <IntegrationsSection />
      <PropertiesSection />
    </main>
  );
}
