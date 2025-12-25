import Navigation from "@/components/Navigation";
import aaisAIAgentsImage from "@/assets/AAISaiagentsVIZ.png";
import aaisAgentCustomImage from "@/assets/AAISagentcustomVIZ.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MegaFooter from "@/components/MegaFooter";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";

const AIAgents = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Agents by Abderrahim Kaci Chaouche - Advanced AI Development"
        description="AI agents development by Abderrahim Kaci Chaouche, AI researcher and developer. Custom AI agents for specific business needs, developed with precision, reliability, and purpose."
        lang="en"
        alternates={[{ lang: 'fr', href: '/fr/solutions/aiagents' }]}
        keywords="AI development, artificial intelligence, machine learning, Algeria AI, custom AI agents, AI researcher, AI development, Abderrahim Kaci Chaouche, intelligent automation"
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
            AI Agents
          </h1>
          
          {/* Description */}
          <div
            className="max-w-6xl mx-auto mb-10 text-xl md:text-2xl px-4 sm:px-8 text-left"
            style={{ color: '#264653' }}
          >
            I develop custom AI agents specifically designed for your business needs. Whether you need an intelligent assistant to automate workflows, analyze data, interact with clients, or support decision-making, my agents fully adapt to your goals, systems, and industry.
          </div>
          
          {/* CTA aligned to the right */}
          <div className="flex justify-end mb-4 px-4 sm:px-8">
            <Link 
              to="/en/contact"
              className="text-xl font-medium"
              style={{ color: '#2a9d8f' }}
            >
              Get an AI Agent
            </Link>
          </div>
          
          {/* Image centered */}
          <div className="flex justify-center px-0 sm:px-8">
            <img
              src={aaisAIAgentsImage}
              alt="Custom AI agents visualization showing intelligent automation for business processes"
              className="w-[100%] sm:max-w-4xl h-auto"
              loading="lazy"
            />
          </div>
          
          
          {/* Additional description below the image */}
          <div
            className="max-w-6xl mx-auto mt-12 text-xl md:text-2xl px-2 sm:px-8 text-left"
            style={{ color: '#264653' }}
          >
            Each AI agent I develop is tailored to understand your environment, learn from your data, and deliver measurable results. From healthcare and logistics to finance and government services, Abderrahim Kaci Chaouche ensures every organization benefits from intelligent agents built with precision, reliability, and purpose.
          </div>
          
          {/* Title below the description */}
          <div className="max-w-6xl mx-auto mt-16 px-2 sm:px-8">
            <h2 
              className="text-4xl font-normal text-left"
              style={{ color: '#264653' }}
            >
              Tailored Intelligence for Every Need
            </h2>
          </div>
          
          {/* Flex container for description and image */}
          <div className="max-w-6xl mx-auto mt-12 px-2 sm:px-8 flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
            {/* Description */}
            <div 
              className="md:w-1/2 text-xl md:text-2xl text-left"
              style={{ color: '#264653' }}
            >
              Every business has its own logic, rhythm, and way of working. That’s why my AI agents are never pre-made, they’re custom-engineered to match your exact process. Whether you need to automate workflows, analyze operations, or connect existing tools, each agent is shaped around your goals, your data, and your environment.
              <br/>
              With Abderrahim, customization isn't an option, it's the foundation.
            </div>
            
            {/* Image */}
            <div className="md:w-1/2 flex justify-start pl-4 md:pl-8">
              <img
                src={aaisAgentCustomImage}
                alt="Custom AI agent tailored for specific business needs and processes"
                className="max-w-[90%] md:max-w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* CTA below the description and image, aligned with description text */}
          <div className="max-w-6xl mx-auto mt-12 px-2 sm:px-8">
            <div className="md:w-1/2 text-left">
              <Link 
                to="/en/contact"
                className="text-xl font-medium inline-block"
                style={{ color: '#2a9d8f' }}
              >
                Build Your Custom AI Agent
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MegaFooter />
    </div>
  );
};

export default AIAgents;