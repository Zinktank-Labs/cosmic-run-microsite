/**
 * Validate build output
 * This script checks for common issues in the build output
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file path in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to dist directory
const distDir = path.resolve(__dirname, '../dist');

console.log('🔍 Validating build output...');

// Check if dist directory exists
if (!fs.existsSync(distDir)) {
  console.error('❌ Error: dist directory does not exist. Run the build command first.');
  process.exit(1);
}

// Read index.html
const indexPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('❌ Error: index.html does not exist in the dist directory.');
  process.exit(1);
}

// Check for 404.html
const notFoundPath = path.join(distDir, '404.html');
if (!fs.existsSync(notFoundPath)) {
  console.warn('⚠️ Warning: 404.html does not exist in the dist directory.');
}

// Check for robots.txt
const robotsPath = path.join(distDir, 'robots.txt');
if (!fs.existsSync(robotsPath)) {
  console.warn('⚠️ Warning: robots.txt does not exist in the dist directory.');
}

// Check for sitemap.xml
const sitemapPath = path.join(distDir, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  console.warn('⚠️ Warning: sitemap.xml does not exist in the dist directory.');
}

// Read index.html content to check for common issues
const indexContent = fs.readFileSync(indexPath, 'utf8');

// Check for "/cosmic-run-microsite/" paths in index.html
if (indexContent.includes('/cosmic-run-microsite/')) {
  console.error('❌ Error: index.html contains "/cosmic-run-microsite/" paths. This may cause 404 errors.');
  console.log('   Please fix your vite.config.js base path or asset references.');
  
  // Find all occurrences of the problematic path
  const regex = new RegExp('/cosmic-run-microsite/[^"\'\\s]*', 'g');
  const matches = indexContent.match(regex);
  
  if (matches && matches.length > 0) {
    console.log('\nProblematic paths found:');
    matches.forEach(match => {
      console.log(`   - ${match}`);
    });
  }
}

// Check for JavaScript files in dist/js directory
console.log('\n📁 Checking JavaScript files:');
const jsDir = path.join(distDir, 'js');
if (fs.existsSync(jsDir)) {
  const jsFiles = fs.readdirSync(jsDir);
  console.log(`   Found ${jsFiles.length} JavaScript files:`);
  jsFiles.forEach(file => {
    console.log(`   - ${file}`);
  });
  
  // Check content of a few JS files for paths
  console.log('\n🔍 Checking JS files for paths:');
  jsFiles.slice(0, 3).forEach(file => {
    const jsFilePath = path.join(jsDir, file);
    const jsContent = fs.readFileSync(jsFilePath, 'utf8');
    
    if (jsContent.includes('/cosmic-run-microsite/')) {
      console.error(`❌ Error: ${file} contains "/cosmic-run-microsite/" paths.`);
      
      // Find occurrences
      const regex = new RegExp('/cosmic-run-microsite/[^"\'\\s]*', 'g');
      const matches = jsContent.match(regex);
      
      if (matches && matches.length > 0) {
        console.log(`   Problematic paths in ${file}:`);
        matches.slice(0, 5).forEach(match => {
          console.log(`   - ${match}`);
        });
        if (matches.length > 5) {
          console.log(`   ... and ${matches.length - 5} more`);
        }
      }
    } else {
      console.log(`   ✅ ${file} looks good.`);
    }
  });
}

// Check for broken or incorrect Google Analytics ID
if (indexContent.includes('G-355558690')) {
  console.warn('⚠️ Warning: index.html contains an incorrect Google Analytics ID (G-355558690).');
  console.log('   The correct ID should be G-3555586900.');
}

// Check for references to github.io domain
if (indexContent.includes('zinktank-labs.github.io')) {
  console.warn('⚠️ Warning: index.html contains references to "zinktank-labs.github.io".');
  console.log('   This might cause Cross-Origin issues with your custom domain.');
  
  // Find occurrences
  const githubMatches = indexContent.match(/zinktank-labs\.github\.io[^"'\\s]*/g);
  if (githubMatches && githubMatches.length > 0) {
    console.log('\nGithub.io references found:');
    githubMatches.forEach(match => {
      console.log(`   - ${match}`);
    });
  }
}

console.log('✅ Build validation completed.');
