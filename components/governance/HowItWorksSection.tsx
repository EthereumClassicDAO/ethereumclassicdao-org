import {
  FileText,
  Vote,
  Clock,
  Zap,
  FileCheck,
  TrendingUp,
  BarChart2,
  Scale,
  Lightbulb,
  ArrowRight,
  GitBranch,
  Server,
  CheckCircle,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const formalSteps = [
  {
    icon: FileText,
    number: "01",
    title: "Propose",
    description:
      "Members submit binding governance proposals on-chain. Proposals define the action to execute and the supporting rationale.",
  },
  {
    icon: Vote,
    number: "02",
    title: "Vote",
    description:
      "Members cast weighted on-chain votes during a defined voting period using non-transferable membership NFTs. Votes are transparent and immutable. A quorum threshold must be met for the proposal to pass.",
  },
  {
    icon: Clock,
    number: "03",
    title: "Queue",
    description:
      "Approved proposals enter a configurable security timelock. This delay gives the community time to review and react before execution is triggered.",
  },
  {
    icon: Zap,
    number: "04",
    title: "Execute",
    description:
      "After the timelock expires, proposals execute on-chain without manual intervention. Treasury transfers and governance actions are fully auditable.",
  },
  {
    icon: FileCheck,
    number: "05",
    title: "Disclose",
    description:
      "All outcomes are publicly recorded and independently verifiable. Proposal execution records, treasury movements, and governance decisions form a permanent on-chain record.",
  },
];

const futarchySteps = [
  {
    icon: TrendingUp,
    number: "01",
    title: "Open",
    description:
      "Anyone opens a prediction market on a proposed protocol outcome. No membership required.",
  },
  {
    icon: BarChart2,
    number: "02",
    title: "Speculate",
    description:
      "Public participants stake on outcomes, bringing new users onto ETC and generating transaction volume that flows as basefee revenue into the protocol treasury.",
  },
  {
    icon: Scale,
    number: "03",
    title: "Resolve",
    description:
      "Markets settle when the underlying governance event executes on-chain. Participants are financially rewarded for accurate predictions.",
  },
  {
    icon: Lightbulb,
    number: "04",
    title: "Signal",
    description:
      "Market prices feed back as on-chain signal into future governance decisions, creating a self-reinforcing loop between public participation and core development capacity.",
  },
];

const powSteps = [
  {
    icon: Vote,
    number: "01",
    title: "DAO Approval",
    description:
      "Olympia DAO votes to approve a protocol upgrade through the on-chain governance process. Proposals require quorum and majority to pass.",
  },
  {
    icon: GitBranch,
    number: "02",
    title: "Client Releases",
    description:
      "Independent client teams publish compatible implementations of the approved upgrade. Multiple implementations ensure no single point of failure.",
  },
  {
    icon: Server,
    number: "03",
    title: "Network Adoption",
    description:
      "Miners, exchanges, wallets, and node operators upgrade their software. Each participant signals support by running the new implementation.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Distributed Consensus",
    description:
      "The upgrade achieves activation when the broader network has adopted the new software — distributed participation across all three tiers made real.",
  },
];

function StepCard({
  step,
  delay,
}: {
  step: (typeof formalSteps)[number];
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="flex gap-6 rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-colors hover:border-[var(--border-glow)]">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--brand-green)] bg-[var(--background)]">
            <span className="text-sm font-mono font-bold text-[var(--brand-green)]">
              {step.number}
            </span>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
            <step.icon size={16} className="text-[var(--brand-green)]" />
          </div>
        </div>
        <div>
          <p className="text-base font-semibold">{step.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
            {step.description}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export function HowItWorksSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section aria-labelledby="binding-on-chain-protocol-governance-heading" className="section-deep py-28">
        <div className="mx-auto max-w-4xl px-6">
          {/* Core Development Governance */}
          <FadeIn>
            <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
              Core Development Governance
            </p>
            <h2 id="binding-on-chain-protocol-governance-heading" className="mt-2 text-3xl font-bold tracking-tight">
              Binding On-Chain Protocol Governance
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Five stages from proposal to execution. Every step on-chain.
              Scoped to core client software, critical infrastructure, network
              security, treasury allocation, and emergency protocol responses.
            </p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
                ECIP-1113
              </span>
              <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
                ECIP-1114
              </span>
              <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
                ECIP-1119
              </span>
            </div>
          </FadeIn>

          <div className="mt-10 space-y-6">
            {formalSteps.map((step, i) => (
              <StepCard key={step.title} step={step} delay={i * 80} />
            ))}
          </div>

          <FadeIn>
            <div className="mt-8">
              <a
                href="https://olympiadao.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
              >
                View the Olympia DAO Governance App
                <ArrowRight size={14} />
              </a>
            </div>
          </FadeIn>

          {/* Futarchy Markets */}
          <FadeIn>
            <div className="mt-20">
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                Futarchy Markets
              </p>
              <h2 id="open-prediction-markets-and-public-signal-heading" className="mt-2 text-3xl font-bold tracking-tight">
                Open Prediction Markets and Public Signal
              </h2>
              <p className="mt-3 text-base text-[var(--text-muted)]">
                Open to anyone, no membership required. Market prices become
                on-chain signal that informs governance decisions and funds
                development through the basefee flywheel.
              </p>
              <div className="mt-3 flex gap-2">
                <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
                  ECIP-1117
                </span>
                <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
                  ECIP-1118
                </span>
              </div>
            </div>
          </FadeIn>

          <div className="mt-10 space-y-6">
            {futarchySteps.map((step, i) => (
              <StepCard key={step.title} step={step} delay={i * 80} />
            ))}
          </div>

          {/* Network Participant Layer */}
          <FadeIn>
            <div className="mt-20">
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                Network Participant Layer
              </p>
              <h2 id="software-adoption-as-governance-signal-heading" className="mt-2 text-3xl font-bold tracking-tight">
                Software Adoption as Governance Signal
              </h2>
              <p className="mt-3 text-base text-[var(--text-muted)]">
                The three governance tiers are interdependent. Developers build
                the software; users and institutions create the value that makes
                the network worth building on; and network participants — miners,
                exchanges, wallets, and infrastructure providers — run the software
                that makes the network real. Protocol changes achieve consensus when
                the broader network adopts them. Client adoption is not a veto — it
                is the natural expression of distributed participation across all
                the people and organizations the network depends on.
              </p>
              <div className="mt-3 flex gap-2">
                <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
                  ECIP Process
                </span>
              </div>
            </div>
          </FadeIn>

          <div className="mt-10 space-y-6">
            {powSteps.map((step, i) => (
              <StepCard key={step.title} step={step} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
