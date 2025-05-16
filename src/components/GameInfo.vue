<template>
    <section>
      <h2 class="text-2xl font-semibold mt-6 mb-3">{{ t.aboutGame }}</h2>
  
      <p class="mb-3">
        {{ t.gameDesc1 }}
      </p>
  
      <p class="mb-3">
        {{ t.gameDesc2 }}
      </p>
  
      <p>
        {{ t.gameDesc3 }}
      </p>
    </section>
  </template>
  
  <script setup>
  import { inject } from 'vue'
  const t = inject('t')
  </script>
