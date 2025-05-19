<template>
    <footer class="text-center mt-16 mb-8 text-gray-300 text-sm select-none" style="position: relative; z-index: 1;" >
      <div class="social-links mb-4 flex justify-center gap-4 items-center">
        <a :href="appConfig.social.bluesky" target="_blank" rel="noopener noreferrer" class="social-icon">
          <!-- Bluesky Icon - User Provided -->
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 511.999 452.266"><path fill="currentColor" fill-rule="nonzero" d="M110.985 30.442c58.695 44.217 121.837 133.856 145.013 181.961 23.176-48.105 86.322-137.744 145.016-181.961 42.361-31.897 110.985-56.584 110.985 21.96 0 15.681-8.962 131.776-14.223 150.628-18.272 65.516-84.873 82.228-144.112 72.116 103.55 17.68 129.889 76.238 73 134.8-108.04 111.223-155.288-27.905-167.385-63.554-3.489-10.262-2.991-10.498-6.561 0-12.098 35.649-59.342 174.777-167.382 63.554-56.89-58.562-30.551-117.12 72.999-134.8-59.239 10.112-125.84-6.6-144.112-72.116C8.962 184.178 0 68.083 0 52.402c0-78.544 68.633-53.857 110.985-21.96z"/></svg>
          <span>Bluesky</span>
        </a>
        
        <a :href="appConfig.social.twitter" target="_blank" rel="noopener noreferrer" class="social-icon">
          <!-- X/Twitter Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
          <span>X</span>
        </a>
        
        <a :href="appConfig.social.instagram" target="_blank" rel="noopener noreferrer" class="social-icon">
          <!-- Instagram Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.059-.977.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.88-.344 1.857-.048 1.053-.059 1.37-.059 4.04 0 2.67.01 2.988.059 4.04.045.977.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.88.3 1.857.344 1.054.048 1.37.059 4.04.059 2.672 0 2.99-.01 4.04-.059.977-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.88.344-1.857.048-1.052.059-1.37.059-4.04 0-2.67-.01-2.986-.059-4.04-.045-.977-.207-1.504-.344-1.857a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.88-.3-1.857-.344-1.052-.048-1.37-.059-4.04-.059zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"></path>
          </svg>
          <span>Instagram</span>
        </a>
        
        <a :href="appConfig.social.tiktok" target="_blank" rel="noopener noreferrer" class="social-icon">
          <!-- TikTok Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
          </svg>
          <span>TikTok</span>
        </a>
        
        <a :href="appConfig.social.reddit" target="_blank" rel="noopener noreferrer" class="social-icon">
          <!-- Reddit Icon - User Provided -->
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reddit" viewBox="0 0 16 16"> <path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z"/> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z"/> </svg>
          <span>Reddit</span>
        </a>
      </div>
      
      <!-- Legal Links -->
      <div class="legal-links mb-3 flex justify-center gap-4 items-center">
        <button @click="showImpressum = true" class="legal-link">
          {{ t.impressum }}
        </button>
        <button @click="showPrivacyPolicy = true" class="legal-link">
          {{ t.privacyPolicy }}
        </button>
      </div>
      
      <p>© {{ currentYear }} {{ appConfig.company.name }} – Cosmic Run</p>
      
      <!-- Impressum Modal -->
      <div v-if="showImpressum" class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" @click.self="showImpressum = false">
        <div class="bg-zinc-900 border border-accent/50 p-6 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl text-accent font-bold">{{ t.impressum }}</h2>
            <button @click="showImpressum = false" class="text-gray-400 hover:text-white" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="text-left space-y-4">
            <!-- Company Name and Address (Legally required) -->
            <h3 class="text-lg text-lime-400">{{ appConfig.company.name }}</h3>
            <p>{{ appConfig.company.address.street }}<br>{{ appConfig.company.address.zip }} {{ appConfig.company.address.city }}<br>{{ appConfig.company.address.country }}</p>
            
            <!-- GbR Partners (All partners must be listed for a GbR) -->
            <h4 class="text-accent">{{ t.partners || 'Partners' }}</h4>
            <p v-for="(partner, index) in appConfig.company.partners" :key="index">
              {{ partner.name }}{{ partner.title ? ', ' + partner.title : '' }}
            </p>
            
            <!-- Contact Info (Email is required, phone is optional) -->
            <h4 class="text-accent">{{ t.contact || 'Contact' }}</h4>
            <p>
              {{ t.email || 'Email' }}: {{ appConfig.contact.email }}
              <template v-if="appConfig.contact.phone">
                <br>{{ t.phone || 'Phone' }}: {{ appConfig.contact.phone }}
              </template>
            </p>
            
            <!-- Tax Information (VAT ID if applicable) -->
            <template v-if="appConfig.company.tax && appConfig.company.tax.vatId">
              <h4 class="text-accent">{{ t.vatId || 'VAT ID' }}</h4>
              <p>{{ appConfig.company.tax.vatId }}</p>
            </template>
            
            <template v-if="appConfig.company.tax && appConfig.company.tax.taxNumber">
              <h4 class="text-accent">{{ t.taxNumber || 'Tax Number' }}</h4>
              <p>{{ appConfig.company.tax.taxNumber }}</p>
            </template>
          </div>
        </div>
      </div>
      
      <!-- Privacy Policy Modal -->
      <div v-if="showPrivacyPolicy" class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" @click.self="showPrivacyPolicy = false">
        <div class="bg-zinc-900 border border-accent/50 p-6 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl text-accent font-bold">{{ t.privacyPolicy }}</h2>
            <button @click="showPrivacyPolicy = false" class="text-gray-400 hover:text-white" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="text-left space-y-4">
            <p>{{ t.privacyPolicyIntro || 'This Privacy Policy outlines how we collect, use, and protect your personal data when you visit our website.' }}</p>
            
            <h4 class="text-accent">{{ t.dataCollection || 'Data Collection' }}</h4>
            <p>{{ t.dataCollectionIntro || 'We collect the following data:' }}</p>
            <ul class="list-disc pl-5">
              <li>{{ t.dataCollectionVoluntary || 'Information you voluntarily provide (e.g., when contacting us)' }}</li>
              <li>{{ t.dataCollectionAuto || 'Automatically collected data (IP address, browser type, device information)' }}</li>
              <li>{{ t.dataCollectionCookies || 'Cookies and similar technologies' }}</li>
            </ul>
            
            <h4 class="text-accent">{{ t.googleAnalytics || 'Google Analytics' }}</h4>
            <p>{{ t.googleAnalyticsIntro || 'This website uses Google Analytics to analyze website traffic. Google Analytics uses cookies to collect information about how visitors use our site. This information is transmitted to and stored by Google on servers in the United States.' }}</p>
            <p>{{ t.googleAnalyticsAnonymization || 'We have activated IP anonymization, so your IP address is truncated before transmission to Google. Google uses this information to evaluate your use of the website, compile reports on website activity, and provide other services relating to website activity and internet usage.' }}</p>
            <p>{{ t.googleAnalyticsOptOut || 'You can prevent the storage of cookies by adjusting your browser settings. You can also prevent the collection of data generated by the cookie by downloading and installing the browser plugin available at:' }} <a href="https://tools.google.com/dlpage/gaoptout" class="text-accent underline">https://tools.google.com/dlpage/gaoptout</a></p>
            
            <h4 class="text-accent">{{ t.yourRights || 'Your Rights' }}</h4>
            <p>{{ t.yourRightsIntro || 'Under the GDPR, you have the right to:' }}</p>
            <ul class="list-disc pl-5">
              <li>{{ t.rightAccess || 'Access your personal data' }}</li>
              <li>{{ t.rightRectify || 'Rectify inaccurate personal data' }}</li>
              <li>{{ t.rightDelete || 'Request the deletion of your personal data' }}</li>
              <li>{{ t.rightObject || 'Object to the processing of your personal data' }}</li>
              <li>{{ t.rightPortability || 'Data portability' }}</li>
              <li>{{ t.rightWithdraw || 'Withdraw consent' }}</li>
            </ul>
            
            <h4 class="text-accent">{{ t.contact || 'Contact' }}</h4>
            <p>{{ t.privacyContact || 'If you have any questions about this Privacy Policy, please contact us at:' }}</p>
            <p>{{ appConfig.name }}<br>{{ t.email || 'Email' }}: {{ appConfig.contact.privacyEmail }}</p>
          </div>
        </div>
      </div>
    </footer>
