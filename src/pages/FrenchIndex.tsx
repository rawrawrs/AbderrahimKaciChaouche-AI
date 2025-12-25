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
  const faqs = [
    {
      question: "Qui est Abderrahim Kaci Chaouche ?",
      answer: "Abderrahim Kaci Chaouche est un chercheur et développeur en IA. Il est le gagnant de la première place et du Prix d'Excellence au Hackathon National d'IA en Algérie, dédié à l'avancement de l'intelligence artificielle par la recherche et le développement innovants."
    },
    {
      question: "Quelles recherches Abderrahim Kaci Chaouche a-t-il développées ?",
      answer: "Abderrahim a développé des recherches révolutionnaires notamment l'Architecture Syntron - une rupture radicale avec les architectures neuronales traditionnelles basées sur les poids, et le pipeline de détection d'objets Trafp-ODC qui fonctionne sans entraîner des modèles d'IA complexes."
    },
    {
      question: "Qu'est-ce que l'Architecture Syntron ?",
      answer: "L'Architecture Syntron est une approche révolutionnaire des réseaux neuronaux qui transforme l'IA d'une optimisation statique des paramètres vers des espaces de possibilités dynamiques, permettant une pensée émergente authentique, un raisonnement contrefactuel et une intelligence auto-organisée."
    },
    {
      question: "Qu'est-ce que Trafp-ODC ?",
      answer: "Trafp-ODC (Pipeline Sans Entraînement pour la Détection et la Classification d'Objets) est une approche innovante qui permet de reconnaître des objets sans avoir besoin d'entraîner des modèles d'IA complexes, en utilisant l'analyse d'images intelligente et la compréhension structurelle."
    },
    {
      question: "Comment puis-je en apprendre davantage sur les recherches d'Abderrahim ?",
      answer: "Vous pouvez explorer les documents de recherche détaillés et les implémentations sur la page de recherche, où Abderrahim partage son travail innovant sur les architectures neuronales, la détection d'objets et les systèmes d'IA avancés."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Accueil - Recherche & Développement IA par Abderrahim Kaci Chaouche"
        description="Site personnel d'Abderrahim Kaci Chaouche, chercheur et développeur en IA. Lauréat de la première place et du Prix d'Excellence au Hackathon National d'IA en Algérie. Recherche sur les systèmes d'IA avancés incluant l'Architecture Syntron et Trafp-ODC."
        lang="fr"
        alternates={[{ lang: 'en', href: '/en/' }]}
        keywords="recherche IA, intelligence artificielle, apprentissage automatique, IA Algérie, Abderrahim Kaci Chaouche, développement IA, Architecture Syntron, Trafp-ODC, réseaux neuronaux, apprentissage profond"
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