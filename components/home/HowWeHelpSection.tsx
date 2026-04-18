import type { ReactNode, ElementType } from "react";
import { Vote, GitBranch, Pickaxe, Scale } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function HowWeHelpSection() {

  const pillars: { icon: ElementType; title: string; description: ReactNode }[] = [
    {
      icon: GitBranch,
      title: "Core Client Development",
      description: "The contributors behind Ethereum Classic DAO LLC have been the technical and principled stewards of Ethereum Classic since inception — every client decision, network upgrade, and emergency response coordinated by those same contributors across every ETC upgrade since 2016. A decade of accumulated domain knowledge drives every protocol decision: knowing not just what to build, but how to honor ETC's foundational principles while adapting to an evolving blockchain landscape. We are the humans behind billions of dollars in network value, driven to deliver a first-in-class Proof-of-Work smart contract experience for every stakeholder the network serves.",
    },
    {
      icon: Vote,
      title: "Critical Infrastructure",
      description:
        "Public RPC endpoints, block explorers, oracle networks, and institutional custody integrations all operate under service agreements that require a named legal counterparty — that entity is us. Vendor contracts, regulatory reporting, and institutional relationships cannot be executed by ad-hoc coordination; a mature network requires a formal structure. As the off-chain legal wrapper for on-chain governance, we hold the agreements, execute the decisions, and provide the organizational continuity that Ethereum Classic's second decade requires.",
    },
    {
      icon: Pickaxe,
      title: "Hashrate Incentive Alignment",
      description: "Billions of dollars in globally distributed mining infrastructure secures Ethereum Classic, the largest Proof-of-Work smart contract platform. As core developers, we positioned ETC as the PoW EVM in 2018, implemented the Thanos upgrade in response to the 2020 51% attacks, and defended the ETChash miner base from corporate capture ahead of The Merge. We are building the decentralized funding mechanisms that keep miner software current and PoW economically viable long-term. Domestic US mining operations are positioned under the Mined in America Act, aligned with our Wyoming DAO LLC registration and a decade of ETC core development.",
    },
    {
      icon: Scale,
      title: "Global Regulatory Navigation",
      description:
        <>ETC straddles two regulatory trajectories — digital commodity under the CLARITY Act and MiCA, and regulated stablecoin infrastructure under the GENIUS Act — giving it the broadest institutional access profile of any Proof-of-Work network. We track compliance across leading global regulatory frameworks across the US, EU, UK, Japan, and UAE, with <a href="https://classicusd.com" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-green)] hover:opacity-80 transition-opacity">Classic USD</a> as a live proof of GENIUS Act and MiCA alignment on ETC mainnet.</>,
    },
  ];
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="how-we-help-heading" className="section-gradient geo-lines relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="how-we-help-heading" className="text-3xl font-bold tracking-tight">
              How We Help
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Ethereum Classic&rsquo;s second decade requires more than
              open-source stewardship. Public RPC endpoints, block explorers,
              oracle networks, and institutional custody integrations all
              operate under service agreements that require a named legal
              counterparty. Regulatory reporting, vendor contracts, and
              institutional relationships cannot be executed by ad-hoc
              community coordination. Ethereum Classic DAO LLC is that
              counterparty &mdash; building the protocol and infrastructure
              while maintaining the compliance framework that institutional
              participants require to engage with the network.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 100} className="h-full">
                <div className="h-full rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-all duration-200 hover:border-[var(--border-glow)] hover:-translate-y-0.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <p.icon
                      size={20}
                      aria-hidden="true"
                      className="text-[var(--brand-green)]"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    {p.description}
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
