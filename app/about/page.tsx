import type { Metadata } from "next";
import { AboutSection } from "@/components/about/AboutSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { LeadershipSection } from "@/components/about/LeadershipSection";
import { OlympiaUpgradeSection } from "@/components/about/OlympiaUpgradeSection";
import { RoadmapSection } from "@/components/about/RoadmapSection";
import { PropertiesSection } from "@/components/ecosystem/PropertiesSection";
import { InfrastructureSection } from "@/components/about/InfrastructureSection";

export const metadata: Metadata = {
  title: "About Ethereum Classic DAO LLC",
  description:
    "Ethereum Classic DAO LLC is the Wyoming DAO LLC that maintains and funds Ethereum Classic's public goods as the funder of last resort, building the governance and institutional frameworks for the largest Proof-of-Work blockchain with native EVM smart contracts. Ethereum Classic is a digital commodity candidate under the CLARITY Act, a decentralized asset under MiCA, and recognized on Japan's FSA Green List.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
      <InfrastructureSection />
      <LeadershipSection />
      <ValuesSection />
      <OlympiaUpgradeSection />
      <PropertiesSection />
      <RoadmapSection />
    </main>
  );
}
