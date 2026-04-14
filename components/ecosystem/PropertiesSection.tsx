import { Vote, Landmark, LayoutDashboard, Github } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { PropertyCard } from "@/components/ui/PropertyCard";

const properties = [
  {
    icon: Vote,
    name: "Olympia DAO",
    description: "Protocol governance — upgrade coordination, ECIP ratification, and network-wide signaling",
    href: "https://olympiadao.org",
  },
  {
    icon: Landmark,
    name: "Olympia Treasury",
    description: "Real-time treasury monitoring — funding allocation, balance, and disbursement history",
    href: "https://olympiatreasury.org",
  },
  {
    icon: LayoutDashboard,
    name: "Governance App",
    description: "Proposal submission, on-chain voting, and execution tooling for network contributors",
    href: "https://app.olympiadao.org",
  },
  {
    icon: Github,
    name: "GitHub",
    description: "Client implementations, governance contracts, and protocol infrastructure — all open-source",
    href: "https://github.com/olympiadao",
  },
];

export function PropertiesSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section aria-labelledby="olympia-governance-framework-heading" className="section-alt py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="olympia-governance-framework-heading" className="text-3xl font-bold tracking-tight">
              Olympia Governance Framework
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Operational infrastructure for core developers, protocol
              contributors, and network security stakeholders. Governance
              tooling, treasury monitoring, and open-source repositories for
              those coordinating on critical infrastructure and emergency
              response.
            </p>
            <a
              href="/governance"
              className="mt-4 inline-flex items-center text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
            >
              Learn about Olympia governance →
            </a>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {properties.map((p, i) => (
              <FadeIn key={p.name} delay={i * 80}>
                <PropertyCard
                  icon={p.icon}
                  name={p.name}
                  description={p.description}
                  href={p.href}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
