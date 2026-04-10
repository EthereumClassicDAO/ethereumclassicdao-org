import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const stages = [
  {
    title: "Consensus Upgrades",
    status: "complete" as const,
    description:
      "Three ECIPs in a single upgrade: EIP-1559 fee market, a protocol-controlled treasury funded by basefee revenue, and full Fusaka execution-layer parity. Every current Ethereum tool, library, and framework now works on ETC without modification.",
    deliverables: [
      "EIP-1559 fee market with predictable gas pricing (ECIP-1111)",
      "Protocol treasury funded by basefee revenue and voluntary contributions (ECIP-1112)",
      "Full Fusaka EVM parity: Dencun, Pectra, and Fusaka execution-layer EIPs (ECIP-1121)",
      "Miner block rewards and tips completely untouched",
    ],
  },
  {
    title: "Core Governance",
    status: "active" as const,
    description:
      "On-chain governance contracts deployed with membership-based voting and a full proposal lifecycle: submit, vote, queue, execute. Core development funding moves from private balance sheets to an open, permissionless, and transparent process.",
    deliverables: [
      "Governance and treasury contracts with timelock execution",
      "Membership-based voting with sanctions compliance",
      "Open proposal process with competitive bidding",
      "Direct on-chain contribution path for any stakeholder",
    ],
  },
  {
    title: "Prediction Markets",
    status: "research" as const,
    description:
      "Futarchy-assisted governance uses prediction markets to inform treasury allocation. Participants stake on proposal outcomes, and market prices provide a financially-backed public signal alongside on-chain member votes. Requires ECIP-1121 EVM alignment.",
    deliverables: [
      "Conditional outcome tokens",
      "Market-informed proposal ranking",
      "On-chain participation open to any stakeholder, not just DAO members",
    ],
  },
  {
    title: "Treasury Distribution",
    status: "future" as const,
    description:
      "As ETC's fixed-emission schedule reduces block subsidies over time, accumulated basefee revenue can optionally supplement miner security budgets. ECIP-1115 defines a governance-controlled smoothing curve that spreads optional payouts across a configurable window without creating miner entitlements or touching consensus-layer rewards.",
    deliverables: [
      "Treasury smoothing algorithm (ECIP-1115)",
      "Multi-scenario modeling through ECIP-1017 emission reduction events",
      "Governance-controlled parameters, adjustable without a hard fork",
    ],
  },
  {
    title: "Protocol Integration",
    status: "future" as const,
    description:
      "Proven governance mechanisms elevated from the contract layer to consensus. Treasury rules become immutable at the protocol level.",
    deliverables: [
      "Consensus-level governance encoding",
      "Immutable treasury rules",
      "Long-term protocol sustainability",
    ],
  },
];

const statusConfig = {
  complete: { label: "Complete", className: "badge-complete" },
  active: { label: "Active", className: "badge-active" },
  research: { label: "Research", className: "badge-research" },
  future: { label: "Future", className: "badge-future" },
};

export function RoadmapSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-gradient geo-circle relative py-28">
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              Olympia Roadmap
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Five stages from consensus upgrades to permanent protocol
              integration.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-0">
            {stages.map((stage, i) => {
              const config = statusConfig[stage.status];
              return (
                <FadeIn key={stage.title} delay={i * 80}>
                  <div className="relative flex gap-6 pb-8">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`h-3 w-3 shrink-0 rounded-full ${
                          stage.status === "complete"
                            ? "bg-[var(--brand-green)]"
                            : stage.status === "active"
                              ? "bg-[var(--brand-green)] animate-pulse"
                              : "bg-[var(--border-strong)]"
                        }`}
                      />
                      {i < stages.length - 1 && (
                        <div className="mt-1 h-full w-px bg-[var(--divider)]" />
                      )}
                    </div>

                    <div className="-mt-1 flex-1">
                      <div className="flex items-center gap-3">
                        <p className="text-base font-semibold">
                          {stage.title}
                        </p>
                        <span className={config.className}>
                          {config.label}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                        {stage.description}
                      </p>
                      <ul className="mt-3 space-y-1">
                        {stage.deliverables.map((d) => (
                          <li
                            key={d}
                            className="text-xs text-[var(--text-subtle)] before:mr-2 before:content-['·']"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
