# Cosmic Run - Game Website

This is the official website for Cosmic Run, showcasing the game and allowing users to add it to their Steam wishlist.

## Project Structure

- Vue.js 3 frontend
- Vite as build tool
- TailwindCSS for styling
- Multi-language support (English, German, Traditional Chinese, Japanese, Korean and Portuguese)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Analyze bundle sizes
npm run analyze

# Optimize images
node scripts/optimize-images.js
```

## Deployment

### GitHub Pages Deployment (Automated)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy the website
3. The deployed site will be available at https://zinktank-labs.github.io/cosmic-run-microsite/

To configure a custom domain:
1. Update the `CNAME` file in the `public` folder with your domain
2. Configure your DNS settings to point to GitHub Pages
3. Enable the custom domain in your GitHub repository settings

### FTP Deployment (Manual)

After building the project, upload the entire `dist` folder to your web server:

1. Run `npm run build` to generate the production files
2. Using an FTP client, upload all files from the `dist` folder to your server
3. Ensure the .htaccess file is properly uploaded (some FTP clients hide files starting with a dot)
4. Test your site to ensure all resources load correctly

## Items Needing Updates

### Pre-Production Checklist
- [ ] **Replace Steam Wishlist Placeholder**: Update the "#" link in CtaSection.vue with the actual Steam store URL
- [x] **Update Google Analytics ID**: Updated with ID "G-355558690" in index.html
- [x] **Add Favicon**: Need to create and add favicon icons
- [x] **Organize Images**: Moved optimized images to main imgh folder and removed duplicates
- [x] **Remove Console Logs**: Console logs in scripts/optimize-images.js can remain as they only run during development
- [x] **Minify Assets**: Will be handled automatically by Vite's production build
- [ ] **Check Browser Compatibility**: Final verification across all target browsers
- [ ] **Test on Mobile Devices**: Ensure responsive design works on various screen sizes
- [ ] **Verify Language Translations**: Double-check all translations for accuracy
- [ ] **Validate HTML/CSS**: Run validation tools on the final build

## Production Optimizations

The site includes several optimizations for production deployment:

### Performance
- **Code Splitting**: Lazy-loaded components for improved initial load time
- **Asset Optimization**: Automatic compression and optimization of images and other assets
- **Asset Organization**: Well-structured output folders by file type
- **Browser Caching**: Optimized cache control headers in .htaccess
- **Compression**: Gzip compression for all static assets

### Build Process
- **Bundle Analysis**: Visualization of bundle sizes with `npm run analyze`
- **Chunk Strategy**: Vendor code is separated from application code
- **Terser Minification**: Advanced minification for smaller bundle sizes
- **Output Structure**: Organized output folders (js, css, img, fonts)

### SEO & Accessibility
- **Semantic HTML**: Proper semantic structure with ARIA landmarks
- **Meta Tags**: Comprehensive SEO meta tags and social sharing support
- **Accessibility**: Keyboard navigation, screen reader support, and proper focus management
- **robots.txt**: Configured for optimal crawler behavior

### Server Configuration
- **Apache Settings**: .htaccess with performance and security optimizations
- **Security Headers**: Content Security Policy and other security headers

This website is maintained by Zinktank Labs.