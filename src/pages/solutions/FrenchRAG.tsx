import Navigation from "@/components/Navigation";
import ragImage from "@/assets/AAISragVIZ.png";
import { Link } from "react-router-dom";
import MegaFooter from "@/components/MegaFooter";
import { useEffect } from "react";

const FrenchRAG = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-2 sm:px-6 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl font-normal mb-12"
            style={{ color: '#264653' }}
          >
            Génération Augmentée par Récupération
          </h1>
          
          {/* Description */}
          <div
            className="max-w-6xl mx-auto mb-10 text-xl md:text-2xl px-4 sm:px-8 text-left"
            style={{ color: '#264653' }}
          >
            Je développe RAG pour les entreprises, une architecture d'IA avancée qui combine la précision de la recherche d'informations avec la puissance de raisonnement des grands modèles de langage. Cette approche permet aux organisations de générer des analyses précises et en temps réel, basées sur leurs propres données, et pas seulement sur ce sur quoi le modèle a été entraîné.
          </div>
          
          {/* CTA aligned to the right */}
          <div className="flex justify-end mb-4 px-4 sm:px-8">
            <Link 
              to="/fr/contact"
              className="text-xl font-medium"
              style={{ color: '#2a9d8f' }}
            >
              Démarrer avec RAG
            </Link>
          </div>
          
          {/* Image centered */}
          <div className="flex justify-center px-0 sm:px-8">
            <img 
              src={ragImage} 
              alt="Visualisation RAG AAIS" 
              className="w-[100%] sm:max-w-4xl h-auto"
            />
          </div>
          
          {/* Description below the image */}
          <div 
            className="max-w-6xl mx-auto mt-12 mb-16 text-xl md:text-2xl px-2 sm:px-8 text-left"
            style={{ color: '#264653' }}
          >
            Les systèmes RAG recherchent, comprennent et raisonnent à travers les données de votre entreprise, allant des rapports et bases de données aux archives de projets et bases de connaissances. Il transforme la connaissance organisationnelle en une couche intelligente et interrogeable qui travaille pour vous 24h/24 et 7j/7.
          </div>
          
          {/* Title below the description */}
          <div className="max-w-6xl mx-auto mb-16 px-8">
            <h2 
              className="text-4xl font-normal text-left"
              style={{ color: '#264653' }}
            >
              Avec Enterprise RAG, votre entreprise gagne :
            </h2>
          </div>
          
          {/* Three rectangles in a row */}
          <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Left rectangle */}
            <div 
              className="border p-6 sm:p-10 h-full"
              style={{ borderColor: '#264653' }}
            >
              <h3 
                className="text-2xl sm:text-3xl font-normal mb-3 sm:mb-4 text-left"
                style={{ color: '#264653' }}
              >
                Exact et explicables :
              </h3>
              <p 
                className="text-lg sm:text-xl text-left"
                style={{ color: '#264653' }}
              >
                Les réponses sont ancrées dans vos données vérifiées.
              </p>
            </div>
            
            {/* Middle rectangle */}
            <div 
              className="border p-6 sm:p-10 h-full"
              style={{ borderColor: '#264653' }}
            >
              <h3 
                className="text-2xl sm:text-3xl font-normal mb-3 sm:mb-4 text-left"
                style={{ color: '#264653' }}
              >
                Sécurisé et conforme :
              </h3>
              <p 
                className="text-lg sm:text-xl text-left"
                style={{ color: '#264653' }}
              >
                Toutes les opérations restent dans votre environnement privé ou dans le cloud sécurisé.
              </p>
            </div>
            
            {/* Right rectangle */}
            <div 
              className="border p-6 sm:p-10 h-full"
              style={{ borderColor: '#264653' }}
            >
              <h3 
                className="text-2xl sm:text-3xl font-normal mb-3 sm:mb-4 text-left"
                style={{ color: '#264653' }}
              >
                Actionnable et intelligent :
              </h3>
              <p 
                className="text-lg sm:text-xl text-left"
                style={{ color: '#264653' }}
              >
                Il permet aux équipes de prendre des décisions plus rapides et fondées sur des preuves.
              </p>
            </div>
          </div>
          

        </div>
      </div>
      <MegaFooter />
    </div>
  );
};

export default FrenchRAG;