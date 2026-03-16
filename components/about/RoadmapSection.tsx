import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const stages = [
  {
    title: "Consensus Upgrades",
    status: "complete" as const,
    description:
      "EIP-1559 fee market, dynamic gas limit, and treasury funding mechanism. Three independent client implementations (core-geth, besu, fukuii) complete.",
    deliverables: [
      "EIP-1559 basefee mechanism",
      "Gas limit convergence (8M → 60M)",
      "Treasury accumulation address",
    ],
  },
  {
    title: "Core Governance",
    status: "active" as const,
    description:
      "Governor, Treasury, and sanctions contracts deployed. Soulbound NFT voting. Proposal lifecycle: submit, vote, queue, execute.",
    deliverables: [
      "Governor contract (OpenZeppelin)",
      "Treasury vault (AccessControl)",
      "Sanctions oracle integration",
    ],
  },
  {
    title: "Prediction Markets",
    status: "research" as const,
    description:
      "Futarchy-assisted governance using prediction markets to inform treasury allocation. Research phase exploring conditional token frameworks.",
    deliverables: [
      "Conditional outcome tokens",
      "Market-informed proposal ranking",
      "ECIP-1117 specification",
    ],
  },
  {
    title: "Miner Experimentation",
    status: "future" as const,
    description:
      "Protocol-layer treasury smoothing to reduce per-block variance. Specification phase exploring miner-compatible mechanisms.",
    deliverables: [
      "Treasury smoothing algorithm",
      "Miner impact analysis",
      "Cross-client specification",
    ],
  },
  {
    title: "Protocol Hardcoding",
    status: "future" as const,
    description:
      "Permanent consensus integration of proven governance mechanisms. The final stage moves governance from contract layer to protocol layer.",
    deliverables: [
      "Consensus-level governance",
      "Immutable treasury rules",
      "Long-term sustainability",
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
                              : "bg-[rgba(255,255,255,0.15)]"
                        }`}
                      />
                      {i < stages.length - 1 && (
                        <div className="mt-1 h-full w-px bg-[rgba(255,255,255,0.06)]" />
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
