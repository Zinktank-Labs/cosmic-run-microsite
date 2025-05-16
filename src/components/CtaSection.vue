<template>
    <div class="text-center mt-6">
      <a
        href="#"
        target="_blank"
        class="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded transition-colors duration-300"
        >{{ t.wishlist }}</a
      >
    </div>
  </template>
  
  <script setup>
  import { inject } from 'vue'
  const t = inject('t')
  </script>
