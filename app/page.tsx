import { HeroSection } from "@/components/home/HeroSection";
import { RegistrationSection } from "@/components/home/RegistrationSection";
import { RoleSection } from "@/components/home/RoleSection";
import { RelationshipSection } from "@/components/home/RelationshipSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RegistrationSection />
      <RoleSection />
      <RelationshipSection />
    </main>
  );
}
