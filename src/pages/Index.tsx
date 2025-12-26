import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import FifthSection from "@/components/FifthSection";
import MegaFooter from "@/components/MegaFooter";
import { SEO } from "@/components/SEO";
import FAQSchema from "@/components/FaqSchema";

const Index = () => {
  const faqs = [
    {
      question: "Who is Abderrahim Kaci Chaouche?",
      answer: "Abderrahim Kaci Chaouche is an AI researcher and developer. He is the winner of first place and the Excellence Prize at the National AI Hackathon in Algeria, dedicated to advancing artificial intelligence through innovative research and development."
    },
    {
      question: "What research has Abderrahim Kaci Chaouche developed?",
      answer: "Abderrahim has developed groundbreaking research including the Syntron Architecture - a revolutionary departure from traditional weight-based neural architectures, and the Trafp-ODC object detection pipeline that works without training complex AI models."
    },
    {
      question: "What is the Syntron Architecture?",
      answer: "The Syntron Architecture is a revolutionary approach to neural networks that transforms AI from static parameter optimization into dynamic possibility spaces, enabling genuine emergent thought, counterfactual reasoning, and self-organizing intelligence."
    },
    {
      question: "What is Trafp-ODC?",
      answer: "Trafp-ODC (Training-Free Pipeline for Object Detection and Classification) is an innovative approach that makes it possible to recognize objects without the need for training complex AI models, using intelligent image analysis and structural understanding."
    },
    {
      question: "How can I learn more about Abderrahim's research?",
      answer: "You can explore detailed research papers and implementations on the research page, where Abderrahim shares his innovative work on neural architectures, object detection, and advanced AI systems."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="AI Solutions Algeria - Abderrahim Kaci Chaouche | AI Research & Development"
        description="Pioneering AI solutions in Algeria. Abderrahim Kaci Chaouche provides cutting-edge AI development, including custom Agents, RAG, and deep research for business transformation."
        lang="en"
        alternates={[{ lang: 'fr', href: '/fr/' }]}
        keywords="ai solutions algeria, ai algeria, artificial intelligence algeria, custom ai agents, business automation algeria, Abderrahim Kaci Chaouche, AI development, Syntron Architecture, Trafp-ODC, deep learning"
        author="Abderrahim Kaci Chaouche"
        robots="index, follow"
      />
      <FAQSchema faqs={faqs} lang="en" />
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </main>
      <MegaFooter />
    </div>
  );
};

export default Index;
