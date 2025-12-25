import Navigation from "@/components/Navigation";
import aaisAIAgentsImage from "@/assets/AAISaiagentsVIZ.png";
import aaisAgentCustomImage from "@/assets/AAISagentcustomVIZ.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MegaFooter from "@/components/MegaFooter";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";

const FrenchAIAgents = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Agents IA par Abderrahim Kaci Chaouche - Développement IA Avancé"
        description="Développement d'agents IA par Abderrahim Kaci Chaouche, chercheur et développeur en IA. Agents IA sur mesure pour des besoins spécifiques, développés avec précision, fiabilité et intention."
        lang="fr"
        alternates={[{ lang: 'en', href: '/en/solutions/aiagents' }]}
        keywords="développement IA, intelligence artificielle, apprentissage automatique, IA Algérie, agents IA sur mesure, chercheur IA, développement IA, Abderrahim Kaci Chaouche, automatisation intelligente"
        author="Abderrahim Kaci Chaouche"
        robots="index, follow"
      />
      <Navigation />
      <div className="container mx-auto px-2 sm:px-6 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl font-normal mb-12"
            style={{ color: '#264653' }}
          >
            Agents IA
          </h1>
          
          {/* Description */}
          <div
            className="max-w-6xl mx-auto mb-10 text-xl md:text-2xl px-4 sm:px-8 text-left"
            style={{ color: '#264653' }}
          >
            Je développe des agents d'IA sur mesure, conçus spécifiquement pour les besoins de votre entreprise. Que vous ayez besoin d’un assistant intelligent pour automatiser les flux de travail, analyser des données, interagir avec vos clients ou soutenir la prise de décision, mes agents s’adaptent entièrement à vos objectifs, systèmes et secteur d’activité.
          </div>
          
          {/* CTA aligned to the right */}
          <div className="flex justify-end mb-4 px-4 sm:px-8">
            <div className="relative left-[-4rem]">
              <Link 
                to="/fr/contact"
                className="text-xl font-medium"
                style={{ color: '#2a9d8f' }}
              >
                Obtenir un agent IA
              </Link>
            </div>
          </div>
          
          {/* Image centered */}
          <div className="flex justify-center px-0 sm:px-8">
            <img
              src={aaisAIAgentsImage}
              alt="Visualisation des agents IA personnalisés montrant l'automatisation intelligente pour les processus métier"
              className="w-[100%] sm:max-w-4xl h-auto"
              loading="lazy"
            />
          </div>
          
          {/* Additional description below the image */}
          <div
            className="max-w-6xl mx-auto mt-12 text-xl md:text-2xl px-2 sm:px-8 text-left"
            style={{ color: '#264653' }}
          >
            Chaque agent d'IA que je développe est conçu pour comprendre votre environnement, apprendre de vos données et produire des résultats mesurables. De la santé et la logistique à la finance et aux services publics, je m'assure que chaque organisation bénéficie d'agents intelligents développés avec précision, fiabilité et intention.
          </div>
          
          {/* Title below the description */}
          <div className="max-w-6xl mx-auto mt-16 px-2 sm:px-8">
            <h2 
              className="text-4xl font-normal text-left"
              style={{ color: '#264653' }}
            >
              Intelligence sur mesure pour tous les besoins
            </h2>
          </div>
          
          {/* Flex container for description and image */}
          <div className="max-w-6xl mx-auto mt-12 px-2 sm:px-8 flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
            {/* Description */}
            <div 
              className="md:w-1/2 text-xl md:text-2xl text-left"
              style={{ color: '#264653' }}
            >
              Chaque entreprise a sa propre logique, son rythme et sa façon de travailler. C’est pourquoi mes agents d’IA ne sont jamais préfabriqués : ils sont conçus sur mesure pour correspondre exactement à vos processus. Que vous ayez besoin d’automatiser des flux de travail, d’analyser vos opérations ou de connecter vos outils existants, chaque agent est modelé autour de vos objectifs, de vos données et de votre environnement.
              <br/>
              Avec Abderrahim, la personnalisation n’est pas une option, c’est la base.
            </div>
            
            {/* Image */}
            <div className="md:w-1/2 flex justify-start pl-4 md:pl-8">
              <img
                src={aaisAgentCustomImage}
                alt="Agent IA personnalisé adapté aux besoins et processus spécifiques de l'entreprise"
                className="max-w-[90%] md:max-w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* CTA below the description and image, aligned with description text */}
          <div className="max-w-6xl mx-auto mt-12 px-2 sm:px-8">
            <div className="md:w-1/2 text-left">
              <Link 
                to="/fr/contact"
                className="text-xl font-medium inline-block"
                style={{ color: '#2a9d8f' }}
              >
                Construisez votre agent IA personnalisé
              </Link>
            </div>
          </div>
          

        </div>
      </div>
      <MegaFooter />
    </div>
  );
};

export default FrenchAIAgents;