import { Eye, Link2, Network, Scale } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const principles = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "All governance operations, treasury movements, and organizational decisions are disclosed publicly. On-chain records provide independently verifiable proof of every action.",
  },
  {
    icon: Link2,
    title: "Immutability",
    description:
      "Governance records are stored on-chain and cannot be altered or deleted. The blockchain provides a permanent, tamper-proof audit trail for every proposal, vote, and execution.",
  },
  {
    icon: Network,
    title: "Decentralization",
    description:
      "No single point of control or failure. Independent client implementations, permissionless proposal submission, and community-driven governance ensure resilience.",
  },
  {
    icon: Scale,
    title: "Compliance",
    description:
      "Operating within the Wyoming DAO LLC regulatory framework. On-chain sanctions screening, registered agent, and periodic public reporting demonstrate institutional responsibility.",
  },
];

export function PrinciplesSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="organizational-principles-heading" className="section-gradient py-28">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 id="organizational-principles-heading" className="text-3xl font-bold tracking-tight">
              Organizational Principles
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              The values that guide every decision and disclosure.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {principles.map((item, i) => (
              <FadeIn key={item.title} delay={i * 100} className="h-full">
                <div className="h-full rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-colors hover:border-[var(--border-glow)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <item.icon
                      size={20}
                      className="text-[var(--brand-green)]"
                    />
                  </div>
                  <p className="mt-4 text-base font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.description}
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
