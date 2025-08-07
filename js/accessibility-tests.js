/* Sangita's Codeverse - Accessibility Testing Module */
/* Additional accessibility tests and compliance checks */

// Test ARIA labels compliance
function testAriaLabels() {
  const elementsNeedingLabels = document.querySelectorAll('button, input, textarea, select, [role="button"], [role="link"]');
  
  elementsNeedingLabels.forEach(element => {
    const hasLabel = element.getAttribute('aria-label') || 
                    element.getAttribute('aria-labelledby') || 
                    element.querySelector('label') ||
                    element.textContent.trim();
    
    if (!hasLabel) {
      accessibilityConfig.wcag.violations.push({
        test: 'ariaLabels',
        element: element.tagName,
        issue: 'Interactive element missing accessible label'
      });
    } else {
      accessibilityConfig.wcag.passes.push({
        test: 'ariaLabels',
        element: element.tagName
      });
    }
  });
}

// Test form labels compliance
function testFormLabels() {
  const formInputs = document.querySelectorAll('input, textarea, select');
  
  formInputs.forEach(input => {
    const hasLabel = input.labels && input.labels.length > 0 ||
                     input.getAttribute('aria-label') ||
                     input.getAttribute('aria-labelledby');
    
    if (!hasLabel && input.type !== 'hidden') {
      accessibilityConfig.wcag.violations.push({
        test: 'formLabels',
        element: input.tagName,
        issue: 'Form input missing label'
      });
    } else if (hasLabel) {
      accessibilityConfig.wcag.passes.push({
        test: 'formLabels',
        element: input.tagName
      });
    }
  });
}

// Test heading structure compliance
function testHeadingStructure() {
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let previousLevel = 0;
  
  headings.forEach(heading => {
    const currentLevel = parseInt(heading.tagName.charAt(1));
    
    if (currentLevel > previousLevel + 1) {
      accessibilityConfig.wcag.violations.push({
        test: 'headingStructure',
        element: heading.tagName,
        issue: `Heading level skipped from h${previousLevel} to h${currentLevel}`
      });
    } else {
      accessibilityConfig.wcag.passes.push({
        test: 'headingStructure',
        element: heading.tagName
      });
    }
    
    previousLevel = currentLevel;
  });
}

// Test image alt text compliance
function testImageAltText() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    const hasAlt = img.hasAttribute('alt');
    const isDecorative = img.getAttribute('role') === 'presentation' || 
                        img.getAttribute('aria-hidden') === 'true';
    
    if (!hasAlt && !isDecorative) {
      accessibilityConfig.wcag.violations.push({
        test: 'imageAltText',
        element: 'IMG',
        issue: 'Image missing alt text'
      });
    } else {
      accessibilityConfig.wcag.passes.push({
        test: 'imageAltText',
        element: 'IMG'
      });
    }
  });
}

// Test link purpose compliance
function testLinkPurpose() {
  const links = document.querySelectorAll('a[href]');
  
  links.forEach(link => {
    const linkText = link.textContent.trim();
    const hasAriaLabel = link.getAttribute('aria-label');
    const hasTitle = link.getAttribute('title');
    
    if (!linkText && !hasAriaLabel && !hasTitle) {
      accessibilityConfig.wcag.violations.push({
        test: 'linkPurpose',
        element: 'A',
        issue: 'Link missing accessible text'
      });
    } else if (linkText.toLowerCase().includes('click here') || 
               linkText.toLowerCase().includes('read more')) {
      accessibilityConfig.wcag.warnings.push({
        test: 'linkPurpose',
        element: 'A',
        issue: 'Link text not descriptive'
      });
    } else {
      accessibilityConfig.wcag.passes.push({
        test: 'linkPurpose',
        element: 'A'
      });
    }
  });
}

// Fix CSS custom properties support
function fixCustomPropertiesSupport() {
  if (!CSS.supports('color', 'var(--test)')) {
    document.body.classList.add('no-custom-properties');
    
    // Add fallback styles
    const style = document.createElement('style');
    style.textContent = `
      .no-custom-properties {
        --color-accent-blue: #4a9eff;
        --color-accent-teal: #14b8a6;
        --color-text-primary: #ffffff;
        --color-bg-primary: #0f0f0f;
      }
      .no-custom-properties .hero-title {
        color: #4a9eff !important;
      }
      .no-custom-properties .btn-primary {
        background: linear-gradient(135deg, #4a9eff, #14b8a6) !important;
      }
    `;
    document.head.appendChild(style);
  }
}

// Fix focus-visible support
function fixFocusVisibleSupport() {
  if (!CSS.supports('selector(:focus-visible)')) {
    document.body.classList.add('no-focus-visible');
    
    // Add focus-visible polyfill behavior
    let hadKeyboardEvent = false;
    
    document.addEventListener('keydown', () => {
      hadKeyboardEvent = true;
    });
    
    document.addEventListener('mousedown', () => {
      hadKeyboardEvent = false;
    });
    
    document.addEventListener('focusin', (e) => {
      if (hadKeyboardEvent) {
        e.target.classList.add('focus-visible');
      }
    });
    
    document.addEventListener('focusout', (e) => {
      e.target.classList.remove('focus-visible');
    });
  }
}

