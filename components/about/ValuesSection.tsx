import { Shield, Network, Eye, Leaf } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const values = [
  {
    icon: Shield,
    title: "Immutability",
    description:
      "Ethereum Classic exists because one network refused to roll back transactions in 2016. Every block since has held that line. Finality is not a feature to be toggled — it is the property that makes ETC viable as neutral settlement infrastructure across six regulatory jurisdictions. No counterparty can reverse a settled transaction, selectively freeze activity, or alter historical state. The original Ethereum chain, preserved without exception.",
  },
  {
    icon: Network,
    title: "Decentralization",
    description:
      "Multiple independent client implementations, distributed GPU and ASIC mining infrastructure across multiple continents, and on-chain governance execution — ETC has no single point of control. The absence of a central issuer or controlling party is not merely an architectural choice: it is the basis for ETC's digital commodity classification under US and EU frameworks. Decentralization is both a technical property and a legal one.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Ethereum Classic's development history is a decade of public ECIPs, open repositories, and on-chain activity anyone can verify — building in the open is not a new policy, it is how this network has always operated. The Olympia governance infrastructure formalizes that culture: every treasury allocation, governance vote, and protocol execution is permanently recorded on-chain and publicly verifiable without permission or access request. Ethereum Classic DAO LLC operates under Wyoming's DAO LLC framework with financial disclosures traceable from on-chain proposal submission through execution. Institutional transparency here is structural — it is not a reporting obligation layered on top of operations; it is how the operations are built.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "The Olympia upgrade routes EIP-1559 basefee revenue to a protocol-managed treasury — block rewards and tips remain entirely with miners. Voluntary on-chain donations and mining contributions to the treasury address add further depth; what once required fielding a dedicated non-profit now takes a single transaction. As futarchy prediction markets mature, that activity feeds back as additional basefee revenue, creating a self-reinforcing loop that scales with adoption. But the deeper sustainability is organizational: core development is no longer tied to any single employer or grant cycle. Any developer across the entire EVM ecosystem can contribute and compete for treasury funding on equal terms — a distributed contributor base with no single point of failure, and no backroom relationships required.",
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
              Ethereum Classic was built on properties that predate this organization and will outlast it. They are not aspirational statements — they are the constraints within which every decision is made, and the standard every proposal is measured against.
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
