import Navigation from "@/components/Navigation";
import deepResearchImage from "@/assets/AAIScutomdeepresearchVIZ.png";
import MegaFooter from "@/components/MegaFooter";
import { useEffect } from "react";

const FrenchDeepResearch = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
        <div className="container mx-auto px-2 sm:px-6 py-16">
          {/* Title and content container */}
          <div className="text-center mb-12">
            <h1 
              className="text-4xl md:text-5xl font-normal mb-12"
              style={{ color: '#264653' }}
            >
              Recherche Approfondie Sur mesure
            </h1>
            
            {/* Description */}
            <div
              className="max-w-6xl mx-auto mb-10 text-xl md:text-2xl px-4 sm:px-8 text-left"
              style={{ color: '#264653' }}
            >
              Je développe des systèmes de recherche approfondie sur mesure qui vont bien au-delà de la recherche ou de l'analyse traditionnelle. Ces solutions combinent raisonnement intelligent, compréhension contextuelle et apprentissage adaptatif pour explorer des données complexes, découvrir des modèles et fournir des informations précieuses adaptées aux objectifs uniques de votre organisation.
            </div>
            
            {/* CTA aligned to the right */}
            <div className="flex justify-end mb-4 px-4 sm:px-8">
              <a 
                href="/fr/contact"
                className="text-xl font-medium"
                style={{ color: '#2a9d8f' }}
              >
                Obtenir une recherche approfondie sur mesure
              </a>
            </div>
            
            {/* Image centered */}
            <div className="flex justify-center px-0 sm:px-8">
              <img 
                src={deepResearchImage} 
                alt="Visualisation de la recherche approfondie sur mesure AAIS" 
                className="w-[100%] sm:max-w-4xl h-auto"
              />
            </div>
          </div>
          
          {/* New section below image */}
          <div className="max-w-6xl mx-auto mt-12 px-2 sm:px-8">
            <div className="flex flex-col md:flex-row gap-8 sm:gap-12">
              {/* Left section - text and CTA */}
              <div className="md:w-1/2">
                <h2 
                  className="text-3xl md:text-4xl font-normal mb-4 text-left"
                  style={{ color: '#264653' }}
                >
                  Faire des Choix Stratégiques avec l'Intelligence Artificielle
                </h2>
                <div className="mt-6 text-left">
                  <a 
                    href="/fr/contact"
                    className="text-xl font-medium inline-block"
                    style={{ color: '#2a9d8f' }}
                  >
                    Construisez Votre Système de Recherche Approfondie
                  </a>
                </div>
              </div>
              
              {/* Right section - description */}
              <div
                className="md:w-1/2 text-xl md:text-2xl text-left"
                style={{ color: '#264653' }}
              >
                Plutôt que des résumés génériques, mes modèles de recherche approfondie personnalisés analysent, relient et interprètent les informations provenant de diverses sources, transformant les données brutes en intelligence structurée qui soutient la prise de décisions réelles. Qu’il s’agisse d’analyse de marché, de recherche médicale ou de planification stratégique, chaque système est conçu sur mesure pour votre domaine, garantissant précision, profondeur et pertinence.
              </div>
            </div>
          </div>
        </div>
      <MegaFooter />
    </div>
  );
};

export default FrenchDeepResearch;