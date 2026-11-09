import {
  COOPERATIVE_RETROSPECTIVE_URL,
  CORE_GETH_ABOUT_URL,
  CORE_GETH_AUDIT_URL,
  CORE_GETH_RELEASES_URL,
  CORE_GETH_SECURITY_URL,
  DISCOVERY_LISTS_REPO_URL,
  WYOMING_FILING_URL,
} from "@/lib/network-links";

export interface MaintenanceEntry {
  /** The date as a reader sees it. */
  when: string;
  /** The same date for `<time dateTime>`: a day, a month or a year. */
  iso: string;
  what: string;
  /** The published record the entry rests on. */
  source: string;
}

/**
 * How Core-Geth's maintenance reached the ethereumclassic organization, oldest first. Each entry
 * follows coregeth.com's About page and release history, and links the record it rests on.
 */
export const MAINTENANCE_RECORD: readonly MaintenanceEntry[] = [
  {
    when: "June 2024",
    iso: "2024-06",
    what: "Core-Geth v1.12.20 is released from etclabscore/core-geth, the last stable release before a 21-month gap in security maintenance.",
    source: CORE_GETH_SECURITY_URL,
  },
  {
    when: "December 21, 2024",
    iso: "2024-12-21",
    what: "ethereumclassic/core-geth is created from etclabscore/core-geth, the move the ETC Cooperative's published roadmap of July 2024 had proposed.",
    source: CORE_GETH_ABOUT_URL,
  },
  {
    when: "End of 2024",
    iso: "2024-12",
    what: "The ETC Cooperative enters maintenance mode. Its 2024 retrospective states that “it will be up to other stakeholders to take on any required maintenance of the ETC client”.",
    source: COOPERATIVE_RETROSPECTIVE_URL,
  },
  {
    when: "May 2025",
    iso: "2025-05",
    what: "Ethereum Classic DAO LLC is formed in Wyoming.",
    source: WYOMING_FILING_URL,
  },
  {
    when: "February 2026",
    iso: "2026-02",
    what: "Ethereum Classic core developers resume Core-Geth maintenance in ethereumclassic/core-geth, funded by Ethereum Classic DAO as the funder of last resort: patching the outstanding vulnerabilities, moving to a supported Go toolchain, and rebuilding the release pipeline.",
    source: CORE_GETH_AUDIT_URL,
  },
  {
    when: "February and March 2026",
    iso: "2026-02",
    what: "Ethereum Classic core developers disclose their security work on the v1.12 line privately to the etclabscore/core-geth maintainers, and the v1.12.21 and v1.12.22 emergency releases are cut from that work on March 18 and 28, 2026. The same fixes are published in ethereumclassic/core-geth as 27 pull requests on March 20 and 21, 2026.",
    source: CORE_GETH_AUDIT_URL,
  },
  {
    when: "August 28, 2026",
    iso: "2026-08-28",
    what: "The bootnodes and the peer discovery lists move to the ethereumclassic organization. ethereumclassic/discv4-dns-lists is created to publish the lists, and its first lists are published on September 10, 2026. The new bootnodes, three for Ethereum Classic and two for Mordor, are run by the Core-Geth maintainers and ship in v1.13.0.",
    source: DISCOVERY_LISTS_REPO_URL,
  },
  {
    when: "September 14, 2026",
    iso: "2026-09-14",
    what: "Ethereum Classic core developers release the v1.13 line, the 2026 modernization of Core-Geth. It is the first release line published from ethereumclassic/core-geth, and it reads the new discovery lists by default.",
    source: CORE_GETH_RELEASES_URL,
  },
];
