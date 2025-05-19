<template>
    <div>
      <section class="relative w-full max-w-4xl mx-auto h-80 sm:h-96 lg:h-[450px] overflow-hidden rounded-lg">
        <!-- Hero image without parallax -->
        <img
          class="w-full rounded-lg transform scale-110 object-cover h-full"
          :src="coverImagePath"
          :alt="t.heroAlt"
        />
        
        <!-- Gradient overlay to fade the edges to black -->
        <div class="absolute inset-0 bg-gradient-radial pointer-events-none rounded-lg"></div>
        
        <!-- Content centered in hero with accent color glow -->
        <div class="absolute inset-0 flex items-center justify-center z-10">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-orbitron text-white text-center px-4 hero-title" data-animate>
            {{ t.heroTitle }}
          </h1>
        </div>
      </section>
      
      <!-- Tagline below the hero section -->
      <p class="mt-4 text-center text-lg sm:text-xl text-white max-w-2xl mx-auto" data-animate>
        {{ t.heroTagline }}
      </p>
    </div>
  </template>
  
  <script setup>
  import { inject, computed } from 'vue'
  import { useScrollAnimation } from '../composables/useScrollAnimation'
  
  const t = inject('t')
  
  // Compute the image path to avoid using import.meta directly in the template
  const coverImagePath = computed(() => {
    return `${import.meta.env.BASE_URL}imgh/cover.jpg`
  })
  
  // Only initialize scroll animation, not parallax
  useScrollAnimation()
  </script>
  
  <style scoped>
  /* Radial gradient for fading edges */
  .bg-gradient-radial {
    background: radial-gradient(
      circle at center,
      transparent 30%,
      rgba(0, 0, 0, 0.7) 70%,
      rgba(0, 0, 0, 1) 100%
    );
  }

  /* Add subtle glow effect for the hero title */
  .hero-title {
    text-shadow: 0 0 10px rgba(var(--accent-color-rgb), 0.5),
                0 0 20px rgba(var(--accent-color-rgb), 0.3),
                0 0 30px rgba(var(--accent-color-rgb), 0.1);
  }
  </style>
