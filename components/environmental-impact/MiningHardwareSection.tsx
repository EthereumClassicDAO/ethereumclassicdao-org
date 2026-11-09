import { Cpu, Server } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function MiningHardwareSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="accessible-hardware-at-every-scale-heading" className="section-alt relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="accessible-hardware-at-every-scale-heading" className="text-3xl font-bold tracking-tight">
              Accessible Hardware at Every Scale
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              ETC&rsquo;s mining participation runs from consumer electronics
              stores to purpose-built ASIC deployments at industrial stranded
              energy sites. That range is not incidental: it is what makes ETC
              viable for stranded energy projects at every scale. A pilot
              installation testing a small remote hydro site uses GPU hardware
              bought at retail, while a commercial wellhead gas operation
              committing long-term capital uses institutional ASIC hardware built
              for Ethash and Etchash. As the only mature smart contract platform
              on Proof-of-Work, ETC offers both ends of that range.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <FadeIn delay={80}>
              <div className="flex flex-col rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:border-[var(--border-glow)] hover:-translate-y-0.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                  <Cpu size={20} className="text-[var(--brand-green)]" />
                </div>
                <h3 className="mt-4 text-base font-semibold">
                  GPU Mining: Retail Accessible
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  AMD, NVIDIA and Intel GPUs are sold by consumer electronics
                  retailers worldwide, and anyone with a gaming PC can help
                  secure ETC. This is what &ldquo;permissionless&rdquo; means at
                  the hardware layer: accessible to anyone, in any jurisdiction,
                  without specialist procurement.
                </p>
                <ul className="mt-4 space-y-1.5">
                  {[
                    "Available at retail globally",
                    "No specialist procurement",
                    "Repurposable for other workloads",
                    "Low barrier to entry",
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <span
                        className="h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]"
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={160}>
              <div className="flex flex-col rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:border-[var(--border-glow)] hover:-translate-y-0.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                  <Server size={20} className="text-[var(--brand-green)]" />
                </div>
                <h3 className="mt-4 text-base font-semibold">
                  ASIC Hardware: Institutional Scale
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  Specialized Ethash and Etchash ASIC miners deliver higher
                  efficiency than GPUs. Available from specialized manufacturers,
                  they make industrial-scale deployments possible at stranded
                  energy sites, remote hydro installations and wellhead gas
                  locations.
                </p>
                <ul className="mt-4 space-y-1.5">
                  {[
                    "Higher hash efficiency than GPU",
                    "Built for Ethash and Etchash",
                    "Industrial deployment at scale",
                    "Optimized for stranded energy sites",
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <span
                        className="h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]"
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <p className="mt-10 border-l-2 border-[var(--brand-green)] pl-4 text-sm text-[var(--text-muted)]">
              Retail GPU accessibility and institutional ASIC infrastructure
              together give ETC a mining participation curve that runs from a
              single gaming PC to an industrial site.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mt-6 rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-5">
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                The Olympia Proposal
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                As proposed, Olympia would credit the EIP-1559 base fee to a
                treasury that only on-chain governance could spend, so that the
                client software mining operations depend on would have a funding
                source in the protocol. The base fee would be paid by the
                transactions in each block rather than by miners, and block
                rewards and priority-fee tips would still go to miners. The upgrade is targeted for 2027,
                and its ECIPs are drafts.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <div className="mt-4 rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-5">
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                Mined in America Act
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                The Mined in America Act, a bill introduced in the Senate in March
                2026, would establish a voluntary federal certification program
                for domestic digital asset mining operations, direct NIST and the
                Manufacturing Extension Partnership to support US manufacturing
                of mining equipment, and give certified operations access to
                existing federal energy and rural development programs. Its
                Treasury procurement channel and capital gains exemption would
                apply to certified Bitcoin miners, while the certification
                framework, the support for domestic hardware manufacturing and
                the energy provisions would apply to all Proof-of-Work mining,
                including the Etchash operations securing Ethereum
                Classic&apos;s network.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
