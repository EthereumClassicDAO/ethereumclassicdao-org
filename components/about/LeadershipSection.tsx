import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const team = [
  {
    initials: "CB",
    name: "Cody Burns",
    title: "Co-Founder",
    bio: "Longtime Ethereum Classic ecosystem contributor. Background in blockchain research, protocol governance, and decentralized systems.",
    github: "https://github.com/realcodywburns",
  },
  {
    initials: "CM",
    name: "Chris Mercer",
    title: "Co-Founder",
    bio: "Systems architect specializing in blockchain infrastructure, distributed systems, and multi-client protocol coordination.",
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
              The founding team behind Ethereum Classic DAO LLC.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {team.map((person, i) => (
              <FadeIn key={person.name} delay={i * 100}>
                <div className="rounded-xl bg-[var(--bg-elevated)] border border-[rgba(255,255,255,0.06)] p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(0,255,174,0.12)]">
                      <span className="text-sm font-bold font-mono text-[var(--brand-green)]">
                        {person.initials}
                      </span>
                    </div>
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
