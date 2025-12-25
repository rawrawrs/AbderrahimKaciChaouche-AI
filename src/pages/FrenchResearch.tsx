import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import MegaFooter from "@/components/MegaFooter";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const FrenchResearch = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Recherche IA par Abderrahim Kaci Chaouche - Repousser les Limites de l'IA"
        description="Explorez la recherche avancée en IA par Abderrahim Kaci Chaouche, y compris l'architecture révolutionnaire Syntron et le pipeline de détection d'objets sans entraînement Trafp-ODC. Recherche de pointe en architectures neuronales et systèmes de détection d'objets."
        lang="fr"
        alternates={[{ lang: 'en', href: '/en/research' }]}
        keywords="recherche IA, recherche IA appliquée, architecture Syntron, Trafp-ODC, architectures neuronales, détection d'objets, recherche intelligence artificielle, recherche machine learning, recherche IA Algérie, systèmes IA innovants"
        author="Abderrahim Kaci Chaouche"
        robots="index, follow"
      />
      {/* Structured content for featured snippets */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Recherche IA par Abderrahim Kaci Chaouche - Repousser les Limites de l'IA",
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
            "description": "Explorez la recherche avancée en IA par Abderrahim Kaci Chaouche, y compris l'architecture révolutionnaire Syntron et le pipeline de détection d'objets sans entraînement Trafp-ODC.",
            "articleSection": "Recherche en Intelligence Artificielle",
            "keywords": "recherche IA, architecture Syntron, Trafp-ODC, architectures neuronales, détection d'objets"
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
            Repousser les Limites de la Recherche en IA Appliquée
          </h1>
          <p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ color: '#264653' }}
          >
            Faire progresser la connaissance et l'innovation dans l'intelligence artificielle
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
              Architecture Syntron
            </h2>
            <p
              className="text-lg md:text-xl"
              style={{ color: '#264653' }}
            >
              Des Neurones aux Syntrons : Un départ révolutionnaire des architectures neuronales traditionnelles basées sur les poids
            </p>
          </div>

          {/* Right Part - Syntron Description */}
          <div className="text-left">
            <p
              className="text-lg md:text-xl mb-6"
              style={{ color: '#264653' }}
            >
              Les Syntrons constituent un départ révolutionnaire des architectures neuronales traditionnelles basées sur les poids. Les Syntrons transforment l'intelligence artificielle de l'optimisation statique des paramètres vers des espaces de possibilités dynamiques, permettant une pensée émergente authentique, un raisonnement contrefactuel et une intelligence auto-organisée.
            </p>
            <div className="flex items-center">
              <Link
                to="/fr/research/syntron"
                className="text-lg font-medium flex items-center"
                style={{ color: '#2a9d8f' }}
              >
                Voir la Recherche
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
              Pipeline sans Entraînement pour la Détection et la Classification d'Objets. Trafp-ODC permet de reconnaître des objets sans avoir besoin d'entraîner des modèles d'IA complexes.
            </p>
          </div>

          {/* Right Part - Trafp-ODC Description */}
          <div className="text-left">
            <p
              className="text-lg md:text-xl mb-6"
              style={{ color: '#264653' }}
            >
              Trafp-ODC est un bond transformateur dans la détection d'objets. Cette nouvelle approche permet de reconnaître des objets sans avoir besoin d'entraîner des modèles d'IA complexes. Elle fonctionne en analysant les images, en identifiant les régions clés et en comprenant leur structure intelligemment.
            </p>
            <div className="flex items-center">
              <Link
                to="/fr/research/trafpodc"
                className="text-lg font-medium flex items-center"
                style={{ color: '#2a9d8f' }}
              >
                Voir la Recherche
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

export default FrenchResearch;