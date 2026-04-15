import type { ReactNode, ElementType } from "react";
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
  Layers,
  Flame,
  HandCoins,
  Pickaxe,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const safeguards = [
  {
    icon: Timer,
    title: "Timelock",
    ecip: "ECIP-1113",
    description:
      "Every approved proposal must pass through a configurable delay period between approval and execution. No treasury disbursement, contract call, or governance action can take effect immediately after a vote passes. The delay window gives the community — members, market participants, and infrastructure operators — time to review what is about to execute, raise objections, or prepare for its effects. Emergency proposals can be scoped with shorter delays; routine funding and upgrade proposals carry longer ones.",
  },
  {
    icon: ShieldCheck,
    title: "Sanctions Screening",
    ecip: "ECIP-1119",
    description:
      "On-chain sanctions compliance is enforced at three independent checkpoints: proposal submission, active voting, and execution. A sanctioned address cannot submit a proposal, cast a vote, or receive treasury funds — checked at each stage rather than once at onboarding. This gives compliance-oriented exchanges, custodians, and investment product issuers the on-chain verification they need to engage with the Olympia Treasury without relying on off-chain organizational assurances.",
  },
  {
    icon: Fingerprint,
    title: "Open Prediction Markets",
    ecip: "ECIP-1117",
    description:
      "Binding governance is limited to non-transferable membership NFT holders. Open prediction markets ensure that the DAO cannot become a closed system accountable only to its own members. Anyone — no membership, no application — can open a market on a proposed protocol outcome, stake on the result, and earn financial rewards for accurate predictions. Market prices aggregate public opinion into a real-time on-chain signal that the DAO must weigh. A governance decision that markets consistently bet against is a governance decision under visible public pressure.",
  },
];

const flowSteps = [
  { icon: ArrowRight, label: "Transactions", sublabel: "Users and markets pay gas fees" },
  { icon: Coins, label: "Fee Revenue", sublabel: "Basefee + donations + mining" },
  { icon: Landmark, label: "Treasury", sublabel: "Protocol-managed vault" },
  { icon: Vote, label: "Governance", sublabel: "Olympia DAO proposals" },
  { icon: Globe, label: "Ecosystem", sublabel: "Development funding" },
];

const stakeholders: { icon: ElementType; name: string; path: ReactNode }[] = [
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
    path: (
      <>
        <a
          href="https://www.otcmarkets.com/stock/ETCG/quote"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-white transition-colors"
        >
          ETCG
        </a>{" "}
        holders and product issuers — direct wallet or treasury address
      </>
    ),
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
  {
    icon: Layers,
    name: "Composable DeFi Protocols",
    path: (
      <>
        RetroPGF — protocol fees and yield from application-layer
        primitives directed to the treasury address (
        <a
          href="https://classicusd.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-white transition-colors"
        >
          Classic USD
        </a>
        ,{" "}
        <a
          href="https://etcswap.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-white transition-colors"
        >
          ETCswap
        </a>
        )
      </>
    ),
  },
];

export function TreasuryFundingSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="treasury-funding-heading" className="section-gradient geo-lines relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="treasury-funding-heading" className="text-3xl font-bold tracking-tight">
              Treasury Funding
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              The Olympia Treasury is funded by basefee revenue — the
              portion of every transaction fee that was set to be
              destroyed under EIP-1559. Block rewards and tips go entirely to miners
              unchanged. No new issuance, no tax on mining income, no
              inflation. The treasury grows proportionally with network
              activity: more transactions, more basefee, more development
              capacity. Voluntary on-chain contributions from exchanges,
              custodians, miners, investment product issuers, and
              individuals add to that base. Futarchy prediction market
              activity generates additional transaction volume that
              further compounds the basefee flywheel.
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

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <FadeIn delay={0}>
              <div className="flex h-full flex-col rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-colors hover:border-[var(--border-glow)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                  <Flame size={20} className="text-[var(--brand-green)]" />
                </div>
                <p className="mt-4 text-sm font-semibold">Basefee Revenue</p>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                  EIP-1559 basefee is removed from every transaction and
                  directed to the treasury automatically. The primary funding
                  source grows proportionally with network activity — more
                  transactions, more development capacity.
                </p>
                <p className="mt-4 text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                  Automatic · EIP-1559 · Primary Source
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={80}>
              <div className="flex h-full flex-col rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-colors hover:border-[var(--border-glow)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                  <HandCoins size={20} className="text-[var(--brand-green)]" />
                </div>
                <p className="mt-4 text-sm font-semibold">On-Chain Donations</p>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                  Any stakeholder worldwide can contribute directly with a
                  single transaction. Exchanges, custodians, investment product
                  issuers, DeFi protocols, and individual holders. Tax-advantaged
                  contributions route through the ETC Cooperative.
                </p>
                <p className="mt-4 text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                  Permissionless · Any Amount · Any Wallet
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={160}>
              <div className="flex h-full flex-col rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-colors hover:border-[var(--border-glow)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                  <Pickaxe size={20} className="text-[var(--brand-green)]" />
                </div>
                <p className="mt-4 text-sm font-semibold">Mining Contributions</p>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                  Miners can direct a portion of block rewards to the treasury
                  address. Block rewards and tips otherwise go entirely to
                  miners — no mandatory contribution, no impact on mining
                  economics.
                </p>
                <p className="mt-4 text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                  Optional · Block Rewards · Miner Choice
                </p>
              </div>
            </FadeIn>
          </div>

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
              <p className="mt-3 text-base text-[var(--text-muted)]">
                No organization to join, no application to submit, no
                preferred relationship required. Any participant with a
                stake in the network can contribute directly on-chain
                with a single transaction. Exchanges and custodians holding
                ETC on behalf of clients, miners directing a portion of
                block rewards to the treasury address, investment product
                issuers growing the on-chain funding base alongside their
                AUM, and individual holders sending any amount from any
                wallet worldwide. For contributions that benefit from
                tax-advantaged treatment, the ETC Cooperative accepts
                donations as a US 501(c)(3) non-profit and directs them
                to the Olympia Treasury.
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
                Olympia is built on OpenZeppelin Governor 5.x, the most
                widely deployed on-chain governance framework in the EVM
                ecosystem. The timelock, quorum, and voting parameters are
                defined in audited contracts, not in organizational policy.
                Three independent safeguard layers enforce compliance at
                proposal submission, during voting, and at execution.
                Every treasury movement is publicly recorded and
                independently verifiable on-chain, providing the audit
                trail that compliance-oriented institutions require before
                they can engage.
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
