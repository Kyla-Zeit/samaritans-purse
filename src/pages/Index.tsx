import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ProgramsSection from "@/components/ProgramsSection";
import AdditionalProgramsSection from "@/components/AdditionalProgramsSection";
import CurrentResponsesSection from "@/components/CurrentResponsesSection";
import ImpactSection from "@/components/ImpactSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import WaysToGiveSection from "@/components/WaysToGiveSection";
import AccountabilitySection from "@/components/AccountabilitySection";
import DonateSection from "@/components/DonateSection";
import StayInTheKnowSection from "@/components/StayInTheKnowSection";
import ScriptureCtaSection from "@/components/ScriptureCtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <ProgramsSection />
      <AdditionalProgramsSection />
      <CurrentResponsesSection />
      <ImpactSection />
      <GetInvolvedSection />
      <WaysToGiveSection />
      <DonateSection />
      <AccountabilitySection />
      <StayInTheKnowSection />
      <ScriptureCtaSection />
      <Footer />
    </div>
  );
};

export default Index;
