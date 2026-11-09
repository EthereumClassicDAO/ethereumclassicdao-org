/**
 * The ECIPs of the Olympia proposal, each with its own front-matter title and one line on what it
 * specifies. The ECIPs are drafts, and the ECIPs repository is the authority on them: read a
 * title or a summary there before changing it here.
 */

export type OlympiaEcipStage =
  /** Changes consensus at the Olympia activation block. */
  | "At the activation block"
  /** Deployed and published on Ethereum Classic before the activation block. */
  | "Before the fork"
  /** A process on top of the contracts; it changes no consensus rule. */
  | "Process"
  /** A separate hard fork after Olympia, scheduled on its own. */
  | "A later hard fork";

export interface OlympiaEcip {
  number: number;
  title: string;
  stage: OlympiaEcipStage;
  summary: string;
}

export const OLYMPIA_ECIPS: readonly OlympiaEcip[] = [
  {
    number: 1111,
    title: "Base Fee Market and Redirection",
    stage: "At the activation block",
    summary:
      "Would activate EIP-1559 and EIP-3198. Where Ethereum destroys the base fee, Ethereum Classic would credit it, transaction by transaction, to a permanent address held in chain configuration. Block rewards and priority-fee tips would be unaffected.",
  },
  {
    number: 1112,
    title: "Sovereignty Vault",
    stage: "Before the fork",
    summary:
      "The permanent address at which base-fee revenue would accumulate: a stock OpenZeppelin transparent proxy, deployed and inspectable before the fork commits to it, whose logic could be repaired while the address stands.",
  },
  {
    number: 1113,
    title: "Olympia DAO Governance and Treasury",
    stage: "Before the fork",
    summary:
      "Olympia DAO: a Governor built from stock OpenZeppelin modules, the Timelock behind the Treasury proxy, and CoreNFT, a soulbound token carrying one non-delegable vote per member. It would be the only route by which the balance at the Sovereignty Vault address could be spent.",
  },
  {
    number: 1114,
    title: "Olympia Funding Proposal Process",
    stage: "Process",
    summary:
      "A funding proposal would be an ordinary Governor proposal that spends from the Treasury, with five categories and a description convention, and no contract of its own.",
  },
  {
    number: 1115,
    title: "Olympia Miner Security Budget Smoothing",
    stage: "Process",
    summary:
      "Funding proposals that would pay block producers from the base-fee revenue their blocks generated, spread across a window. No base fee is redirected, and nothing is owed until a proposal passes.",
  },
  {
    number: 1116,
    title: "Consensus-Layer: Sustainable Network Security Budget via Base Fee Miner Distribution",
    stage: "A later hard fork",
    summary:
      "Would pay block producers a smoothed share of base-fee revenue at the consensus layer. It is a separate hard fork after Olympia, scheduled only once ECIP-1115 has demonstrated a curve.",
  },
  {
    number: 1117,
    title: "Olympia Ecosystem Growth DAOs",
    stage: "Process",
    summary:
      "Bodies scoped to growing what is built on Ethereum Classic and open to anyone, each funded one season at a time by a funding proposal. Client development, network security and critical infrastructure stay with Olympia DAO.",
  },
  {
    number: 1118,
    title: "Milestone-Structured Funding for Olympia Funding Proposals",
    stage: "Process",
    summary:
      "A funding commitment paid in tranches, each its own funding proposal and decided on the work behind it. Nothing is held between tranches.",
  },
  {
    number: 1119,
    title: "Sanctions Screening for Olympia Funding Proposals",
    stage: "Process",
    summary:
      "The interface a member votes through would screen a proposal's recipient against a sanctions list and show the result, with no way to vote in favor of a designated address. No contract, oracle or role is involved.",
  },
  {
    number: 1121,
    title: "EVM Alignment Specification (Olympia Hardfork)",
    stage: "At the activation block",
    summary:
      "Classifies every execution-layer EIP of Dencun, Pectra, Fusaka and Glamsterdam: adopted at the Olympia block, adopted with a modification, already in force, blocked by a dependency, deferred or excluded.",
  },
];
