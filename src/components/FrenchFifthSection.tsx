import fifthSectionVideo from "@/assets/FifthSectionVid.mp4";
import { useEffect, useRef } from "react";

const FrenchFifthSection = () => {
  const videoRef = useRef(null);

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

  return (
    <section className="w-full bg-background py-12 lg:py-16">
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
              className="w-full aspect-video object-cover sm:max-h-[70vh]"
            />
            
            {/* Mobile layout: Text at top left, button at bottom right */}
            <div className="sm:hidden absolute inset-x-0 top-0 p-4 z-10 flex flex-col justify-between items-start gap-4">
              <div className="w-full">
                <h3
                  className="text-base font-normal font-inter mb-1"
                  style={{ color: '#FFFFFF' }}
                >
                  L'IA pour l'avenir de l'Algérie
                </h3>
                
                <h2 
                  className="text-xl font-normal font-inter leading-tight"
                  style={{ 
                    color: '#FFFFFF'
                  }}
                >
                  Votre prochain pas dans l’IA commence
                </h2>
                <h2
                  className="text-xl font-normal font-inter mt-1 leading-tight"
                  style={{
                    color: '#FFFFFF'
                  }}
                >
                  ici avec Abderrahim
                </h2>
              </div>
              
              <div className="w-full flex justify-end">
                <button
                  className="px-3 py-1.5 border border-white bg-transparent text-white font-medium rounded-md hover:bg-white hover:text-background transition-colors duration-300 text-xs"
                  onClick={() => window.location.href = '/fr/contact'}
                >
                  Contact
                </button>
              </div>
            </div>
            
            {/* Desktop layout: Text at bottom left, button at bottom right */}
            <div className="hidden sm:block absolute inset-x-0 bottom-0 p-6 md:p-8 z-10">
              <div className="flex flex-row justify-between items-end">
                <div className="max-w-[70%]">
                  <h3
                    className="text-base sm:text-lg md:text-xl font-normal font-inter mb-1 sm:mb-2"
                    style={{ color: '#FFFFFF' }}
                  >
                    L'IA pour l'avenir de l'Algérie
                  </h3>
                  
                  <h2 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal font-inter leading-tight"
                    style={{ 
                      color: '#FFFFFF'
                    }}
                  >
                    Votre prochain pas dans l’IA commence
                  </h2>
                  <h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal font-inter mt-1 sm:mt-2 leading-tight"
                    style={{
                      color: '#FFFFFF'
                    }}
                  >
                    ici avec Abderrahim
                  </h2>
                </div>
                
                <div className="self-end">
                  <button
                    className="px-3 py-1.5 sm:px-6 sm:py-3 border border-white bg-transparent text-white font-medium rounded-md hover:bg-white hover:text-background transition-colors duration-300 text-xs sm:text-sm md:text-base"
                    onClick={() => window.location.href = '/fr/contact'}
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrenchFifthSection;