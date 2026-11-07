import Link from "next/link";
import {
  FileText,
  Vote,
  Clock,
  Zap,
  FileCheck,
  Sprout,
  Shuffle,
  CheckCircle,
  RefreshCw,
  ArrowRight,
  GitBranch,
  Server,
  ScrollText,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { OLYMPIA_DAO_URL, ecipUrl } from "@/lib/network-links";

const proposalSteps = [
  {
    icon: FileText,
    number: "01",
    title: "Submit",
    description:
      "The author calls the Governor's propose() from their own address. Any address can submit while the proposal threshold is zero; above it, submitting takes that much voting power, which only members hold. The description names a category, the recipient and the amount, with a content-addressed reference to the detail.",
  },
  {
    icon: Vote,
    number: "02",
    title: "Vote",
    description:
      "CoreNFT members vote For, Against or Abstain during the voting period, one non-delegable vote each. The interface they vote through screens every address the proposal would pay against a sanctions list, and offers no way to vote in favor of a designated one.",
  },
  {
    icon: Clock,
    number: "03",
    title: "Queue",
    description:
      "A proposal that passes is scheduled in the Timelock. The schedule is public, and the Governor can still cancel it during the delay.",
  },
  {
    icon: Zap,
    number: "04",
    title: "Execute",
    description:
      "After the delay the Timelock executes it, paying from the Treasury's own balance. A batch is sized to fit within one transaction.",
  },
  {
    icon: FileCheck,
    number: "05",
    title: "Record",
    description:
      "Every proposal, vote, schedule and payment can be reconstructed from the contracts' event logs alone.",
  },
];

const seasonSteps = [
  {
    icon: Sprout,
    number: "01",
    title: "Seed",
    description:
      "An ordinary funding proposal seeds one season with a specific sum, and may confine it to a theme. It names every destination the season's funds may reach.",
  },
  {
    icon: Shuffle,
    number: "02",
    title: "Allocate",
    description:
      "The body's model, published before the season opens, chooses among those destinations: a conditional market, a published allocation strategy, a modular on-chain vote, or a process that is not a contract.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Settle",
    description:
      "The season closes when its allocation settles. Unless the seeding proposal says otherwise, an unallocated remainder returns to the Treasury.",
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Decide again",
    description:
      "No season is automatic. Each is a new proposal, voted under the same quorum as client maintenance and security response.",
  },
];

const protocolSteps = [
  {
    icon: ScrollText,
    number: "01",
    title: "Propose",
    description: "A change to Ethereum Classic is written as an ECIP and goes through the ECIP process, ECIP-1000.",
  },
  {
    icon: GitBranch,
    number: "02",
    title: "Implement",
    description: "Client teams publish releases that implement it, each on its maintainers' own schedule.",
  },
  {
    icon: Server,
    number: "03",
    title: "Adopt",
    description: "Node operators, miners, exchanges and wallets upgrade to those releases ahead of the activation block.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Activate",
    description: "The change takes effect at its activation block, on the nodes that run it.",
  },
];

function StepCard({
  step,
  delay,
}: {
  step: (typeof proposalSteps)[number];
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
            <step.icon size={16} aria-hidden="true" className="text-[var(--brand-green)]" />
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

function EcipChips({ ecips }: { ecips: number[] }) {
  return (
    <div className="mt-3 flex gap-2">
      {ecips.map((n) => (
        <a
          key={n}
          href={ecipUrl(n)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
        >
          ECIP-{n}
        </a>
      ))}
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section aria-labelledby="funding-proposals-heading" className="section-deep py-28">
        <div className="mx-auto max-w-5xl px-6">
          {/* Funding proposals */}
          <FadeIn>
            <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
              Olympia DAO
            </p>
            <h2 id="funding-proposals-heading" className="mt-2 text-3xl font-bold tracking-tight">
              How a Funding Proposal Would Pass
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              A funding proposal is an ordinary OpenZeppelin Governor proposal that
              spends from the Treasury, and there is no other route to it. It
              declares one of five categories: Core Development, Critical
              Infrastructure, Network Security, Ecosystem Growth, or Other. Funding
              usually follows the work: the common case is paying for a
              contribution the network can already inspect. A commitment that runs
              in stages is paid in tranches, each its own proposal, with nothing
              held between them.
            </p>
            <EcipChips ecips={[1113, 1114, 1118, 1119]} />
            <div className="mt-4">
              <a
                href={OLYMPIA_DAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
              >
                Visit the Olympia DAO site
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          </FadeIn>

          <div className="mt-10 space-y-6">
            {proposalSteps.map((step, i) => (
              <StepCard key={step.title} step={step} delay={i * 80} />
            ))}
          </div>

          {/* Ecosystem Growth DAOs */}
          <FadeIn>
            <div className="mt-20">
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                Ecosystem Growth DAOs
              </p>
              <h2 id="ecosystem-growth-daos-heading" className="mt-2 text-3xl font-bold tracking-tight">
                Seasons Funded, Allocation Delegated
              </h2>
              <p className="mt-3 text-base text-[var(--text-muted)]">
                An Ecosystem Growth DAO is a body scoped to growing what is built on
                Ethereum Classic, open to anyone without membership, application
                or CoreNFT. Olympia DAO would fund it without governing it: Olympia
                DAO would decide whether to fund each season, how much, and within
                what theme, and the body would decide to whom. Client development,
                network security and critical infrastructure would stay with
                Olympia DAO.
              </p>
              <EcipChips ecips={[1113, 1117]} />
            </div>
          </FadeIn>

          <div className="mt-10 space-y-6">
            {seasonSteps.map((step, i) => (
              <StepCard key={step.title} step={step} delay={i * 80} />
            ))}
          </div>

          {/* Protocol change */}
          <FadeIn>
            <div className="mt-20">
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                Protocol Change
              </p>
              <h2 id="protocol-change-heading" className="mt-2 text-3xl font-bold tracking-tight">
                Upgrades Stay With the ECIP Process
              </h2>
              <p className="mt-3 text-base text-[var(--text-muted)]">
                Neither DAO replaces the ECIP process, and a passed funding proposal
                confers no authority over a specification. Every node operator,
                miner, exchange and wallet takes part through the client release it
                runs: an upgrade becomes real when the network runs it.
              </p>
              <div className="mt-4">
                <Link
                  href="/clients"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                >
                  Choose and run a client
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeIn>

          <div className="mt-10 space-y-6">
            {protocolSteps.map((step, i) => (
              <StepCard key={step.title} step={step} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
