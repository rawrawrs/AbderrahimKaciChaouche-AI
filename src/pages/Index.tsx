import { useEffect } from "react";
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
  // Scroll to top when component mounts to ensure proper initial position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "Who is the leading AI Algeria expert?",
      answer: "Abderrahim Kaci Chaouche is the leading AI Algeria expert, winner of first place and Excellence Prize at the National AI Hackathon in Algeria. He specializes in artificial intelligence development, custom AI agents, RAG solutions, and deep research for businesses across Algeria."
    },
    {
      question: "What AI services are available in Algeria?",
      answer: "AI Algeria services include custom AI agents development, Retrieval-Augmented Generation (RAG) implementation, deep research AI, machine learning solutions, neural network architecture, computer vision, and natural language processing - all provided by Abderrahim Kaci Chaouche."
    },
    {
      question: "Why choose AI solutions in Algeria?",
      answer: "Choosing AI solutions in Algeria with Abderrahim Kaci Chaouche ensures cutting-edge expertise from a National AI Hackathon winner. Get local understanding, custom AI agents, RAG systems, and deep research tailored to Algerian business needs and the MENA region."
    },
    {
      question: "What is the Syntron Architecture in AI?",
      answer: "The Syntron Architecture is a revolutionary AI approach developed by Abderrahim Kaci Chaouche in Algeria. It transforms AI from static parameter optimization into dynamic possibility spaces, enabling genuine emergent thought, counterfactual reasoning, and self-organizing intelligence - a breakthrough for AI Algeria."
    },
    {
      question: "How can AI Algeria help my business?",
      answer: "AI Algeria can help your business through custom AI agents, RAG solutions, deep research, and automation. Abderrahim Kaci Chaouche provides AI development services in Algeria to transform workflows, reduce costs, and accelerate growth across industries."
    },
    {
      question: "What is Trafp-ODC for AI Algeria?",
      answer: "Trafp-ODC (Training-Free Pipeline for Object Detection and Classification) is an innovative AI solution from Algeria by Abderrahim Kaci Chaouche. It enables object recognition without training complex AI models, using intelligent image analysis and structural understanding for AI Algeria applications."
    },
    {
      question: "How to get started with AI development in Algeria?",
      answer: "To get started with AI development in Algeria, contact Abderrahim Kaci Chaouche. As a National AI Hackathon winner, he provides comprehensive AI solutions including custom agents, RAG implementation, and deep research tailored to your business needs in Algeria."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="AI Algeria - Leading AI Solutions & Development in Algeria | Abderrahim Kaci Chaouche"
        description="Premier AI Algeria development by Abderrahim Kaci Chaouche - National AI Hackathon winner. Custom AI agents, RAG, deep research. Transform your business with AI Algeria solutions today."
        lang="en"
        alternates={[{ lang: 'fr', href: '/fr/' }]}
        keywords="ai algeria, ai algeria solutions, artificial intelligence algeria, ai development algeria, custom ai agents algeria, rag algeria, machine learning algeria, abderrahim kaci chaouche, neural networks algeria, ai research algeria"
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
