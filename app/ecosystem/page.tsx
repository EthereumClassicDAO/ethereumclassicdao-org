import type { Metadata } from "next";
import { EcosystemHeroSection } from "@/components/ecosystem/EcosystemHeroSection";
import { ClientsSection } from "@/components/ecosystem/ClientsSection";
import { DeveloperLinksSection } from "@/components/ecosystem/DeveloperLinksSection";
import { PropertiesSection } from "@/components/ecosystem/PropertiesSection";

export const metadata: Metadata = {
  title: "Ecosystem",
  description:
    "Build on Ethereum Classic — open-source client implementations, developer resources, and Olympia governance infrastructure.",
};

export default function EcosystemPage() {
  return (
    <main>
      <EcosystemHeroSection />
      <ClientsSection />
      <DeveloperLinksSection />
      <PropertiesSection />
    </main>
  );
}
