/* Sangita's Codeverse - Professional Developer Timeline */
/* Elegant horizontal timeline representing developer journey */

// Timeline configuration and data
const timelineConfig = {
  currentYear: new Date().getFullYear(),
  startYear: 2024,
  endYear: 2025,
  animationSpeed: 0.5,
  isMobile: false,
  isTablet: false
};

// Prevent double initialization
let timelineInitialized = false;

// Professional timeline data structure
const timelineData = {
  2024: {
    title: "Full-Stack Foundation",
    description: "Established core development skills and modern web technologies",
    planet: {
      color: "#4a9eff",
      glow: "rgba(74, 158, 255, 0.4)",
      size: "large"
    },
    skills: [
      {
        name: "React.js",
        icon: "⚛️",
        description: "Component-based UI development — used in portfolio site",
        category: "frontend",
        proficiency: 90,
        angle: 0
      },
      {
        name: "Node.js",
        icon: "🟢",
        description: "Server-side JavaScript runtime — backend API development",
        category: "backend",
        proficiency: 85,
        angle: 60
      },
      {
        name: "TypeScript",
        icon: "🔷",
        description: "Type-safe JavaScript — enhanced code reliability",
        category: "language",
        proficiency: 80,
        angle: 120
      },
      {
        name: "Python",
        icon: "🐍",
        description: "Data processing and ML — automation scripts",
        category: "language",
        proficiency: 95,
        angle: 180
      },
      {
        name: "PostgreSQL",
        icon: "🐘",
        description: "Relational database — data modeling and queries",
        category: "database",
        proficiency: 75,
        angle: 240
      },
      {
        name: "Docker",
        icon: "🐳",
        description: "Containerization — deployment and development environments",
        category: "devops",
        proficiency: 70,
        angle: 300
      }
    ]
  },
  2025: {
    title: "Advanced Specialization",
    description: "Deepening expertise in data engineering and cloud architecture",
    planet: {
      color: "#14b8a6",
      glow: "rgba(20, 184, 166, 0.4)",
      size: "large"
    },
    skills: [
      {
        name: "AWS",
        icon: "☁️",
        description: "Cloud infrastructure — scalable application deployment",
        category: "cloud",
        proficiency: 85,
        angle: 0
      },
      {
        name: "Apache Spark",
        icon: "⚡",
        description: "Big data processing — distributed computing frameworks",
        category: "data",
        proficiency: 80,
        angle: 45
      },
      {
        name: "Kubernetes",
        icon: "⚙️",
        description: "Container orchestration — microservices management",
        category: "devops",
        proficiency: 75,
        angle: 90
      },
      {
        name: "TensorFlow",
        icon: "🧠",
        description: "Machine learning — neural network development",
        category: "ml",
        proficiency: 70,
        angle: 135
      },
      {
        name: "GraphQL",
        icon: "📊",
        description: "API query language — efficient data fetching",
        category: "api",
        proficiency: 85,
        angle: 180
      },
      {
        name: "Redis",
        icon: "🔴",
        description: "In-memory caching — performance optimization",
        category: "database",
        proficiency: 80,
        angle: 225
      },
      {
        name: "Terraform",
        icon: "🏗️",
        description: "Infrastructure as code — automated provisioning",
        category: "devops",
        proficiency: 75,
        angle: 270
      },
      {
        name: "Next.js",
        icon: "▲",
        description: "React framework — server-side rendering and optimization",
        category: "frontend",
        proficiency: 90,
        angle: 315
      }
    ]
  }
};

// Skill category colors (professional palette)
const categoryColors = {
  frontend: "#4a9eff",
  backend: "#22c55e",
  language: "#8b5cf6",
  database: "#f59e0b",
  devops: "#ef4444",
  cloud: "#06b6d4",
  data: "#ec4899",
  ml: "#10b981",
  api: "#f97316"
};

// Initialize professional timeline
function initializeProfessionalTimeline() {
  if (timelineInitialized) {
    console.log('⚠️ Timeline already initialized, skipping...');
    return;
  }
  
  console.log('🚀 Initializing Professional Developer Timeline...');
  
  // Detect device capabilities
  detectTimelineDeviceCapabilities();
  
  // Create timeline container
  createTimelineContainer();
  
  // Render timeline years
  renderTimelineYears();
  
  // Initialize timeline interactions
  initializeTimelineInteractions();
  
  // Setup responsive behavior
  setupTimelineResponsive();
  
  // Initialize intersection observer
  initializeTimelineObserver();
  
  timelineInitialized = true;
  console.log('✅ Professional timeline initialized');
}

