import { MissionSection } from "@/components/home/MissionSection";
import { NetworkStatsSection } from "@/components/home/NetworkStatsSection";
import { PositioningSection } from "@/components/home/PositioningSection";
import { GovernanceProcessSection } from "@/components/home/GovernanceProcessSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";

export default function Home() {
  return (
    <main>
      <MissionSection />
      <NetworkStatsSection />
      <PositioningSection />
      <GovernanceProcessSection />
      <EcosystemSection />
    </main>
  );
}
