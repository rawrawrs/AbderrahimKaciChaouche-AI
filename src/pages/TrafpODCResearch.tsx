import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import MegaFooter from "@/components/MegaFooter";
import { Link } from "react-router-dom";

const TrafpODCResearch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-6">
        {/* Main Content */}
        <main className="min-h-screen flex items-center justify-center px-6 md:px-8 py-20">
          <div className="max-w-4xl mx-auto text-left space-y-8">
            <div className="mb-12">
              <Link 
                to="/en/research" 
                className="inline-flex items-center text-lg font-medium"
                style={{ color: '#2a9d8f' }}
              >
                ← Back to Research
              </Link>
            </div>
            
            {/* Date */}
            <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider" style={{ color: '#2a9d8f' }}>
              JUNE 11, 2025
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight" style={{ color: '#264653' }}>
              Training-Free Pipeline for Object Detection and Classification
            </h1>

            {/* Main Content Text */}
            <div className="text-base md:text-lg font-inter leading-relaxed max-w-3xl space-y-6 pt-8" style={{ color: '#264653' }}>
              <p>
                I am thrilled to introduce a transformative leap in object detection with TRAFP-ODC. This new approach makes it possible to recognize objects without the need for training complex AI models. It works by analyzing images, identifying key regions, and understanding their structure intelligently. Advanced techniques are used behind the scenes to match visual elements with reference examples. The result is a fast, flexible, and user-friendly system that adapts to different visual tasks with ease.
              </p>

              <p>
                It opens the door to powerful visual understanding, without the usual barriers of data, time, or expertise. On this page, I share the full research paper, detailed methodology, and key insights to help you explore and understand this innovation.
              </p>
            </div>

            {/* Research Paper Button */}
            <div className="pt-8">
              <a
                href="/pdfs/Trafp-odc.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-[#264653] text-[#264653] hover:bg-[#264653] hover:text-white transition-colors duration-300 font-inter"
              >
                View Research Paper
              </a>
            </div>

            {/* Value Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
              {/* Zero Training */}
              <div className="p-8 border border-[#2a9d8f] bg-background space-y-6">
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider" style={{ color: '#2a9d8f' }}>
                  NO NEED TO TRAIN
                </div>
                <div className="space-y-2">
                  <div className="text-5xl md:text-6xl font-bold" style={{ color: '#264653' }}>
                    Zero
                  </div>
                  <div className="text-lg" style={{ color: '#2a9d8f' }}>
                    Training
                  </div>
                </div>
              </div>

              {/* No Black Box */}
              <div className="p-8 border border-[#2a9d8f] bg-background space-y-6">
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider" style={{ color: '#2a9d8f' }}>
                  FULL CONTROL AND UNDERSTANDING
                </div>
                <div className="space-y-2">
                  <div className="text-5xl md:text-6xl font-bold" style={{ color: '#264653' }}>
                    No
                  </div>
                  <div className="text-lg" style={{ color: '#2a9d8f' }}>
                    Black box
                  </div>
                </div>
              </div>

              {/* 91%-99% Accuracy */}
              <div className="p-8 border border-[#2a9d8f] bg-background space-y-6">
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider" style={{ color: '#2a9d8f' }}>
                  91 TO 99 PERCENT ACCURATE
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold" style={{ color: '#264653' }}>
                    91%-99%
                  </div>
                  <div className="text-lg" style={{ color: '#2a9d8f' }}>
                    Accuracy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>


        <MegaFooter />
      </div>
    </div>
  );
};

export default TrafpODCResearch;