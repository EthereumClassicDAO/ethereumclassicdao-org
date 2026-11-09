import {
  ArrowLeftRight,
  Lock,
  TrendingUp,
  Pickaxe,
  FileCheck,
  CircleDollarSign,
} from "lucide-react";
import type { ReactNode, ElementType } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { fetchHashrateTHs, fetchAllHashrateHistories } from "@/lib/api/hashrate";
import { HashrateChart } from "@/components/about/HashrateChart";

const infrastructure: { icon: ElementType; category: string; details: ReactNode }[] = [
  {
    icon: ArrowLeftRight,
    category: "Global Exchange Coverage",
    details: (
      <>
        <a
          href="https://www.coingecko.com/en/coins/ethereum-classic#markets"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
        >
          300+ active markets
        </a>
        {" "}across 20+ major global exchanges, with 17 fiat currency pairs spanning every major currency region and continuous ETC/USD price discovery since 2016: the liquidity depth institutional portfolio allocation and stablecoin settlement require.
      </>
    ),
  },
  {
    icon: Lock,
    category: "Institutional Custody",
    details:
      "Fireblocks, Coinbase Custody, BitGo, Copper and Bakkt provide the qualified custodian infrastructure institutional allocators need, for hedge funds, family offices and regulated investment products. MPC security, insurance coverage and SOC 2 compliance mean ETC moves through existing institutional settlement rails without bespoke custody arrangements.",
  },
  {
    icon: TrendingUp,
    category: "Regulated Products",
    details: (
      <>
        Grayscale Ethereum Classic Trust (
        <a
          href="https://www.otcmarkets.com/stock/ETCG/quote"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
        >
          ETCG
        </a>
        ), quoted on OTCQX since 2018 and available through Charles Schwab, Fidelity and Interactive Brokers: the oldest regulated securities vehicle for ETC exposure, positioned for ETF conversion on the trust-to-ETF path Grayscale took with Bitcoin and Ethereum.
      </>
    ),
  },
  {
    icon: FileCheck,
    category: "Regulatory Status",
    details: (
      <>
        Ethereum Classic DAO LLC is a Wyoming DAO LLC (
        <a
          href="https://wyobiz.wyo.gov/business/FilingDetails.aspx?eFNum=101157225123250204055197221085227098244002050082"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
        >
          Filing ID 2025-001671865
        </a>
        ). Ethereum Classic itself is a digital commodity candidate under the CLARITY Act, an asset with no issuer under MiCA and a listed crypto-asset on Japan&apos;s JVCEA Green List, and Classic USD makes it a GENIUS Act-aligned stablecoin platform.
      </>
    ),
  },
  {
    icon: CircleDollarSign,
    category: "Stablecoin Infrastructure",
    details: (
      <>
        <a
          href="https://classicusd.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
        >
          Classic USD
        </a>{" "}
        ($USC), a GENIUS Act-aligned stablecoin issued by Brale Inc. (
        <a
          href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2376957"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
        >
          NMLS #2376957
        </a>
        ) and deployed on Ethereum Classic mainnet: live, regulated stablecoin infrastructure on a Proof-of-Work network.
      </>
    ),
  },
];

export async function InfrastructureSection() {
  const [hashrateTHs, hashrateHistories] = await Promise.all([
    fetchHashrateTHs(),
    fetchAllHashrateHistories(),
  ]);

  return (
    <>
      <SectionDivider />
      <section aria-labelledby="institutional-infrastructure-heading" className="section-gradient relative geo-circle py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <div className="flex items-end gap-4">
              <div>
                <p data-live="" className="text-4xl font-bold font-mono text-[var(--brand-green)]">
                  {hashrateTHs.toFixed(1)}{" "}
                  <span className="text-lg">TH/s</span>
                </p>
                <p className="mt-1 text-xs font-mono text-[var(--text-subtle)]">
                  Algorithm: Etchash · GPU + ASIC compatible
                </p>
              </div>
              <span className="mb-1 inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-2.5 py-1 font-mono text-[10px] text-[var(--brand-green)]">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
                Live
              </span>
            </div>
            <HashrateChart histories={hashrateHistories} currentTHs={hashrateTHs} />
          </FadeIn>

          <FadeIn>
            <h2 id="institutional-infrastructure-heading" className="mt-16 text-xl font-bold">
              Institutional Infrastructure
            </h2>
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              Ethereum Classic&apos;s institutional footprint spans global exchange coverage, regulated investment products and institutional-grade custody: the rails that connect more than a decade of protocol development to the capital and regulatory frameworks of the global financial system.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {infrastructure.map((item, i) => (
              <FadeIn key={item.category} delay={i * 80} className="h-full">
                <div
                  className="flex h-full gap-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <item.icon
                      size={20}
                      aria-hidden="true"
                      className="text-[var(--brand-green)]"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.category}</p>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                      {item.details}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={infrastructure.length * 80} className="h-full">
              <div className="flex h-full gap-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                  <Pickaxe size={20} aria-hidden="true" className="text-[var(--brand-green)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Mining Infrastructure</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    Globally distributed GPU and ASIC mining infrastructure secures
                    the only mature Proof-of-Work network with native smart contracts.
                    When Ethereum moved to Proof-of-Stake in 2022, Ethereum Classic
                    absorbed a significant share of its Ethash mining ecosystem,
                    from hashrate and GPU farms to the ASIC manufacturers that
                    serve it, such as Bitmain and Jasminer. The{" "}
                    <a
                      href="https://www.congress.gov/bill/119th-congress/senate-bill/4251"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
                    >
                      Mined in America Act
                    </a>
                    , a bill introduced in the Senate in March 2026, would give
                    domestic US operations a voluntary federal certification.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
