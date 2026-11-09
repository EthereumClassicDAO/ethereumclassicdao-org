import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CHAINLIST_ETC_URL } from "@/lib/network-links";

interface Tool {
  name: string;
  description: string;
  config?: string;
  href?: string;
  badge?: string;
}

interface ToolCategory {
  heading: string;
  tools: Tool[];
}

const categories: ToolCategory[] = [
  {
    heading: "Smart Contract Development",
    tools: [
      {
        name: "Hardhat",
        description: "Industry-standard development environment for compiling, testing, and deploying Solidity contracts.",
        config: 'chainId: 61 and evmVersion: "shanghai" in hardhat.config.ts',
        href: "https://hardhat.org",
      },
      {
        name: "Foundry",
        description: "A Rust-based toolchain (forge, cast and anvil) with tests written in Solidity.",
        config: "--rpc-url $ETC_RPC_URL --chain 61 --legacy --evm-version shanghai",
        href: "https://getfoundry.sh",
      },
      {
        name: "Remix IDE",
        description: "Browser-based Solidity IDE with built-in compiler, debugger, and deployment tools.",
        config: "EVM version shanghai · Deploy → Injected Provider (MetaMask on Chain 61)",
        href: "https://remix.ethereum.org",
      },
      {
        name: "OpenZeppelin Contracts",
        description: "A library for secure smart contract development: standard tokens, access control and upgradeable contracts.",
        href: "https://docs.openzeppelin.com/contracts",
      },
    ],
  },
  {
    heading: "Client Libraries",
    tools: [
      {
        name: "ethers.js v6",
        description: "Complete JavaScript library for Ethereum interaction. Wallet management, contract calls, event listening.",
        config: "new JsonRpcProvider(process.env.ETC_RPC_URL)",
        href: "https://docs.ethers.org",
      },
      {
        name: "viem",
        description: "TypeScript-first Ethereum library. Type-safe contract interactions, ENS, transaction management.",
        config: "defineChain({ id: 61, name: \"Ethereum Classic\", ... })",
        href: "https://viem.sh",
      },
      {
        name: "web3.py",
        description: "A Python interface for Ethereum and EVM chains: contracts, accounts and transactions.",
        config: 'Web3(Web3.HTTPProvider(os.environ["ETC_RPC_URL"]))',
        href: "https://web3py.readthedocs.io",
      },
      {
        name: "Alloy",
        description: "Rust libraries for Ethereum and EVM chains: providers, transports and contract bindings.",
        config: "ProviderBuilder::new().connect_http(rpc_url)",
        href: "https://alloy.rs",
      },
      {
        name: "wagmi",
        description: "React hooks for Ethereum. Type-safe wallet connections, contract interactions, and chain management.",
        config: "chains: [classic], transports: { [classic.id]: http(process.env.ETC_RPC_URL) }",
        href: "https://wagmi.sh",
      },
      {
        name: "RainbowKit",
        description: "A wallet connection UI for React that supports 100+ wallets.",
        config: "chains: [classic]",
        href: "https://www.rainbowkit.com",
      },
      {
        name: "Scaffold-ETH 2",
        description: "Full-stack dApp starter with Next.js, Hardhat, and wagmi. Rapid prototyping for EVM chains.",
        config: "targetNetworks: [chains.classic]",
        href: "https://scaffoldeth.io",
      },
      {
        name: "thirdweb SDK",
        description: "All-in-one Web3 development platform. Deploy contracts, build frontends, manage wallets.",
        config: "chain: defineChain(61)",
        href: "https://thirdweb.com",
      },
    ],
  },
  {
    heading: "Wallets",
    tools: [
      {
        name: "Ledger",
        description: "Cold storage for ETC on the Ledger Nano S Plus and Nano X.",
        badge: "Hardware Wallet",
        href: "https://www.ledger.com",
      },
      {
        name: "Trezor",
        description: "ETC support on Trezor Model T and Trezor Safe. Open-source firmware.",
        badge: "Hardware Wallet",
        href: "https://trezor.io",
      },
      {
        name: "MetaMask",
        description: "Browser wallet. Add ETC as a custom network with Chain ID 61 and a public RPC endpoint.",
        href: "https://metamask.io",
      },
      {
        name: "Trust Wallet",
        description: "Mobile wallet with native ETC support. No custom network configuration required.",
        href: "https://trustwallet.com",
      },
      {
        name: "Rabby",
        description: "Multi-chain browser wallet with built-in transaction simulation and security checks.",
        href: "https://rabby.io",
      },
      {
        name: "Exodus",
        description: "A wallet for desktop, mobile and browser, with native ETC support and a built-in exchange.",
        href: "https://www.exodus.com",
      },
    ],
  },
  {
    heading: "Infrastructure",
    tools: [
      {
        name: "ChainList",
        description: "The public RPC endpoints Ethereum Classic operators publish, with the chain parameters each one needs.",
        config: CHAINLIST_ETC_URL,
        href: CHAINLIST_ETC_URL,
      },
      {
        name: "Blockscout",
        description: "Open-source block explorer with full API. Contract verification, token tracking, analytics.",
        config: "https://etc.blockscout.com",
        href: "https://etc.blockscout.com",
      },
      {
        name: "Sourcify",
        description: "Open-source verification of Solidity and Vyper source against deployed bytecode, on Ethereum Classic and Mordor.",
        config: "forge verify-contract --verifier sourcify --chain 61",
        href: "https://sourcify.dev",
      },
    ],
  },
  {
    heading: "Testing & Security",
    tools: [
      {
        name: "Slither",
        description: "Static analysis framework by Trail of Bits. Detects vulnerabilities and suggests code and gas improvements.",
        href: "https://github.com/crytic/slither",
      },
      {
        name: "Mythril",
        description: "Symbolic execution engine for EVM bytecode. Finds reentrancy, integer overflow, and access control issues.",
        href: "https://github.com/ConsenSysDiligence/mythril",
      },
      {
        name: "Echidna",
        description: "Property-based fuzzer for smart contracts. Write invariants in Solidity and let Echidna find violations.",
        href: "https://github.com/crytic/echidna",
      },
      {
        name: "Medusa",
        description: "Parallelized, coverage-guided Solidity fuzzer by Trail of Bits, built on go-ethereum and inspired by Echidna.",
        href: "https://github.com/crytic/medusa",
      },
      {
        name: "Aderyn",
        description: "Solidity static analyzer by Cyfrin, written in Rust, that integrates into your editor.",
        href: "https://github.com/Cyfrin/aderyn",
      },
    ],
  },
];

