import type { Metadata } from "next";
import { RegisteredAgentSection } from "@/components/contact/RegisteredAgentSection";
import { NetworkContactsSection } from "@/components/contact/NetworkContactsSection";
import { ChannelsSection } from "@/components/contact/ChannelsSection";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Contact Ethereum Classic DAO LLC",
  description:
    "Contact Ethereum Classic DAO LLC: its official channels, the security and operator address for ETC's core developers, and the sponsorship address.",
};

export default function ContactPage() {
  return (
    <main>
      <RegisteredAgentSection />
      <NetworkContactsSection />
      <ChannelsSection />
      <BreadcrumbJsonLd name="Contact" path="/contact" />
    </main>
  );
}
