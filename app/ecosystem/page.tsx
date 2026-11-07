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
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Ethereum Classic Developer Ecosystem",
  description:
    "Build on Ethereum Classic with Foundry, Hardhat, wagmi, viem and ethers.js: Chain IDs 61 (mainnet) and 63 (Mordor), public RPC endpoints, and the explorers.",
  keywords: [
    "Ethereum Classic developer tools",
    "EVM compatibility",
    "Foundry ETC",
    "Hardhat ETC",
    "wagmi ETC",
    "viem ETC",
    "ethers.js ETC",
    "chain ID 61",
    "Mordor testnet",
    "chain ID 63",
    "ETC mining",
    "ETChash",
    "ASIC mining ETC",
    "GPU mining ETC",
    "ETCG",
    "Grayscale ETC",
    "Solidity ETC",
    "EVM smart contracts",
    "ETC RPC",
    "deploy Ethereum Classic",
  ],
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
      <BreadcrumbJsonLd name="Ecosystem" path="/ecosystem" />
    </main>
  );
}