// Detect device capabilities for timeline
function detectTimelineDeviceCapabilities() {
  timelineConfig.isMobile = window.innerWidth < 768;
  timelineConfig.isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  
  // Adjust animation speed based on device
  if (timelineConfig.isMobile) {
    timelineConfig.animationSpeed = 0.3;
  } else if (timelineConfig.isTablet) {
    timelineConfig.animationSpeed = 0.4;
  }
}

// Create timeline container structure
function createTimelineContainer() {
  console.log('🏗️ Creating timeline container...');
  const skillsSection = document.querySelector('.skills-section');
  
  if (!skillsSection) {
    console.warn('❌ Skills section not found');
    return;
  }
  
  console.log('✅ Skills section found');
  
  // Replace skills content with timeline
  const skillsContainer = skillsSection.querySelector('.skills-container');
  if (skillsContainer) {
    console.log('✅ Skills container found, replacing content...');
    // Clear existing content first
    skillsContainer.innerHTML = '';
    skillsContainer.innerHTML = `
      <div class="timeline-container">
        <div class="timeline-background">
          <div class="space-particles"></div>
          <div class="nebula-effect"></div>
        </div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3 class="timeline-title">Developer Journey</h3>
            <p class="timeline-subtitle">Professional growth and skill evolution</p>
          </div>
          <div class="timeline-track">
            <div class="timeline-line"></div>
            <div class="timeline-years" id="timeline-years">
              <!-- Years will be populated here -->
            </div>
          </div>
          <div class="timeline-controls">
            <button class="timeline-nav prev" aria-label="Previous year">‹</button>
            <button class="timeline-nav next" aria-label="Next year">›</button>
          </div>
        </div>
        <div class="skill-tooltip" id="skill-tooltip" role="tooltip" aria-hidden="true">
          <div class="tooltip-content">
            <h4 class="tooltip-title"></h4>
            <p class="tooltip-description"></p>
            <div class="tooltip-proficiency">
              <span class="proficiency-label">Proficiency:</span>
              <div class="proficiency-bar">
                <div class="proficiency-fill"></div>
              </div>
              <span class="proficiency-value"></span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

// Render timeline years with planets and orbiting skills
function renderTimelineYears() {
  console.log('🎨 Rendering timeline years...');
  const timelineYears = document.getElementById('timeline-years');
  
  if (!timelineYears) {
    console.warn('❌ Timeline years container not found');
    return;
  }
  
  console.log('✅ Timeline years container found');
  
  const years = Object.keys(timelineData).sort();
  console.log('📅 Years to render:', years);
  
  years.forEach((year, index) => {
    const yearData = timelineData[year];
    const yearElement = createYearElement(year, yearData, index);
    timelineYears.appendChild(yearElement);
    console.log(`✅ Added year ${year} to timeline`);
  });
  
  // Create connecting line between years
  createTimelineLine();
  console.log('✅ Timeline rendering complete');
}

// Create individual year element with planet and orbiting skills
function createYearElement(year, yearData, index) {
  const yearDiv = document.createElement('div');
  yearDiv.className = 'timeline-year';
  yearDiv.setAttribute('data-year', year);
  
  const isCurrentYear = parseInt(year) === timelineConfig.currentYear;
  if (isCurrentYear) {
    yearDiv.classList.add('current-year');
  }
  
  yearDiv.innerHTML = `
    <div class="year-planet" style="--planet-color: ${yearData.planet.color}; --planet-glow: ${yearData.planet.glow}">
      <div class="planet-core">
        <span class="year-label">${year}</span>
      </div>
      <div class="orbit-rings">
        ${yearData.skills.map((skill, skillIndex) => `
          <div class="skill-orbit" style="--orbit-delay: ${skillIndex * 0.5}s; --orbit-angle: ${skill.angle}deg;">
            <div class="skill-icon" 
                 data-skill="${skill.name}"
                 data-description="${skill.description}"
                 data-proficiency="${skill.proficiency}"
                 data-category="${skill.category}"
                 style="--skill-color: ${categoryColors[skill.category]}"
                 tabindex="0"
                 role="button"
                 aria-label="${skill.name}: ${skill.description}">
              <span class="icon-symbol">${skill.icon}</span>
              <div class="skill-glow"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="year-info">
      <h4 class="year-title">${yearData.title}</h4>
      <p class="year-description">${yearData.description}</p>
      <div class="year-stats">
        <span class="skill-count">${yearData.skills.length} skills</span>
        <span class="avg-proficiency">${Math.round(yearData.skills.reduce((sum, skill) => sum + skill.proficiency, 0) / yearData.skills.length)}% avg</span>
      </div>
    </div>
  `;
  
  return yearDiv;
}

// Create connecting line between timeline years
function createTimelineLine() {
  const timelineLine = document.querySelector('.timeline-line');
  
  if (timelineLine) {
    // Add animated gradient line
    timelineLine.style.background = `
      linear-gradient(90deg, 
        transparent 0%, 
        rgba(74, 158, 255, 0.3) 20%, 
        rgba(20, 184, 166, 0.5) 50%, 
        rgba(74, 158, 255, 0.3) 80%, 
        transparent 100%
      )
    `;
    
    // Add pulsing animation
    timelineLine.style.animation = 'timeline-pulse 3s ease-in-out infinite alternate';
  }
}

// Initialize timeline interactions
function initializeTimelineInteractions() {
  // Skill icon hover/focus interactions
  const skillIcons = document.querySelectorAll('.skill-icon');
  
  skillIcons.forEach(icon => {
    // Mouse interactions
    icon.addEventListener('mouseenter', (e) => showSkillTooltip(e));
    icon.addEventListener('mouseleave', hideSkillTooltip);
    icon.addEventListener('mousemove', (e) => updateTooltipPosition(e));
    
    // Keyboard interactions
    icon.addEventListener('focus', (e) => showSkillTooltip(e));
    icon.addEventListener('blur', hideSkillTooltip);
    
    // Click/activation
    icon.addEventListener('click', (e) => activateSkill(e));
    icon.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateSkill(e);
      }
    });
  });
  
  // Timeline navigation
  const prevBtn = document.querySelector('.timeline-nav.prev');
  const nextBtn = document.querySelector('.timeline-nav.next');
  
  if (prevBtn) prevBtn.addEventListener('click', () => navigateTimeline('prev'));
  if (nextBtn) nextBtn.addEventListener('click', () => navigateTimeline('next'));
  
  // Keyboard navigation for timeline
  document.addEventListener('keydown', (e) => {
    if (e.target.closest('.timeline-container')) {
      handleTimelineKeyboard(e);
    }
  });
}

