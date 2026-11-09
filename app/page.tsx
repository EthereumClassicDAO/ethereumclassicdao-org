import type { Metadata } from "next";
import { fetchEtcStats } from "@/lib/api/etc-stats";
import { fetchHashrateTHs } from "@/lib/api/hashrate";
import { MissionSection } from "@/components/home/MissionSection";
import { NetworkStatsSection } from "@/components/home/NetworkStatsSection";
import { EtcIntersectionSection } from "@/components/home/EtcIntersectionSection";
import { MaintainedSection } from "@/components/home/MaintainedSection";
import { MaintenanceRecordSection } from "@/components/home/MaintenanceRecordSection";
import { OwnOrganizationSection } from "@/components/home/OwnOrganizationSection";
import { OlympiaPointerSection } from "@/components/home/OlympiaPointerSection";

export const metadata: Metadata = {
  title: {
    absolute: "Ethereum Classic DAO — Stewarding ETC Core Development & Public Goods",
  },
  description:
    "Ethereum Classic DAO LLC, formed in May 2025, maintains and funds Core-Geth and ETC's public goods as their funder of last resort. Core developers do the work.",
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
        alt: "Ethereum Classic DAO: Stewarding immutable infrastructure for programmable global finance",
        type: "image/png",
      },
    ],
  },
};

export default async function Home() {
  const [stats, hashrateTHs] = await Promise.all([fetchEtcStats(), fetchHashrateTHs()]);

  return (
    <main>
      <MissionSection />
      <NetworkStatsSection stats={stats} hashrateTHs={hashrateTHs} />
      <EtcIntersectionSection />
      <MaintainedSection />
      <MaintenanceRecordSection />
      <OwnOrganizationSection />
      <OlympiaPointerSection />
    </main>
  );
}
