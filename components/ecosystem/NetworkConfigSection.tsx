import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CHAINLIST_ETC_URL, CHAINLIST_MORDOR_URL } from "@/lib/network-links";

interface EvmVersion {
  name: string;
  ethOrigin: boolean;
}

interface NetworkConfig {
  name: string;
  chainId: string;
  currency: string;
  rpcList: string;
  explorer: string;
  consensus: string;
  evmVersions: EvmVersion[];
  nextUpgrade: EvmVersion[];
}

const networks: NetworkConfig[] = [
  {
    name: "ETC Mainnet",
    chainId: "61",
    currency: "ETC",
    rpcList: CHAINLIST_ETC_URL,
    explorer: "https://etc.blockscout.com",
    consensus: "Proof-of-Work",
    evmVersions: [
      { name: "Spiral", ethOrigin: false },
      { name: "Shanghai", ethOrigin: true },
    ],
    nextUpgrade: [
      { name: "Olympia", ethOrigin: false },
      { name: "Glamsterdam (partial)", ethOrigin: true },
    ],
  },
  {
    name: "Mordor Testnet",
    chainId: "63",
    currency: "METC",
    rpcList: CHAINLIST_MORDOR_URL,
    explorer: "https://etc-mordor.blockscout.com",
    consensus: "Proof-of-Work",
    evmVersions: [
      { name: "Spiral", ethOrigin: false },
      { name: "Shanghai", ethOrigin: true },
    ],
    nextUpgrade: [
      { name: "Olympia", ethOrigin: false },
      { name: "Glamsterdam (partial)", ethOrigin: true },
    ],
  },
];

function EvmLabel({ versions }: { versions: EvmVersion[] }) {
  const primary = versions.find((v) => !v.ethOrigin);
  const secondary = versions.find((v) => v.ethOrigin);
  return (
    <span>
      {primary && <span>{primary.name}</span>}
      {secondary && (
        <>
          {" "}
          <span className="text-[10px] font-normal text-violet-400">
            / {secondary.name}
          </span>
        </>
      )}
    </span>
  );
}

export function NetworkConfigSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section aria-labelledby="network-configuration-heading" className="section-deep py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="network-configuration-heading" className="text-3xl font-bold tracking-tight">
              Network Configuration
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Chain IDs, where to find public RPC endpoints, and explorer URLs for
              Ethereum Classic mainnet (chain 61) and the Mordor testnet (chain
              63), ready to drop into MetaMask, Hardhat, Foundry or any
              EVM-compatible toolchain. Both networks run Proof-of-Work consensus
              with the Spiral EVM, which matches Shanghai. Olympia, a proposed
              upgrade whose activation blocks are TBD, would apply to both.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {networks.map((net, i) => (
              <FadeIn key={net.chainId} delay={i * 100}>
                <div className="rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6">
                  <h3 className="text-lg font-bold font-mono">
                    {net.name}
                    <span className="ml-2 text-sm font-normal text-[var(--text-subtle)]">
                      Chain {net.chainId}
                    </span>
                  </h3>

                  <dl className="mt-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <dt className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                        Chain ID
                      </dt>
                      <dd className="text-sm font-mono font-semibold">
                        {net.chainId}
                      </dd>
                    </div>
                    <div className="h-px bg-[var(--border-subtle)]" />

                    <div className="flex items-center justify-between">
                      <dt className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                        Currency
                      </dt>
                      <dd className="text-sm font-mono font-semibold">
                        {net.currency}
                      </dd>
                    </div>
                    <div className="h-px bg-[var(--border-subtle)]" />

                    <div className="flex items-center justify-between">
                      <dt className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                        RPC
                      </dt>
                      <dd>
                        <a
                          href={net.rpcList}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                        >
                          ChainList &rarr;
                        </a>
                      </dd>
                    </div>
                    <div className="h-px bg-[var(--border-subtle)]" />

                    <div className="flex items-center justify-between">
                      <dt className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                        Explorer
                      </dt>
                      <dd>
                        <a
                          href={net.explorer}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                        >
                          Blockscout &rarr;
                        </a>
                      </dd>
                    </div>
                    <div className="h-px bg-[var(--border-subtle)]" />

                    <div className="flex items-center justify-between">
                      <dt className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                        Consensus
                      </dt>
                      <dd className="text-sm font-mono font-semibold">
                        {net.consensus}
                      </dd>
                    </div>
                    <div className="h-px bg-[var(--border-subtle)]" />

                    <div className="flex items-center justify-between">
                      <dt className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                        EVM
                      </dt>
                      <dd className="text-sm font-mono font-semibold">
                        <EvmLabel versions={net.evmVersions} />
                      </dd>
                    </div>
                    <div className="h-px bg-[var(--border-subtle)]" />

                    <div className="flex items-center justify-between">
                      <dt className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                        Proposed Upgrade
                      </dt>
                      <dd className="text-sm font-mono font-semibold">
                        <EvmLabel versions={net.nextUpgrade} />
                      </dd>
                    </div>
                  </dl>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <p className="mt-6 text-xs leading-relaxed text-[var(--text-subtle)]">
              ChainList lists the public endpoints Ethereum Classic operators
              publish, for{" "}
              <a
                href={CHAINLIST_ETC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-green)] hover:underline"
              >
                Ethereum Classic
              </a>{" "}
              and{" "}
              <a
                href={CHAINLIST_MORDOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-green)] hover:underline"
              >
                Mordor
              </a>
              . A public endpoint is another operator&rsquo;s node: it can rate
              limit, fall behind, or stop. Anything you depend on should run
              against a node you control.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
