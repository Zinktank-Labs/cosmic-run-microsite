// filepath: c:\projects\Cosmic Run Website\src\components\CookieConsent.vue
<template>
  <div v-if="showBanner" class="cookie-consent-banner">
    <div class="cookie-content">
      <p>{{ message }} <button @click="showPrivacyPolicy" class="policy-link">{{ learnMoreText }}</button></p>
      <div class="cookie-buttons">
        <button @click="acceptCookies" class="accept-button">{{ acceptButtonText }}</button>
        <button @click="rejectCookies" class="reject-button">{{ rejectButtonText }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: 'We use cookies to enhance your experience and analyze site traffic.'
  },
  acceptButtonText: {
    type: String,
    default: 'Accept'
  },
  rejectButtonText: {
    type: String,
    default: 'Reject'
  },
  learnMoreText: {
    type: String,
    default: 'Privacy Policy'
  }
})

const emit = defineEmits(['showPrivacyPolicy', 'acceptCookies', 'rejectCookies'])

// State for showing/hiding the banner
const showBanner = ref(false)

// Check if user has already made a cookie choice
onMounted(() => {
  const cookieChoice = localStorage.getItem('cookie-consent')
  if (!cookieChoice) {
    // Show banner if no choice has been made
    showBanner.value = true
  }
})

// Functions for handling user interactions
function acceptCookies() {
  localStorage.setItem('cookie-consent', 'accepted')
  showBanner.value = false
  emit('acceptCookies')
}

function rejectCookies() {
  localStorage.setItem('cookie-consent', 'rejected')
  showBanner.value = false
  emit('rejectCookies')
}

function showPrivacyPolicy() {
  emit('showPrivacyPolicy')
}
</script>

<style scoped>
.cookie-consent-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(15, 15, 15, 0.95);
  color: white;
  padding: 1rem;
  z-index: 100;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(236, 72, 153, 0.5);
  backdrop-filter: blur(8px);
  animation: slide-up 0.5s ease-out;
}

.cookie-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  align-items: center;
  text-align: center;
}

.cookie-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

@media (min-width: 768px) {
  .cookie-content {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
  
  .cookie-buttons {
    margin-top: 0;
    white-space: nowrap;
  }
}

.accept-button {
  background-color: rgba(236, 72, 153, 0.8);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: all 0.2s;
}

.accept-button:hover {
  background-color: rgba(236, 72, 153, 1);
  transform: translateY(-2px);
}

.reject-button {
  background-color: rgba(55, 65, 81, 0.7);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: all 0.2s;
}

.reject-button:hover {
  background-color: rgba(75, 85, 99, 0.9);
  transform: translateY(-2px);
}

.policy-link {
  color: rgba(236, 72, 153, 0.8);
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.1rem 0.2rem;
  transition: all 0.2s;
  display: inline;
}

.policy-link:hover {
  color: rgba(236, 72, 153, 1);
}

@keyframes slide-up {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>