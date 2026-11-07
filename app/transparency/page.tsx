import type { Metadata } from "next";
import { ReportsSection } from "@/components/transparency/ReportsSection";
import { PrinciplesSection } from "@/components/transparency/PrinciplesSection";
import { DocumentsSection } from "@/components/transparency/DocumentsSection";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Transparency & Disclosures",
  description:
    "Public reports and disclosures from Ethereum Classic DAO LLC: donations received, administrative costs, fiat conversions and proposal execution records.",
};

export default function TransparencyPage() {
  return (
    <main>
      <ReportsSection />
      <PrinciplesSection />
      <DocumentsSection />
      <BreadcrumbJsonLd name="Transparency" path="/transparency" />
    </main>
  );
}
