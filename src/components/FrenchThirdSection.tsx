import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const solutionsDataFr = [
  {
    id: "AI Agents",
    title: "Agents d'IA",
    description: "Abderrahim propose des agents d'IA qui se connectent parfaitement à vos applications, outils et bibliothèques — automatisant les tâches répétitives, optimisant les flux de travail et réduisant l’effort manuel. Mes agents sont conçus pour s’adapter à vos processus, aidant votre équipe à gagner du temps, réduire les coûts et se concentrer sur le travail qui génère réellement la croissance.",
    cta: "Demander un agent d’IA",
    ctaHref: "/fr/contact"
  },
  {
    id: "RAG Solutions",
    title: "Solutions RAG",
    description: "Avec la génération augmentée par récupération (RAG), vous pouvez connecter vos bases de données, documents et sources de connaissances directement à l'IA. Elle génère ensuite des réponses précises basées sur vos données, avec des références exactes aux sources originales.",
    cta: "Obtenir une solution RAG",
    ctaHref: "/fr/contact"
  },
  {
    id: "Custom Deep Research",
    title: "Recherche approfondie sur mesure",
    description: "Avec la recherche approfondie sur mesure, je développe des systèmes d'IA qui vont au-delà des réponses superficielles. En reliant vos données sectorielles, rapports et sources de connaissance, mon IA produit des analyses précises, traite des questions complexes et fournit des recherches entièrement adaptées aux besoins de votre organisation.",
    cta: "Lancer un projet de recherche",
    ctaHref: "/fr/contact"
  },
  {
    id: "File Processing",
    title: "Traitement de fichiers",
    description: "Avec le traitement de fichiers propulsé l'IA, lisez, analysez et extrayez automatiquement des informations à partir de documents, feuilles de calcul, PDFs et plus encore. Transformez des fichiers non structurés en données organisées et exploitables.",
    cta: "Traiter vos fichiers",
    ctaHref: "/fr/contact"
  },
  {
    id: "AI Vision Solution",
    title: "Solutions de vision IA",
    description: "Mes solutions de vision par IA permettent la détection, le comptage et l'analyse précis des objets dans les images et les vidéos. Du contrôle qualité à la surveillance des activités, je développe des systèmes de vision sur mesure, conçus pour répondre aux besoins spécifiques de votre secteur.",
    cta: "Explorer la vision par IA",
    ctaHref: "/fr/contact"
  },
  {
    id: "Custom Solutions",
    title: "Solutions sur mesure",
    description: "Avec des solutions sur mesure, Abderrahim développe des systèmes d'IA adaptés à vos défis uniques. Que vous ayez besoin d'automatisation, d'analytique ou d'intelligence spécifique à votre secteur, je crée des solutions qui s'alignent sur vos objectifs, s'adaptent à vos flux de travail et résolvent de véritables problèmes.",
    cta: "Demander une solution sur mesure",
    ctaHref: "/fr/contact"
  }
];

