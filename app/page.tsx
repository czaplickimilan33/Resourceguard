import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CrisisModeDemo from "@/components/sections/CrisisModeDemo";
import DashboardSection from "@/components/sections/DashboardSection";
import ProcessSection from "@/components/sections/ProcessSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import MissionSection from "@/components/sections/MissionSection";
import HelplinesSection from "@/components/sections/HelplinesSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <CrisisModeDemo />
        <DashboardSection />
        <ProcessSection />
        <UseCasesSection />
        <TestimonialsSection />
        <MissionSection />
        <HelplinesSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
