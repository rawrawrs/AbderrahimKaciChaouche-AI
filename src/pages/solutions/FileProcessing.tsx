import Navigation from "@/components/Navigation";
import aaisFileProcessingImage from "@/assets/AAIScustomfileprocessingVIZ.png";
import { Link } from "react-router-dom";
import MegaFooter from "@/components/MegaFooter";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";

const FileProcessing = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="File Processing by Abderrahim Kaci Chaouche - Advanced AI Development"
        description="Data and file processing systems development by Abderrahim Kaci Chaouche, AI researcher and developer. Transforming raw data and files into clear, intelligent outcomes."
        lang="en"
        alternates={[{ lang: 'fr', href: '/fr/solutions/fileprocessing' }]}
        keywords="file processing, data processing, AI development, artificial intelligence, machine learning, data transformation, intelligent outcomes, Abderrahim Kaci Chaouche"
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
            Data and File Processing
          </h1>
          
          {/* Description */}
          <div
            className="max-w-6xl mx-auto mb-10 text-xl md:text-2xl px-4 sm:px-8 text-left"
            style={{ color: '#264653' }}
          >
            Transforming Data and Files Into Actionable Intelligence. I design custom file processing systems that turn your raw data and files into clear, intelligent outcomes. Whether it's structured data, reports, or medical files, my AI solutions analyze, interpret, and generate accurate results based on your specific objectives.
          </div>
          
          {/* CTA aligned to the right */}
          <div className="flex justify-end mb-4 px-4 sm:px-8">
            <Link 
              to="/en/contact"
              className="text-xl font-medium"
              style={{ color: '#2a9d8f' }}
            >
              Get File Processing
            </Link>
          </div>
          
          {/* Image centered */}
          <div className="flex justify-center px-0 sm:px-8">
            <img
              src={aaisFileProcessingImage}
              alt="Data and file processing system visualization showing AI transforming raw data into actionable intelligence"
              className="w-[100%] sm:max-w-4xl h-auto"
              loading="lazy"
            />
          </div>
          
          {/* New section below the image */}
          <div className="max-w-6xl mx-auto mt-12 px-2 sm:px-8">
            <h2 
              className="text-3xl md:text-4xl font-normal mb-4 text-left"
              style={{ color: '#264653' }}
            >
              Trusted for Endless Use Cases
            </h2>
            
            <div 
              className="text-xl md:text-2xl text-left mb-6"
              style={{ color: '#264653' }}
            >
              Imagine a doctor uploading patient biomarkers to predict cancer risk, or an enterprise uploading production data to forecast demand. Our file processing AI makes it possible securely, efficiently, and with complete customization.
            </div>
            
            {/* CTA aligned to the right */}
            <div className="flex justify-end mb-20">
              <Link 
                to="/en/contact"
                className="text-xl font-medium"
                style={{ color: '#2a9d8f' }}
              >
                Start Your File Processing
              </Link>
            </div>
            
            {/* Features list with lines and text */}
            <div className="space-y-8 mt-8">
              <div className="flex items-start">
                <div className="w-24 pt-3">
                  <div className="border-t-2 border-[#264653] w-full" style={{ height: '2px' }}></div>
                </div>
                <div className="flex-1 text-2xl md:text-3xl pl-16 text-left" style={{ color: '#264653' }}>
                  Ask questions directly from your data and get instant, AI-driven answers.
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-24 pt-3">
                  <div className="border-t-2 border-[#264653] w-full" style={{ height: '2px' }}></div>
                </div>
                <div className="flex-1 text-2xl md:text-3xl pl-16 text-left" style={{ color: '#264653' }}>
                  Build predictive models tailored to your field and data type.
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-24 pt-3">
                  <div className="border-t-2 border-[#264653] w-full" style={{ height: '2px' }}></div>
                </div>
                <div className="flex-1 text-2xl md:text-3xl pl-16 text-left" style={{ color: '#264653' }}>
                  Restructure and organize files into meaningful, usable formats.
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-24 pt-3">
                  <div className="border-t-2 border-[#264653] w-full" style={{ height: '2px' }}></div>
                </div>
                <div className="flex-1 text-2xl md:text-3xl pl-16 text-left" style={{ color: '#264653' }}>
                  Integrate processing pipelines with your existing tools and systems.
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-24 pt-3">
                  <div className="border-t-2 border-[#264653] w-full" style={{ height: '2px' }}></div>
                </div>
                <div className="flex-1 text-2xl md:text-3xl pl-16 text-left" style={{ color: '#264653' }}>
                  Keep your data private and secure through local or controlled deployment.
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

export default FileProcessing;