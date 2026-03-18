import {
  FileText,
  Vote,
  Clock,
  Zap,
  FileCheck,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Propose",
    description:
      "Any community member can submit a governance proposal on-chain. Proposals define the action to execute and the supporting rationale. There are no gatekeepers — the process is fully permissionless.",
  },
  {
    icon: Vote,
    number: "02",
    title: "Vote",
    description:
      "Members cast weighted on-chain votes during a defined voting period. Votes are transparent and immutable. A quorum threshold must be met for the proposal to pass.",
  },
  {
    icon: Clock,
    number: "03",
    title: "Queue",
    description:
      "Approved proposals enter a security timelock. This delay provides the community time to review and react before execution. The timelock is enforced at the protocol level.",
  },
  {
    icon: Zap,
    number: "04",
    title: "Execute",
    description:
      "After the timelock expires, the proposal executes automatically. Treasury transfers and governance actions all happen on-chain with full auditability.",
  },
  {
    icon: FileCheck,
    number: "05",
    title: "Disclose",
    description:
      "All outcomes are publicly reported and independently verifiable. Proposal execution records, treasury movements, and governance decisions form a permanent on-chain record.",
  },
];

export function HowItWorksSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section className="section-deep py-28">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              How It Works
            </h2>
            <p className="mt-3 max-w-xl text-base text-[var(--text-muted)]">
              Five stages from idea to execution — every step on-chain.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-6">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 80}>
                <div className="flex gap-6 rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-colors hover:border-[var(--border-glow)]">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--brand-green)] bg-[var(--background)]">
                      <span className="text-sm font-mono font-bold text-[var(--brand-green)]">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                      <step.icon
                        size={16}
                        className="text-[var(--brand-green)]"
                      />
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