// Show skill tooltip with professional styling
function showSkillTooltip(e) {
  const tooltip = document.getElementById('skill-tooltip');
  const icon = e.target.closest('.skill-icon');
  
  if (!tooltip || !icon) return;
  
  const skillName = icon.getAttribute('data-skill');
  const description = icon.getAttribute('data-description');
  const proficiency = parseInt(icon.getAttribute('data-proficiency'));
  const category = icon.getAttribute('data-category');
  
  // Update tooltip content
  tooltip.querySelector('.tooltip-title').textContent = skillName;
  tooltip.querySelector('.tooltip-description').textContent = description;
  tooltip.querySelector('.proficiency-value').textContent = `${proficiency}%`;
  
  const proficiencyFill = tooltip.querySelector('.proficiency-fill');
  proficiencyFill.style.width = `${proficiency}%`;
  proficiencyFill.style.backgroundColor = categoryColors[category];
  
  // Position tooltip
  updateTooltipPosition(e);
  
  // Show tooltip
  tooltip.setAttribute('aria-hidden', 'false');
  tooltip.classList.add('visible');
  
  // Announce to screen readers
  if (window.AccessibilityModule) {
    window.AccessibilityModule.announce(`${skillName}: ${description}. Proficiency: ${proficiency}%`);
  }
}

// Hide skill tooltip
function hideSkillTooltip() {
  const tooltip = document.getElementById('skill-tooltip');
  
  if (tooltip) {
    tooltip.setAttribute('aria-hidden', 'true');
    tooltip.classList.remove('visible');
  }
}

