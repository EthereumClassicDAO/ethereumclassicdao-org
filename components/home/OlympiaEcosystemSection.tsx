import { Building2, Vote, Landmark, Network } from "lucide-react";
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
      "The largest Proof-of-Work smart contract platform, trading on 300+ markets across 20+ global exchanges with fiat pairs spanning every major currency region. Recognized across six major global regulatory frameworks spanning four continents — the broadest institutional access profile of any Proof-of-Work network.",
    href: "https://ethereumclassic.org",
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
              Coordinating organizations working together to govern and
              advance the Ethereum Classic network.
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
