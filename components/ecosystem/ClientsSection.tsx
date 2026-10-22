import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import {
  CORE_GETH_LATEST_RELEASE_URL,
  FUKUII_REPO_URL,
} from "@/lib/network-links";

const featuredClient = {
  name: "Core-Geth",
  language: "Go",
  description:
    "The recommended client for Ethereum Classic: a go-ethereum derivative released and maintained in the ethereumclassic organization, the community's own on GitHub. Not native, and not a plugin. Run the v1.13 line, which closes all six client CVEs the audits found in the v1.12 client code.",
  href: CORE_GETH_LATEST_RELEASE_URL,
  status: "Recommended",
  tag: "go-ethereum derivative",
};

const secondaryClients = [
  {
    name: "Fukuii",
    language: "Scala",
    description:
      "A native Ethereum Classic client and an alternative to Core-Geth, built ground-up for ETC rather than derived from an Ethereum client. An EVM execution client in Scala 3: one binary runs several networks at once in one JVM process, with consensus selected per deployment.",
    github: FUKUII_REPO_URL,
    status: "ETC-native",
  },
  {
    name: "ETC Plugins",
    language: "",
    description:
      "ETC compatibility layers for Besu, Erigon, Ethrex, Go-Ethereum, Nethermind, and Reth bring Ethereum Classic support to the broader Ethereum client ecosystem without maintaining full forks.",
    github: "/clients",
    status: "Future",
  },
];

export function ClientsSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section aria-labelledby="client-implementations-heading" className="section-gradient py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="client-implementations-heading" className="text-3xl font-bold tracking-tight">
              Client Implementations
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Multi-client architecture eliminates single points of failure at
              the protocol layer. Core-Geth is the recommended client, a
              go-ethereum derivative released and maintained in the
              ethereumclassic organization; Fukuii, a native Ethereum Classic
              client, is an alternative to it.
              Distinct codebases in distinct languages, maintained by separate
              teams, mean the network can withstand the discontinuation or
              compromise of any single one. ETC compatibility plugins extend that
              reach to Besu, Erigon, Ethrex, Go-Ethereum, Nethermind, and Reth.
            </p>
          </FadeIn>

          {/* Recommended client — featured */}
          <FadeIn delay={100}>
            <div className="mt-10 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-brand)] shadow-[0_0_24px_var(--border-glow)] p-8 transition-colors hover:border-[var(--border-glow)]">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xl font-bold font-mono">
                      {featuredClient.name}
                    </p>
                    <span className="badge-available">
                      {featuredClient.status}
                    </span>
                    <span className="badge-pending">{featuredClient.tag}</span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--text-subtle)]">
                    {featuredClient.language}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
                {featuredClient.description}
              </p>
              <a
                href={featuredClient.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
              >
                Get the current release →
              </a>
            </div>
          </FadeIn>

          {/* Secondary clients */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {secondaryClients.map((client, i) => {
              const isInternal = client.github.startsWith("/");
              return (
                <FadeIn key={client.name} delay={(i + 2) * 100} className="h-full">
                  <div className="flex flex-col h-full rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-colors hover:border-[var(--border-glow)]">
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
