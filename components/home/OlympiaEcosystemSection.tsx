import { Building2, Vote, Landmark, Network, HeartHandshake, BarChart3 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const entities = [
  {
    icon: Building2,
    name: "Ethereum Classic DAO LLC",
    role: "Legal Entity",
    description:
      "The legal wrapper for the Olympia DAO under Wyoming's DAO LLC framework. Ensures global regulatory compliance and proper reporting, with alignment to federal digital asset legislation including the CLARITY Act, GENIUS Act, and Mined in America Act.",
    href: "https://ethereumclassicdao.org",
    highlighted: true,
  },
  {
    icon: Vote,
    name: "Olympia DAO",
    role: "On-Chain Governance",
    description:
      "On-chain governance for Ethereum Classic core development: open proposal submission, transparent voting and execution on ETC. A futarchy layer is planned to add public market signals from any participant — financially-backed predictions informing treasury allocation alongside votes.",
    href: "https://olympiadao.org",
    highlighted: false,
  },
  {
    icon: Landmark,
    name: "Olympia Treasury",
    role: "Protocol-Funded Treasury",
    description:
      "Sustainable protocol funding from basefee revenue, voluntary on-chain donations, and mining contributions — block rewards and tips go entirely to miners. Futarchy market activity generates additional transaction volume that feeds back as basefee revenue, creating a self-reinforcing funding loop.",
    href: "https://olympiatreasury.org",
    highlighted: false,
  },
  {
    icon: Network,
    name: "Ethereum Classic",
    role: "Network Protocol",
    description:
      "The largest Proof-of-Work smart contract platform, trading on 300+ markets across 20+ global exchanges with fiat pairs spanning every major currency region. Recognized across leading global regulatory frameworks in the US, EU, UK, Japan, and UAE — the broadest institutional access profile of any Proof-of-Work network.",
    href: "https://ethereumclassic.com",
    highlighted: false,
  },
  {
    icon: HeartHandshake,
    name: "ETC Cooperative",
    role: "Foundational Organization",
    description:
      "Founded in 2017 by and composed of Ethereum Classic's earliest core contributors, ETC Cooperative is a US 501(c)(3) non-profit that contributed millions of dollars to Ethereum Classic's client teams and infrastructure — backing every hard fork, every client release, and every cross-client coordination effort since Atlantis. Ethereum Classic DAO LLC and Olympia DAO build on that foundational work, extending it into protocol-native governance and treasury infrastructure.",
    href: "https://etccooperative.org",
    highlighted: false,
  },
  {
    icon: BarChart3,
    name: "Grayscale Investments",
    role: "Regulated Investment Products",
    description:
      "Grayscale pioneered regulated institutional access to Ethereum Classic in 2018 — years before Bitcoin ETFs existed as a product category — and became a major institutional donor to the ETC Cooperative, indirectly funding the core client development of the network underpinning their product. The Grayscale Ethereum Classic Trust (ETCG) trades on OTCQX and is accessible through Charles Schwab, Fidelity, and Interactive Brokers.",
    href: "https://grayscale.com/crypto-products/grayscale-ethereum-classic-trust/",
    highlighted: false,
  },
];

export function OlympiaEcosystemSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section aria-labelledby="coordinating-organizations-heading" className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="coordinating-organizations-heading" className="text-3xl font-bold tracking-tight">
              Coordinating Organizations
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Ethereum Classic&rsquo;s governance infrastructure is
              coordinated across legal, protocol, treasury, and network
              layers, alongside the foundational organizations &mdash; the
              ETC Cooperative and Grayscale Investments &mdash; whose decade
              of funded development and regulated institutional access built
              the foundation this infrastructure continues.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {entities.map((entity, i) => (
              <FadeIn key={entity.name} delay={i * 100} className="h-full">
                <a
                  href={entity.href}
                  target={entity.highlighted ? undefined : "_blank"}
                  rel={entity.highlighted ? undefined : "noopener noreferrer"}
                  className={`group flex flex-col h-full rounded-xl border p-6 transition-all duration-200 hover:-translate-y-0.5 ${
                    entity.highlighted
                      ? "bg-[var(--bg-elevated)] border-[var(--border-brand)] shadow-[0_0_24px_var(--border-glow)]"
                      : "bg-[var(--bg-elevated)] border-[var(--divider)] hover:border-[var(--border-glow)]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                      <entity.icon
                        size={20}
                        className="text-[var(--brand-green)]"
                      />
                    </div>
                    {entity.highlighted && (
                      <span className="badge-available">Current</span>
                    )}
                  </div>
                  <h3 className="mt-4 text-base font-semibold font-mono">
                    {entity.name}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--text-subtle)]">
                    {entity.role}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                    {entity.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-xs font-medium text-[var(--brand-green)] transition-colors group-hover:text-[var(--brand-green-hover)]">
                    Visit{" "}
                    <span className="ml-1 transition-transform group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
