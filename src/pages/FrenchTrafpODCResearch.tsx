import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import MegaFooter from "@/components/MegaFooter";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const FrenchTrafpODCResearch = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Recherche Trafp-ODC par Abderrahim Kaci Chaouche - Détection d'Objets Sans Entraînement"
        description="Pipeline Sans Entraînement pour la Détection et la Classification d'Objets par Abderrahim Kaci Chaouche. Approche révolutionnaire pour reconnaître des objets sans entraîner des modèles IA complexes, en utilisant l'analyse d'images intelligente et la compréhension structurelle."
        lang="fr"
        alternates={[{ lang: 'en', href: '/en/research/trafpodc' }]}
        keywords="Trafp-ODC, détection d'objets sans entraînement, classification d'objets, reconnaissance IA d'objets, analyse d'images, vision par ordinateur, recherche IA Algérie, détection d'objets avancée, apprentissage zéro-shot, compréhension visuelle"
        author="Abderrahim Kaci Chaouche"
        robots="index, follow"
      />
      <Navigation />
      <div className="pt-6">
        <main className="min-h-screen flex items-center justify-center px-6 md:px-8 py-20">
          <div className="max-w-4xl mx-auto text-left space-y-8">
            <div className="mb-12">
              <Link 
                to="/fr/research" 
                className="inline-flex items-center text-lg font-medium"
                style={{ color: '#2a9d8f' }}
              >
                ← Retour à la Recherche
              </Link>
            </div>
            
            <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider" style={{ color: '#2a9d8f' }}>
              11 JUIN 2025
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight" style={{ color: '#264653' }}>
              Pipeline Sans Entraînement pour la Détection et la Classification d'Objets
            </h1>

            <div className="text-base md:text-lg font-inter leading-relaxed max-w-3xl space-y-6 pt-8" style={{ color: '#264653' }}>
              <p>
                Je suis ravi d'annoncer une percée transformatrice dans la détection d'objets avec TRAFP-ODC. Cette nouvelle approche permet de reconnaître des objets sans avoir besoin d'entraîner des modèles d'IA complexes. Elle fonctionne en analysant les images, en identifiant les régions clés et en comprenant leur structure intelligemment. Des techniques avancées sont utilisées en arrière-plan pour faire correspondre les éléments visuels avec des exemples de référence. Le résultat est un système rapide, flexible et convivial qui s'adapte facilement à différentes tâches visuelles.
              </p>

              <p>
                Il ouvre la voie à une compréhension visuelle puissante, sans les barrières habituelles liées aux données, au temps ou à l'expertise. Sur cette page, je partage l'intégralité du document de recherche, la méthodologie détaillée et les principales découvertes pour vous aider à explorer et comprendre cette innovation.
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
                Voir le Document de Recherche
              </a>
            </div>

            {/* Value Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
              {/* Zero Training */}
              <div className="p-8 border border-[#2a9d8f] bg-background space-y-6">
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider" style={{ color: '#2a9d8f' }}>
                  PAS BESOIN D'ENTRAÎNEMENT
                </div>
                <div className="space-y-2">
                  <div className="text-5xl md:text-6xl font-bold" style={{ color: '#264653' }}>
                    Zéro
                  </div>
                  <div className="text-lg" style={{ color: '#2a9d8f' }}>
                    Entraînement
                  </div>
                </div>
              </div>

              {/* No Black Box */}
              <div className="p-8 border border-[#2a9d8f] bg-background space-y-6">
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider" style={{ color: '#2a9d8f' }}>
                  CONTRÔLE ET COMPRÉHENSION TOTAUX
                </div>
                <div className="space-y-2">
                  <div className="text-5xl md:text-6xl font-bold" style={{ color: '#264653' }}>
                    Pas de
                  </div>
                  <div className="text-lg" style={{ color: '#2a9d8f' }}>
                    Boîte noire
                  </div>
                </div>
              </div>

              {/* 91%-99% Accuracy */}
              <div className="p-8 border border-[#2a9d8f] bg-background space-y-6">
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider" style={{ color: '#2a9d8f' }}>
                  91 À 99 POUR CENT PRÉCIS
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold" style={{ color: '#264653' }}>
                    91%-99%
                  </div>
                  <div className="text-lg" style={{ color: '#2a9d8f' }}>
                    Précision
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

export default FrenchTrafpODCResearch;