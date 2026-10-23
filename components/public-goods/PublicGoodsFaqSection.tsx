import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Accordion } from "@/components/ui/Accordion";
import { SECURITY_EMAIL } from "@/lib/network-links";

// Plain strings: the page's FAQPage structured data is built from this array.
export const publicGoodsFaq: { question: string; answer: string }[] = [
  {
    question: "What are Ethereum Classic's public goods?",
    answer:
      "The shared software and services the network depends on: the Core-Geth client, the network's bootnodes, the peer discovery lists, public JSON-RPC endpoints, and a network dashboard. They are maintained in the ethereumclassic organization on GitHub.",
  },
  {
    question: "Which Ethereum Classic client should I run?",
    answer:
      "Core-Geth is the recommended client: run its v1.13 line, which closes all six client CVEs the audits found in the v1.12 client code. Take the current release from github.com/ethereumclassic/core-geth/releases/latest, which always resolves to it. Fukuii, a native Ethereum Classic client, is listed as an alternative on the clients page.",
  },
  {
    question: "Where are Core-Geth releases published?",
    answer:
      "In ethereumclassic/core-geth, the community's repository. Releases from the v1.13 series onward are published only there, so a node tracking the previous repository, etclabscore/core-geth, does not see them.",
  },
  {
    question: "How does a new Ethereum Classic node find its first peers?",
    answer:
      "Through the bootnodes built into the client and through signed DNS discovery lists, which are rebuilt every night from a crawl of the network and published under ethereumclassic.net, ethclassic.net and ethereumclassic.network. Every published list is committed to a public repository.",
  },
  {
    question: "Which public RPC endpoint should I use for Ethereum Classic?",
    answer:
      "ChainList lists the public endpoints Ethereum Classic operators publish, for chain 61 and for Mordor, chain 63. A public endpoint is another operator's node: it can rate limit, fall behind or stop, so anything you depend on should run against a node you control.",
  },
  {
    question: "Who do exchanges, mining pools and service providers contact?",
    answer: `${SECURITY_EMAIL}. A person answers it: one of the core developers who maintain this work. The same address takes private vulnerability reports and subscriptions to release and security announcements.`,
  },
  {
    question: "Who maintains and pays for these services?",
    answer:
      "Ethereum Classic's core developers and community contributors do the day-to-day work. Ethereum Classic DAO LLC is the standing legal entity that maintains and funds them today as the funder of last resort. The stewardship page covers the arrangement and how to sponsor it.",
  },
];

export function PublicGoodsFaqSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="public-goods-faq-heading" className="section-gradient py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="public-goods-faq-heading" className="text-3xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="mt-8">
              <Accordion items={publicGoodsFaq} defaultAllOpen />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
