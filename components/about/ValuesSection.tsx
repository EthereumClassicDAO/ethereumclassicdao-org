import { Shield, Network, Eye, Leaf } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const values = [
  {
    icon: Shield,
    title: "Immutability",
    description:
      "Ethereum Classic exists because, in 2016, its community refused to roll back the exploit of The DAO, and every block since has held that line. Finality is not a feature to be toggled: it is the property that makes ETC viable as neutral settlement infrastructure in every jurisdiction it serves. No counterparty can reverse a settled transaction by decree, selectively freeze activity or alter historical state. It is the original Ethereum chain, preserved without exception.",
  },
  {
    icon: Network,
    title: "Decentralization",
    description:
      "Independent client implementations and GPU and ASIC mining infrastructure distributed across continents leave ETC with no single point of control. The absence of a central issuer or controlling party is not merely an architectural choice: it is what positions ETC for digital commodity classification in the US, and what keeps MiCA's rules for asset-referenced and e-money tokens from applying to it. Decentralization is both a technical property and a legal one.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Ethereum Classic's development history is more than a decade of public ECIPs, open repositories and on-chain activity anyone can verify: building in the open is how this network has always operated. Ethereum Classic DAO is committed to publishing periodic reports under Wyoming's DAO LLC framework. Under the Olympia proposal, every Treasury allocation and governance vote would also be recorded on-chain, publicly verifiable without permission or an access request.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "As proposed, Olympia would credit the EIP-1559 base fee to a treasury that only on-chain governance could spend, while block rewards and priority-fee tips would stay with miners. Anyone could also add to it by choice, by sending ETC to its address or, for a miner, by naming it as a block's beneficiary. The deeper sustainability is organizational: core development would no longer depend on a single employer or grant cycle, and funding would be decided in public, by proposal and vote, on the same terms for every contributor.",
  },
];

export function ValuesSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="our-values-heading" className="section-deep py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="our-values-heading" className="text-3xl font-bold tracking-tight">Our Values</h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Ethereum Classic was built on properties that predate this organization and will outlast it. They are not aspirations: they are the constraints within which every decision is made, and the standard every proposal is measured against.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 100} className="h-full">
                <div className="h-full rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <value.icon
                      size={20}
                      aria-hidden="true"
                      className="text-[var(--brand-green)]"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    {value.description}
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
