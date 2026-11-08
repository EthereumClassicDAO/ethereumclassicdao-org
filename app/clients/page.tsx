import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Cite } from "@/components/ui/Cite";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { ExternalLink } from "lucide-react";
import { fetchHashrateTHs, fetchAllHashrateHistories } from "@/lib/api/hashrate";
import { HashrateChart } from "@/components/about/HashrateChart";
import {
  CORE_GETH_DISCOVERY_FLAG_URL,
  CORE_GETH_DOCS_URL,
  CORE_GETH_DOWNLOADS_URL,
  CORE_GETH_HOMEPAGE_URL,
  CORE_GETH_LATEST_RELEASE_URL,
  CORE_GETH_MIGRATION_URL,
  CORE_GETH_UPGRADE_URL,
  FUKUII_DOCS_URL,
  FUKUII_HOMEPAGE_URL,
  FUKUII_LATEST_RELEASE_URL,
  FUKUII_STATUS,
  PLUGINS_STATUS,
  PLUGIN_POSITION,
} from "@/lib/network-links";

export const metadata: Metadata = {
  title: "Ethereum Classic Clients: Core-Geth",
  description:
    "Core-Geth is the recommended Ethereum Classic client: run the v1.13 line, and move a v1.12 node to it. Fukuii, in alpha, is an alternative to try.",
  keywords: [
    "Core-Geth",
    "Core-Geth release",
    "Fukuii",
    "Ethereum Classic client",
    "ETC node",
    "Scala blockchain client",
    "EVM execution client",
    "Go Ethereum Classic",
    "ETC full node",
    "blockchain client implementation",
    "SNAP sync",
    "ETChash",
    "ETC node operator",
    "ETC RPC node",
    "Mordor testnet client",
    "ETC client software",
  ],
};

const clients = [
  {
    name: "Core-Geth",
    language: "Go",
    languageColor: "#00ADD8",
    role: "Recommended",
    roleTheme: "brand" as const,
    description:
      "The recommended client for Ethereum Classic: a go-ethereum derivative released and maintained in the ethereumclassic GitHub organization. Not native, and not a plugin. Run the v1.13 line, which closes all six client CVEs the audits found in the v1.12 client code and is built with a supported Go toolchain. Take the current release from ethereumclassic/core-geth, where every release file carries a checksum and a build attestation.",
    note: (
      <>
        Every node still on a v1.12 release should move to the v1.13 line:{" "}
        <Cite href={CORE_GETH_UPGRADE_URL}>Downloads on coregeth.com</Cite> has
        the commands and checksums, and the{" "}
        <Cite href={CORE_GETH_MIGRATION_URL}>migration guide</Cite> has the
        steps, including the required P2P node key rotation. A v1.12 node that
        cannot move yet can{" "}
        <Cite href={CORE_GETH_DISCOVERY_FLAG_URL}>
          add the{" "}
          <code className="whitespace-nowrap font-mono">--discovery.dns</code>{" "}
          flag
        </Cite>{" "}
        to read the ethereumclassic organization&rsquo;s peer discovery lists, a
        small step that closes none of the flaws the audits found in the v1.12
        line.
      </>
    ),
    websiteUrl: CORE_GETH_HOMEPAGE_URL,
    downloadsUrl: CORE_GETH_DOWNLOADS_URL,
    docsUrl: CORE_GETH_DOCS_URL,
    releasesUrl: CORE_GETH_LATEST_RELEASE_URL,
  },
  {
    name: "Fukuii",
    language: "Scala",
    languageColor: "#DC322F",
    role: "Alternative",
    roleTheme: "muted" as const,
    status: FUKUII_STATUS,
    description:
      "An EVM-compliant execution client in Scala 3 with pluggable consensus: native Proof-of-Work for Ethereum Classic and Mordor, and the Engine API for post-Merge Ethereum networks, paired with a consensus client. It continues IOHK's Mantis client and is maintained by Chippr Robotics LLC under Apache 2.0. Its maintainers mark it alpha, not yet recommended for production-critical workloads, so it is an alternative to try beside Core-Geth, the recommended client.",
    websiteUrl: FUKUII_HOMEPAGE_URL,
    docsUrl: FUKUII_DOCS_URL,
    releasesUrl: FUKUII_LATEST_RELEASE_URL,
  },
];

// Cards link the upstream project each plugin targets.
const plugins = [
  {
    name: "Besu",
    language: "Java",
    languageColor: "#B07219",
    upstreamUrl: "https://github.com/besu-eth/besu",
    description: "A plugin that would add ETC support to the Besu codebase.",
  },
  {
    name: "Erigon",
    language: "Go",
    languageColor: "#00ADD8",
    upstreamUrl: "https://github.com/erigontech/erigon",
    description: "A plugin that would add ETC support to the Erigon codebase.",
  },
  {
    name: "Ethrex",
    language: "Rust",
    languageColor: "#DEA584",
    upstreamUrl: "https://github.com/lambdaclass/ethrex",
    description: "A plugin that would add ETC support to the Ethrex codebase.",
  },
  {
    name: "Go-Ethereum",
    language: "Go",
    languageColor: "#00ADD8",
    upstreamUrl: "https://github.com/ethereum/go-ethereum",
    description: "A plugin that would add ETC support to the Go-Ethereum codebase.",
  },
  {
    name: "Nethermind",
    language: "C#",
    languageColor: "#178600",
    upstreamUrl: "https://github.com/NethermindEth/nethermind",
    description: "A plugin that would add ETC support to the Nethermind codebase.",
  },
  {
    name: "Reth",
    language: "Rust",
    languageColor: "#DEA584",
    upstreamUrl: "https://github.com/paradigmxyz/reth",
    description: "A plugin that would add ETC support to the Reth codebase.",
  },
];

