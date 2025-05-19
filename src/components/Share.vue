<template>
  <div class="text-center space-y-4 mt-12" data-animate>
    <h1 class="text-4xl text-lime-400 font-orbitron">
{{ t.comingSoon }}      
    </h1>

    <div class="share-buttons flex flex-wrap justify-center gap-4 mt-8">
      <!-- Twitter/X Share -->
      <a
        :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(t.tweetText)}${url}`"
        target="_blank"
        class="social-button"
        aria-label="Share on X/Twitter"
      >
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        </div>
        <span>{{ t.shareX }}</span>
      </a>
      
      <!-- Facebook Share -->
      <a
        :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`"
        target="_blank"
        class="social-button"
        aria-label="Share on Facebook"
      >
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
          </svg>
        </div>
        <span>{{ t.shareFacebook }}</span>
      </a>
      
      <!-- Email Share -->
      <a
        :href="`mailto:?subject=${encodeURIComponent(t.emailSubject)}&body=${encodeURIComponent(t.emailBody)} ${url}`"
        class="social-button"
        aria-label="Share via Email"
      >
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
        <span>{{ t.email }}</span>
      </a>
      
      <!-- Copy Link Button -->
      <button 
        @click="copyLink" 
        class="social-button copy-button"
        :class="{ 'copied': isCopied }"
        aria-label="Copy link to clipboard"
      >
        <div class="icon-wrapper">
          <svg v-if="!isCopied" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span>{{ isCopied ? t.copied : t.copyLink }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import { useScrollAnimation } from '../composables/useScrollAnimation';

const t = inject("t");
const url = "https://cosmicrun.zinktanklabs.com";
const isCopied = ref(false);

// Initialize scroll animations
useScrollAnimation();

function copyLink() {
  navigator.clipboard
    .writeText(url)
    .then(() => {
      isCopied.value = true;
      setTimeout(() => {
        isCopied.value = false;
      }, 2000);
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
      alert(t.linkCopied); // Fallback
    });
}
</script>

<style scoped>
.social-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem; /* Or 9999px for pill shape like footer */
  background-color: rgba(55, 55, 55, 0.7);
  color: white;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(236, 72, 153, 0.5);
  opacity: 1;
  position: relative; /* For pseudo-element positioning */
  overflow: hidden; /* To contain the pseudo-element */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.social-button:hover {
  background-color: rgba(236, 72, 153, 0.5);
  transform: translateY(-2px);
  border-color: rgba(236, 72, 153, 1);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}

.social-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
  z-index: 0; /* Ensure it's behind the content */
}

.social-button:hover::before {
  transform: translateX(100%);
}

.social-button:active {
  transform: translateY(0);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.social-button:hover .icon-wrapper {
  transform: scale(1.2);
}

/* Ensure text and icon are above the shimmer */
.social-button > span,
.social-button > .icon-wrapper {
  position: relative;
  z-index: 1;
}

.copy-button.copied {
  background-color: rgba(72, 187, 120, 0.2);
  border-color: rgba(72, 187, 120, 0.5);
}
</style>