import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollAnimation() {
  const animatedElements = ref([]);
  let observer = null;
  
  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class when element is visible
          entry.target.classList.add('animate-in');
          // Stop observing after animation is added
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -10% 0px' // Slightly before element enters viewport
    });
    
    // Select all elements with the data-animate attribute
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => {
      // Initially hide elements
      el.classList.add('translate-y-10', 'opacity-0', 'transition-all', 'duration-700');
      // Store for cleanup
      animatedElements.value.push(el);
      // Start observing
      observer.observe(el);
    });
  });
  
  onUnmounted(() => {
    if (observer) {
      animatedElements.value.forEach(el => {
        observer.unobserve(el);
      });
    }
  });
  
  return {
    animatedElements
  };
}