const FrenchThirdSection = () => {
  const [activeItem, setActiveItem] = useState("AI Agents");
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const mobileItemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const location = useLocation();

  // Function to scroll to a specific section
  const scrollToSection = (solutionId: string) => {
    const element = sectionRefs.current[solutionId];
    if (element) {
      // We calculate the offset to account for the sticky header
      const yOffset = -150; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const getSolutionPath = (solutionId: string) => {
    switch (solutionId) {
      case "AI Agents":
        return "/fr/solutions/AIAgents";
      case "RAG Solutions":
        return "/fr/solutions/RAG";
      case "Custom Deep Research":
        return "/fr/solutions/CustomDeepResearch";
      case "File Processing":
        return "/fr/solutions/FileProcessing";
      case "AI Vision Solution":
        return "/fr/solutions/visionai";
      case "Custom Solutions":
        return null; // Don't show "Plus d'informations" link for Custom Solutions
      default:
        return "/fr/solutions";
    }
  };

  // Effect to handle active section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntries = entries.filter((e) => e.isIntersecting);

        if (intersectingEntries.length > 0) {
          const mostVisibleEntry = intersectingEntries.reduce((prev, current) =>
            prev.intersectionRatio > current.intersectionRatio ? prev : current
          );
          setActiveItem(mostVisibleEntry.target.id);
        }
      },
      {
        rootMargin: "0px 0px -60% 0px", // Changed to only check bottom margin to prevent initial activation
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const observedElements = new Set<Element>();
    solutionsDataFr.forEach(solution => {
      const element = sectionRefs.current[solution.id];
      if (element) {
        observer.observe(element);
        observedElements.add(element);
      }
    });

    return () => {
      observedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Effect for auto-scrolling the mobile navigation bar
  useEffect(() => {
    const activeElement = mobileItemRefs.current[activeItem];
    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeItem]);

  return (
    <section className="w-full bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16 md:mb-32">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal font-inter"
            style={{ color: '#264653' }}
          >
            Abderrahim Solutions d'IA pour Vous
          </h2>
        </div>

        {/* --- Mobile Solutions Navigation Bar (Sticky) --- */}
        <div className="lg:hidden sticky top-24 bg-background/95 backdrop-blur-sm z-40 -mx-6 px-2 mb-16">
          <div className="flex overflow-x-auto py-3 px-4 space-x-6 no-scrollbar">
            {solutionsDataFr.map((solution) => (
              <div
                key={solution.id}
                ref={(el) => (mobileItemRefs.current[solution.id] = el)}
                className={`cursor-pointer whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  activeItem === solution.id ? 'opacity-100' : 'opacity-60'
                }`}
                onClick={() => scrollToSection(solution.id)}
              >
                <h3
                  className={`text-sm font-normal font-inter transition-all duration-300 ${
                    activeItem === solution.id ? 'text-[#2a9d8f] font-medium' : 'text-[#264653]'
                  }`}
                >
                  {solution.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Layout with Persistent Sidebar */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Persistent Left Sidebar - Hidden on mobile */}
            <div className="lg:col-span-3 sticky top-48 h-fit bg-background py-4 z-40 hidden lg:block">
              <div className="space-y-8">
                {solutionsDataFr.map((solution) => (
                  <div
                    key={solution.id}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeItem === solution.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                    }`}
                    onClick={() => scrollToSection(solution.id)}
                  >
                    <h3
                      className={`text-lg md:text-xl font-normal font-inter leading-tight transition-all duration-300 ${
                        activeItem === solution.id ? 'text-[#2a9d8f] font-medium' : 'text-[#264653]'
                      }`}
                    >
                      {solution.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* All Solutions Stacked Vertically */}
            <div className="lg:col-span-9">
              <div className="space-y-32">
                {solutionsDataFr.map((solution, index) => (
                  <div
                    key={solution.id}
                    id={solution.id}
                    ref={(el) => (sectionRefs.current[solution.id] = el)}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
                  >
                    {/* Content */}
                    <div className="lg:col-span-8">
                      <div className="space-y-8">
                        <p 
                          className="text-xl md:text-2xl leading-relaxed font-inter font-normal"
                          style={{ color: '#264653' }}
                        >
                          {solution.description}
                        </p>
                        
                        <div className="flex flex-col space-y-4">
                          <Link
                            to={solution.ctaHref}
                            className="inline-block font-inter font-medium text-lg transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                            style={{
                              color: '#2a9d8f',
                              borderBottomColor: '#2a9d8f'
                            }}
                          >
                            {solution.cta}
                          </Link>
                          {getSolutionPath(solution.id) && (
                            <Link
                              to={getSolutionPath(solution.id)}
                              className="inline-block font-inter text-base transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                              style={{
                                color: '#2a9d8f',
                                borderBottomColor: '#2a9d8f'
                              }}
                            >
                              Plus d’informations
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right Image/GIF */}
                    <div className="lg:col-span-4">
                      <div className="flex justify-center lg:justify-end">
                        <img
                          src={
                            solution.id === "AI Agents" 
                              ? "https://i.ibb.co/99kzVNMF/AIagents-Animation.gif"
                              : solution.id === "RAG Solutions"
                              ? "https://i.ibb.co/397GvJZy/Rag-Animation.gif" 
                              : solution.id === "Custom Deep Research"
                              ? "https://i.ibb.co/DsRzKgR/Deeprsearchs-Animation.gif"
                              : solution.id === "File Processing"
                              ? "https://i.ibb.co/pBNdRdW0/File-Processing-Viz.gif"
                              : solution.id === "AI Vision Solution"
                              ? "https://i.ibb.co/jvRmVzTv/Detection-Viz.gif"
                              : solution.id === "Custom Solutions"
                              ? "https://i.ibb.co/kg6vKgXL/Custom-Solutions-Viz.gif"
                              : "https://i.ibb.co/PZxwPyQC/My.gif"
                          }
                          alt={`${solution.title} Demo`}
                          className="max-w-full h-auto rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrenchThirdSection;