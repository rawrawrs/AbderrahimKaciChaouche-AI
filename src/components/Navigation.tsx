import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | false>(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const navTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (itemLabel: string) => {
    if (navTimeoutRef.current) {
      clearTimeout(navTimeoutRef.current);
    }
    setDropdownOpen(itemLabel);
  };

  const handleMouseLeave = () => {
    navTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // 300ms delay
  };

  useEffect(() => {
    return () => {
      if (navTimeoutRef.current) {
        clearTimeout(navTimeoutRef.current);
      }
    };
  }, []);

  // Determine current language from URL
  const currentLanguage = location.pathname.startsWith('/fr') ? 'fr' : 'en';
  
  // Navigation items based on language
  const navItems = currentLanguage === 'fr' ? [
    { label: "À propos", href: "/fr/about", hasDropdown: false },
    { label: "Recherche", href: "/fr/research", hasDropdown: false },
    { label: "Solutions", href: "/fr#solutions", hasDropdown: true },
    { label: "Engagements", href: "/fr#commitments", hasDropdown: true },
    { label: "Actualités", href: "/fr#news", hasDropdown: true }
  ] : [
    { label: "About", href: "/en/about", hasDropdown: false },
    { label: "Research", href: "/en/research", hasDropdown: false },
    { label: "Solutions", href: "/en#solutions", hasDropdown: true },
    { label: "Commitments", href: "/en#commitments", hasDropdown: true },
    { label: "News", href: "/en#news", hasDropdown: true }
  ];

  // Solutions dropdown items based on language
  const solutionsDropdownItems = currentLanguage === 'fr' ? [
    { label: "Agents IA", href: "/fr/solutions/aiagents" },
    { label: "Solutions RAG", href: "/fr/solutions/rag" },
    { label: "Recherche Approfondie", href: "/fr/solutions/deepresearch" },
    { label: "Traitement de Fichiers", href: "/fr/solutions/fileprocessing" },
    { label: "Solution de Vision IA", href: "/fr/solutions/visionai" },
    { label: "Solutions Personnalisées", href: "/fr#custom-solutions" }
  ] : [
    { label: "AI Agents", href: "/en/solutions/aiagents" },
    { label: "RAG Solutions", href: "/en/solutions/rag" },
    { label: "Custom Deep Research", href: "/en/solutions/deepresearch" },
    { label: "File Processing", href: "/en/solutions/fileprocessing" },
    { label: "AI Vision Solution", href: "/en/solutions/visionai" },
    { label: "Custom Solutions", href: "/en#custom-solutions" }
  ];

  // Contact button text based on language
  const contactText = "Contact";
  
  // Login button text based on language
  const loginText = currentLanguage === 'fr' ? "Connexion client" : "Client Login";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-background sticky top-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <div 
          className="flex items-center justify-between"
        >
          {/* Logo Replacement - Text */}
          <div className="flex items-center -mt-1">
            <Link
              to={currentLanguage === 'fr' ? "/fr" : "/en"}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex flex-col items-start"
            >
              <span className="font-normal text-lg md:text-xl" style={{ color: '#264653' }}>Abderrahim</span>
              <span className="font-normal text-lg md:text-xl" style={{ color: '#264653' }}>Kaci Chaouche</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#264653] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div 
            className="hidden md:flex items-center justify-end flex-1 mr-4 relative"
          >
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <div 
                  key={item.label} 
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                  onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                >
                  <Link
                    to={item.href}
                    className="hover:text-accent transition-colors font-medium text-base flex items-center gap-1"
                    style={{ color: '#264653' }}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="h-4 w-4" style={{ color: '#264653' }} />
                    )}
                  </Link>
                  
                  {/* Dropdown for each item - centered on screen */}
                  {item.hasDropdown && dropdownOpen === item.label && (
                    <div 
                      className="fixed left-1/2 transform -translate-x-1/2 bg-white shadow-lg z-50 rounded-lg opacity-0 -translate-y-4 transition-all duration-300 ease-in-out"
                      style={{ 
                        top: '100px', /* Positioned below the navigation bar */
                        width: 'calc(100% - 2rem)', // Account for the px-6 (1rem = 16px * 2 = 32px total margin)
                        maxWidth: '1280px', // Standard container max-width
                        animation: 'dropdown-appear 0.3s ease-in-out forwards'
                      }}
                      onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                      onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                    >
                      <div className="container mx-auto px-6 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                          {/* For Research, Commitments, and News items, add an empty placeholder column to shift content right */}
                          {(item.label === "Research" || item.label === "Recherche" ||
                            item.label === "Commitments" || item.label === "Engagements" ||
                            item.label === "News" || item.label === "Actualités") && (
                            <div></div> /* Empty column to shift content right */
                          )}
                          
                          {/* Use Cases Section - Only shown for Solutions */}
                          {item.label === "Solutions" && (
                            <div>
                              <h3 className="text-lg font-semibold mb-4" style={{ color: '#264653' }}>
                                {currentLanguage === 'fr' ? "Cas d'Utilisation" : "Use Cases"}
                              </h3>
                              <ul className="space-y-2">
                                <li>
                                  <Link 
                                    to={currentLanguage === 'fr' ? "/fr#use-case-1" : "/en#use-case-1"}
                                    className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1"
                                  >
                                    {currentLanguage === 'fr' ? "Solutions d'Entreprise" : "Enterprise Solutions"}
                                  </Link>
                                </li>
                                <li>
                                  <Link 
                                    to={currentLanguage === 'fr' ? "/fr#use-case-2" : "/en#use-case-2"}
                                    className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1"
                                  >
                                    {currentLanguage === 'fr' ? "Applications de Recherche" : "Research Applications"}
                                  </Link>
                                </li>
                                <li>
                                  <Link 
                                    to={currentLanguage === 'fr' ? "/fr#use-case-3" : "/en#use-case-3"}
                                    className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1"
                                  >
                                    {currentLanguage === 'fr' ? "Traitement de Données" : "Data Processing"}
                                  </Link>
                                </li>
                                <li>
                                  <Link 
                                    to={currentLanguage === 'fr' ? "/fr#use-case-4" : "/en#use-case-4"}
                                    className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1"
                                  >
                                    {currentLanguage === 'fr' ? "Intégration IA" : "AI Integration"}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          )}
                          
                          {/* Content section based on navigation item */}
                          <div className={`
                            ${item.label === "Solutions" ? "col-span-2" : 
                              (item.label === "Research" || item.label === "Recherche" || 
                              item.label === "Commitments" || item.label === "Engagements" || 
                              item.label === "News" || item.label === "Actualités") ? "col-span-3" : 
                              "col-span-3"}
                          `}>
                            <h3 className="text-lg font-semibold mb-4" style={{ color: '#264653' }}>
                              {item.label === "Solutions" && (currentLanguage === 'fr' ? "Solutions" : "Solutions")}
                              {item.label === "About US" && (currentLanguage === 'fr' ? "À Propos" : "About Us")}
                              {item.label === "Recherche" && (currentLanguage === 'fr' ? "Recherche" : "Research")}
                              {item.label === "Research" && (currentLanguage === 'fr' ? "Recherche" : "Research")}
                              {item.label === "Engagements" && (currentLanguage === 'fr' ? "Engagements" : "Commitments")}
                              {item.label === "Commitments" && (currentLanguage === 'fr' ? "Engagements" : "Commitments")}
                              {item.label === "Actualités" && (currentLanguage === 'fr' ? "Actualités" : "News")}
                              {item.label === "News" && (currentLanguage === 'fr' ? "Actualités" : "News")}
                            </h3>
                            <ul className="space-y-2">
                              {/* Add specific dropdown items based on the navigation item */}
                              {item.label === "Solutions" && solutionsDropdownItems.map((dropdownItem) => (
                                <li key={dropdownItem.label}>
                                  <Link
                                    to={dropdownItem.href}
                                    className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1"
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                </li>
                              ))}
                              {item.label === "About US" && (
                                <>
                                  <li><Link to="/en/about#company" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Our Company</Link></li>
                                  <li><Link to="/en/about#team" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Our Team</Link></li>
                                  <li><Link to="/en/about#history" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">History</Link></li>
                                  <li><Link to="/en/about#values" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Values</Link></li>
                                </>
                              )}
                              {item.label === "Research" && (
                                <>
                                  <li><Link to="/en/research/syntron" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Syntron Architecture</Link></li>
                                  <li><Link to="/en/research/trafpodc" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Trafp-ODC</Link></li>
                                  <li><Link to="/en/research" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">All Research</Link></li>
                                </>
                              )}
                              {item.label === "Recherche" && (
                                <>
                                  <li><Link to="/fr/research/syntron" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Architecture Syntron</Link></li>
                                  <li><Link to="/fr/research/trafpodc" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Trafp-ODC</Link></li>
                                  <li><Link to="/fr/research" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Toute la Recherche</Link></li>
                                </>
                              )}
                              {item.label === "À propos" && (
                                <>
                                  <li><Link to="/fr/about#entreprise" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Notre Entreprise</Link></li>
                                  <li><Link to="/fr/about#equipe" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Notre Équipe</Link></li>
                                  <li><Link to="/fr/about#histoire" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Histoire</Link></li>
                                  <li><Link to="/fr/about#valeurs" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Valeurs</Link></li>
                                </>
                              )}
                              {item.label === "Commitments" && (
                                <>
                                  <li><Link to="/en#ethics" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Ethics & Responsibility</Link></li>
                                  <li><Link to="/en#sustainability" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Sustainability</Link></li>
                                  <li><Link to="/en#security" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Data Security</Link></li>
                                  <li><Link to="/en#accessibility" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Accessibility</Link></li>
                                </>
                              )}
                              {item.label === "Engagements" && (
                                <>
                                  <li><Link to="/fr#ethique" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Éthique & Responsabilité</Link></li>
                                  <li><Link to="/fr#durabilite" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Durabilité</Link></li>
                                  <li><Link to="/fr#securite" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Sécurité des Données</Link></li>
                                  <li><Link to="/fr#accessibilite" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Accessibilité</Link></li>
                                </>
                              )}
                              {item.label === "News" && (
                                <>
                                  <li><Link to="/en#latest-news" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Latest News</Link></li>
                                  <li><Link to="/en#press-releases" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Press Releases</Link></li>
                                  <li><Link to="/en#events" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Events</Link></li>
                                  <li><Link to="/en#blog" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Blog</Link></li>
                                </>
                              )}
                              {item.label === "Actualités" && (
                                <>
                                  <li><Link to="/fr#dernieres-actualites" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Dernières Actualités</Link></li>
                                  <li><Link to="/fr#communiques-presse" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Communiqués de Presse</Link></li>
                                  <li><Link to="/fr#evenements" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Événements</Link></li>
                                  <li><Link to="/fr#blog" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1">Blog</Link></li>
                                </>
                              )}
                            </ul>
                          </div>
                          


                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="ml-6"></div> {/* Spacing between News button and Contact US button */}
          </div>

          {/* CTA Buttons - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-2">
            <Link to={currentLanguage === 'fr' ? "/fr/contact" : "/en/contact"}>
              <Button
                variant="ghost"
                className="font-medium px-4 py-2 text-sm md:px-5 md:py-2 md:text-base rounded-lg flex items-center gap-2 hover:bg-[#2a9d8f] transition-colors group"
                style={{ color: '#2a9d8f' }}
              >
                <span className="group-hover:text-[#FFFFFF] transition-colors">{contactText}</span>
                <ArrowRight className="h-4 w-4 group-hover:text-[#FFFFFF] transition-colors" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={toggleMenu}
        ></div>

        <div
          className={`fixed top-0 h-full w-64 bg-white z-50 transform transition-transform md:hidden ${isMenuOpen ? 'right-0' : '-right-64'}`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-[#264653] focus:outline-none"
              aria-label="Close navigation menu"
            >
              <X className="h-8 w-8" />
            </button>
          </div>
          <div className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="w-full text-left text-[#264653] hover:text-accent transition-colors font-medium text-lg py-2 flex justify-between items-center"
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileDropdownOpen(mobileDropdownOpen === item.label ? null : item.label);
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transform transition-transform ${mobileDropdownOpen === item.label ? 'rotate-180' : ''}`}
                        style={{ color: '#264653' }}
                      />
                    </button>
                    {mobileDropdownOpen === item.label && (
                      <div className="ml-4 mt-2 space-y-2 border-l-2 border-[#264653] pl-2">
                        {/* Solutions dropdown items */}
                        {item.label === "Solutions" && solutionsDropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            to={dropdownItem.href}
                            className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setMobileDropdownOpen(null);
                            }}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                        {/* Other dropdown items based on item.label */}
                        {item.label === "About US" && (
                          <>
                            <Link to="/en/about#company" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Our Company</Link>
                            <Link to="/en/about#team" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Our Team</Link>
                            <Link to="/en/about#history" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>History</Link>
                            <Link to="/en/about#values" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Values</Link>
                          </>
                        )}
                        {item.label === "Research" && (
                          <>
                            <Link to="/en/research/syntron" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => {
                              setIsMenuOpen(false);
                              setMobileDropdownOpen(null);
                            }}>Syntron Architecture</Link>
                            <Link to="/en/research/trafpodc" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => {
                              setIsMenuOpen(false);
                              setMobileDropdownOpen(null);
                            }}>Trafp-ODC</Link>
                            <Link to="/en/research" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => {
                              setIsMenuOpen(false);
                              setMobileDropdownOpen(null);
                            }}>All Research</Link>
                          </>
                        )}
                        {item.label === "Recherche" && (
                          <>
                            <Link to="/fr/research/syntron" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => {
                              setIsMenuOpen(false);
                              setMobileDropdownOpen(null);
                            }}>Architecture Syntron</Link>
                            <Link to="/fr/research/trafpodc" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => {
                              setIsMenuOpen(false);
                              setMobileDropdownOpen(null);
                            }}>Trafp-ODC</Link>
                            <Link to="/fr/research" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => {
                              setIsMenuOpen(false);
                              setMobileDropdownOpen(null);
                            }}>Toute la Recherche</Link>
                          </>
                        )}
                        {item.label === "À propos" && (
                          <>
                            <Link to="/fr/about#entreprise" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Notre Entreprise</Link>
                            <Link to="/fr/about#equipe" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Notre Équipe</Link>
                            <Link to="/fr/about#histoire" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Histoire</Link>
                            <Link to="/fr/about#valeurs" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Valeurs</Link>
                          </>
                        )}
                        {item.label === "Commitments" && (
                          <>
                            <Link to="/en#ethics" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Ethics & Responsibility</Link>
                            <Link to="/en#sustainability" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Sustainability</Link>
                            <Link to="/en#security" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Data Security</Link>
                            <Link to="/en#accessibility" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Accessibility</Link>
                          </>
                        )}
                        {item.label === "Engagements" && (
                          <>
                            <Link to="/fr#ethique" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Éthique & Responsabilité</Link>
                            <Link to="/fr#durabilite" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Durabilité</Link>
                            <Link to="/fr#securite" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Sécurité des Données</Link>
                            <Link to="/fr#accessibilite" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Accessibilité</Link>
                          </>
                        )}
                        {item.label === "News" && (
                          <>
                            <Link to="/en#latest-news" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Latest News</Link>
                            <Link to="/en#press-releases" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Press Releases</Link>
                            <Link to="/en#events" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Events</Link>
                            <Link to="/en#blog" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                          </>
                        )}
                        {item.label === "Actualités" && (
                          <>
                            <Link to="/fr#dernieres-actualites" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Dernières Actualités</Link>
                            <Link to="/fr#communiques-presse" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Communiqués de Presse</Link>
                            <Link to="/fr#evenements" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Événements</Link>
                            <Link to="/fr#blog" className="block text-[#264653] hover:text-[#2a9d8f] transition-colors py-1 text-base" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-[#264653] hover:text-accent transition-colors font-medium text-lg py-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex flex-col space-y-3 pt-2">
              <Link
                to={currentLanguage === 'fr' ? "/fr/contact" : "/en/contact"}
                className="text-[#2a9d8f] font-medium text-lg py-2 border border-[#2a9d8f] rounded-lg text-center hover:bg-[#2a9d8f] hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {contactText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;