import { GitBranch, Vote, Pickaxe, Scale, Shield, Building2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const buildItems = [
  {
    icon: GitBranch,
    text: "Core network software: the Core-Geth client, the network's bootnodes and its peer discovery lists, maintained in the ethereumclassic GitHub organization",
  },
  {
    icon: Vote,
    text: "A legal wrapper for Olympia DAO, as ECIP-1114 contemplates it, for the off-chain acts an on-chain organization cannot perform: downstream of Olympia DAO in authority, and with no role until Olympia DAO is operating",
  },
  {
    icon: Pickaxe,
    text: "Hashrate incentive alignment: network security through mining economics",
  },
  {
    icon: Scale,
    text: "Regulatory engagement on Ethereum Classic's profile: a digital commodity candidate under the CLARITY Act, an asset with no issuer under MiCA and a GENIUS Act-aligned stablecoin platform",
  },
];

const positions = [
  {
    icon: Shield,
    title: "Proof-of-Work Security",
    description:
      "The only mature Proof-of-Work blockchain with native smart contracts. After Ethereum\u2019s move to Proof-of-Stake, Ethereum Classic absorbed a significant share of its mining infrastructure, and it sits at the intersection of Bitcoin\u2019s security model and Ethereum\u2019s programmability.",
  },
  {
    icon: Building2,
    title: "Institutional Access",
    description:
      "300+ active markets across 20+ major exchanges, institutional-grade custody from leading digital asset custodians, and regulated securities exposure through the Grayscale Ethereum Classic Trust (ETCG), quoted on OTCQX since 2018 and positioned for the trust-to-ETF conversion Grayscale has completed for Bitcoin and Ethereum.",
  },
  {
    icon: Scale,
    title: "Regulatory Position",
    description:
      "ETC stands on two regulatory paths: it is a digital commodity candidate under the CLARITY Act and an asset with no issuer under MiCA, and Classic USD makes it a GENIUS Act-aligned stablecoin platform. The Grayscale Ethereum Classic Trust positions ETC as a candidate for the next wave of ETF conversions.",
  },
];

export function AboutSection() {
  return (
    <section className="hero-gradient noise-overlay relative pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            About
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            About Ethereum Classic <span className="text-[var(--brand-green)]">DAO</span>
          </h1>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-[var(--text-secondary)]">
            <p>
              Ethereum Classic DAO is the standing legal entity that
              maintains and funds Ethereum Classic&rsquo;s public goods (the
              Core-Geth client, the network&rsquo;s bootnodes and its peer
              discovery lists) as the funder of last resort. Ethereum
              Classic&rsquo;s core developers and community contributors do the
              day-to-day work, and Ethereum Classic DAO does not control or lead
              the network. It is registered in Wyoming as a DAO LLC.
            </p>
            <p>
              Ethereum Classic is the only mature Proof-of-Work blockchain with
              native smart contracts, combining Bitcoin&rsquo;s security model with
              Ethereum&rsquo;s programmability. That places ETC at the
              intersection of two regulatory paths: the commodity classification
              path that Proof-of-Work networks established, and the programmable
              finance frameworks being built around smart contract platforms.
            </p>
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
                        aria-hidden="true"
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
              What positions Ethereum Classic for institutional adoption and
              long-term sustainability.
            </p>
            <div className="mt-6 space-y-6">
              {positions.map((p, i) => (
                <FadeIn key={p.title} delay={i * 80}>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                      <p.icon
                        size={20}
                        aria-hidden="true"
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
