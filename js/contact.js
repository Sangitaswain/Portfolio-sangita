/* Sangita's Codeverse - Contact Module */
/* Black Hole Portal Contact Form with Cosmic Animations */

// Configuration constants
const CONFIG = {
  EMAIL: {
    serviceId: 'service_sangita_portfolio',
    templateId: 'template_contact_form',
    publicKey: 'your_public_key_here' // Replace with actual EmailJS public key
  },
  ANIMATION: {
    PARTICLE_COUNT_MOBILE: 15,
    PARTICLE_COUNT_DESKTOP: 25,
    DEBOUNCE_DELAY: 250,
    STATUS_DISPLAY_DURATION: 6000
  },
  VALIDATION: {
    MIN_NAME_LENGTH: 2,
    MIN_MESSAGE_LENGTH: 10,
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  }
};

// Contact module state management
class ContactState {
  constructor() {
    this.isSubmitting = false;
    this.hasSubmitted = false;
    this.animationActive = false;
    this.blackHoleActive = false;
    this.isMobile = this.detectMobile();
  }
  
  detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           window.innerWidth < 768;
  }
  
  reset() {
    this.isSubmitting = false;
    this.animationActive = false;
    this.blackHoleActive = false;
  }
}

const contactState = new ContactState();

// Initialize contact module
function initializeContact() {
  console.log('Initializing Black Hole Portal Contact Module...');
  
  // Detect mobile device
  contactState.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
  
  // Initialize EmailJS (when configured)
  initializeEmailJS();
  
  // Initialize black hole portal effects
  initializeBlackHolePortal();
  
  // Initialize contact form with cosmic enhancements
  initializeContactForm();
  
  // Initialize social links with hover effects
  initializeSocialLinks();
  
  // Initialize intersection observer for entrance animation
  initializeContactObserver();
  
  // Setup resize handler
  setupContactResizeHandler();
  
  console.log('Black Hole Portal Contact Module initialized');
}

// Initialize EmailJS
function initializeEmailJS() {
  // Check if EmailJS is loaded
  if (typeof emailjs !== 'undefined') {
    try {
      emailjs.init(CONFIG.EMAIL.publicKey);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.warn('EmailJS initialization failed:', error);
    }
  } else {
    console.warn('EmailJS library not loaded');
  }
}

// Initialize Black Hole Portal effects
function initializeBlackHolePortal() {
  const contactSection = document.querySelector('.contact-section');
  
  if (!contactSection) {
    console.warn('Contact section not found');
    return;
  }
  
  // Create black hole portal background
  createBlackHolePortal(contactSection);
  
  // Add cosmic particles
  createCosmicParticles(contactSection);
  
  // Initialize gravitational field effect
  initializeGravitationalField();
  
  console.log('Black Hole Portal effects initialized');
}

// Create black hole portal visual effect
function createBlackHolePortal(container) {
  const portalContainer = document.createElement('div');
  portalContainer.className = 'black-hole-portal';
  portalContainer.innerHTML = `
    <div class="black-hole-core"></div>
    <div class="accretion-disk disk-outer"></div>
    <div class="accretion-disk disk-middle"></div>
    <div class="accretion-disk disk-inner"></div>
    <div class="event-horizon"></div>
    <div class="gravitational-lensing"></div>
  `;
  
  container.appendChild(portalContainer);
  
  // Add hover interaction
  portalContainer.addEventListener('mouseenter', () => {
    if (!contactState.animationActive) {
      enhanceBlackHoleAnimation(true);
    }
  });
  
  portalContainer.addEventListener('mouseleave', () => {
    if (!contactState.animationActive) {
      enhanceBlackHoleAnimation(false);
    }
  });
}

// Create cosmic particles around the portal with better performance
function createCosmicParticles(container) {
  const particleCount = contactState.isMobile ? 
    CONFIG.ANIMATION.PARTICLE_COUNT_MOBILE : 
    CONFIG.ANIMATION.PARTICLE_COUNT_DESKTOP;
  
  // Create document fragment for better performance
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < particleCount; i++) {
    const particle = ContactUtils.createElementWithStyles('div', 'cosmic-particle', `
      position: absolute;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: ${getRandomCosmicColor()};
      border-radius: 50%;
      opacity: ${Math.random() * 0.8 + 0.2};
      animation: cosmic-particle-drift ${20 + Math.random() * 15}s linear infinite;
      animation-delay: ${i * 0.3}s;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      pointer-events: none;
      z-index: 1;
      will-change: transform;
    `);
    
    fragment.appendChild(particle);
  }
  
  container.appendChild(fragment);
}

