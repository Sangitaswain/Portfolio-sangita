/* Sangita's Codeverse - Animations Module */
/* GSAP animations and scroll effects */

// Animation configuration
const animationConfig = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2
  },
  easing: {
    smooth: "power2.out",
    bounce: "back.out(1.7)",
    elastic: "elastic.out(1, 0.3)"
  }
};

// Initialize animations module
function initializeAnimations() {
  console.log('Initializing animations module...');
  
  // Check if GSAP is loaded
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not loaded, using CSS animations only');
    initializeCSSAnimations();
    return;
  }
  
  // Register GSAP plugins
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
  
  // Initialize GSAP animations
  initializeGSAPAnimations();
  
  // Initialize scroll-triggered animations
  initializeScrollAnimations();
  
  console.log('Animations module initialized');
}

// Initialize CSS-only animations (fallback)
function initializeCSSAnimations() {
  // Add CSS animation classes to elements
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  animatedElements.forEach(element => {
    const animationType = element.getAttribute('data-animate');
    element.classList.add(`animate-${animationType}`);
  });
}

// Initialize GSAP animations
function initializeGSAPAnimations() {
  // Hero name glow animation
  gsap.to('.hero-name', {
    textShadow: '0 0 30px rgba(139, 92, 246, 0.8), 0 0 40px rgba(236, 72, 153, 0.3)',
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "power2.inOut"
  });
  
  // Planet floating animation
  gsap.to('.planet', {
    y: -10,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: "power2.inOut",
    stagger: 0.2
  });
  
  // Scroll indicator bounce
  gsap.to('.scroll-arrow', {
    y: -10,
    duration: 1,
    yoyo: true,
    repeat: -1,
    ease: "power2.inOut"
  });
}

// Initialize scroll-triggered animations
function initializeScrollAnimations() {
  if (typeof ScrollTrigger === 'undefined') {
    console.warn('ScrollTrigger not available, using intersection observer');
    initializeIntersectionObserver();
    return;
  }
  
  // Section titles animation
  gsap.fromTo('.section-title', 
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: animationConfig.duration.normal,
      ease: animationConfig.easing.smooth,
      scrollTrigger: {
        trigger: '.section-title',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );
  
  // Bio sections stagger animation
  gsap.fromTo('.bio-section',
    {
      opacity: 0,
      x: -50
    },
    {
      opacity: 1,
      x: 0,
      duration: animationConfig.duration.normal,
      ease: animationConfig.easing.smooth,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.bio-content',
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    }
  );
  
  // Project cards animation
  gsap.fromTo('.project-card',
    {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: animationConfig.duration.normal,
      ease: animationConfig.easing.bounce,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );
  
  // Skills constellation animation
  gsap.fromTo('.skill-star',
    {
      opacity: 0,
      scale: 0
    },
    {
      opacity: 1,
      scale: 1,
      duration: animationConfig.duration.slow,
      ease: animationConfig.easing.elastic,
      stagger: 0.05,
      scrollTrigger: {
        trigger: '#skills-constellation',
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    }
  );
  
  // Form elements animation
  gsap.fromTo('.form-group',
    {
      opacity: 0,
      y: 20
    },
    {
      opacity: 1,
      y: 0,
      duration: animationConfig.duration.normal,
      ease: animationConfig.easing.smooth,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );
}

// Fallback intersection observer for scroll animations
function initializeIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements that should animate on scroll
  const animatedElements = document.querySelectorAll('.section-title, .bio-section, .project-card, .form-group');
  animatedElements.forEach(el => observer.observe(el));
}

// Planet hover animations
function animatePlanetHover(planet, isHovering) {
  if (typeof gsap === 'undefined') return;
  
  if (isHovering) {
    gsap.to(planet, {
      scale: 1.1,
      boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)',
      duration: animationConfig.duration.fast,
      ease: animationConfig.easing.smooth
    });
  } else {
    gsap.to(planet, {
      scale: 1,
      boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
      duration: animationConfig.duration.fast,
      ease: animationConfig.easing.smooth
    });
  }
}

// Button click animation
function animateButtonClick(button) {
  if (typeof gsap === 'undefined') return;
  
  gsap.to(button, {
    scale: 0.95,
    duration: 0.1,
    yoyo: true,
    repeat: 1,
    ease: "power2.inOut"
  });
}

// Cosmic burst animation for form success
function animateCosmicBurst(element) {
  if (typeof gsap === 'undefined') {
    element.classList.add('animate-cosmic-burst');
    return;
  }
  
  // Create multiple particles for burst effect
  const particles = [];
  for (let i = 0; i < 12; i++) {
    const particle = document.createElement('div');
    particle.className = 'burst-particle';
    particle.style.position = 'absolute';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.backgroundColor = '#8b5cf6';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    
    element.appendChild(particle);
    particles.push(particle);
  }
  
  // Animate particles
  particles.forEach((particle, index) => {
    const angle = (index / particles.length) * Math.PI * 2;
    const distance = 100;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    gsap.fromTo(particle,
      {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1
      },
      {
        x: x,
        y: y,
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          particle.remove();
        }
      }
    );
  });
}

// Typewriter animation with GSAP
function animateTypewriter(element, text, speed = 50) {
  if (typeof gsap === 'undefined') {
    // Fallback to regular typewriter
    typewriterEffect(element, text, speed);
    return;
  }
  
  element.textContent = '';
  const chars = text.split('');
  
  chars.forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = '0';
    element.appendChild(span);
    
    gsap.to(span, {
      opacity: 1,
      duration: 0.05,
      delay: index * (speed / 1000),
      ease: "none"
    });
  });
}

// Parallax effect for background elements
function initializeParallax() {
  if (typeof gsap === 'undefined') return;
  
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  parallaxElements.forEach(element => {
    const speed = element.getAttribute('data-parallax') || 0.5;
    
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
}

// Cleanup animations on page unload
function cleanupAnimations() {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.killAll();
  }
}

// Handle reduced motion preference
function handleReducedMotion() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable GSAP animations
    if (typeof gsap !== 'undefined') {
      gsap.globalTimeline.clear();
      gsap.set("*", {clearProps: "all"});
    }
    
    // Add reduced motion class
    document.body.classList.add('reduced-motion');
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
  handleReducedMotion();
  initializeAnimations();
});

// Cleanup on unload
window.addEventListener('beforeunload', cleanupAnimations);

// Export functions for external use
window.AnimationsModule = {
  init: initializeAnimations,
  planetHover: animatePlanetHover,
  buttonClick: animateButtonClick,
  cosmicBurst: animateCosmicBurst,
  typewriter: animateTypewriter,
  config: animationConfig
};