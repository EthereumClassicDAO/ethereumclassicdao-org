import { Shield, Pickaxe, Lock, History } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const properties = [
  {
    icon: History,
    title: "Original EVM",
    description:
      "Ethereum Classic continues the original Ethereum chain, running since July 2015, one of the longest operating records of any smart contract platform. Custodians, regulators and institutional counterparties weigh that history when they assess operational risk.",
  },
  {
    icon: Lock,
    title: "No Central Issuer or Authority",
    description:
      "No foundation and no upgrade authority. Protocol changes require community consensus across independent client implementations, and no entity can alter supply, freeze accounts or redirect funds. This matches Bitcoin's commodity profile.",
  },
  {
    icon: Shield,
    title: "Proof-of-Work Makes Censorship Costly",
    description:
      "Proof-of-Work makes transaction censorship economically prohibitive, not just technically difficult: an attacker must accumulate and sustain more hashrate than the honest mining network, continuously and at their own cost. Settlement finality on a Proof-of-Work chain rests on that cost.",
  },
  {
    icon: Pickaxe,
    title: "Permissionless Mining Infrastructure",
    description:
      "GPU mining hardware is sold by electronics retailers worldwide, and ASIC manufacturers build Etchash hardware for institutional deployments. Anyone in any jurisdiction can take part in securing the network, at any scale.",
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
              ETC&rsquo;s favorable regulatory profile is not a legal workaround.
              It follows directly from genuine decentralization. The commodity
              classification regulators apply to Proof-of-Work assets rests on
              the same technical properties that make Proof-of-Work valuable as
              settlement infrastructure: censorship resistance, permissionless
              access and immutability.
            </p>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              The properties that satisfy a regulator&rsquo;s decentralization
              test are the same ones that satisfy a custodian&rsquo;s settlement
              finality requirement. Regulators who classify Proof-of-Work assets
              as commodities do so because no one controls them, and custodians
              value ETC as settlement infrastructure for the same reason.
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
                protocol layer is the immutable rail: it processes transactions as
                submitted, and no party can override, pause or reverse execution.
                Regulated tokens, such as stablecoins, tokenized securities and
                compliance-gated instruments, implement freeze, pause and
                blacklist controls at the application layer, in their own smart
                contracts, as their regulators require. The rail itself stays
                neutral.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                The internet works the same way. TCP/IP does not inspect packet
                content, block websites or enforce jurisdiction-specific rules.
                Compliance happens at the application layer, in the services,
                platforms and institutions that run on top of the protocol. The
                infrastructure is neutral; the applications are regulated.
                Regulated finance built on ETC follows the same architecture:
                compliance logic in the token, settlement guarantee in the
                network.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                &ldquo;Code is Law&rdquo; is not just a philosophy: it is the
                operational guarantee that the rail will not override what an
                issuer&rsquo;s contracts do. ETC provides that guarantee, and
                regulated issuers provide the compliance controls on top.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
