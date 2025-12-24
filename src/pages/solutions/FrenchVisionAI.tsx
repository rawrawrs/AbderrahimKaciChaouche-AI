import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import MegaFooter from "@/components/MegaFooter";
import { useEffect, useState } from "react";
import visionImage1 from "@/assets/VisionDemoChangingImages/AAISvisionVIZ1.png";
import visionImage2 from "@/assets/VisionDemoChangingImages/AAISvisionVIZ2.webp";
import visionImage3 from "@/assets/VisionDemoChangingImages/AAIScarVIZ4.png";
import visionImage4 from "@/assets/VisionDemoChangingImages/AAISfactoryVIZ3.webp";
import visionImage5 from "@/assets/VisionDemoChangingImages/AAISppedetectionVIZ6.webp";
import visionImage6 from "@/assets/VisionDemoChangingImages/AAISsecurityVIZ5.avif";

const FrenchVisionAI = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    visionImage1,
    visionImage2,
    visionImage3,
    visionImage4,
    visionImage5,
    visionImage6,
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Auto rotate images every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
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
            Solutions de Vision par IA
          </h1>

          {/* Description */}
          <div
            className="max-w-6xl mx-auto mb-10 text-xl md:text-2xl px-4 sm:px-8 text-left"
            style={{ color: '#264653' }}
          >
            Je développe et déploie des solutions avancées de Vision par IA qui permettent aux machines de voir, comprendre et agir sur les données visuelles. Mes systèmes transforment les images et les flux vidéo en informations exploitables en temps réel. De la détection d'objets et la reconnaissance faciale à l'imagerie médicale, l'inspection industrielle ou la surveillance, mes solutions de Vision par IA sont développées sur mesure pour répondre à vos besoins opérationnels, votre infrastructure et les exigences de votre secteur.
          </div>

          {/* CTA aligned to the right */}
          <div className="flex justify-end mb-12 px-4 sm:px-8">
            <Link
              to="/fr/contact"
              className="text-xl font-medium"
              style={{ color: '#2a9d8f' }}
            >
              Construisez Votre Système de Vision par IA
            </Link>
          </div>

          {/* Image carousel centered */}
          <div className="flex justify-center px-0 sm:px-8 mb-16">
            <div className="relative w-full max-w-4xl overflow-hidden rounded-lg">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`AAIS Vision par IA Solution ${index + 1}`}
                  className={`w-full h-auto transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                />
              ))}

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-gray-500'
                    }`}
                    aria-label={`Aller à la diapositive ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Description below the image */}
          <div
            className="max-w-6xl mx-auto mt-12 mb-10 text-xl md:text-2xl px-2 sm:px-8 text-left"
            style={{ color: '#264653' }}
          >
            Mes solutions de Vision par IA exploitent des algorithmes de vision par ordinateur de pointe pour interpréter et comprendre les données visuelles en temps réel. Que ce soit pour le contrôle qualité en fabrication, la surveillance de sécurité, la navigation de véhicules autonomes ou l'amélioration du diagnostic médical, mes systèmes fournissent des informations visuelles précises et fiables, adaptées à votre cas d'usage spécifique.
          </div>

          {/* Case Study Section */}
          <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-16">
            <h2
              className="text-4xl md:text-5xl font-normal mb-6 text-left"
              style={{ color: '#264653' }}
            >
              Étude de cas
            </h2>

            <h3
              className="text-2xl md:text-3xl font-normal mb-2 text-left"
              style={{ color: '#264653' }}
            >
              Premier fabricant de fenêtres et de portes
            </h3>

            <p
              className="text-xl md:text-2xl mb-12 text-left"
              style={{ color: '#2a9d8f' }}
            >
              Les inspections par Vision IA ont entraîné 40 % de retours clients en moins
            </p>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Left part */}
              <div className="md:w-1/2">
                <p
                  className="text-lg md:text-xl text-left mb-6"
                  style={{ color: '#264653' }}
                >
                  <span className="font-semibold">Problème</span> Des défauts de produits quittaient l'usine sans être détectés, entraînant des coûts accrus et une satisfaction client réduite.
                </p>

                <p
                  className="text-lg md:text-xl text-left mb-6"
                  style={{ color: '#264653' }}
                >
                  <span className="font-semibold">Solution</span> Déploiement d’un système d’inspection Vision par IA optimisé pour l’edge dans 18 sites de production. Le système surveille en continu les spécifications des produits, la cohérence des couleurs et la précision dimensionnelle en temps réel, détectant même les écarts les plus minimes.
                </p>

                <p
                  className="text-lg md:text-xl text-left mb-8"
                  style={{ color: '#264653' }}
                >
                  <span className="font-semibold">Impact</span> En permettant des alertes instantanées et un suivi historique des défauts, les équipes de production ont considérablement réduit les problèmes de qualité, ce qui a entraîné une diminution de 40 % des demandes de retour des clients.
                </p>

                <div className="flex justify-start">
                  <Link
                    to="/fr/contact"
                    className="text-xl font-medium"
                    style={{ color: '#2a9d8f' }}
                  >
                    Demander une Vision IA
                  </Link>
                </div>
              </div>

              {/* Right part */}
              <div className="md:w-1/2 border-l border-[#264653] pl-8">
                <div className="mb-6 pb-6 border-b border-[#264653]">
                  <p
                    className="text-3xl font-bold text-right"
                    style={{ color: '#264653' }}
                  >
                    8 millions $
                  </p>
                  <p
                    className="text-lg text-right mt-2"
                    style={{ color: '#264653' }}
                  >
                    Pertes réduites grâce à la détection automatisée des défauts
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-[#264653]">
                  <p
                    className="text-3xl font-bold text-right"
                    style={{ color: '#264653' }}
                  >
                    90%
                  </p>
                  <p
                    className="text-lg text-right mt-2"
                    style={{ color: '#264653' }}
                  >
                    Temps de suivi manuel des stocks réduit
                  </p>
                </div>

                <div className="pb-0">
                  <p
                    className="text-3xl font-bold text-right"
                    style={{ color: '#264653' }}
                  >
                    60%
                  </p>
                  <p
                    className="text-lg text-right mt-2"
                    style={{ color: '#264653' }}
                  >
                    Taux de retour de produits réduit
                  </p>
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

export default FrenchVisionAI;