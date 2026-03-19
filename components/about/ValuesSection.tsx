import { Shield, Network, Eye, Leaf } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const values = [
  {
    icon: Shield,
    title: "Immutability",
    description:
      "Code is law. Transactions are final. The original Ethereum state history is preserved without exception.",
  },
  {
    icon: Network,
    title: "Decentralization",
    description:
      "Independent client implementations, distributed mining infrastructure, and on-chain governance — no single point of control.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Every treasury transaction, governance vote, and protocol decision is publicly verifiable on-chain.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Protocol-funded treasury via transaction fees creates long-term funding without token inflation or external dependency.",
  },
];

export function ValuesSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-deep py-28">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              The principles that guide every decision at Ethereum Classic DAO.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 100}>
                <div className="rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <value.icon
                      size={20}
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
