import {
  Github,
  LayoutDashboard,
  BookOpen,
  Globe,
  Search,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { PropertyCard } from "@/components/ui/PropertyCard";

const resources = [
  {
    icon: Github,
    name: "GitHub Organization",
    description: "Client implementations, ECIPs, and EVM developer resources",
    href: "https://github.com/ethereumclassic",
  },
  {
    icon: LayoutDashboard,
    name: "Governance App",
    description: "Proposal submission, voting, and execution",
    href: "https://app.olympiadao.org",
  },
  {
    icon: Globe,
    name: "Ethereum Classic",
    description: "Network documentation and community resources",
    href: "https://ethereumclassic.org",
  },
  {
    icon: Search,
    name: "Block Explorer",
    description: "On-chain transactions, contracts, and analytics",
    href: "https://etc.blockscout.com",
  },
  {
    icon: BookOpen,
    name: "ETC Knowledge Base",
    description: "Protocol specifications and developer guides",
    href: "https://ethereumclassic.org/knowledge",
  },
];

export function DeveloperLinksSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="developer-resources-heading" className="section-deep py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="developer-resources-heading" className="text-3xl font-bold tracking-tight">
              Developer Resources
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              The full breadth of Ethereum development infrastructure —
              client libraries, on-chain analytics, governance tooling, and
              protocol documentation — configured for Ethereum Classic. Same
              EVM specification, same standards, same developer experience.
              Everything you need to ship on ETC is already familiar.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r, i) => (
              <FadeIn key={r.name} delay={i * 80}>
                <PropertyCard
                  icon={r.icon}
                  name={r.name}
                  description={r.description}
                  href={r.href}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
