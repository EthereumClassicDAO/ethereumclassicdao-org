import { fetchEtcStats } from "@/lib/api/etc-stats";
import { MissionSection } from "@/components/home/MissionSection";
import { NetworkStatsSection } from "@/components/home/NetworkStatsSection";
import { EtcOverviewSection } from "@/components/home/EtcOverviewSection";
import { HowWeHelpSection } from "@/components/home/HowWeHelpSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { OlympiaEcosystemSection } from "@/components/home/OlympiaEcosystemSection";
import { GovernanceProcessSection } from "@/components/home/GovernanceProcessSection";

export default async function Home() {
  const stats = await fetchEtcStats();

  return (
    <main>
      <MissionSection />
      <NetworkStatsSection stats={stats} />
      <EtcOverviewSection stats={stats} />
      <HowWeHelpSection />
      <WhatWeDoSection />
      <OlympiaEcosystemSection />
      <GovernanceProcessSection />
    </main>
  );
}
