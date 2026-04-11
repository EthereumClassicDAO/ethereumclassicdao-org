import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

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
        config: "chainId: 61 in hardhat.config.ts",
        href: "https://hardhat.org",
      },
      {
        name: "Foundry",
        description: "Blazing fast Rust-based toolchain: forge, cast, anvil. Write tests in Solidity.",
        config: "--rpc-url https://etc.rivet.link --chain 61",
        href: "https://getfoundry.sh",
      },
      {
        name: "Remix IDE",
        description: "Browser-based Solidity IDE with built-in compiler, debugger, and deployment tools.",
        config: "Deploy → Injected Provider (MetaMask on Chain 61)",
        href: "https://remix.ethereum.org",
      },
    ],
  },
  {
    heading: "Client Libraries",
    tools: [
      {
        name: "ethers.js v6",
        description: "Complete JavaScript library for Ethereum interaction. Wallet management, contract calls, event listening.",
        config: 'new JsonRpcProvider("https://etc.rivet.link")',
        href: "https://docs.ethers.org",
      },
      {
        name: "viem",
        description: "TypeScript-first Ethereum library. Type-safe contract interactions, ENS, transaction management.",
        config: "defineChain({ id: 61, name: \"Ethereum Classic\", ... })",
        href: "https://viem.sh",
      },
      {
        name: "web3.js v4",
        description: "The original JavaScript Ethereum library. Broad ecosystem support and plugin architecture.",
        config: 'new Web3("https://etc.rivet.link")',
        href: "https://docs.web3js.org",
      },
      {
        name: "wagmi",
        description: "React hooks for Ethereum. Type-safe wallet connections, contract interactions, and chain management.",
        config: "chains: [ethereumClassic]",
        href: "https://wagmi.sh",
      },
      {
        name: "RainbowKit",
        description: "Beautiful wallet connection UI for React. Supports 100+ wallets with a polished connect flow.",
        config: "chains: [ethereumClassic]",
        href: "https://www.rainbowkit.com",
      },
      {
        name: "Scaffold-ETH 2",
        description: "Full-stack dApp starter with Next.js, Hardhat, and wagmi. Rapid prototyping for EVM chains.",
        config: "targetNetworks: [chains.ethereumClassic]",
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
        description: "Secure ETC storage with Ledger Nano S Plus and Nano X. Industry-leading cold storage.",
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
        description: "Browser wallet. Add ETC as a custom network with Chain ID 61 and the Rivet RPC endpoint.",
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
        description: "Desktop + mobile wallet with native ETC support and built-in exchange. Available on desktop, mobile, and browser.",
        href: "https://www.exodus.com",
      },
    ],
  },
  {
    heading: "Infrastructure",
    tools: [
      {
        name: "Rivet",
        description: "High-availability RPC provider for Ethereum Classic. Free tier available.",
        config: "https://etc.rivet.link",
        href: "https://rivet.cloud",
      },
      {
        name: "Blockscout",
        description: "Open-source block explorer with full API. Contract verification, token tracking, analytics.",
        config: "https://etc.blockscout.com",
        href: "https://etc.blockscout.com",
      },
    ],
  },
  {
    heading: "Testing & Security",
    tools: [
      {
        name: "Slither",
        description: "Static analysis framework by Trail of Bits. Detects vulnerabilities, optimizes gas, and suggests improvements.",
        href: "https://github.com/crytic/slither",
      },
      {
        name: "Mythril",
        description: "Symbolic execution engine for EVM bytecode. Finds reentrancy, integer overflow, and access control issues.",
        href: "https://mythx.io",
      },
      {
        name: "Echidna",
        description: "Property-based fuzzer for smart contracts. Write invariants in Solidity and let Echidna find violations.",
        href: "https://github.com/crytic/echidna",
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
              Ethereum Classic maintains parity with the latest EVM
              specification. All modern Ethereum tooling works on ETC.
              Configure your chain ID and start building.
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
            ETC is supported by 50+ wallet applications across hardware,
            browser, mobile, and desktop. See the full list at{" "}
            <a
              href="https://ethereumclassic.org/services/wallets"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--brand-green)] hover:underline"
            >
              ethereumclassic.org
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
