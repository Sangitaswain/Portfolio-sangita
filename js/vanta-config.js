/* Sangita's Codeverse - Vanta.js Configuration */
/* 3D Galaxy background configuration with performance optimization */

// Device detection for performance optimization
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isLowEnd = navigator.hardwareConcurrency <= 2;
const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Vanta.js Galaxy Configuration
const vantaConfig = {
  el: "#landing-bg",
  mouseControls: !isMobile,
  touchControls: isMobile,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: isMobile ? 0.5 : 1.0,
  scaleMobile: 0.3,
  color: 0x8b5cf6, // Neon purple
  backgroundColor: 0x0a0a0a, // Space black
  points: isMobile ? 5.0 : 10.0,
  maxDistance: isMobile ? 15.0 : 20.0,
  spacing: isMobile ? 20.0 : 15.0,
  showDots: true
};

// Initialize Vanta Galaxy Effect
function initVantaGalaxy() {
  // Check if reduced motion is preferred or device is low-end
  if (isReducedMotion || isLowEnd) {
    console.log('Vanta disabled: Reduced motion preference or low-end device detected');
    showFallbackBackground();
    return null;
  }

  // Check if required libraries are loaded
  if (typeof THREE === 'undefined' || typeof VANTA === 'undefined') {
    console.warn('Vanta.js or Three.js not loaded, showing fallback background');
    showFallbackBackground();
    return null;
  }

  try {
    const vantaEffect = VANTA.GALAXY(vantaConfig);
    console.log('Vanta Galaxy effect initialized successfully');
    return vantaEffect;
  } catch (error) {
    console.error('Failed to initialize Vanta Galaxy effect:', error);
    showFallbackBackground();
    return null;
  }
}

// Show fallback background when Vanta fails or is disabled
function showFallbackBackground() {
  const galaxyBg = document.getElementById('landing-bg');
  const fallbackBg = document.querySelector('.fallback-bg');
  
  if (galaxyBg) {
    galaxyBg.style.display = 'none';
  }
  
  if (fallbackBg) {
    fallbackBg.style.display = 'block';
  }
}

// Cleanup function for Vanta effect
function destroyVantaEffect(effect) {
  if (effect && typeof effect.destroy === 'function') {
    effect.destroy();
  }
}

// Resize handler for Vanta effect
function handleVantaResize(effect) {
  if (effect && typeof effect.resize === 'function') {
    effect.resize();
  }
}

// Export configuration and functions
window.VantaConfig = {
  config: vantaConfig,
  init: initVantaGalaxy,
  destroy: destroyVantaEffect,
  resize: handleVantaResize,
  showFallback: showFallbackBackground
};