// Fix smooth scrolling support
function fixSmoothScrollSupport() {
  if (!CSS.supports('scroll-behavior', 'smooth')) {
    document.body.classList.add('no-smooth-scroll');
    
    // Implement smooth scroll polyfill
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
          smoothScrollTo(target.offsetTop, 500);
        }
      });
    });
  }
}

// Smooth scroll polyfill
function smoothScrollTo(targetPosition, duration) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  
  requestAnimationFrame(animation);
}

// Initialize dynamic focus management
function initializeDynamicFocusManagement() {
  // Manage focus for dynamically loaded content
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Make new interactive elements focusable
            const interactiveElements = node.querySelectorAll('button, a, input, textarea, select, [role="button"]');
            
            interactiveElements.forEach(element => {
              if (!element.hasAttribute('tabindex') && element.tagName !== 'INPUT' && element.tagName !== 'TEXTAREA' && element.tagName !== 'SELECT') {
                element.setAttribute('tabindex', '0');
              }
            });
          }
        });
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// Initialize focus restoration
function initializeFocusRestoration() {
  let lastFocusedElement = null;
  
  // Store focus before navigation
  document.addEventListener('focusout', (e) => {
    lastFocusedElement = e.target;
  });
  
  // Restore focus after page interactions
  window.addEventListener('popstate', () => {
    if (lastFocusedElement && document.contains(lastFocusedElement)) {
      setTimeout(() => {
        lastFocusedElement.focus();
      }, 100);
    }
  });
}

// Enhance form submission feedback
function enhanceFormSubmissionFeedback() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const submitButton = this.querySelector('button[type="submit"], input[type="submit"]');
      
      if (submitButton) {
        // Add loading state
        submitButton.setAttribute('aria-busy', 'true');
        submitButton.disabled = true;
        
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Submitting...';
        
        // Announce submission
        announceToScreenReader('Form is being submitted');
        
        // Simulate form processing (in real app, this would be handled by actual form submission)
        setTimeout(() => {
          submitButton.setAttribute('aria-busy', 'false');
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }, 2000);
      }
    });
  });
}

// Initialize form field descriptions
function initializeFormFieldDescriptions() {
  const formFields = document.querySelectorAll('input, textarea, select');
  
  formFields.forEach(field => {
    // Add helpful descriptions for complex fields
    if (field.type === 'email') {
      addFieldDescription(field, 'Enter a valid email address (e.g., user@example.com)');
    } else if (field.type === 'password') {
      addFieldDescription(field, 'Password should be at least 8 characters long');
    } else if (field.hasAttribute('required')) {
      addFieldDescription(field, 'This field is required');
    }
  });
}

// Add description to form field
function addFieldDescription(field, description) {
  const descriptionId = `${field.id || field.name}-description`;
  
  if (!document.getElementById(descriptionId)) {
    const descriptionElement = document.createElement('div');
    descriptionElement.id = descriptionId;
    descriptionElement.className = 'field-description';
    descriptionElement.textContent = description;
    
    field.parentNode.insertBefore(descriptionElement, field.nextSibling);
    
    // Link description to field
    const existingDescribedBy = field.getAttribute('aria-describedby') || '';
    const newDescribedBy = existingDescribedBy ? `${existingDescribedBy} ${descriptionId}` : descriptionId;
    field.setAttribute('aria-describedby', newDescribedBy);
  }
}

// Handle planet arrow navigation
function handlePlanetArrowNavigation(e) {
  e.preventDefault();
  const planets = Array.from(document.querySelectorAll('.planet-link'));
  const currentIndex = planets.indexOf(e.target);
  let nextIndex = currentIndex;
  
  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      nextIndex = (currentIndex + 1) % planets.length;
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      nextIndex = (currentIndex - 1 + planets.length) % planets.length;
      break;
  }
  
  if (nextIndex !== currentIndex) {
    planets[nextIndex].focus();
    const planetName = planets[nextIndex].querySelector('.planet-label')?.textContent || 'Navigation item';
    announceToScreenReader(`${planetName} selected`);
  }
}

// Handle home/end navigation
function handleHomeEndNavigation(e, focusableElements) {
  if (e.key === 'Home') {
    e.preventDefault();
    focusableElements[0]?.focus();
    announceToScreenReader('Moved to first interactive element');
  } else if (e.key === 'End') {
    e.preventDefault();
    focusableElements[focusableElements.length - 1]?.focus();
    announceToScreenReader('Moved to last interactive element');
  }
}

// Export additional functions
window.AccessibilityTests = {
  testAriaLabels,
  testFormLabels,
  testHeadingStructure,
  testImageAltText,
  testLinkPurpose,
  fixCustomPropertiesSupport,
  fixFocusVisibleSupport,
  fixSmoothScrollSupport
};