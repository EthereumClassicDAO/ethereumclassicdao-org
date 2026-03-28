import { Timer, ShieldCheck, Fingerprint } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const safeguards = [
  {
    icon: Timer,
    title: "Timelock",
    description:
      "Every approved proposal must wait through a configurable delay period before execution. This gives the community time to review, object, or prepare — preventing hasty or malicious actions from taking effect immediately.",
  },
  {
    icon: ShieldCheck,
    title: "Sanctions Screening",
    description:
      "The governance system includes on-chain sanctions compliance at three layers: proposal submission, active voting, and execution. Sanctioned addresses cannot participate in governance or receive treasury funds.",
  },
  {
    icon: Fingerprint,
    title: "Two-Layer Governance",
    description:
      "CoreDAO membership NFTs are non-transferable, preventing vote buying and governance manipulation. Public participation is enabled through futarchy prediction markets — ensuring both protocol accountability and broad community input.",
  },
];

export function SafeguardsSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-alt py-28">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">Safeguards</h2>
            <p className="mt-3 max-w-xl text-base text-[var(--text-muted)]">
              Built-in protections that keep governance secure and compliant.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {safeguards.map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-colors hover:border-[var(--border-glow)]">
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
