import { Wallet, BarChart2, Shuffle, Radio } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const categories = [
  {
    icon: Wallet,
    heading: "Wallets",
    body: "ETC has native support across 50+ wallet applications — hardware (Ledger, Trezor), browser extensions (MetaMask, Rabby), and mobile (Trust Wallet, Exodus). EVM compatibility means any wallet that supports Ethereum can integrate ETC with a single chain configuration. No custom SDK, no protocol modifications.",
    detail: "50+ Wallets · Hardware · Browser · Mobile",
  },
  {
    icon: BarChart2,
    heading: "Exchanges & Markets",
    body: "300+ active markets across 20+ major global exchanges — Coinbase, Binance, Kraken, OKX, and every leading retail brokerage. ETC's Proof-of-Work consensus satisfies exchange compliance requirements in jurisdictions that draw a regulatory distinction between PoW and PoS assets, broadening the addressable market for listings and structured products.",
    detail: "300+ Markets · 20+ Exchanges · Tier-1 Coverage",
  },
  {
    icon: Shuffle,
    heading: "Bridges & DEXes",
    body: "EVM-native contract architecture supports standard bridge and decentralized exchange integrations without custom protocol modifications. ETCswap provides on-chain liquidity in V2 and V3. Cross-chain bridges connect ETC to the multi-chain ecosystem using the same messaging standards deployed across EVM-compatible networks.",
    detail: "EVM-Native · Standard Bridge Interfaces",
  },
  {
    icon: Radio,
    heading: "Oracles & Data",
    body: "ETC's long Proof-of-Work block history, full JSON-RPC parity with Ethereum, and open Blockscout API make it a reliable substrate for on-chain data services. Standard EVM event logs, deterministic block ordering, and chain-native timestamp security provide the primitives oracle networks and data indexers expect.",
    detail: "JSON-RPC Parity · Blockscout API · EVM Events",
  },
];

export function IntegrationsSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section aria-labelledby="integrations-heading" className="section-gradient py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="integrations-heading" className="text-3xl font-bold tracking-tight">
              Wallets, Exchanges & Infrastructure
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              ETC&apos;s global exchange coverage, deep spot liquidity, and
              EVM-native architecture make it the Proof-of-Work integration
              target for the multi-chain ecosystem. Recognized as a digital
              commodity in multiple jurisdictions, ETC gives infrastructure
              products — wallets, exchanges, bridges, oracles — access to a
              globally accessible and compliance-friendly asset with standard
              EVM tooling.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {categories.map((cat, i) => (
              <FadeIn key={cat.heading} delay={i * 80}>
                <div className="flex h-full flex-col rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-all duration-200 hover:border-[var(--border-glow)] hover:-translate-y-0.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <cat.icon size={20} className="text-[var(--brand-green)]" />
                  </div>
                  <p className="mt-4 text-sm font-semibold">{cat.heading}</p>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                    {cat.body}
                  </p>
                  <p className="mt-4 text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                    {cat.detail}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
