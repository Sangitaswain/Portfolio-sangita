/* Sangita's Codeverse - Contact Module */
/* Contact form and EmailJS integration */

// EmailJS configuration (to be set up with actual service)
const emailConfig = {
  serviceId: 'service_sangita_portfolio',
  templateId: 'template_contact_form',
  publicKey: 'your_public_key_here' // Replace with actual EmailJS public key
};

// Initialize contact module
function initializeContact() {
  console.log('Initializing contact module...');
  
  // Initialize EmailJS (when configured)
  initializeEmailJS();
  
  // Initialize contact form
  initializeContactForm();
  
  // Initialize social links
  initializeSocialLinks();
  
  console.log('Contact module initialized');
}

// Initialize EmailJS
function initializeEmailJS() {
  // Check if EmailJS is loaded
  if (typeof emailjs !== 'undefined') {
    try {
      emailjs.init(emailConfig.publicKey);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.warn('EmailJS initialization failed:', error);
    }
  } else {
    console.warn('EmailJS library not loaded');
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

// Handle form submission
async function handleFormSubmission(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const submitButton = form.querySelector('.btn-primary');
  const statusDiv = document.getElementById('form-status');
  
  // Validate form
  if (!validateForm(form)) {
    return;
  }
  
  // Show loading state
  setSubmitButtonState(submitButton, 'loading');
  
  try {
    // Prepare email data
    const emailData = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      message: formData.get('message'),
      to_name: 'Sangita'
    };
    
    // Send email using EmailJS (if configured)
    if (typeof emailjs !== 'undefined' && emailConfig.publicKey !== 'your_public_key_here') {
      await emailjs.send(emailConfig.serviceId, emailConfig.templateId, emailData);
      showFormStatus('success', 'Message sent successfully! 🚀 I\'ll get back to you soon.');
    } else {
      // Fallback: simulate successful submission
      await simulateFormSubmission(emailData);
      showFormStatus('success', 'Message received! 🚀 (Demo mode - EmailJS not configured)');
    }
    
    // Reset form
    form.reset();
    clearFormErrors();
    
  } catch (error) {
    console.error('Form submission error:', error);
    showFormStatus('error', 'Failed to send message. Please try again or contact me directly.');
  } finally {
    // Reset submit button
    setSubmitButtonState(submitButton, 'default');
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

// Show form status message
function showFormStatus(type, message) {
  const statusDiv = document.getElementById('form-status');
  
  if (statusDiv) {
    statusDiv.className = `form-status ${type}`;
    statusDiv.textContent = message;
    statusDiv.style.display = 'block';
    
    // Add cosmic burst animation for success
    if (type === 'success') {
      statusDiv.classList.add('animate-cosmic-burst');
    }
    
    // Hide status after 5 seconds
    setTimeout(() => {
      statusDiv.style.display = 'none';
      statusDiv.classList.remove('animate-cosmic-burst');
    }, 5000);
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

// Validate entire form
function validateForm(form) {
  const inputs = form.querySelectorAll('.form-input[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });
  
  return isValid;
}

// Validate individual field
function validateField(field) {
  const value = field.value.trim();
  const fieldName = field.name;
  let isValid = true;
  let errorMessage = '';
  
  // Required field validation
  if (field.hasAttribute('required') && !value) {
    errorMessage = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    isValid = false;
  }
  
  // Email validation
  if (fieldName === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      errorMessage = 'Please enter a valid email address';
      isValid = false;
    }
  }
  
  // Name validation
  if (fieldName === 'name' && value) {
    if (value.length < 2) {
      errorMessage = 'Name must be at least 2 characters long';
      isValid = false;
    }
  }
  
  // Message validation
  if (fieldName === 'message' && value) {
    if (value.length < 10) {
      errorMessage = 'Message must be at least 10 characters long';
      isValid = false;
    }
  }
  
  // Show/hide error
  if (!isValid) {
    showFieldError(field, errorMessage);
  } else {
    clearFieldError(field);
  }
  
  return isValid;
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

// Initialize social links
function initializeSocialLinks() {
  const socialLinks = document.querySelectorAll('.social-link');
  
  socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Add click animation
      this.classList.add('clicked');
      setTimeout(() => {
        this.classList.remove('clicked');
      }, 300);
      
      // Track social link clicks (for analytics)
      const platform = this.querySelector('.social-text')?.textContent || 'Unknown';
      console.log(`Social link clicked: ${platform}`);
    });
  });
}

// Export functions for external use
window.ContactModule = {
  init: initializeContact,
  validateForm: validateForm,
  sendEmail: handleFormSubmission
};