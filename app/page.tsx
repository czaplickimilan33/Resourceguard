import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import SafetyModesSection from "@/components/sections/SafetyModesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CrisisModeDemo from "@/components/sections/CrisisModeDemo";
import DashboardSection from "@/components/sections/DashboardSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SegmentsSection from "@/components/sections/SegmentsSection";
import MissionSection from "@/components/sections/MissionSection";
import HelplinesSection from "@/components/sections/HelplinesSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <SafetyModesSection />
      <FeaturesSection />
      <CrisisModeDemo />
      <DashboardSection />
      <ProcessSection />
      <SegmentsSection />
      <MissionSection />
      <HelplinesSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
