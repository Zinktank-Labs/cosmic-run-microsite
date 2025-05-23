import { createApp } from 'vue'
import App from './App.vue'
import './assets/theme.css'
import './assets/tailwind.css'
import './assets/browser-compatibility.css'
import './assets/animations.css'
import './assets/accessibility.css'
import companyConfig from './config/company'

// Set up meta tags with the domain from our configuration
function setupMetaTags() {
  const baseUrl = companyConfig.website.productUrl;
  
  // Update Open Graph URLs
  document.querySelector('meta[property="og:url"]').setAttribute('content', baseUrl);
  document.querySelector('meta[property="og:image"]').setAttribute('content', `/imgh/screenshot1.webp`);
  
  // Update Twitter image URL
  document.querySelector('meta[name="twitter:image"]').setAttribute('content', `/imgh/screenshot1.webp`);
  
  // Update canonical link
  document.querySelector('#canonical-link').setAttribute('href', baseUrl);
}

// Run the setup once the DOM is loaded
document.addEventListener('DOMContentLoaded', setupMetaTags);

createApp(App).mount('#app')