// Get random cosmic color for particles
function getRandomCosmicColor() {
  const colors = [
    '#4a9eff', // Electric blue
    '#14b8a6', // Cyan glow
    '#8b5cf6', // Neon purple
    '#ec4899', // Cosmic pink
    '#f59e0b', // Warning orange
    '#22c55e'  // Success green
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Initialize gravitational field effect
function initializeGravitationalField() {
  const formInputs = document.querySelectorAll('.form-input');
  
  formInputs.forEach(input => {
    input.addEventListener('focus', () => {
      createGravitationalPull(input);
    });
    
    input.addEventListener('blur', () => {
      removeGravitationalPull(input);
    });
  });
}

// Create gravitational pull effect on input focus
function createGravitationalPull(input) {
  const ripple = document.createElement('div');
  ripple.className = 'gravitational-ripple';
  input.parentNode.appendChild(ripple);
  
  // Position ripple at input location
  const rect = input.getBoundingClientRect();
  const parentRect = input.parentNode.getBoundingClientRect();
  
  ripple.style.left = `${rect.left - parentRect.left}px`;
  ripple.style.top = `${rect.top - parentRect.top}px`;
  ripple.style.width = `${rect.width}px`;
  ripple.style.height = `${rect.height}px`;
  
  // Remove ripple after animation
  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple);
    }
  }, 1000);
}

// Remove gravitational pull effect
function removeGravitationalPull(input) {
  const ripples = input.parentNode.querySelectorAll('.gravitational-ripple');
  ripples.forEach(ripple => {
    ripple.classList.add('fade-out');
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 300);
  });
}

// Enhance black hole animation on interaction
function enhanceBlackHoleAnimation(enhance) {
  const blackHole = document.querySelector('.black-hole-portal');
  
  if (!blackHole) return;
  
  if (enhance) {
    blackHole.classList.add('enhanced-animation');
    contactState.blackHoleActive = true;
  } else {
    blackHole.classList.remove('enhanced-animation');
    contactState.blackHoleActive = false;
  }
}

// Initialize contact form
function initializeContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (!contactForm) {
    console.warn('Contact form not found');
    return;
  }
  
  contactForm.addEventListener('submit', handleFormSubmission);
  
  // Initialize form validation
  initializeFormValidation();
}

