import { Vote, Landmark, LayoutDashboard, Github } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { PropertyCard } from "@/components/ui/PropertyCard";

const properties = [
  {
    icon: Vote,
    name: "Olympia DAO",
    description: "Governance landing page",
    href: "https://olympiadao.org",
  },
  {
    icon: Landmark,
    name: "Olympia Treasury",
    description: "Treasury monitoring dashboard",
    href: "https://olympiatreasury.org",
  },
  {
    icon: LayoutDashboard,
    name: "Governance App",
    description: "Proposal submission, voting, and execution",
    href: "https://app.olympiadao.org",
  },
  {
    icon: Github,
    name: "GitHub",
    description: "Open-source repositories",
    href: "https://github.com/EthereumClassicDAO",
  },
];

export function EcosystemSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight">Ecosystem</h2>
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              The Olympia governance ecosystem spans multiple open-source web
              properties.
            </p>
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
