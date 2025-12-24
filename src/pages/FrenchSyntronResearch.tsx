import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import MegaFooter from "@/components/MegaFooter";
import { Link } from "react-router-dom";
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// Reusable ExpandableImage component
const ExpandableImage = ({ src, alt, className = '' }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      setShow(false);
      const timeout = setTimeout(() => setShow(true), 10);
      return () => clearTimeout(timeout);
    } else {
      setShow(false);
    }
  }, [modalOpen]);

  return (
    <>
      <div className="relative group">
        <img
          src={src}
          alt={alt}
          className={className + ' cursor-pointer'}
          onClick={() => setModalOpen(true)}
        />
        <button
          className="absolute top-2 right-2 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
          title="Expand"
          type="button"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7.5 7.5"/><path d="M3 21l7.5-7.5"/></svg>
        </button>
      </div>
      {modalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setModalOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className={`max-w-3xl max-h-[90vh] rounded transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="absolute top-8 right-8 text-white text-3xl font-bold" onClick={() => setModalOpen(false)} title="Close" type="button">&times;</button>
        </div>
      )}
    </>
  );
};

const FrenchSyntronResearch = () => {
  return (
    <div className="min-h-screen bg-background">
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
              23 AOÛT 2025
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight" style={{ color: '#264653' }}>
              Des Neurones aux Syntrons : Le Changement ASI
            </h1>
            <div className="text-base md:text-lg font-inter leading-relaxed max-w-3xl space-y-6 pt-8" style={{ color: '#264653' }}>
              <p>
                L'intelligence artificielle a longtemps été gouvernée par la tyrannie des poids. Depuis les perceptrons jusqu'aux réseaux de neurones profonds, les fondations de l'IA ont tourné autour de l'optimisation de paramètres scalaires qui relient les entrées aux sorties. Ces poids sont ajustés par descente de gradient, formant un assemblage fragile d'associations statistiques. Ce paradigme centré sur les poids, malgré son immense succès, présente des limites inhérentes : il compresse la complexité en nombres statiques, laissant peu de place à l'émergence, au sens ou à une intelligence réellement adaptative.
              </p>
              <p>
                Les nouveaux Syntrons constituent un départ révolutionnaire des architectures neuronales traditionnelles basées sur les poids. Les Syntrons transforment l'intelligence artificielle de l'optimisation statique des paramètres vers des espaces de possibilités dynamiques, permettant une pensée émergente authentique, un raisonnement contrefactuel et une intelligence auto-organisée. Ce changement de paradigme représente un bond fondamental du mécanisme à l'esprit.
              </p>
            </div>

            {/* Images */}
            <div className="pt-8 max-w-3xl">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-2/3">
                  <ExpandableImage
                    src="/images/neuron_chestmnist_evolution_fixed.gif"
                    alt="Syntron Tissue MNIST Two Phase Evolution"
                    className="w-full h-auto object-cover border border-muted"
                  />
                </div>
                <div className="w-full md:w-1/3">
                  <ExpandableImage
                    src="/images/epoch_16_input_heatmap.png"
                    alt="Epoch 16 Input Heatmap"
                    className="w-full h-auto object-cover border border-muted"
                  />
                </div>
              </div>
            </div>

            <div className="text-base md:text-lg font-inter leading-relaxed max-w-3xl space-y-6 pt-8" style={{ color: '#264653' }}>
              <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#264653' }}>1. L'Effondrement de l'IA Centrée sur les Poids : Fondements et Limitations</h2>
              <p>Le paradigme dominant dans l'intelligence artificielle moderne est construit sur une abstraction fondamentale : le neurone artificiel, interconnecté par un réseau de poids statiques et scalaires. L'optimisation de cette vaste matrice de poids via la descente de gradient a été le moteur de la révolution de l'apprentissage profond, produisant des résultats sans précédent dans d'innombrables domaines. Cependant, pour tracer une voie vers une intelligence plus générale et adaptative, nous devons d'abord examiner de manière critique les limitations architecturales inhérentes à ce modèle centré sur les poids.</p>

              <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#264653' }}>1.1 La Tyrannie des Paramètres Scalaires</h2>
              <p>Un réseau de neurones traditionnel encode toute sa connaissance apprise en tant qu'estimation ponctuelle d'une dimension élevée — l'ensemble final des poids optimisés. Chaque poids w est un scalaire déterministe qui représente la force fixe d'une connexion synaptique unique. Ce modèle, bien qu'efficace sur le plan computationnel, impose une structure rigide à la fonction du réseau. Le plan opérationnel du réseau est établi une fois pour toutes à la fin de l'entraînement et reste statique pendant l'inférence. Le réseau apprend ce qu'il faut calculer, mais la manière de calculer est immuable.</p>
              <p>Cette approche est une simplification significative de la computation neuronale biologique, qui présente une reconfiguration fonctionnelle dynamique, une plasticité multi-échelles temporelles et un traitement dépendant du contexte. Une synapse biologique n'est pas un fil statique ; c'est une machine biochimique complexe.</p>

              <h2 className="text-4xl font-bold" style={{ color: '#264653' }}>1.2 Limitations Intrinsèques des Systèmes Basés sur les Poids</h2>
              <p>La dépendance à une matrice de poids statique donne lieu à plusieurs défis fondamentaux qui peuvent représenter un plafond sur les capacités des architectures actuelles :</p>

              <p><strong>Manque de Représentation Intrinsèque de l'Incertitude :</strong> Un poids statique est une estimation ponctuelle ; il ne représente pas intrinsèquement l'incertitude du modèle sur la valeur de ce paramètre. Le réseau peut exprimer l'incertitude dans sa sortie finale (par exemple via une distribution softmax), mais il manque un mécanisme natif pour représenter l'incertitude dans ses propres étapes computationnelles internes.</p>

              <p><strong>Architecture Statique :</strong> L'architecture du réseau est fixe. Sa capacité à apprendre est fondamentalement limitée par le nombre de paramètres définis à l'initialisation. Il ne peut pas décider de manière autonome d'allouer davantage de ressources computationnelles à un aspect particulièrement complexe d'un problème.</p>

              <p><strong>Confusion des Connaissances :</strong> Les connaissances sont confondues en un scalaire unique. Le poids w_ij encode simultanément le type d'opération (par exemple, inhibitrice, excitatrice) et l'ampleur de cette opération. Il n'y a pas de factorisation entre "quoi faire" et "à quel point le faire".</p>

              <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#264653' }}>2. Syntrons : L'Architecture de la Possibilité</h2>
              <p>L'architecture Syntron est une réponse directe à ces limitations. Elle propose une nouvelle unité fondamentale de computation qui remplace le poids statique et scalaire par un processus probabiliste dynamique.</p>

              <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#264653' }}>2.1 Un Changement de Paradigme Fondamental</h2>
              <p>La thèse centrale du Syntron est le remplacement du poids déterministe w par un modèle génératif qui formule la fonction de la connexion à la volée. Ceci est accompli par la factorisation des connaissances en deux composantes distinctes : un vocabulaire partagé d'opérations et une politique locale et apprise pour sélectionner dans cette bibliothèque.</p>
              <p>La connexion est transformée d'un fil passif en une unité computationnelle active qui formule un nouveau plan opérationnel pour chaque passage direct.</p>

              <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#264653' }}>2.2 La Base Primitive : Un Vocabulaire Computationnel Partagé</h2>
              <p>Au cœur de l'architecture Syntron se trouve une bibliothèque partagée et apprise d'opérateurs computationnels fondamentaux appelés Primitives.</p>

              <p><strong>Définition :</strong> Les Primitives constituent un ensemble fini, discret et globalement optimisé de fonctions de base. Elles représentent le "vocabulaire computationnel" universel disponible pour l'ensemble du réseau.</p>

              <p><strong>Généralité :</strong> Ces opérateurs sont abstraits et agnostiques au domaine. Dans une couche entièrement connectée, une primitive pourrait être un simple multiplicateur scalaire. Dans un réseau convolutionnel, une primitive est un noyau convolutionnel entier. La clé est qu'ils sont réutilisables, des blocs computationnels fondamentaux.</p>

              <p><strong>Fonction :</strong> Cette approche permet au réseau d'apprendre un vocabulaire comprimé et globalement optimisé d'opérations puissantes, plutôt que d'apprendre des millions de paramètres uniques et potentiellement redondants à partir de zéro.</p>

              <div className="w-full">
                <ExpandableImage
                  src="/images/syntron_comprehensive.png"
                  alt="Syntron comprehensive"
                  className="w-full h-auto object-cover border border-muted"
                />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#264653' }}>2.3 La Distribution de Mélange : Une Politique Apprise de Possibilités</h2>
              <p>C'est là que l'intelligence locale et adaptative du Syntron est encodée. Chaque connexion unique dans le réseau apprend sa propre politique unique pour choisir dans le vocabulaire partagé de Primitives.</p>

              <p><strong>Mécanisme :</strong> Pour chaque neurone de sortie, le mécanisme de la connexion maintient un vecteur de logit, représentant sa préférence non normalisée pour chaque primitive disponible. Ces logit sont passés à travers une fonction softmax contrôlée par température pour produire une distribution de probabilité catégorique valide.</p>

              <p><strong>Le Résultat :</strong> La sortie de ce processus est une série de possibilités — un tenseur de poids de mélange. Pour une entrée donnée, la connexion calcule une croyance a posteriori sur l'utilité de chaque primitive. La connexion n'est plus définie par un seul nombre, mais par une recette probabiliste flexible d'action.</p>

              <div className="w-full">
                <ExpandableImage
                  src="/images/Smultiplesnapped.png"
                  alt="Syntron multiple coupling hypotheses"
                  className="w-full h-auto object-cover border border-muted"
                />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#264653' }}>2.4 L'Opérateur Émergent : La Computation comme Espérance</h2>
              <p>Avec ce cadre probabiliste, l'opérateur final pour une couche n'est plus un paramètre stocké. C'est une propriété émergente dynamique calculée pour chaque passage direct. L'opérateur effectif est l'espérance des fonctions primitives, pondérée par leurs probabilités de sélection de la distribution de mélange. Cela signifie qu'un seul réseau Syntron peut se comporter comme un ensemble de nombreux réseaux différents, instanciant le "sous-réseau" le plus approprié pour chaque entrée spécifique qu'il rencontre.</p>

              <h2 className="text-2xl sm:text-3xl font-bold pt-8" style={{ color: '#264653' }}>3. Activation des Fonctions Cognitives et Auto-Modification</h2>
              <p>La nature probabiliste et dynamique des Syntrons permet une gamme de fonctionnalités avancées qui sont intractables dans les réseaux statiques traditionnels.</p>

              <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#264653' }}>3.1 Mémoire de Travail Explicite</h2>
              <p>Chaque connexion Syntron maintient une mémoire tampon de son activité récente, stockant une trace temporelle des poids de mélange les plus récemment utilisés. Cela fournit au réseau une mémoire à court terme de ses propres décisions internes. Cette trace de mémoire explicite est un composant crucial pour permettre des comportements plus complexes, offrant une fenêtre sur la dynamique temporelle du processus de prise de décision du réseau et formant une base pour l'adaptation d'ordre supérieur.</p>

              <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#264653' }}>3.2 Plasticité Structurale Dynamique : Un Réseau Qui Apprend à Croître</h2>
              <p>Une caractéristique clé de ma recherche est un mécanisme qui permet au réseau Syntron de modifier sa propre architecture pendant l'entraînement. C'est un comportement piloté par l'état interne du réseau.</p>

              <p><strong>Le Déclencheur - "Intérêt de Queue" :</strong> Le réseau surveille constamment son propre état computationnel via une métrique que j'appelle "Intérêt de Queue". Cette heuristique quantifie un état de "confusion productive" en combinant l'entropie de ses distributions de mélange avec la variance de ses activations.</p>

              <p><strong>L'Événement "Naissance" :</strong> Lorsque "Intérêt de Queue" dépasse un seuil fixé, le mécanisme de contrôle du réseau détermine que son vocabulaire computationnel actuel est insuffisant. Il déclenche un événement de "naissance", ajoutant une nouvelle primitive à sa base partagée. C'est une modification structurelle directe de l'espace d'hypothèses du modèle.</p>

              <p><strong>Adaptation Stable :</strong> Pour assurer la stabilité, ce processus est soigneusement géré. La nouvelle primitive est "initialisée à chaud" sur la base de la moyenne statistique des primitives existantes et entraînées, et l'état interne de l'optimiseur d'entraînement est réinitialisé par programme pour les nouveaux tenseurs de paramètres élargis.</p>

              <p>Cela représente un changement de paradigme de la conception d'une architecture statique vers la conception d'un système doté de la méta-capacité de se concevoir lui-même, croissant en complexité uniquement lorsque son propre état interne indique un besoin de puissance de représentation plus grande.</p>

              <h2 className="text-2xl sm:text-3xl font-bold pt-8" style={{ color: '#264653' }}>4. Implications Philosophiques et Théoriques</h2>
              <p>Le passage d'un paradigme centré sur les poids statiques à un paradigme probabiliste dynamique a des implications profondes qui s'étendent au-delà de l'ingénierie.</p>

              <p>L'architecture Syntron suggère un modèle d'intelligence où l'apprentissage n'est pas simplement l'optimisation d'une fonction fixe, mais le développement d'un langage de computation. Les primitives forment les phonèmes et les morphèmes — les unités de base porteuses de sens — tandis que les distributions de mélange représentent la syntaxe et la sémantique — les règles pour combiner ces unités en "phrases" computationnelles cohérentes.</p>

              <p>Cela reformule la nature de la généralisation. Un réseau traditionnel généralise en trouvant une fonction d'interpolation lisse dans un espace de haute dimension. Un réseau Syntron peut généraliser en découvrant qu'un problème nouveau et invisible peut être résolu par une composition novatrice de ses primitives apprises existantes. Il apprend à "raisonner" avec son vocabulaire computationnel, un processus probablement plus proche de la résolution de problèmes humaine.</p>

              <p>En outre, l'introduction de métriques d'auto-surveillance comme "Intérêt de Queue" et la plasticité structurelle qui en résulte représentent une forme naissante d'introspection computationnelle. Le réseau n'est pas un substrat passif façonné par les données ; c'est un système actif qui évalue ses propres performances et limitations, et prend une action explicite pour y remédier. Cela introduit une boucle de rétroaction non seulement au niveau des poids, mais au niveau de l'architecture elle-même, une étape fondamentale vers des systèmes d'apprentissage plus autonomes et véritablement adaptatifs.</p>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-4">
                  <div className="w-full md:w-1/2">
                    <ExpandableImage
                      src="/images/neuronsorg.jpg"
                      alt="Neurons organization"
                      className="w-full h-auto object-cover border border-muted"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <ExpandableImage
                      src="/images/neuronsorg.avif"
                      alt="Neurons organization in AVIF format"
                      className="w-full h-auto object-cover border border-muted"
                    />
                  </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold pt-8" style={{ color: '#264653' }}>5. Plus de Syntrons = IA Plus Intelligente ?</h2>
              <p>C'est la question de recherche critique et nuancée qui émerge de ce travail. La réponse n'est pas simplement "oui", tout comme un éléphant d'Afrique avec 257 milliards de neurones n'est pas intrinsèquement plus intelligent qu'un humain avec 86 milliards de neurones. L'intelligence émerge de l'efficacité, de la structure et de l'interaction dynamique des composants sous-jacents, pas seulement de leur nombre brut.</p>

              <ExpandableImage
                  src="/images/The-human-brain-is-not-the-largest-Brains-of-a-human-and-of-an-African-elephant-are.png"
                  alt="Comparison of human and elephant brains"
                  className="w-full h-auto object-cover border border-muted"
                />

              <p>Augmenter simplement le nombre de primitives (max_primitives) dès le départ ne conduit pas nécessairement à une "IA plus intelligente". En fait, fournir un vocabulaire trop vaste peut rendre le problème d'apprentissage plus difficile, en augmentant l'espace de recherche pour les distributions de mélange et pouvant conduire à un surajustement ou à une convergence plus lente.</p>

              <p>L'intelligence du système Syntron ne découle pas d'avoir un nombre massif de primitives, mais de l'élégance de l'interaction entre les primitives et les politiques. Un réseau Syntron "plus intelligent" serait un réseau qui :</p>

              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Apprend une Base de Primitives Parcimonieuse et Puissante :</strong> Il découvre un petit ensemble de primitives computationnelles hautement efficaces, orthogonales et réutilisables qui forment une base puissante pour une large gamme de problèmes.</li>
                <li><strong>Développe des Politiques Sophistiquées et Sensibles au Contexte :</strong> Ses distributions de mélange sont nettes et confiantes lorsque la tâche est claire, mais appropriément diffuses et incertaines face à une entrée ambiguë, modélisant efficacement sa propre confiance.</li>
                <li><strong>Exhibe une Plasticité Efficace :</strong> Il ne croît pas de manière indiscriminée. Il ajoute uniquement de nouvelles primitives lorsque son "Intérêt de Queue" indique un échec réel de sa capacité de représentation existante. Un système intelligent ne concerne pas seulement la taille de son vocabulaire, mais le moment où il doit apprendre un nouveau mot.</li>
              </ul>

              <p>Par conséquent, l'objectif n'est pas simplement "plus de Syntrons". L'objectif est de construire des systèmes où l'interaction dynamique entre un vocabulaire compact et puissant et des politiques locales hautement adaptatives conduit à une intelligence émergente, efficace et généralisable. La métrique de succès n'est pas le nombre final de primitives, mais la performance atteinte par primitive et la capacité du système à trouver de manière autonome le niveau optimal de complexité pour une tâche donnée.</p>
            </div>

            <div className="text-base md:text-lg font-inter leading-relaxed max-w-3xl space-y-6 pt-8">
              <div className="bg-muted/30 border border-muted rounded-lg p-6" style={{ backgroundColor: 'rgba(42, 157, 143, 0.1)' }}>
                <h2 className="text-2xl sm:text-3xl mb-4" style={{ color: '#264653' }}>Document de Recherche et Code Disponible Prochainement</h2>
                <p className="text-muted-foreground" style={{ color: '#264653' }}>
                  Le document de recherche complet et le code d'implémentation pour les Syntrons seront publiés prochainement.
                  Restez à l'écoute des mises à jour sur cette approche révolutionnaire de l'intelligence artificielle.
                </p>
              </div>
            </div>


          </div>
        </main>
        <MegaFooter />
      </div>
    </div>
  );
};

export default FrenchSyntronResearch;