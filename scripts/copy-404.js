/**
 * Simple script to copy the 404.html file to the dist folder
 * Run this script after the build process
 */

import { copyFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current file's directory (ESM equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define paths
const sourcePath = join(__dirname, '..', '404.html');
const destPath = join(__dirname, '..', 'dist', '404.html');

// Make sure the dist directory exists
try {
  if (!existsSync(join(__dirname, '..', 'dist'))) {
    console.error('Error: dist directory does not exist. Run the build command first.');
    process.exit(1);
  }

  // Copy the file
  copyFileSync(sourcePath, destPath);
  console.log('✅ Successfully copied 404.html to dist folder');
} catch (err) {
  console.error('Error copying 404.html file:', err);
  process.exit(1);
}