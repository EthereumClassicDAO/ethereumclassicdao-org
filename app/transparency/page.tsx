import type { Metadata } from "next";
import { ReportsSection } from "@/components/transparency/ReportsSection";
import { PrinciplesSection } from "@/components/transparency/PrinciplesSection";
import { DocumentsSection } from "@/components/transparency/DocumentsSection";

export const metadata: Metadata = {
  title: "Transparency & Disclosures",
  description:
    "Public reports, governance disclosures, and treasury documentation for Ethereum Classic DAO LLC. Covers operational reporting, governance decisions, development funding, and the open development model established by Olympia.",
};

export default function TransparencyPage() {
  return (
    <main>
      <ReportsSection />
      <PrinciplesSection />
      <DocumentsSection />
    </main>
  );
}
