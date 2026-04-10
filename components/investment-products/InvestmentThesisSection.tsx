import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const thesisPoints = [
  {
    number: "01",
    title: "Regulatory Clarity",
    body: "Digital commodity candidate (CLARITY Act), decentralized asset (MiCA), stablecoin platform (GENIUS Act): positioned across every major regulatory framework simultaneously. No other smart contract platform has this legal profile.",
  },
  {
    number: "02",
    title: "Olympia Upgrade",
    body: "EIP-1559 fee burn creates deflationary pressure on block rewards for the first time on ETC. On-chain DAO treasury funded by base fees. First programmable monetary policy on a Proof-of-Work EVM.",
  },
  {
    number: "03",
    title: "Regulated Stablecoin Infrastructure",
    body: "Classic USD ($USC) is live on ETC mainnet, the first GENIUS Act-aligned stablecoin on a Proof-of-Work EVM. Issued by Brale Inc. (NMLS #2376957), 1:1 USD backed, integrated with ETCswap V2/V3.",
  },
  {
    number: "04",
    title: "Proven Track Record",
    body: "The original Ethereum Virtual Machine, running continuously since July 2015. Zero protocol-level failures. Immutable ledger. No other smart contract platform has a longer operational track record.",
  },
  {
    number: "05",
    title: "Deepest PoW Smart Contract Liquidity",
    body: "300+ exchanges, 11 fiat currency pairs, accessible GPU mining hardware at retail, and institutional ASIC infrastructure. No comparable Proof-of-Work network with native smart contract capability exists.",
  },
];

export function InvestmentThesisSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-alt relative py-28">
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              The ETC Investment Case
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Five structural properties that distinguish Ethereum Classic in
              the 2025–2026 institutional digital asset landscape.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-8">
            {thesisPoints.map((p, i) => (
              <FadeIn key={p.number} delay={i * 80}>
                <div className="flex gap-6">
                  <span className="font-mono text-xl font-bold text-[var(--brand-green)] opacity-40 shrink-0 w-8">
                    {p.number}
                  </span>
                  <div>
                    <p className="text-base font-semibold">{p.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                      {p.body}
                    </p>
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
