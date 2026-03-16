import type { Metadata } from "next";
import { ScopeSection } from "@/components/about/ScopeSection";
import { ProhibitionsSection } from "@/components/about/ProhibitionsSection";
import { DonationsSection } from "@/components/about/DonationsSection";
import { InstitutionalSection } from "@/components/about/InstitutionalSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Scope, responsibilities, and limitations of the Ethereum Classic DAO LLC as defined by ECIP-1114.",
};

export default function AboutPage() {
  return (
    <main>
      <ScopeSection />
      <ProhibitionsSection />
      <DonationsSection />
      <InstitutionalSection />
    </main>
  );
}
