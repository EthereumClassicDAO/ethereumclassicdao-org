/**
 * URLs for Ethereum Classic's clients, public goods and contacts, shared by the
 * pages that link them.
 */

/** The ethereumclassic GitHub organization. */
export const ETC_ORG_URL = "https://github.com/ethereumclassic";

// Core-Geth
export const CORE_GETH_REPO_URL = `${ETC_ORG_URL}/core-geth`;
/** Always resolves to the current release. */
export const CORE_GETH_LATEST_RELEASE_URL = `${CORE_GETH_REPO_URL}/releases/latest`;
export const CORE_GETH_RELEASES_URL = `${CORE_GETH_REPO_URL}/releases`;
export const CORE_GETH_HOMEPAGE_URL = "https://coregeth.com";
export const CORE_GETH_DOCS_URL = "https://docs.coregeth.com/";
export const CORE_GETH_INSTALL_URL = `${CORE_GETH_DOCS_URL}getting-started/installation/`;
export const CORE_GETH_HISTORY_URL = `${CORE_GETH_DOCS_URL}about/project-history/`;
export const CORE_GETH_AUDIT_URL = `${CORE_GETH_HOMEPAGE_URL}/security/2026-03-core-geth-v1.12-security-audit/`;
export const BOOTNODES_DOCS_URL = `${CORE_GETH_DOCS_URL}guides/bootnodes-and-discovery/`;
export const COOPERATIVE_TRANSITION_URL = `${CORE_GETH_DOCS_URL}etc-cooperative-transition/`;
export const PUBLIC_RPC_DOCS_URL = `${COOPERATIVE_TRANSITION_URL}#public-json-rpc`;
export const SUPPORT_URL = `${CORE_GETH_DOCS_URL}support/`;
export const CORE_GETH_SPONSOR_URL = `${CORE_GETH_HOMEPAGE_URL}/sponsor/`;
export const CORE_GETH_SECURITY_URL = `${CORE_GETH_HOMEPAGE_URL}/security/`;
/** How a change reaches the client's main branch. */
export const CORE_GETH_REVIEW_POLICY_URL = `${CORE_GETH_REPO_URL}/blob/main/.github/CONTRIBUTING.md`;

// Peer discovery
export const DISCOVERY_LISTS_REPO_URL = `${ETC_ORG_URL}/discv4-dns-lists`;
export const DISCOVERY_SUPPORT_URL = `${DISCOVERY_LISTS_REPO_URL}/blob/main/docs/support.md`;

// Fukuii
export const FUKUII_HOMEPAGE_URL = "https://fukuii.com";
export const FUKUII_REPO_URL = "https://github.com/chippr-robotics/fukuii";
export const FUKUII_RELEASES_URL = `${FUKUII_REPO_URL}/releases`;
export const FUKUII_DOCS_URL = "https://docs.fukuii.com";

// Public JSON-RPC
export const ETC_RPC_URL = "https://etc.blockscout.com/api/eth-rpc";
export const MORDOR_RPC_URL = "https://etc-mordor.blockscout.com/api/eth-rpc";
export const CHAINLIST_ETC_URL = "https://chainlist.org/chain/61";
export const CHAINLIST_MORDOR_URL = "https://chainlist.org/chain/63";

// Network dashboard
export const NODES_REPO_URL = `${ETC_ORG_URL}/nodes`;

// Community social media (twitter-together)
export const TWITTER_TOGETHER_REPO_URL = `${ETC_ORG_URL}/twitter-together`;

// Contacts
export const SECURITY_EMAIL = "security@ethereumclassic.net";
export const SPONSOR_EMAIL = "donations@ethereumclassic.net";

// ETC Cooperative
export const COOPERATIVE_RETROSPECTIVE_URL =
  "https://etccooperative.org/etc-cooperative-retrospective-2024.pdf";
/** Archived copy of the ETC Cooperative's site. */
export const COOPERATIVE_ARCHIVE_URL =
  "https://web.archive.org/web/20250205192722/https://etccooperative.org/";

// Status badges
export const COOPERATIVE_STATUS =
  "Maintenance mode since the end of 2024 · dissolution scheduled by the end of 2026";
export const PUBLIC_RPC_STATUS = "In preparation";
export const NETWORK_DASHBOARD_STATUS = "In preparation";
export const BLOCK_EXPLORER_STATUS = "In preparation";
export const SOCIAL_MEDIA_STATUS = "In preparation";
