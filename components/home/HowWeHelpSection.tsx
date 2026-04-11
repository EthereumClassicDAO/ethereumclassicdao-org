import { Vote, GitBranch, Pickaxe, Scale } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { fetchHashrateTHs } from "@/lib/api/hashrate";

export async function HowWeHelpSection() {
  const hashrateTHs = await fetchHashrateTHs();
  const hashrateStr = `${Math.round(hashrateTHs)} TH/s`;

  const pillars = [
    {
      icon: GitBranch,
      title: "Core Client Development",
      description: `Coordinating the client software that runs the Ethereum Classic network for over a decade. Multiple independent implementations ensure resilience. Every network upgrade on ETC has gone through us, and we serve as the active response to any emergency development issues.`,
    },
    {
      icon: Vote,
      title: "Critical Infrastructure",
      description:
        "We are the legal entity on the contracts that keep Ethereum Classic running. Public RPC endpoints, block explorers, oracle networks, and institutional custody integrations operate under agreements we hold. We are the off-chain legal wrapper that executes on-chain governance decisions.",
    },
    {
      icon: Pickaxe,
      title: "Hashrate Incentive Alignment",
      description: `${hashrateStr} of globally distributed mining secures the largest Proof-of-Work smart contract platform. We defended the ETCHash miner base, responded to the 2020 51% attacks with the Thanos upgrade, and are building the fee market that keeps PoW economically viable long-term.`,
    },
    {
      icon: Scale,
      title: "Global Regulatory Navigation",
      description:
        "Wyoming DAO LLC fully aligned with US federal and state frameworks. ETC sits at the intersection of four major regulatory classifications: CLARITY Act digital commodity, MiCA decentralized asset, Japan FSA Green List, and live GENIUS Act stablecoin platform through Classic USD.",
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
              Building the software and infrastructure that Ethereum Classic
              needs to scale from individuals to institutions, while
              ensuring US regulatory compliance.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 100}>
                <div className="rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-all duration-200 hover:border-[var(--border-glow)] hover:-translate-y-0.5">
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
