import { Blocks, Coins, BookOpen, Gavel } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const buildItems = [
  {
    icon: Blocks,
    text: "Protocol governance infrastructure — proposal, voting, and execution systems",
  },
  {
    icon: Coins,
    text: "Treasury management and transparency tooling",
  },
  {
    icon: BookOpen,
    text: "Developer ecosystem and documentation",
  },
  {
    icon: Gavel,
    text: "Institutional compliance and regulatory interface",
  },
];

export function AboutSection() {
  return (
    <section className="hero-gradient-light pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
            About
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            About Ethereum Classic DAO
          </h1>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-[var(--text-secondary)]">
            <p>
              Ethereum Classic DAO LLC is the organizational entity behind
              Ethereum Classic&rsquo;s Olympia DAO — a governance system
              designed to fund and coordinate development of the Ethereum
              Classic protocol.
            </p>
            <p>
              As the largest Proof-of-Work blockchain with native smart
              contracts, Ethereum Classic occupies a unique position in the
              digital asset landscape. It combines the security guarantees of
              Proof-of-Work consensus with the programmability of the Ethereum
              Virtual Machine — a combination that no other blockchain offers at
              scale.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-16">
            <h2 className="text-xl font-bold">The Olympia Upgrade</h2>
            <div className="mt-4 border-l-2 border-[var(--brand-green)] pl-6 space-y-4 text-base leading-relaxed text-[var(--text-secondary)]">
              <p>
                The Olympia hard fork introduces protocol-level treasury
                funding, decentralized governance, and smart contract-based
                proposal execution to Ethereum Classic. It represents the most
                significant protocol upgrade in Ethereum Classic&rsquo;s
                history.
              </p>
              <p>
                Through Olympia, EIP-1559 transaction fees fund a
                protocol-managed treasury — block rewards remain untouched and
                go entirely to miners. Community members submit proposals, vote
                on resource allocation, and execute decisions — all on-chain,
                all transparent, all permissionless.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-16">
            <h2 className="text-xl font-bold">What We Build</h2>
            <div className="mt-6 space-y-4">
              {buildItems.map((item, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,255,174,0.08)]">
                      <item.icon
                        size={20}
                        className="text-[var(--brand-green)]"
                      />
                    </div>
                    <p className="text-base leading-relaxed text-[var(--text-secondary)] pt-2">
                      {item.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
