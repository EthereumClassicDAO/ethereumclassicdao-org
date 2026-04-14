import type { Metadata } from "next";
import { RegisteredAgentSection } from "@/components/contact/RegisteredAgentSection";
import { ChannelsSection } from "@/components/contact/ChannelsSection";

export const metadata: Metadata = {
  title: "Contact Ethereum Classic DAO LLC",
  description:
    "Wyoming registered agent address and official communication channels for Ethereum Classic DAO LLC — Filing ID 2025-001671865.",
};

export default function ContactPage() {
  return (
    <main>
      <RegisteredAgentSection />
      <ChannelsSection />
    </main>
  );
}
