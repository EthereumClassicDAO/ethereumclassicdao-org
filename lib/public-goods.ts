import { Activity, Boxes, Cpu, Megaphone, Radar, Server, Globe, type LucideIcon } from "lucide-react";
import {
  BOOTNODES_DOCS_URL,
  CHAINLIST_ETC_URL,
  CORE_GETH_DOCS_URL,
  CORE_GETH_LATEST_RELEASE_URL,
  CORE_GETH_REPO_URL,
  CORE_GETH_SECURITY_URL,
  DISCOVERY_LISTS_REPO_URL,
  PUBLIC_RPC_DOCS_URL,
  PUBLIC_RPC_REPO_URL,
  PUBLIC_RPC_STATUS,
  NETWORK_DASHBOARD_STATUS,
  BLOCK_EXPLORER_STATUS,
  SOCIAL_MEDIA_STATUS,
  NODES_REPO_URL,
  EXPLORER_REPO_URL,
  TWITTER_TOGETHER_REPO_URL,
} from "@/lib/network-links";

export interface PublicGood {
  icon: LucideIcon;
  name: string;
  kind: string;
  status: string;
  live: boolean;
  description: string;
  /** The good's public repository in the ethereumclassic organization, where it has one. */
  repo?: string;
  links: { label: string; href: string }[];
}

/** The public goods maintained in the ethereumclassic GitHub organization. */
export const PUBLIC_GOODS: readonly PublicGood[] = [
  {
    icon: Cpu,
    name: "Core-Geth",
    kind: "Execution client",
    status: "Maintained",
    live: true,
    description:
      "The recommended client for Ethereum Classic, a go-ethereum downstream that implements the network's consensus rules and its Proof-of-Work chain selection. Upstream go-ethereum no longer supports Ethereum Classic, so those rules are maintained here rather than inherited. Each release is built by the repository's own workflow, with a checksum and a build attestation beside every file.",
    repo: CORE_GETH_REPO_URL,
    links: [
      { label: "Latest release", href: CORE_GETH_LATEST_RELEASE_URL },
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
      "Signed lists of nodes on Ethereum Classic and on Mordor, its testnet, published in DNS so that a client finds its first peers. The lists are rebuilt every night from a crawl of the network, and every published list is committed to the repository, so the record of what clients were given is public.",
    repo: DISCOVERY_LISTS_REPO_URL,
    links: [
      { label: "Repository", href: DISCOVERY_LISTS_REPO_URL },
      { label: "Discovery in the documentation", href: BOOTNODES_DOCS_URL },
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
    links: [{ label: "Bootnodes in the documentation", href: BOOTNODES_DOCS_URL }],
  },
  {
    icon: Globe,
    name: "Public JSON-RPC",
    kind: "Public endpoints",
    status: PUBLIC_RPC_STATUS,
    live: false,
    description:
      "Public endpoints for Ethereum Classic and Mordor under ethereumclassic.net, run from the organization's repositories so that more than one maintainer can rebuild or move the service and anyone can read how it is run. ChainList carries the endpoints other operators publish.",
    repo: PUBLIC_RPC_REPO_URL,
    links: [
      { label: "Repository", href: PUBLIC_RPC_REPO_URL },
      { label: "Endpoints in the documentation", href: PUBLIC_RPC_DOCS_URL },
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
    repo: NODES_REPO_URL,
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
    repo: EXPLORER_REPO_URL,
    links: [{ label: "Repository", href: EXPLORER_REPO_URL }],
  },
  {
    icon: Megaphone,
    name: "Community social media",
    kind: "Community posts",
    status: SOCIAL_MEDIA_STATUS,
    live: false,
    description:
      "Ethereum Classic's social media, run by the community through twitter-together: posts are proposed and reviewed as pull requests, so anyone can help shape Ethereum Classic's public voice and the record of what was posted stays public.",
    repo: TWITTER_TOGETHER_REPO_URL,
    links: [{ label: "Repository", href: TWITTER_TOGETHER_REPO_URL }],
  },
];

/** How the work is held in the ethereumclassic organization, whoever maintains or funds it. */
export const OWN_ORGANIZATION_PROPERTIES: readonly { label: string; value: string; detail: string }[] = [
  {
    label: "Where it lives",
    value: "ethereumclassic",
    detail: "GitHub organization since July 2016",
  },
  {
    label: "Who can change it",
    value: "More than one maintainer",
    detail: "Each repository has more than one admin",
  },
  {
    label: "How a change lands",
    value: "Reviewed pull request",
    detail: "Needs an approving review and the required checks",
  },
];
