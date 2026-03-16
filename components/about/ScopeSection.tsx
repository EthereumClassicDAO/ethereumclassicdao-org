import { CheckCircle } from "lucide-react";

const responsibilities = [
  "Execute only those actions explicitly authorized by a successful DAO proposal",
  "Follow the exact parameters specified in the approved proposal's metadata",
  "Perform fiat currency conversion for approved disbursements",
  "Handle contractor onboarding and compliance (KYC, W-9/W-8BEN collection)",
  "File tax reports and regulatory filings as required",
  "Deliver contractual documents tied to approved ECFPs",
  "Ensure all off-chain actions correspond to hash-bound proposals",
  "Include all actions in publicly accessible financial reports",
];

export function ScopeSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          LLC Scope & Responsibilities
        </h1>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          Defined by ECIP-1114, Section &ldquo;Legal Interface: Ethereum Classic
          DAO LLC&rdquo;. The LLC performs no evaluative, filtering, or
          discretionary decision-making.
        </p>

        <div className="mt-12">
          <h2 className="text-xl font-semibold">
            The LLC <span className="text-[var(--brand-green)]">SHALL</span>
          </h2>
          <ul className="mt-6 space-y-4">
            {responsibilities.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--brand-green)]"
                />
                <span className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
