import {
  Github,
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
    icon: Globe,
    name: "Ethereum Classic",
    description: "Wallets, exchanges, apps, mining, development and research",
    href: "https://ethereumclassic.com",
  },
  {
    icon: Search,
    name: "Block Explorer",
    description: "On-chain transactions, contracts, and analytics",
    href: "https://etc.blockscout.com",
  },
  {
    icon: BookOpen,
    name: "Developer Documentation",
    description: "Tutorials, API references and protocol specifications",
    href: "https://ethereumclassic.com/build/docs",
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
              Ethereum&rsquo;s development infrastructure, configured for
              Ethereum Classic: client libraries, on-chain analytics and protocol
              documentation. The EVM matches Ethereum&rsquo;s through Shanghai, so
              the standards and the developer experience are already familiar.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
