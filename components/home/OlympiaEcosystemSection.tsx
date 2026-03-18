import { Building2, Vote, Landmark, Network } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const entities = [
  {
    icon: Building2,
    name: "Ethereum Classic DAO LLC",
    role: "Legal Entity",
    description:
      "The legal wrapper for the Olympia DAO under Wyoming's DAO LLC framework. Ensures US regulatory compliance, proper reporting, and alignment with federal digital asset legislation including the CLARITY Act and GENIUS Act.",
    href: "https://ethereumclassicdao.org",
    highlighted: true,
  },
  {
    icon: Vote,
    name: "Olympia DAO",
    role: "On-Chain Governance",
    description:
      "Proposal submission, membership-based voting, and transparent execution — all on-chain on Ethereum Classic.",
    href: "https://olympiadao.org",
    highlighted: false,
  },
  {
    icon: Landmark,
    name: "Olympia Treasury",
    role: "Protocol-Funded Treasury",
    description:
      "Transaction fee revenue creates sustainable protocol funding. Real-time treasury monitoring via public dashboard.",
    href: "https://olympiatreasury.org",
    highlighted: false,
  },
  {
    icon: Network,
    name: "Ethereum Classic",
    role: "Network Protocol",
    description:
      "The largest Proof-of-Work smart contract platform. Coordinating network upgrades to maintain EVM protocol parity — ensuring Ethereum Classic delivers a best-in-class EVM experience with every protocol upgrade.",
    href: "https://ethereumclassic.org",
    highlighted: false,
  },
];

export function OlympiaEcosystemSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              Coordinating Organizations
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[var(--text-muted)]">
              Coordinating organizations working together to govern and
              advance the Ethereum Classic network.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {entities.map((entity, i) => (
              <FadeIn key={entity.name} delay={i * 100}>
                <a
                  href={entity.href}
                  target={entity.highlighted ? undefined : "_blank"}
                  rel={entity.highlighted ? undefined : "noopener noreferrer"}
                  className={`group flex flex-col rounded-xl border p-6 transition-all duration-200 hover:-translate-y-0.5 ${
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
