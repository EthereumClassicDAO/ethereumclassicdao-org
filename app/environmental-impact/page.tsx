import type { Metadata } from "next";
import { EnergyHeroSection } from "@/components/environmental-impact/EnergyHeroSection";
import { POWEnergyEconomicsSection } from "@/components/environmental-impact/POWEnergyEconomicsSection";
import { ETCUniquePositionSection } from "@/components/environmental-impact/ETCUniquePositionSection";
import { StrandedEnergySection } from "@/components/environmental-impact/StrandedEnergySection";
import { ETCAsEnergyMarketSection } from "@/components/environmental-impact/ETCAsEnergyMarketSection";
import { MiningHardwareSection } from "@/components/environmental-impact/MiningHardwareSection";

export const metadata: Metadata = {
  title: "Proof-of-Work as Energy Infrastructure",
  description:
    "Ethereum Classic's Proof-of-Work network functions as programmable, elastic energy demand. Stranded hydroelectric, flared wellhead gas, curtailed renewables, and off-peak industrial power all find a buyer. The largest PoW network with native smart contracts, operating continuously since 2015.",
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
    </main>
  );
}