// Handle form submission with cosmic effects
async function handleFormSubmission(e) {
  e.preventDefault();
  
  if (contactState.isSubmitting) return;
  
  const form = e.target;
  const formData = new FormData(form);
  const submitButton = form.querySelector('.btn-primary');
  const statusDiv = document.getElementById('form-status');
  
  // Validate form
  if (!validateForm(form)) {
    triggerValidationError();
    return;
  }
  
  contactState.isSubmitting = true;
  contactState.animationActive = true;
  
  // Show loading state with cosmic effects
  setSubmitButtonState(submitButton, 'loading');
  triggerBlackHoleSubmissionAnimation();
  
  try {
    // Prepare email data
    const emailData = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      message: formData.get('message'),
      to_name: 'Sangita',
      reply_to: formData.get('email')
    };
    
    let result;
    
    // Send email using EmailJS (if configured)
    if (typeof emailjs !== 'undefined' && CONFIG.EMAIL.publicKey !== 'your_public_key_here') {
      result = await emailjs.send(CONFIG.EMAIL.serviceId, CONFIG.EMAIL.templateId, emailData);
      
      if (result.status === 200) {
        showFormStatus('success', 'Message sent through the cosmic void! 🌌 I\'ll get back to you soon.');
        triggerCosmicSuccessAnimation();
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } else {
      // Fallback: simulate successful submission
      await simulateFormSubmission(emailData);
      showFormStatus('success', 'Message received by the cosmic portal! 🚀 (Demo mode - EmailJS not configured)');
      triggerCosmicSuccessAnimation();
    }
    
    // Reset form with animation
    setTimeout(() => {
      form.reset();
      FormValidator.clearAllErrors();
    }, 1000);
    
    contactState.hasSubmitted = true;
    
  } catch (error) {
    console.error('Form submission error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'The cosmic void rejected your message. Please try again.';
    
    if (error.name === 'NetworkError' || error.message.includes('network')) {
      errorMessage = 'Network error detected. Please check your connection and try again.';
    } else if (error.status === 400) {
      errorMessage = 'Invalid form data. Please check your inputs and try again.';
    } else if (error.status === 429) {
      errorMessage = 'Too many requests. Please wait a moment before trying again.';
    }
    
    showFormStatus('error', errorMessage);
    triggerCosmicErrorAnimation();
    setSubmitButtonState(submitButton, 'error');
    
  } finally {
    // Reset states with proper timing
    setTimeout(() => {
      if (contactState.isSubmitting) {
        setSubmitButtonState(submitButton, 'default');
        contactState.reset();
      }
    }, 3000);
  }
}

// Simulate form submission for demo purposes
function simulateFormSubmission(data) {
  return new Promise((resolve) => {
    console.log('Form submission (demo):', data);
    setTimeout(resolve, 1500); // Simulate network delay
  });
}

// Set submit button state
function setSubmitButtonState(button, state) {
  const btnText = button.querySelector('.btn-text');
  const btnIcon = button.querySelector('.btn-icon');
  
  switch (state) {
    case 'loading':
      button.disabled = true;
      btnText.textContent = 'Sending...';
      btnIcon.textContent = '⏳';
      break;
    case 'success':
      button.disabled = false;
      btnText.textContent = 'Sent!';
      btnIcon.textContent = '✅';
      setTimeout(() => setSubmitButtonState(button, 'default'), 2000);
      break;
    case 'error':
      button.disabled = false;
      btnText.textContent = 'Try Again';
      btnIcon.textContent = '❌';
      setTimeout(() => setSubmitButtonState(button, 'default'), 3000);
      break;
    default:
      button.disabled = false;
      btnText.textContent = 'Send Message';
      btnIcon.textContent = '🚀';
  }
}

// Trigger black hole submission animation
function triggerBlackHoleSubmissionAnimation() {
  const blackHole = document.querySelector('.black-hole-portal');
  const contactSection = document.querySelector('.contact-section');
  
  if (blackHole) {
    blackHole.classList.add('submission-active');
    enhanceBlackHoleAnimation(true);
  }
  
  if (contactSection) {
    contactSection.classList.add('submitting-active');
  }
  
  // Create energy burst effect
  createEnergyBurst();
}

// Create energy burst effect during submission
function createEnergyBurst() {
  const contactForm = document.getElementById('contact-form');
  
  if (!contactForm) return;
  
  const burst = document.createElement('div');
  burst.className = 'energy-burst';
  burst.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(74, 158, 255, 0.8) 0%, transparent 70%);
    pointer-events: none;
    z-index: 20;
    animation: energy-burst-animation 2s ease-out forwards;
  `;
  
  contactForm.appendChild(burst);
  
  setTimeout(() => {
    if (burst.parentNode) {
      burst.parentNode.removeChild(burst);
    }
  }, 2000);
}

// Trigger cosmic success animation
function triggerCosmicSuccessAnimation() {
  const blackHole = document.querySelector('.black-hole-portal');
  const contactSection = document.querySelector('.contact-section');
  
  if (blackHole) {
    blackHole.classList.remove('submission-active');
    blackHole.classList.add('success-active');
  }
  
  if (contactSection) {
    contactSection.classList.remove('submitting-active');
    contactSection.classList.add('success-active');
  }
  
  // Create success particles
  createSuccessParticles();
  
  // Create cosmic ripple effect
  createCosmicRipple();
  
  setTimeout(() => {
    if (blackHole) {
      blackHole.classList.remove('success-active');
    }
    if (contactSection) {
      contactSection.classList.remove('success-active');
    }
  }, 3000);
}

// Trigger cosmic error animation
function triggerCosmicErrorAnimation() {
  const blackHole = document.querySelector('.black-hole-portal');
  const contactSection = document.querySelector('.contact-section');
  
  if (blackHole) {
    blackHole.classList.remove('submission-active');
    blackHole.classList.add('error-active');
  }
  
  if (contactSection) {
    contactSection.classList.remove('submitting-active');
    contactSection.classList.add('error-active');
  }
  
  // Create error shockwave
  createErrorShockwave();
  
  setTimeout(() => {
    if (blackHole) {
      blackHole.classList.remove('error-active');
    }
    if (contactSection) {
      contactSection.classList.remove('error-active');
    }
  }, 2000);
}

// Trigger validation error animation
function triggerValidationError() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.classList.add('validation-error');
    
    setTimeout(() => {
      contactForm.classList.remove('validation-error');
    }, 600);
  }
}

// Create success particles
function createSuccessParticles() {
  const contactSection = document.querySelector('.contact-section');
  const particleCount = contactState.isMobile ? 8 : 15;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'success-particle';
    particle.style.cssText = `
      position: absolute;
      width: 8px;
      height: 8px;
      background: #22c55e;
      border-radius: 50%;
      pointer-events: none;
      z-index: 30;
      animation: success-particle-burst 2s ease-out forwards;
      animation-delay: ${i * 0.1}s;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 10px rgba(34, 197, 94, 0.6);
    `;
    
    contactSection.appendChild(particle);
    
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 2000);
  }
}

// Create cosmic ripple effect
function createCosmicRipple() {
  const contactSection = document.querySelector('.contact-section');
  
  if (!contactSection) return;
  
  const ripple = document.createElement('div');
  ripple.className = 'cosmic-ripple';
  ripple.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border: 2px solid rgba(74, 158, 255, 0.6);
    border-radius: 50%;
    pointer-events: none;
    z-index: 25;
    animation: cosmic-ripple-animation 3s ease-out forwards;
  `;
  
  contactSection.appendChild(ripple);
  
  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple);
    }
  }, 3000);
}

