<template>
  <div class="text-center mt-10" data-animate>
    <div class="relative inline-block">
      <!-- Pulsing background effect -->
      <div class="absolute inset-0 rounded-lg bg-pink-600 blur-xl opacity-30 animate-pulse" aria-hidden="true"></div>
      
      <!-- Main CTA button with hover effect -->
      <a
        href="#"
        target="_blank"
        class="cta-button relative inline-block px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-bold rounded-lg shadow-lg overflow-hidden"
        aria-label="Add to your Steam wishlist"
        rel="noopener noreferrer"
      >
        <div class="flex items-center space-x-2">
          <span class="text-lg">{{ t.wishlist }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </a>
    </div>
  </div>
</template>
  
<script setup>
import { inject, onMounted } from 'vue';
import { useScrollAnimation } from '../composables/useScrollAnimation';

const t = inject('t');

// Initialize scroll animations
useScrollAnimation();
</script>

<style scoped>
.cta-button {
  transition: all 0.3s ease;
  /* Ensures pseudo-element is contained */
  position: relative;
  overflow: hidden; 
  font-weight: 700; /* Ensure text is bold enough for contrast */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); /* Add text shadow for better contrast */
}

.cta-button:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 4px 12px rgba(236, 72, 153, 0.4);
  background-image: linear-gradient(to right, #d53f8c, #c5307d); /* from-pink-500 to-pink-400 */
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.25), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
  z-index: 1; /* Ensure it's above the background but below text */
}

.cta-button:hover::before {
  transform: translateX(100%);
}

/* Improve keyboard focus visibility */
.cta-button:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.6);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(236, 72, 153, 0.4);
}

/* Custom animation for the CTA button */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Ensure text and SVG are above the shimmer */
.cta-button > div { 
  position: relative;
  z-index: 2;
}
</style>
