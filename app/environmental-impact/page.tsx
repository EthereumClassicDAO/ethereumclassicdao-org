import type { Metadata } from "next";
import { EnergyHeroSection } from "@/components/environmental-impact/EnergyHeroSection";
import { POWEnergyEconomicsSection } from "@/components/environmental-impact/POWEnergyEconomicsSection";
import { ETCUniquePositionSection } from "@/components/environmental-impact/ETCUniquePositionSection";
import { StrandedEnergySection } from "@/components/environmental-impact/StrandedEnergySection";
import { ETCAsEnergyMarketSection } from "@/components/environmental-impact/ETCAsEnergyMarketSection";
import { MiningHardwareSection } from "@/components/environmental-impact/MiningHardwareSection";
import { GlobalHashrateSection } from "@/components/environmental-impact/GlobalHashrateSection";
import { EquipmentSection } from "@/components/ecosystem/EquipmentSection";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Proof-of-Work as Energy Infrastructure",
  description:
    "Ethereum Classic's Proof-of-Work mining as flexible energy demand: a buyer for stranded hydro, flared gas and curtailed renewables, on GPU and ASIC hardware.",
  keywords: [
    "Proof-of-Work energy",
    "ETC mining energy",
    "stranded energy",
    "curtailed renewables",
    "flared gas mining",
    "ETChash energy",
    "ETC hashrate",
    "programmable energy demand",
    "GPU mining energy",
    "ASIC energy efficiency",
    "blockchain sustainability",
    "PoW environmental impact",
    "mining energy market",
    "Ethereum Classic mining",
    "post-Merge mining infrastructure",
  ],
};

export default function EnvironmentalImpactPage() {
  return (
    <main>
      <EnergyHeroSection />
      <POWEnergyEconomicsSection />
      <ETCUniquePositionSection />
      <StrandedEnergySection />
      <ETCAsEnergyMarketSection />
      <MiningHardwareSection />
      <GlobalHashrateSection />
      <EquipmentSection />
      <BreadcrumbJsonLd name="Environmental Impact" path="/environmental-impact" />
    </main>
  );
}
