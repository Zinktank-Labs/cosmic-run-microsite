<template>
  <section class="pb-12 mt-16" data-animate>
    <h2 class="text-3xl font-orbitron text-lime-400 mb-6">{{ t.aboutGame || t.aboutTitle }}</h2>
    
    <!-- Feature cards with hover effects -->
    <div class="grid grid-cols-1 gap-6">
      <!-- Game description paragraph -->
      <div class="bg-zinc-900/90 p-6 rounded-lg shadow-lg animate-in opacity-100 mb-6">
        <p class="text-white text-lg">{{ t.gameDesc1 }}</p>
      </div>
      
      <!-- Feature cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          class="bg-zinc-900/90 p-6 rounded-lg shadow-lg card-3d hover-glow animate-in opacity-100"
          data-parallax
          data-depth="0.05"
        >
          <h3 class="font-orbitron text-xl mb-3 text-pink-500">Fast-Paced Action</h3>
          <p class="text-white">{{ t.gameDesc2 }}</p>
        </div>
        <div 
          class="bg-zinc-900/90 p-6 rounded-lg shadow-lg card-3d hover-glow animate-in opacity-100"
          data-parallax
          data-depth="0.05"
        >
          <h3 class="font-orbitron text-xl mb-3 text-pink-500">Narrative Depth</h3>
          <p class="text-white">{{ t.gameDesc3 }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue';
import { useScrollAnimation } from '../composables/useScrollAnimation';
import { useParallax } from '../composables/useParallax';

const t = inject('t');

// Initialize scroll animations and parallax
useScrollAnimation();
useParallax();
</script>
