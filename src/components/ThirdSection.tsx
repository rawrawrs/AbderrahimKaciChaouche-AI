import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const solutionsDataEn = [
  {
    id: "AI Agents",
    title: "AI Agents",
    description: "Abderrahim delivers AI agents that seamlessly connect to your apps, tools, and libraries—automating repetitive tasks, streamlining workflows, and reducing manual effort. Our agents are designed to adapt to your processes, helping your team save time, cut costs, and focus on the work that truly drives growth.",
    cta: "Request an AI agent",
    ctaHref: "/en/contact"
  },
  {
    id: "RAG Solutions",
    title: "RAG Solutions",
    description: "With Retrieval-Augmented Generation (RAG), you can connect your databases, documents, and knowledge sources directly to AI. It then generates accurate answers grounded in your data, with exact references to the original sources.",
    cta: "Get a RAG solution",
    ctaHref: "/en/contact"
  },
  {
    id: "Custom Deep Research",
    title: "Custom Deep Research",
    description: "With Custom Deep Research, we design AI systems that go beyond surface-level answers. By connecting to your industry data, reports, and knowledge sources, our AI uncovers precise insights, solves complex questions, and delivers research tailored to your business needs.",
    cta: "Start research project",
    ctaHref: "/en/contact"
  },
  {
    id: "File Processing",
    title: "File Processing",
    description: "With AI-powered File Processing, automatically read, analyze, and extract insights from documents, spreadsheets, PDFs, and more. Turn unstructured files into organized, actionable data.",
    cta: "Process files now",
    ctaHref: "/en/contact"
  },
  {
    id: "AI Vision Solution",
    title: "AI Vision Solution",
    description: "Our AI Vision Solutions enable accurate detection, counting, and analysis of objects in images and video. From quality control to activity monitoring, we deliver custom-built vision systems designed for your industry needs.",
    cta: "Explore vision AI",
    ctaHref: "/en/contact"
  },
  {
    id: "Custom Solutions",
    title: "Custom Solutions",
    description: "With Custom Solutions, Abderrahim designs AI systems tailored to your unique challenges. Whether you need automation, analytics, or industry-specific intelligence, we build solutions that align with your goals, adapt to your workflows, and solve real problems.",
    cta: "Request custom solution",
    ctaHref: "/en/contact"
  }
];

const ThirdSection = () => {
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
        return "/en/solutions/AIAgents";
      case "RAG Solutions":
        return "/en/solutions/RAG";
      case "Custom Deep Research":
        return "/en/solutions/CustomDeepResearch";
      case "File Processing":
        return "/en/solutions/FileProcessing";
      case "AI Vision Solution":
        return "/en/solutions/visionai";
      case "Custom Solutions":
        return null;
      default:
        return "/en/solutions";
    }
  };

  // Effect for handling active section highlighting
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
    solutionsDataEn.forEach((solution) => {
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
            Abderrahim AI Solutions for You
          </h2>
        </div>

        {/* --- Mobile Solutions Navigation Bar (Sticky) --- */}
        <div className="lg:hidden sticky top-24 bg-background/95 backdrop-blur-sm z-40 -mx-6 px-2 mb-16">
          <div className="flex overflow-x-auto py-3 px-4 space-x-6 no-scrollbar">
            {solutionsDataEn.map((solution) => (
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
                {solutionsDataEn.map((solution) => (
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
                {solutionsDataEn.map((solution) => (
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
                              More information
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

export default ThirdSection;