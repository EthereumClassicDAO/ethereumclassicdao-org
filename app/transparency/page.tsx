import type { Metadata } from "next";
import { ReportsSection } from "@/components/transparency/ReportsSection";
import { DocumentsSection } from "@/components/transparency/DocumentsSection";

export const metadata: Metadata = {
  title: "Disclosures",
  description:
    "Public reports and disclosure documents for Ethereum Classic DAO LLC.",
};

export default function TransparencyPage() {
  return (
    <main>
      <ReportsSection />
      <DocumentsSection />
    </main>
  );
}