// Update tooltip position
function updateTooltipPosition(e) {
  const tooltip = document.getElementById('skill-tooltip');
  
  if (!tooltip) return;
  
  const rect = tooltip.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  let x = e.clientX + 15;
  let y = e.clientY - rect.height / 2;
  
  // Adjust for viewport boundaries
  if (x + rect.width > viewportWidth) {
    x = e.clientX - rect.width - 15;
  }
  
  if (y < 0) {
    y = 10;
  } else if (y + rect.height > viewportHeight) {
    y = viewportHeight - rect.height - 10;
  }
  
  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
}

// Activate skill (for detailed view or interaction)
function activateSkill(e) {
  const icon = e.target.closest('.skill-icon');
  
  if (!icon) return;
  
  // Add activation animation
  icon.classList.add('activated');
  
  // Create ripple effect
  createSkillRipple(icon);
  
  // Remove activation class after animation
  setTimeout(() => {
    icon.classList.remove('activated');
  }, 600);
  
  // Log skill interaction for analytics
  const skillName = icon.getAttribute('data-skill');
  console.log(`Skill activated: ${skillName}`);
}

// Create ripple effect on skill activation
function createSkillRipple(icon) {
  const ripple = document.createElement('div');
  ripple.className = 'skill-ripple';
  
  const rect = icon.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = ripple.style.top = '50%';
  ripple.style.transform = 'translate(-50%, -50%) scale(0)';
  
  icon.appendChild(ripple);
  
  // Animate ripple
  requestAnimationFrame(() => {
    ripple.style.transform = 'translate(-50%, -50%) scale(2)';
    ripple.style.opacity = '0';
  });
  
  // Remove ripple after animation
  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple);
    }
  }, 600);
}

// Navigate timeline (for future expansion)
function navigateTimeline(direction) {
  const timelineYears = document.getElementById('timeline-years');
  
  if (!timelineYears) return;
  
  // For now, just scroll the timeline
  const scrollAmount = timelineConfig.isMobile ? 300 : 400;
  
  if (direction === 'prev') {
    timelineYears.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    timelineYears.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
  
  // Announce navigation to screen readers
  if (window.AccessibilityModule) {
    window.AccessibilityModule.announce(`Timeline scrolled ${direction === 'prev' ? 'backward' : 'forward'}`);
  }
}

// Handle keyboard navigation for timeline
function handleTimelineKeyboard(e) {
  const { key } = e;
  
  switch (key) {
    case 'ArrowLeft':
      e.preventDefault();
      navigateTimeline('prev');
      break;
    case 'ArrowRight':
      e.preventDefault();
      navigateTimeline('next');
      break;
    case 'Home':
      e.preventDefault();
      scrollToTimelineStart();
      break;
    case 'End':
      e.preventDefault();
      scrollToTimelineEnd();
      break;
  }
}

// Scroll to timeline start
function scrollToTimelineStart() {
  const timelineYears = document.getElementById('timeline-years');
  
  if (timelineYears) {
    timelineYears.scrollTo({ left: 0, behavior: 'smooth' });
    
    if (window.AccessibilityModule) {
      window.AccessibilityModule.announce('Scrolled to timeline beginning');
    }
  }
}

// Scroll to timeline end
function scrollToTimelineEnd() {
  const timelineYears = document.getElementById('timeline-years');
  
  if (timelineYears) {
    timelineYears.scrollTo({ left: timelineYears.scrollWidth, behavior: 'smooth' });
    
    if (window.AccessibilityModule) {
      window.AccessibilityModule.announce('Scrolled to timeline end');
    }
  }
}

// Setup responsive behavior
function setupTimelineResponsive() {
  let resizeTimeout;
  
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      detectTimelineDeviceCapabilities();
      adjustTimelineForDevice();
    }, 250);
  });
}

// Adjust timeline for current device
function adjustTimelineForDevice() {
  const timelineContainer = document.querySelector('.timeline-container');
  
  if (!timelineContainer) return;
  
  // Update CSS custom properties based on device
  if (timelineConfig.isMobile) {
    timelineContainer.style.setProperty('--planet-size', '80px');
    timelineContainer.style.setProperty('--orbit-radius', '60px');
    timelineContainer.style.setProperty('--skill-icon-size', '32px');
  } else if (timelineConfig.isTablet) {
    timelineContainer.style.setProperty('--planet-size', '100px');
    timelineContainer.style.setProperty('--orbit-radius', '80px');
    timelineContainer.style.setProperty('--skill-icon-size', '36px');
  } else {
    timelineContainer.style.setProperty('--planet-size', '120px');
    timelineContainer.style.setProperty('--orbit-radius', '100px');
    timelineContainer.style.setProperty('--skill-icon-size', '40px');
  }
}

