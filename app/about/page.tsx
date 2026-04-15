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
    "Ethereum Classic DAO LLC is a Wyoming-registered DAO LLC building the software, governance infrastructure, and institutional frameworks for Ethereum Classic — the largest Proof-of-Work blockchain with native EVM smart contracts. Recognized under the CLARITY Act, MiCA, and Japan's FSA Green List.",
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
