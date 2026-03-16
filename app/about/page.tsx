import type { Metadata } from "next";
import { AboutSection } from "@/components/about/AboutSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { LeadershipSection } from "@/components/about/LeadershipSection";
import { RoadmapSection } from "@/components/about/RoadmapSection";
import { InfrastructureSection } from "@/components/about/InfrastructureSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ethereum Classic DAO — driving long-term development and institutional adoption of Ethereum Classic, the largest Proof-of-Work smart contract platform.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
      <ValuesSection />
      <LeadershipSection />
      <RoadmapSection />
      <InfrastructureSection />
    </main>
  );
}
