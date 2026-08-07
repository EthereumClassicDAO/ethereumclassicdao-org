import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "Olympia Timeline",
  description:
    "Development timeline for the Olympia network upgrade on Ethereum Classic — from specification drafting through mainnet activation.",
};

const phases = [
  {
    name: "Specification Drafting",
    status: "complete" as const,
    period: "2024 Q3 – 2025 Q2",
    description:
      "Five core ECIPs drafted and submitted: ECIP-1111 (EIP-1559 Fee Market), ECIP-1112 (Protocol Treasury), ECIP-1113 (DAO Governance), ECIP-1114 (OFP Funding Process), ECIP-1121 (EVM Alignment with Glamsterdam). Community review on the ECIP repository.",
  },
  {
    name: "Client Implementation",
    status: "complete" as const,
    period: "2025 Q1 – 2025 Q4",
    description:
      "Two client implementations built and tested. Fukuii (Scala), Ethereum Classic's first native client, and Core-Geth (Go), a go-ethereum derivative, each implement the full Olympia specification, so no single codebase is a point of failure.",
  },
  {
    name: "Governance Contracts",
    status: "complete" as const,
    period: "2025 Q3 – 2026 Q1",
    description:
      "Smart contract suite deployed and tested: OlympiaTreasury, OlympiaGovernor, OlympiaExecutor, TimelockController, OFPRegistry, SanctionsOracle, CoreNFT. Demo v0.3 deployed to both Mordor testnet and ETC mainnet.",
  },
  {
    name: "Testnet Deployment",
    status: "active" as const,
    period: "2026 Q1 – Present",
    description:
      "Mordor testnet deployment and validation. Both clients syncing and producing blocks. Cross-client compatibility verified through the Hive integration testing framework. SNAP sync validated between clients.",
  },
  {
    name: "Olympia Upgrade Core Developers Call",
    status: "upcoming" as const,
    period: "TBD",
    description:
      "The Olympia Upgrade core developers call will finalize the activation block for Mordor testnet and ETC mainnet. All client teams and stakeholders will participate in the consensus decision.",
  },
  {
    name: "Mainnet Activation",
    status: "upcoming" as const,
    period: "2027 (expected)",
    description:
      "Olympia activates on ETC mainnet at the agreed-upon block. EIP-1559 fee market goes live, basefee begins flowing to the protocol treasury. Block rewards and tips remain completely untouched.",
  },
];

const statusStyles = {
  complete: {
    dot: "bg-[var(--brand-green)]",
    line: "bg-[var(--brand-green)]",
    badge: "bg-[rgba(0,255,174,0.1)] text-[var(--brand-green)]",
    label: "Complete",
  },
  active: {
    dot: "bg-[#F59E0B] animate-pulse",
    line: "bg-[#F59E0B]",
    badge: "bg-[rgba(245,158,11,0.1)] text-[#F59E0B]",
    label: "In Progress",
  },
  upcoming: {
    dot: "bg-[rgba(255,255,255,0.2)]",
    line: "bg-[rgba(255,255,255,0.1)]",
    badge: "bg-[rgba(255,255,255,0.05)] text-[var(--text-muted)]",
    label: "Upcoming",
  },
};

export default function TimelinePage() {
  return (
    <main>
      <section className="hero-gradient relative pt-32 pb-16">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Olympia{" "}
              <span className="text-[var(--brand-green)]">Development Timeline</span>
            </h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mx-auto max-w-2xl text-lg text-[var(--text-muted)]">
              From specification drafting through mainnet activation — tracking
              the progress of Ethereum Classic&apos;s most significant upgrade.
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      <section className="section-alt py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[15px] top-0 bottom-0 w-px bg-[rgba(255,255,255,0.08)]" />

            <div className="space-y-8">
              {phases.map((phase, i) => {
                const style = statusStyles[phase.status];
                return (
                  <FadeIn key={phase.name} delay={i * 80}>
                    <div className="relative pl-10">
                      {/* Dot */}
                      <div
                        className={`absolute left-[9px] top-1.5 h-3 w-3 rounded-full ${style.dot}`}
                      />

                      {/* Phase Card */}
                      <div className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-elevated)] p-5">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="font-semibold">{phase.name}</h3>
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-medium ${style.badge}`}
                          >
                            {style.label}
                          </span>
                          <span className="ml-auto font-mono text-xs text-[var(--text-muted)]">
                            {phase.period}
                          </span>
                        </div>

                        <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                          {phase.description}
                        </p>

                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
