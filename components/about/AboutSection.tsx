import { GitBranch, Vote, Pickaxe, Scale, Shield, Building2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const buildItems = [
  {
    icon: GitBranch,
    text: "Core network software: independent client implementations ensuring no single point of failure",
  },
  {
    icon: Vote,
    text: "On-chain governance infrastructure: proposal, voting, execution, and treasury management",
  },
  {
    icon: Pickaxe,
    text: "Hashrate incentive alignment, ensuring network security through mining economics",
  },
  {
    icon: Scale,
    text: "US regulatory compliance: digital commodity positioning under the CLARITY Act, regulated stablecoin platform under the GENIUS Act",
  },
];

const positions = [
  {
    icon: Shield,
    title: "Proof-of-Work Security",
    description:
      "The only EVM-compatible blockchain secured by Proof-of-Work consensus. Following Ethereum\u2019s transition to Proof-of-Stake, Ethereum Classic absorbed significant mining infrastructure and stands alone at the intersection of Bitcoin\u2019s security model and Ethereum\u2019s programmability.",
  },
  {
    icon: Building2,
    title: "Institutional Infrastructure",
    description:
      "Listed on all major global exchanges with 300+ active markets. Institutional-grade custody from leading digital asset custodians. Regulated securities exposure via the Grayscale Ethereum Classic Trust (ETCG), trading on OTCQX since 2018.",
  },
  {
    icon: Scale,
    title: "Regulatory Clarity",
    description:
      "Wyoming DAO LLC under the Decentralized Autonomous Organization Supplement. Positioned for digital commodity classification (CLARITY Act) and as a compliant EVM platform for regulated stablecoins (GENIUS Act), producing an ecosystem of US-based ETF-aligned digital assets.",
  },
];

export function AboutSection() {
  return (
    <section className="hero-gradient noise-overlay relative pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            About
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            About Ethereum Classic DAO
          </h1>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-[var(--text-secondary)]">
            <p>
              Ethereum Classic DAO LLC is the legal entity for the Olympia
              DAO, utilizing Wyoming&rsquo;s DAO LLC framework to maintain
              core software, critical infrastructure, and hashrate incentives
              for the world&rsquo;s largest Proof-of-Work smart contract
              platform. The LLC ensures proper reporting and compliance with
              US federal and state regulatory frameworks.
            </p>
            <p>
              Ethereum Classic is the only EVM-compatible blockchain secured
              by Proof-of-Work, combining Bitcoin&rsquo;s security model
              with Ethereum&rsquo;s programmability. This positions ETC not
              just as a digital commodity under the CLARITY Act, but as a
              compliant smart contract platform where regulated stablecoins
              (GENIUS Act) can operate on a
              Proof-of-Work foundation.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-16">
            <h2 className="text-xl font-bold">The Olympia Upgrade</h2>
            <div className="mt-4 rounded-xl p-8 border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] space-y-4 text-base leading-relaxed text-[var(--text-secondary)]">
              <p>
                The Olympia upgrade introduces protocol-level treasury
                funding, decentralized governance, and on-chain
                proposal execution to Ethereum Classic. It represents the most
                significant protocol upgrade in Ethereum Classic&rsquo;s
                history.
              </p>
              <p>
                Through Olympia, the basefee funds a
                protocol-managed treasury. Block rewards and tips remain untouched and
                go entirely to miners. Anyone can submit proposals on-chain.
                Members vote on resource allocation and execute
                decisions. Every step is transparent and verifiable on-chain.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-16">
            <h2 className="text-xl font-bold">What We Build</h2>
            <div className="mt-6 space-y-4">
              {buildItems.map((item, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                      <item.icon
                        size={20}
                        className="text-[var(--brand-green)]"
                      />
                    </div>
                    <p className="text-base leading-relaxed text-[var(--text-secondary)] pt-2">
                      {item.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-16">
            <h2 className="text-xl font-bold">Why Ethereum Classic</h2>
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              What makes Ethereum Classic uniquely positioned for institutional
              adoption and long-term sustainability.
            </p>
            <div className="mt-6 space-y-6">
              {positions.map((p, i) => (
                <FadeIn key={p.title} delay={i * 80}>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                      <p.icon
                        size={20}
                        className="text-[var(--brand-green)]"
                      />
                    </div>
                    <div>
                      <p className="text-base font-semibold">{p.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
