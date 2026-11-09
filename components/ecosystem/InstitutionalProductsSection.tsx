import { TrendingUp, Lock, ArrowLeftRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const products = [
  {
    icon: TrendingUp,
    title: "Regulated Investment Products",
    description:
      "The Grayscale Ethereum Classic Trust (ETCG) has provided regulated securities exposure since 2017, and could take the trust-to-ETF conversion path that GBTC and ETHE took. As the Bitcoin and Ethereum ETF issuers (BlackRock, Fidelity, VanEck, 21Shares and others) widen their product suites, ETC is a natural candidate for trust and ETF structures.",
    detail: "ETCG · Est. 2017 · ETF Pipeline",
  },
  {
    icon: Lock,
    title: "Institutional Custody",
    description:
      "Institutional-grade ETC custody from Fireblocks, Coinbase Custody, BitGo, Copper and Bakkt, with MPC and multi-signature security, insurance coverage, and regulated custody for enterprises and fund managers.",
    detail: "Fireblocks · Coinbase Custody · BitGo · Copper · Bakkt",
  },
  {
    icon: ArrowLeftRight,
    title: "Global Exchange Coverage & OTC",
    description:
      "300+ active markets across 20+ major global exchanges. For block-size positions, major OTC desks (Cumberland, Galaxy Digital, B2C2 and others) provide bilateral execution with direct settlement into regulated custody.",
    detail: "300+ Markets · 20+ Exchanges · OTC Available",
  },
];

export function InstitutionalProductsSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="institutional-products-market-access-heading" className="section-deep relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="institutional-products-market-access-heading" className="text-3xl font-bold tracking-tight">
              Institutional Products & Market Access
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Regulated entry points for institutional capital into the only mature
              Proof-of-Work smart contract platform. As Bitcoin and Ethereum ETF
              issuers widen their digital asset products, ETC is positioned as
              the next Proof-of-Work digital commodity for regulated investment
              structures. Institutional custody, OTC execution and 300+ exchange
              markets give professional allocators the infrastructure to build
              and manage ETC positions at any scale.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.map((product, i) => (
              <FadeIn key={product.title} delay={i * 100} className="h-full">
                <div className="flex flex-col h-full rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-all duration-200 hover:border-[var(--border-glow)] hover:-translate-y-0.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <product.icon
                      size={20}
                      className="text-[var(--brand-green)]"
                    />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">
                    {product.title}
                  </h3>
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                    {product.description}
                  </p>
                  <p className="mt-4 text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                    {product.detail}
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
