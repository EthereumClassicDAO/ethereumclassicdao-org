import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const stages = [
  {
    title: "Consensus Upgrades",
    status: "complete" as const,
    description:
      "Fee market improvements, dynamic gas limits, and treasury funding mechanism. Independent client implementations complete.",
    deliverables: [
      "Fee market",
      "Dynamic gas limits",
      "Treasury funding mechanism",
    ],
  },
  {
    title: "Core Governance",
    status: "active" as const,
    description:
      "Governance and treasury contracts deployed. Membership-based voting. Full proposal lifecycle: submit, vote, queue, execute.",
    deliverables: [
      "Governance and treasury contracts",
      "Membership voting system",
      "Sanctions compliance layer",
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
      "Protocol specification",
    ],
  },
  {
    title: "Treasury Distribution",
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
    title: "Protocol Integration",
    status: "future" as const,
    description:
      "Permanent consensus integration of proven governance mechanisms. Moving governance from contract layer to protocol layer.",
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
