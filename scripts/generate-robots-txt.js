/**
 * Generate robots.txt from company config
 * This ensures that the domain in robots.txt is always in sync with the actual domain
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import companyConfig from '../src/config/company.js';

// Get current file path in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create robots.txt content
const robotsTxt = `# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${companyConfig.website.productUrl}/sitemap.xml

# Disallow specific areas that don't need indexing
Disallow: /assets/js/
Disallow: /assets/css/
`;

// Path to output directory
const outputDir = path.resolve(__dirname, '../public');

// Write robots.txt file
fs.writeFileSync(path.join(outputDir, 'robots.txt'), robotsTxt);

console.log('robots.txt has been generated with domain:', companyConfig.website.productUrl);