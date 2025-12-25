import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import MegaFooter from "@/components/MegaFooter";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const Research = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Research by Abderrahim Kaci Chaouche - Pushing the Boundaries of AI"
        description="Explore the cutting-edge AI research by Abderrahim Kaci Chaouche, including the revolutionary Syntron Architecture and the training-free Trafp-ODC object detection pipeline. Advanced research in neural architectures and object detection systems."
        lang="en"
        alternates={[{ lang: 'fr', href: '/fr/research' }]}
        keywords="AI research, applied AI research, Syntron Architecture, Trafp-ODC, neural architectures, object detection, artificial intelligence research, machine learning research, Algeria AI research, innovative AI systems"
        author="Abderrahim Kaci Chaouche"
        robots="index, follow"
      />
      {/* Structured content for featured snippets */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "AI Research by Abderrahim Kaci Chaouche - Pushing the Boundaries of AI",
            "author": {
              "@type": "Person",
              "name": "Abderrahim Kaci Chaouche"
            },
            "datePublished": "2025-08-23",
            "dateModified": "2025-08-23",
            "publisher": {
              "@type": "Person",
              "name": "Abderrahim Kaci Chaouche"
            },
            "description": "Explore the cutting-edge AI research by Abderrahim Kaci Chaouche, including the revolutionary Syntron Architecture and the training-free Trafp-ODC object detection pipeline.",
            "articleSection": "Artificial Intelligence Research",
            "keywords": "AI research, Syntron Architecture, Trafp-ODC, neural architectures, object detection"
          }
        `}
      </script>
      <Navigation />
      <div className="container mx-auto px-6 py-16">
        {/* Title and Description Section */}
        <div className="text-center mb-32">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6"
            style={{ color: '#264653' }}
          >
            Pushing the Boundaries of Applied AI Research
          </h1>
          <p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ color: '#264653' }}
          >
            Advancing knowledge and innovation in artificial intelligence
          </p>
        </div>

        {/* Research Section - Syntron Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Left Part - Syntron Architecture */}
          <div className="text-left">
            <h2
              className="text-3xl md:text-4xl font-normal mb-4"
              style={{ color: '#264653' }}
            >
              Syntron Architecture
            </h2>
            <p
              className="text-lg md:text-xl"
              style={{ color: '#264653' }}
            >
              From Neurons to Syntrons: A revolutionary departure from traditional weight-based neural architectures
            </p>
          </div>

          {/* Right Part - Syntron Description */}
          <div className="text-left">
            <p
              className="text-lg md:text-xl mb-6"
              style={{ color: '#264653' }}
            >
              Syntrons are a revolutionary departure from traditional weight-based neural architectures. Syntrons transform artificial intelligence from static parameter optimization into dynamic possibility spaces, enabling genuine emergent thought, counterfactual reasoning, and self-organizing intelligence.
            </p>
            <div className="flex items-center">
              <Link
                to="/research/syntron"
                className="text-lg font-medium flex items-center"
                style={{ color: '#2a9d8f' }}
              >
                View the Research
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-5 w-5"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Research Section - Trafp-ODC */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Part - Trafp-ODC */}
          <div className="text-left">
            <h2
              className="text-3xl md:text-4xl font-normal mb-4"
              style={{ color: '#264653' }}
            >
              Trafp-ODC
            </h2>
            <p
              className="text-lg md:text-xl"
              style={{ color: '#264653' }}
            >
              Training-Free Pipeline for Object Detection and Classification. Trafp-ODC makes it possible to recognize objects without the need for training complex AI models.
            </p>
          </div>

          {/* Right Part - Trafp-ODC Description */}
          <div className="text-left">
            <p
              className="text-lg md:text-xl mb-6"
              style={{ color: '#264653' }}
            >
              Trafp-ODC is a transformative leap in object detection. This new approach makes it possible to recognize objects without the need for training complex AI models. It works by analyzing images, identifying key regions, and understanding their structure intelligently.
            </p>
            <div className="flex items-center">
              <Link
                to="/research/trafpodc"
                className="text-lg font-medium flex items-center"
                style={{ color: '#2a9d8f' }}
              >
                View the Research
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-5 w-5"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MegaFooter />
    </div>
  );
};

export default Research;