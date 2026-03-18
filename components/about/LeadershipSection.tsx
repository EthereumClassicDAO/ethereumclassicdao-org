import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const team = [
  {
    name: "Cody Burns",
    title: "Organizing Member",
    photo: "/cody-burns.png",
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

export function LeadershipSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-gradient relative py-28">
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">Leadership</h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Ethereum Classic DAO LLC builds on nearly a decade of ecosystem
              stewardship — succeeding the ETC Cooperative as the organizational
              home for Ethereum Classic&apos;s core contributors. Coordinating
              network upgrades, client development, and ecosystem infrastructure
              since the chain&apos;s earliest days.
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
        </div>
      </section>
    </>
  );
}
