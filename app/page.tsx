import { MissionSection } from "@/components/home/MissionSection";
import { NetworkStatsSection } from "@/components/home/NetworkStatsSection";
import { HowWeHelpSection } from "@/components/home/HowWeHelpSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { OlympiaEcosystemSection } from "@/components/home/OlympiaEcosystemSection";
import { GovernanceProcessSection } from "@/components/home/GovernanceProcessSection";

export default function Home() {
  return (
    <main>
      <MissionSection />
      <NetworkStatsSection />
      <HowWeHelpSection />
      <WhatWeDoSection />
      <OlympiaEcosystemSection />
      <GovernanceProcessSection />
    </main>
  );
}
