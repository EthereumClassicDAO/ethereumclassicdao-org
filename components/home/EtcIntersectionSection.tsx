import Link from "next/link";
import { Cpu, Code2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const regulatoryCards = [
  { label: "CLARITY Act", value: "Digital Commodity", detail: "CFTC · United States" },
  { label: "GENIUS Act", value: "Stablecoin Platform", detail: "United States" },
  { label: "MiCA", value: "Decentralized Asset", detail: "European Union" },
  { label: "Also Compliant", value: "UK · Japan · UAE", detail: "FSMA · FSA Green List · VARA" },
];

const columns = [
  {
    icon: Cpu,
    heading: "From Proof-of-Work",
    subheading: "Bitcoin\u2019s regulatory trajectory",
    points: [
      "No pre-mine, no foundation controlling the protocol, no issuer.",
      "Mining hardware is globally distributed and permissionless to acquire.",
      "Block rewards and tips go to miners. Under the Olympia proposal, a treasury would be funded by the base fee rather than by new issuance.",
      "CLARITY Act digital commodity classification path: same PoW profile as Bitcoin.",
      "Energy demand that co-locates with any power source, anywhere in the world.",
    ],
  },
  {
    icon: Code2,
    heading: "From the EVM",
    subheading: "Ethereum\u2019s regulatory trajectory",
    points: [
      "Solidity and EVM compatibility through Shanghai: Ethereum's tools, libraries and frameworks work with ETC.",
      "Classic USD ($USC) by Brale: a live, 1:1 USD-backed stablecoin on a PoW chain — a first.",
      "GENIUS Act-compliant stablecoin infrastructure, the first on any Proof-of-Work network.",
      "ETCswap V2 and V3 provide on-chain liquidity for composable DeFi with a regulated stable base.",
      "MiCA decentralized asset classification: exempt from ART/EMT issuer obligations.",
    ],
  },
];

export function EtcIntersectionSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="the-only-pow-evm-heading" className="section-gradient relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
              Network Architecture
            </p>
            <h2 id="the-only-pow-evm-heading" className="mt-2 text-3xl font-bold tracking-tight">
              The Only Proof-of-Work EVM
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Ethereum Classic is not simply a Proof-of-Work network or simply a
              smart contract platform. It sits at the intersection of both,
              inheriting the commodity classification path that Bitcoin
              established and the programmable finance frameworks that Ethereum
              established. Bitcoin has PoW without programmability. Ethereum has
              the EVM without PoW. ETC has both &mdash; and its regulatory
              surface is additive, not exclusive.
            </p>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              That surface is a digital commodity candidate under the CLARITY Act,
              a decentralized asset under MiCA, and the only Proof-of-Work EVM with
              a live GENIUS Act-aligned stablecoin.
            </p>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Exchanges listing ETC require asset classification clarity.
              Custodians settling ETC transactions require settlement finality
              guarantees. Investment product issuers require commodity status.
              Regulated stablecoin issuers require an immutable, neutral
              settlement rail. Ethereum Classic DAO LLC gives the network a legal
              counterpart for that work, an entity that can contract and can
              receive and report funding, while Ethereum Classic&rsquo;s core
              developers do the engineering.
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
