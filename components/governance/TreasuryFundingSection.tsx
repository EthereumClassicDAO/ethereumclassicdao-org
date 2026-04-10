import {
  ArrowRight,
  Coins,
  Landmark,
  Vote,
  Globe,
  Timer,
  ShieldCheck,
  Fingerprint,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const safeguards = [
  {
    icon: Timer,
    title: "Timelock",
    ecip: "ECIP-1113",
    description:
      "Every approved proposal must wait through a configurable delay period before execution. This gives the community time to review, object, or prepare, preventing hasty or malicious actions from taking effect immediately.",
  },
  {
    icon: ShieldCheck,
    title: "Sanctions Screening",
    ecip: "ECIP-1119",
    description:
      "The governance system includes on-chain sanctions compliance at three layers: proposal submission, active voting, and execution. Sanctioned addresses cannot participate in governance or receive treasury funds.",
  },
  {
    icon: Fingerprint,
    title: "Two-Layer Governance",
    ecip: "ECIP-1117",
    description:
      "Olympia DAO membership NFTs are non-transferable, preventing vote buying and governance manipulation. Public participation is enabled through open futarchy prediction markets, where anyone can stake on protocol outcomes and earn financial rewards for accurate predictions, ensuring both protocol accountability and broad community input.",
  },
];

const flowSteps = [
  { icon: ArrowRight, label: "Transactions", sublabel: "Users and markets pay gas fees" },
  { icon: Coins, label: "Fee Revenue", sublabel: "Basefee + donations + mining" },
  { icon: Landmark, label: "Treasury", sublabel: "Protocol-managed vault" },
  { icon: Vote, label: "Governance", sublabel: "Olympia DAO proposals" },
  { icon: Globe, label: "Ecosystem", sublabel: "Development funding" },
];

export function TreasuryFundingSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-gradient geo-lines relative py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              Treasury Funding
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              How the Olympia Treasury is funded, sustainably and without
              impacting miners.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-12 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-8">
              <p className="text-lg font-semibold">
                Basefee revenue funds the Olympia Treasury
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                Block rewards and tips remain completely untouched and go
                entirely to miners. The treasury receives basefee revenue,
                voluntary on-chain donations, and mining rewards directed to
                the treasury address. Futarchy prediction market activity
                generates additional transaction volume that flows back into
                the treasury as basefee revenue, creating a self-reinforcing
                funding loop alongside governance signal.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                Any stakeholder, whether exchanges, custodians, miners,
                investment product issuers, or institutions holding ETC on
                behalf of fund shareholders, can contribute directly on-chain
                with no overhead and no intermediaries. Stakeholders who prefer
                a traditional giving model can contribute through the ETC
                Cooperative, a US 501(c)(3) non-profit that accepts
                tax-deductible donations.
              </p>
            </div>
          </FadeIn>

          {/* Funding flow */}
          <div className="mt-12">
            <FadeIn>
              <p className="text-sm font-mono uppercase tracking-widest text-[var(--text-subtle)]">
                Funding Flow
              </p>
            </FadeIn>

            {/* Desktop: horizontal */}
            <div className="mt-6 hidden md:block">
              <div className="relative">
                <div className="absolute top-6 left-10 right-10 h-px bg-[var(--divider)]" />
                <div className="relative grid grid-cols-5 gap-2">
                  {flowSteps.map((step, i) => (
                    <FadeIn key={step.label} delay={i * 100}>
                      <div className="text-center">
                        <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)]">
                          <step.icon
                            size={18}
                            className="text-[var(--brand-green)]"
                          />
                        </div>
                        <p className="mt-3 text-sm font-semibold">
                          {step.label}
                        </p>
                        <p className="mt-1 text-xs text-[var(--text-muted)]">
                          {step.sublabel}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: vertical */}
            <div className="mt-6 space-y-4 md:hidden">
              {flowSteps.map((step, i) => (
                <FadeIn key={step.label} delay={i * 80}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)]">
                      <step.icon
                        size={16}
                        className="text-[var(--brand-green)]"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{step.label}</p>
                      <p className="text-xs text-[var(--text-muted)]">
                        {step.sublabel}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn>
            <div className="mt-12">
              <a
                href="https://olympiatreasury.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
              >
                View the Olympia Treasury Dashboard
                <ArrowRight size={14} />
              </a>
            </div>
          </FadeIn>

          {/* Safeguards */}
          <FadeIn>
            <div className="mt-20">
              <h2 className="text-3xl font-bold tracking-tight">Safeguards</h2>
              <p className="mt-3 text-base text-[var(--text-muted)]">
                Built-in protections that keep governance secure and compliant.
              </p>
              <div className="mt-3 flex gap-2">
                <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
                  ECIP-1113
                </span>
                <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
                  ECIP-1117
                </span>
                <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
                  ECIP-1119
                </span>
              </div>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {safeguards.map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-colors hover:border-[var(--border-glow)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <item.icon size={20} className="text-[var(--brand-green)]" />
                  </div>
                  <p className="mt-4 text-base font-semibold">{item.title}</p>
                  <span className="mt-1.5 inline-block rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
                    {item.ecip}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
