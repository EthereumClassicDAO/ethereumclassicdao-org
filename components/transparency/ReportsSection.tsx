import { FileText, DollarSign, Users, ArrowLeftRight, Hash } from "lucide-react";

const reportTypes = [
  {
    icon: FileText,
    label: "Donation Receipts",
    description: "Records of all donations received by the LLC",
  },
  {
    icon: Users,
    label: "Contractor Onboarding Logs",
    description: "Compliance records to the extent legally permissible",
  },
  {
    icon: DollarSign,
    label: "Administrative Cost Summaries",
    description: "Operational expenses and overhead tracking",
  },
  {
    icon: ArrowLeftRight,
    label: "Fiat Conversion Records",
    description: "Conversion dates, amounts, and rates",
  },
  {
    icon: Hash,
    label: "ECFP Identifiers",
    description:
      "Corresponding ECFP identifiers for every off-chain disbursement",
  },
];

export function ReportsSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Transparency
        </h1>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          The LLC SHALL publish periodic public reports per ECIP-1114. These
          reports MUST align with the underlying hash-bound metadata to maintain
          auditability.
        </p>

        <h2 className="mt-12 text-xl font-semibold">Required Publications</h2>

        <div className="mt-6 space-y-3">
          {reportTypes.map((report) => (
            <div
              key={report.label}
              className="flex gap-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] p-4"
            >
              <report.icon
                size={20}
                className="mt-0.5 shrink-0 text-[var(--brand-green)]"
              />
              <div>
                <p className="text-sm font-semibold">{report.label}</p>
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">
                  {report.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
