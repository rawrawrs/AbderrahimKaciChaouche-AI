import { Helmet } from 'react-helmet-async';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSchemaProps = {
  faqs: FAQItem[];
  lang: 'en' | 'fr';
};

const BASE_URL = 'https://abdelrrahim.com';

const FAQSchema = ({ faqs, lang }: FAQSchemaProps) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq, index) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default FAQSchema;