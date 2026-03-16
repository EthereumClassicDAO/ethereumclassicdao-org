import type { Metadata } from "next";
import { RegisteredAgentSection } from "@/components/contact/RegisteredAgentSection";
import { ChannelsSection } from "@/components/contact/ChannelsSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Registered agent information and official communication channels for the Ethereum Classic DAO LLC.",
};

export default function ContactPage() {
  return (
    <main>
      <RegisteredAgentSection />
      <ChannelsSection />
    </main>
  );
}
