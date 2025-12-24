import Navigation from "@/components/Navigation";
import deepResearchImage from "@/assets/AAIScutomdeepresearchVIZ.png";
import { Link } from "react-router-dom";
import MegaFooter from "@/components/MegaFooter";
import { useEffect } from "react";

const DeepResearch = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto px-2 sm:px-6 py-16">
          {/* Title and content container */}
          <div className="text-center mb-12">
            <h1 
              className="text-4xl md:text-5xl font-normal mb-12"
              style={{ color: '#264653' }}
            >
              Custom Deep Research
            </h1>
            
            {/* Description */}
            <div
              className="max-w-6xl mx-auto mb-10 text-xl md:text-2xl px-4 sm:px-8 text-left"
              style={{ color: '#264653' }}
            >
              I develop custom deep research systems that go far beyond traditional search or analysis. These solutions combine intelligent reasoning, contextual understanding, and adaptive learning to explore complex data, uncover patterns, and deliver valuable insights tailored to the unique goals of your organization.
            </div>
            
            {/* CTA aligned to the right */}
            <div className="flex justify-end mb-4 px-4 sm:px-8">
              <Link 
                to="/en/contact"
                className="text-xl font-medium"
                style={{ color: '#2a9d8f' }}
              >
                Get Custom Deep Research
              </Link>
            </div>
            
            {/* Image centered */}
            <div className="flex justify-center px-0 sm:px-8">
              <img 
                src={deepResearchImage} 
                alt="AAIS Custom Deep Research Visualization" 
                className="w-[100%] sm:max-w-4xl h-auto"
              />
            </div>
          </div>
          
          {/* New section below image */}
          <div className="max-w-6xl mx-auto mt-12 px-2 sm:px-8">
            <div className="flex flex-col md:flex-row gap-8 sm:gap-12">
              {/* Left section - text and CTA */}
              <div className="md:w-1/2">
                <h2 
                  className="text-3xl md:text-4xl font-normal mb-4 text-left"
                  style={{ color: '#264653' }}
                >
                  Driving Strategic Decisions with AI Intelligence
                </h2>
                <div className="mt-6 text-left">
                  <Link 
                    to="/en/contact"
                    className="text-xl font-medium inline-block"
                    style={{ color: '#2a9d8f' }}
                  >
                    Build Your Deep Research System
                  </Link>
                </div>
              </div>
              
              {/* Right section - description */}
              <div
                className="md:w-1/2 text-xl md:text-2xl text-left"
                style={{ color: '#264653' }}
              >
                Rather than generic summaries, my custom deep research models analyze, connect, and interpret information from various sources, transforming raw data into structured intelligence that supports real decision-making. Whether it's market analysis, medical research, or strategic planning, each system is tailored to your field, ensuring accuracy, depth, and relevance.
              </div>
            </div>
          </div>
        </div>
      </main>
      <MegaFooter />
    </div>
  );
};

export default DeepResearch;