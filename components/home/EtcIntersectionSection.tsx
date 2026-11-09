import Link from "next/link";
import { Cpu, Code2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const regulatoryCards = [
  { label: "CLARITY Act", value: "Digital Commodity Candidate", detail: "CFTC · United States" },
  { label: "GENIUS Act", value: "Stablecoin Platform", detail: "United States" },
  { label: "MiCA", value: "No Issuer", detail: "European Union" },
  { label: "Green List", value: "Listed Crypto-Asset", detail: "JVCEA · Japan" },
];

const columns = [
  {
    icon: Cpu,
    heading: "From Proof-of-Work",
    subheading: "Bitcoin\u2019s regulatory trajectory",
    points: [
      "No foundation controlling the protocol and no central issuer.",
      "Mining hardware is globally distributed and permissionless to acquire.",
      "Block rewards and tips go to miners. Under the Olympia proposal, a treasury would be funded by the base fee rather than by new issuance.",
      "A digital commodity candidate under the CLARITY Act, with the same Proof-of-Work profile as Bitcoin.",
      "Mining demand can co-locate with any power source, anywhere in the world.",
    ],
  },
  {
    icon: Code2,
    heading: "From the EVM",
    subheading: "Ethereum\u2019s regulatory trajectory",
    points: [
      "Solidity and the EVM through Shanghai, so Ethereum's tools, libraries and frameworks work with ETC, with a legacy-transaction setting where a tool assumes EIP-1559.",
      "Classic USD ($USC) by Brale: a live, 1:1 USD-backed stablecoin aligned with the GENIUS Act, on a Proof-of-Work network.",
      "Under the Olympia proposal, EVM alignment would continue through Fusaka and into Glamsterdam.",
      "ETCswap V2 and V3 provide on-chain liquidity for composable DeFi with a regulated stable base.",
      "No issuer under MiCA, so the rules for asset-referenced and e-money tokens do not apply.",
    ],
  },
];

export function EtcIntersectionSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="pow-evm-heading" className="section-gradient relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
              Network Architecture
            </p>
            <h2 id="pow-evm-heading" className="mt-2 text-3xl font-bold tracking-tight">
              Where Proof-of-Work Meets the EVM
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Ethereum Classic is not simply a Proof-of-Work network or simply a
              smart contract platform. It sits at the intersection of both,
              inheriting the commodity classification path that Bitcoin
              established and the programmable finance frameworks that Ethereum
              established. Bitcoin has Proof-of-Work without general-purpose smart
              contracts, and Ethereum has the EVM without Proof-of-Work. ETC has
              both, so it stands on both regulatory paths at once: a digital
              commodity candidate under the CLARITY Act, an asset with no issuer
              under MiCA, and a Proof-of-Work EVM with a live stablecoin aligned
              with the GENIUS Act.
            </p>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Exchanges listing ETC need a clear asset classification. Custodians
              need settlement finality, investment product issuers need commodity
              status, and regulated stablecoin issuers need an immutable, neutral
              settlement rail. For the software all of them rely on, Ethereum
              Classic DAO is a legal counterpart: an entity that can sign
              contracts and can receive and report funding, while Ethereum
              Classic&rsquo;s core developers do the engineering.
            </p>
          </FadeIn>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {regulatoryCards.map((m, i) => (
              <FadeIn key={m.label} delay={i * 80}>
                <div className="flex min-h-[80px] flex-col justify-between rounded-lg border-l-2 border-[var(--brand-green)] bg-[var(--bg-elevated)] p-4">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--brand-green)]">
                    {m.label}
                  </p>
                  <div>
                    <p className="mt-1.5 text-sm font-bold leading-snug tracking-tight">{m.value}</p>
                    <p className="mt-1 text-[10px] text-[var(--text-muted)]">{m.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {columns.map((col, i) => (
              <FadeIn key={col.heading} delay={i * 80}>
                <div className="rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6 h-full">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                      <col.icon size={16} aria-hidden="true" className="text-[var(--brand-green)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{col.heading}</p>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                        {col.subheading}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {col.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]"
                          aria-hidden="true"
                        />
                        <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <Link
                href="/environmental-impact"
                className="text-xs font-medium text-[var(--brand-green)] hover:underline underline-offset-4"
              >
                PoW as energy infrastructure &rarr;
              </Link>
              <Link
                href="/regulation"
                className="text-xs font-medium text-[var(--brand-green)] hover:underline underline-offset-4"
              >
                Regulatory landscape &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
