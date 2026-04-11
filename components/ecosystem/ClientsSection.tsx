import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const primaryClient = {
  name: "Fukuii",
  language: "Scala",
  description:
    "Purpose-built for Ethereum Classic, an independent implementation designed from the ground up for performance, security, and protocol parity. Primary client for the Olympia upgrade.",
  github: "https://github.com/ethereumclassic/fukuii",
  status: "Primary",
};

const secondaryClients = [
  {
    name: "Core-Geth",
    language: "Go",
    description:
      "Two security releases shipped addressing CVE mitigations and DNS discovery updates. The established mainnet client continuing in a maintenance role alongside next-generation implementations.",
    github: "https://github.com/ethereumclassic/core-geth",
    status: "Maintained",
  },
  {
    name: "ETC Plugins",
    language: "",
    description:
      "ETC compatibility layers for Besu, Erigon, Go-Ethereum, and Nethermind bring Ethereum Classic support to the broader Ethereum client ecosystem without maintaining full forks.",
    github: "/clients",
    status: "Plugins",
  },
];

export function ClientsSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section aria-labelledby="client-implementations-heading" className="section-deep py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="client-implementations-heading" className="text-3xl font-bold tracking-tight">
              Client Implementations
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Multi-client architecture ensures no single codebase controls the
              network. Two full clients and four ETC plugins cover the full
              Ethereum client ecosystem.
            </p>
          </FadeIn>

          {/* Primary client — featured */}
          <FadeIn delay={100}>
            <div className="mt-10 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-brand)] shadow-[0_0_24px_var(--border-glow)] p-8 transition-colors hover:border-[var(--border-glow)]">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <p className="text-xl font-bold font-mono">
                      {primaryClient.name}
                    </p>
                    <span className="badge-available">
                      {primaryClient.status}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[var(--brand-green-subtle)] px-2.5 py-0.5 text-xs font-semibold text-[var(--brand-green)]">
                      Olympia Client
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
            {secondaryClients.map((client, i) => {
              const isInternal = client.github.startsWith("/");
              return (
                <FadeIn key={client.name} delay={(i + 2) * 100}>
                  <div className="flex flex-col rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-colors hover:border-[var(--border-glow)]">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-base font-semibold font-mono">
                          {client.name}
                        </p>
                        {client.language && (
                          <p className="mt-1 text-xs text-[var(--text-subtle)]">
                            {client.language}
                          </p>
                        )}
                      </div>
                      <span className="badge-pending">{client.status}</span>
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                      {client.description}
                    </p>
                    <a
                      href={client.github}
                      {...(!isInternal && { target: "_blank", rel: "noopener noreferrer" })}
                      className="mt-4 inline-flex items-center text-xs font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                    >
                      {isInternal ? "View all clients →" : "View on GitHub →"}
                    </a>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
