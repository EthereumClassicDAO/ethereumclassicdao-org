import { Zap, Anchor, Wind, Globe } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const items = [
  {
    icon: Zap,
    title: "Grid Stabilization",
    description:
      "Miners are uniquely flexible electricity consumers. They can ramp up or curtail in seconds. Grid operators increasingly contract with miners as demand-response resources, turning intermittent renewable output into reliable grid-balancing power.",
  },
  {
    icon: Anchor,
    title: "Buyer of Last Resort",
    description:
      "Remote hydro installations, stranded wind farms, and off-peak power plants often produce electricity with no buyer. PoW mining creates a mobile, shippable, always-on buyer that can co-locate with any power source, anywhere in the world.",
  },
  {
    icon: Wind,
    title: "Methane Conversion",
    description:
      "Oil fields and landfills vent or flare methane, a greenhouse gas 80× more potent than CO₂ over 20 years. Mining operations deployed at wellheads convert methane to CO₂ via combustion, reducing overall climate impact while generating economic returns from what was previously waste.",
  },
  {
    icon: Globe,
    title: "Bootstrapping Remote Grids",
    description:
      "In regions lacking transmission infrastructure, PoW mining provides the initial anchor customer that makes grid construction economically viable. Energy production scales with mining revenue until local demand develops.",
  },
];

export function POWEnergyEconomicsSection() {
  return (
    <>
      <SectionDivider />
      <section className="section-alt relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              How PoW Transforms Energy Markets
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Proof-of-Work mining is not an energy consumer. It is an energy
              market participant. Miners respond to price signals the way no
              other industrial consumer can.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-8">
            {items.map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <item.icon size={20} className="text-[var(--brand-green)]" />
                  </div>
                  <div>
                    <p className="text-base font-semibold">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
