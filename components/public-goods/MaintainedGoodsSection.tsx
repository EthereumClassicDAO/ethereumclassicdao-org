import { Activity, Boxes, Cpu, Megaphone, Radar, Server, Globe, ExternalLink, type LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import {
  BOOTNODES_DOCS_URL,
  CHAINLIST_ETC_URL,
  CORE_GETH_DOCS_URL,
  CORE_GETH_LATEST_RELEASE_URL,
  CORE_GETH_REPO_URL,
  CORE_GETH_SECURITY_URL,
  DISCOVERY_LISTS_REPO_URL,
  PUBLIC_RPC_DOCS_URL,
  PUBLIC_RPC_STATUS,
  NETWORK_DASHBOARD_STATUS,
  BLOCK_EXPLORER_STATUS,
  SOCIAL_MEDIA_STATUS,
  NODES_REPO_URL,
  TWITTER_TOGETHER_REPO_URL,
} from "@/lib/network-links";

interface PublicGood {
  icon: LucideIcon;
  name: string;
  kind: string;
  status: string;
  live: boolean;
  description: string;
  links: { label: string; href: string }[];
}

const goods: PublicGood[] = [
  {
    icon: Cpu,
    name: "Core-Geth",
    kind: "Execution client",
    status: "Maintained",
    live: true,
    description:
      "The recommended client for Ethereum Classic, a go-ethereum derivative that implements the network's consensus rules and its Proof-of-Work chain selection. Upstream go-ethereum no longer supports Ethereum Classic, so those rules are maintained here rather than inherited. Each release is built by the repository's own workflow, with a checksum and a build attestation beside every file.",
    links: [
      { label: "Current release", href: CORE_GETH_LATEST_RELEASE_URL },
      { label: "Documentation", href: CORE_GETH_DOCS_URL },
      { label: "Repository", href: CORE_GETH_REPO_URL },
      { label: "Audits and security record", href: CORE_GETH_SECURITY_URL },
    ],
  },
  {
    icon: Radar,
    name: "Peer discovery lists",
    kind: "DNS discovery",
    status: "Maintained",
    live: true,
    description:
      "Signed lists of Ethereum Classic and Mordor nodes, published in DNS so that a client finds its first peers. The lists are rebuilt every night from a crawl of the network, and every published list is committed to the repository, so the record of what clients were given is public.",
    links: [
      { label: "Repository", href: DISCOVERY_LISTS_REPO_URL },
      { label: "How discovery works", href: BOOTNODES_DOCS_URL },
    ],
  },
  {
    icon: Server,
    name: "Bootnodes",
    kind: "Network entry points",
    status: "Running",
    live: true,
    description:
      "The fixed entry points a node contacts when it has no peers yet, for Ethereum Classic and for Mordor. They are run by the Core-Geth maintainers and built into the client, so a new node reaches the network without configuration.",
    links: [{ label: "Bootnodes and discovery", href: BOOTNODES_DOCS_URL }],
  },
  {
    icon: Globe,
    name: "Public JSON-RPC",
    kind: "Public endpoints",
    status: PUBLIC_RPC_STATUS,
    live: false,
    description:
      "Public endpoints for Ethereum Classic and Mordor under ethereumclassic.net, run from the organization's repositories so that more than one maintainer can rebuild or move the service and anyone can read how it is run. ChainList carries the endpoints other operators publish.",
    links: [
      { label: "Where to connect", href: PUBLIC_RPC_DOCS_URL },
      { label: "ChainList", href: CHAINLIST_ETC_URL },
    ],
  },
  {
    icon: Activity,
    name: "Network dashboard",
    kind: "Network status",
    status: NETWORK_DASHBOARD_STATUS,
    live: false,
    description:
      "A public view of Ethereum Classic's network health, served from the organization's own infrastructure alongside the public endpoints, so operators and integrators can read the state of the network and its peers without standing up their own indexer.",
    links: [{ label: "Repository", href: NODES_REPO_URL }],
  },
  {
    icon: Boxes,
    name: "Block explorer",
    kind: "Chain explorer",
    status: BLOCK_EXPLORER_STATUS,
    live: false,
    description:
      "A public explorer for Ethereum Classic and Mordor, served from the organization's own infrastructure, so anyone can look up blocks, transactions, addresses and contracts without depending on a third-party service.",
    links: [],
  },
  {
    icon: Megaphone,
    name: "Community social media",
    kind: "Community tweeting",
    status: SOCIAL_MEDIA_STATUS,
    live: false,
    description:
      "The project's social media, run by the community through twitter-together: posts are proposed and reviewed as pull requests, so anyone can help shape Ethereum Classic's public voice and the record of what was posted stays public.",
    links: [{ label: "Repository", href: TWITTER_TOGETHER_REPO_URL }],
  },
];

export function MaintainedGoodsSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section aria-labelledby="what-is-maintained-heading" className="section-alt py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="what-is-maintained-heading" className="text-3xl font-bold tracking-tight">
              What Is Maintained
            </h2>
            <p className="mt-3 max-w-3xl text-base text-[var(--text-muted)]">
              The shared software and services the Ethereum Classic community
              builds and maintains in the open.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {goods.map((good, i) => {
              const Icon = good.icon;
              return (
                <FadeIn key={good.name} delay={i * 80} className="h-full">
                  <div className="flex h-full flex-col rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                        <Icon size={20} aria-hidden="true" className="text-[var(--brand-green)]" />
                      </div>
                      <span className={good.live ? "badge-available" : "badge-pending"}>
                        {good.status}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold">{good.name}</h3>
                    <p className="mt-1 text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                      {good.kind}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                      {good.description}
                    </p>
                    {good.links.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                        {good.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--text-primary)]"
                          >
                            {link.label} <ExternalLink size={11} aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    )}
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
