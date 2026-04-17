import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const stages = [
  {
    title: "Consensus Upgrades",
    status: "complete" as const,
    description:
      "Full Fusaka EVM parity in a single upgrade — every Ethereum tool and framework works on ETC without modification. EIP-1559 fee market and protocol treasury funded by basefee revenue complete the package.",
    deliverables: [
      "Fusaka EVM parity: Dencun, Pectra, Fusaka EIPs (ECIP-1121)",
      "EIP-1559 fee market (ECIP-1111)",
      "Protocol treasury funded by basefee (ECIP-1112)",
    ],
  },
  {
    title: "Core Governance",
    status: "active" as const,
    description:
      "On-chain governance with membership-based voting and a full proposal lifecycle: submit, vote, queue, execute. Core development funding moves to an open, transparent, on-chain process.",
    deliverables: [
      "Governance and treasury contracts with timelock execution",
      "Membership-based voting with sanctions compliance",
      "Open proposal process with competitive bidding",
    ],
  },
  {
    title: "Prediction Markets",
    status: "research" as const,
    description:
      "Futarchy-assisted governance uses prediction markets to inform treasury allocation, providing financially-backed public signals alongside on-chain member votes.",
    deliverables: [
      "Conditional outcome tokens",
      "Market-informed proposal ranking",
      "Open participation for any stakeholder",
    ],
  },
  {
    title: "Treasury Distribution",
    status: "future" as const,
    description:
      "Governance-controlled smoothing curve (ECIP-1115) optionally supplements miner security budgets as fixed-emission block subsidies decline, without touching consensus-layer rewards.",
    deliverables: [
      "Treasury smoothing algorithm (ECIP-1115)",
      "Modeling through ECIP-1017 emission events",
      "Parameters adjustable without a hard fork",
    ],
  },
  {
    title: "Protocol Integration",
    status: "future" as const,
    description:
      "Proven governance mechanisms elevated from the contract layer to consensus, making treasury rules immutable at the protocol level.",
    deliverables: [
      "Consensus-level governance encoding",
      "Immutable treasury rules",
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
      <section aria-labelledby="olympia-roadmap-heading" className="section-gradient geo-circle relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="olympia-roadmap-heading" className="text-3xl font-bold tracking-tight">
              Olympia Roadmap
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              The Olympia upgrade moves in five stages — establishing the protocol mechanics that make treasury funding possible, building the on-chain governance infrastructure, adding prediction market signals for better resource allocation, addressing long-term network security, and ultimately encoding governance rules at the consensus level where they become as immutable as the chain itself.
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
