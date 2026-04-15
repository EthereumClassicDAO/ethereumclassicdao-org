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
      <section aria-labelledby="why-decentralization-is-the-regulatory-advantage-heading" className="section-alt relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="why-decentralization-is-the-regulatory-advantage-heading" className="text-3xl font-bold tracking-tight">
              Why Decentralization Is the Regulatory Advantage
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              ETC&rsquo;s regulatory-favorable profile is not a legal workaround.
              It is a direct consequence of genuine decentralization. The
              commodity classification regulators apply to Proof-of-Work assets
              rests on the same technical properties that make PoW valuable as
              settlement infrastructure: censorship resistance, permissionless
              access, and immutability. These are not separate arguments. They
              are the same argument stated from different vantage points.
            </p>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              The properties that satisfy a regulator&rsquo;s decentralization
              test are the same properties that satisfy a custodian&rsquo;s
              settlement finality requirement. Regulators classify ETC as a
              commodity because no one controls it. Custodians prefer it as
              settlement infrastructure for the same reason.
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
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--brand-green)]">
                The Architecture That Matters
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                The distinction that matters to regulated asset custodians is
                between the protocol layer and the application layer. ETC&rsquo;s
                protocol layer is the immutable rail — it processes transactions
                as submitted, with no ability for any party to override, pause,
                or reverse execution. Regulated tokens — stablecoins, tokenized
                securities, compliance-gated instruments — implement freeze,
                pause, and blacklist controls at the application layer, in their
                own smart contracts, as required by their regulators. The rail
                itself stays neutral.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                The internet works the same way. TCP/IP does not inspect packet
                content, does not block websites, and does not enforce
                jurisdiction-specific rules. Compliance happens at the
                application layer — in the services, platforms, and institutions
                that run on top of the protocol. The infrastructure is neutral;
                the applications are regulated. Regulated finance built on ETC
                follows the same architecture: compliance logic in the token,
                settlement guarantee in the network.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                &ldquo;Code is Law&rdquo; is not just a philosophy — it is the operational
                guarantee that the rail will not change under the issuer&rsquo;s feet.
                ETC provides that guarantee. Regulated issuers provide the
                compliance controls on top.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
