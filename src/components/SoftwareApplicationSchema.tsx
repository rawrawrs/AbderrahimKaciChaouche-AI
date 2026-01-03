import { Helmet } from 'react-helmet-async';

type SoftwareApplicationSchemaProps = {
    name: string;
    description: string;
    url: string;
    applicationCategory?: string;
    operatingSystem?: string;
    offers?: {
        price: string;
        priceCurrency: string;
        availability: string;
    };
    features?: string[];
    screenshot?: string;
    aggregateRating?: {
        ratingValue: number;
        reviewCount: number;
    };
};

const SoftwareApplicationSchema = ({
    name,
    description,
    url,
    applicationCategory = 'BusinessApplication',
    operatingSystem = 'Web',
    offers = {
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
    },
    features = [],
    screenshot = 'https://abdelrrahim.com/og-image.png',
    aggregateRating
}: SoftwareApplicationSchemaProps) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": name,
        "description": description,
        "url": url,
        "applicationCategory": applicationCategory,
        "operatingSystem": operatingSystem,
        "browserRequirements": "Requires JavaScript. Compatible with all modern browsers.",
        "offers": {
            "@type": "Offer",
            "price": offers.price,
            "priceCurrency": offers.priceCurrency,
            "availability": offers.availability,
            "seller": {
                "@type": "Organization",
                "name": "AI Algeria Solutions",
                "url": "https://abdelrrahim.com",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "DZ",
                    "addressRegion": "Algeria"
                }
            }
        },
        "featureList": features,
        "screenshot": screenshot,
        "softwareVersion": "1.0",
        "datePublished": "2024",
        "author": {
            "@type": "Person",
            "name": "Abderrahim Kaci Chaouche",
            "jobTitle": "AI Researcher and Developer",
            "url": "https://abdelrrahim.com",
            "award": "First Place National AI Hackathon Algeria",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "DZ",
                "addressRegion": "Algeria"
            }
        },
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
        "about": [
            {
                "@type": "Thing",
                "name": "artificial intelligence Algeria"
            },
            {
                "@type": "Thing",
                "name": "ia algerie"
            }
        ],
        "inLanguage": "English"
    };

    if (aggregateRating) {
        (schema as { aggregateRating?: unknown }).aggregateRating = {
            "@type": "AggregateRating",
            "ratingValue": aggregateRating.ratingValue,
            "reviewCount": aggregateRating.reviewCount,
            "bestRating": "5",
            "worstRating": "1"
        };
    }

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default SoftwareApplicationSchema;
