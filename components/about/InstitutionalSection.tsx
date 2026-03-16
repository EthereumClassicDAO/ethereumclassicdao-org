import { Building, Pickaxe, TrendingUp, Server } from "lucide-react";

const participants = [
  {
    icon: Building,
    label: "Centralized Exchanges",
    description: "Compliant donation and participation pathways",
  },
  {
    icon: Pickaxe,
    label: "Mining Pools & ASIC Manufacturers",
    description: "Ecosystem contribution through approved ECFPs",
  },
  {
    icon: TrendingUp,
    label: "Investment Trusts & ETF Managers",
    description: "Transparent institutional engagement",
  },
  {
    icon: Server,
    label: "Infrastructure Providers",
    description: "RPC nodes, explorers, hosting — compliant funding",
  },
];

export function InstitutionalSection() {
  return (
    <section className="border-t border-[var(--border-default)] bg-[var(--bg-surface)] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-xl font-semibold">
          Institutional Participation
        </h2>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          The ECFP framework combined with the LLC administrative interface
          enables transparent participation by institutional entities — without
          compromising decentralization or governance neutrality.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {participants.map((p) => (
            <div
              key={p.label}
              className="flex gap-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] p-4"
            >
              <p.icon
                size={20}
                className="mt-0.5 shrink-0 text-[var(--brand-green)]"
              />
              <div>
                <p className="text-sm font-semibold">{p.label}</p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
