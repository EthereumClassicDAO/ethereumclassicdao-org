import { Cpu, Server } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function MiningHardwareSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-alt relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              Accessible Hardware at Every Scale
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              ETC has the widest mining participation curve of any smart
              contract platform, spanning retail electronics stores to industrial
              ASIC deployments at stranded energy sites.
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
                  AMD and NVIDIA GPUs are available at consumer electronics
                  stores globally. Any individual with a gaming PC can
                  participate in ETC network security. This is what
                  &ldquo;permissionless&rdquo; means at the hardware layer:
                  truly accessible to anyone, in any jurisdiction, without
                  specialist procurement.
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
                  Specialized Ethash/ETChash ASIC miners purpose-built for ETC
                  deliver higher efficiency than GPUs and are optimized for the
                  ETChash algorithm. Available from specialized manufacturers,
                  they enable industrial-scale deployments at stranded energy
                  sites, remote hydro installations, and wellhead gas locations.
                </p>
                <ul className="mt-4 space-y-1.5">
                  {[
                    "Higher hash efficiency than GPU",
                    "Purpose-built for ETChash algorithm",
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
              No other smart contract platform has both retail GPU accessibility
              and institutional ASIC infrastructure, giving ETC the widest
              possible mining participation curve.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mt-6 rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-5">
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                Olympia Connection
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                The Olympia upgrade&apos;s EIP-1559 basefee treasury creates a
                sustainable funding source for the client software that mining
                operations depend on. Every transaction on the network generates
                basefee revenue that flows to the protocol treasury, which
                governance then allocates to core client development,
                infrastructure, and network security. The economics of mining
                ETC directly fund the software that keeps it worth mining.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
