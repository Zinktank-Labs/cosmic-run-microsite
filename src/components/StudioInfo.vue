<template>
    <details class="mt-10 border border-gray-700 rounded p-4 bg-gray-900">
      <summary class="cursor-pointer font-semibold text-lg text-pink-500">
        {{ t.aboutStudio }}
      </summary>
  
      <p class="mt-3 text-gray-300 leading-relaxed">
        {{ t.studioDesc }}
      </p>
    </details>
  </template>
  
  <script setup>
  import { inject } from 'vue'
  const t = inject('t')
  </script>
  
  <style scoped>
  details summary {
    list-style: none;
  }
  details summary::-webkit-details-marker {
    display: none;
  }
  </style>
