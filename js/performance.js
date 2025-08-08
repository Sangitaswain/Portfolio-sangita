/* Sangita's Codeverse - Performance Optimization Module */
/* Advanced performance optimizations and mobile responsiveness */

// Performance state and configuration
const performanceConfig = {
  // Device detection
  isMobile: false,
  isTablet: false,
  isLowEnd: false,
  isSlowConnection: false,
  
  // Performance settings
  reducedMotion: false,
  highContrast: false,
  prefersDataSaver: false,
  
  // Optimization flags
  lazyLoadingEnabled: true,
  imageOptimizationEnabled: true,
  animationOptimizationEnabled: true,
  
  // Core Web Vitals tracking
  vitals: {
    lcp: null,
    fid: null,
    cls: null
  }
};

// Initialize performance optimizations
function initializePerformanceOptimizations() {
  console.log('🚀 Initializing Performance Optimizations...');
  
  // Detect device capabilities
  detectDeviceCapabilities();
  
  // Detect user preferences
  detectUserPreferences();
  
  // Implement lazy loading
  implementLazyLoading();
  
  // Optimize animations based on device
  optimizeAnimations();
  
  // Implement image optimization
  implementImageOptimization();
  
  // Setup Core Web Vitals monitoring
  setupWebVitalsMonitoring();
  
  // Optimize loading performance
  optimizeLoadingPerformance();
  
  // Setup connection-aware features
  setupConnectionAwareFeatures();
  
  console.log('✅ Performance optimizations initialized');
  logPerformanceConfig();
}

// Detect device capabilities
function detectDeviceCapabilities() {
  // Mobile detection
  performanceConfig.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                               window.innerWidth < 768;
  
  // Tablet detection
  performanceConfig.isTablet = /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent) || 
                               (window.innerWidth >= 768 && window.innerWidth < 1024);
  
  // Low-end device detection
  performanceConfig.isLowEnd = navigator.hardwareConcurrency <= 2 || 
                               navigator.deviceMemory <= 2 ||
                               /Android.*Chrome\/[0-5][0-9]/i.test(navigator.userAgent);
  
  // Connection detection
  if ('connection' in navigator) {
    const connection = navigator.connection;
    performanceConfig.isSlowConnection = connection.effectiveType === 'slow-2g' || 
                                        connection.effectiveType === '2g' ||
                                        connection.saveData;
    performanceConfig.prefersDataSaver = connection.saveData;
  }
  
  console.log('📱 Device capabilities detected:', {
    mobile: performanceConfig.isMobile,
    tablet: performanceConfig.isTablet,
    lowEnd: performanceConfig.isLowEnd,
    slowConnection: performanceConfig.isSlowConnection
  });
}
// Detect user preferences
function detectUserPreferences() {
  // Reduced motion preference
  performanceConfig.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // High contrast preference
  performanceConfig.highContrast = window.matchMedia('(prefers-contrast: high)').matches;
  
  // Apply preferences to document
  if (performanceConfig.reducedMotion) {
    document.body.classList.add('reduced-motion');
  }
  
  if (performanceConfig.highContrast) {
    document.body.classList.add('high-contrast');
  }
  
  // Listen for preference changes
  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
    performanceConfig.reducedMotion = e.matches;
    document.body.classList.toggle('reduced-motion', e.matches);
    optimizeAnimations();
  });
  
  window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
    performanceConfig.highContrast = e.matches;
    document.body.classList.toggle('high-contrast', e.matches);
  });
}

// Implement lazy loading for images and heavy content
function implementLazyLoading() {
  if (!performanceConfig.lazyLoadingEnabled) return;
  
  // Lazy load images
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        img.classList.add('lazy-loaded');
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });
  
  images.forEach(img => {
    img.classList.add('lazy');
    imageObserver.observe(img);
  });
  
  // Lazy load heavy animations
  const heavyAnimations = document.querySelectorAll('[data-heavy-animation]');
  const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animationType = element.dataset.heavyAnimation;
        
        // Only load heavy animations on capable devices
        if (!performanceConfig.isLowEnd && !performanceConfig.reducedMotion) {
          loadHeavyAnimation(element, animationType);
        }
        
        observer.unobserve(element);
      }
    });
  }, {
    rootMargin: '100px 0px',
    threshold: 0.1
  });
  
  heavyAnimations.forEach(element => {
    animationObserver.observe(element);
  });
  
  console.log('🖼️ Lazy loading implemented for', images.length, 'images and', heavyAnimations.length, 'heavy animations');
}

