import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const FrenchDeepResearchTest = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-2 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl font-normal mb-12"
            style={{ color: '#264653' }}
          >
            Test Page - Recherche Approfondie Sur mesure
          </h1>
          
          <p 
            className="max-w-6xl mx-auto mb-10 text-xl md:text-2xl px-4 sm:px-8 text-left"
            style={{ color: '#264653' }}
          >
            Ceci est une page de test pour vérifier si le problème vient du contenu ou de la structure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrenchDeepResearchTest;