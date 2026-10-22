import type { Metadata } from "next";
import { fetchEtcStats } from "@/lib/api/etc-stats";
import { fetchHashrateTHs } from "@/lib/api/hashrate";
import { MissionSection } from "@/components/home/MissionSection";

export const metadata: Metadata = {
  title: {
    absolute: "Ethereum Classic DAO — Stewarding ETC Core Development & Public Goods",
  },
  description:
    "Ethereum Classic DAO LLC is the standing legal entity that maintains and funds Ethereum Classic's public goods (the Core-Geth client, the network's bootnodes and peer discovery lists) as the funder of last resort. Ethereum Classic's core developers and community contributors do the day-to-day work in the community's own repositories. Ethereum Classic is the largest Proof-of-Work blockchain with native EVM smart contracts. A Wyoming DAO LLC, incorporated May 2025.",
};
import { NetworkStatsSection } from "@/components/home/NetworkStatsSection";
import { EtcIntersectionSection } from "@/components/home/EtcIntersectionSection";
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
      <EtcIntersectionSection />
      <HowWeHelpSection />
      <WhatWeDoSection />
      <OlympiaEcosystemSection />
      <GovernanceProcessSection />
    </main>
  );
}
