import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const stages = [
  {
    title: "Consensus Upgrades",
    status: "complete" as const,
    description:
      "Glamsterdam-era EVM parity in a single upgrade — every Ethereum tool and framework works on ETC without modification. EIP-1559 fee market and protocol treasury funded by basefee revenue complete the package.",
    deliverables: [
      "Glamsterdam EVM parity: Dencun, Pectra, Fusaka, and Glamsterdam EIPs (ECIP-1121)",
      "EIP-1559 fee market (ECIP-1111)",
      "Protocol treasury funded by basefee (ECIP-1112)",
    ],
  },
  {
    title: "Core Governance",
    status: "active" as const,
    description:
      "Core development funding moves on-chain — open to any developer, infrastructure provider, or critical service operator worldwide. No private employment contracts. No prior relationships required.",
    deliverables: [
      "Full proposal lifecycle: submit, vote, queue, execute",
      "Governance and treasury contracts with timelock execution",
      "Membership-based voting with on-chain sanctions screening",
      "Open competitive bidding — any EVM developer or infrastructure provider can participate",
      "Core developers, infrastructure providers, and critical services funded on merit",
      "Direct on-chain contributions and ETC Cooperative donation channel",
    ],
  },
  {
    title: "Prediction Markets",
    status: "research" as const,
    description:
      "Open prediction markets give any ETC holder a financial stake in monitoring protocol development — no membership required. Market activity generates basefee revenue that flows back into the treasury, creating a self-reinforcing loop between public participation and protocol funding.",
    deliverables: [
      "Open to anyone with an ETC account — no membership required",
      "Financially incentivizes the public to monitor and evaluate protocol proposals",
      "Onboards new participants to ETC through active market engagement",
      "Market activity generates basefee transactions — compounds the treasury flywheel",
      "Conditional outcome tokens",
      "Market-informed proposal ranking alongside formal DAO votes",
      "Accurate predictions earn financial rewards — holding governance accountable",
    ],
  },
  {
    title: "Treasury Distribution",
    status: "future" as const,
    description:
      "A smoothing curve supplements miner security budgets as fixed-emission block subsidies decline. It arrives in two stages, deliberately. ECIP-1115 runs it at the contract layer, where the allocation fraction, window, and curve shape are adjustable through governance without a hard fork — so the network can find the right curve empirically while ECIP-1017 block rewards are still securing it. Once a curve is proven, ECIP-1116 graduates it: a hard fork embeds that curve into block finalization, paid by the protocol rather than disbursed from the treasury, and no longer adjustable by governance. ECIP-1017's predictable 5M20 emission schedule defines the decline curve this responds to.",
    deliverables: [
      "Treasury smoothing algorithm at the contract layer (ECIP-1115)",
      "Parameters adjustable through governance without a hard fork during the experimental stage",
      "Consensus-layer hardening of the proven curve (ECIP-1116) — a later, separate hard fork",
      "Complements ECIP-1017's 5M20 emission schedule — treasury responds as subsidies decline",
      "Sequenced by design: experiment while block rewards still secure the network, harden before they stop",
    ],
  },
  {
    title: "Protocol Integration",
    status: "future" as const,
    description:
      "Where empirical evidence supports it, proven governance mechanisms are elevated from the contract layer into native protocol upgrades — hardcoded at consensus, immutable by design. The same path ECIP-1017 took with the emission schedule: battle-tested logic becomes a permanent property of the chain.",
    deliverables: [
      "Contract-layer mechanisms earn consensus elevation through demonstrated performance",
      "Follows the ECIP-1017 precedent — proven rules encoded natively into the protocol",
      "Consensus-level governance encoding",
      "Immutable treasury rules — no longer dependent on contract deployment or upgradability",
      "Each elevation requires empirical evidence and a standard ECIP process",
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
