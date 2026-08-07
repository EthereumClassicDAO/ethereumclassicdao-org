import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "Olympia Staged Rollout",
  description:
    "Olympia arrives in five stages. Two are hard forks and three are not — consensus upgrades activate at the fork, governance and treasury contracts deploy on a chain whose rules are already settled.",
  keywords: [
    "Olympia rollout",
    "Olympia stages",
    "ECIP-1111",
    "ECIP-1112",
    "ECIP-1113",
    "ECIP-1114",
    "ECIP-1115",
    "ECIP-1116",
    "ECIP-1119",
    "ECIP-1121",
    "ECIP-1122",
    "Ethereum Classic governance",
  ],
};

type StageStatus = "active" | "scheduled" | "research" | "future";

interface Stage {
  stage: string;
  name: string;
  status: StageStatus;
  hardFork: boolean;
  ecips: string[];
  description: string;
  dependsOn: string;
}

const stages: Stage[] = [
  {
    stage: "Stage 1",
    name: "Consensus Upgrades",
    status: "active",
    hardFork: true,
    ecips: ["ECIP-1111", "ECIP-1112", "ECIP-1121", "ECIP-1122"],
    description:
      "The hard fork itself. EIP-1559 activates and the basefee is redirected to the protocol treasury rather than burned; the execution layer advances through Glamsterdam; client security parameters take effect, including a minimum miner tip and the return of chain-reorganization resistance. The treasury contract deploys at this fork — the governance suite that spends from it does not.",
    dependsOn: "Nothing. This is the foundation every later stage builds on.",
  },
  {
    stage: "Stage 2",
    name: "Core Governance",
    status: "scheduled",
    hardFork: false,
    ecips: ["ECIP-1113", "ECIP-1114", "ECIP-1119"],
    description:
      "The governor, timelock, executor, membership NFT and funding-proposal registry deploy, and the treasury becomes spendable. These are contracts on a chain whose consensus rules are already settled — no fork, no client divergence. The gap after Stage 1 is deliberate: it is the audit window for the governance layer, and the treasury accrues revenue throughout it.",
    dependsOn: "Stage 1 — the treasury must exist and be accruing before anything can spend from it.",
  },
  {
    stage: "Stage 3",
    name: "Prediction Markets",
    status: "scheduled",
    hardFork: false,
    ecips: ["ECIP-1117", "ECIP-1118"],
    description:
      "A futarchy track running as a subordinate DAO alongside membership voting, never replacing it. Traders hold conditional positions on ETC's price under a proposal accepted and rejected, and the branch priced higher wins. Collateral is ETC and Classic USD, both already live, and it is custodied by the conditional-token contracts rather than by the treasury. Its only interface to the treasury is an ordinary funding proposal, like any other applicant.",
    dependsOn:
      "Stage 2 for the funding path. It also needs the conditional-token contracts and an ERC-1155 wrapper on Ethereum Classic — deployment work rather than a capability gap, since both target EVM semantics ETC has had since Spiral in 2024 and are permissionless to deploy. Stage 3's position is a sequencing choice, not a technical dependency. The streaming-disbursement half can proceed ahead of the markets themselves.",
  },
  {
    stage: "Stage 4",
    name: "Treasury Distribution",
    status: "future",
    hardFork: false,
    ecips: ["ECIP-1115"],
    description:
      "A smoothing curve that routes a share of treasury-held basefee back to miners, spreading each block's contribution across a future window so the payout is steady rather than volatile. Every parameter is adjustable through governance without a fork, which is the point: the network learns the right curve by running it while block rewards still secure the chain.",
    dependsOn: "Stage 2 — the funding-proposal machinery is how each candidate curve is paid.",
  },
  {
    stage: "Stage 5",
    name: "Protocol Integration",
    status: "future",
    hardFork: true,
    ecips: ["ECIP-1116"],
    description:
      "The second hard fork. Once a curve has been demonstrated in production, it is embedded into block finalization permanently — paid by the protocol rather than disbursed from the treasury, and no longer adjustable by governance. Changing it afterward costs a fork, which is the guarantee being bought.",
    dependsOn:
      "Stage 4, and only after it has produced real observational data. Hardening a number nobody has measured would repeat the mistake the staging exists to avoid.",
  },
];