// Initialize intersection observer for timeline entrance
function initializeTimelineObserver() {
  const timelineContainer = document.querySelector('.timeline-container');
  
  if (!timelineContainer) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('timeline-visible');
        triggerTimelineEntranceAnimation();
      }
    });
  }, { threshold: 0.3 });
  
  observer.observe(timelineContainer);
}

// Trigger timeline entrance animation
function triggerTimelineEntranceAnimation() {
  const yearElements = document.querySelectorAll('.timeline-year');
  
  yearElements.forEach((year, index) => {
    setTimeout(() => {
      year.classList.add('year-visible');
      
      // Animate skill icons with stagger
      const skillIcons = year.querySelectorAll('.skill-icon');
      skillIcons.forEach((icon, skillIndex) => {
        setTimeout(() => {
          icon.classList.add('skill-visible');
        }, skillIndex * 100);
      });
    }, index * 300);
  });
  
  // Announce timeline visibility to screen readers
  if (window.AccessibilityModule) {
    window.AccessibilityModule.announce('Developer timeline is now visible');
  }
}

// Create space particles background
function createSpaceParticles() {
  const particlesContainer = document.querySelector('.space-particles');
  
  if (!particlesContainer) return;
  
  const particleCount = timelineConfig.isMobile ? 20 : 40;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'space-particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      background: rgba(255, 255, 255, ${Math.random() * 0.6 + 0.2});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: particle-drift ${15 + Math.random() * 10}s linear infinite;
      animation-delay: ${Math.random() * 5}s;
    `;
    
    particlesContainer.appendChild(particle);
  }
}

// Update timeline data (for future years)
function updateTimelineData(year, data) {
  timelineData[year] = data;
  
  // Re-render timeline if it exists
  const timelineYears = document.getElementById('timeline-years');
  if (timelineYears) {
    renderTimelineYears();
  }
  
  console.log(`Timeline updated for year ${year}`);
}

// Get timeline statistics
function getTimelineStats() {
  const stats = {
    totalYears: Object.keys(timelineData).length,
    totalSkills: 0,
    averageProficiency: 0,
    skillsByCategory: {}
  };
  
  let totalProficiency = 0;
  
  Object.values(timelineData).forEach(yearData => {
    stats.totalSkills += yearData.skills.length;
    
    yearData.skills.forEach(skill => {
      totalProficiency += skill.proficiency;
      
      if (!stats.skillsByCategory[skill.category]) {
        stats.skillsByCategory[skill.category] = 0;
      }
      stats.skillsByCategory[skill.category]++;
    });
  });
  
  stats.averageProficiency = Math.round(totalProficiency / stats.totalSkills);
  
  return stats;
}

// Initialize timeline on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('📅 Timeline DOM ready event fired');
  
  // Wait for other modules to initialize first
  setTimeout(() => {
    console.log('🚀 Starting Professional Timeline initialization...');
    
    // Check if skills section exists
    const skillsSection = document.querySelector('.skills-section');
    console.log('Skills section found:', !!skillsSection);
    
    const skillsContainer = document.querySelector('.skills-container');
    console.log('Skills container found:', !!skillsContainer);
    
    if (skillsSection && skillsContainer) {
      initializeProfessionalTimeline();
      createSpaceParticles();
    } else {
      console.error('❌ Required DOM elements not found for timeline');
    }
  }, 1000); // Increased timeout to ensure DOM is ready
});

// Also initialize when called from main.js (avoid double initialization)

// Export timeline module
window.TimelineModule = {
  init: initializeProfessionalTimeline,
  updateData: updateTimelineData,
  getStats: getTimelineStats,
  navigate: navigateTimeline,
  config: timelineConfig,
  data: timelineData
};

// Force initialization if DOM is already loaded
if (document.readyState === 'loading') {
  // DOM is still loading, wait for it
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      if (!timelineInitialized) {
        console.log('🔄 Force initializing timeline...');
        initializeProfessionalTimeline();
        createSpaceParticles();
      }
    }, 2000);
  });
} else {
  // DOM is already loaded
  setTimeout(() => {
    if (!timelineInitialized) {
      console.log('🔄 Force initializing timeline (DOM already loaded)...');
      initializeProfessionalTimeline();
      createSpaceParticles();
    }
  }, 2000);
}