// Load heavy animation based on type
function loadHeavyAnimation(element, animationType) {
  switch (animationType) {
    case 'particles':
      if (window.createCosmicParticles) {
        window.createCosmicParticles(element);
      }
      break;
    case 'constellation':
      if (window.SkillsModule) {
        window.SkillsModule.enhanceConstellation(element);
      }
      break;
    case 'shooting-stars':
      if (window.ProjectsModule) {
        window.ProjectsModule.addShootingStars(element);
      }
      break;
    default:
      element.classList.add('animation-loaded');
  }
}

// Optimize animations based on device capabilities
function optimizeAnimations() {
  const animationLevel = getOptimalAnimationLevel();
  document.body.setAttribute('data-animation-level', animationLevel);
  
  // Apply animation optimizations
  switch (animationLevel) {
    case 'none':
      disableAllAnimations();
      break;
    case 'minimal':
      enableMinimalAnimations();
      break;
    case 'moderate':
      enableModerateAnimations();
      break;
    case 'full':
      enableFullAnimations();
      break;
  }
  
  console.log('🎬 Animation level set to:', animationLevel);
}

// Get optimal animation level based on device and preferences
function getOptimalAnimationLevel() {
  if (performanceConfig.reducedMotion) return 'none';
  if (performanceConfig.isLowEnd || performanceConfig.isSlowConnection) return 'minimal';
  if (performanceConfig.isMobile) return 'moderate';
  return 'full';
}

// Animation level implementations
function disableAllAnimations() {
  const style = document.createElement('style');
  style.textContent = `
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    .vanta-canvas { display: none !important; }
    .fallback-bg { display: block !important; }
  `;
  document.head.appendChild(style);
}

function enableMinimalAnimations() {
  const style = document.createElement('style');
  style.textContent = `
    .cosmic-particle, .floating-particle { display: none !important; }
    .vanta-canvas { opacity: 0.3 !important; }
    .complex-animation { animation: none !important; }
  `;
  document.head.appendChild(style);
}

function enableModerateAnimations() {
  const style = document.createElement('style');
  style.textContent = `
    .cosmic-particle { animation-duration: 30s !important; }
    .floating-particle { animation-duration: 25s !important; }
    .complex-animation { animation-duration: 1s !important; }
  `;
  document.head.appendChild(style);
}

function enableFullAnimations() {
  // Full animations are enabled by default
  console.log('🌟 Full animations enabled');
}
// Implement image optimization
function implementImageOptimization() {
  if (!performanceConfig.imageOptimizationEnabled) return;
  
  // WebP support detection
  const supportsWebP = checkWebPSupport();
  
  // Optimize images based on device and connection
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    optimizeImage(img, supportsWebP);
  });
  
  // Preload critical images
  preloadCriticalImages();
  
  console.log('🖼️ Image optimization implemented, WebP support:', supportsWebP);
}

// Check WebP support
function checkWebPSupport() {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

// Optimize individual image
function optimizeImage(img, supportsWebP) {
  // Add loading attribute for native lazy loading
  if ('loading' in HTMLImageElement.prototype) {
    img.loading = 'lazy';
  }
  
  // Add responsive image attributes
  if (!img.sizes && img.classList.contains('responsive-img')) {
    img.sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw';
  }
  
  // Add error handling
  img.addEventListener('error', function() {
    this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
    this.alt = 'Image not found';
  });
}

// Preload critical images
function preloadCriticalImages() {
  const criticalImages = [
    'assets/images/profile.jpg',
    // Add other critical images here
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

// Setup Core Web Vitals monitoring
function setupWebVitalsMonitoring() {
  // Largest Contentful Paint (LCP)
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    performanceConfig.vitals.lcp = lastEntry.startTime;
    console.log('📊 LCP:', lastEntry.startTime);
  }).observe({ entryTypes: ['largest-contentful-paint'] });
  
  // First Input Delay (FID)
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      performanceConfig.vitals.fid = entry.processingStart - entry.startTime;
      console.log('📊 FID:', entry.processingStart - entry.startTime);
    });
  }).observe({ entryTypes: ['first-input'] });
  
  // Cumulative Layout Shift (CLS)
  let clsValue = 0;
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    performanceConfig.vitals.cls = clsValue;
    console.log('📊 CLS:', clsValue);
  }).observe({ entryTypes: ['layout-shift'] });
  
  // Report vitals after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      reportWebVitals();
    }, 3000);
  });
}

