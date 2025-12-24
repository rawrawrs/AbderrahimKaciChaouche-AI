import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/AnimatedText";
import { useLocation } from "react-router-dom";

const HeroSection = () => {
  const location = useLocation();
  const currentLanguage = location.pathname.startsWith('/fr') ? 'fr' : 'en';
  
  return (
    <section className="w-full bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start text-left max-w-4xl space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight" style={{ color: '#264653' }}>
            <div className="flex flex-col md:flex-row md:whitespace-nowrap">
              <span>AI for Progress&nbsp;</span>
              <AnimatedText 
                phrases={["Beyond Boundaries", "Through Intelligence", "That Matters"]}
              />
            </div>
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: '#264653' }}>
            Harness the power of AI with Abderrahim kaci chaouche to transform workflows, reduce costs, and
            accelerate growth. Our intelligent solutions adapt, scale, and create lasting impact — solving
            decades-old problems across industries and society
          </p>

          {/* CTA Links */}
          <div className="flex flex-col sm:flex-row gap-8">
            <a 
              href={currentLanguage === 'fr' ? '/fr/contact' : '/en/contact'}
              className="text-accent font-medium text-lg hover:text-accent/80 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Get a Demo
            </a>
            <a
              href={currentLanguage === 'fr' ? '/fr/contact' : '/en/contact'}
              className="text-accent font-medium text-lg hover:text-accent/80 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Launch With Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;