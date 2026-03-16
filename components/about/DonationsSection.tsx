import { Banknote, ShieldCheck, Users, Eye } from "lucide-react";

const rules = [
  {
    icon: Banknote,
    title: "Strict Segregation",
    description:
      "Donations are external to the protocol and MUST remain strictly segregated from the protocol-level Olympia Treasury defined in ECIP-1112.",
  },
  {
    icon: ShieldCheck,
    title: "Hash-Bound Routing",
    description:
      "Donations routed through governance use the canonical execution tuple: (ecfpId, recipient, amount, metadataCID, chainid) for full traceability.",
  },
  {
    icon: Eye,
    title: "Public Reporting",
    description:
      "All off-chain disbursements MUST be publicly reported, regardless of whether they were routed through on-chain governance.",
  },
  {
    icon: Users,
    title: "Governance Neutral",
    description:
      "Donor funds MUST NOT influence or override on-chain governance decisions. Protocol-level Treasury and external donations MUST NOT be co-mingled.",
  },
];

export function DonationsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-xl font-semibold">Donation Handling & Segregation</h2>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          The LLC may receive off-chain donations in fiat or cryptocurrency.
          These are optional, external, and subject to strict separation rules.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {rules.map((rule) => (
            <div
              key={rule.title}
              className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] p-5"
            >
              <rule.icon
                size={20}
                className="text-[var(--brand-green)]"
              />
              <h3 className="mt-3 text-sm font-semibold">{rule.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
