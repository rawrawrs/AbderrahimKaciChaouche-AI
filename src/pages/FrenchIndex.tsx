import Navigation from "@/components/Navigation";
import FrenchHeroSection from "@/components/FrenchHeroSection";
import FrenchSecondSection from "@/components/FrenchSecondSection";
import FrenchThirdSection from "@/components/FrenchThirdSection";
import FrenchFourthSection from "@/components/FrenchFourthSection";
import FrenchFifthSection from "@/components/FrenchFifthSection";
import MegaFooter from "@/components/MegaFooter";

const FrenchIndex = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <FrenchHeroSection />
        <FrenchSecondSection />
        <FrenchThirdSection />
        <FrenchFourthSection />
        <FrenchFifthSection />
      </main>
      <MegaFooter />
    </div>
  );
};

export default FrenchIndex;