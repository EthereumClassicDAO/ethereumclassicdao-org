import type { Metadata } from "next";
import { RegulationHeroSection } from "@/components/regulation/RegulationHeroSection";
import { GlobalFrameworksSection } from "@/components/regulation/GlobalFrameworksSection";
import { ETCRegulatoryProfileSection } from "@/components/regulation/ETCRegulatoryProfileSection";
import { ClassicUSDSection } from "@/components/regulation/ClassicUSDSection";
import { ETCMarketDepthSection } from "@/components/regulation/ETCMarketDepthSection";
import { NetworkSecuritySection } from "@/components/regulation/NetworkSecuritySection";
import { ETCDecentralizationSection } from "@/components/regulation/ETCDecentralizationSection";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Regulation: CLARITY Act, MiCA, GENIUS Act",
  description:
    "ETC's regulatory profile: a digital commodity candidate under the CLARITY Act, an asset with no issuer under MiCA, and a GENIUS Act-aligned stablecoin platform.",
  keywords: [
    "CLARITY Act",
    "MiCA",
    "GENIUS Act",
    "JVCEA Green List",
    "digital commodity",
    "no issuer",
    "regulated stablecoin",
    "Classic USD",
    "USC stablecoin",
    "ETC regulation",
    "Ethereum Classic commodity",
    "crypto regulation",
    "VARA",
    "FSMA",
    "Proof-of-Work regulation",
    "PoW digital commodity",
    "Brale",
    "stablecoin EVM",
    "ETC regulatory profile",
    "blockchain regulatory compliance",
  ],
};

export default function RegulationPage() {
  return (
    <main>
      <RegulationHeroSection />
      <GlobalFrameworksSection />
      <ETCRegulatoryProfileSection />
      <ClassicUSDSection />
      <ETCMarketDepthSection />
      <NetworkSecuritySection />
      <ETCDecentralizationSection />
      <BreadcrumbJsonLd name="Regulation" path="/regulation" />
    </main>
  );
}
