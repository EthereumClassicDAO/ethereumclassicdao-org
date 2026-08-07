"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

interface EvmVersion {
  name: string;
  ethOrigin: boolean;
}

interface NetworkConfig {
  name: string;
  chainId: string;
  currency: string;
  rpc: string;
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
    rpc: "https://etc.rivet.link",
    explorer: "https://etc.blockscout.com",
    consensus: "Proof-of-Work",
    evmVersions: [
      { name: "Spiral", ethOrigin: false },
      { name: "Shanghai", ethOrigin: true },
    ],
    nextUpgrade: [
      { name: "Olympia", ethOrigin: false },
      { name: "Glamsterdam", ethOrigin: true },
    ],
  },
  {
    name: "Mordor Testnet",
    chainId: "63",
    currency: "METC",
    rpc: "https://rpc.mordor.etccooperative.org",
    explorer: "https://etc-mordor.blockscout.com",
    consensus: "Proof-of-Work",
    evmVersions: [
      { name: "Spiral", ethOrigin: false },
      { name: "Shanghai", ethOrigin: true },
    ],
    nextUpgrade: [
      { name: "Olympia", ethOrigin: false },
      { name: "Glamsterdam", ethOrigin: true },
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
        <span className="ml-1.5 text-[10px] font-normal text-violet-400">
          {secondary.name}
        </span>
      )}
    </span>
  );
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
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
              Production RPC endpoints, chain IDs, and explorer URLs for
              Ethereum Classic mainnet (Chain 61) and Mordor testnet (Chain
              63). Drop-in configuration for MetaMask, Hardhat, Foundry, and
              any EVM-compatible toolchain. Both networks run Proof-of-Work
              consensus under the Spiral EVM specification, with the Olympia
              upgrade pending activation on both chains.
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

                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                        RPC
                      </dt>
                      <dd className="flex items-center gap-2">
                        <code className="text-xs font-mono text-[var(--brand-green)] truncate max-w-[200px]">
                          {net.rpc}
                        </code>
                        <button
                          onClick={() => copyToClipboard(net.rpc)}
                          className="shrink-0 text-[10px] font-mono text-[var(--text-subtle)] transition-colors hover:text-[var(--text-primary)]"
                          title="Copy RPC URL"
                        >
                          Copy
                        </button>
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
                        Next Upgrade
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
        </div>
      </section>
    </>
  );
}
