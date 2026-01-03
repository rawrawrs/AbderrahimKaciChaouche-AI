import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, relative, join, dirname } from 'path';
import { execSync } from 'child_process';
import { SitemapStream, streamToPromise } from 'sitemap';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = resolve(__dirname, '..');
const BASE_URL = 'https://abdelrrahim.com';
const APP_tsx = resolve(ROOT_DIR, 'src/App.tsx');

console.log('Starting dynamic sitemap generation...');

// 1. Read App.tsx
if (!existsSync(APP_tsx)) {
    console.error('App.tsx not found!');
    process.exit(1);
}
const appContent = readFileSync(APP_tsx, 'utf-8');

// 2. Parse Imports map
const importMap = {};
// Matches: import ComponentName from "./path/to/Component";
const importRegex = /import\s+(\w+)\s+from\s+["']([^"']+)["'];/g;
let match;
while ((match = importRegex.exec(appContent)) !== null) {
    const [_, componentName, importPath] = match;
    importMap[componentName] = importPath;
}

// 3. Parse Routes
const routes = [];
// Matches: <Route path="/some/path" element={<Component />} />
const routeRegex = /<Route\s+path="([^"]+)"\s+element=\{<(\w+)\s*.*?\/>\}\s*\/>/g;

while ((match = routeRegex.exec(appContent)) !== null) {
    const [_, routePath, componentName] = match;

    // Filtering logic
    if (routePath === '*' || componentName === 'Navigate' || routePath.includes('*')) {
        continue;
    }

    // Filter out Login and NotFound
    // checking componentName for "Login" or "NotFound"
    if (componentName.includes('Login') || componentName.includes('NotFound')) {
        continue;
    }

    routes.push({ path: routePath, component: componentName });
}

console.log(`Found ${routes.length} valid routes from App.tsx`);

// 4. Resolve File Paths and Get Git Dates
async function getRouteData(route) {
    let filePath;
    let gitDate = new Date().toISOString();

    if (importMap[route.component]) {
        // Resolve relative path from src (App.tsx is in src)
        // Imports usually like "./pages/Index" -> src/pages/Index
        // We know App.tsx is in src/, so relative paths are from src/

        // Remove ./ if present
        const cleanImport = importMap[route.component].replace(/^\.\//, '');
        const absStart = resolve(ROOT_DIR, 'src');
        const candidateBase = resolve(absStart, cleanImport);

        // Check extensions
        const extensions = ['.tsx', '.ts', '.jsx', '.js'];
        for (const ext of extensions) {
            if (existsSync(candidateBase + ext)) {
                filePath = candidateBase + ext;
                break;
            }
        }
    } else {
        // Defined in App.tsx
        filePath = APP_tsx;
    }

    if (filePath && existsSync(filePath)) {
        try {
            // Get last commit date
            // git log -1 --format=%cI -- src/pages/Index.tsx
            const relPathInRepo = relative(ROOT_DIR, filePath);
            const stdout = execSync(`git log -1 --format=%cI -- "${relPathInRepo}"`, { cwd: ROOT_DIR, encoding: 'utf-8' }).trim();
            if (stdout) {
                gitDate = stdout;
            }
        } catch (e) {
            // git might fail if file is new and not committed yet
            // fallback to now
        }
    }

    let priority = 0.8;
    let changefreq = 'monthly';

    if (route.path === '/en' || route.path === '/fr') {
        priority = 1.0;
        changefreq = 'daily';
    } else if (route.path.includes('research') || route.path.includes('solutions')) {
        priority = 0.95;
        changefreq = 'weekly';
    } else if (route.path.includes('contact') || route.path.includes('about')) {
        priority = 0.8;
        changefreq = 'monthly';
    } else if (route.path.includes('aiagents') || route.path.includes('rag')) {
        priority = 0.92;
        changefreq = 'weekly';
    }

    return {
        url: route.path,
        changefreq,
        priority,
        lastmod: gitDate,
        lang: route.path.startsWith('/fr') ? 'fr' : 'en'
    };
}

async function generate() {
    const routeDataList = await Promise.all(routes.map(getRouteData));

    // Clean up urls - ensure they match keys
    // We need to pair en/fr

    const stream = new SitemapStream({ hostname: BASE_URL });

    for (const route of routeDataList) {
        const isEn = route.lang === 'en';
        // Construct expected alternate
        // If /en/about -> /fr/about
        let altUrl = isEn ? route.url.replace(/^\/en/, '/fr') : route.url.replace(/^\/fr/, '/en');

        // In some cases, replace might be tricky if path doesn't start with /en
        // Assuming all paths start with /en or /fr from the regex logic

        // Verify alternate exists
        const alternateExists = routeDataList.find(r => r.url === altUrl);

        const links = [];
        if (alternateExists) {
            links.push({ lang: isEn ? 'fr' : 'en', url: `${BASE_URL}${altUrl}` });
        }

        // Also self referencing hreflang is good practice? 
        // library usually handles the main entry. 
        // But Google recommends x-default or self-ref. 
        // sitemap.js 'links' property adds xhtml:link entries.
        // Let's add the alternate.

        stream.write({
            url: route.url,
            changefreq: route.changefreq,
            priority: route.priority,
            lastmod: route.lastmod,
            links: links
        });
    }

    stream.end();
    const sitemap = await streamToPromise(stream);

    const outputPath = resolve(ROOT_DIR, 'public/sitemap.xml');
    writeFileSync(outputPath, sitemap.toString());
    console.log(`Sitemap generated successfully at ${outputPath} with ${routeDataList.length} URLs.`);
}

generate().catch(console.error);
