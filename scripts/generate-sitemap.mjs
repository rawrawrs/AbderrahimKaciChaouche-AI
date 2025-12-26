import { writeFileSync } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

// The base URL of your site
const BASE_URL = 'https://abdelrrahim.com'; // Your personal website domain

// List of your pages
// List of your pages
const pages = [
    // English pages and their French alternates
    { url: '/en/', changefreq: 'daily', priority: 1.0, lang: 'en', alternates: [{ lang: 'fr', href: '/fr/' }] },
    { url: '/en/about', changefreq: 'monthly', priority: 0.8, lang: 'en', alternates: [{ lang: 'fr', href: '/fr/about' }] },
    { url: '/en/contact', changefreq: 'monthly', priority: 0.7, lang: 'en', alternates: [{ lang: 'fr', href: '/fr/contact' }] },
    { url: '/en/research', changefreq: 'weekly', priority: 0.9, lang: 'en', alternates: [{ lang: 'fr', href: '/fr/research' }] },
    { url: '/en/research/syntron', changefreq: 'monthly', priority: 0.7, lang: 'en', alternates: [{ lang: 'fr', href: '/fr/research/syntron' }] },
    { url: '/en/research/trafpodc', changefreq: 'monthly', priority: 0.7, lang: 'en', alternates: [{ lang: 'fr', href: '/fr/research/trafpodc' }] },
    { url: '/en/solutions/aiagents', changefreq: 'monthly', priority: 0.8, lang: 'en', alternates: [{ lang: 'fr', href: '/fr/solutions/aiagents' }] },
    { url: '/en/solutions/rag', changefreq: 'monthly', priority: 0.8, lang: 'en', alternates: [{ lang: 'fr', href: '/fr/solutions/rag' }] },
    { url: '/en/solutions/deepresearch', changefreq: 'monthly', priority: 0.8, lang: 'en', alternates: [{ lang: 'fr', href: '/fr/solutions/deepresearch' }] },
    { url: '/en/solutions/fileprocessing', changefreq: 'monthly', priority: 0.8, lang: 'en', alternates: [{ lang: 'fr', href: '/fr/solutions/fileprocessing' }] },
    { url: '/en/solutions/customdeepresearch', changefreq: 'monthly', priority: 0.8, lang: 'en', alternates: [{ lang: 'fr', href: '/fr/solutions/customdeepresearch' }] },
    { url: '/en/solutions/visionai', changefreq: 'monthly', priority: 0.8, lang: 'en', alternates: [{ lang: 'fr', href: '/fr/solutions/visionai' }] },

    // French pages and their English alternates
    { url: '/fr/', changefreq: 'daily', priority: 1.0, lang: 'fr', alternates: [{ lang: 'en', href: '/en/' }] },
    { url: '/fr/about', changefreq: 'monthly', priority: 0.8, lang: 'fr', alternates: [{ lang: 'en', href: '/en/about' }] },
    { url: '/fr/contact', changefreq: 'monthly', priority: 0.7, lang: 'fr', alternates: [{ lang: 'en', href: '/en/contact' }] },
    { url: '/fr/research', changefreq: 'weekly', priority: 0.9, lang: 'fr', alternates: [{ lang: 'en', href: '/en/research' }] },
    { url: '/fr/research/syntron', changefreq: 'monthly', priority: 0.7, lang: 'fr', alternates: [{ lang: 'en', href: '/en/research/syntron' }] },
    { url: '/fr/research/trafpodc', changefreq: 'monthly', priority: 0.7, lang: 'fr', alternates: [{ lang: 'en', href: '/en/research/trafpodc' }] },
    { url: '/fr/solutions/aiagents', changefreq: 'monthly', priority: 0.8, lang: 'fr', alternates: [{ lang: 'en', href: '/en/solutions/aiagents' }] },
    { url: '/fr/solutions/rag', changefreq: 'monthly', priority: 0.8, lang: 'fr', alternates: [{ lang: 'en', href: '/en/solutions/rag' }] },
    { url: '/fr/solutions/deepresearch', changefreq: 'monthly', priority: 0.8, lang: 'fr', alternates: [{ lang: 'en', href: '/en/solutions/deepresearch' }] },
    { url: '/fr/solutions/fileprocessing', changefreq: 'monthly', priority: 0.8, lang: 'fr', alternates: [{ lang: 'en', href: '/en/solutions/fileprocessing' }] },
    { url: '/fr/solutions/customdeepresearch', changefreq: 'monthly', priority: 0.8, lang: 'fr', alternates: [{ lang: 'en', href: '/en/solutions/customdeepresearch' }] },
    { url: '/fr/solutions/visionai', changefreq: 'monthly', priority: 0.8, lang: 'fr', alternates: [{ lang: 'en', href: '/en/solutions/visionai' }] },
];

async function generateSitemap() {
    const stream = new SitemapStream({ hostname: BASE_URL });
    const today = new Date().toISOString();

    console.log('Generating sitemap...');

    for (const page of pages) {
        stream.write({
            url: page.url,
            changefreq: page.changefreq,
            priority: page.priority,
            lastmod: today,
            links: page.alternates.map(alt => ({
                lang: alt.lang,
                url: `${BASE_URL}${alt.href}`,
            })),
        });
    }

    stream.end();

    try {
        const sitemap = (await streamToPromise(stream)).toString();
        writeFileSync('public/sitemap.xml', sitemap);
        console.log('Sitemap generated successfully at public/sitemap.xml');
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

generateSitemap();
