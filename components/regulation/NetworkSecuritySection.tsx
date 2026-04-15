import { Shield, Cpu, Zap, History } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { fetchHashrateTHs, fetchAllHashrateHistories } from "@/lib/api/hashrate";
import { HashrateChart } from "@/components/about/HashrateChart";

const securityProperties = [
  {
    icon: Shield,
    title: "No Controlling Foundation",
    description:
      "Block production is open to any hardware operator globally. No entity holds an appointment, permission, or veto over who mines. The network runs on economic incentive, not institutional trust.",
  },
  {
    icon: Cpu,
    title: "Permissionless Entry",
    description:
      "GPU hardware available at consumer electronics retail. Purpose-built ASIC hardware for institutional scale. No licensing, no KYC, no operator approval — the widest mining participation curve of any programmable blockchain.",
  },
  {
    icon: Zap,
    title: "Post-Merge Infrastructure",
    description:
      "Ethereum\u2019s 2022 transition to Proof-of-Stake directed its entire global ETChash mining network toward ETC. That reallocation of hardware capital is permanent: the equipment was purpose-built for the ETChash algorithm.",
  },
  {
    icon: History,
    title: "Continuous Security Record",
    description:
      "Ethereum Classic has operated under Proof-of-Work consensus since July 2015. The Thanos upgrade and MESS finality mechanism, implemented after the 2020 network security events, strengthened chain reorganization resistance.",
  },
];

export async function NetworkSecuritySection() {
  const [hashrateTHs, hashrateHistories] = await Promise.all([
    fetchHashrateTHs(),
    fetchAllHashrateHistories(),
  ]);

  const stats = [
    {
      value: `${hashrateTHs.toFixed(1)} TH/s`,
      label: "Network Hashrate",
      detail: "Live — updated hourly",
    },
    {
      value: "July 2015",
      label: "Network Origin",
      detail: "Continuous PoW operation",
    },
    {
      value: "GPU + ASIC",
      label: "Hardware Access",
      detail: "Permissionless entry at any scale",
    },
    {
      value: "Largest PoW EVM",
      label: "Post-Merge Position",
      detail: "Absorbed Ethereum mining infrastructure",
    },
  ];

  return (
    <>
      <SectionDivider />
      <section
        aria-labelledby="distributed-proof-of-work-security-heading"
        className="section-gradient relative py-28"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          {/* Header */}
          <FadeIn>
            <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
              Network Security
            </p>
            <h2
              id="distributed-proof-of-work-security-heading"
              className="mt-2 text-3xl font-bold tracking-tight"
            >
              Distributed Proof-of-Work Security
            </h2>
            <div className="mt-4 space-y-3">
              <p className="text-base text-[var(--text-muted)]">
                Proof-of-Work consensus makes network security measurable. The
                hashrate represents independent, competing economic actors
                deploying capital to secure the network &mdash; no single
                operator controls the outcome. Reversing a transaction on ETC
                requires outpacing the combined computational investment of
                every miner globally. That is not a governance decision or an
                administrative act &mdash; it is a thermodynamic constraint.
              </p>
              <p className="text-base text-[var(--text-muted)]">
                The CLARITY Act, MiCA, and every framework that distinguishes a
                digital commodity from a security requires evidence that no
                single entity controls the protocol. Proof-of-Work provides that
                evidence continuously, on-chain, with every block. ETC&rsquo;s
                hashrate &mdash; absorbing the global GPU mining network and
                onboarding a mature ASIC manufacturing market built
                specifically for the ETChash algorithm after Ethereum&rsquo;s
                2022 transition &mdash; represents the largest distributed
                security budget of any smart contract platform.
              </p>
            </div>
          </FadeIn>

          {/* Hashrate chart */}
          <FadeIn delay={100}>
            <HashrateChart histories={hashrateHistories} currentTHs={hashrateTHs} />
          </FadeIn>

          {/* Live stat strip */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 60} className="h-full">
                <div className="h-full rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-5">
                  <p className="font-mono text-xl font-bold text-[var(--brand-green)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-[var(--text-primary)]">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-[10px] text-[var(--text-subtle)]">
                    {stat.detail}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Security properties */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {securityProperties.map((prop, i) => (
              <FadeIn key={prop.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <prop.icon size={20} className="text-[var(--brand-green)]" />
                  </div>
                  <p className="mt-4 text-sm font-semibold">{prop.title}</p>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                    {prop.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Closing callout */}
          <FadeIn delay={400}>
            <div className="mt-10 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-6">
              <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                The regulatory criterion for digital commodity classification
                centers on a single question: does any person or entity control
                the protocol? Proof-of-Work answers that question with
                computational evidence rather than legal assurance. Every block
                mined is a timestamp of distributed consensus &mdash; an
                auditable record of the network&rsquo;s independence from
                centralized governance.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
