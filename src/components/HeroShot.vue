<template>
    <section class="relative w-full max-w-4xl mx-auto h-80 sm:h-96 lg:h-[450px] overflow-hidden rounded-lg">
      <!-- Background image -->
      <img
        src="/imgh/cover.jpg"
        :alt="t.heroAlt"
        class="object-cover w-full h-full brightness-90"
        loading="lazy"
      />
  
      <!-- Left fade -->
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 lg:w-40 bg-gradient-to-r from-black/80 to-transparent"
      ></div>
  
      <!-- Right fade -->
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-32 lg:w-40 bg-gradient-to-l from-black/80 to-transparent"
      ></div>
  
      <!-- Title Text -->
      <div
        class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white drop-shadow-lg"
      >
      </div>
      <h1 class="text-4xl sm:text-6xl font-orbitron font-bold tracking-wide">
          Cosmic Run
        </h1>
        <p class="mt-2 max-w-xl text-lg sm:text-xl">
          {{ t.heroTagline }}
        </p>
    </section>
  </template>
  
  <script setup>
  import { inject } from 'vue'
  const t = inject('t')
  </script>
  
  <style scoped>
  /* If you want, you can add some gentle animation or parallax later here */
  </style>
