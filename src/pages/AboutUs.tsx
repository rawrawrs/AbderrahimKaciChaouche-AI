import { Link, useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import MegaFooter from "@/components/MegaFooter";
import aaisImpactImage from "@/assets/AAISAlgeriaImpactViz.png";
import fifthSectionVideo from "@/assets/FifthSectionVid.mp4";
import { useEffect, useRef } from "react";

const AboutUs = () => {
  const videoRef = useRef(null);
  const location = useLocation();
  const currentLanguage = location.pathname.startsWith('/fr') ? 'fr' : 'en';

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Optimize video playback
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      
      // Handle video loading more gracefully
      const handleCanPlay = () => {
        if (video.paused) {
          video.play().catch(e => console.log("Autoplay prevented:", e));
        }
      };
      
      video.addEventListener('canplay', handleCanPlay);
      
      // Attempt to play the video
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay failed:", error);
        });
      }
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  const handleContactButtonClick = () => {
    window.location.href = currentLanguage === 'fr' ? '/fr/contact' : '/en/contact';
  };

  return (
    <div className="min-h-screen bg-background" id="top">
      <Navigation />
      
      {/* Adding spacing between navigation and title */}
      <div className="py-8"></div>
      
      {/* Title Section */}
      <section className="container mx-auto px-6 py-4">
        <h1 className="text-4xl md:text-5xl font-normal text-center mb-4" style={{ color: '#264653', fontFamily: 'Inter' }}>
          From Algeria, for Algeria and beyond.
        </h1>
      </section>

      {/* Adding spacing between title section and first section */}
      <div className="py-8"></div>

      {/* First Section - Image and Text */}
      <section className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          <div className="lg:w-1/2">
            <p className="text-xl sm:text-2xl leading-relaxed font-normal" style={{ color: '#264653', fontFamily: 'Inter' }}>
              Harness the power of AI with Abderrahim Kaci Chaouche to transform workflows, reduce costs, and
              accelerate growth. My intelligent solutions adapt, scale, and create lasting impact — solving
              decades-old problems across industries and society.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src={aaisImpactImage} 
              alt="AAIS Algeria Impact Visualization" 
              className="w-full max-w-lg h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Second Section - Qui Nous Sommes */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-8 sm:mb-16 text-center" style={{ color: '#264653' }}>
          Who We Are.
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
          <div className="lg:w-1/2">
            <p className="text-xl leading-relaxed mb-6" style={{ color: '#264653' }}>
              Abderrahim Kaci Chaouche is an AI researcher, developer, and strategic founder, I am the winner of first place and the Excellence Prize at the National AI Hackathon in Algeria. Dedicated to developing artificial intelligence solutions. My mission is to transform businesses and industries through advanced technologies capable of solving concrete problems and creating lasting impact.<br/><br/>

              As an AI researcher and developer, Abderrahim embodies a clear vision: to place Algeria at the forefront of technological innovation. I believe that the success of AI in Algeria relies on the excellence of local talent. That's why I'm committed to recruiting talented teams, supporting training, and fostering the emergence of a strong and competitive technological ecosystem in the country.
            </p>
          </div>
          <div className="lg:w-1/2">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-lg" style={{ color: '#264653' }}>
                  <span className="font-medium">Innovation:</span> Créer des technologies d'IA avancées qui ouvrent de nouvelles perspectives pour les entreprises et les industries.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-lg" style={{ color: '#264653' }}>
                  <span className="font-medium">Recherche en IA:</span> Mener des travaux de recherche appliquée et fondamentale pour repousser les limites de l'intelligence artificielle et renforcer l'expertise locale.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-lg" style={{ color: '#264653' }}>
                  <span className="font-medium">Impact en Algérie:</span> Former, recruter et soutenir les talents locaux pour bâtir un écosystème d'innovation durable au service du pays.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-lg" style={{ color: '#264653' }}>
                  <span className="font-medium">Sécurité:</span> Garantir la confidentialité, l'intégrité et la conformité des données dans toutes mes solutions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-lg" style={{ color: '#264653' }}>
                  <span className="font-medium">Vision globale:</span> Je vise à positionner l'Algérie comme un acteur influent de l'intelligence artificielle sur la scène internationale.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Third Section - Recherches and Actualités */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="border overflow-hidden" style={{ borderColor: '#2a9d8f' }}>
          <div className="flex flex-col lg:flex-row">
            {/* Recherches Section */}
            <div className="lg:w-1/2 p-4 sm:p-6 md:p-8 border-r flex flex-col" style={{ borderColor: '#2a9d8f' }}>
              <h3 className="text-xl sm:text-2xl font-normal mb-3 sm:mb-4 text-left" style={{ color: '#264653' }}>
                {currentLanguage === 'fr' ? "Recherches" : "Research"}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 flex-grow" style={{ color: '#264653' }}>
                {currentLanguage === 'fr'
                  ? "Chez Abderrahim, nous explorons les frontières de l'intelligence artificielle pour transformer le domaine en innovations concrètes et ouvrir de nouvelles perspectives pour l'Algérie et le monde."
                  : "We explore the frontiers of artificial intelligence to transform the field into concrete innovations and open new perspectives for Algeria and the world."}
              </p>
              <div className="text-right">
                <span
                  className="px-4 py-2 sm:px-6 sm:py-3 font-medium cursor-pointer transition-colors"
                  style={{ color: '#2a9d8f' }}
                >
                  {currentLanguage === 'fr' ? "Recherches" : "Research"}
                </span>
              </div>
            </div>

            {/* Actualités Section */}
            <div className="lg:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col">
              <h3 className="text-xl sm:text-2xl font-normal mb-3 sm:mb-4 text-left" style={{ color: '#264653' }}>
                {currentLanguage === 'fr' ? "Actualités" : "News"}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 flex-grow" style={{ color: '#264653' }}>
                {currentLanguage === 'fr'
                  ? "Restez informé des dernières avancées de Abderrahim : innovations, projets, événements, recherches et actualités autour de l'intelligence artificielle en Algérie et au-delà."
                  : "Stay informed about the latest AI advancements with Abderrahim: innovations, projects, events, research, and news around artificial intelligence in Algeria and beyond."}
              </p>
              <div className="text-right">
                <span
                  className="px-4 py-2 sm:px-6 sm:py-3 font-medium cursor-pointer transition-colors"
                  style={{ color: '#2a9d8f' }}
                >
                  {currentLanguage === 'fr' ? "Actualités" : "News"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video section from homepage */}
      <div className="mt-24">
        <div className="container mx-auto px-6">
          <div className="relative w-full">
            {/* Video container */}
            <div className="relative overflow-hidden rounded-lg">
              <video
                ref={videoRef}
                src={fifthSectionVideo}
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-auto object-cover"
              />

              {/* Mobile layout: Text at top left, button at bottom right */}
              <div className="sm:hidden absolute inset-x-0 top-0 p-4 z-10 flex flex-col justify-between items-start gap-4">
                <div className="w-full">
                  <h3
                    className="text-sm sm:text-base md:text-lg font-normal font-inter mb-1"
                    style={{ color: '#FFFFFF' }}
                  >
                    {currentLanguage === 'fr' ? "Pour l'avenir de l'Algérie" : "AI for the Future of Algeria"}
                  </h3>

                  <h2
                    className="text-base sm:text-xl md:text-2xl lg:text-3xl font-normal font-inter leading-tight"
                    style={{
                      color: '#FFFFFF'
                    }}
                  >
                    {currentLanguage === 'fr' ? "Votre prochain pas dans l'IA commence" : "Your Next Step in AI Begins"}
                  </h2>
                  <h2
                    className="text-base sm:text-xl md:text-2xl lg:text-3xl font-normal font-inter mt-1 leading-tight"
                    style={{
                      color: '#FFFFFF'
                    }}
                  >
                    {currentLanguage === 'fr' ? "ici avec Abderrahim" : "Here with Abderrahim"}
                  </h2>
                </div>

                <div className="w-full flex justify-end">
                  <button
                    className="px-3 py-1.5 border border-white bg-transparent text-white font-medium rounded-md hover:bg-white hover:text-background transition-colors duration-300 text-xs"
                    onClick={handleContactButtonClick}
                  >
                    {currentLanguage === 'fr' ? "Contact" : "Contact"}
                  </button>
                </div>
              </div>

              {/* Desktop layout: Text at bottom left, button at bottom right */}
              <div className="hidden sm:block absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 z-10">
                <div className="flex flex-row justify-between items-end">
                  <div className="max-w-[70%]">
                    <h3
                      className="text-base sm:text-lg md:text-xl font-normal font-inter mb-1 sm:mb-2"
                      style={{ color: '#FFFFFF' }}
                    >
                      {currentLanguage === 'fr' ? "Pour l'avenir de l'Algérie" : "AI for the Future of Algeria"}
                    </h3>

                    <h2
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal font-inter leading-tight"
                      style={{
                        color: '#FFFFFF'
                      }}
                    >
                      {currentLanguage === 'fr' ? "Votre prochain pas dans l'IA commence" : "Your Next Step in AI Begins"}
                    </h2>
                    <h2
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal font-inter mt-1 sm:mt-2 leading-tight"
                      style={{
                        color: '#FFFFFF'
                      }}
                    >
                      {currentLanguage === 'fr' ? "ici avec Abderrahim" : "Here with Abderrahim"}
                    </h2>
                  </div>

                  <div className="self-end">
                    <button
                      className="px-3 py-1.5 sm:px-6 sm:py-3 border border-white bg-transparent text-white font-medium rounded-md hover:bg-white hover:text-background transition-colors duration-300 text-xs sm:text-sm md:text-base"
                      onClick={handleContactButtonClick}
                    >
                      {currentLanguage === 'fr' ? "Contact" : "Contact"}
                    </button>
                  </div>
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

export default AboutUs;