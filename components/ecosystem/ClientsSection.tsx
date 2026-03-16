import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const primaryClient = {
  name: "fukuii",
  language: "Scala",
  description:
    "The Olympia primary client — built from scratch as an independent ETC implementation in Scala. Full SNAP sync, 2,300+ tests, and first-class Olympia protocol support. Fukuii is the reference client for the Olympia governance upgrade.",
  github: "https://github.com/ethereumclassic/fukuii",
  status: "Production",
  featured: true,
};

const secondaryClients = [
  {
    name: "core-geth",
    language: "Go",
    description:
      "Long-standing ETC client forked from go-ethereum. Full ETC protocol history and battle-tested stability. Maintenance mode — critical fixes only.",
    github: "https://github.com/ethereumclassic/core-geth",
    status: "Maintenance",
  },
  {
    name: "besu",
    language: "Java",
    description:
      "Hyperledger Besu with ETC protocol support. JDK 21 LTS. Used as a reference test client for cross-client protocol verification.",
    github: "https://github.com/ethereumclassic/besu",
    status: "Reference",
  },
];

export function ClientsSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section className="section-deep py-28">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              Client Implementations
            </h2>
            <p className="mt-3 max-w-xl text-base text-[var(--text-muted)]">
              Three independent client implementations ensure decentralization
              and resilience. Fukuii leads Olympia protocol development.
            </p>
          </FadeIn>

          {/* Primary client — featured */}
          <FadeIn delay={100}>
            <div className="mt-10 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-brand)] shadow-[0_0_24px_rgba(0,255,174,0.07)] p-8 transition-colors hover:border-[var(--border-glow)]">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <p className="text-xl font-bold font-mono">
                      {primaryClient.name}
                    </p>
                    <span className="badge-available">
                      {primaryClient.status}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[rgba(0,255,174,0.12)] px-2.5 py-0.5 text-xs font-semibold text-[var(--brand-green)]">
                      Olympia Primary
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--text-subtle)]">
                    {primaryClient.language}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)] max-w-2xl">
                {primaryClient.description}
              </p>
              <a
                href={primaryClient.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
              >
                View on GitHub →
              </a>
            </div>
          </FadeIn>

          {/* Secondary clients */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {secondaryClients.map((client, i) => (
              <FadeIn key={client.name} delay={(i + 2) * 100}>
                <div className="flex flex-col rounded-xl bg-[var(--bg-elevated)] border border-[rgba(255,255,255,0.06)] p-6 transition-colors hover:border-[var(--border-glow)]">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-base font-semibold font-mono">
                        {client.name}
                      </p>
                      <p className="mt-1 text-xs text-[var(--text-subtle)]">
                        {client.language}
                      </p>
                    </div>
                    <span className="badge-pending">{client.status}</span>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                    {client.description}
                  </p>
                  <a
                    href={client.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-xs font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                  >
                    View on GitHub →
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
