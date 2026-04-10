import type { Metadata } from "next";
import { RegulationHeroSection } from "@/components/regulation/RegulationHeroSection";
import { GlobalFrameworksSection } from "@/components/regulation/GlobalFrameworksSection";
import { ETCRegulatoryProfileSection } from "@/components/regulation/ETCRegulatoryProfileSection";
import { ClassicUSDSection } from "@/components/regulation/ClassicUSDSection";
import { ETCMarketDepthSection } from "@/components/regulation/ETCMarketDepthSection";
import { ETCDecentralizationSection } from "@/components/regulation/ETCDecentralizationSection";

export const metadata: Metadata = {
  title: "Regulatory Framework",
  description:
    "Ethereum Classic inherits two distinct regulatory trajectories: the digital commodity path that Proof-of-Work networks established under the CLARITY Act, and the programmable finance frameworks being built around smart contract platforms under the GENIUS Act and MiCA. Classic USD ($USC) is live on ETC mainnet.",
};

export default function RegulationPage() {
  return (
    <main>
      <RegulationHeroSection />
      <GlobalFrameworksSection />
      <ETCRegulatoryProfileSection />
      <ClassicUSDSection />
      <ETCMarketDepthSection />
      <ETCDecentralizationSection />
    </main>
  );
}
