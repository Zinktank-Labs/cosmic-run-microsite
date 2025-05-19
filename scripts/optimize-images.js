import sharp from 'sharp';
import { readdirSync, statSync, existsSync, mkdirSync, copyFileSync } from 'fs';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get current file's directory (ESM equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define source and destination folders
const sourceDir = join(__dirname, '../public/imgh');
const destDir = join(__dirname, '../public/imgh/optimized');

// Create destination directory if it doesn't exist
if (!existsSync(destDir)) {
  mkdirSync(destDir, { recursive: true });
}

// Get all image files from the source directory
const imageFiles = readdirSync(sourceDir)
  .filter(file => {
    const ext = extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext) && file !== 'logo_cosmicrun.png';
  });

// Process each image
async function optimizeImages() {
  console.log('Starting image optimization...');

  for (const file of imageFiles) {
    const inputPath = join(sourceDir, file);
    const stats = statSync(inputPath);
    
    // Skip directories
    if (stats.isDirectory()) continue;
    
    const fileExt = extname(file).toLowerCase();
    const fileName = basename(file, fileExt);
    let outputPath;
    
    // Convert PNGs to WebP for better compression
    if (fileExt === '.png') {
      outputPath = join(destDir, `${fileName}.webp`);
      console.log(`Converting and optimizing: ${file} -> ${fileName}.webp`);
      
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
    } else {
      // For JPGs and other formats, keep the format but optimize
      outputPath = join(destDir, file);
      console.log(`Optimizing: ${file}`);
      
      if (fileExt === '.jpg' || fileExt === '.jpeg') {
        await sharp(inputPath)
          .jpeg({ quality: 80, mozjpeg: true })
          .toFile(outputPath);
      } else {
        await sharp(inputPath)
          .toFile(outputPath);
      }
    }
    
    // Log compression results
    const originalSize = stats.size;
    const optimizedSize = statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
    
    console.log(`${file}: ${(originalSize / 1024).toFixed(2)} KB → ${(optimizedSize / 1024).toFixed(2)} KB (${savings}% savings)`);
  }
  
  // Specifically handle the logo - just copy it
  const logoPath = join(sourceDir, 'logo_cosmicrun.png');
  if (existsSync(logoPath)) {
    copyFileSync(logoPath, join(destDir, 'logo_cosmicrun.png'));
    console.log('Copied logo file without modification');
  }
  
  console.log('Image optimization complete!');
}

// Run the optimization
optimizeImages().catch(err => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});