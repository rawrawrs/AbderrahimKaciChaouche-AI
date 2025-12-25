import Navigation from "@/components/Navigation";
import aaisFileProcessingImage from "@/assets/AAIScustomfileprocessingVIZ.png";
import { Link } from "react-router-dom";
import MegaFooter from "@/components/MegaFooter";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";

const FrenchFileProcessing = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Traitement de Fichiers par Abderrahim Kaci Chaouche - Développement IA Avancé"
        description="Développement de systèmes de traitement de données et de fichiers par Abderrahim Kaci Chaouche, chercheur et développeur en IA. Transformation des données brutes et des fichiers en résultats intelligents clairs."
        lang="fr"
        alternates={[{ lang: 'en', href: '/en/solutions/fileprocessing' }]}
        keywords="traitement de fichiers, traitement de données, développement IA, intelligence artificielle, apprentissage automatique, transformation de données, résultats intelligents, Abderrahim Kaci Chaouche"
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
            Traitement de Données et de Fichiers
          </h1>
          
          {/* Description */}
          <div
            className="max-w-6xl mx-auto mb-10 text-xl md:text-2xl px-4 sm:px-8 text-left"
            style={{ color: '#264653' }}
          >
            Transformer les données et les fichiers en intelligence exploitable. Je conçois des systèmes de traitement de fichiers sur mesure qui transforment vos données brutes et vos fichiers en résultats clairs et intelligents. Qu’il s’agisse de données structurées, de rapports ou de dossiers médicaux, mes solutions d’IA analysent, interprètent et produisent des résultats précis en fonction de vos objectifs spécifiques.
          </div>
          
          {/* CTA aligned to the right */}
          <div className="flex justify-end mb-4 px-4 sm:px-8">
            <div className="relative left-[-4rem]">
              <Link 
                to="/fr/contact"
                className="text-xl font-medium"
                style={{ color: '#2a9d8f' }}
              >
                Obtenir le Traitement de Fichiers
              </Link>
            </div>
          </div>
          
          {/* Image centered */}
          <div className="flex justify-center px-0 sm:px-8">
            <img
              src={aaisFileProcessingImage}
              alt="Visualisation du système de traitement de données et de fichiers montrant l'IA transformant les données brutes en intelligence exploitable"
              className="w-[100%] sm:max-w-4xl h-auto"
              loading="lazy"
            />
          </div>
          
          {/* New section below the image */}
          <div className="max-w-6xl mx-auto mt-12 px-2 sm:px-8">
            <h2 
              className="text-3xl md:text-4xl font-normal mb-4 text-left"
              style={{ color: '#264653' }}
            >
              Fait Confiance pour d'Innombrables Cas d'Utilisation
            </h2>
            
            <div 
              className="text-xl md:text-2xl text-left mb-6"
              style={{ color: '#264653' }}
            >
              Imaginez un médecin qui télécharge des biomarqueurs de patients pour prédire le risque de cancer, ou une entreprise qui télécharge des données de production pour prévoir la demande. Notre IA de traitement de fichiers le rend possible de manière sécurisée, efficace et entièrement personnalisée.
            </div>
            
            {/* CTA aligned to the right */}
            <div className="flex justify-end mb-20">
              <div className="relative left-[-4rem]">
                <Link 
                  to="/fr/contact"
                  className="text-xl font-medium"
                  style={{ color: '#2a9d8f' }}
                >
                  Démarrer Votre Traitement de Fichiers
                </Link>
              </div>
            </div>
            
            {/* Features list with lines and text */}
            <div className="space-y-8 mt-8">
              <div className="flex items-start">
                <div className="w-24 pt-3">
                  <div className="border-t-2 border-[#264653] w-full" style={{ height: '2px' }}></div>
                </div>
                <div className="flex-1 text-2xl md:text-3xl pl-16 text-left" style={{ color: '#264653' }}>
                  Posez des questions directement à partir de vos données et obtenez des réponses instantanées pilotées par l'IA.
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-24 pt-3">
                  <div className="border-t-2 border-[#264653] w-full" style={{ height: '2px' }}></div>
                </div>
                <div className="flex-1 text-2xl md:text-3xl pl-16 text-left" style={{ color: '#264653' }}>
                  Construisez des modèles prédictifs adaptés à votre domaine et à votre type de données.
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-24 pt-3">
                  <div className="border-t-2 border-[#264653] w-full" style={{ height: '2px' }}></div>
                </div>
                <div className="flex-1 text-2xl md:text-3xl pl-16 text-left" style={{ color: '#264653' }}>
                  Restructurez et organisez les fichiers en formats significatifs et exploitables.
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-24 pt-3">
                  <div className="border-t-2 border-[#264653] w-full" style={{ height: '2px' }}></div>
                </div>
                <div className="flex-1 text-2xl md:text-3xl pl-16 text-left" style={{ color: '#264653' }}>
                  Intégrez les pipelines de traitement avec vos outils et systèmes existants.
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-24 pt-3">
                  <div className="border-t-2 border-[#264653] w-full" style={{ height: '2px' }}></div>
                </div>
                <div className="flex-1 text-2xl md:text-3xl pl-16 text-left" style={{ color: '#264653' }}>
                  Gardez vos données privées et sécurisées grâce à un déploiement local ou contrôlé.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MegaFooter />
    </div>
  );
};

export default FrenchFileProcessing;