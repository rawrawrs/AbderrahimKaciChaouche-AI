import ScrollingTitle from "@/components/ScrollingTitle";
import aaisIndustryViz from "@/assets/AAISIndustrieViz.png";
import aaisSolutionsViz from "@/assets/AAISSolutionsViz.png";
import aaisAdvantageViz from "@/assets/AAISAdevntageViz.png";

const SecondSection = () => {
  return (
    <section className="w-full bg-background py-12 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Sticky Title */}
          <div className="lg:sticky lg:top-60 lg:h-fit">
            <ScrollingTitle />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-12">
            {/* First Content Block */}
            <div>
              <h3 
                className="text-2xl md:text-3xl lg:text-4xl font-normal mb-3"
                style={{ color: '#264653' }}
              >
                Intelligence, Tailored to Your Industry.
              </h3>
              <p 
                className="text-base md:text-lg leading-relaxed"
                style={{ color: '#264653' }}
              >
                Our AI solutions are designed to meet the unique challenges of every sector. Whether in healthcare, 
                finance, logistics, or retail, we deliver intelligent automation that adapts to your workflows and 
                drives measurable results.
              </p>
              <div className="mt-6">
                <img
                  src={aaisIndustryViz}
                  alt="AI solutions tailored for various industries including healthcare, finance, logistics, and retail"
                  className="w-full max-w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Divider */}
            <div 
              className="w-full h-px"
              style={{ backgroundColor: '#2a9d8f' }}
            ></div>

            {/* Second Content Block */}
            <div>
              <h3 
                className="text-2xl md:text-3xl lg:text-4xl font-normal mb-3"
                style={{ color: '#264653' }}
              >
                AI Solutions for the Problems of Now.
              </h3>
              <p 
                className="text-base md:text-lg leading-relaxed"
                style={{ color: '#264653' }}
              >
                We build AI systems that address the urgent challenges industries face today. Our solutions are 
                practical, adaptable, and designed to deliver immediate impact.
              </p>
              <div className="mt-6">
                <img
                  src={aaisSolutionsViz}
                  alt="Advanced AI solutions addressing current industry challenges and problems"
                  className="w-full max-w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Divider */}
            <div 
              className="w-full h-px"
              style={{ backgroundColor: '#2a9d8f' }}
            ></div>

            {/* Third Content Block */}
            <div>
              <h3 
                className="text-2xl md:text-3xl lg:text-4xl font-normal mb-3"
                style={{ color: '#264653' }}
              >
                Build Competitive Advantage with AI
              </h3>
              <p 
                className="text-base md:text-lg leading-relaxed"
                style={{ color: '#264653' }}
              >
                Use AI to sharpen your edge in the market. From streamlining operations to unlocking new growth opportunities, our solutions help you move faster, work smarter, and stay ahead of the competition.
              </p>
              <div className="mt-6">
                <img
                  src={aaisAdvantageViz}
                  alt="Build competitive advantage with AI solutions for market leadership"
                  className="w-full max-w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;