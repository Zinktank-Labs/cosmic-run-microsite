const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Define source and destination folders
const sourceDir = path.join(__dirname, '../public/imgh');
const destDir = path.join(__dirname, '../public/imgh/optimized');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Get all image files from the source directory
const imageFiles = fs.readdirSync(sourceDir)
  .filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext) && file !== 'logo_cosmicrun.png';
  });

// Process each image
async function optimizeImages() {
  console.log('Starting image optimization...');

  for (const file of imageFiles) {
    const inputPath = path.join(sourceDir, file);
    const stats = fs.statSync(inputPath);
    
    // Skip directories
    if (stats.isDirectory()) continue;
    
    const fileExt = path.extname(file).toLowerCase();
    const fileName = path.basename(file, fileExt);
    let outputPath;
    
    // Convert PNGs to WebP for better compression
    if (fileExt === '.png') {
      outputPath = path.join(destDir, `${fileName}.webp`);
      console.log(`Converting and optimizing: ${file} -> ${fileName}.webp`);
      
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
    } else {
      // For JPGs and other formats, keep the format but optimize
      outputPath = path.join(destDir, file);
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
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
    
    console.log(`${file}: ${(originalSize / 1024).toFixed(2)} KB → ${(optimizedSize / 1024).toFixed(2)} KB (${savings}% savings)`);
  }
  
  // Specifically handle the logo - just copy it
  const logoPath = path.join(sourceDir, 'logo_cosmicrun.png');
  if (fs.existsSync(logoPath)) {
    fs.copyFileSync(logoPath, path.join(destDir, 'logo_cosmicrun.png'));
    console.log('Copied logo file without modification');
  }
  
  console.log('Image optimization complete!');
}

optimizeImages().catch(err => {
  console.error('Error optimizing images:', err);
});