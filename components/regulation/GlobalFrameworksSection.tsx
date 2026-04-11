import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { FlagImg } from "@/components/ui/FlagImg";

const regions = [
  {
    region: "United States",
    flag: "🇺🇸",
    framework: "GENIUS Act · CLARITY Act · OCC Trust Charters · Mined in America Act",
    effective: "July 2025",
    keyRules: [
      "Stablecoin reserves 1:1 liquid assets (GENIUS Act, signed Jul 18, 2025)",
      "SEC/CFTC jurisdictional perimeter clarified for digital commodities",
      "OCC approved national trust bank charters for digital asset custody",
      "FDIC framework for bank-issued payment stablecoins under development",
      "Mined in America Act: voluntary federal certification for domestic PoW mining; NIST support for US ASIC manufacturing; federal energy program access for certified Proof-of-Work operations",
    ],
  },
  {
    region: "European Union",
    flag: "🇪🇺",
    framework: "Markets in Crypto-Assets (MiCA)",
    effective: "Dec 2024 · Hard cutoff Jul 1, 2026",
    keyRules: [
      "14 regulated CASP activities requiring EU authorization",
      "E-Money Tokens (EMTs): 1:1 fiat backing, par-value redemption",
      "Asset-Referenced Tokens (ARTs): reserve asset requirements",
      "€5M minimum fine or 3–12.5% of annual turnover for violations",
    ],
  },
  {
    region: "United Kingdom",
    flag: "🇬🇧",
    framework: "FSMA Cryptoassets Regulations 2026",
    effective: "Full implementation Oct 25, 2027",
    keyRules: [
      "FCA supervises qualifying stablecoins, trading platforms, custody",
      "Bank of England oversight for systemically important stablecoins",
      "Application window opens Sept 30, 2026",
      "FCA named stablecoin payments its top 2026 priority",
    ],
  },
  {
    region: "Asia-Pacific",
    flag: "🌏",
    framework: "Japan PSA · HK Stablecoins Ordinance · Australia AFSL · Singapore MAS",
    effective: "2024–2026",
    keyRules: [
      "Japan: only banks, fund transfer providers, trust companies may issue stablecoins",
      "Hong Kong: Stablecoins Ordinance effective Aug 1, 2025; first licenses Apr 2026",
      "Australia: Corporations Amendment (Digital Assets Framework) Bill passed Apr 1, 2026",
      "Singapore: VASP licensing deadline Jun 30, 2025; stablecoin framework 2026",
    ],
  },
  {
    region: "Middle East",
    flag: "🇦🇪",
    framework: "UAE VARA v2.0 · CBUAE Payment Tokens · Saudi CMA (H2 2026)",
    effective: "Jun 2025 (UAE)",
    keyRules: [
      "VARA Dubai Rulebook v2.0 effective June 19, 2025",
      "CBUAE: consumer payments limited to AED-pegged stablecoins",
      "ADGM bans privacy coins and algorithmic stablecoins",
      "Saudi Arabia CMA comprehensive framework: public consultation H2 2026",
    ],
  },
  {
    region: "Emerging Markets",
    flag: "🌍",
    framework: "South Africa CASP · Nigeria ISA 2025 · Kenya VASP Act 2025 · Brazil BCB",
    effective: "2025–2026",
    keyRules: [
      "South Africa: 300 CASP licenses issued; Travel Rule enforcement active",
      "Nigeria: Investments and Securities Act 2025 classifies digital assets as securities",
      "Kenya: VASP Act signed Oct 2025; dual CBK/CMA regulatory structure",
      "Brazil: VASP authorization required from Feb 2026; compliance deadline Nov 2026",
    ],
  },
];

export function GlobalFrameworksSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-alt relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              The 2025–2026 Regulatory Wave
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Virtually every major jurisdiction now has or is finalizing crypto
              regulation. ETC sits at the intersection of two distinct regulatory
              trajectories: the commodity classification path that Proof-of-Work
              networks established, and the programmable finance frameworks being
              built around smart contract platforms. Its regulatory surface is
              additive — it captures both.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((r, i) => (
              <FadeIn key={r.region} delay={i * 80}>
                <div className="flex flex-col rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:border-[var(--border-glow)] hover:-translate-y-0.5">
                  <div className="flex items-center gap-2">
                    <FlagImg emoji={r.flag} size={24} />
                    <div>
                      <p className="text-sm font-semibold">{r.region}</p>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                        {r.effective}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs font-medium text-[var(--brand-green)]">
                    {r.framework}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {r.keyRules.map((rule) => (
                      <li
                        key={rule}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[var(--text-muted)]"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]"
                          aria-hidden="true"
                        />
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="mt-10 text-sm text-[var(--text-subtle)] border-l-2 border-[var(--brand-green)] pl-4">
              ETC&rsquo;s regulatory surface spans two distinct trajectories: the digital commodity
              classification path that Proof-of-Work networks established, and the programmable
              finance frameworks being built around smart contract platforms. It qualifies under both.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
