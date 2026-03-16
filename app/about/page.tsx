import type { Metadata } from "next";
import { AboutSection } from "@/components/about/AboutSection";
import { InfrastructureSection } from "@/components/about/InfrastructureSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ethereum Classic DAO — the organizational entity behind Ethereum Classic's Olympia DAO, building governance infrastructure for the largest Proof-of-Work smart contract platform.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
      <InfrastructureSection />
    </main>
  );
}
