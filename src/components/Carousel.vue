<template>
    <section class="carousel relative mt-8 overflow-hidden max-w-full mx-auto">
      <div
        class="carousel-track flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <img src="/imgh/screenshot2.jpg" :alt="t.screenshot1" class="w-full flex-shrink-0 rounded-lg border-2 border-pink-600" />
        <img src="/imgh/screenshot1.png" :alt="t.screenshot2" class="w-full flex-shrink-0 rounded-lg border-2 border-pink-600" />
        <img src="/imgh/screenshot3.jpg" :alt="t.screenshot3" class="w-full flex-shrink-0 rounded-lg border-2 border-pink-600" />
      </div>
  
      <div
        class="carousel-buttons absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2"
      >
        <button
          @click="moveSlide(-1)"
          class="bg-black bg-opacity-50 text-white px-2 rounded hover:bg-opacity-80"
          :aria-label="t.prevSlide"
        >
          &#8592;
        </button>
        <button
          @click="moveSlide(1)"
          class="bg-black bg-opacity-50 text-white px-2 rounded hover:bg-opacity-80"
          :aria-label="t.nextSlide"
        >
          &#8594;
        </button>
      </div>
  
      <p class="caption mt-2 text-center text-sm text-gray-400">
        {{ t.carouselCaptions[currentSlide] }}
      </p>
    </section>
  </template>
  
  <script setup>
  import { ref, inject, onMounted, watch } from 'vue'
  
  const t = inject('t')
  const lang = inject('lang')
  const currentSlide = ref(0)
  const totalSlides = 3 // Hardcoding the number of slides since we know there are 3 images
  
  function moveSlide(direction) {
    currentSlide.value = (currentSlide.value + direction + totalSlides) % totalSlides
    console.log('Current slide:', currentSlide.value)
  }
  
  // Reset to first slide when language changes to avoid potential out-of-bounds issues
  watch(() => lang.value, () => {
    currentSlide.value = 0
  })
  </script>
  
  <style scoped>
  .carousel {
    max-width: 800px;
  }
  </style>
