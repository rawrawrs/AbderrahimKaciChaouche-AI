const FrenchFourthSection = () => {
  return (
    <section className="w-full bg-background py-10 lg:py-16">
      <div className="container mx-auto px-6">
        {/* Title without security icon */}
        <div className="flex justify-center items-center mb-6">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-normal font-inter"
            style={{ color: '#264653' }}
          >
            Sécurité comme fondation
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
                              Solutions cloud
                            </h3>              {/* Description below left branch title */}
              <p
                className="text-base md:text-lg leading-relaxed font-inter mt-4 text-left md:text-center max-w-xs"
                style={{ color: '#264653' }}
              >
                Mes solutions cloud sont conçues avec la sécurité intégrée. Les données sont sécurisées, les accès sont contrôlés et les normes de conformité sont respectées par conception. Vous profitez ainsi de la flexibilité et de l’évolutivité du cloud sans jamais compromettre la confiance.
              </p>
                        </div>
            
                                    
                        {/* Right branch - vertical line down */}            <div className="flex flex-col items-center">
              <div className="w-0.5 h-20 bg-[#2a9d8f] hidden md:block"></div>
                            {/* Title below right branch */}
                            <h3
                              className="text-xl md:text-2xl font-normal font-inter mt-4 text-left md:text-center"
                              style={{ color: '#264653' }}
                            >
                              Solutions locale
                            </h3>
              {/* Description below right branch title */}
              <p
                className="text-base md:text-lg leading-relaxed font-inter mt-4 text-left md:text-center max-w-xs"
                style={{ color: '#264653' }}
              >
                Pour les organisations qui nécessitent un contrôle total, mes solutions locales maintiennent vos données en interne, sur votre machine, et sous votre gestion. Avec une sécurité de niveau entreprise et une conformité stricte, vous bénéficiez de la puissance de l’IA tout en garantissant que vos informations sensibles restent dans votre environnement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrenchFourthSection;