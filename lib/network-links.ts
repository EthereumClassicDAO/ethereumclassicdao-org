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
export const CORE_GETH_AUDIT_URL = `${CORE_GETH_HOMEPAGE_URL}/security/2026-03-core-geth-v1.12-security-audit/`;
export const BOOTNODES_DOCS_URL = `${CORE_GETH_DOCS_URL}guides/bootnodes-and-discovery/`;
export const COOPERATIVE_TRANSITION_URL = `${CORE_GETH_DOCS_URL}etc-cooperative-transition/`;
export const PUBLIC_RPC_DOCS_URL = `${COOPERATIVE_TRANSITION_URL}#public-json-rpc`;
export const CORE_GETH_SPONSOR_URL = `${CORE_GETH_HOMEPAGE_URL}/sponsor/`;
export const CORE_GETH_SECURITY_URL = `${CORE_GETH_HOMEPAGE_URL}/security/`;
export const CORE_GETH_ABOUT_URL = `${CORE_GETH_HOMEPAGE_URL}/about/`;
/** Each platform's release files, with their checksums and attestation checks. */
export const CORE_GETH_DOWNLOADS_URL = `${CORE_GETH_HOMEPAGE_URL}/downloads/`;
/** Moving a v1.12 node to the v1.13 line. */
export const CORE_GETH_UPGRADE_URL = `${CORE_GETH_DOWNLOADS_URL}#upgrade`;
/** The discovery flag, for a v1.12 node that cannot move yet. */
export const CORE_GETH_DISCOVERY_FLAG_URL = `${CORE_GETH_DOWNLOADS_URL}#discovery-flag`;
/** How a change reaches the client's main branch. */
export const CORE_GETH_REVIEW_POLICY_URL = `${CORE_GETH_REPO_URL}/blob/main/.github/CONTRIBUTING.md`;

// Peer discovery
export const DISCOVERY_LISTS_REPO_URL = `${ETC_ORG_URL}/discv4-dns-lists`;
export const DISCOVERY_SUPPORT_URL = `${DISCOVERY_LISTS_REPO_URL}/blob/main/docs/support.md`;

// Fukuii
export const FUKUII_HOMEPAGE_URL = "https://fukuii.com";
export const FUKUII_REPO_URL = "https://github.com/chippr-robotics/fukuii";
export const FUKUII_RELEASES_URL = `${FUKUII_REPO_URL}/releases`;
/** The newest Fukuii release not marked pre-release. */
export const FUKUII_LATEST_RELEASE_URL = `${FUKUII_RELEASES_URL}/latest`;
export const FUKUII_DOCS_URL = "https://docs.fukuii.com";
export const FUKUII_STATUS_PAGE_URL = `${FUKUII_DOCS_URL}/STATUS/`;
export const FUKUII_MAINTAINER = "Chippr Robotics LLC";

// Public JSON-RPC
export const PUBLIC_RPC_REPO_URL = `${ETC_ORG_URL}/public-rpc`;
export const CHAINLIST_ETC_URL = "https://chainlist.org/chain/61";
export const CHAINLIST_MORDOR_URL = "https://chainlist.org/chain/63";

// Network dashboard
export const NODES_REPO_URL = `${ETC_ORG_URL}/nodes`;

// Block explorer
export const EXPLORER_REPO_URL = `${ETC_ORG_URL}/explorer`;

// Community social media (twitter-together)
export const TWITTER_TOGETHER_REPO_URL = `${ETC_ORG_URL}/twitter-together`;

// Ethereum Classic DAO LLC
export const WYOMING_FILING_URL =
  "https://wyobiz.wyo.gov/business/FilingDetails.aspx?eFNum=101157225123250204055197221085227098244002050082";

// Contacts
export const SECURITY_EMAIL = "security@ethereumclassic.net";
export const SPONSOR_EMAIL = "donations@ethereumclassic.net";

// ETC Cooperative
export const COOPERATIVE_RETROSPECTIVE_URL =
  "https://etccooperative.org/etc-cooperative-retrospective-2024.pdf";
/** Archived copy of the ETC Cooperative's site. */
export const COOPERATIVE_ARCHIVE_URL =
  "https://web.archive.org/web/20250205192722/https://etccooperative.org/";

// ECIPs and EIPs
export const ecipUrl = (n: number) => `https://ecips.ethereumclassic.org/ECIPs/ecip-${n}`;
export const eipUrl = (n: number) => `https://eips.ethereum.org/EIPS/eip-${n}`;

// Olympia
export const OLYMPIA_DAO_URL = "https://olympiadao.org";
export const OLYMPIA_TREASURY_SITE_URL = "https://olympiatreasury.org";
export const OLYMPIA_APP_URL = "https://app.olympiadao.org";
export const OLYMPIA_GITHUB_URL = "https://github.com/olympiadao";
/** The placeholder the countdown runs to: a target, never an activation date. */
export const OLYMPIA_TARGET_ISO = "2027-12-31T00:00:00Z";
/** The target as Month D, YYYY, formatted in UTC so it reads the same in every time zone. */
export const OLYMPIA_TARGET_LABEL = new Intl.DateTimeFormat("en-US", {
  timeZone: "UTC",
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(new Date(OLYMPIA_TARGET_ISO));

// Status badges
export const COOPERATIVE_STATUS = "Maintenance mode since the end of 2024 · due to dissolve";
export const PUBLIC_RPC_STATUS = "In preparation";
export const NETWORK_DASHBOARD_STATUS = "In preparation";
export const BLOCK_EXPLORER_STATUS = "In preparation";
export const SOCIAL_MEDIA_STATUS = "In preparation";
export const OLYMPIA_STATUS = "Proposed · Draft ECIPs · Activation block TBD";
/** Fukuii's maturity, as its maintainers label it. */
export const FUKUII_STATUS = "Alpha";
/** The ETC plugin framework for upstream clients. */
export const PLUGINS_STATUS = "Planned";

// ETC plugins
/** What a plugin is, in the words every page uses; public/llms.txt mirrors it. */
export const PLUGIN_POSITION =
  "A plugin is not a client implementation. It adds Ethereum Classic support to a client another project maintains, so that codebase and the decisions about it stay with that project, outside Ethereum Classic's control. A plugin is no substitute for Fukuii, an independent client, or for Core-Geth, a full implementation downstream of go-ethereum.";
