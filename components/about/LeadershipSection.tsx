import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const team = [
  {
    name: "Cody Burns",
    title: "Organizing Member",
    photo: "/cody-burns.jpeg",
    bio: "Founding Ethereum Classic contributor and technical lead on every major network upgrade since the chain's inception in 2016. Architect of the Thanos mining algorithm upgrade and principal developer across multiple ETC client implementations. A decade of protocol architecture and institutional engagement has placed Ethereum Classic at the intersection of digital commodity regulation and programmable finance.",
    github: "https://github.com/realcodywburns",
  },
  {
    name: "Chris Mercer",
    title: "Organizing Member",
    photo: "/chris-mercer.jpeg",
    bio: "Core contributor since Ethereum Classic's first year, active across governance, client development, and the application layer. Deployed Classic USD — a MiCA and GENIUS Act-compliant stablecoin — on Ethereum Classic, building the composable DeFi and governance infrastructure the network's institutional utility depends on. Leads the application layer and on-chain governance architecture underpinning ETC's institutional and developer ecosystem.",
    github: "https://github.com/chris-mercer",
  },
];

const orgs = [
  {
    name: "ETC Cooperative",
    role: "Foundational Organization",
    description:
      "Founded in 2017 by and composed of Ethereum Classic's earliest core contributors, ETC Cooperative is a US 501(c)(3) non-profit that contributed millions of dollars to Ethereum Classic's client teams and infrastructure — backing every hard fork, every client release, and every cross-client coordination effort since Atlantis. Ethereum Classic DAO LLC and Olympia DAO build on that foundational work, extending it into protocol-native governance and treasury infrastructure.",
    href: "https://etccooperative.org",
    label: "etccooperative.org",
  },
  {
    name: "Grayscale Investments",
    role: "Regulated Investment Products",
    description:
      "Grayscale pioneered regulated institutional access to Ethereum Classic in 2018 — years before Bitcoin ETFs existed as a product category — and became a major institutional donor to the ETC Cooperative, indirectly funding the core client development of the network underpinning their product. No other investment product issuer was doing this at the time. The Grayscale Ethereum Classic Trust (ETCG) trades on OTCQX and is accessible through Charles Schwab, Fidelity, and Interactive Brokers.",
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
              Ethereum Classic has been stewarded since 2016 by a global network
              of volunteer contributors — maintaining the chain, coordinating
              upgrades, and building the ecosystem before any formal organization
              existed. The ETC Cooperative formalized that work in 2017, funding
              core development and infrastructure for nearly a decade, sustained
              in large part by distributed ETCG holders whose management fees
              backed the network before protocol-native funding existed. Ethereum
              Classic DAO LLC is the institutional expression of that continuity
              — the same contributors, the same commitment, built to grow with the network and the global adoption of blockchain infrastructure.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {team.map((person, i) => (
              <FadeIn key={person.name} delay={i * 100} className="h-full">
                <div className="h-full rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6">
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
              The organizations whose decade of funded development and regulated institutional access built the foundation Ethereum Classic DAO LLC continues.
            </p>
          </FadeIn>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {orgs.map((org, i) => (
              <FadeIn key={org.name} delay={i * 100} className="h-full">
                <div className="flex flex-col h-full rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-all duration-200 hover:border-[var(--border-glow)] hover:-translate-y-0.5">
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
