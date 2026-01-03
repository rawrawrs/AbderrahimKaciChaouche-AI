import ScrollingTitle from "@/components/ScrollingTitle";
import aaisIndustryViz from "@/assets/AAISIndustrieViz.png";
import aaisSolutionsViz from "@/assets/AAISSolutionsViz.png";
import aaisAdvantageViz from "@/assets/AAISAdevntageViz.png";

const FrenchSecondSection = () => {
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
                Une intelligence adaptée à votre secteur.
              </h3>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: '#264653' }}
              >
                Mes solutions d’IA sont conçues pour répondre aux défis uniques de chaque secteur. Que ce soit dans la santé, la finance, la logistique ou le commerce de détail, je propose une automatisation intelligente qui s’adapte à vos flux de travail et génère des résultats mesurables.
              </p>
              <div className="mt-6">
                <img
                  src={aaisIndustryViz}
                  alt="Solutions d'IA adaptées à divers secteurs d'activité y compris la santé, la finance, la logistique et le commerce de détail"
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
                Des solutions d’IA pour les problèmes d’aujourd’hui.
              </h3>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: '#264653' }}
              >
                Je développe des systèmes d’IA qui répondent aux défis urgents auxquels les industries sont confrontées aujourd’hui. Mes solutions sont pratiques, adaptables et conçues pour générer un impact immédiat.
              </p>
              <div className="mt-6">
                <img
                  src={aaisSolutionsViz}
                  alt="Solutions d'IA avancées pour résoudre les défis actuels des industries"
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
                Construisez votre avantage concurrentiel avec l’IA
              </h3>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: '#264653' }}
              >
                Exploitez l’IA pour affiner votre avantage sur le marché. De l’optimisation des opérations à l’ouverture de nouvelles opportunités de croissance, mes solutions vous aident à aller plus vite, travailler plus intelligemment et rester en avance sur la concurrence.
              </p>
              <div className="mt-6">
                <img
                  src={aaisAdvantageViz}
                  alt="Construisez votre avantage concurrentiel avec les solutions d'IA pour le leadership sur le marché"
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

export default FrenchSecondSection;