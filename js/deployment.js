/* Sangita's Codeverse - Deployment and Integration Module */
/* Final integration, analytics, and deployment monitoring */

// Deployment configuration and state
const deploymentConfig = {
  // Environment detection
  environment: 'development', // development, staging, production
  version: '1.0.0',
  buildDate: new Date().toISOString(),
  
  // Analytics configuration
  analytics: {
    enabled: false,
    googleAnalyticsId: 'GA_MEASUREMENT_ID', // Replace with actual GA4 ID
    trackingEnabled: true,
    debugMode: false
  },
  
  // Performance monitoring
  monitoring: {
    enabled: true,
    reportingEndpoint: null,
    errorTracking: true,
    performanceTracking: true
  },
  
  // Feature flags
  features: {
    easterEgg: true,
    analytics: false, // Disabled by default for privacy
    errorReporting: true,
    performanceMonitoring: true,
    debugMode: false
  },
  
  // Integration status
  integrations: {
    vanta: false,
    gsap: false,
    emailjs: false,
    projects: false,
    skills: false,
    resume: false,
    contact: false,
    accessibility: false,
    performance: false
  }
};

// Initialize deployment and integration
function initializeDeployment() {
  console.log('🚀 Initializing Final Integration and Deployment...');
  
  // Detect environment
  detectEnvironment();
  
  // Initialize analytics if enabled
  initializeAnalytics();
  
  // Initialize error tracking
  initializeErrorTracking();
  
  // Initialize performance monitoring
  initializePerformanceMonitoring();
  
  // Test all integrations
  testAllIntegrations();
  
  // Setup user journey tracking
  setupUserJourneyTracking();
  
  // Initialize deployment monitoring
  initializeDeploymentMonitoring();
  
  // Log deployment status
  logDeploymentStatus();
  
  console.log('✅ Deployment and integration initialized');
}

// Detect current environment
function detectEnvironment() {
  const hostname = window.location.hostname;
  
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    deploymentConfig.environment = 'development';
    deploymentConfig.features.debugMode = true;
  } else if (hostname.includes('vercel.app') && hostname.includes('git-')) {
    deploymentConfig.environment = 'staging';
  } else if (hostname.includes('sangitas-codeverse.vercel.app') || hostname.includes('sangita.dev')) {
    deploymentConfig.environment = 'production';
    deploymentConfig.analytics.enabled = true;
  }
  
  // Set debug mode based on environment
  if (deploymentConfig.environment === 'development') {
    deploymentConfig.analytics.debugMode = true;
    deploymentConfig.monitoring.enabled = false;
  }
  
  console.log('🌍 Environment detected:', deploymentConfig.environment);
}