// Create error shockwave
function createErrorShockwave() {
  const contactSection = document.querySelector('.contact-section');
  
  if (!contactSection) return;
  
  const shockwave = document.createElement('div');
  shockwave.className = 'error-shockwave';
  shockwave.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border: 3px solid rgba(239, 68, 68, 0.8);
    border-radius: 50%;
    pointer-events: none;
    z-index: 25;
    animation: error-shockwave-animation 1.5s ease-out forwards;
  `;
  
  contactSection.appendChild(shockwave);
  
  setTimeout(() => {
    if (shockwave.parentNode) {
      shockwave.parentNode.removeChild(shockwave);
    }
  }, 1500);
}

// Show form status message with enhanced styling
function showFormStatus(type, message) {
  const statusDiv = document.getElementById('form-status');
  
  if (statusDiv) {
    statusDiv.className = `form-status ${type}`;
    statusDiv.textContent = message;
    statusDiv.style.display = 'block';
    statusDiv.style.animation = 'status-message-appear 0.5s ease-out forwards';
    
    // Add type-specific effects
    if (type === 'success') {
      statusDiv.style.background = 'linear-gradient(135deg, #22c55e, #059669)';
      statusDiv.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.4)';
    } else if (type === 'error') {
      statusDiv.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
      statusDiv.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.4)';
    }
    
    // Hide status after configured duration
    setTimeout(() => {
      statusDiv.style.animation = 'status-message-disappear 0.3s ease-out forwards';
      setTimeout(() => {
        statusDiv.style.display = 'none';
      }, 300);
    }, CONFIG.ANIMATION.STATUS_DISPLAY_DURATION);
  }
}

// Initialize form validation
function initializeFormValidation() {
  const formInputs = document.querySelectorAll('.form-input');
  
  formInputs.forEach(input => {
    // Real-time validation on blur
    input.addEventListener('blur', function() {
      validateField(this);
    });
    
    // Clear errors on input
    input.addEventListener('input', function() {
      clearFieldError(this);
    });
  });
}

// Form validation class for better organization
class FormValidator {
  static validateForm(form) {
    const inputs = form.querySelectorAll('.form-input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });
    
    return isValid;
  }
  
  static validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    const validation = this.getFieldValidation(fieldName, value, field.hasAttribute('required'));
    
    if (!validation.isValid) {
      this.showFieldError(field, validation.errorMessage);
    } else {
      this.clearFieldError(field);
    }
    
    return validation.isValid;
  }
  
  static getFieldValidation(fieldName, value, isRequired) {
    // Required field validation
    if (isRequired && !value) {
      return {
        isValid: false,
        errorMessage: `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`
      };
    }
    
    // Skip validation for empty optional fields
    if (!value) {
      return { isValid: true };
    }
    
    // Field-specific validation
    switch (fieldName) {
      case 'email':
        return this.validateEmail(value);
      case 'name':
        return this.validateName(value);
      case 'message':
        return this.validateMessage(value);
      default:
        return { isValid: true };
    }
  }
  
  static validateEmail(email) {
    const isValid = CONFIG.VALIDATION.EMAIL_REGEX.test(email);
    return {
      isValid,
      errorMessage: isValid ? '' : 'Please enter a valid email address'
    };
  }
  
  static validateName(name) {
    const isValid = name.length >= CONFIG.VALIDATION.MIN_NAME_LENGTH;
    return {
      isValid,
      errorMessage: isValid ? '' : `Name must be at least ${CONFIG.VALIDATION.MIN_NAME_LENGTH} characters long`
    };
  }
  
  static validateMessage(message) {
    const isValid = message.length >= CONFIG.VALIDATION.MIN_MESSAGE_LENGTH;
    return {
      isValid,
      errorMessage: isValid ? '' : `Message must be at least ${CONFIG.VALIDATION.MIN_MESSAGE_LENGTH} characters long`
    };
  }
  
  static showFieldError(field, message) {
    const errorDiv = document.getElementById(`${field.name}-error`);
    
    if (errorDiv) {
      errorDiv.textContent = message;
      errorDiv.classList.add('show');
    }
    
    field.classList.add('error');
    field.setAttribute('aria-invalid', 'true');
  }
  
  static clearFieldError(field) {
    const errorDiv = document.getElementById(`${field.name}-error`);
    
    if (errorDiv) {
      errorDiv.textContent = '';
      errorDiv.classList.remove('show');
    }
    
    field.classList.remove('error');
    field.setAttribute('aria-invalid', 'false');
  }
  
  static clearAllErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const errorFields = document.querySelectorAll('.form-input.error');
    
    errorMessages.forEach(error => {
      error.textContent = '';
      error.classList.remove('show');
    });
    
    errorFields.forEach(field => {
      field.classList.remove('error');
      field.setAttribute('aria-invalid', 'false');
    });
  }
}

// Legacy function wrappers for backward compatibility
function validateForm(form) {
  return FormValidator.validateForm(form);
}

function validateField(field) {
  return FormValidator.validateField(field);
}

// Show field error
function showFieldError(field, message) {
  const errorDiv = document.getElementById(`${field.name}-error`);
  
  if (errorDiv) {
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
  }
  
  field.classList.add('error');
  field.setAttribute('aria-invalid', 'true');
}

// Clear field error
function clearFieldError(field) {
  const errorDiv = document.getElementById(`${field.name}-error`);
  
  if (errorDiv) {
    errorDiv.textContent = '';
    errorDiv.classList.remove('show');
  }
  
  field.classList.remove('error');
  field.setAttribute('aria-invalid', 'false');
}

// Clear all form errors
function clearFormErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  const errorFields = document.querySelectorAll('.form-input.error');
  
  errorMessages.forEach(error => {
    error.textContent = '';
    error.classList.remove('show');
  });
  
  errorFields.forEach(field => {
    field.classList.remove('error');
    field.setAttribute('aria-invalid', 'false');
  });
}

// Initialize social links (basic version - enhanced version below)

// Initialize contact observer for entrance animation
function initializeContactObserver() {
  const contactSection = document.querySelector('.contact-section');
  
  if (!contactSection) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('contact-visible');
        triggerContactEntranceAnimation();
      }
    });
  }, { threshold: 0.3 });
  
  observer.observe(contactSection);
}

// Trigger contact entrance animation
function triggerContactEntranceAnimation() {
  const blackHole = document.querySelector('.black-hole-portal');
  const contactForm = document.getElementById('contact-form');
  const socialLinks = document.querySelector('.social-links');
  
  if (blackHole) {
    blackHole.style.animation = 'black-hole-entrance 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
  }
  
  if (contactForm) {
    contactForm.style.animation = 'contact-form-entrance 1.5s ease-out 0.5s forwards';
    contactForm.style.opacity = '0';
  }
  
  if (socialLinks) {
    socialLinks.style.animation = 'social-links-entrance 1s ease-out 1s forwards';
    socialLinks.style.opacity = '0';
  }
}

// Utility functions for better performance
class ContactUtils {
  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  static removeElement(element) {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
  
  static removeElements(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => this.removeElement(element));
  }
  
  static createElementWithStyles(tag, className, styles) {
    const element = document.createElement(tag);
    element.className = className;
    element.style.cssText = styles;
    return element;
  }
}

// Setup resize handler with proper debouncing
function setupContactResizeHandler() {
  const handleResize = ContactUtils.debounce(() => {
    const wasMobile = contactState.isMobile;
    contactState.isMobile = contactState.detectMobile();
    
    // Only recreate particles if mobile state changed
    if (wasMobile !== contactState.isMobile) {
      ContactUtils.removeElements('.cosmic-particle');
      
      const contactSection = document.querySelector('.contact-section');
      if (contactSection) {
        createCosmicParticles(contactSection);
      }
    }
  }, CONFIG.ANIMATION.DEBOUNCE_DELAY);
  
  window.addEventListener('resize', handleResize);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}

// Enhanced social links initialization
function initializeSocialLinks() {
  const socialLinks = document.querySelectorAll('.social-link');
  
  socialLinks.forEach(link => {
    // Add hover effects
    link.addEventListener('mouseenter', function() {
      this.classList.add('social-hover');
      createSocialHoverEffect(this);
    });
    
    link.addEventListener('mouseleave', function() {
      this.classList.remove('social-hover');
    });
    
    // Add click effects
    link.addEventListener('click', function(e) {
      this.classList.add('social-clicked');
      createSocialClickEffect(this);
      
      setTimeout(() => {
        this.classList.remove('social-clicked');
      }, 300);
      
      // Track social link clicks
      const platform = this.querySelector('.social-text')?.textContent || 'Unknown';
      console.log(`Social link clicked: ${platform}`);
    });
  });
}

// Create social hover effect
function createSocialHoverEffect(link) {
  const glow = document.createElement('div');
  glow.className = 'social-glow';
  glow.style.cssText = `
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(45deg, rgba(74, 158, 255, 0.3), rgba(20, 184, 166, 0.3));
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  `;
  
  link.style.position = 'relative';
  link.appendChild(glow);
  
  setTimeout(() => {
    glow.style.opacity = '1';
  }, 10);
  
  // Remove glow on mouse leave
  link.addEventListener('mouseleave', function removeGlow() {
    glow.style.opacity = '0';
    setTimeout(() => {
      if (glow.parentNode) {
        glow.parentNode.removeChild(glow);
      }
    }, 300);
    link.removeEventListener('mouseleave', removeGlow);
  });
}

// Create social click effect
function createSocialClickEffect(link) {
  const ripple = document.createElement('div');
  ripple.className = 'social-ripple';
  ripple.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(74, 158, 255, 0.4);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: social-ripple-animation 0.6s ease-out forwards;
    pointer-events: none;
    z-index: 1;
  `;
  
  link.appendChild(ripple);
  
  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple);
    }
  }, 600);
}

// Export enhanced functions for external use
window.ContactModule = {
  init: initializeContact,
  validateForm: validateForm,
  sendEmail: handleFormSubmission,
  state: contactState,
  enhanceBlackHole: enhanceBlackHoleAnimation,
  triggerCosmicBurst: triggerCosmicSuccessAnimation
};