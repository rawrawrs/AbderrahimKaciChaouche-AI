import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import MegaFooter from "@/components/MegaFooter";
import { useEffect, useState } from "react";
import visionImage1 from "@/assets/VisionDemoChangingImages/AAISvisionVIZ1.png";
import visionImage2 from "@/assets/VisionDemoChangingImages/AAISvisionVIZ2.webp";
import visionImage3 from "@/assets/VisionDemoChangingImages/AAIScarVIZ4.png";
import visionImage4 from "@/assets/VisionDemoChangingImages/AAISfactoryVIZ3.webp";
import visionImage5 from "@/assets/VisionDemoChangingImages/AAISppedetectionVIZ6.webp";
import visionImage6 from "@/assets/VisionDemoChangingImages/AAISsecurityVIZ5.avif";
import { SEO } from "@/components/SEO";

const VisionAI = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    visionImage1,
    visionImage2,
    visionImage3,
    visionImage4,
    visionImage5,
    visionImage6,
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Auto rotate images every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Vision Solutions by Abderrahim Kaci Chaouche - Advanced AI Development"
        description="AI Vision solutions development by Abderrahim Kaci Chaouche, AI researcher and developer. Advanced computer vision systems for object detection, facial recognition, medical imaging, and industrial inspection."
        lang="en"
        alternates={[{ lang: 'fr', href: '/fr/solutions/visionai' }]}
        keywords="AI vision, computer vision, object detection, facial recognition, medical imaging, industrial inspection, AI development, artificial intelligence, Abderrahim Kaci Chaouche"
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
            AI Vision Solutions
          </h1>

          {/* Description */}
          <div
            className="max-w-6xl mx-auto mb-10 text-xl md:text-2xl px-4 sm:px-8 text-left"
            style={{ color: '#264653' }}
          >
            I develop and deploy advanced AI Vision solutions that enable machines to see, understand, and act on visual data. My systems transform images and video streams into real-time intelligence. From object detection and facial recognition to medical imaging, industrial inspection, or surveillance, my Vision AI solutions are custom-built to match your operational needs, infrastructure, and industry requirements.
          </div>

          {/* CTA aligned to the right */}
          <div className="flex justify-end mb-12 px-4 sm:px-8">
            <Link
              to="/en/contact"
              className="text-xl font-medium"
              style={{ color: '#2a9d8f' }}
            >
              Build Your Vision AI System
            </Link>
          </div>

          {/* Image carousel centered */}
          <div className="flex justify-center px-0 sm:px-8 mb-16">
            <div className="relative w-full max-w-4xl overflow-hidden rounded-lg">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`AI Vision solution demonstrating visual data analysis and object detection capabilities - Image ${index + 1}`}
                  className={`w-full h-auto transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                  loading="lazy"
                />
              ))}

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Description below the image */}
          <div
            className="max-w-6xl mx-auto mt-12 mb-10 text-xl md:text-2xl px-2 sm:px-8 text-left"
            style={{ color: '#264653' }}
          >
            My Vision AI solutions leverage cutting-edge computer vision algorithms to interpret and understand visual data in real time. Whether for quality control in manufacturing, security surveillance, autonomous vehicle navigation, or enhancing medical diagnosis, my systems provide accurate and reliable visual insights tailored to your specific use case.
          </div>

          {/* Case Study Section */}
          <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-16">
            <h2
              className="text-4xl md:text-5xl font-normal mb-6 text-left"
              style={{ color: '#264653' }}
            >
              Case Study
            </h2>

            <h3
              className="text-2xl md:text-3xl font-normal mb-2 text-left"
              style={{ color: '#264653' }}
            >
              Leading Window & Door Manufacturer
            </h3>

            <p
              className="text-xl md:text-2xl mb-12 text-left"
              style={{ color: '#2a9d8f' }}
            >
              Vision AI inspections lead to 40% less customer returns
            </p>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Left part */}
              <div className="md:w-1/2">
                <p
                  className="text-lg md:text-xl text-left mb-6"
                  style={{ color: '#264653' }}
                >
                  <span className="font-semibold">Challenge</span> Product defects were leaving the factory undetected, leading to increased costs and reduced customer satisfaction.
                </p>

                <p
                  className="text-lg md:text-xl text-left mb-6"
                  style={{ color: '#264653' }}
                >
                  <span className="font-semibold">Solution</span> The deployed edge-optimized Vision AI inspection system across 18 production facilities. The system continuously monitors product specifications, color consistency, and dimensional accuracy in real time, detecting even minor deviations.
                </p>

                <p
                  className="text-lg md:text-xl text-left mb-8"
                  style={{ color: '#264653' }}
                >
                  <span className="font-semibold">Impact</span> By enabling instant alerts and historical defect tracking, production teams significantly reduced quality issues—resulting in a 40% decrease in customer return requests.
                </p>

                <div className="flex justify-start">
                  <Link
                    to="/en/contact"
                    className="text-xl font-medium"
                    style={{ color: '#2a9d8f' }}
                  >
                    Request a Vision AI
                  </Link>
                </div>
              </div>

              {/* Right part */}
              <div className="md:w-1/2 border-l border-[#264653] pl-8">
                <div className="mb-6 pb-6 border-b border-[#264653]">
                  <p
                    className="text-3xl font-bold text-right"
                    style={{ color: '#264653' }}
                  >
                    $8 million
                  </p>
                  <p
                    className="text-lg text-right mt-2"
                    style={{ color: '#264653' }}
                  >
                    Reduced losses through automated defect detection
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-[#264653]">
                  <p
                    className="text-3xl font-bold text-right"
                    style={{ color: '#264653' }}
                  >
                    90%
                  </p>
                  <p
                    className="text-lg text-right mt-2"
                    style={{ color: '#264653' }}
                  >
                    Reduced manual inventory tracking time
                  </p>
                </div>

                <div className="pb-0">
                  <p
                    className="text-3xl font-bold text-right"
                    style={{ color: '#264653' }}
                  >
                    60%
                  </p>
                  <p
                    className="text-lg text-right mt-2"
                    style={{ color: '#264653' }}
                  >
                    Reduced product return rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MegaFooter />
    </div>
  );
};

export default VisionAI;