// Report Web Vitals
function reportWebVitals() {
  const vitals = performanceConfig.vitals;
  console.log('📊 Core Web Vitals Report:', {
    LCP: vitals.lcp ? `${vitals.lcp.toFixed(2)}ms` : 'Not measured',
    FID: vitals.fid ? `${vitals.fid.toFixed(2)}ms` : 'Not measured',
    CLS: vitals.cls ? vitals.cls.toFixed(4) : 'Not measured'
  });
  
  // Send to analytics if available
  if (typeof gtag !== 'undefined') {
    gtag('event', 'web_vitals', {
      lcp: vitals.lcp,
      fid: vitals.fid,
      cls: vitals.cls
    });
  }
}

// Optimize loading performance
function optimizeLoadingPerformance() {
  // Preload critical resources
  preloadCriticalResources();
  
  // Defer non-critical scripts
  deferNonCriticalScripts();
  
  // Optimize font loading
  optimizeFontLoading();
  
  // Implement resource hints
  implementResourceHints();
  
  console.log('⚡ Loading performance optimizations applied');
}

// Preload critical resources
function preloadCriticalResources() {
  const criticalResources = [
    { href: 'css/main.css', as: 'style' },
    { href: 'css/components.css', as: 'style' },
    { href: 'js/main.js', as: 'script' }
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.as === 'style') {
      link.onload = function() { this.rel = 'stylesheet'; };
    }
    document.head.appendChild(link);
  });
}

// Defer non-critical scripts
function deferNonCriticalScripts() {
  const nonCriticalScripts = document.querySelectorAll('script[data-defer]');
  
  nonCriticalScripts.forEach(script => {
    script.defer = true;
  });
  
  // Load analytics and other non-critical scripts after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      loadNonCriticalScripts();
    }, 1000);
  });
}

// Load non-critical scripts
function loadNonCriticalScripts() {
  // Load analytics
  if (typeof gtag === 'undefined' && !performanceConfig.prefersDataSaver) {
    loadGoogleAnalytics();
  }
  
  // Load other non-critical features
  loadNonCriticalFeatures();
}

// Load Google Analytics
function loadGoogleAnalytics() {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
  document.head.appendChild(script);
  
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
}

// Load non-critical features
function loadNonCriticalFeatures() {
  // Load social media widgets only if not on slow connection
  if (!performanceConfig.isSlowConnection) {
    loadSocialMediaWidgets();
  }
}

// Load social media widgets
function loadSocialMediaWidgets() {
  // Placeholder for social media widget loading
  console.log('📱 Social media widgets loaded');
}
// Optimize font loading
function optimizeFontLoading() {
  // Preload critical fonts
  const criticalFonts = [
    'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
  ];
  
  criticalFonts.forEach(fontUrl => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = fontUrl;
    link.as = 'style';
    link.onload = function() { this.rel = 'stylesheet'; };
    document.head.appendChild(link);
  });
  
  // Add font-display: swap to existing font declarations
  const fontFaces = document.styleSheets;
  Array.from(fontFaces).forEach(sheet => {
    try {
      const rules = sheet.cssRules || sheet.rules;
      Array.from(rules).forEach(rule => {
        if (rule.type === CSSRule.FONT_FACE_RULE) {
          rule.style.fontDisplay = 'swap';
        }
      });
    } catch (e) {
      // Cross-origin stylesheets may throw errors
    }
  });
}

// Implement resource hints
function implementResourceHints() {
  const resourceHints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'dns-prefetch', href: '//cdnjs.cloudflare.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: true },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
  ];
  
  resourceHints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossorigin) link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

// Setup connection-aware features
function setupConnectionAwareFeatures() {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    
    // Adjust features based on connection
    connection.addEventListener('change', () => {
      updateConnectionAwareFeatures();
    });
    
    updateConnectionAwareFeatures();
  }
}

// Update features based on connection
function updateConnectionAwareFeatures() {
  const connection = navigator.connection;
  if (!connection) return;
  
  const isSlowConnection = connection.effectiveType === 'slow-2g' || 
                          connection.effectiveType === '2g';
  
  if (isSlowConnection !== performanceConfig.isSlowConnection) {
    performanceConfig.isSlowConnection = isSlowConnection;
    
    if (isSlowConnection) {
      // Reduce quality for slow connections
      reduceQualityForSlowConnection();
    } else {
      // Restore quality for fast connections
      restoreQualityForFastConnection();
    }
  }
}

