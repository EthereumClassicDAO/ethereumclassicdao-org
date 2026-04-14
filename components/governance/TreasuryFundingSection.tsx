import {
  ArrowRight,
  Coins,
  Landmark,
  Vote,
  Globe,
  Timer,
  ShieldCheck,
  Fingerprint,
  Building2,
  Cpu,
  TrendingUp,
  User,
  Heart,
  RotateCcw,
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
    title: "Open Prediction Markets",
    ecip: "ECIP-1117",
    description:
      "Open to anyone without membership — futarchy prediction markets provide a financially incentivized governance signal that prevents binding governance from becoming captured by a closed set of members. Anyone can stake on protocol outcomes and earn rewards for accurate predictions. Market prices become on-chain signal that informs governance decisions and holds the DAO publicly accountable.",
  },
];

const flowSteps = [
  { icon: ArrowRight, label: "Transactions", sublabel: "Users and markets pay gas fees" },
  { icon: Coins, label: "Fee Revenue", sublabel: "Basefee + donations + mining" },
  { icon: Landmark, label: "Treasury", sublabel: "Protocol-managed vault" },
  { icon: Vote, label: "Governance", sublabel: "Olympia DAO proposals" },
  { icon: Globe, label: "Ecosystem", sublabel: "Development funding" },
];

const stakeholders = [
  {
    icon: Building2,
    name: "Exchanges & Custodians",
    path: "Direct on-chain contribution — no intermediaries, no overhead",
  },
  {
    icon: Cpu,
    name: "Mining Operations",
    path: "Direct hashpower to the treasury address alongside block rewards",
  },
  {
    icon: TrendingUp,
    name: "Investment Product Issuers",
    path: "ETCG holders and future product issuers fund via direct wallet or treasury address",
  },
  {
    icon: User,
    name: "Individual Holders",
    path: "Any wallet worldwide can contribute — a single on-chain transaction",
  },
  {
    icon: Heart,
    name: "ETC Cooperative",
    path: "US 501(c)(3) non-profit accepting tax-deductible donations in any amount",
  },
];

export function TreasuryFundingSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="treasury-funding-heading" className="section-gradient geo-lines relative py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <FadeIn>
            <h2 id="treasury-funding-heading" className="text-3xl font-bold tracking-tight">
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
                the treasury as basefee revenue — creating a self-reinforcing
                funding loop alongside governance signal.
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

            {/* Desktop: horizontal with feedback loop */}
            <div className="mt-6 hidden md:block">
              <div className="relative">
                {/* Forward arrow */}
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
                {/* Feedback loop */}
                <FadeIn delay={600}>
                  <div className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-dashed border-[var(--divider)] py-3 px-4">
                    <RotateCcw size={13} className="text-[var(--brand-green)]" />
                    <p className="text-xs text-[var(--text-subtle)]">
                      Futarchy markets generate transaction volume → additional basefee → treasury — self-reinforcing
                    </p>
                  </div>
                </FadeIn>
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
              <FadeIn delay={500}>
                <div className="flex items-start gap-3 rounded-lg border border-dashed border-[var(--divider)] p-3">
                  <RotateCcw size={14} className="mt-0.5 shrink-0 text-[var(--brand-green)]" />
                  <p className="text-xs text-[var(--text-subtle)]">
                    Futarchy markets generate basefee revenue that feeds back into the treasury — self-reinforcing
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Stakeholder contribution paths */}
          <div className="mt-14">
            <FadeIn>
              <p className="text-sm font-mono uppercase tracking-widest text-[var(--text-subtle)]">
                Who Can Contribute
              </p>
              <p className="mt-2 text-base font-semibold">
                Every stakeholder has a direct path to the treasury
              </p>
            </FadeIn>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stakeholders.map((s, i) => (
                <FadeIn key={s.name} delay={i * 80} className="h-full">
                  <div className="flex h-full gap-3 rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-4 transition-colors hover:border-[var(--border-glow)]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                      <s.icon size={16} className="text-[var(--brand-green)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{s.name}</p>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                        {s.path}
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
              <h2 id="safeguards-heading" className="text-3xl font-bold tracking-tight">Safeguards</h2>
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
              <FadeIn key={item.title} delay={i * 100} className="h-full">
                <div className="h-full rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-colors hover:border-[var(--border-glow)]">
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

          <FadeIn delay={200}>
            <p className="mt-10 text-sm leading-relaxed text-[var(--text-muted)]">
              These protections are the foundation, not the ceiling. The
              institutional stewardship that has backed Ethereum Classic through
              every upgrade since 2016 — the ETC Cooperative, Grayscale, and
              the broader development community — continues as active
              participants in a system now open to every stakeholder worldwide.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
