import type { Metadata } from "next";
import { fetchEtcStats } from "@/lib/api/etc-stats";
import { fetchHashrateTHs } from "@/lib/api/hashrate";
import { MissionSection } from "@/components/home/MissionSection";

export const metadata: Metadata = {
  title: {
    absolute: "Ethereum Classic DAO — Stewarding ETC Core Development & Public Goods",
  },
  description:
    "Ethereum Classic DAO LLC is the standing legal entity that maintains and funds Ethereum Classic's public goods (the Core-Geth client, the network's bootnodes and peer discovery lists) as the funder of last resort. Ethereum Classic's core developers and community contributors do the day-to-day work in the ethereumclassic GitHub organization. Ethereum Classic is the largest Proof-of-Work blockchain with native EVM smart contracts. A Wyoming DAO LLC, incorporated May 2025.",
  // The root route revalidates under the name /index, so the layout's relative "./" would resolve
  // the canonical and og:url to /index. These are absolute instead.
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ethereum Classic DAO",
    images: [
      {
        url: "https://ethereumclassicdao.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ethereum Classic DAO — Building Software & Infrastructure for Global Adoption",
        type: "image/png",
      },
    ],
  },
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
