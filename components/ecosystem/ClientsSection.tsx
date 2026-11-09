import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { V12MoveNote } from "@/components/ui/V12MoveNote";
import {
  CORE_GETH_DOWNLOADS_URL,
  CORE_GETH_LATEST_RELEASE_URL,
  FUKUII_REPO_URL,
  FUKUII_STATUS,
  PLUGINS_STATUS,
  PLUGIN_POSITION,
} from "@/lib/network-links";

const featuredClient = {
  name: "Core-Geth",
  language: "Go",
  description:
    "The recommended client for Ethereum Classic: a go-ethereum downstream released and maintained in the ethereumclassic organization. Run the v1.13 line, which closes all six client CVEs the audits found in the v1.12 client code.",
  href: CORE_GETH_LATEST_RELEASE_URL,
  status: "Recommended",
  tag: "go-ethereum downstream",
};

const secondaryClients = [
  {
    name: "Fukuii",
    language: "Scala",
    description:
      "An EVM-compliant execution client in Scala 3 with pluggable consensus, continuing IOHK's Mantis client and maintained by Chippr Robotics LLC. Its maintainers mark it alpha: an alternative to try beside Core-Geth.",
    github: FUKUII_REPO_URL,
    status: `Alternative · ${FUKUII_STATUS}`,
  },
  {
    name: "ETC Plugins",
    language: "",
    description: `Planned compatibility layers for Besu, Erigon, Ethrex, Go-Ethereum, Nethermind and Reth. ${PLUGIN_POSITION}`,
    github: "/clients",
    status: PLUGINS_STATUS,
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
              Core-Geth is the recommended client, a go-ethereum downstream
              released and maintained in the ethereumclassic GitHub organization.
              Fukuii, an execution client in Scala 3 that Chippr Robotics LLC
              maintains as a continuation of IOHK&rsquo;s Mantis, is an
              alternative to try beside it; its maintainers mark it alpha. ETC
              plugins for Besu, Erigon, Ethrex, Go-Ethereum, Nethermind and Reth
              are planned.
            </p>
          </FadeIn>

          {/* Recommended client — featured */}
          <FadeIn delay={100}>
            <div className="mt-10 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-brand)] p-8 transition-colors hover:border-[var(--border-glow)]">
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
              <V12MoveNote className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]" />
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                <a
                  href={featuredClient.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                >
                  Get the latest release →
                </a>
                <a
                  href={CORE_GETH_DOWNLOADS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                >
                  Downloads →
                </a>
              </div>
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
