import type { Metadata } from "next";
import { EnergyHeroSection } from "@/components/environmental-impact/EnergyHeroSection";
import { POWEnergyEconomicsSection } from "@/components/environmental-impact/POWEnergyEconomicsSection";
import { ETCUniquePositionSection } from "@/components/environmental-impact/ETCUniquePositionSection";
import { StrandedEnergySection } from "@/components/environmental-impact/StrandedEnergySection";
import { ETCAsEnergyMarketSection } from "@/components/environmental-impact/ETCAsEnergyMarketSection";
import { MiningHardwareSection } from "@/components/environmental-impact/MiningHardwareSection";
import { GlobalHashrateSection } from "@/components/environmental-impact/GlobalHashrateSection";
import { EquipmentSection } from "@/components/ecosystem/EquipmentSection";

export const metadata: Metadata = {
  title: "Proof-of-Work as Energy Infrastructure — ETC Mining, Hashrate, and Stranded Energy",
  description:
    "Ethereum Classic's Proof-of-Work network functions as programmable, elastic energy demand. Stranded hydroelectric, flared wellhead gas, curtailed renewables, and off-peak industrial power all find a buyer. The largest Proof-of-Work network with native smart contracts, operating continuously since July 2015.",
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
    </main>
  );
}
