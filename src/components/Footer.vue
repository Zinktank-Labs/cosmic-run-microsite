<template>
    <footer class="text-center mt-12 text-gray-500 text-sm select-none">
      <div class="social-links mb-3 flex justify-center gap-4">
        <a href="https://sky.app/profile/cosmicrungame.bsky.social" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors">Bluesky</a>
        <a href="https://x.com/cosmicrungame" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors">X</a>
        <a href="https://instagram.com/cosmicrungame/" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors">Instagram</a>
        <a href="https://tiktok.com/@cosmicrungame" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors">TikTok</a>
        <a href="https://reddit.com/user/CosmicRunGame/" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors">Reddit</a>
      </div>
      <p>© Zinktank Labs – Cosmic Run</p>
    </footer>
  </template>
  
  <script setup>
  import { inject } from 'vue'
  const t = inject('t')
  </script>
