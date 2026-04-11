import { Shield, Pickaxe, Lock, History } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const properties = [
  {
    icon: History,
    title: "Original EVM",
    description:
      "Ethereum Classic is the original Ethereum codebase, running continuously since July 2015. No other smart contract platform has a longer operational track record. This history matters to custodians, regulators, and institutional counterparties evaluating operational risk.",
  },
  {
    icon: Lock,
    title: "No Central Issuer or Authority",
    description:
      "No foundation, no pre-mine, no upgrade authority. Protocol changes require community consensus across independent client implementations. There is no entity that can alter supply, freeze accounts, or redirect funds. This matches Bitcoin's commodity profile exactly.",
  },
  {
    icon: Shield,
    title: "Proof-of-Work Makes Censorship Costly",
    description:
      "PoW consensus makes transaction censorship economically prohibitive, not just technically difficult. An attacker must accumulate and sustain more hashrate than the entire honest mining network, continuously and at their own cost. This is the gold standard for settlement finality.",
  },
  {
    icon: Pickaxe,
    title: "Permissionless Mining Infrastructure",
    description:
      "GPU mining hardware is available at retail electronics stores globally. ASIC manufacturers have produced ETC-specific hardware for institutional deployments. Any entity in any jurisdiction can participate in network security, with true permissionless access at every scale.",
  },
];

export function ETCDecentralizationSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="why-decentralization-is-the-regulatory-advantage-heading" className="section-gradient relative py-28">
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 id="why-decentralization-is-the-regulatory-advantage-heading" className="text-3xl font-bold tracking-tight">
              Why Decentralization Is the Regulatory Advantage
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              ETC&rsquo;s regulatory-favorable profile is not a legal
              workaround. It is a direct consequence of genuine
              decentralization. The properties that make regulators classify ETC
              as a commodity are the same properties that make it valuable as
              settlement infrastructure.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-8">
            {properties.map((p, i) => (
              <FadeIn key={p.title} delay={i * 80}>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <p.icon size={20} className="text-[var(--brand-green)]" />
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

          <FadeIn>
            <div className="mt-12 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-6">
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                &ldquo;Code is Law&rdquo; is not just a philosophy. It is an
                operational guarantee that regulated asset custodians can
                rely upon. When ETC smart contracts execute, they execute as
                written. No override, no rollback, no exception. This
                immutability is what institutional settlement requires.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