</template>

<script setup>
import { inject, computed, ref } from 'vue'
import appConfig from '../config/appConfig'

const t = inject('t')

// Get current year for copyright
const currentYear = computed(() => new Date().getFullYear())

// Modal states
const showImpressum = ref(false)
const showPrivacyPolicy = ref(false)
</script>

<style scoped>
.social-icon {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white; /* Ensure social icon text/SVG is white */
  background-color: rgba(55, 55, 55, 0.7); /* Slightly adjusted for visibility */
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0.75rem;
  border-radius: 9999px;
  overflow: hidden;
  border: 1px solid rgba(var(--accent-color-rgb), 0.5);
  margin: 0.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.social-icon:hover {
  color: white;
  transform: translateY(-2px);
  border-color: var(--accent-color);
  background-color: rgba(var(--accent-color-rgb), 0.3);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}

.social-icon:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.social-icon:hover:before {
  transform: translateX(100%);
}

/* Legal links styling */
.legal-link {
  color: #9ca3af; /* gray-400 */
  transition: all 0.2s;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.legal-link:hover {
  color: white;
  background-color: rgba(var(--accent-color-rgb), 0.2);
}

/* Make the icons more prominent on mobile */
@media (max-width: 640px) {
  .social-icon span {
    display: none;
  }
  
  .social-icon {
    padding: 0.75rem;
  }
  
  .social-icon svg {
    width: 24px;
    height: 24px;
  }
}
</style>
