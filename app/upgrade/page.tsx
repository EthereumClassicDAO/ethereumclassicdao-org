import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ExternalLink, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Olympia Upgrade Guide",
  description:
    "How to upgrade your Ethereum Classic node for the Olympia hard fork. Guides for Core-Geth, Hyperledger Besu, and Fukuii.",
};

const clients = [
  {
    name: "Core-Geth",
    language: "Go",
    languageColor: "#00ADD8",
    role: "Maintenance",
    version: "TBD",
    runtime: "Go 1.24+",
    disk: "500 GB+ (full sync)",
    ram: "8 GB minimum",
    steps: [
      "Stop your running Core-Geth node",
      "Download the Olympia-compatible release from GitHub",
      "Replace the existing binary or update via package manager",
      "Restart your node — it will automatically follow the Olympia fork",
    ],
    dockerImage: "etclabscore/core-geth",
    githubUrl: "https://github.com/etclabscore/core-geth/releases",
    docsUrl: "https://etclabscore.github.io/core-geth/",
  },
  {
    name: "Hyperledger Besu",
    language: "Java",
    languageColor: "#B07219",
    role: "Enterprise",
    version: "TBD",
    runtime: "JDK 21+",
    disk: "500 GB+ (full sync)",
    ram: "8 GB minimum",
    steps: [
      "Stop your running Besu node",
      "Download the Olympia-compatible release from GitHub or update via package manager",
      "Replace the existing binary or JAR file",
      "Restart your node — Besu automatically follows the Olympia fork",
    ],
    dockerImage: "hyperledger/besu",
    githubUrl: "https://github.com/hyperledger/besu/releases",
    docsUrl: "https://besu.hyperledger.org/",
  },
  {
    name: "Fukuii",
    language: "Scala",
    languageColor: "#DC322F",
    role: "Primary Client",
    version: "TBD",
    runtime: "JDK 21+",
    disk: "500 GB+ (SNAP sync)",
    ram: "8 GB minimum",
    steps: [
      "Stop your running Fukuii node",
      "Download the Olympia-compatible release from GitHub",
      "Replace the existing binary",
      "Restart your node — Fukuii automatically follows the Olympia fork",
    ],
    dockerImage: "whiteb0x/fukuii",
    githubUrl: "https://github.com/AlanVerbner/fukuii/releases",
    docsUrl: "https://github.com/AlanVerbner/fukuii#readme",
  },
];

const faqItems = [
  {
    question: "What happens if I don't upgrade?",
    answer:
      "If you do not upgrade before the Olympia activation block, your node will stop following the canonical chain. You will need to upgrade and resync from the fork point. Exchanges, wallets, and services running outdated clients will be unable to process transactions on the post-Olympia chain.",
  },
  {
    question: "Will my miner rewards change?",
    answer:
      "No. Block rewards and tips remain completely untouched at 2.048 ETC (Era 4). The Olympia upgrade redirects the EIP-1559 basefee to the protocol treasury — this is separate from miner rewards.",
  },
  {
    question: "When is the activation block?",
    answer:
      "The exact activation block will be announced after the CDC-23 community call. All three client implementations will release Olympia-compatible versions well before activation.",
  },
  {
    question: "Can I roll back if something goes wrong?",
    answer:
      "You can downgrade to a pre-Olympia client version, but your node will only follow the pre-fork chain. In practice, the network will have moved to the Olympia chain. All three clients have been extensively tested against a cross-client test matrix covering 14 historical forks.",
  },
];

export default function UpgradePage() {
  return (
    <main>
      <section className="hero-gradient relative pt-32 pb-16">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Olympia{" "}
              <span className="text-[var(--brand-green)]">Upgrade Guide</span>
            </h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mx-auto max-w-2xl text-lg text-[var(--text-muted)]">
              Node operators must upgrade before the Olympia activation block.
              Three independent client implementations are available — choose the
              one that fits your infrastructure.
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Activation Status */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="flex items-center gap-3 rounded-xl border border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.05)] px-5 py-4">
              <AlertTriangle size={20} className="shrink-0 text-[#F59E0B]" />
              <div>
                <p className="text-sm font-medium text-[#F59E0B]">
                  Activation Block: TBD
                </p>
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">
                  The exact block number will be announced after CDC-23. Upgrade
                  your node as soon as a compatible release is available.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Client Upgrade Guides */}
      <section className="section-alt py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="mb-8 text-2xl font-bold tracking-tight">
              Per-Client Upgrade Steps
            </h2>
          </FadeIn>

          <div className="space-y-6">
            {clients.map((client, i) => (
              <FadeIn key={client.name} delay={i * 80}>
                <div className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-elevated)] p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
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
                      <h3 className="font-semibold">{client.name}</h3>
                      <span className="text-xs text-[var(--text-muted)]">
                        {client.role} · {client.language}
                      </span>
                    </div>
                    <span className="ml-auto rounded-full border border-[rgba(255,255,255,0.1)] px-3 py-1 font-mono text-xs text-[var(--text-muted)]">
                      Version: {client.version}
                    </span>
                  </div>

                  {/* Prerequisites */}
                  <div className="mb-4 grid grid-cols-3 gap-2">
                    <div className="rounded-lg bg-[var(--background)] px-3 py-2 text-center">
                      <p className="text-[10px] text-[var(--text-muted)]">Runtime</p>
                      <p className="text-sm font-semibold">{client.runtime}</p>
                    </div>
                    <div className="rounded-lg bg-[var(--background)] px-3 py-2 text-center">
                      <p className="text-[10px] text-[var(--text-muted)]">Disk</p>
                      <p className="text-sm font-semibold">{client.disk}</p>
                    </div>
                    <div className="rounded-lg bg-[var(--background)] px-3 py-2 text-center">
                      <p className="text-[10px] text-[var(--text-muted)]">RAM</p>
                      <p className="text-sm font-semibold">{client.ram}</p>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="space-y-2">
                    {client.steps.map((step, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-[var(--brand-green)]"
                        />
                        <p className="text-sm text-[var(--text-muted)]">{step}</p>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-4 flex gap-3">
                    <a
                      href={client.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[var(--brand-green)] transition hover:opacity-80"
                    >
                      Releases <ExternalLink size={12} />
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

      <SectionDivider />

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="mb-8 text-2xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-elevated)] p-5">
                  <h3 className="font-semibold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.answer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="mt-8 text-center">
              <a
                href="https://olympiadao.org/upgrade"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--brand-green)] transition hover:opacity-80"
              >
                Full upgrade details on olympiadao.org <ArrowRight size={14} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
