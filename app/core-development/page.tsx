import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { PropertiesSection } from "@/components/ecosystem/PropertiesSection";

export const metadata: Metadata = {
  title: "Core Development Timeline | Ethereum Classic DAO",
  description:
    "Every network upgrade applied to Ethereum Classic mainnet — from the Frontier genesis block in July 2015 through Olympia. 17 completed upgrades sourced from ECIP-1066.",
};

type UpgradeType =
  | "genesis"
  | "evm-parity"
  | "etc-native"
  | "monetary"
  | "fork-moment"
  | "olympia";

type UpgradeStatus = "complete" | "upcoming";

interface Upgrade {
  name: string;
  subtitle: string | null;
  block: string;
  date: string;
  type: UpgradeType;
  additionalTags?: UpgradeType[];
  ecip: string | null;
  ecipUrl: string | null;
  ecips?: Array<{ name: string; url: string }>;
  eips: string[];
  keyChanges: string[];
  description: string;
  status: UpgradeStatus;
}

const upgrades: Upgrade[] = [
  {
    name: "Frontier",
    subtitle: null,
    block: "Block 1",
    date: "2015-07-30",
    type: "genesis",
    ecip: null,
    ecipUrl: null,
    eips: [],
    keyChanges: ["EVM genesis block", "Smart contract execution", "Mining reward 5 ETC", "Gas system"],
    description:
      "Ethereum Classic genesis. The original Ethereum codebase launches — the first production EVM with smart contract capability. The ledger begins.",
    status: "complete",
  },
  {
    name: "Frontier Thawing",
    subtitle: null,
    block: "Block 200,000",
    date: "2015-09-07",
    type: "evm-parity",
    ecip: null,
    ecipUrl: null,
    eips: [],
    keyChanges: ["Gas limit increase", "Canary blocks removed", "Difficulty adjustment"],
    description:
      "Gas limit raised from 5,000 to allow network growth. Mining difficulty threshold adjusted.",
    status: "complete",
  },
  {
    name: "Homestead",
    subtitle: null,
    block: "Block 1,150,000",
    date: "2016-03-14",
    type: "evm-parity",
    ecip: null,
    ecipUrl: null,
    eips: ["EIP-2", "EIP-7", "EIP-8"],
    keyChanges: ["DELEGATECALL opcode", "Transaction signing fix", "p2p devp2p upgrade", "Frontier protections removed"],
    description:
      "First major planned upgrade. Removed the provisional Frontier protective measures; the network transitions from beta to a stable production platform.",
    status: "complete",
  },
  {
    name: "ETH DAO Fork",
    subtitle: "Rejected by Ethereum Classic",
    block: "Block 1,920,000",
    date: "2016-07-20",
    type: "fork-moment",
    ecip: null,
    ecipUrl: null,
    eips: [],
    keyChanges: ["Irregular state change rejected", "Code is Law upheld", "Ledger immutability preserved", "ETH/ETC permanent split"],
    description:
      "Ethereum implemented an irregular state change to reverse the DAO exploit. Ethereum Classic rejected this intervention, upholding Code is Law and the immutability of the ledger. ETC and ETH permanently diverge. This is the founding principle of Ethereum Classic.",
    status: "complete",
  },
  {
    name: "Gas Reprice",
    subtitle: "Tangerine Whistle",
    block: "Block 2,500,000",
    date: "2016-10-24",
    type: "evm-parity",
    ecip: "ECIP-1015",
    ecipUrl: "https://ecips.ethereumclassic.org/ECIPs/ecip-1015",
    eips: ["EIP-150"],
    keyChanges: ["IO-heavy opcode repricing", "DoS attack mitigation", "SLOAD/CALL/EXTCODE repriced"],
    description:
      "Gas cost repricing for IO-heavy operations to prevent denial-of-service attacks that had been exploiting underpriced opcodes.",
    status: "complete",
  },
  {
    name: "Die Hard",
    subtitle: "Spurious Dragon",
    block: "Block 3,000,000",
    date: "2017-01-13",
    type: "etc-native",
    additionalTags: ["evm-parity"],
    ecip: "ECIP-1010",
    ecipUrl: "https://ecips.ethereumclassic.org/ECIPs/ecip-1010",
    eips: ["EIP-155", "EIP-160"],
    keyChanges: ["Chain ID 61 replay protection", "EXP gas repricing", "Difficulty bomb delayed", "First ETC protocol deviation"],
    description:
      "Delayed the difficulty bomb and implemented replay protection via chain ID. ETC's chain ID 61 derives from its coin_type value in the BIP44 derivation path (m/44'/61'/0'/0/index). ETC's first independent protocol deviation from Ethereum.",
    status: "complete",
  },
  {
    name: "Gotham",
    subtitle: "5M20 Monetary Policy",
    block: "Block 5,000,000",
    date: "2017-12-11",
    type: "monetary",
    additionalTags: ["etc-native"],
    ecip: "ECIP-1017",
    ecipUrl: "https://ecips.ethereumclassic.org/ECIPs/ecip-1017",
    eips: [],
    keyChanges: ["5M20 era system", "210,700,000 max supply", "20% reduction per era", "Sound fixed monetary policy", "First PoW EVM with programmable monetary policy"],
    description:
      "Established ETC's fixed monetary policy: the 5M20 era system with a 210,700,000 maximum supply. Block rewards reduce 20% — a fifthening — every 5,000,000 blocks, roughly every two years. Inspired by Bitcoin's halving schedule but designed to soften the miner hardware shock and spot price dislocation a 50% supply cut produces: the gradual reduction preserves the same long-term predictability with a smoother transition at each era boundary.",
    status: "complete",
  },
  {
    name: "Defuse Difficulty Bomb",
    subtitle: null,
    block: "Block 5,900,000",
    date: "2018-05-29",
    type: "etc-native",
    ecip: "ECIP-1041",
    ecipUrl: "https://ecips.ethereumclassic.org/ECIPs/ecip-1041",
    eips: [],
    keyChanges: ["Difficulty bomb permanently removed", "Perpetual PoW guaranteed", "No artificial migration pressure"],
    description:
      "Permanently removed the difficulty bomb — the artificial mechanism designed to pressure migration to Proof-of-Stake. With the bomb gone, Ethereum Classic became the canonical long-term Proof-of-Work EVM, establishing the two-EVM model: a flagship PoS chain and a flagship PoW chain, each with distinct security properties and trust assumptions, both sharing the EVM execution standard.",
    status: "complete",
  },
  {
    name: "Atlantis",
    subtitle: "Byzantium",
    block: "Block 8,772,000",
    date: "2019-09-12",
    type: "evm-parity",
    ecip: "ECIP-1054",
    ecipUrl: "https://ecips.ethereumclassic.org/ECIPs/ecip-1054",
    eips: [
      "EIP-100",
      "EIP-140",
      "EIP-196",
      "EIP-197",
      "EIP-198",
      "EIP-211",
      "EIP-214",
      "EIP-658",
    ],
    keyChanges: ["ZK-proof precompiles (BN128)", "REVERT opcode", "Return data opcodes", "Receipt status codes"],
    description:
      "Byzantium parity. Added precompiles for elliptic curve arithmetic enabling ZK-proof compatibility, REVERT opcode, and receipt status codes.",
    status: "complete",
  },
  {
    name: "Agharta",
    subtitle: "Constantinople + Petersburg",
    block: "Block 9,573,000",
    date: "2020-01-11",
    type: "evm-parity",
    ecip: "ECIP-1056",
    ecipUrl: "https://ecips.ethereumclassic.org/ECIPs/ecip-1056",
    eips: ["EIP-145", "EIP-1014", "EIP-1052"],
    keyChanges: ["Bitwise shift opcodes", "CREATE2 (deterministic deployment)", "EXTCODEHASH opcode", "Petersburg security fixes"],
    description:
      "Constantinople and Petersburg parity. Introduced bitwise shifting opcodes, CREATE2 for deterministic contract deployment, and EXTCODEHASH.",
    status: "complete",
  },
  {
    name: "Phoenix",
    subtitle: "Istanbul",
    block: "Block 10,500,839",
    date: "2020-06-01",
    type: "evm-parity",
    ecip: "ECIP-1088",
    ecipUrl: "https://ecips.ethereumclassic.org/ECIPs/ecip-1088",
    eips: [
      "EIP-152",
      "EIP-1108",
      "EIP-1344",
      "EIP-1884",
      "EIP-2028",
      "EIP-2200",
    ],
    keyChanges: ["BLAKE2 precompile", "BN precompile repricing", "CHAINID opcode", "Calldata cost reduction"],
    description:
      "Istanbul parity. Added BLAKE2 precompile, repriced elliptic curve operations, chain ID opcode, and improved gas cost accuracy for storage operations.",
    status: "complete",
  },
  {
    name: "MESS Default: On",
    subtitle: "ECBP-1100",
    block: "Block 11,380,000",
    date: "2020-10-09",
    type: "etc-native",
    ecip: "ECIP-1100",
    ecipUrl: "https://ecips.ethereumclassic.org/ECIPs/ecip-1100",
    eips: [],
    keyChanges: ["ECBP-1100 default set to on", "Exponential chain scoring replaces linear total difficulty", "Raises the cost of low-hashrate reorganization attacks"],
    description:
      "MESS scores competing chains exponentially rather than linearly by total difficulty, making a deep reorganization far more expensive to mount than accumulated difficulty alone would suggest. Enabled as a client default rather than a consensus rule — a non-implementing client provides weaker reorg resistance without forking from the canonical chain.",
    status: "complete",
  },
  {
    name: "Thanos",
    subtitle: "ETChash",
    block: "Block 11,700,000",
    date: "2020-11-28",
    type: "etc-native",
    ecip: null,
    ecipUrl: null,
    ecips: [
      { name: "ECIP-1099", url: "https://ecips.ethereumclassic.org/ECIPs/ecip-1099" },
    ],
    eips: [],
    keyChanges: ["ETChash algorithm", "DAG growth reduction", "GPU mining preserved", "All Ethash ASICs absorbed post-Merge"],
    description:
      "Introduced ETChash — a modified DAG growth algorithm keeping ETC mineable on GPU hardware. Following Ethereum's Merge, ETC absorbed a significant portion of the global GPU mining network and every purpose-built Ethash ASIC miner — the only chain still running an ETChash-compatible algorithm.",
    status: "complete",
  },
  {
    name: "Magneto",
    subtitle: "Berlin",
    block: "Block 13,189,133",
    date: "2021-07-23",
    type: "evm-parity",
    ecip: "ECIP-1103",
    ecipUrl: "https://ecips.ethereumclassic.org/ECIPs/ecip-1103",
    eips: ["EIP-2565", "EIP-2929", "EIP-2718", "EIP-2930"],
    keyChanges: ["Cold storage repricing", "Typed transaction envelopes", "Access lists (EIP-2930)", "ModExp repricing"],
    description:
      "Berlin parity. Repriced cold storage access operations, introduced typed transaction envelopes, and added optional access lists for gas optimization.",
    status: "complete",
  },
  {
    name: "Mystique",
    subtitle: "London (partial)",
    block: "Block 14,525,000",
    date: "2022-02-12",
    type: "evm-parity",
    ecip: "ECIP-1104",
    ecipUrl: "https://ecips.ethereumclassic.org/ECIPs/ecip-1104",
    eips: ["EIP-3529", "EIP-3541"],
    keyChanges: ["Gas refund reduction", "0xEF bytecode prefix reserved", "EIP-1559 deferred to Olympia"],
    description:
      "Partial London parity — gas refunds reduced, 0xEF bytecode prefix reserved — without EIP-1559. The fee market was deliberately deferred to gather empirical data on adoption and gas dynamics, and to resolve where the basefee should flow: burned as on Ethereum, or redirected to a protocol treasury. The 2021 developer consensus landed on the treasury model, a position formalized four years later with the Olympia upgrade.",
    status: "complete",
  },
  {
    name: "Spiral",
    subtitle: "Shanghai",
    block: "Block 19,250,000",
    date: "2024-02-04",
    type: "evm-parity",
    ecip: "ECIP-1109",
    ecipUrl: "https://ecips.ethereumclassic.org/ECIPs/ecip-1109",
    eips: ["EIP-3651", "EIP-3855", "EIP-3860", "EIP-6049"],
    keyChanges: ["Warm COINBASE access", "PUSH0 opcode", "Initcode size limit", "SELFDESTRUCT deprecation notice"],
    description:
      "Partial Shanghai parity, excluding Proof-of-Stake validator withdrawals not applicable to Ethereum Classic. Warm COINBASE access, PUSH0 opcode, and initcode size limit. Remaining Shanghai gaps are filled by the Olympia upgrade.",
    status: "complete",
  },
  {
    name: "MESS Default: Off",
    subtitle: "ECBP-1110",
    block: "Block 19,250,000",
    date: "2024-02-04",
    type: "etc-native",
    ecip: "ECIP-1110",
    ecipUrl: "https://ecips.ethereumclassic.org/ECIPs/ecip-1110",
    eips: [],
    keyChanges: ["ECBP-1100 default set to off", "Chain scoring returns to linear total difficulty", "Default set back to on at Olympia by ECIP-1122"],
    description:
      "The ECBP-1100 default was set to off following a period of low network hashrate, at the same block as Spiral. The resulting gap in chain reorganization resistance is closed by ECIP-1122, which sets the default back to on at the Olympia activation block.",
    status: "complete",
  },
  {
    name: "Olympia",
    subtitle: "Glamsterdam",
    block: "Pending Activation Block",
    date: "2027",
    type: "olympia",
    additionalTags: ["etc-native", "evm-parity"],
    ecip: null,
    ecipUrl: null,
    ecips: [
      { name: "ECIP-1111", url: "https://ecips.ethereumclassic.org/ECIPs/ecip-1111" },
      { name: "ECIP-1112", url: "https://ecips.ethereumclassic.org/ECIPs/ecip-1112" },
      { name: "ECIP-1121", url: "https://ecips.ethereumclassic.org/ECIPs/ecip-1121" },
      { name: "ECIP-1122", url: "https://ecips.ethereumclassic.org/ECIPs/ecip-1122" },
    ],
    eips: [
      "EIP-1153",
      "EIP-1559",
      "EIP-2537",
      "EIP-2935",
      "EIP-3198",
      "EIP-5656",
      "EIP-6780",
      "EIP-7623",
      "EIP-7642",
      "EIP-7702",
      "EIP-7823",
      "EIP-7825",
      "EIP-7883",
      "EIP-7910",
      "EIP-7934",
      "EIP-7935",
      "EIP-7939",
      "EIP-7951",
      "EIP-7975",
      "EIP-7997",
    ],
    keyChanges: ["EIP-1559 fee market (ECIP-1111)", "Protocol treasury (ECIP-1112)", "Glamsterdam EVM alignment (ECIP-1121)", "Client security config: miner tip floor, gas target, MESS (ECIP-1122)", "DAO governance: core dev, infrastructure, security"],
    description:
      "EVM alignment to Glamsterdam, incorporating EIPs spanning London, Dencun, Pectra, Fusaka, and Glamsterdam on a single upgrade boundary. Introduces EIP-1559 with basefee directed to a protocol treasury — the funding model first identified during the 2022 Mystique upgrade. On-chain DAO governance, built on the OpenZeppelin 5.x contract suite, is scoped to core client software, critical infrastructure, and network security, with funding proposals open to any ETC account. A subsequent phase introduces open futarchy prediction markets — public staking on protocol outcomes with rewards for accurate predictions.",
    status: "upcoming",
  },
];

