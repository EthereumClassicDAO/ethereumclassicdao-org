import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const useCases = [
  {
    title: "Remote Hydroelectric",
    description:
      "Mountain rivers and remote streams produce power with no transmission link to population centers. Mining hardware shipped to site earns revenue from day one, with no grid connection required.",
  },
  {
    title: "Flared Gas / Wellhead Gas",
    description:
      "Associated gas at oil wells is routinely flared due to lack of pipelines. Containerized mining at the wellhead converts otherwise wasted BTUs into economic output while reducing methane emissions.",
  },
  {
    title: "Curtailed Wind & Solar",
    description:
      "Renewables regularly produce more power than grids can absorb. Mining provides elastic demand that absorbs curtailment, improving project economics and accelerating renewable deployment.",
  },
  {
    title: "Off-Peak Industrial Power",
    description:
      "Industrial facilities carry transmission fees for peak capacity 24/7. Mining during off-peak hours uses contracted-but-unused capacity, reducing effective energy costs.",
  },
  {
    title: "Landfill Gas",
    description:
      "Decomposing waste produces methane continuously. Mining at landfill sites monetizes gas that would otherwise be vented or burned, turning waste infrastructure into revenue-generating assets.",
  },
  {
    title: "Geothermal",
    description:
      "Geothermal resources in seismically active regions (Iceland, Kenya, Indonesia) often lack transmission to major markets. PoW mining is the natural first customer.",
  },
];

export function StrandedEnergySection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="stranded-energy-the-global-opportunity-heading" className="section-alt relative py-28">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="stranded-energy-the-global-opportunity-heading" className="text-3xl font-bold tracking-tight">
              Stranded Energy: The Global Opportunity
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Proof-of-Work mining is one of the few industries that can physically
              relocate to where energy is wasted. Remote hydro with no transmission
              line, gas that would be flared at the wellhead, renewables that
              overproduce at night: PoW mining converts all of it into economic
              output. The same thesis applies to every PoW network with deep
              liquidity, accessible hardware, and global fiat ramps. ETC has
              reached that stage.
            </p>
          </FadeIn>

          {/* Documentary feature */}
          <FadeIn delay={60}>
            <a
              href="https://www.dirtycointhemovie.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex flex-col sm:flex-row items-start gap-5 rounded-xl border border-[var(--border-brand)] bg-[var(--bg-elevated)] p-6 transition-colors hover:border-[var(--brand-green)] group"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)] text-xl">
                🎬
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--brand-green)]">
                  Featured Documentary
                </p>
                <p className="mt-1 text-base font-semibold group-hover:text-[var(--brand-green)] transition-colors">
                  Dirty Coin: The Bitcoin Mining Documentary
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-muted)]">
                  69 minutes. Filmed over three years across four continents,
                  from rural Texas to the mountains of Malawi. Director Alana
                  Mediavilla documents how Proof-of-Work mining is reshaping
                  energy economics and creating socio-economic opportunity in
                  communities that the traditional grid has never reached.
                  Winner, Best National Documentary, Puerto Rico Film Festival 2025.
                </p>
                <p className="mt-3 text-xs font-medium text-[var(--brand-green)]">
                  dirtycointhemovie.com →
                </p>
              </div>
            </a>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u, i) => (
              <FadeIn key={u.title} delay={i * 80}>
                <div className="flex flex-col rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:border-[var(--border-glow)] hover:-translate-y-0.5">
                  <p className="text-sm font-semibold">{u.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                    {u.description}
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
