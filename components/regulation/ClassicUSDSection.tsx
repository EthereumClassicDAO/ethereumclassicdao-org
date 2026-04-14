import { type ReactNode, type ElementType } from "react";
import { ShieldCheck, ArrowLeftRight, FileCheck, Coins, BadgeCheck, Layers, Scale, Link2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const attributes: { icon: typeof ShieldCheck; title: string; description: ReactNode; link?: { label: string; href: string } }[] = [
  {
    icon: ShieldCheck,
    title: "US-Regulated Issuer",
    description: <>Issued by <a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2376957" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-green)] hover:opacity-80 transition-opacity">Brale Inc. (NMLS #2376957)</a>, a licensed money transmitter operating under US Bank Secrecy Act and state money transmission regulations. Compliant with GENIUS Act stablecoin issuance requirements.</>,
  },
  {
    icon: Coins,
    title: "1:1 USD Reserves",
    description:
      "Every USC token is backed 1:1 by US dollars held in segregated, regulated US bank accounts. Third-party attestations verify reserve balances independently. SOC 2 compliant infrastructure.",
  },
  {
    icon: ArrowLeftRight,
    title: "Redeemable at Par",
    description:
      "USC redeems 1:1 for USD, USDC (Circle), or USDP (Paxos) via the Brale platform. Deposits via ACH (1-3 business days) or wire (same-day). No slippage. Perfect 1:1 conversion.",
    link: { label: "Mint or Redeem on the Brale Platform", href: "https://app.brale.xyz" },
  },
  {
    icon: FileCheck,
    title: "Smart Contract Security",
    description:
      "ERC-20 standard with transparent proxy pattern (EIP-1967). Role-based access control, pause mechanism, multi-signature requirements, and timelock delays for all significant protocol changes.",
  },
];

const whyItMatters: { icon: ElementType; text: ReactNode }[] = [
  {
    icon: BadgeCheck,
    text: "Proves ETC's EVM handles regulated financial instruments at production scale",
  },
  {
    icon: Layers,
    text: <>Enables composable DeFi with a USD-stable base (<a href="https://etcswap.org" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-green)] hover:opacity-80 transition-opacity">ETCswap</a> V2/V3 integration)</>,
  },
  {
    icon: Scale,
    text: "First deployment validates ETC as a GENIUS Act-compliant stablecoin platform",
  },
  {
    icon: Link2,
    text: "Brale\u2019s API-accessible platform is a pathway for additional fiat-backed issuers on ETC",
  },
];

export function ClassicUSDSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section aria-labelledby="classic-usd-the-definitive-regulated-stablecoin-on-ethereum-classic-heading" className="section-deep relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
              Regulated Stablecoin
            </p>
            <h2 id="classic-usd-the-definitive-regulated-stablecoin-on-ethereum-classic-heading" className="mt-2 text-3xl font-bold tracking-tight">
              Classic USD: The Definitive Regulated Stablecoin on Ethereum
              Classic
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Classic USD ($USC) is the first fiat-backed stablecoin issued
              natively on Ethereum Classic — a 1:1 USD-backed ERC-20 token
              issued by Brale Inc. under US money transmission licensing, with
              reserves held in segregated regulated US bank accounts and
              independently attested. It is not a bridged asset or a wrapped
              version of a token from another chain. It was designed for ETC
              and deployed on ETC mainnet.
            </p>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              The GENIUS Act, signed July 18, 2025, established the first
              federal framework for payment stablecoin issuance in the United
              States. Classic USD meets those requirements: licensed issuer,
              1:1 liquid reserves, par-value redemption, and third-party
              attestations. Its existence on ETC demonstrates that a
              Proof-of-Work EVM can serve as compliant infrastructure for
              regulated financial instruments — not in theory, but in
              production.
            </p>
          </FadeIn>

          {/* Token identity card */}
          <FadeIn delay={80}>
            <div className="mt-8 rounded-xl border border-[var(--border-brand)] bg-[var(--bg-elevated)] p-6">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div>
                    <p className="font-mono text-3xl font-bold text-[var(--brand-green)]">$USC</p>
                    <p className="mt-0.5 text-sm text-[var(--text-muted)]">Classic USD</p>
                  </div>
                  <div className="hidden h-10 w-px bg-[var(--divider)] sm:block" />
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-4">
                    {([
                      { label: "Network", value: "Ethereum Classic · Chain 61" },
                      { label: "Backing", value: "1:1 USD · Segregated" },
                      { label: "Issuer", value: <><a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2376957" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-green)] hover:opacity-80 transition-opacity">Brale Inc. · NMLS #2376957</a></> },
                      { label: "Standard", value: "ERC-20 · EIP-1967 Proxy" },
                    ] as { label: string; value: ReactNode }[]).map((item) => (
                      <div key={item.label}>
                        <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">{item.label}</p>
                        <p className="mt-0.5 text-xs font-medium">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href="https://classicusd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs font-medium text-[var(--brand-green)] hover:underline underline-offset-4"
                >
                  classicusd.com →
                </a>
              </div>
              <div className="mt-5 border-t border-[var(--divider)] pt-4">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">Contract Address</p>
                <a
                  href="https://etc.blockscout.com/token/0xDE093684c796204224BC081f937aa059D903c52a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-mono text-[10px] break-all text-[var(--text-muted)] transition-colors hover:text-[var(--brand-green)]"
                >
                  0xDE093684c796204224BC081f937aa059D903c52a
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Attribute cards 2×2 */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {attributes.map((a, i) => (
              <FadeIn key={a.title} delay={i * 60} className="h-full">
                <div className="h-full rounded-xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-elevated)] p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                      <a.icon size={16} className="text-[var(--brand-green)]" />
                    </div>
                    <p className="text-sm font-semibold">{a.title}</p>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">
                    {a.description}
                  </p>
                  {"link" in a && a.link && (
                    <a
                      href={a.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs font-medium text-[var(--brand-green)] hover:underline underline-offset-4"
                    >
                      {a.link.label} →
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-10 rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-6">
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Why It Matters
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {whyItMatters.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[rgba(0,255,174,0.12)]">
                      <item.icon size={13} className="text-[var(--brand-green)]" />
                    </div>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