const typeLabels: Record<UpgradeType, string> = {
  genesis: "Genesis",
  "evm-parity": "EVM Parity",
  "etc-native": "ETC Native",
  monetary: "Monetary Policy",
  "fork-moment": "Defining Moment",
  olympia: "Upcoming",
};

const typeBadge: Record<UpgradeType, string> = {
  genesis: "bg-[rgba(0,255,174,0.12)] text-[var(--brand-green)]",
  "evm-parity": "bg-[var(--color-violet-bg)] text-[var(--color-violet)]",
  "etc-native": "bg-[rgba(0,255,174,0.08)] text-[var(--brand-green)]",
  monetary: "bg-[rgba(0,255,174,0.08)] text-[var(--brand-green)]",
  "fork-moment": "bg-[rgba(255,255,255,0.06)] text-[var(--text-secondary)]",
  olympia: "bg-[rgba(0,255,174,0.12)] text-[var(--brand-green)]",
};

const dotStyle: Record<UpgradeStatus | "fork-moment" | "olympia", string> = {
  complete: "bg-[var(--brand-green)]",
  upcoming: "bg-[rgba(255,255,255,0.2)] ring-2 ring-[rgba(255,255,255,0.1)]",
  "fork-moment": "bg-white ring-2 ring-white/20",
  olympia: "bg-[var(--brand-green)] animate-pulse",
};

