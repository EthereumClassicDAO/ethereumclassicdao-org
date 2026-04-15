import {
  Receipt,
  ClipboardCheck,
  Calculator,
  ArrowRightLeft,
  FileOutput,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const reportTypes = [
  {
    icon: Receipt,
    label: "Donation Receipts",
    description: "Records of all donations received by the organization",
  },
  {
    icon: ClipboardCheck,
    label: "Contractor Onboarding Logs",
    description: "Compliance records to the extent legally permissible",
  },
  {
    icon: Calculator,
    label: "Administrative Cost Summaries",
    description: "Operational expenses and overhead tracking",
  },
  {
    icon: ArrowRightLeft,
    label: "Fiat Conversion Records",
    description: "Conversion dates, amounts, and rates",
  },
  {
    icon: FileOutput,
    label: "Proposal Execution Records",
    description: "Corresponding identifiers for every off-chain disbursement",
  },
];

export function ReportsSection() {
  return (
    <section aria-labelledby="reporting-framework-heading" className="hero-gradient noise-overlay relative pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            Transparency
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Disclosures
          </h1>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            Ethereum Classic DAO is committed to publishing periodic public
            reports. All governance operations and financial activities will be
            disclosed transparently.
          </p>
        </FadeIn>

        <FadeIn>
          <h2 id="reporting-framework-heading" className="mt-12 text-xl font-bold">Reporting Framework</h2>
        </FadeIn>

        <div className="mt-8 space-y-3">
          {reportTypes.map((report, i) => (
            <FadeIn key={report.label} delay={i * 60}>
              <div className="flex gap-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                  <report.icon
                    size={20}
                    aria-hidden="true"
                    className="text-[var(--brand-green)]"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">{report.label}</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {report.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
