import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const team = [
  {
    name: "Cody Burns",
    title: "Organizing Member",
    photo: "/cody-burns.jpeg",
    bio: "Core contributor to Ethereum Classic since 2016. Active across client development, ecosystem infrastructure, and community coordination.",
    github: "https://github.com/realcodywburns",
  },
  {
    name: "Chris Mercer",
    title: "Organizing Member",
    photo: "/chris-mercer.jpeg",
    bio: "Core contributor to Ethereum Classic since 2017. Active across protocol governance, application infrastructure, and developer tooling.",
    github: "https://github.com/chris-mercer",
  },
];

const orgs = [
  {
    name: "ETC Cooperative",
    role: "Foundational Organization",
    description:
      "Founded in 2017, ETC Cooperative served as the primary organizational home for Ethereum Classic core development and ecosystem funding for nearly a decade. Ethereum Classic DAO LLC and Olympia DAO build on that foundational work, extending it into protocol-native governance and treasury infrastructure.",
    href: "https://etccooperative.org",
    label: "etccooperative.org",
  },
  {
    name: "Grayscale Investments",
    role: "Regulated Investment Products",
    description:
      "Grayscale has provided regulated securities exposure to Ethereum Classic since 2018 via the Grayscale Ethereum Classic Trust (ETCG), trading on OTCQX and accessible through Charles Schwab, Fidelity, and Interactive Brokers.",
    href: "https://grayscale.com/crypto-products/grayscale-ethereum-classic-trust/",
    label: "grayscale.com",
  },
];

export function LeadershipSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="leadership-heading" className="section-gradient relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="leadership-heading" className="text-3xl font-bold tracking-tight">Leadership</h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Ethereum Classic DAO LLC extends nearly a decade of ecosystem
              stewardship built by the ETC Cooperative, continuing as the
              organizational home for Ethereum Classic&apos;s core contributors. The
              work of coordinating network upgrades, client development, and
              ecosystem infrastructure has continued uninterrupted since the
              chain&apos;s earliest days.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {team.map((person, i) => (
              <FadeIn key={person.name} delay={i * 100}>
                <div className="rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 rounded-full object-cover grayscale"
                    />
                    <div>
                      <p className="text-base font-semibold">{person.name}</p>
                      <p className="text-xs text-[var(--text-subtle)]">
                        {person.title}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                    {person.bio}
                  </p>
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-xs font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                  >
                    GitHub &rarr;
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <h3 className="mt-16 text-xl font-bold">Key Partners</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Organizations that have shaped and continue to support the Ethereum
              Classic ecosystem.
            </p>
          </FadeIn>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {orgs.map((org, i) => (
              <FadeIn key={org.name} delay={i * 100}>
                <div className="flex flex-col rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-all duration-200 hover:border-[var(--border-glow)] hover:-translate-y-0.5">
                  <p className="text-base font-semibold">{org.name}</p>
                  <p className="mt-0.5 text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                    {org.role}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                    {org.description}
                  </p>
                  <Link
                    href={org.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-xs font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                  >
                    {org.label} &rarr;
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
