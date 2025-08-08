/* Sangita's Codeverse - Cosmic Theme Toggle */
/* Toggle between Galaxy and Nebula themes */

class CosmicThemeToggle {
  constructor() {
    this.currentTheme = 'galaxy';
    this.init();
  }
  
  init() {
    this.createToggleButton();
    this.loadSavedTheme();
  }
  
  createToggleButton() {
    const toggleButton = document.createElement('button');
    toggleButton.className = 'cosmic-theme-toggle';
    toggleButton.innerHTML = `
      <span class="theme-icon">🌌</span>
      <span class="theme-text">Nebula</span>
    `;
    toggleButton.setAttribute('aria-label', 'Toggle cosmic theme');
    toggleButton.setAttribute('title', 'Switch between Galaxy and Nebula themes');
    
    // Position the button
    toggleButton.style.cssText = `
      position: fixed;
      top: 2rem;
      right: 2rem;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 2rem;
      padding: 0.75rem 1.5rem;
      color: var(--color-text-primary);
      font-family: var(--font-heading);
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      backdrop-filter: blur(20px);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    `;
    
    // Hover effects
    toggleButton.addEventListener('mouseenter', () => {
      toggleButton.style.background = 'rgba(68, 194, 253, 0.1)';
      toggleButton.style.borderColor = 'rgba(68, 194, 253, 0.3)';
      toggleButton.style.transform = 'translateY(-2px)';
      toggleButton.style.boxShadow = '0 8px 25px rgba(68, 194, 253, 0.2)';
    });
    
    toggleButton.addEventListener('mouseleave', () => {
      toggleButton.style.background = 'rgba(255, 255, 255, 0.05)';
      toggleButton.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      toggleButton.style.transform = 'translateY(0)';
      toggleButton.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    });
    
    // Click handler
    toggleButton.addEventListener('click', () => {
      this.toggleTheme();
    });
    
    document.body.appendChild(toggleButton);
    this.toggleButton = toggleButton;
  }
  
  toggleTheme() {
    this.currentTheme = this.currentTheme === 'galaxy' ? 'nebula' : 'galaxy';
    this.applyTheme(this.currentTheme);
    this.updateToggleButton();
    this.saveTheme();
    
    // Notify cosmic foundation if it exists
    if (window.CosmicFoundation) {
      window.CosmicFoundation.toggleCosmicTheme(this.currentTheme);
    }
  }
  
  applyTheme(theme) {
    const root = document.documentElement;
    
    if (theme === 'nebula') {
      // Nebula theme - Purple/Pink cosmic colors
      root.style.setProperty('--cosmic-void', '#0f0a1a');
      root.style.setProperty('--cosmic-deep', '#1a0f2e');
      root.style.setProperty('--cosmic-medium', '#2e1a4a');
      root.style.setProperty('--cosmic-light', '#3e2a5a');
      
      // Update accent colors for nebula
      root.style.setProperty('--color-accent-blue', '#a855f7');
      root.style.setProperty('--color-accent-teal', '#ec4899');
      
      // Update body background
      document.body.style.background = `linear-gradient(135deg, 
        #0f0a1a 0%, 
        #1a0f2e 25%, 
        #2e1a4a 75%, 
        #3e2a5a 100%
      )`;
      
    } else {
      // Galaxy theme - Blue/Teal cosmic colors (default)
      root.style.setProperty('--cosmic-void', '#0a0a0f');
      root.style.setProperty('--cosmic-deep', '#101018');
      root.style.setProperty('--cosmic-medium', '#1a1a2e');
      root.style.setProperty('--cosmic-light', '#16213e');
      
      // Reset accent colors for galaxy
      root.style.setProperty('--color-accent-blue', '#4a9eff');
      root.style.setProperty('--color-accent-teal', '#14b8a6');
      
      // Update body background
      document.body.style.background = `linear-gradient(135deg, 
        #0a0a0f 0%, 
        #101018 25%, 
        #1a1a2e 75%, 
        #16213e 100%
      )`;
    }
    
    document.body.style.backgroundAttachment = 'fixed';
  }
  
  updateToggleButton() {
    if (!this.toggleButton) return;
    
    const icon = this.toggleButton.querySelector('.theme-icon');
    const text = this.toggleButton.querySelector('.theme-text');
    
    if (this.currentTheme === 'nebula') {
      icon.textContent = '🌠';
      text.textContent = 'Galaxy';
    } else {
      icon.textContent = '🌌';
      text.textContent = 'Nebula';
    }
  }
  
  saveTheme() {
    try {
      localStorage.setItem('cosmic-theme', this.currentTheme);
    } catch (e) {
      console.warn('Could not save theme preference:', e);
    }
  }
  
  loadSavedTheme() {
    try {
      const savedTheme = localStorage.getItem('cosmic-theme');
      if (savedTheme && (savedTheme === 'galaxy' || savedTheme === 'nebula')) {
        this.currentTheme = savedTheme;
        this.applyTheme(this.currentTheme);
        this.updateToggleButton();
      }
    } catch (e) {
      console.warn('Could not load theme preference:', e);
    }
  }
}

// Initialize theme toggle when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    window.CosmicThemeToggle = new CosmicThemeToggle();
  }, 1000);
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CosmicThemeToggle;
}