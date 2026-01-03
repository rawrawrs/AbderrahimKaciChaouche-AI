import { Helmet } from 'react-helmet-async';

type ArticleSchemaProps = {
    title: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    url: string;
    image?: string;
    keywords?: string[];
    category?: string;
};

const ArticleSchema = ({
    title,
    description,
    author,
    datePublished,
    dateModified,
    url,
    image = 'https://abdelrrahim.com/og-image.png',
    keywords = [],
    category = 'AI Research'
}: ArticleSchemaProps) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ScholarlyArticle",
        "headline": title,
        "description": description,
        "image": [image],
        "datePublished": datePublished,
        "dateModified": dateModified || datePublished,
        "author": [
            {
                "@type": "Person",
                "name": author,
                "jobTitle": "AI Researcher and Developer",
                "url": "https://abdelrrahim.com",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "DZ",
                    "addressRegion": "Algeria"
                },
                "sameAs": [
                    "https://www.linkedin.com/in/abderrahim-kaci-chaouche",
                    "https://github.com/abderrahim-kaci-chaouche"
                ]
            }
        ],
        "publisher": {
            "@type": "Organization",
            "name": "AI Algeria Solutions",
            "logo": {
                "@type": "ImageObject",
                "url": "https://abdelrrahim.com/logo.png"
            },
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "DZ",
                "addressRegion": "Algeria"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        },
        "isAccessibleForFree": true,
        "hasPart": [
            {
                "@type": "WebPageElement",
                "isAccessibleForFree": true,
                "cssSelector": ".abstract"
            },
            {
                "@type": "WebPageElement",
                "isAccessibleForFree": true,
                "cssSelector": ".introduction"
            }
        ],
        "keywords": keywords.join(", "),
        "articleSection": category,
        "about": [
            {
                "@type": "Thing",
                "name": "artificial intelligence Algeria"
            },
            {
                "@type": "Thing",
                "name": "ia algerie"
            },
            {
                "@type": "Thing",
                "name": "AI research"
            }
        ],
        "inLanguage": "English",
        "license": "https://creativecommons.org/licenses/by/4.0/"
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default ArticleSchema;
