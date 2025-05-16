<template>
  <div class="min-h-screen bg-zinc-950 text-white font-mono px-6 py-8 space-y-10 max-w-3xl mx-auto">
    <LanguageToggle />
    <HeroShot />
    <CtaSection />
    <Share />
    <GameInfo />
    <Carousel />
    <StudioInfo />
    <Footer />
  </div>
</template>

<script setup>
import { ref, provide, computed } from 'vue'
import translations from './i18n'

import Share from './components/Share.vue'
import Footer from './components/Footer.vue'
import Carousel from './components/Carousel.vue'
import LanguageToggle from './components/LanguageToggle.vue'
import GameInfo from './components/GameInfo.vue'
import StudioInfo from './components/StudioInfo.vue'
import CtaSection from './components/CtaSection.vue'
import HeroShot from './components/HeroShot.vue'

// Update this to include zh-tw as a valid option
const lang = ref('en') // Default is still 'en', but now supports 'de' and 'zh-tw'
const setLang = (newLang) => {
  lang.value = newLang
}

// Create a reactive translation object that updates when language changes
const t = computed(() => translations[lang.value] || translations.en)

// Provide reactive lang and setter to children
provide('lang', lang)
provide('setLang', setLang)
provide('t', t) // Provide translations
</script>
