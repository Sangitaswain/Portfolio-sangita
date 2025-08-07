/* Sangita's Codeverse - Developer Journey */
/* Clean, elegant, professional timeline */

// Developer journey data - simple and focused
const journeyData = {
  2022: {
    title: "Foundation Building",
    subtitle: "First Steps",
    description: "Started coding journey with web fundamentals and basic programming concepts",
    skills: [
      { name: "HTML", icon: "🌐", status: "mastered" },
      { name: "CSS", icon: "🎨", status: "mastered" },
      { name: "JavaScript", icon: "⚡", status: "learning" },
      { name: "Git", icon: "📝", status: "learning" }
    ],
    tag: "First steps into coding"
  },
  2023: {
    title: "Full-Stack Foundation",
    subtitle: "Building Confidence",
    description: "Built confidence in modern web development and started building real projects",
    skills: [
      { name: "React", icon: "⚛️", status: "confident" },
      { name: "Node.js", icon: "🟢", status: "learning" },
      { name: "MongoDB", icon: "🍃", status: "learning" },
      { name: "Express", icon: "🚀", status: "learning" },
      { name: "Tailwind", icon: "💨", status: "confident" }
    ],
    tag: "Used in portfolio projects"
  },
  2024: {
    title: "Specialization Phase",
    subtitle: "Going Deeper",
    description: "Explored backend development, databases, and began data engineering journey",
    skills: [
      { name: "Python", icon: "🐍", status: "confident" },
      { name: "PostgreSQL", icon: "🐘", status: "confident" },
      { name: "Docker", icon: "🐳", status: "learning" },
      { name: "AWS", icon: "☁️", status: "learning" },
      { name: "TypeScript", icon: "🔷", status: "confident" }
    ],
    tag: "Used in hackathon projects"
  },
  2025: {
    title: "Advanced Growth",
    subtitle: "Mastering Craft",
    description: "Deepening expertise in data engineering, cloud architecture, and ML",
    skills: [
      { name: "Kubernetes", icon: "⚙️", status: "learning" },
      { name: "Apache Spark", icon: "⚡", status: "learning" },
      { name: "TensorFlow", icon: "🧠", status: "exploring" },
      { name: "GraphQL", icon: "📊", status: "confident" },
      { name: "Redis", icon: "🔴", status: "learning" }
    ],
    tag: "Current focus area"
  }
};

// Status colors for skills
const statusColors = {
  mastered: "#22c55e",    // Green
  confident: "#44c2fd",   // Light blue
  learning: "#a07cfe",    // Soft purple
  exploring: "#f59e0b"    // Orange
};

// Initialize developer journey
function initializeDeveloperJourney() {
  console.log('🚀 Initializing Developer Journey...');
  
  const skillsContainer = document.querySelector('.skills-container');
  if (!skillsContainer) {
    console.warn('Skills container not found');
    return;
  }
  
  // Create journey container
  skillsContainer.innerHTML = createJourneyHTML();
  
  // Initialize interactions
  initializeJourneyInteractions();
  
  // Initialize scroll animations
  initializeScrollAnimations();
  
  console.log('✅ Developer Journey initialized');
}

// Create the main journey HTML
function createJourneyHTML() {
  const totalSkills = Object.values(journeyData).reduce((total, year) => total + year.skills.length, 0);
  const totalYears = Object.keys(journeyData).length;
  
  return `
    <div class="developer-journey">
      <!-- Journey Header -->
      <div class="journey-header">
        <div class="journey-stats">
          <span class="stat-item">${totalSkills} Skills</span>
          <span class="stat-divider">•</span>
          <span class="stat-item">${totalYears} Years</span>
          <span class="stat-divider">•</span>
          <span class="stat-item">Still Growing</span>
        </div>
        <p class="journey-tagline">Real skills. Real growth. One step at a time.</p>
      </div>
      
      <!-- Journey Timeline -->
      <div class="journey-timeline">
        ${Object.entries(journeyData).map(([year, data], index) => createYearCard(year, data, index)).join('')}
      </div>
    </div>
  `;
}

// Create individual year card
function createYearCard(year, data, index) {
  const isCurrentYear = parseInt(year) === new Date().getFullYear();
  const currentClass = isCurrentYear ? 'current-year' : '';
  
  return `
    <div class="year-card ${currentClass}" data-year="${year}" data-aos="fade-up" data-aos-delay="${index * 100}">
      <!-- Year Badge -->
      <div class="year-badge">
        <span class="year-number">${year}</span>
        ${isCurrentYear ? '<span class="current-indicator">Current</span>' : ''}
      </div>
      
      <!-- Card Content -->
      <div class="card-content">
        <div class="year-subtitle">${data.subtitle}</div>
        <h3 class="year-title">${data.title}</h3>
        <p class="year-description">${data.description}</p>
        
        <!-- Skills Grid -->
        <div class="skills-grid">
          ${data.skills.map(skill => createSkillItem(skill)).join('')}
        </div>
        
        <!-- Status Tag -->
        <div class="status-tag">
          <span class="tag-text">${data.tag}</span>
        </div>
      </div>
      
      <!-- Progress Line -->
      ${index < Object.keys(journeyData).length - 1 ? '<div class="progress-line"></div>' : ''}
    </div>
  `;
}

// Create individual skill item
function createSkillItem(skill) {
  const statusColor = statusColors[skill.status] || statusColors.learning;
  
  return `
    <div class="skill-item" data-status="${skill.status}">
      <span class="skill-icon">${skill.icon}</span>
      <span class="skill-name">${skill.name}</span>
      <div class="skill-status" style="background-color: ${statusColor}"></div>
    </div>
  `;
}

// Initialize journey interactions
function initializeJourneyInteractions() {
  // Skill hover effects
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateY(-2px)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateY(0)';
    });
  });
  
  // Year card hover effects
  const yearCards = document.querySelectorAll('.year-card');
  yearCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    });
  });
}

// Initialize scroll animations
function initializeScrollAnimations() {
  // Simple fade-in animation for cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.year-card').forEach(card => {
    observer.observe(card);
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    initializeDeveloperJourney();
  }, 500);
});

// Export module
window.DeveloperJourneyModule = {
  init: initializeDeveloperJourney,
  data: journeyData
};