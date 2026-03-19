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
    description: "Anyone can submit governance proposals on-chain",
  },
  {
    icon: Vote,
    number: "02",
    title: "Vote",
    description: "Members cast weighted on-chain votes",
  },
  {
    icon: Clock,
    number: "03",
    title: "Queue",
    description: "Approved proposals enter a security timelock",
  },
  {
    icon: Zap,
    number: "04",
    title: "Execute",
    description: "After timelock, proposals execute automatically",
  },
  {
    icon: FileCheck,
    number: "05",
    title: "Disclose",
    description: "All outcomes publicly reported and verified",
  },
];

export function GovernanceProcessSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-gradient geo-circle relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              Governance Process
            </h2>
            <p className="mt-3 max-w-xl text-base text-[var(--text-muted)]">
              Membership-based on-chain governance — proposals, voting,
              timelock, and transparent execution.
            </p>
          </FadeIn>

          {/* Desktop: horizontal steps with connecting line */}
          <div className="mt-14 hidden md:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-5 left-5 right-5 h-px bg-[var(--divider)]" />

              <div className="relative grid grid-cols-5 gap-4">
                {steps.map((step, i) => (
                  <FadeIn key={step.title} delay={i * 100}>
                    <div className="text-center">
                      <div className="relative mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--brand-green)] bg-[var(--background)]">
                        <span className="text-xs font-mono font-bold text-[var(--brand-green)]">
                          {step.number}
                        </span>
                      </div>
                      <p className="mt-4 text-sm font-semibold">{step.title}</p>
                      <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                        {step.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="mt-10 space-y-6 md:hidden">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 80}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[var(--brand-green)] bg-[var(--background)]">
                      <span className="text-xs font-mono font-bold text-[var(--brand-green)]">
                        {step.number}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="mt-2 h-full w-px bg-[var(--divider)]" />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-semibold">{step.title}</p>
                    <p className="mt-1 text-xs text-[var(--text-muted)]">
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
