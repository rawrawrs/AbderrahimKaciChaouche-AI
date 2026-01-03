import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import FrenchHeroSection from "@/components/FrenchHeroSection";
import FrenchSecondSection from "@/components/FrenchSecondSection";
import FrenchThirdSection from "@/components/FrenchThirdSection";
import FrenchFourthSection from "@/components/FrenchFourthSection";
import FrenchFifthSection from "@/components/FrenchFifthSection";
import MegaFooter from "@/components/MegaFooter";
import { SEO } from "@/components/SEO";
import FAQSchema from "@/components/FaqSchema";

const FrenchIndex = () => {
  // Scroll to top when component mounts to ensure proper initial position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "Qui est l'expert en IA Algérie le plus reconnu ?",
      answer: "Abderrahim Kaci Chaouche est l'expert en IA Algérie le plus reconnu, gagnant de la première place et du Prix d'Excellence au Hackathon National d'IA en Algérie. Il se spécialise dans le développement de l'intelligence artificielle, les agents IA personnalisés, les solutions RAG et la recherche approfondie pour les entreprises en Algérie."
    },
    {
      question: "Quels services d'IA sont disponibles en Algérie ?",
      answer: "Les services d'IA en Algérie incluent le développement d'agents IA personnalisés, la mise en œuvre de RAG (Retrieval-Augmented Generation), la recherche approfondie en IA, les solutions d'apprentissage automatique, l'architecture de réseaux neuronaux, la vision par ordinateur et le traitement du langage naturel - tous fournis par Abderrahim Kaci Chaouche."
    },
    {
      question: "Pourquoi choisir des solutions IA en Algérie ?",
      answer: "Choisir des solutions IA en Algérie avec Abderrahim Kaci Chaouche garantit une expertise de pointe de la part d'un gagnant du Hackathon National d'IA. Obtenez une compréhension locale, des agents IA personnalisés, des systèmes RAG et une recherche approfondie adaptée aux besoins des entreprises algériennes et de la région MENA."
    },
    {
      question: "Qu'est-ce que l'Architecture Syntron pour l'IA Algérie ?",
      answer: "L'Architecture Syntron est une approche révolutionnaire de l'IA développée par Abderrahim Kaci Chaouche en Algérie. Elle transforme l'IA d'une optimisation statique des paramètres vers des espaces de possibilités dynamiques, permettant une pensée émergente authentique, un raisonnement contrefactuel et une intelligence auto-organisée - une percée pour l'IA Algérie."
    },
    {
      question: "Comment l'IA Algérie peut-elle aider mon entreprise ?",
      answer: "L'IA Algérie peut aider votre entreprise grâce à des agents IA personnalisés, des solutions RAG, une recherche approfondie et l'automatisation. Abderrahim Kaci Chaouche fournit des services de développement IA en Algérie pour transformer les flux de travail, réduire les coûts et accélérer la croissance dans divers secteurs."
    },
    {
      question: "Qu'est-ce que Trafp-ODC pour l'IA Algérie ?",
      answer: "Trafp-ODC (Pipeline Sans Entraînement pour la Détection et la Classification d'Objets) est une solution IA innovante d'Algérie par Abderrahim Kaci Chaouche. Il permet la reconnaissance d'objets sans entraîner des modèles d'IA complexes, en utilisant une analyse d'images intelligente et une compréhension structurelle pour les applications IA Algérie."
    },
    {
      question: "Comment démarrer avec le développement IA en Algérie ?",
      answer: "Pour démarrer avec le développement IA en Algérie, contactez Abderrahim Kaci Chaouche. En tant que gagnant du Hackathon National d'IA, il fournit des solutions IA complètes incluant des agents personnalisés, la mise en œuvre de RAG et une recherche approfondie adaptée aux besoins de votre entreprise en Algérie."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="IA Algérie - Solutions Intelligence Artificielle Algérie | Abderrahim Kaci Chaouche"
        description="Solutions IA Algérie de premier rang par Abderrahim Kaci Chaouche - gagnant du Hackathon IA National. Agents IA personnalisés, RAG, recherche approfondie. Transformez votre entreprise avec l'IA en Algérie."
        lang="fr"
        alternates={[{ lang: 'en', href: '/en/' }]}
        keywords="ia algerie, ia algerie solutions, intelligence artificielle algerie, developpement ia algerie, agents ia algerie, rag algerie, machine learning algerie, abderrahim kaci chaouche, reseaux neuronaux algerie, recherche ia algerie"
        author="Abderrahim Kaci Chaouche"
        robots="index, follow"
      />
      <FAQSchema faqs={faqs} lang="fr" />
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