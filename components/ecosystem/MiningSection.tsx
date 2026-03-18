import { Pickaxe } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const stats = [
  { value: "170+", unit: "TH/s", label: "Network Hashrate" },
  { value: "ETCHash", label: "Mining Algorithm" },
  { value: "GPU + ASIC", label: "Compatible Hardware" },
];

export function MiningSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-deep py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-green-subtle)]">
                <Pickaxe size={24} className="text-[var(--brand-green)]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Earn Block Rewards
                </h2>
                <p className="mt-1 text-base text-[var(--text-muted)]">
                  Secure Ethereum Classic and earn ETC by running fukuii
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 80}>
                <div className="rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-5">
                  <p className="text-2xl font-bold font-mono text-[var(--brand-green)]">
                    {stat.value}
                    {stat.unit && (
                      <span className="ml-1 text-sm font-normal">
                        {stat.unit}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="mt-8 max-w-2xl">
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                Following Ethereum&rsquo;s transition to Proof-of-Stake,
                Ethereum Classic absorbed significant mining infrastructure and
                stands alone as the only EVM-compatible chain secured by
                Proof-of-Work. Run{" "}
                <a
                  href="https://github.com/ethereumclassic/fukuii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-semibold text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                >
                  fukuii
                </a>{" "}
                to participate in block production and earn ETC rewards.
                GPU and ASIC mining supported via the ETCHash algorithm.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
