import { Wallet, BarChart2, Shuffle, Radio } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const categories = [
  {
    icon: Wallet,
    heading: "Wallets",
    body: "Hardware wallets (Ledger, Trezor), browser extensions (MetaMask, Rabby) and mobile wallets (Trust Wallet, Exodus) support ETC. A wallet built for EVM networks adds ETC with a chain configuration, and one that assumes EIP-1559 needs its legacy-transaction setting, since ETC has no EIP-1559 fee market today.",
    detail: "Hardware · Browser · Mobile",
  },
  {
    icon: BarChart2,
    heading: "Exchanges & Markets",
    body: "300+ active markets across 20+ major global exchanges, Coinbase, Binance, Kraken and OKX among them. In jurisdictions that distinguish Proof-of-Work assets from Proof-of-Stake ones, ETC's Proof-of-Work consensus is an advantage for listings and structured products.",
    detail: "300+ Markets · 20+ Exchanges · Tier-1 Coverage",
  },
  {
    icon: Shuffle,
    heading: "Bridges & DEXes",
    body: "EVM-native contracts support standard bridge and decentralized exchange integrations without protocol changes. ETCswap provides on-chain liquidity in V2 and V3, and cross-chain bridges connect ETC to other networks with the same messaging standards used across EVM chains.",
    detail: "EVM-Native · Standard Bridge Interfaces",
  },
  {
    icon: Radio,
    heading: "Oracles & Data",
    body: "ETC's long Proof-of-Work block history, the standard Ethereum JSON-RPC APIs and the open Blockscout API make it a reliable base for on-chain data services. Standard EVM event logs, deterministic block ordering and Proof-of-Work timestamps give oracle networks and data indexers the primitives they expect.",
    detail: "Standard JSON-RPC · Blockscout API · EVM Events",
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
              ETC&apos;s global exchange coverage, deep spot liquidity and
              EVM-native architecture make it a straightforward Proof-of-Work
              chain to integrate. As a digital commodity candidate in the US, it
              gives infrastructure products (wallets, exchanges, bridges and
              oracles) a globally accessible asset that works with standard EVM
              tooling.
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