// Initialize Google Analytics 4
function initializeAnalytics() {
  if (!deploymentConfig.analytics.enabled || !deploymentConfig.features.analytics) {
    console.log('📊 Analytics disabled');
    return;
  }
  
  // Load Google Analytics 4
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${deploymentConfig.analytics.googleAnalyticsId}`;
  document.head.appendChild(script);
  
  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  // Configure GA4
  gtag('config', deploymentConfig.analytics.googleAnalyticsId, {
    debug_mode: deploymentConfig.analytics.debugMode,
    send_page_view: true,
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
  
  // Track custom events
  setupCustomAnalytics();
  
  console.log('📊 Google Analytics 4 initialized');
}

// Setup custom analytics tracking
function setupCustomAnalytics() {
  if (!window.gtag) return;
  
  // Track section views
  const sections = document.querySelectorAll('section[id]');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gtag('event', 'section_view', {
          section_name: entry.target.id,
          engagement_time_msec: 1000
        });
      }
    });
  }, { threshold: 0.5 });
  
  sections.forEach(section => sectionObserver.observe(section));
  
  // Track interactions
  document.addEventListener('click', (e) => {
    const element = e.target.closest('[data-track]');
    if (element) {
      const action = element.getAttribute('data-track');
      gtag('event', 'interaction', {
        action: action,
        element_type: element.tagName.toLowerCase()
      });
    }
  });
  
  // Track form submissions
  document.addEventListener('submit', (e) => {
    gtag('event', 'form_submit', {
      form_id: e.target.id || 'unknown'
    });
  });
  
  // Track easter egg activation
  if (window.EasterEggModule) {
    const originalActivate = window.EasterEggModule.activate;
    window.EasterEggModule.activate = function() {
      gtag('event', 'easter_egg_activated', {
        activation_method: 'console_command'
      });
      return originalActivate.apply(this, arguments);
    };
  }
}

// Initialize error tracking
function initializeErrorTracking() {
  if (!deploymentConfig.features.errorReporting) return;
  
  // Global error handler
  window.addEventListener('error', (e) => {
    const errorInfo = {
      message: e.message,
      filename: e.filename,
      lineno: e.lineno,
      colno: e.colno,
      stack: e.error?.stack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    
    logError('JavaScript Error', errorInfo);
  });
  
  // Unhandled promise rejection handler
  window.addEventListener('unhandledrejection', (e) => {
    const errorInfo = {
      reason: e.reason,
      promise: e.promise,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    
    logError('Unhandled Promise Rejection', errorInfo);
  });
  
  // Resource loading error handler
  window.addEventListener('error', (e) => {
    if (e.target !== window) {
      const errorInfo = {
        type: 'Resource Loading Error',
        element: e.target.tagName,
        source: e.target.src || e.target.href,
        timestamp: new Date().toISOString()
      };
      
      logError('Resource Error', errorInfo);
    }
  }, true);
  
  console.log('🐛 Error tracking initialized');
}

// Log error with context
function logError(type, errorInfo) {
  console.error(`${type}:`, errorInfo);
  
  // Send to analytics if available
  if (window.gtag) {
    gtag('event', 'exception', {
      description: `${type}: ${errorInfo.message || errorInfo.reason}`,
      fatal: false
    });
  }
  
  // Send to external error tracking service (if configured)
  if (deploymentConfig.monitoring.reportingEndpoint) {
    fetch(deploymentConfig.monitoring.reportingEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: type,
        error: errorInfo,
        environment: deploymentConfig.environment,
        version: deploymentConfig.version
      })
    }).catch(err => {
      console.warn('Failed to send error report:', err);
    });
  }
}

// Initialize performance monitoring
function initializePerformanceMonitoring() {
  if (!deploymentConfig.features.performanceMonitoring) return;
  
  // Monitor Core Web Vitals
  monitorCoreWebVitals();
  
  // Monitor resource loading
  monitorResourceLoading();
  
  // Monitor user interactions
  monitorUserInteractions();
  
  // Monitor memory usage
  monitorMemoryUsage();
  
  console.log('📈 Performance monitoring initialized');
}

// Monitor Core Web Vitals
function monitorCoreWebVitals() {
  // LCP (Largest Contentful Paint)
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    
    reportMetric('LCP', lastEntry.startTime);
  }).observe({ entryTypes: ['largest-contentful-paint'] });
  
  // FID (First Input Delay)
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      const fid = entry.processingStart - entry.startTime;
      reportMetric('FID', fid);
    });
  }).observe({ entryTypes: ['first-input'] });
  
  // CLS (Cumulative Layout Shift)
  let clsValue = 0;
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    reportMetric('CLS', clsValue);
  }).observe({ entryTypes: ['layout-shift'] });
}

// Report performance metric
function reportMetric(name, value) {
  console.log(`📊 ${name}:`, value);
  
  // Send to analytics
  if (window.gtag) {
    gtag('event', 'web_vitals', {
      metric_name: name,
      metric_value: Math.round(value),
      metric_rating: getMetricRating(name, value)
    });
  }
}

// Get metric rating (good, needs improvement, poor)
function getMetricRating(metric, value) {
  const thresholds = {
    LCP: { good: 2500, poor: 4000 },
    FID: { good: 100, poor: 300 },
    CLS: { good: 0.1, poor: 0.25 }
  };
  
  const threshold = thresholds[metric];
  if (!threshold) return 'unknown';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs_improvement';
  return 'poor';
}

// Test all integrations
function testAllIntegrations() {
  console.log('🧪 Testing all integrations...');
  
  // Test Vanta.js integration
  deploymentConfig.integrations.vanta = typeof VANTA !== 'undefined' && typeof THREE !== 'undefined';
  
  // Test GSAP integration
  deploymentConfig.integrations.gsap = typeof gsap !== 'undefined';
  
  // Test EmailJS integration
  deploymentConfig.integrations.emailjs = typeof emailjs !== 'undefined';
  
  // Test module integrations
  deploymentConfig.integrations.projects = typeof window.ProjectsModule !== 'undefined';
  deploymentConfig.integrations.skills = typeof window.SkillsModule !== 'undefined';
  deploymentConfig.integrations.resume = typeof window.ResumeModule !== 'undefined';
  deploymentConfig.integrations.contact = typeof window.ContactModule !== 'undefined';
  deploymentConfig.integrations.accessibility = typeof window.AccessibilityModule !== 'undefined';
  deploymentConfig.integrations.performance = typeof window.PerformanceModule !== 'undefined';
  
  // Log integration status
  const failedIntegrations = Object.entries(deploymentConfig.integrations)
    .filter(([name, status]) => !status)
    .map(([name]) => name);
  
  if (failedIntegrations.length > 0) {
    console.warn('⚠️ Failed integrations:', failedIntegrations);
  } else {
    console.log('✅ All integrations successful');
  }
}

// Setup user journey tracking
function setupUserJourneyTracking() {
  const userJourney = {
    startTime: Date.now(),
    sections: [],
    interactions: [],
    currentSection: 'landing'
  };
  
  // Track section visits
  const sections = document.querySelectorAll('section[id]');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionName = entry.target.id;
        userJourney.currentSection = sectionName;
        userJourney.sections.push({
          section: sectionName,
          timestamp: Date.now(),
          timeFromStart: Date.now() - userJourney.startTime
        });
      }
    });
  }, { threshold: 0.5 });
  
  sections.forEach(section => sectionObserver.observe(section));
  
  // Track interactions
  document.addEventListener('click', (e) => {
    const element = e.target;
    const interaction = {
      type: 'click',
      element: element.tagName.toLowerCase(),
      className: element.className,
      id: element.id,
      section: userJourney.currentSection,
      timestamp: Date.now(),
      timeFromStart: Date.now() - userJourney.startTime
    };
    
    userJourney.interactions.push(interaction);
  });
  
  // Report user journey on page unload
  window.addEventListener('beforeunload', () => {
    const journeyDuration = Date.now() - userJourney.startTime;
    
    if (window.gtag) {
      gtag('event', 'user_journey', {
        duration: journeyDuration,
        sections_visited: userJourney.sections.length,
        interactions_count: userJourney.interactions.length
      });
    }
  });
  
  console.log('🗺️ User journey tracking initialized');
}

// Initialize deployment monitoring
function initializeDeploymentMonitoring() {
  // Monitor page load performance
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`⚡ Page loaded in ${loadTime.toFixed(2)}ms`);
    
    if (window.gtag) {
      gtag('event', 'page_load_time', {
        value: Math.round(loadTime)
      });
    }
  });
  
  // Monitor network status
  if ('connection' in navigator) {
    const connection = navigator.connection;
    console.log('🌐 Network info:', {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData
    });
    
    connection.addEventListener('change', () => {
      console.log('🌐 Network changed:', connection.effectiveType);
    });
  }
  
  // Monitor visibility changes
  document.addEventListener('visibilitychange', () => {
    if (window.gtag) {
      gtag('event', 'page_visibility', {
        visibility_state: document.visibilityState
      });
    }
  });
}

// Monitor resource loading
function monitorResourceLoading() {
  const resources = performance.getEntriesByType('resource');
  
  resources.forEach(resource => {
    if (resource.duration > 1000) { // Resources taking more than 1 second
      console.warn('🐌 Slow resource:', resource.name, `${resource.duration.toFixed(2)}ms`);
    }
  });
  
  // Monitor future resource loads
  new PerformanceObserver((list) => {
    list.getEntries().forEach(entry => {
      if (entry.duration > 1000) {
        console.warn('🐌 Slow resource:', entry.name, `${entry.duration.toFixed(2)}ms`);
      }
    });
  }).observe({ entryTypes: ['resource'] });
}

// Monitor user interactions
function monitorUserInteractions() {
  let interactionCount = 0;
  
  ['click', 'keydown', 'scroll', 'touchstart'].forEach(eventType => {
    document.addEventListener(eventType, () => {
      interactionCount++;
    }, { passive: true });
  });
  
  // Report interaction count periodically
  setInterval(() => {
    if (interactionCount > 0 && window.gtag) {
      gtag('event', 'user_engagement', {
        interaction_count: interactionCount
      });
      interactionCount = 0;
    }
  }, 30000); // Every 30 seconds
}

// Monitor memory usage
function monitorMemoryUsage() {
  if ('memory' in performance) {
    const memory = performance.memory;
    
    console.log('💾 Memory usage:', {
      used: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
      total: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
      limit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB`
    });
    
    // Monitor for memory leaks
    setInterval(() => {
      const currentMemory = performance.memory;
      const usedMB = currentMemory.usedJSHeapSize / 1024 / 1024;
      
      if (usedMB > 100) { // Alert if using more than 100MB
        console.warn('⚠️ High memory usage:', `${usedMB.toFixed(2)} MB`);
      }
    }, 60000); // Check every minute
  }
}

// Log deployment status
function logDeploymentStatus() {
  console.log('🚀 Deployment Status:', {
    environment: deploymentConfig.environment,
    version: deploymentConfig.version,
    buildDate: deploymentConfig.buildDate,
    features: deploymentConfig.features,
    integrations: deploymentConfig.integrations,
    analytics: deploymentConfig.analytics.enabled,
    monitoring: deploymentConfig.monitoring.enabled
  });
}

// Export deployment module
window.DeploymentModule = {
  init: initializeDeployment,
  config: deploymentConfig,
  logError: logError,
  reportMetric: reportMetric,
  testIntegrations: testAllIntegrations
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initializeDeployment);