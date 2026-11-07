import Link from "next/link";
import { Vote, Landmark, LayoutDashboard, Github } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { PropertyCard } from "@/components/ui/PropertyCard";
import {
  OLYMPIA_APP_URL,
  OLYMPIA_DAO_URL,
  OLYMPIA_GITHUB_URL,
  OLYMPIA_TREASURY_SITE_URL,
} from "@/lib/network-links";

const properties = [
  {
    icon: Vote,
    name: "Olympia DAO",
    description: "The proposal's own site: how Olympia DAO would govern, admit members and fund work",
    href: OLYMPIA_DAO_URL,
  },
  {
    icon: Landmark,
    name: "Olympia Treasury",
    description: "The treasury site: how the Treasury at the Sovereignty Vault address would be funded and spent",
    href: OLYMPIA_TREASURY_SITE_URL,
  },
  {
    icon: LayoutDashboard,
    name: "Governance App",
    description: "The application through which proposals would be composed, voted on and executed",
    href: OLYMPIA_APP_URL,
  },
  {
    icon: Github,
    name: "GitHub",
    description: "Olympia's open-source repositories: the governance contracts and the Olympia sites",
    href: OLYMPIA_GITHUB_URL,
  },
];

/** Olympia's sites. `hubLink` adds a link to /olympia, for the pages other than the hub itself. */
export function PropertiesSection({ hubLink = true }: { hubLink?: boolean }) {
  return (
    <>
      <SectionDivider variant="strong" />
      <section aria-labelledby="olympia-sites-heading" className="section-alt py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="olympia-sites-heading" className="text-3xl font-bold tracking-tight">
              Olympia&rsquo;s Sites
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Olympia is a proposal, developed in the open on sites of its own.
              Its ECIPs are drafts, and the ECIPs repository remains the
              authority on what it specifies.
            </p>
            {hubLink && (
              <Link
                href="/olympia"
                className="mt-4 inline-flex items-center text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
              >
                The Olympia proposal →
              </Link>
            )}
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
