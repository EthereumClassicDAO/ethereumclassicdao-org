import type { Metadata } from "next";
import { RegulationHeroSection } from "@/components/regulation/RegulationHeroSection";
import { GlobalFrameworksSection } from "@/components/regulation/GlobalFrameworksSection";
import { ETCRegulatoryProfileSection } from "@/components/regulation/ETCRegulatoryProfileSection";
import { ClassicUSDSection } from "@/components/regulation/ClassicUSDSection";
import { ETCMarketDepthSection } from "@/components/regulation/ETCMarketDepthSection";
import { NetworkSecuritySection } from "@/components/regulation/NetworkSecuritySection";
import { ETCDecentralizationSection } from "@/components/regulation/ETCDecentralizationSection";

export const metadata: Metadata = {
  title: "Ethereum Classic Regulatory Compliance — CLARITY Act, MiCA, GENIUS Act, FSA Green List",
  description:
    "Ethereum Classic inherits two distinct regulatory trajectories: the digital commodity path that Proof-of-Work networks established under the CLARITY Act, and the programmable finance frameworks being built around smart contract platforms under the GENIUS Act and MiCA. Classic USD ($USC) is live on ETC mainnet — the first GENIUS Act-aligned stablecoin on a Proof-of-Work EVM.",
  keywords: [
    "CLARITY Act",
    "MiCA",
    "GENIUS Act",
    "FSA Green List",
    "digital commodity",
    "decentralized asset",
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
    </main>
  );
}
