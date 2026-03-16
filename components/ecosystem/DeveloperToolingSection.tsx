import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

interface Tool {
  name: string;
  description: string;
  config?: string;
  href?: string;
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
        description: "Blazing fast Rust-based toolchain — forge, cast, anvil. Write tests in Solidity.",
        config: "--rpc-url https://etc.rivet.link --chain 61",
        href: "https://getfoundry.sh",
      },
      {
        name: "Remix IDE",
        description: "Browser-based Solidity IDE with built-in compiler, debugger, and deployment tools.",
        config: "Deploy → Injected Provider (MetaMask on Chain 61)",
        href: "https://remix.ethereum.org",
      },
      {
        name: "OpenZeppelin Contracts",
        description: "Battle-tested library for secure smart contract development. ERC-20, ERC-721, Governor, AccessControl.",
        config: "Fully compatible — use latest 5.x",
        href: "https://www.openzeppelin.com/contracts",
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
    ],
  },
  {
    heading: "Wallets",
    tools: [
      {
        name: "MetaMask",
        description: "Browser wallet — add ETC as a custom network with Chain ID 61 and the Rivet RPC endpoint.",
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
      <section className="section-gradient geo-lines relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              Developer Tooling
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[var(--text-muted)]">
              Every framework, library, and tool in the Ethereum ecosystem
              works with Ethereum Classic. Full EVM compatibility &mdash;
              configure your chain ID and start building.
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
                        className="rounded-xl bg-[var(--bg-elevated)] border border-[rgba(255,255,255,0.06)] p-5"
                      >
                        <div className="flex items-start justify-between">
                          <p className="text-sm font-semibold">{tool.name}</p>
                          {tool.href && (
                            <a
                              href={tool.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 text-[10px] font-mono text-[var(--text-subtle)] transition-colors hover:text-[var(--brand-green)]"
                            >
                              Docs &rarr;
                            </a>
                          )}
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                          {tool.description}
                        </p>
                        {tool.config && (
                          <code className="mt-3 block rounded-md bg-[rgba(0,0,0,0.3)] px-3 py-2 text-[11px] font-mono text-[var(--brand-green)] leading-relaxed">
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
        </div>
      </section>
    </>
  );
}
