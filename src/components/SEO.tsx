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
};

const BASE_URL = 'https://abdelrrahim.com'; // Your personal website domain

export const SEO = ({
    title,
    description,
    lang,
    alternates,
    ogType = 'website',
    ogImage = `${BASE_URL}/og-image.png`,
    keywords = 'AI solutions, artificial intelligence, machine learning, Algeria AI, business automation, custom AI agents, RAG solutions, deep research, AI consulting, AI development, Abderrahim Kaci Chaouche',
    author = 'Abderrahim Kaci Chaouche',
    robots = 'index, follow',
    canonical
}: SEOProps) => {
    const fullTitle = `${title} | AAIS`;
    const currentCanonical = canonical || `${BASE_URL}${window.location.pathname}`;

    return (
        <Helmet>
            {/* Standard SEO */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content={robots} />
            <link rel="canonical" href={currentCanonical} />

            {/* Performance optimizations */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
            <link rel="preconnect" href="https://aais-solutions.com" />

            {/* Verification tags - Add your verification codes here if needed */}
            {/*
            <meta name="google-site-verification" content="your-google-verification-code" />
            <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
            */}

            {/* Language and Alternates */}
            <html lang={lang} />
            {alternates && alternates.map(({ lang: altLang, href }) => (
                <link key={altLang} rel="alternate" hrefLang={altLang} href={`${BASE_URL}${href}`} />
            ))}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="Abderrahim AI Solutions" />
            <meta property="og:url" content={currentCanonical} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Abderrahim AI Solutions - Advanced AI for Business Transformation" />
            <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'fr_FR'} />
            {alternates && alternates.map(({ lang: altLang }) => (
                 <meta key={altLang} property="og:locale:alternate" content={altLang === 'en' ? 'en_US' : 'fr_FR'} />
            ))}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:image:alt" content="Abderrahim AI Solutions - Advanced AI for Business Transformation" />

            {/* Additional meta tags for better SEO */}
            <meta name="theme-color" content="#2a9d8f" />
            <meta name="msapplication-TileColor" content="#2a9d8f" />
            <meta name="application-name" content="Abderrahim AI Solutions" />

            {/* Person Schema */}
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Abderrahim Kaci Chaouche",
                        "jobTitle": "AI Researcher and Developer",
                        "url": "${BASE_URL}",
                        "image": "${BASE_URL}/profile.jpg",
                        "description": "AI researcher and developer. Winner of first place and Excellence Prize at the National AI Hackathon in Algeria. Researching advanced AI systems including Syntron Architecture and Trafp-ODC.",
                        "alumniOf": [
                            {
                                "@type": "EducationalOrganization",
                                "name": "Algerian Institution"
                            }
                        ],
                        "award": [
                            {
                                "@type": "Award",
                                "name": "First Place National AI Hackathon",
                                "description": "Winner of first place at the National AI Hackathon in Algeria"
                            },
                            {
                                "@type": "Award",
                                "name": "Excellence Prize",
                                "description": "Recipient of the Excellence Prize at the National AI Hackathon in Algeria"
                            }
                        ],
                        "knowsAbout": ["artificial intelligence", "machine learning", "neural networks", "AI research", "deep learning", "computer vision", "natural language processing"],
                        "knowsLanguage": ["English", "French", "Arabic"],
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "Algeria"
                        },
                        "sameAs": [
                            "https://www.linkedin.com/in/abderrahim-kaci-chaouche",
                            "https://github.com/abderrahim-kaci-chaouche",
                            "https://twitter.com/abderrahim_kc"
                        ],
                        "memberOf": [
                            {
                                "@type": "Organization",
                                "name": "AI Research Community"
                            }
                        ]
                    }
                `}
            </script>

            {/* WebSite Schema */}
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Abderrahim Kaci Chaouche - AI Researcher & Developer",
                        "url": "${BASE_URL}",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "${BASE_URL}/search?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        },
                        "description": "Personal website of Abderrahim Kaci Chaouche, AI researcher and developer. Winner of first place and Excellence Prize at the National AI Hackathon in Algeria. Researching advanced AI systems including Syntron Architecture and Trafp-ODC.",
                        "publisher": {
                            "@type": "Person",
                            "name": "Abderrahim Kaci Chaouche"
                        }
                    }
                `}
            </script>

            {/* Breadcrumb Schema - dynamically generated based on current page */}
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "${BASE_URL}${lang === 'fr' ? '/fr' : '/en'}"
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "${title.replace(' | AAIS', '')}",
                            "item": "${currentCanonical}"
                        }]
                    }
                `}
            </script>
        </Helmet>
    );
};
