<template>
    <div class="mt-10">
      <h2 class="font-semibold text-lg text-pink-500 mb-2">
        {{ t.aboutStudio }}
      </h2>
  
      <p class="text-gray-300 leading-relaxed">
        {{ t.studioDesc }}
      </p>
    </div>
  </template>
  
  <script setup>
  import { inject } from 'vue'
  const t = inject('t')
  </script>
