/* Sangita's Codeverse - Accessibility Module (stabilized minimal build) */
/* Provides basic WCAG helpers and a safe public API */

(function () {
  'use strict';

  // Public config used by tests and other modules
  const accessibilityConfig = {
    features: {
      keyboardNavigation: true,
      screenReaderSupport: true,
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    },
    wcag: {
      level: 'AA',
      violations: [],
      warnings: [],
      passes: []
    }
  };

  // Announce helper using an aria-live region
  function createLiveRegion() {
    let region = document.getElementById('accessibility-live-region');
    if (region) return region;

    region = document.createElement('div');
    region.id = 'accessibility-live-region';
    region.className = 'sr-only';
    region.setAttribute('aria-live', 'polite');
    region.setAttribute('aria-atomic', 'true');
    document.body.appendChild(region);
    return region;
  }

  function announce(message, options = { assertive: false }) {
    try {
      const region = createLiveRegion();
      region.setAttribute('aria-live', options.assertive ? 'assertive' : 'polite');
      // Clear and set after a tiny delay so SRs re-announce content
      region.textContent = '';
      setTimeout(() => {
        region.textContent = message || '';
      }, 50);
    } catch (_) {
      // no-op if DOM not ready
    }
  }

  // Keyboard navigation class toggling
  function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  // Skip link support
  function initializeSkipLinks() {
    document.querySelectorAll('.skip-nav').forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (!targetId) return;
        const target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        announce('Skipped to main content');
        // Cleanup tabindex after focus
        setTimeout(() => target.removeAttribute('tabindex'), 1000);
      });
    });
  }

  // Reduced motion support
  function applyReducedMotionClass() {
    if (accessibilityConfig.features.reducedMotion) {
      document.body.classList.add('reduced-motion');
    }
    try {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      mq.addEventListener('change', (e) => {
        accessibilityConfig.features.reducedMotion = e.matches;
        document.body.classList.toggle('reduced-motion', e.matches);
      });
    } catch (_) {
      // Safari <14 fallback: ignore
    }
  }

  function init() {
    initializeKeyboardNavigation();
    initializeSkipLinks();
    applyReducedMotionClass();
  }

  // Expose a small and stable API
  window.AccessibilityModule = {
    init,
    announce,
    config: accessibilityConfig
  };

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();