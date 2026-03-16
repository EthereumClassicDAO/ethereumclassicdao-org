import { FileText, Eye, ShieldOff } from "lucide-react";

const roles = [
  {
    icon: FileText,
    title: "Administrative Execution",
    description:
      "Executes only actions explicitly authorized by successful DAO proposals. Handles fiat conversion, contractor KYC/compliance, tax reporting, and regulatory filings.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Publishes periodic public reports: donation receipts, contractor logs, admin cost summaries, fiat conversion records, and ECFP identifiers for every disbursement.",
  },
  {
    icon: ShieldOff,
    title: "Governance Subordination",
    description:
      "Holds no Treasury keys. Cannot veto, modify, or reinterpret approved ECFPs. Cannot exercise governance influence. Purely administrative — never authoritative.",
  },
];

export function RoleSection() {
  return (
    <section className="border-t border-[var(--border-default)] bg-[var(--bg-surface)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          Role per ECIP-1114
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--text-muted)]">
          The LLC exists to extend on-chain decisions into the off-chain legal
          and fiat world — without altering the immutability, neutrality, or
          decentralization of the Olympia Treasury.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] p-6 shadow-[var(--card-shadow)] transition-all duration-250 hover:-translate-y-1.5 hover:border-[var(--border-brand)] hover:shadow-[var(--card-hover-shadow)]"
            >
              <role.icon
                size={24}
                className="text-[var(--brand-green)]"
              />
              <h3 className="mt-4 text-lg font-semibold">{role.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