// Reduce quality for slow connections
function reduceQualityForSlowConnection() {
  document.body.classList.add('slow-connection');
  
  // Reduce animation complexity
  optimizeAnimations();
  
  // Pause non-essential animations
  const nonEssentialAnimations = document.querySelectorAll('.non-essential-animation');
  nonEssentialAnimations.forEach(element => {
    element.style.animationPlayState = 'paused';
  });
  
  console.log('🐌 Reduced quality for slow connection');
}

// Restore quality for fast connections
function restoreQualityForFastConnection() {
  document.body.classList.remove('slow-connection');
  
  // Restore animations
  const pausedAnimations = document.querySelectorAll('.non-essential-animation');
  pausedAnimations.forEach(element => {
    element.style.animationPlayState = 'running';
  });
  
  console.log('🚀 Restored quality for fast connection');
}

// Create fallback experiences for older browsers
function createFallbackExperiences() {
  // Check for modern browser features
  const modernFeatures = {
    intersectionObserver: 'IntersectionObserver' in window,
    webGL: !!window.WebGLRenderingContext,
    css3DTransforms: 'transform' in document.body.style,
    cssGrid: CSS.supports('display', 'grid'),
    customProperties: CSS.supports('color', 'var(--test)')
  };
  
  // Apply fallbacks for missing features
  Object.keys(modernFeatures).forEach(feature => {
    if (!modernFeatures[feature]) {
      document.body.classList.add(`no-${feature.toLowerCase()}`);
      applyFallbackFor(feature);
    }
  });
  
  console.log('🔧 Browser feature support:', modernFeatures);
}

// Apply specific fallbacks
function applyFallbackFor(feature) {
  switch (feature) {
    case 'intersectionObserver':
      // Use scroll-based lazy loading
      implementScrollBasedLazyLoading();
      break;
    case 'webGL':
      // Show static background
      document.querySelector('.vanta-canvas')?.style.setProperty('display', 'none');
      document.querySelector('.fallback-bg')?.style.setProperty('display', 'block');
      break;
    case 'css3DTransforms':
      // Use 2D transforms
      document.body.classList.add('transforms-2d-only');
      break;
    case 'cssGrid':
      // Use flexbox fallback
      document.body.classList.add('flexbox-fallback');
      break;
    case 'customProperties':
      // Use static CSS values
      document.body.classList.add('static-css');
      break;
  }
}

// Implement scroll-based lazy loading for older browsers
function implementScrollBasedLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  function loadImagesInViewport() {
    lazyImages.forEach(img => {
      if (isInViewport(img) && img.dataset.src) {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        img.classList.add('lazy-loaded');
        delete img.dataset.src;
      }
    });
  }
  
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }
  
  // Load images on scroll
  window.addEventListener('scroll', loadImagesInViewport);
  window.addEventListener('resize', loadImagesInViewport);
  
  // Initial load
  loadImagesInViewport();
}

// Log performance configuration
function logPerformanceConfig() {
  console.log('⚙️ Performance Configuration:', {
    device: {
      mobile: performanceConfig.isMobile,
      tablet: performanceConfig.isTablet,
      lowEnd: performanceConfig.isLowEnd
    },
    connection: {
      slow: performanceConfig.isSlowConnection,
      dataSaver: performanceConfig.prefersDataSaver
    },
    preferences: {
      reducedMotion: performanceConfig.reducedMotion,
      highContrast: performanceConfig.highContrast
    },
    optimizations: {
      lazyLoading: performanceConfig.lazyLoadingEnabled,
      imageOptimization: performanceConfig.imageOptimizationEnabled,
      animationOptimization: performanceConfig.animationOptimizationEnabled
    }
  });
}

// Compress and optimize assets (build-time optimization guidance)
function provideAssetOptimizationGuidance() {
  console.log('📦 Asset Optimization Recommendations:');
  console.log('• Images: Use WebP format with JPEG fallback');
  console.log('• Images: Implement responsive images with srcset');
  console.log('• CSS: Minify and combine stylesheets');
  console.log('• JavaScript: Minify and use tree shaking');
  console.log('• Fonts: Use font-display: swap');
  console.log('• Icons: Use SVG sprites or icon fonts');
  console.log('• Critical CSS: Inline above-the-fold styles');
}

// Initialize performance optimizations on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initializePerformanceOptimizations();
  createFallbackExperiences();
  provideAssetOptimizationGuidance();
});

// Export performance module
window.PerformanceModule = {
  init: initializePerformanceOptimizations,
  config: performanceConfig,
  optimizeAnimations: optimizeAnimations,
  reportVitals: reportWebVitals,
  createFallbacks: createFallbackExperiences
};