function getDotStyle(upgrade: Upgrade): string {
  if (upgrade.type === "fork-moment") return dotStyle["fork-moment"];
  if (upgrade.type === "olympia") return dotStyle["olympia"];
  return dotStyle[upgrade.status];
}

export default function TimelinePage() {
  return (
    <main>
      <section className="hero-gradient noise-overlay relative pt-32 pb-20">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
              ECIP-1066
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-[var(--brand-green)]">Core Development</span> Timeline
            </h1>
            <p className="mt-4 text-base text-[var(--text-muted)]">
              A decade of uninterrupted Proof-of-Work operation — every
              network upgrade applied to Ethereum Classic mainnet. Each upgrade
              coordinated across independent client teams, funded by the ETC
              Cooperative and institutional partners, and ratified through the
              Ethereum Classic Improvement Proposal process. Full EVM parity delivered through every cycle — from Gas Reprice
              to Spiral — tracking every major Ethereum protocol advancement
              on the largest Proof-of-Work smart contract platform and the
              only PoW EVM.
            </p>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Olympia is next.
            </p>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="mt-8 flex flex-wrap gap-3 text-xs">
              {(
                [
                  ["genesis", "Genesis"],
                  ["evm-parity", "EVM Parity"],
                  ["etc-native", "ETC Native"],
                  ["monetary", "Monetary Policy"],
                  ["fork-moment", "Defining Moment"],
                  ["olympia", "Upcoming"],
                ] as [UpgradeType, string][]
              ).map(([type, label]) => (
                <span
                  key={type}
                  className={`rounded-full px-2.5 py-0.5 font-medium ${typeBadge[type]}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      <section className="section-alt py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            {/* Vertical gradient line */}
            <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(255,255,255,0.06)] via-[rgba(0,255,174,0.2)] to-[var(--brand-green)]" />

            <div className="space-y-4">
              {upgrades.map((upgrade, i) => (
                <FadeIn key={upgrade.name} delay={i * 40}>
                  <div className="relative pl-10">
                    {/* Dot */}
                    <div
                      className={`absolute left-[9px] top-4 h-3 w-3 rounded-full ${getDotStyle(upgrade)}`}
                    />

                    {/* Card */}
                    <div
                      className={`rounded-xl border p-5 ${
                        upgrade.type === "fork-moment"
                          ? "border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)]"
                          : upgrade.type === "olympia"
                            ? "border-[var(--border-brand)] bg-[var(--brand-green-subtle)]"
                            : "border-[rgba(255,255,255,0.06)] bg-[var(--bg-elevated)]"
                      }`}
                    >
                      {/* Header row */}
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm font-semibold">
                            {upgrade.name}
                          </h3>
                          {upgrade.subtitle && (
                            <span className="text-xs text-[var(--text-subtle)]">
                              / {upgrade.subtitle}
                            </span>
                          )}
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${typeBadge[upgrade.type]}`}
                          >
                            {typeLabels[upgrade.type]}
                          </span>
                          {upgrade.additionalTags?.map((tag) => (
                            <span
                              key={tag}
                              className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${typeBadge[tag]}`}
                            >
                              {typeLabels[tag]}
                            </span>
                          ))}
                        </div>
                        <div className="text-right shrink-0">
                          <p className="font-mono text-[10px] text-[var(--text-subtle)]">
                            {upgrade.block}
                          </p>
                          <p className="font-mono text-[10px] text-[var(--text-subtle)]">
                            {upgrade.date}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                        {upgrade.description}
                      </p>

                      {/* Key changes pills */}
                      {upgrade.keyChanges.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {upgrade.keyChanges.map((change) => (
                            <span
                              key={change}
                              className="rounded bg-[rgba(255,255,255,0.04)] px-2 py-0.5 text-[10px] text-[var(--text-subtle)]"
                            >
                              {change}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Footer: EIPs + ECIP link(s) */}
                      {(upgrade.eips.length > 0 ||
                        upgrade.ecip ||
                        upgrade.ecips) && (
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          {upgrade.eips.map((eip) => (
                            <a
                              key={eip}
                              href={`https://eips.ethereum.org/EIPS/${eip.toLowerCase()}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded bg-[var(--color-violet-bg)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-violet)] transition-colors hover:bg-[var(--color-violet)]/15 hover:text-[var(--color-violet)]/80"
                            >
                              {eip}
                            </a>
                          ))}
                          {upgrade.ecips ? (
                            <div className="ml-auto flex items-center gap-3">
                              {upgrade.ecips.map((e) => (
                                <a
                                  key={e.name}
                                  href={e.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-mono text-[10px] text-[var(--brand-green)] hover:underline underline-offset-2"
                                >
                                  {e.name} ↗
                                </a>
                              ))}
                            </div>
                          ) : upgrade.ecip && upgrade.ecipUrl ? (
                            <a
                              href={upgrade.ecipUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-auto font-mono text-[10px] text-[var(--brand-green)] hover:underline underline-offset-2"
                            >
                              {upgrade.ecip} ↗
                            </a>
                          ) : upgrade.ecip ? (
                            <span className="ml-auto font-mono text-[10px] text-[var(--text-subtle)]">
                              {upgrade.ecip}
                            </span>
                          ) : null}
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn>
            <p className="mt-12 border-l-2 border-[var(--brand-green)] pl-4 text-xs text-[var(--text-subtle)]">
              Source:{" "}
              <a
                href="https://ecips.ethereumclassic.org/ECIPs/ecip-1066"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-green)] hover:underline underline-offset-2"
              >
                ECIP-1066 — Ethereum Classic Network Description
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
      <PropertiesSection />
    </main>
  );
}
