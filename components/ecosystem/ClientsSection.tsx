import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";

const clients = [
  {
    name: "core-geth",
    language: "Go",
    description:
      "The primary Ethereum Classic client, maintained by the ETC Cooperative. Fork of go-ethereum with full ETC protocol support.",
    github: "https://github.com/etclabscore/core-geth",
    status: "Production",
  },
  {
    name: "besu",
    language: "Java",
    description:
      "Enterprise-grade Ethereum client by Hyperledger. Supports ETC with full protocol compatibility. JDK 21 LTS.",
    github: "https://github.com/hyperledger/besu",
    status: "Production",
  },
  {
    name: "fukuii",
    language: "Scala",
    description:
      "Independent ETC client built from scratch. SNAP sync, 2,300+ tests. The third independent implementation for network resilience.",
    github: "https://github.com/nicobao/fukuii",
    status: "Alpha",
  },
];

export function ClientsSection() {
  return (
    <>
      <SectionDivider variant="strong" />
      <section className="section-deep py-28">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight">
              Client Implementations
            </h2>
            <p className="mt-3 max-w-xl text-base text-[var(--text-muted)]">
              Three independent client implementations ensure decentralization
              and resilience. No single implementation is a point of failure.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {clients.map((client, i) => (
              <FadeIn key={client.name} delay={i * 100}>
                <div className="flex flex-col rounded-xl bg-[var(--bg-elevated)] border border-[rgba(255,255,255,0.06)] p-6 transition-colors hover:border-[var(--border-glow)]">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-base font-semibold font-mono">
                        {client.name}
                      </p>
                      <p className="mt-1 text-xs text-[var(--text-subtle)]">
                        {client.language}
                      </p>
                    </div>
                    <span
                      className={
                        client.status === "Production"
                          ? "badge-available"
                          : "badge-active"
                      }
                    >
                      {client.status}
                    </span>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                    {client.description}
                  </p>
                  <a
                    href={client.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-xs font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)]"
                  >
                    View on GitHub →
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
