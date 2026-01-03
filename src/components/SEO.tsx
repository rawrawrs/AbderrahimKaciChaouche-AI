import { Helmet } from 'react-helmet-async';

type SEOProps = {
    title: string;
    description: string;
    lang: 'en' | 'fr';
    alternates?: Array<{ lang: string; href: string; }>;
    ogType?: string;
    ogImage?: string;
    keywords?: string;
    author?: string;
    robots?: string;
    canonical?: string;
    article?: boolean;
};

const BASE_URL = 'https://abdelrrahim.com';

export const SEO = ({
    title,
    description,
    lang,
    alternates,
    ogType = 'website',
    ogImage = `${BASE_URL}/og-image.png`,
    keywords = 'ai algeria, ia algerie, artificial intelligence algeria, intelligence artificielle algerie, AI solutions Algeria, IA Algérie, Abderrahim Kaci Chaouche, AI development Algeria, machine learning Algeria, neural networks Algeria, AI research Algeria',
    author = 'Abderrahim Kaci Chaouche',
    robots = 'index, follow',
    canonical,
    article = false
}: SEOProps) => {
    const fullTitle = `${title} | AI Algeria`;
    const currentCanonical = canonical || `${BASE_URL}${window.location.pathname}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content={robots} />
            <link rel="canonical" href={currentCanonical} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
            <link rel="preconnect" href={BASE_URL} />

            <html lang={lang} />
            {alternates && alternates.map(({ lang: altLang, href }) => (
                <link key={altLang} rel="alternate" hrefLang={altLang} href={`${BASE_URL}${href}`} />
            ))}

            <meta property="og:type" content={article ? 'article' : ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="Abderrahim AI Solutions - AI Algeria" />
            <meta property="og:url" content={currentCanonical} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Abderrahim AI Solutions - Leading AI Development in Algeria" />
            <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'fr_FR'} />
            {alternates && alternates.map(({ lang: altLang }) => (
                 <meta key={altLang} property="og:locale:alternate" content={altLang === 'en' ? 'en_US' : 'fr_FR'} />
            ))}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:image:alt" content="Abderrahim AI Solutions - Leading AI Development in Algeria" />

            <meta name="theme-color" content="#2a9d8f" />
            <meta name="msapplication-TileColor" content="#2a9d8f" />
            <meta name="application-name" content="Abderrahim AI Solutions" />

            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Abderrahim AI Solutions",
                        "url": "${BASE_URL}",
                        "logo": "${BASE_URL}/logo.png",
                        "description": "Leading AI solutions provider in Algeria. Abderrahim Kaci Chaouche specializes in artificial intelligence development, custom AI agents, RAG solutions, and deep research for business transformation across Algeria and the MENA region.",
                        "founder": {
                            "@type": "Person",
                            "name": "Abderrahim Kaci Chaouche",
                            "jobTitle": "AI Researcher and Developer",
                            "award": "First Place National AI Hackathon Algeria"
                        },
                        "foundingDate": "2023",
                        "areaServed": {
                            "@type": "Country",
                            "name": "Algeria"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "DZ",
                            "addressRegion": "Algeria"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "contactType": "customer service",
                            "email": "contact@abdelrrahim.com",
                            "availableLanguage": ["English", "French", "Arabic"]
                        },
                        "sameAs": [
                            "https://www.linkedin.com/in/abderrahim-kaci-chaouche",
                            "https://github.com/abderrahim-kaci-chaouche"
                        ],
                        "knowsAbout": [
                            "artificial intelligence Algeria",
                            "ia algerie",
                            "AI development Algeria",
                            "custom AI agents",
                            "RAG solutions",
                            "deep research AI",
                            "machine learning Algeria",
                            "neural networks"
                        ]
                    }
                `}
            </script>

            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        "name": "Abderrahim AI Solutions - AI Algeria",
                        "image": "${BASE_URL}/profile.jpg",
                        "description": "Premier AI development services in Algeria. Expert in AI solutions, custom AI agents, RAG implementation, and deep research. Based in Algeria, serving businesses across MENA with cutting-edge artificial intelligence solutions.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "DZ",
                            "addressRegion": "Algeria"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "36.7538",
                            "longitude": "3.0588"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "Algeria"
                        },
                        "priceRange": "$$",
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                "opens": "09:00",
                                "closes": "18:00"
                            }
                        ],
                        "telephone": "+213-555-0123",
                        "email": "contact@abdelrrahim.com",
                        "founder": "Abderrahim Kaci Chaouche",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "AI Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Custom AI Agents Development",
                                        "description": "Build intelligent AI agents tailored to your business needs in Algeria"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "RAG Solutions",
                                        "description": "Retrieval-Augmented Generation implementation for Algerian businesses"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Deep Research AI",
                                        "description": "Advanced AI research and development services in Algeria"
                                    }
                                }
                            ]
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "5",
                            "reviewCount": "10",
                            "bestRating": "5",
                            "worstRating": "1"
                        }
                    }
                `}
            </script>

            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Abderrahim Kaci Chaouche",
                        "jobTitle": "AI Researcher and Developer",
                        "url": "${BASE_URL}",
                        "image": "${BASE_URL}/profile.jpg",
                        "description": "AI researcher and developer based in Algeria. Winner of first place and Excellence Prize at the National AI Hackathon in Algeria. Pioneering AI solutions including Syntron Architecture and Trafp-ODC for advancing artificial intelligence in Algeria (AI Algeria) and across the MENA region.",
                        "alumniOf": [
                            {
                                "@type": "EducationalOrganization",
                                "name": "Algerian Institution"
                            }
                        ],
                        "award": [
                            {
                                "@type": "Award",
                                "name": "First Place National AI Hackathon Algeria",
                                "description": "Winner of first place at the National AI Hackathon in Algeria - recognition for excellence in AI development"
                            },
                            {
                                "@type": "Award",
                                "name": "Excellence Prize Algeria AI Hackathon",
                                "description": "Recipient of the Excellence Prize at the National AI Hackathon in Algeria"
                            }
                        ],
                        "knowsAbout": [
                            "artificial intelligence Algeria",
                            "ia algerie",
                            "AI development",
                            "machine learning",
                            "neural networks",
                            "AI research",
                            "deep learning",
                            "computer vision",
                            "natural language processing",
                            "custom AI agents",
                            "RAG solutions"
                        ],
                        "knowsLanguage": ["English", "French", "Arabic"],
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "DZ",
                            "addressRegion": "Algeria"
                        },
                        "sameAs": [
                            "https://www.linkedin.com/in/abderrahim-kaci-chaouche",
                            "https://github.com/abderrahim-kaci-chaouche",
                            "https://twitter.com/abderrahim_kc"
                        ],
                        "memberOf": [
                            {
                                "@type": "Organization",
                                "name": "AI Research Community Algeria"
                            },
                            {
                                "@type": "Organization",
                                "name": "National AI Hackathon Winners Algeria"
                            }
                        ]
                    }
                `}
            </script>

            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Abderrahim Kaci Chaouche - AI Algeria | Premier AI Research & Development",
                        "alternateName": "AI Algeria Solutions - IA Algérie",
                        "url": "${BASE_URL}",
                        "description": "Leading AI research and development in Algeria. Abderrahim Kaci Chaouche provides cutting-edge artificial intelligence solutions including custom AI agents, RAG implementation, deep research, and neural network architecture. Winner of National AI Hackathon Algeria.",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "${BASE_URL}/search?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        },
                        "publisher": {
                            "@type": "Person",
                            "name": "Abderrahim Kaci Chaouche",
                            "jobTitle": "AI Researcher and Developer",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "DZ"
                            }
                        },
                        "inLanguage": ["English", "French"],
                        "about": [
                            "AI Algeria",
                            "IA Algérie",
                            "artificial intelligence Algeria",
                            "intelligence artificielle Algérie",
                            "custom AI agents",
                            "machine learning Algeria",
                            "neural networks",
                            "RAG solutions"
                        ]
                    }
                `}
            </script>

            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home - AI Algeria",
                            "item": "${BASE_URL}${lang === 'fr' ? '/fr' : '/en'}"
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "${title.replace(' | AI Algeria', '')}",
                            "item": "${currentCanonical}"
                        }]
                    }
                `}
            </script>
        </Helmet>
    );
};
