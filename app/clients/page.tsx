import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Implementations",
  description:
    "Three independent client implementations ensure no single point of failure for Ethereum Classic.",
};

const clients = [
  {
    name: "Fukuii",
    language: "Scala",
    languageColor: "#DC322F",
    role: "Primary Client",
    roleColor: "#00ffae",
    description:
      "Next-generation ETC client built from the ground up. 143 RPC methods, 2,706 tests, full SNAP sync support. Becomes the primary production client after Olympia.",
    organization: "White B0x Inc.",
    githubUrl: "https://github.com/AlanVerbner/fukuii",
    docsUrl: "https://github.com/AlanVerbner/fukuii#readme",
    stats: [
      { label: "RPC Methods", value: "143" },
      { label: "Tests", value: "2,706" },
      { label: "Runtime", value: "JDK 21" },
    ],
  },
  {
    name: "Core-Geth",
    language: "Go",
    languageColor: "#00ADD8",
    role: "Maintenance",
    roleColor: "#a78bfa",
    description:
      "Battle-tested ETC client based on go-ethereum. Transitioning to maintenance role as Fukuii takes over post-Olympia.",
    organization: "ETC Labs",
    githubUrl: "https://github.com/etclabscore/core-geth",
    docsUrl: "https://etclabscore.github.io/core-geth/",
    stats: [
      { label: "Version", value: "v1.12.21" },
      { label: "Forks", value: "8 supported" },
      { label: "Runtime", value: "Go 1.24" },
    ],
  },
  {
    name: "Hyperledger Besu",
    language: "Java",
    languageColor: "#B07219",
    role: "Enterprise",
    roleColor: "#38bdf8",
    description:
      "Enterprise-grade client maintained by the Hyperledger Foundation. Supports SNAP state serving, permissioning, and privacy.",
    organization: "Hyperledger Foundation",
    githubUrl: "https://github.com/hyperledger/besu",
    docsUrl: "https://besu.hyperledger.org/",
    stats: [
      { label: "Version", value: "v26.3" },
      { label: "License", value: "Apache 2.0" },
      { label: "Runtime", value: "Java 21" },
    ],
  },
];

export default function ClientsPage() {
  return (
    <main>
      <section className="hero-gradient relative pt-32 pb-16">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Three Independent{" "}
              <span className="text-[var(--brand-green)]">Client Implementations</span>
            </h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mx-auto max-w-2xl text-lg text-[var(--text-muted)]">
              Multi-client architecture ensures no single point of failure. Each
              implementation passes the cross-client test matrix covering 14 historical
              forks and all Olympia specifications.
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      <section className="section-alt py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
            {clients.map((client, i) => (
              <FadeIn key={client.name} delay={i * 80}>
                <div className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-elevated)] p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold"
                      style={{
                        backgroundColor: `${client.languageColor}20`,
                        color: client.languageColor,
                      }}
                    >
                      {client.language.slice(0, 2)}
                    </span>
                    <div>
                      <h2 className="font-semibold">{client.name}</h2>
                      <span
                        className="rounded-full px-2 py-0.5 text-xs font-medium"
                        style={{
                          backgroundColor: `${client.roleColor}15`,
                          color: client.roleColor,
                        }}
                      >
                        {client.role}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                    {client.description}
                  </p>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {client.stats.map((s) => (
                      <div key={s.label} className="rounded-lg bg-[var(--background)] px-2 py-2 text-center">
                        <p className="text-[10px] text-[var(--text-muted)]">{s.label}</p>
                        <p className="text-sm font-semibold">{s.value}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-3 text-xs text-[var(--text-muted)]">{client.organization}</p>

                  <div className="mt-4 flex gap-3">
                    <a
                      href={client.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[var(--brand-green)] transition hover:opacity-80"
                    >
                      GitHub <ExternalLink size={12} />
                    </a>
                    <a
                      href={client.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[var(--brand-green)] transition hover:opacity-80"
                    >
                      Docs <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
