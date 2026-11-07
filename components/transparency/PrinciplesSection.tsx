import { Eye, Link2, Network, Scale } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const principles = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Organizational decisions and financial activity are disclosed in periodic public reports. Under the Olympia proposal, every Treasury movement would also leave an on-chain record anyone can verify.",
  },
  {
    icon: Link2,
    title: "Immutability",
    description:
      "Under the Olympia proposal, governance would run on-chain: every proposal, vote and execution would be a permanent record on Ethereum Classic that cannot be altered or deleted.",
  },
  {
    icon: Network,
    title: "Decentralization",
    description:
      "No single point of control or failure: independent client implementations, repositories with more than one maintainer, and, under the Olympia proposal, funding proposals any address may submit, subject to the Governor's proposal threshold.",
  },
  {
    icon: Scale,
    title: "Compliance",
    description:
      "Operating within the Wyoming DAO LLC regulatory framework, with a registered agent and periodic public reporting. Under the Olympia proposal, the voting interface would screen each funding proposal's recipient against a sanctions list (ECIP-1119).",
  },
];

export function PrinciplesSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="organizational-principles-heading" className="section-gradient py-28">
        <div className="mx-auto max-w-5xl px-6">
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
                      aria-hidden="true"
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
