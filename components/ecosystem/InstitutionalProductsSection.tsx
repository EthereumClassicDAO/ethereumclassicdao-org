import { TrendingUp, Lock, ArrowLeftRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const products = [
  {
    icon: TrendingUp,
    title: "Grayscale Ethereum Classic Trust (ETCG)",
    description:
      "Regulated securities exposure since 2017. The only Proof-of-Work smart contract platform with a Grayscale trust product. ETF conversion pipeline in progress — establishing ETC as the anchor asset for a compliant digital commodity ecosystem.",
    detail: "Ticker: ETCG · Est. 2017",
  },
  {
    icon: Lock,
    title: "Institutional Custody",
    description:
      "Institutional-grade digital asset custody from industry-leading custodians. Multi-signature security, insurance coverage, and regulatory compliance for enterprise and fund managers.",
    detail: "Leading Custodians · Enterprise",
  },
  {
    icon: ArrowLeftRight,
    title: "Global Exchange Coverage",
    description:
      "300+ active markets across 20+ major global exchanges. Available on every leading trading platform and retail brokerage worldwide.",
    detail: "300+ Markets · 20+ Exchanges",
  },
];

export function InstitutionalProductsSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-gradient relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              Institutional Products & Market Access
            </h2>
            <p className="mt-3 max-w-xl text-base text-[var(--text-muted)]">
              A regulated digital asset ecosystem &mdash; from the Grayscale
              ETC Trust to institutional custody, positioned for ETF conversion
              and compliant ERC-20 token issuance.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.map((product, i) => (
              <FadeIn key={product.title} delay={i * 100}>
                <div className="flex flex-col rounded-xl bg-[var(--bg-elevated)] border border-[rgba(255,255,255,0.06)] p-6 transition-all duration-200 hover:border-[var(--border-glow)] hover:-translate-y-0.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(0,255,174,0.08)]">
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
