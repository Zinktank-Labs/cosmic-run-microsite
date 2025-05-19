<template>
  <div class="overflow-hidden w-full pt-12" data-animate>
    <h2 class="text-3xl font-orbitron text-accent mb-6">{{ t.galleryTitle }}</h2>
    
    <!-- Modern carousel with touch support and improved accessibility -->
    <div 
      class="relative carousel-container"
      @touchstart="startDrag"
      @touchmove="onDrag"
      @touchend="endDrag"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
      role="region"
      aria-roledescription="carousel"
      aria-label="Game screenshots"
    >
      <div 
        class="flex transition-all duration-500 ease-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        ref="carouselTrack"
      >
        <div 
          class="min-w-full p-2" 
          v-for="(image, index) in images" 
          :key="index"
          role="group"
          aria-roledescription="slide"
          :aria-label="`Slide ${index + 1} of ${images.length}`"
          :aria-hidden="currentSlide !== index"
        >
          <div 
            class="overflow-hidden rounded-lg border-2 border-accent transform transition-all duration-500"
            :class="{'scale-105': currentSlide === index}"
          >
            <img 
              :src="image.src" 
              :alt="image.alt" 
              class="w-full object-cover" 
              loading="lazy"
            />
            <!-- Add description text below image -->
            <div v-if="image.description" class="p-3 text-center bg-black/60"> 
              <p class="text-sm text-gray-200">{{ image.description }}</p> 
            </div>
          </div>
        </div>
      </div>
      
      <!-- Arrow navigation with improved accessibility -->
      <button 
        @click="prevSlide" 
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm z-10 transition-transform duration-300 hover:scale-110"
        aria-label="Previous slide"
        @keydown.left="prevSlide"
      >
        <span aria-hidden="true">❮</span>
      </button>
      
      <button 
        @click="nextSlide" 
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm z-10 transition-transform duration-300 hover:scale-110"
        aria-label="Next slide"
        @keydown.right="nextSlide"
      >
        <span aria-hidden="true">❯</span>
      </button>
      
      <!-- Dots navigation with improved accessibility - now as horizontal bars -->
      <div class="flex justify-center space-x-3 mt-6" role="tablist" aria-label="Select a slide to display">
        <button
          v-for="(_, index) in images"
          :key="index"
          @click="goToSlide(index)"
          class="carousel-indicator h-1.5 transition-all duration-300 rounded-sm"
          :class=" [
            currentSlide === index 
              ? 'bg-accent w-8' 
              : 'bg-gray-400 hover:bg-gray-300 w-4'
          ]"
          role="tab"
          :aria-selected="currentSlide === index"
          :aria-label="`Show slide ${index + 1}`"
          :tabindex="currentSlide === index ? 0 : -1"
        ></button>
      </div>
      
      <!-- Screen reader live region to announce slide changes -->
      <div class="sr-only" aria-live="polite">
        {{ currentSlide + 1 }} of {{ images.length }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, watch, computed, onMounted } from 'vue';
import { useScrollAnimation } from '../composables/useScrollAnimation';

const t = inject('t');
const lang = inject('lang');
const currentSlide = ref(0);
const totalSlides = 3;
const isDragging = ref(false);
const startX = ref(0);
const currentX = ref(0);
const carouselTrack = ref(null);

// Initialize scroll animations
useScrollAnimation();

// Base URL for images
const baseUrl = import.meta.env.BASE_URL;

// Computed array of images with src, alt text, and descriptions
const images = computed(() => [
  { 
    src: `${baseUrl}imgh/screenshot2.jpg`, 
    alt: t.value.screenshot1, 
    description: t.value.carouselCaptions ? t.value.carouselCaptions[0] : '' 
  },
  { 
    src: `${baseUrl}imgh/screenshot1.webp`, 
    alt: t.value.screenshot2, 
    description: t.value.carouselCaptions ? t.value.carouselCaptions[1] : '' 
  },
  { 
    src: `${baseUrl}imgh/screenshot3.jpg`, 
    alt: t.value.screenshot3, 
    description: t.value.carouselCaptions ? t.value.carouselCaptions[2] : '' 
  }
]);

// Navigation functions
function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
}

function goToSlide(index) {
  currentSlide.value = index;
}

// Drag handling for touch and mouse
function startDrag(e) {
  isDragging.value = true;
  startX.value = e.touches ? e.touches[0].clientX : e.clientX;
  currentX.value = startX.value;
  
  // Pause transitions during drag
  if (carouselTrack.value) {
    carouselTrack.value.style.transition = 'none';
  }
}

function onDrag(e) {
  if (!isDragging.value) return;
  
  const x = e.touches ? e.touches[0].clientX : e.clientX;
  const diff = x - currentX.value;
  currentX.value = x;
  
  if (carouselTrack.value) {
    const currentTransform = -currentSlide.value * 100;
    const movePercent = (diff / carouselTrack.value.offsetWidth) * 100;
    const newTransform = Math.min(0, Math.max(-100 * (totalSlides - 1), currentTransform + movePercent));
    
    carouselTrack.value.style.transform = `translateX(${newTransform}%)`;
  }
}

function endDrag(e) {
  if (!isDragging.value) return;
  
  isDragging.value = false;
  
  // Restore transitions
  if (carouselTrack.value) {
    carouselTrack.value.style.transition = 'transform 500ms ease-out';
    
    const dragDistance = startX.value - currentX.value;
    const threshold = 50; // Minimum drag distance to change slide
    
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    } else {
      // Reset to current slide if threshold not met
      carouselTrack.value.style.transform = `translateX(-${currentSlide.value * 100}%)`;
    }
  }
}

// Start auto-rotation
let autoplayInterval;

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 5 seconds
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

onMounted(() => {
  startAutoplay();
  
  // Pause autoplay when mouse enters carousel
  const container = document.querySelector('.carousel-container');
  if (container) {
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);
  }
});

// Reset to first slide when language changes
watch(() => lang.value, () => {
  currentSlide.value = 0;
});
</script>

<style scoped>
/* Prevent text selection during drag */
.carousel-container {
  user-select: none;
}

/* Custom animation for slide transition */
.min-w-full {
  min-height: 250px;
}

/* Better responsive handling */
@media (min-width: 640px) {
  .min-w-full {
    min-height: 350px;
  }
}

@media (min-width: 1024px) {
  .min-w-full {
    min-height: 450px;
  }
}

/* Provide a larger target for interactive elements */
button:not([role="tab"]) {
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Ensure active state is visually distinct */
button:active {
  transform: scale(0.95);
}

/* Style for carousel indicators (dots) */
.carousel-indicator {
  height: 0.375rem; /* 1.5 tailwind units */
  transition: all 0.3s;
  border-radius: 0.125rem; /* 0.5 tailwind units */
}

/* Active and hover states for carousel indicators */
.carousel-indicator:hover {
  background-color: #d1d5db; /* Tailwind gray-300 */
}

.carousel-indicator.w-8 {
  width: 2rem; /* 8 tailwind units */
}

.carousel-indicator.w-4 {
  width: 1rem; /* 4 tailwind units */
}
</style>
