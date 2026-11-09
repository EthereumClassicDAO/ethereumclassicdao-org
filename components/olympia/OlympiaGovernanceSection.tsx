import Link from "next/link";
import { ArrowRight, Landmark, FileText, Sprout, GitBranch } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const proposalSteps = [
  {
    title: "Submit",
    body: "The author calls the Governor from their own address, subject to the proposal threshold.",
  },
  {
    title: "Vote",
    body: "CoreNFT members vote For, Against or Abstain. The interface they vote through screens the recipient against a sanctions list.",
  },
  {
    title: "Queue",
    body: "A passed proposal is scheduled in the Timelock, in public, for its delay.",
  },
  {
    title: "Execute",
    body: "After the delay it executes, paying from the Treasury's own balance.",
  },
];

const blocks = [
  {
    icon: Landmark,
    label: "ECIP-1113",
    title: "Olympia DAO",
    body: "Three contracts, each unmodified OpenZeppelin except CoreNFT, which holds no funds: the Treasury, a transparent proxy over a TimelockController at the Sovereignty Vault address; a Governor built from stock modules, which is the Timelock's sole executor; and CoreNFT, a soulbound membership token carrying one non-delegable vote per member. After a published bootstrap list, members are admitted one governed mint at a time, with no minting committee and no account that can admit anyone alone.",
  },
  {
    icon: Sprout,
    label: "ECIP-1117 · ECIP-1118",
    title: "Ecosystem Growth DAOs and milestones",
    body: "An Ecosystem Growth DAO is open to anyone and funded one season at a time by a funding proposal. Olympia DAO decides whether to seed a season, how much, and within what theme. The body's published model then decides which of the destinations the seeding proposal named receive the funds; that model may be a conditional market, an allocation strategy, a vote or a process that is not a contract. Client development, network security and critical infrastructure stay with Olympia DAO. A milestone program pays in tranches, each its own funding proposal, decided on the work behind it.",
  },
  {
    icon: GitBranch,
    label: "ECIP-1000",
    title: "Protocol change stays with the ECIP process",
    body: "Neither Olympia DAO nor an Ecosystem Growth DAO replaces it. A change to Ethereum Classic remains an ECIP, and it takes effect when client teams release it and node operators, miners and exchanges run it. Funding a piece of work does not adopt a specification.",
  },
];

export function OlympiaGovernanceSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="olympia-governance-heading" className="section-gradient py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 id="olympia-governance-heading" className="text-2xl font-bold tracking-tight">
              Governance, as Proposed
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
              Under Olympia the Treasury&rsquo;s balance would leave only through
              Olympia DAO, by funding proposals that are voted, queued and
              executed in public. As ECIP-1113 specifies them, the contracts that
              can hold or move funds are stock OpenZeppelin, so what the network
              reviews is a configuration rather than new code.
            </p>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="mt-8 rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                  <FileText size={20} aria-hidden="true" className="text-[var(--brand-green)]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--brand-green)]">
                    ECIP-1114 · ECIP-1119
                  </p>
                  <h3 className="text-base font-semibold">A funding proposal</h3>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                An ordinary Governor proposal that spends from the Treasury. It
                declares one of five categories: Core Development, Critical
                Infrastructure, Network Security, Ecosystem Growth, or Other.
                There is no registry and no submission contract, and the category
                describes a proposal without gating it.
              </p>
              <ol className="mt-5 grid gap-4 sm:grid-cols-4">
                {proposalSteps.map((step, i) => (
                  <li key={step.title}>
                    <span className="font-mono text-xs font-bold text-[var(--brand-green)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 text-sm font-semibold">{step.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {blocks.map((block, i) => (
              <FadeIn key={block.title} delay={120 + i * 60} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <block.icon size={20} aria-hidden="true" className="text-[var(--brand-green)]" />
                  </div>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-[var(--brand-green)]">
                    {block.label}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold">{block.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">{block.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={320}>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href="/treasury"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
              >
                How the Treasury would work <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/governance"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
              >
                Governance in detail <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
