/**
 * COSMIC FOUNDATION - Immersive Space Universe
 * Smooth mouse interactions, twinkling stars, and cosmic effects
 */

class CosmicFoundation {
  constructor() {
    this.mouseX = 0;
    this.mouseY = 0;
    this.particles = [];
    this.maxParticles = 15;
    this.isTouch = 'ontouchstart' in window;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    this.init();
  }

  init() {
    this.createCosmicContainer();
    
    if (!this.reducedMotion && !this.isTouch) {
      this.setupMouseInteractions();
      this.setupParticleSystem();
    }
    
    this.setupScrollAnimations();
    this.setupThemeToggle();
    this.optimizePerformance();
  }

  createCosmicContainer() {
    // Create main cosmic container
    const cosmicContainer = document.createElement('div');
    cosmicContainer.className = 'cosmic-container';
    
    // Create starfield
    const starfield = document.createElement('div');
    starfield.className = 'starfield';
    
    cosmicContainer.appendChild(starfield);
    document.body.prepend(cosmicContainer);

    // Create mouse particles container
    if (!this.isTouch && !this.reducedMotion) {
      const particlesContainer = document.createElement('div');
      particlesContainer.className = 'mouse-particles';
      particlesContainer.id = 'mouse-particles';
      document.body.appendChild(particlesContainer);
    }
  }

  setupMouseInteractions() {
    // Create custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'cosmic-cursor';
    cursor.id = 'cosmic-cursor';
    document.body.appendChild(cursor);

    // Smooth mouse tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;

      // Create particle on mouse move (throttled)
      if (Math.random() > 0.7) {
        this.createParticle(e.clientX, e.clientY);
      }
    });

    // Smooth cursor animation
    const animateCursor = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      
      cursor.style.left = currentX - 10 + 'px';
      cursor.style.top = currentY - 10 + 'px';
      
      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Parallax effect on starfield
    const starfield = document.querySelector('.starfield');
    if (starfield) {
      document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        
        starfield.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
      });
    }
  }

  setupParticleSystem() {
    this.particlesContainer = document.getElementById('mouse-particles');
  }

  createParticle(x, y) {
    if (this.particles.length >= this.maxParticles) {
      const oldParticle = this.particles.shift();
      if (oldParticle && oldParticle.parentNode) {
        oldParticle.parentNode.removeChild(oldParticle);
      }
    }

    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random movement direction
    const randomX = (Math.random() - 0.5) * 60;
    const randomY = (Math.random() - 0.5) * 60;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.setProperty('--random-x', randomX + 'px');
    particle.style.setProperty('--random-y', randomY + 'px');
    
    // Random color variation
    const colors = [
      'rgba(139, 92, 246, 0.8)',
      'rgba(6, 182, 212, 0.6)',
      'rgba(236, 72, 153, 0.7)',
      'rgba(255, 255, 255, 0.5)'
    ];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    this.particlesContainer.appendChild(particle);
    this.particles.push(particle);

    // Remove particle after animation
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
        const index = this.particles.indexOf(particle);
        if (index > -1) {
          this.particles.splice(index, 1);
        }
      }
    }, 2000);
  }

  setupScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Stagger animation for child elements
          const staggerItems = entry.target.querySelectorAll('.stagger-item');
          staggerItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('visible');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Apply cosmic card class to existing cards
    this.enhanceExistingElements();
  }

  enhanceExistingElements() {
    // Add cosmic-card class to existing elements
    const selectors = [
      '.timeline-card',
      '.project-card',
      '.skill-card',
      '.about-card',
      '.contact-form',
      '.resume-card'
    ];

    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add('cosmic-card');
        if (!el.classList.contains('fade-in')) {
          el.classList.add('fade-in');
        }
      });
    });

    // Add cosmic-section class to main sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('cosmic-section');
    });
    
    // Debug fix: Ensure projects section is visible
    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
      projectsSection.classList.add('fade-in');
      // Force visibility after a short delay
      setTimeout(() => {
        projectsSection.classList.add('visible');
        console.log('🔧 Debug: Projects section made visible');
      }, 100);
    }
  }

  setupThemeToggle() {
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'cosmic-theme-toggle';
    themeToggle.innerHTML = '🌌';
    themeToggle.setAttribute('aria-label', 'Toggle cosmic theme');
    
    themeToggle.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
      background: rgba(139, 92, 246, 0.2);
      border: 1px solid rgba(139, 92, 246, 0.3);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      font-size: 20px;
      cursor: pointer;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    `;

    let currentTheme = 'default';
    const themes = ['default', 'cosmic-theme-nebula', 'cosmic-theme-galaxy'];

    themeToggle.addEventListener('click', () => {
      // Remove current theme
      document.body.classList.remove(...themes);
      
      // Cycle to next theme
      const currentIndex = themes.indexOf(currentTheme);
      const nextIndex = (currentIndex + 1) % themes.length;
      currentTheme = themes[nextIndex];
      
      if (currentTheme !== 'default') {
        document.body.classList.add(currentTheme);
      }

      // Update button emoji
      const emojis = ['🌌', '🌸', '🌿'];
      themeToggle.innerHTML = emojis[nextIndex];
    });

    document.body.appendChild(themeToggle);
  }

  optimizePerformance() {
    // Throttle resize events
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.handleResize();
      }, 250);
    });

    // Pause animations when tab is not visible
    document.addEventListener('visibilitychange', () => {
      const starfield = document.querySelector('.starfield');
      if (starfield) {
        if (document.hidden) {
          starfield.style.animationPlayState = 'paused';
        } else {
          starfield.style.animationPlayState = 'running';
        }
      }
    });

    // Clean up particles on page unload
    window.addEventListener('beforeunload', () => {
      this.particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
      this.particles = [];
    });
  }

  handleResize() {
    // Adjust particle system for new screen size
    if (window.innerWidth < 768) {
      this.maxParticles = 8;
    } else {
      this.maxParticles = 15;
    }

    // Clean up excess particles
    while (this.particles.length > this.maxParticles) {
      const particle = this.particles.shift();
      if (particle && particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }
  }

  // Public methods for external use
  addCosmicCard(element) {
    element.classList.add('cosmic-card', 'fade-in');
  }

  createCustomParticle(x, y, color = null) {
    if (!this.reducedMotion && !this.isTouch) {
      this.createParticle(x, y);
    }
  }

  pauseAnimations() {
    document.querySelector('.starfield')?.style.setProperty('animation-play-state', 'paused');
  }

  resumeAnimations() {
    document.querySelector('.starfield')?.style.setProperty('animation-play-state', 'running');
  }
}

// Initialize cosmic foundation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.CosmicFoundation = new CosmicFoundation();
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CosmicFoundation;
}