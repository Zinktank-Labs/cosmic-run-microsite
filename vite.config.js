import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import viteImagemin from 'vite-plugin-imagemin'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'
  const isAnalyze = mode === 'analyze'
  
  return {
    plugins: [
      vue(),
      
      // Enable Gzip compression in production
      isProduction && viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
      }),
      
      // Re-enabled image minification with proper filtering for image files only
      isProduction && viteImagemin({
        // Only process actual image files
        filter: (file) => {
          // Only process files that match image extensions
          return /\.(jpe?g|png|gif|svg|webp)$/i.test(file);
        },
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 80,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
        webp: {
          quality: 80,
        },
      }),
      
      // Bundle visualizer for analysis builds
      isAnalyze && visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
        filename: 'dist/stats.html',
      }),
    ].filter(Boolean),
    
    // Update base path for GitHub Pages
    // Use '/' for custom domain or organization/user page, or '/cosmic-run-microsite/' for project page
    base: process.env.GITHUB_PAGES === 'true' ? '/cosmic-run-microsite/' : '/',
      
    build: {
      // Output directory
      outDir: 'dist',
      
      // Enable minification but use esbuild which is more reliable than terser
      minify: 'esbuild',
      
      // Optimize chunk size
      rollupOptions: {
        output: {
          // Convert object form to function form of manualChunks
          manualChunks: (id) => {
            if (id.includes('node_modules/vue')) {
              return 'vue';
            }
            
            // Group i18n files together
            const i18nFiles = [
              './src/i18n/index.js',
              './src/i18n/en.js',
              './src/i18n/de.js',
              './src/i18n/zh-tw.js',
              './src/i18n/ja.js',
              './src/i18n/ko.js',
              './src/i18n/pt.js',
            ];
            
            if (i18nFiles.some(file => id.includes(file))) {
              return 'i18n';
            }
            
            // Default vendor splitting
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          // Modify chunk naming for better organization
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
            
            if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)) {
              return `img/[name]-[hash][extname]`;
            }
            if (/\.(css)$/.test(assetInfo.name)) {
              return `css/[name]-[hash][extname]`;
            }
            if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
              return `fonts/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          }
        }
      },
      
      // Compress assets
      assetsInlineLimit: 4096, // 4kb - smaller assets will be inlined as base64
    }
  }
})
