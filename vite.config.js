import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { splitVendorChunkPlugin } from 'vite'
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
      splitVendorChunkPlugin(),
      
      // Enable Gzip compression in production
      isProduction && viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
      }),
      
      // Image minification in production
      isProduction && viteImagemin({
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
    
    // Use relative paths for FTP webspace
    base: './',
      
    build: {
      // Output directory
      outDir: 'dist',
      
      // Enable minification
      minify: 'terser',
      
      // Terser options for smaller output
      terserOptions: {
        compress: {
          drop_console: true, // Remove console statements
          drop_debugger: true,
        },
      },
      
      // Optimize chunk size
      rollupOptions: {
        output: {
          manualChunks: {
            'vue': ['vue'],
            'i18n': [
              './src/i18n/index.js',
              './src/i18n/en.js',
              './src/i18n/de.js',
              './src/i18n/zh-tw.js',
              './src/i18n/ja.js',
              './src/i18n/ko.js',
              './src/i18n/pt.js',
            ]
          },
          // Modify chunk naming for better organization
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.')
            const ext = info.pop()
            if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)) {
              return `img/[name]-[hash][extname]`
            }
            if (/\.(css)$/.test(assetInfo.name)) {
              return `css/[name]-[hash][extname]`
            }
            if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
              return `fonts/[name]-[hash][extname]`
            }
            return `assets/[name]-[hash][extname]`
          }
        }
      },
      
      // Compress assets
      assetsInlineLimit: 4096, // 4kb - smaller assets will be inlined as base64
    }
  }
})
