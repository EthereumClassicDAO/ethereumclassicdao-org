import { ArrowDown } from "lucide-react";

const steps = [
  {
    label: "On-Chain Governance",
    detail: "ECFPs proposed, voted, queued, and executed via OlympiaGovernor",
    highlight: true,
  },
  {
    label: "Timelock Controller",
    detail: "Mandatory delay before execution — immutable security",
    highlight: false,
  },
  {
    label: "Olympia Executor",
    detail: "Sanctions check → Treasury withdrawal — atomic and permissionless",
    highlight: false,
  },
  {
    label: "Ethereum Classic DAO LLC",
    detail:
      "Off-chain tasks only: fiat conversion, KYC, tax filings, contractual documents",
    highlight: true,
  },
];

export function RelationshipSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          Governance Relationship
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--text-muted)]">
          The LLC is the last step in the governance pipeline — subordinate to
          every layer above it.
        </p>

        <div className="mx-auto mt-12 max-w-lg">
          {steps.map((step, i) => (
            <div key={step.label}>
              <div
                className={`rounded-xl border p-5 ${
                  step.highlight
                    ? "border-[var(--border-brand)] bg-[var(--brand-green-subtle)]"
                    : "border-[var(--border-default)] bg-[var(--bg-card)]"
                }`}
              >
                <p
                  className={`text-sm font-semibold ${
                    step.highlight
                      ? "text-[var(--brand-green)]"
                      : "text-[var(--text-primary)]"
                  }`}
                >
                  {step.label}
                </p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  {step.detail}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown
                    size={16}
                    className="text-[var(--text-subtle)]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[var(--text-subtle)]">
          No LLC action may supersede, delay, or contradict an approved ECFP or
          its hash-bound execution parameters.
        </p>
      </div>
    </section>
  );
}
