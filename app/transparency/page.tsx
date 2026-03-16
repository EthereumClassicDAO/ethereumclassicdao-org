import type { Metadata } from "next";
import { ReportsSection } from "@/components/transparency/ReportsSection";
import { AuditTrailSection } from "@/components/transparency/AuditTrailSection";
import { DisclosuresSection } from "@/components/transparency/DisclosuresSection";

export const metadata: Metadata = {
  title: "Transparency",
  description:
    "Public reports, hash-bound auditability, and required disclosures for the Ethereum Classic DAO LLC.",
};

export default function TransparencyPage() {
  return (
    <main>
      <ReportsSection />
      <AuditTrailSection />
      <DisclosuresSection />
    </main>
  );
}
