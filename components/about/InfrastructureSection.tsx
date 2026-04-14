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
          className="underline underline-offset-2 hover:text-white transition-colors"
        >
          300+ active markets
        </a>
        {" "}across 20+ major global exchanges with 17 fiat currency pairs spanning every major currency region. Continuous ETC/USD price discovery since 2016 — the liquidity depth required for institutional portfolio allocation and stablecoin settlement.
      </>
    ),
  },
  {
    icon: Lock,
    category: "Institutional Custody",
    details:
      "Fireblocks, Coinbase Custody, BitGo, Copper, and Bakkt provide the qualified custodian infrastructure required for institutional portfolio allocation — hedge funds, family offices, and regulated investment products. MPC security, insurance coverage, and SOC 2 compliance mean ETC moves through existing institutional settlement rails without bespoke custody arrangements.",
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
          className="underline underline-offset-2 hover:text-white transition-colors"
        >
          ETCG
        </a>
        ), trading on OTCQX since 2018 and accessible through Charles Schwab, Fidelity, and Interactive Brokers — the only regulated securities vehicle for Proof-of-Work smart contract exposure. Positioned for ETF conversion following Grayscale&apos;s established trust-to-ETF precedent with Bitcoin and Ethereum.
      </>
    ),
  },
  {
    icon: FileCheck,
    category: "Regulatory Status",
    details: (
      <>
        Wyoming DAO LLC (
        <a
          href="https://wyobiz.wyo.gov/business/FilingDetails.aspx?eFNum=101157225123250204055197221085227098244002050082"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-white transition-colors"
        >
          Filing ID 2025-001671865
        </a>
        ), recognized across leading global regulatory frameworks in the US, EU, UK, Japan, and UAE: digital commodity candidate under the CLARITY Act, decentralized asset under MiCA, FSA Green List in Japan, and active compliance across FSMA, VARA, and GENIUS Act frameworks — the broadest institutional access profile of any Proof-of-Work network.
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
          className="underline underline-offset-2 hover:text-white transition-colors"
        >
          Classic USD
        </a>{" "}
        ($USC), a MiCA and GENIUS Act-compliant stablecoin issued by Brale Inc. (
        <a
          href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2376957"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-white transition-colors"
        >
          NMLS #2376957
        </a>
        ), deployed on Ethereum Classic mainnet — live proof of regulated stablecoin infrastructure on a Proof-of-Work network.
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
                <p className="text-4xl font-bold font-mono text-[var(--brand-green)]">
                  {hashrateTHs.toFixed(1)}{" "}
                  <span className="text-lg">TH/s</span>
                </p>
                <p className="mt-1 text-xs font-mono text-[var(--text-subtle)]">
                  Algorithm: ETChash · GPU + ASIC compatible
                </p>
              </div>
              <span className="mb-1 inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-2.5 py-1 font-mono text-[10px] text-[var(--brand-green)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
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
              Ethereum Classic&apos;s institutional footprint spans global exchange coverage, regulated investment products, and institutional-grade custody — the rails that connect a decade of principled protocol development to the capital and regulatory frameworks of a global financial system.
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
                  <Pickaxe size={20} className="text-[var(--brand-green)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Mining Infrastructure</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    Billions of dollars in globally distributed GPU and ASIC mining
                    infrastructure secures the only Proof-of-Work network with native
                    smart contracts. When Ethereum transitioned to Proof-of-Stake in
                    2022, Ethereum Classic absorbed the entire ETHash mining ecosystem
                    — hashrate, GPU farms, and the ASIC manufacturing base including
                    Bitmain and Jasminer — becoming the largest GPU and ETHash ASIC
                    mining network in the world. Domestic US operations are positioned
                    under the{" "}
                    <a
                      href="https://www.congress.gov/bill/119th-congress/senate-bill/4251"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-white transition-colors"
                    >
                      Mined in America Act
                    </a>
                    .
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
