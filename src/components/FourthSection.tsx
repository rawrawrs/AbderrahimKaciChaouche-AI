const FourthSection = () => {
  return (
    <section className="w-full bg-background py-10 lg:py-16">
      <div className="container mx-auto px-6">
        {/* Title without security icon */}
        <div className="flex justify-center items-center mb-6">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-normal font-inter"
            style={{ color: '#264653' }}
          >
            Security as a Foundation
          </h2>
        </div>

        {/* Branching Diagram */}
        <div className="flex flex-col items-center">
          {/* Central connecting line - made significantly taller */}
          <div className="w-0.5 h-20 bg-[#2a9d8f] hidden md:block"></div>

          {/* T-connector - single horizontal line connecting both branches */}
          <div className="hidden md:flex justify-center w-full px-4">
            <div className="h-0.5 bg-[#2a9d8f] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"></div>
          </div>

          {/* Branches extending down from the T-connector */}
          <div className="flex flex-col md:flex-row md:justify-between w-full max-w-4xl gap-y-10 md:gap-x-10">
            {/* Left branch - vertical line down */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-20 bg-[#2a9d8f] hidden md:block"></div>
              {/* Title below left branch */}
              <h3
                className="text-xl md:text-2xl font-normal font-inter mt-4 text-left md:text-center"
                style={{ color: '#264653' }}
              >
                On cloud solutions
              </h3>
              {/* Description below left branch title */}
              <p
                className="text-base md:text-lg leading-relaxed font-inter mt-4 text-left md:text-center max-w-xs"
                style={{ color: '#264653' }}
              >
                Our on-cloud solutions are built with security at the core. Data is secured, access is controlled, and compliance standards are met by design — ensuring your business benefits from the scalability of the cloud without compromising trust.
              </p>
            </div>

            {/* Right branch - vertical line down */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-20 bg-[#2a9d8f] hidden md:block"></div>
              {/* Title below right branch */}
              <h3
                className="text-xl md:text-2xl font-normal font-inter mt-4 text-left md:text-center"
                style={{ color: '#264653' }}
              >
                Local Host Solutions
              </h3>
              {/* Description below right branch title */}
              <p
                className="text-base md:text-lg leading-relaxed font-inter mt-4 text-left md:text-center max-w-xs"
                style={{ color: '#264653' }}
              >
                For organizations that require maximum control, our local host solutions keep your data on-site and under your management. With enterprise-grade security and full compliance, you gain the reliability of AI while ensuring sensitive information never leaves your environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;