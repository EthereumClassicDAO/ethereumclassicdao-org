import { Timer, ShieldCheck, Fingerprint } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const safeguards = [
  {
    icon: Timer,
    title: "Timelock",
    ecip: "ECIP-1113",
    description:
      "Every approved proposal must wait through a configurable delay period before execution. This gives the community time to review, object, or prepare, preventing hasty or malicious actions from taking effect immediately.",
  },
  {
    icon: ShieldCheck,
    title: "Sanctions Screening",
    ecip: "ECIP-1119",
    description:
      "The governance system includes on-chain sanctions compliance at three layers: proposal submission, active voting, and execution. Sanctioned addresses cannot participate in governance or receive treasury funds.",
  },
  {
    icon: Fingerprint,
    title: "Open Prediction Markets",
    ecip: "ECIP-1117",
    description:
      "Open to anyone without membership — futarchy prediction markets provide a financially incentivized governance signal that prevents binding governance from becoming captured by a closed set of members. Anyone can stake on protocol outcomes and earn rewards for accurate predictions. Market prices become on-chain signal that informs governance decisions and holds the DAO publicly accountable.",
  },
];

export function SafeguardsSection() {
  return (
    <>
      <section aria-labelledby="safeguards-heading" className="section-gradient py-28">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <h2 id="safeguards-heading" className="text-3xl font-bold tracking-tight">Safeguards</h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Built-in protections that keep governance secure and compliant.
            </p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
                ECIP-1113
              </span>
              <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
                ECIP-1117
              </span>
              <span className="rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
                ECIP-1119
              </span>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {safeguards.map((item, i) => (
              <FadeIn key={item.title} delay={i * 100} className="h-full">
                <div className="h-full rounded-xl bg-[var(--bg-elevated)] border border-[var(--divider)] p-6 transition-colors hover:border-[var(--border-glow)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <item.icon
                      size={20}
                      className="text-[var(--brand-green)]"
                    />
                  </div>
                  <p className="mt-4 text-base font-semibold">{item.title}</p>
                  <span className="mt-1.5 inline-block rounded-full bg-[rgba(0,255,174,0.08)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--brand-green)]">
                    {item.ecip}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
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