const statusConfig: Record<StageStatus, { label: string; className: string }> = {
  active: {
    label: "Active",
    className: "rounded-full bg-[rgba(0,255,174,0.1)] px-2 py-0.5 text-xs font-medium text-[var(--brand-green)]",
  },
  scheduled: {
    label: "Scheduled",
    className: "rounded-full bg-[var(--color-sky-bg)] px-2 py-0.5 text-xs font-medium text-[var(--color-sky)]",
  },
  research: {
    label: "Research",
    className: "rounded-full bg-[var(--color-violet-bg)] px-2 py-0.5 text-xs font-medium text-[var(--color-violet)]",
  },
  future: {
    label: "Future",
    className: "rounded-full bg-[rgba(255,255,255,0.05)] px-2 py-0.5 text-xs font-medium text-[var(--text-muted)]",
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
              <span className="text-[var(--brand-green)]">Staged Rollout</span>
            </h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mx-auto max-w-2xl text-lg text-[var(--text-muted)]">
              Olympia arrives in five stages. Two of them are hard forks and
              three are not — a distinction that decides what each stage can
              break, and how quickly it can be corrected.
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      <section className="section-alt py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="mb-10 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-5 text-sm leading-relaxed text-[var(--text-secondary)]">
              <p>
                <span className="font-semibold text-[var(--text-primary)]">
                  Stages 1 and 5 are hard forks. Stages 2, 3 and 4 are not.
                </span>{" "}
                The middle three are contract deployments and governance actions
                on a chain whose consensus rules are already settled — none of
                them can cause a node to diverge, and each can be corrected
                without coordinating the network. Treating all five as the same
                kind of step is the most common way this roadmap is misread.
              </p>
              <p className="mt-3">
                This is the rollout of the Olympia upgrade. For the network
                upgrades Ethereum Classic has already activated, from the
                genesis block onward, see{" "}
                <a
                  href="/core-development"
                  className="font-medium text-[var(--brand-green)] underline underline-offset-2 transition-colors hover:text-[var(--brand-green-hover)]"
                >
                  Core Development
                </a>
                .
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-[15px] top-0 bottom-0 w-px bg-[rgba(255,255,255,0.08)]" />

            <div className="space-y-8">
              {stages.map((stage, i) => {
                const config = statusConfig[stage.status];
                return (
                  <FadeIn key={stage.stage} delay={i * 80}>
                    <div className="relative pl-10">
                      <div
                        className={`absolute left-[9px] top-1.5 h-3 w-3 rounded-full ${
                          stage.status === "active"
                            ? "bg-[var(--brand-green)] animate-pulse"
                            : "bg-[var(--border-strong)]"
                        }`}
                      />

                      <div className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-elevated)] p-5">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs text-[var(--brand-green)]">
                            {stage.stage}
                          </span>
                          <h2 className="font-semibold">{stage.name}</h2>
                          <span className={config.className}>{config.label}</span>
                          <span
                            className={
                              stage.hardFork
                                ? "rounded-full bg-[var(--color-amber-bg)] px-2 py-0.5 font-mono text-[10px] text-[var(--color-amber)]"
                                : "rounded-full bg-[rgba(255,255,255,0.05)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-muted)]"
                            }
                          >
                            {stage.hardFork ? "Hard fork" : "No fork"}
                          </span>
                        </div>

                        <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                          {stage.description}
                        </p>

                        <p className="mt-3 text-xs leading-relaxed text-[var(--text-subtle)]">
                          <span className="font-medium text-[var(--text-muted)]">
                            Depends on:
                          </span>{" "}
                          {stage.dependsOn}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {stage.ecips.map((ecip) => (
                            <a
                              key={ecip}
                              href={`https://ecips.ethereumclassic.org/ECIPs/${ecip.toLowerCase()}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded bg-[var(--color-violet-bg)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-violet)] transition-colors hover:bg-[var(--color-violet)]/15"
                            >
                              {ecip}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          <FadeIn delay={480}>
            <p className="mt-10 text-xs leading-relaxed text-[var(--text-subtle)]">
              Each stage depends only on the stages before it. The activation
              block for Stage 1 is announced after a successful Mordor testnet
              run and a coordinated readiness check with exchanges, mining
              pools, node operators, and infrastructure providers.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
