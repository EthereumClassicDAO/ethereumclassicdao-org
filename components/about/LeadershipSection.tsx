import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { COOPERATIVE_ARCHIVE_URL } from "@/lib/network-links";

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
    bio: "Core contributor since Ethereum Classic's first year, active across governance, client development and the application layer. Deployed Classic USD, a GENIUS Act-aligned stablecoin, on Ethereum Classic, and builds the composable DeFi infrastructure the network's institutional use depends on. Leads work on the application layer and on the on-chain governance architecture the Olympia proposal specifies.",
    github: "https://github.com/chris-mercer",
  },
];

const orgs = [
  {
    name: "ETC Cooperative",
    role: "Foundational Organization",
    description:
      "The ETC Cooperative, a US 501(c)(3) non-profit founded in 2017 by Ethereum Classic's earliest core contributors, contributed millions of dollars to Ethereum Classic's client teams and infrastructure. From January 2022 it funded and maintained Core-Geth through the Mystique and Spiral upgrades, along with the peer discovery lists, the bootnodes and the public JSON-RPC endpoints. It entered maintenance mode at the end of 2024, and the public goods it maintained continue in the ethereumclassic organization, where Ethereum Classic DAO maintains and funds them today as the funder of last resort.",
    href: COOPERATIVE_ARCHIVE_URL,
    label: "etccooperative.org (archived)",
  },
  {
    name: "Grayscale Investments",
    role: "Regulated Investment Products",
    description:
      "Grayscale pioneered regulated institutional access to Ethereum Classic in 2017, years before Bitcoin ETFs existed as a product category, and became a major institutional donor to the ETC Cooperative, indirectly funding core client development for the network underpinning its product. Few, if any, investment product issuers were doing this at the time. The Grayscale Ethereum Classic Trust (ETCG) is quoted on OTCQX and available through Charles Schwab, Fidelity and Interactive Brokers.",
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
              Ethereum Classic has been carried since 2016 by a global network of
              contributors, many of them volunteers, who maintain the chain,
              coordinate upgrades and build the ecosystem. The ETC Cooperative,
              founded in 2017, funded core development and infrastructure for
              nearly a decade with no funding source in the protocol, sustained
              in large part by donations from Grayscale, whose Ethereum Classic
              Trust is held by a widely distributed base of investors. Ethereum
              Classic DAO continues that commitment today as the legal entity
              behind the network&rsquo;s public goods in the ethereumclassic
              organization, built to grow with the network.
            </p>
            <Link
              href="/stewardship"
              className="mt-4 inline-flex items-center text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
            >
              How this work is maintained and funded &rarr;
            </Link>
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
            <h3 className="mt-16 text-xl font-bold">Foundational Organizations</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              The organizations whose funded development and regulated institutional access laid the foundation Ethereum Classic DAO builds on.
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
