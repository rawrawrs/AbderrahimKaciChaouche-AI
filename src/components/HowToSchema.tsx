import { Helmet } from 'react-helmet-async';

type HowToSchemaProps = {
    name: string;
    description: string;
    steps: Array<{
        name: string;
        text: string;
        image?: string;
    }>;
    estimatedCost?: string;
    totalTime?: string;
    tool?: string[];
};

const HowToSchema = ({
    name,
    description,
    steps,
    estimatedCost = "Contact for pricing",
    totalTime = "Varies by project",
    tool = []
}: HowToSchemaProps) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": name,
        "description": description,
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": estimatedCost
        },
        "totalTime": {
            "@type": "Duration",
            "name": totalTime
        },
        "tool": tool.length > 0 ? tool : ["Custom AI Solutions", "AI Agents", "RAG Systems"],
        "step": steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name,
            "text": step.text,
            ...(step.image && { "image": step.image })
        })),
        "supply": [
            {
                "@type": "HowToSupply",
                "name": "Business Requirements"
            },
            {
                "@type": "HowToSupply",
                "name": "Data Sources"
            },
            {
                "@type": "HowToSupply",
                "name": "Integration Requirements"
            }
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default HowToSchema;
