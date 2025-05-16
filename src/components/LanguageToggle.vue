<template>
    <div class="text-right mb-4">
      <button
        class="mr-2 px-2 py-1 rounded hover:bg-gray-700"
        :class="{ 'font-bold underline': lang === 'en' }"
        @click="setLang('en')"
      >
        EN
      </button>
      <button
        class="mr-2 px-2 py-1 rounded hover:bg-gray-700"
        :class="{ 'font-bold underline': lang === 'de' }"
        @click="setLang('de')"
      >
        DE
      </button>
      <button
        class="px-2 py-1 rounded hover:bg-gray-700"
        :class="{ 'font-bold underline': lang === 'zh-tw' }"
        @click="setLang('zh-tw')"
      >
        繁中
      </button>
    </div>
  </template>
  
  <script setup>
  import { inject } from 'vue'
  const lang = inject('lang')
  const setLang = inject('setLang')
  const t = inject('t')
  </script>
