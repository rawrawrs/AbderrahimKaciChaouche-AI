import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const MegaFooter = () => {
  const location = useLocation();
  const [language, setLanguage] = useState(location.pathname.startsWith('/fr') ? 'fr' : 'en');

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    
    // Simple redirect to root pages to avoid URL manipulation issues
    if (selectedLang === 'fr' && !location.pathname.startsWith('/fr')) {
      // Determine current page and redirect to its French version
      const currentPath = location.pathname;
      if (currentPath === '/') {
        window.location.href = '/fr';
      } else {
        window.location.href = currentPath.replace('/en', '/fr').replace('//', '/') || '/fr';
      }
    } else if (selectedLang === 'en' && !location.pathname.startsWith('/en')) {
      // Determine current page and redirect to its English version
      const currentPath = location.pathname;
      if (currentPath === '/fr' || currentPath === '/fr/') {
        window.location.href = '/en';
      } else {
        window.location.href = currentPath.replace('/fr', '/en').replace('//', '/') || '/en';
      }
    }
  };

  // Determine links based on current language
  const isFrench = location.pathname.startsWith('/fr');
  
  return (
    <footer className="w-full bg-background pt-8">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Copyright Section */}
          <div className="col-span-1">
            <p
              className="text-sm mt-4"
              style={{ color: '#264653' }}
            >
              Abderrahim Kaci Chaouche © 2025
            </p>
          </div>

          {/* Why AAIS Section */}
          <div className="col-span-1">
            <h3
              className="text-lg font-normal mb-4"
              style={{ color: '#2a9d8f' }}
            >
              {isFrench ? "Pourquoi Abderrahim" : "Why Abderrahim"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={isFrench ? "/fr/about" : "/en/about"}
                  className="text-base hover:text-[#2a9d8f] transition-colors"
                  style={{ color: '#264653' }}
                >
                  {isFrench ? "À propos" : "About"}
                </Link>
              </li>
              <li>
                <Link
                  to={isFrench ? "/fr/contact" : "/en/contact"}
                  className="text-base hover:text-[#2a9d8f] transition-colors"
                  style={{ color: '#264653' }}
                >
                  {isFrench ? "Contact" : "Contact"}
                </Link>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@AbderrahimKaciChaouche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:text-[#2a9d8f] transition-colors"
                  style={{ color: '#264653' }}
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abdel-rahim-kaci-chaouche-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:text-[#2a9d8f] transition-colors"
                  style={{ color: '#264653' }}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Section */}
          <div className="col-span-1">
            <h3 
              className="text-lg font-normal mb-4"
              style={{ color: '#2a9d8f' }}
            >
              {isFrench ? "Explorer" : "Explore"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to={isFrench ? "/fr#solutions" : "/en#solutions"}
                  className="text-base hover:text-[#2a9d8f] transition-colors"
                  style={{ color: '#264653' }}
                >
                  {isFrench ? "Solutions IA" : "AI Solutions"}
                </Link>
              </li>
              <li>
                <Link 
                  to={isFrench ? "/fr#research" : "/en#research"}
                  className="text-base hover:text-[#2a9d8f] transition-colors"
                  style={{ color: '#264653' }}
                >
                  {isFrench ? "Recherche" : "Research"}
                </Link>
              </li>
              <li>
                <Link 
                  to={isFrench ? "/fr#news" : "/en#news"}
                  className="text-base hover:text-[#2a9d8f] transition-colors"
                  style={{ color: '#264653' }}
                >
                  {isFrench ? "Actualités" : "News"}
                </Link>
              </li>
              <li>
                <Link 
                  to={isFrench ? "/fr#commitments" : "/en#commitments"}
                  className="text-base hover:text-[#2a9d8f] transition-colors"
                  style={{ color: '#264653' }}
                >
                  {isFrench ? "Engagements" : "Commitments"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="col-span-1">
            <h3 
              className="text-lg font-normal mb-4"
              style={{ color: '#2a9d8f' }}
            >
              {isFrench ? "Légal" : "Legal"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to={isFrench ? "/fr#terms" : "/en#terms"}
                  className="text-base hover:text-[#2a9d8f] transition-colors"
                  style={{ color: '#264653' }}
                >
                  {isFrench ? "Conditions d'utilisation" : "Terms of Service"}
                </Link>
              </li>
              <li>
                <Link 
                  to={isFrench ? "/fr#privacy" : "/en#privacy"}
                  className="text-base hover:text-[#2a9d8f] transition-colors"
                  style={{ color: '#264653' }}
                >
                  {isFrench ? "Politique de confidentialité" : "Privacy Policy"}
                </Link>
              </li>
              <li>
                <Link 
                  to={isFrench ? "/fr#data-protection" : "/en#data-protection"}
                  className="text-base hover:text-[#2a9d8f] transition-colors"
                  style={{ color: '#264653' }}
                >
                  {isFrench ? "Protection des données" : "Data Protection"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Language Selector */}
        <div className="mt-12 flex justify-start">
          <div>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="bg-background rounded-md px-3 py-1 text-[#264653] border-0"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MegaFooter;