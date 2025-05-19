import { ref, onMounted, onUnmounted } from 'vue';

export function useParallax() {
  const parallaxElements = ref([]);
  
  // Handle mouse movement for parallax effect
  const handleMouseMove = (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    parallaxElements.value.forEach(el => {
      const depth = parseFloat(el.getAttribute('data-depth') || 0.1);
      const moveX = mouseX * depth * 100;
      const moveY = mouseY * depth * 100;
      
      el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
  };
  
  // Handle scroll for different parallax speeds
  const handleScroll = () => {
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      
      parallaxElements.value.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed') || 0.2);
        const offset = scrollY * speed;
        const elementTop = el.offsetTop;
        
        // Only apply parallax within the element's viewport
        if (scrollY > elementTop - window.innerHeight && scrollY < elementTop + el.offsetHeight) {
          el.style.transform = `translateY(${offset}px)`;
        }
      });
    });
  };
  
  onMounted(() => {
    // Select all elements with the data-parallax attribute
    const elements = document.querySelectorAll('[data-parallax]');
    elements.forEach(el => {
      el.classList.add('transition-transform', 'duration-200');
      parallaxElements.value.push(el);
    });
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('scroll', handleScroll);
  });
  
  return {
    parallaxElements
  };
}