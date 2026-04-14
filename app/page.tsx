import type { Metadata } from "next";
import { fetchEtcStats } from "@/lib/api/etc-stats";
import { fetchHashrateTHs } from "@/lib/api/hashrate";
import { MissionSection } from "@/components/home/MissionSection";

export const metadata: Metadata = {
  title: {
    absolute: "Ethereum Classic DAO — Wyoming DAO LLC",
  },
  description:
    "Ethereum Classic DAO LLC builds software and infrastructure for global adoption of Ethereum Classic — the largest Proof-of-Work blockchain with native EVM smart contracts. Incorporated in Wyoming, May 2025.",
};
import { NetworkStatsSection } from "@/components/home/NetworkStatsSection";
import { HowWeHelpSection } from "@/components/home/HowWeHelpSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { OlympiaEcosystemSection } from "@/components/home/OlympiaEcosystemSection";
import { GovernanceProcessSection } from "@/components/home/GovernanceProcessSection";

export default async function Home() {
  const [stats, hashrateTHs] = await Promise.all([fetchEtcStats(), fetchHashrateTHs()]);

  return (
    <main>
      <MissionSection />
      <NetworkStatsSection stats={stats} hashrateTHs={hashrateTHs} />
      <HowWeHelpSection />
      <WhatWeDoSection />
      <OlympiaEcosystemSection />
      <GovernanceProcessSection />
    </main>
  );
}
