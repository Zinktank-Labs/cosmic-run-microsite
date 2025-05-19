<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="flex items-center justify-center px-3 py-2 rounded hover:bg-gray-700"
      :aria-expanded="showDropdown"
      aria-haspopup="true"
    >
      <span>{{ languageNames[lang] }}</span>
      <span class="ml-1">▼</span>
    </button>

    <div
      v-show="showDropdown"
      class="absolute right-0 mt-1 bg-gray-800 rounded shadow-lg z-50 py-1 w-40"
    >
      <button
        v-for="(name, code) in languageNames"
        :key="code"
        @click="setLanguage(code)"
        class="block w-full text-left px-4 py-2 hover:bg-gray-700"
        :class="{ 'bg-gray-700': lang === code }"
      >
        {{ name }}
      </button>
    </div>
  </div>
</template>
  
<script setup>
import { ref, inject, onMounted, onBeforeUnmount } from 'vue'
import { languageNames, detectUserLanguage } from '../i18n'

const lang = inject('lang')
const setLang = inject('setLang')
const t = inject('t')

const showDropdown = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const setLanguage = (code) => {
  setLang(code)
  showDropdown.value = false
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (showDropdown.value && !event.target.closest('.relative')) {
    showDropdown.value = false
  }
}

// Set user's preferred language on component mount
onMounted(() => {
  // Only set language if not already set (e.g., from localStorage)
  const savedLang = localStorage.getItem('preferred-language')
  if (!savedLang) {
    const detectedLang = detectUserLanguage()
    setLang(detectedLang)
  }
  
  // Add click outside listener
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
}
</style>
