import Navigation from "@/components/Navigation";
import ragImage from "@/assets/AAISragVIZ.png";
import { Link } from "react-router-dom";
import MegaFooter from "@/components/MegaFooter";
import { useEffect } from "react";

const RAG = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
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
            Retrieval Augmented Generation
          </h1>
          
          {/* Description */}
          <div
            className="max-w-6xl mx-auto mb-10 text-xl md:text-2xl px-4 sm:px-8 text-left"
            style={{ color: '#264653' }}
          >
            I develop Enterprise RAG, an advanced AI architecture that combines the precision of information retrieval with the reasoning power of large language models. This approach enables organizations to generate accurate, real-time insights based on their own data, not just what the model was trained on.
          </div>
          
          {/* CTA aligned to the right */}
          <div className="flex justify-end mb-4 px-4 sm:px-8">
            <Link 
              to="/en/contact"
              className="text-xl font-medium"
              style={{ color: '#2a9d8f' }}
            >
              Get Started with RAG
            </Link>
          </div>
          
          {/* Image centered */}
          <div className="flex justify-center px-0 sm:px-8">
            <img 
              src={ragImage} 
              alt="AAIS RAG Visualization" 
              className="w-[100%] sm:max-w-4xl h-auto"
            />
          </div>
          
          {/* Description below the image */}
          <div 
            className="max-w-6xl mx-auto mt-12 mb-10 text-xl md:text-2xl px-2 sm:px-8 text-left"
            style={{ color: '#264653' }}
          >
            RAG systems search, understand, and reason across your enterprise data from reports and databases to project archives and knowledge bases. It transforms your organizational knowledge into a living, searchable intelligence layer that works for you 24/7.
          </div>
          
          {/* Title below the description */}
          <div className="max-w-6xl mx-auto mb-16 px-8">
            <h2 
              className="text-4xl font-normal text-left"
              style={{ color: '#264653' }}
            >
              Enterprise RAG, your company gains:
            </h2>
          </div>
          
          {/* Three rectangles in a row */}
          <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Left rectangle */}
            <div 
              className="border p-6 sm:p-10 h-full"
              style={{ borderColor: '#264653' }}
            >
              <h3 
                className="text-2xl sm:text-3xl font-normal mb-3 sm:mb-4 text-left"
                style={{ color: '#264653' }}
              >
                Accurate and explainable:
              </h3>
              <p 
                className="text-lg sm:text-xl text-left"
                style={{ color: '#264653' }}
              >
                Answers are grounded in your verified data.
              </p>
            </div>
            
            {/* Middle rectangle */}
            <div 
              className="border p-6 sm:p-10 h-full"
              style={{ borderColor: '#264653' }}
            >
              <h3 
                className="text-2xl sm:text-3xl font-normal mb-3 sm:mb-4 text-left"
                style={{ color: '#264653' }}
              >
                Secure and compliant:
              </h3>
              <p 
                className="text-lg sm:text-xl text-left"
                style={{ color: '#264653' }}
              >
                All operations stay within your private environment or secure cloud.
              </p>
            </div>
            
            {/* Right rectangle */}
            <div 
              className="border p-6 sm:p-10 h-full"
              style={{ borderColor: '#264653' }}
            >
              <h3 
                className="text-2xl sm:text-3xl font-normal mb-3 sm:mb-4 text-left"
                style={{ color: '#264653' }}
              >
                Actionnable and intelligent:
              </h3>
              <p 
                className="text-lg sm:text-xl text-left"
                style={{ color: '#264653' }}
              >
                Empowering teams to make faster, evidence-based decisions.
              </p>
            </div>
          </div>
          

        </div>
      </div>
      <MegaFooter />
    </div>
  );
};

export default RAG;