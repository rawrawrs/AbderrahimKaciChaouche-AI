import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollingTitle = () => {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  
  // Determine current language from URL
  const currentLanguage = location.pathname.startsWith('/fr') ? 'fr' : 'en';
  
  // Text based on language
  const titleLines = currentLanguage === 'fr' 
    ? ["L’IA qui", "transforme", "chaque industrie"] 
    : ["AI That", "Transforms Every", "Industry"];
  
  const learnMoreText = currentLanguage === 'fr' 
    ? "en savoir plus" 
    : "Learn more";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="inline-block">
      <div>
        <h2 
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight font-inter text-left"
          style={{ 
            color: '#264653'
          }}
        >
          <div>{titleLines[0]}</div>
          <div>{titleLines[1]}</div>
          <div>{titleLines[2]}</div>
        </h2>
        <div className="mt-6 grid grid-cols-[1fr_auto] items-center gap-4 w-full">
          <div className="h-0.5 bg-[#2a9d8f]"></div>
          <div>
            <span 
              className="text-lg font-medium text-[#2a9d8f] hover:text-[#264653] cursor-pointer transition-colors duration-300 whitespace-nowrap"
              onClick={() => window.location.href = currentLanguage === 'fr' ? '/fr/about' : '/en/about'}
            >
              {learnMoreText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingTitle;