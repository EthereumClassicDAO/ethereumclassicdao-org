import type { Metadata } from "next";
import { AboutSection } from "@/components/about/AboutSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { LeadershipSection } from "@/components/about/LeadershipSection";
import { InfrastructureSection } from "@/components/about/InfrastructureSection";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "About Ethereum Classic DAO LLC",
  description:
    "About Ethereum Classic DAO LLC, the Wyoming DAO LLC that maintains and funds ETC's public goods as funder of last resort: its work, members and values.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
      <InfrastructureSection />
      <LeadershipSection />
      <ValuesSection />
      <BreadcrumbJsonLd name="About" path="/about" />
    </main>
  );
}