export default async function ClientsPage() {
  const [hashrateTHs, hashrateHistories] = await Promise.all([
    fetchHashrateTHs(),
    fetchAllHashrateHistories(),
  ]);

  return (
    <main>
      <section className="hero-gradient relative pt-32 pb-16">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
              Network Software
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              <span className="text-[var(--brand-green)]">Client</span> Implementations
            </h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-4 text-lg text-[var(--text-muted)]">
              Core-Geth is the recommended client for Ethereum Classic. Fukuii is
              an alternative to try beside it, and ETC plugins for upstream
              clients are planned.
            </p>
          </FadeIn>
          <FadeIn delay={180}>
            <div className="mt-8">
              <div className="mb-3 flex items-end gap-3">
                <p data-live="" className="text-3xl font-bold font-mono text-[var(--brand-green)]">
                  {hashrateTHs.toFixed(1)}{" "}
                  <span className="text-base font-normal">TH/s</span>
                </p>
                <span className="mb-0.5 inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-2.5 py-1 font-mono text-[10px] text-[var(--brand-green)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
                  Live
                </span>
              </div>
              <HashrateChart histories={hashrateHistories} currentTHs={hashrateTHs} />
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      <section className="section-alt py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {clients.map((client, i) => (
              <FadeIn key={client.name} delay={i * 80} className="h-full">
                <div className="h-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold"
                      style={{
                        backgroundColor: `${client.languageColor}20`,
                        color: client.languageColor,
                      }}
                    >
                      {client.language.slice(0, 2)}
                    </span>
                    <div>
                      <h2 className="font-semibold">{client.name}</h2>
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                            client.roleTheme === "brand"
                              ? "bg-[var(--brand-green-subtle)] text-[var(--brand-green)]"
                              : "bg-[var(--border-subtle)] text-[var(--text-secondary)]"
                          }`}
                        >
                          {client.role}
                        </span>
                        {client.status && (
                          <span className="rounded-full bg-[var(--border-subtle)] px-2 py-0.5 text-xs font-medium text-[var(--text-secondary)]">
                            {client.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                    {client.description}
                  </p>
                  {client.note && (
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                      {client.note}
                    </p>
                  )}

                  <div className="mt-4 flex flex-wrap gap-3">
                    {client.websiteUrl && (
                      <a
                        href={client.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-[var(--brand-green)] transition hover:opacity-80"
                      >
                        Website <ExternalLink size={12} />
                      </a>
                    )}
                    {client.downloadsUrl && (
                      <a
                        href={client.downloadsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-[var(--brand-green)] transition hover:opacity-80"
                      >
                        Downloads <ExternalLink size={12} />
                      </a>
                    )}
                    <a
                      href={client.releasesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[var(--brand-green)] transition hover:opacity-80"
                    >
                      Releases <ExternalLink size={12} />
                    </a>
                    <a
                      href={client.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[var(--brand-green)] transition hover:opacity-80"
                    >
                      Docs <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <p className="mt-6 text-sm text-[var(--text-muted)]">
              Core-Geth is one of the public goods maintained in the
              ethereumclassic organization, alongside the network&rsquo;s
              bootnodes and peer discovery lists.{" "}
              <Link
                href="/public-goods"
                className="font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
              >
                What is maintained, and where &rarr;
              </Link>
            </p>
          </FadeIn>

          <FadeIn delay={250}>
            <h2 className="mt-14 mb-2 text-xl font-bold tracking-tight">
              ETC Plugins
            </h2>
            <p className="mb-6 text-sm text-[var(--text-muted)]">
              Planned compatibility layers for Besu, Erigon, Ethrex, Go-Ethereum,
              Nethermind and Reth. {PLUGIN_POSITION}
            </p>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {plugins.map((plugin, i) => (
              <FadeIn key={plugin.name} delay={300 + i * 80} className="h-full">
                <div className="h-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
                      style={{
                        backgroundColor: `${plugin.languageColor}20`,
                        color: plugin.languageColor,
                      }}
                    >
                      {plugin.language.slice(0, 2)}
                    </span>
                    <div>
                      <h3 className="font-semibold">{plugin.name}</h3>
                      <div className="flex items-center gap-1.5">
                        <span className="rounded-full bg-[var(--color-sky-bg)] px-2 py-0.5 text-xs font-medium text-[var(--color-sky)]">
                          Plugin
                        </span>
                        <span className="rounded-full bg-[var(--border-subtle)] px-2 py-0.5 text-xs font-medium text-[var(--text-secondary)]">
                          {PLUGINS_STATUS}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">
                    {plugin.description}
                  </p>

                  <div className="mt-3 flex gap-3">
                    <a
                      href={plugin.upstreamUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[var(--brand-green)] transition hover:opacity-80"
                    >
                      Upstream <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <BreadcrumbJsonLd name="Clients" path="/clients" />
    </main>
  );
}
