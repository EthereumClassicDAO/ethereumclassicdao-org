import type { Metadata } from "next";
import { RegisteredAgentSection } from "@/components/contact/RegisteredAgentSection";
import { NetworkContactsSection } from "@/components/contact/NetworkContactsSection";
import { ChannelsSection } from "@/components/contact/ChannelsSection";

export const metadata: Metadata = {
  title: "Contact Ethereum Classic DAO LLC",
  description:
    "Official communication channels for Ethereum Classic DAO LLC (Filing ID 2025-001671865), the security and operator contact for Ethereum Classic's core developers and maintainers, and the sponsorship contact for the network's client and infrastructure.",
};

export default function ContactPage() {
  return (
    <main>
      <RegisteredAgentSection />
      <NetworkContactsSection />
      <ChannelsSection />
    </main>
  );
}
