/* Sangita's Codeverse - Main Application Logic */
/* Core functionality and initialization */

// Application state
const App = {
  vantaEffect: null,
  isInitialized: false,
  currentSection: 'landing'
};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
  console.log('Sangita\'s Codeverse - Initializing...');
  
  // Initialize core functionality
  initializeApp();
});

// Main initialization function
function initializeApp() {
  try {
    // Initialize Vanta Galaxy background
    initializeVantaBackground();
    
    // Initialize smooth scroll navigation
    initializeSmoothScroll();
    
    // Initialize typewriter effect
    initializeTypewriter();
    
    // Initialize scroll indicators
    initializeScrollIndicators();
    
    // Initialize accessibility features
    initializeAccessibility();
    
    // Initialize all modules
    initializeModules();
    
    App.isInitialized = true;
    console.log('App initialized successfully');
    
  } catch (error) {
    console.error('Failed to initialize app:', error);
  }
}

// Initialize all modules
function initializeModules() {
  // Initialize projects module
  if (window.ProjectsModule) {
    window.ProjectsModule.init();
  }
  
  // Initialize skills module
  if (window.SkillsModule) {
    window.SkillsModule.init();
  }
  
  // Initialize contact module
  if (window.ContactModule) {
    window.ContactModule.init();
  }
  
  // Initialize animations module
  if (window.AnimationsModule) {
    window.AnimationsModule.init();
  }
  
  // Initialize easter egg module
  if (window.EasterEggModule) {
    window.EasterEggModule.init();
  }
}

// Initialize Vanta Galaxy Background
function initializeVantaBackground() {
  // Wait for libraries to load
  if (typeof VANTA !== 'undefined' && typeof THREE !== 'undefined') {
    App.vantaEffect = window.VantaConfig.init();
  } else {
    // Retry after a short delay
    setTimeout(() => {
      if (typeof VANTA !== 'undefined' && typeof THREE !== 'undefined') {
        App.vantaEffect = window.VantaConfig.init();
      } else {
        window.VantaConfig.showFallback();
      }
    }, 1000);
  }
}

// Initialize smooth scroll navigation
function initializeSmoothScroll() {
  const planetLinks = document.querySelectorAll('.planet-link');
  
  planetLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Update current section
        App.currentSection = targetId.substring(1);
        
        // Smooth scroll to target
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without triggering page reload
        history.pushState(null, null, targetId);
        
        // Add visual feedback
        addNavigationFeedback(this);
      }
    });
  });
}

// Add visual feedback for navigation
function addNavigationFeedback(clickedLink) {
  // Remove active state from all links
  document.querySelectorAll('.planet-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active state to clicked link
  clickedLink.classList.add('active');
  
  // Remove active state after animation
  setTimeout(() => {
    clickedLink.classList.remove('active');
  }, 1000);
}

// Initialize typewriter effect for hero tagline
function initializeTypewriter() {
  const typewriterElement = document.getElementById('typewriter-text');
  const text = "Hi, I'm Sangita — Coder 💻 | Dreamer 🌙 | Data Explorer 🚀";
  
  if (typewriterElement) {
    // Clear existing content
    typewriterElement.textContent = '';
    
    // Start typewriter effect
    typewriterEffect(typewriterElement, text, 50);
  }
}

// Typewriter effect implementation
function typewriterEffect(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';
  
  function typeChar() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeChar, speed);
    } else {
      // Add blinking cursor effect
      element.classList.add('typewriter-complete');
    }
  }
  
  // Start typing after a short delay
  setTimeout(typeChar, 500);
}

// Initialize scroll indicators and section detection
function initializeScrollIndicators() {
  const sections = document.querySelectorAll('section[id]');
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  // Hide scroll indicator when not on landing section
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Hide scroll indicator after scrolling past landing section
    if (scrollIndicator) {
      if (scrollPosition > windowHeight * 0.5) {
        scrollIndicator.style.opacity = '0';
      } else {
        scrollIndicator.style.opacity = '1';
      }
    }
    
    // Update current section based on scroll position
    updateCurrentSection(sections, scrollPosition);
  });
}

// Update current section based on scroll position
function updateCurrentSection(sections, scrollPosition) {
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      if (App.currentSection !== sectionId) {
        App.currentSection = sectionId;
        
        // Update URL without triggering page reload
        if (sectionId !== 'landing') {
          history.replaceState(null, null, `#${sectionId}`);
        } else {
          history.replaceState(null, null, window.location.pathname);
        }
      }
    }
  });
}

// Initialize accessibility features
function initializeAccessibility() {
  // Handle keyboard navigation
  document.addEventListener('keydown', function(e) {
    // Handle escape key for modals/overlays
    if (e.key === 'Escape') {
      closeAllModals();
    }
    
    // Handle tab navigation improvements
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });
  
  // Remove keyboard navigation class on mouse use
  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
  });
  
  // Handle reduced motion preferences
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('reduced-motion');
  }
}

// Close all modals and overlays
function closeAllModals() {
  const modals = document.querySelectorAll('.modal, .overlay, .easter-egg-container');
  modals.forEach(modal => {
    if (modal.style.display !== 'none') {
      modal.style.display = 'none';
    }
  });
}

// Window resize handler
window.addEventListener('resize', function() {
  // Resize Vanta effect if it exists
  if (App.vantaEffect) {
    window.VantaConfig.resize(App.vantaEffect);
  }
});

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
  // Cleanup Vanta effect
  if (App.vantaEffect) {
    window.VantaConfig.destroy(App.vantaEffect);
  }
});

// Export App object for debugging
window.App = App;