export function DeveloperToolingSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="developer-tooling-heading" className="section-gradient geo-lines relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="developer-tooling-heading" className="text-3xl font-bold tracking-tight">
              Developer Tooling
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Ethereum Classic&rsquo;s EVM is the Shanghai set, so
              Ethereum&rsquo;s development toolchain works on ETC: Hardhat,
              Foundry, ethers.js, viem and wagmi connect through a chain
              configuration. Set Chain ID to 61 and compile for the Shanghai EVM:
              current Solidity targets a later EVM by default, and code compiled
              that way can use opcodes ETC does not have. Point your RPC at an
              endpoint from ChainList or at your own node, and deploy with legacy
              transactions, since ETC has no EIP-1559 fee market today.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-14">
            {categories.map((category, ci) => (
              <FadeIn key={category.heading} delay={ci * 80}>
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-[var(--brand-green)]">
                    {category.heading}
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {category.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-5"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold">{tool.name}</p>
                            {tool.badge && (
                              <span className="rounded-full bg-[var(--brand-green-subtle)] px-2 py-0.5 text-[10px] font-mono font-medium text-[var(--brand-green)]">
                                {tool.badge}
                              </span>
                            )}
                          </div>
                          {tool.href && (
                            <a
                              href={tool.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 text-[10px] font-mono text-[var(--text-muted)] transition-colors hover:text-[var(--brand-green)]"
                            >
                              Docs &rarr;
                            </a>
                          )}
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                          {tool.description}
                        </p>
                        {tool.config && (
                          <code className="mt-3 block rounded-md bg-[var(--code-bg)] px-3 py-2 text-[11px] font-mono text-[var(--code-text)] leading-relaxed">
                            {tool.config}
                          </code>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="mt-6 text-xs text-[var(--text-subtle)]">
            Wallets for ETC run on hardware, in the browser, on mobile and on
            the desktop. Compare them at{" "}
            <a
              href="https://ethereumclassic.com/wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--brand-green)] hover:underline"
            >
              ethereumclassic.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
