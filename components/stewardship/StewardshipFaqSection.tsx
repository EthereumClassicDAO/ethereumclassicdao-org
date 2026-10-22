import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Accordion } from "@/components/ui/Accordion";
import { COOPERATIVE_STATUS, SPONSOR_EMAIL } from "@/lib/network-links";

// Plain strings: the page's FAQPage structured data is built from this array.
export const stewardshipFaq: { question: string; answer: string }[] = [
  {
    question: "Who maintains Core-Geth?",
    answer:
      "Ethereum Classic's core developers and open community contributions do the day-to-day work, in the ethereumclassic organization on GitHub. Ethereum Classic DAO LLC is the standing legal entity that maintains and funds that work as the funder of last resort, and it took up Core-Geth's maintenance in February 2026.",
  },
  {
    question: "What is Ethereum Classic DAO LLC's role?",
    answer:
      "It is the standing legal entity that maintains and funds Ethereum Classic's public goods: the Core-Geth client, the network's bootnodes and the peer discovery lists. Funding has to be received and reported in a tax jurisdiction, and a sponsoring organization has to contract with someone, neither of which is possible when the software belongs to no one in particular; the DAO carries those obligations. It does so today as the funder of last resort, with the day-to-day work done by the core developers and the community. It does not control or lead Ethereum Classic, and it is not the only organization that can fund this work.",
  },
  {
    question: "What happened to the ETC Cooperative?",
    answer: `The ETC Cooperative, a US 501(c)(3) non-profit, funded Ethereum Classic's client and infrastructure from 2017 and stopped developing Core-Geth in 2025. Its 2024 retrospective states that it would stay in maintenance mode until its funding ran out. The services it maintained continue in the ethereumclassic organization. Its status: ${COOPERATIVE_STATUS}.`,
  },
  {
    question: "Why does this work need sponsors?",
    answer:
      "Ethereum Classic has no protocol-layer funding mechanism for its critical infrastructure or its core developers, so no part of the network's fee or issuance revenue pays for it. The DAO pays for it today. Steady funding from the stakeholders who depend on the client is what keeps the work from resting on a single backer.",
  },
  {
    question: "How do I sponsor Ethereum Classic's core development?",
    answer: `Write to ${SPONSOR_EMAIL}, which reaches the Ethereum Classic core developers and maintainers. Organizations can sponsor through an invoiced maintenance agreement, and a direct transfer is possible to an address provided on request. coregeth.com/sponsor sets out who maintains the client and how sponsorship works, and the documentation's support page at docs.coregeth.com/support publishes the routes and credits sponsors. No donation address is published anywhere.`,
  },
  {
    question: "Does a sponsor get influence over the client?",
    answer:
      "No. Sponsorship buys no influence over consensus rules, release content, or what an audit reports. Chain configuration follows the ECIP process, and a sponsor gets the same client as everyone else, on the same schedule. Being credited records a contribution; it is not an endorsement of the sponsor's products or services.",
  },
  {
    question: "How would Olympia change the funding?",
    answer:
      "Olympia is a proposal, and its specifications are drafts. As proposed, it would credit the basefee of every transaction to a protocol treasury, and on-chain governance would allocate that treasury to core client development, critical infrastructure and network security, giving this work a funding source in the protocol. Until a funding source like that is in place, the work depends on sponsors and on the DAO as the funder of last resort.",
  },
];

export function StewardshipFaqSection() {
  return (
    <>
      <SectionDivider />
      <section aria-labelledby="stewardship-faq-heading" className="section-gradient py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 id="stewardship-faq-heading" className="text-3xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="mt-8">
              <Accordion items={stewardshipFaq} defaultAllOpen />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
