import type { ElementType } from "react";
import {
  ArrowRight,
  ExternalLink,
  Coins,
  Landmark,
  Vote,
  Globe,
  Lock,
  ShieldCheck,
  Timer,
  Building2,
  Cpu,
  TrendingUp,
  User,
  Route,
  HandCoins,
  Pickaxe,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { OLYMPIA_TREASURY_SITE_URL, ecipUrl } from "@/lib/network-links";

const sources: { icon: ElementType; title: string; body: string; tag: string }[] = [
  {
    icon: Route,
    title: "The base fee",
    body: "Credited by consensus under ECIP-1111, transaction by transaction, inside each transaction's own state transition. It is the primary source, and the only one the protocol directs.",
    tag: "Automatic · ECIP-1111 · Primary source",
  },
  {
    icon: HandCoins,
    title: "On-chain contributions",
    body: "Once the address is published, anyone could send native ETC or tokens to it in one transaction. ECIP-1113 makes it the one contribution address for every asset class, so there is no second address to pick by mistake.",
    tag: "Voluntary · Any asset · One address",
  },
  {
    icon: Pickaxe,
    title: "Mining contributions",
    body: "A miner could name the Treasury's address as a block's beneficiary. Nothing requires it, and no ECIP redirects any part of what miners earn.",
    tag: "Optional · Block rewards · Miner's choice",
  },
];

const flowSteps = [
  { icon: ArrowRight, label: "Transactions", sublabel: "Each pays the EIP-1559 base fee" },
  { icon: Coins, label: "Base fee", sublabel: "Credited per transaction" },
  { icon: Landmark, label: "Treasury", sublabel: "The Sovereignty Vault address" },
  { icon: Vote, label: "Governance", sublabel: "Olympia DAO funding proposals" },
  { icon: Globe, label: "Recipients", sublabel: "Development, infrastructure, security, growth" },
];

const stakeholders: { icon: ElementType; name: string; path: string }[] = [
  {
    icon: Building2,
    name: "Exchanges & Custodians",
    path: "A direct on-chain contribution to the published address, with no intermediary",
  },
  {
    icon: Cpu,
    name: "Mining Operations",
    path: "Block rewards directed to the Treasury's address, by the miner's own choice",
  },
  {
    icon: TrendingUp,
    name: "Investment Product Issuers",
    path: "A contribution to the published address, like any other stakeholder's",
  },
  {
    icon: User,
    name: "Individual Holders",
    path: "Any amount, from any wallet, in a single transaction",
  },
];

const safeguards = [
  {
    icon: Lock,
    title: "Stock OpenZeppelin contracts",
    ecip: 1113,
    description:
      "The Treasury's proxy, its Timelock and the Governor are unmodified OpenZeppelin at a published release, and the Governor declares no logic of its own, so OpenZeppelin's own audit covers what is deployed and review confirms a configuration. CoreNFT, the one contract with written behavior, holds no funds.",
  },
  {
    icon: Timer,
    title: "A public, timelocked path",
    ecip: 1113,
    description:
      "Every payment is scheduled in the Timelock in public and waits out its delay before it executes, and the Governor can still cancel it in that window. Every governance action can be reconstructed from the contracts' event logs alone.",
  },
  {
    icon: ShieldCheck,
    title: "Recipient screening",
    ecip: 1119,
    description:
      "The interface a member votes through screens every address a proposal would pay against a sanctions list and shows the result, with no way to vote in favor of a designated address. Screening reaches recipients of value, never voters, and adds no contract to the governance core.",
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
              How the Treasury Would Be Funded
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Under ECIP-1111 the Treasury&rsquo;s revenue would be the base fee
              EIP-1559 charges every transaction: a charge Ethereum destroys, and
              one Ethereum Classic does not levy today. No new issuance is
              involved, and nothing is taken from what miners earn now: block
              rewards and priority-fee tips go to miners unchanged. The revenue
              rises and falls with how much the network is used.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href={ecipUrl(1112)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-[var(--brand-green-subtle)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
              >
                ECIP-1112
                <ExternalLink size={9} aria-hidden="true" />
              </a>
              <a
                href={OLYMPIA_TREASURY_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
              >
                The treasury site, olympiatreasury.org
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {sources.map((source, i) => (
              <FadeIn key={source.title} delay={i * 80} className="h-full">
                <div className="flex h-full flex-col rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-colors hover:border-[var(--border-glow)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <source.icon size={20} aria-hidden="true" className="text-[var(--brand-green)]" />
                  </div>
                  <p className="mt-4 text-sm font-semibold">{source.title}</p>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                    {source.body}
                  </p>
                  <p className="mt-4 text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                    {source.tag}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

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
                          <step.icon size={18} aria-hidden="true" className="text-[var(--brand-green)]" />
                        </div>
                        <p className="mt-3 text-sm font-semibold">{step.label}</p>
                        <p className="mt-1 text-xs text-[var(--text-muted)]">{step.sublabel}</p>
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
                      <step.icon size={16} aria-hidden="true" className="text-[var(--brand-green)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{step.label}</p>
                      <p className="text-xs text-[var(--text-muted)]">{step.sublabel}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Stakeholder contribution paths */}
          <div className="mt-14">
            <FadeIn>
              <p className="text-sm font-mono uppercase tracking-widest text-[var(--text-subtle)]">
                Who Could Contribute
              </p>
              <p className="mt-2 text-base font-semibold">
                One address, open to every stakeholder
              </p>
              <p className="mt-3 text-base text-[var(--text-muted)]">
                Once the Treasury&rsquo;s address is published, contributing would
                need no organization to join, no application and no relationship:
                one on-chain transaction to that address. ECIP-1113 requires any
                interface or site that solicits contributions to publish it, for
                every asset class.
              </p>
            </FadeIn>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {stakeholders.map((s, i) => (
                <FadeIn key={s.name} delay={i * 80} className="h-full">
                  <div className="flex h-full gap-3 rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-4 transition-colors hover:border-[var(--border-glow)]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                      <s.icon size={16} aria-hidden="true" className="text-[var(--brand-green)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{s.name}</p>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">{s.path}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Safeguards */}
          <FadeIn>
            <div id="safeguards" className="mt-20 scroll-mt-24">
              <h2 id="safeguards-heading" className="text-3xl font-bold tracking-tight">Safeguards</h2>
              <p className="mt-3 text-base text-[var(--text-muted)]">
                Three checks the ECIPs place on every payment, each at a different
                point between a vote and the funds moving. Every movement of the
                Treasury&rsquo;s balance would be recorded on-chain and
                independently verifiable.
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {safeguards.map((item, i) => (
              <FadeIn key={item.title} delay={i * 100} className="h-full">
                <div className="h-full rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-colors hover:border-[var(--border-glow)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <item.icon size={20} aria-hidden="true" className="text-[var(--brand-green)]" />
                  </div>
                  <p className="mt-4 text-base font-semibold">{item.title}</p>
                  <a
                    href={ecipUrl(item.ecip)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-block rounded-full bg-[var(--brand-green-subtle)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    ECIP-{item.ecip}
                  </a>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <p className="mt-10 text-base leading-relaxed text-[var(--text-muted)]">
              Together they keep the path between a vote and a payment short,
              public and audited. The stock contracts enforce the process, the
              Timelock gives the network time to see each payment coming, and
              screening gives the people who authorize a disbursement a current
              check of where it would go.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
