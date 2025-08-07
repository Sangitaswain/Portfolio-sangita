/* Sangita's Codeverse - Projects Module */
/* Project data and filtering functionality with shooting star effects */

// Enhanced project data structure
const projectsData = [
  {
    id: 1,
    title: "Cosmic Data Pipeline",
    description: "A scalable data engineering pipeline for processing astronomical data",
    longDescription: "Built with Python, Apache Spark, and AWS services to handle large-scale astronomical datasets with real-time processing capabilities. Features include real-time data ingestion, automated data quality checks, and distributed processing across multiple nodes.",
    technologies: ["Python", "Apache Spark", "AWS", "Docker", "PostgreSQL", "Kafka", "Redis"],
    screenshot: "assets/images/projects/project1.jpg",
    githubUrl: "https://github.com/sangita/cosmic-data-pipeline",
    liveUrl: null,
    category: "backend",
    featured: true,
    completedDate: "2024-01",
    status: "completed"
  },
  {
    id: 2,
    title: "ML Galaxy Classifier",
    description: "Machine learning model to classify galaxy types from telescope images",
    longDescription: "Deep learning CNN model using TensorFlow to classify different galaxy morphologies with 94% accuracy on test data. Trained on over 100,000 galaxy images from the Sloan Digital Sky Survey with advanced data augmentation techniques.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Jupyter", "scikit-learn", "NumPy", "Matplotlib"],
    screenshot: "assets/images/projects/project2.jpg",
    githubUrl: "https://github.com/sangita/galaxy-classifier",
    liveUrl: "https://galaxy-classifier.vercel.app",
    category: "ml",
    featured: true,
    completedDate: "2023-12",
    status: "completed"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Interactive cosmic-themed portfolio with 3D animations",
    longDescription: "Modern portfolio website built with vanilla JavaScript, featuring 3D galaxy backgrounds and smooth animations. Includes responsive design, accessibility features, and performance optimizations for all devices.",
    technologies: ["HTML", "CSS", "JavaScript", "Three.js", "GSAP", "Vanta.js"],
    screenshot: "assets/images/projects/project3.jpg",
    githubUrl: "https://github.com/sangita/portfolio",
    liveUrl: "https://sangitas-codeverse.vercel.app",
    category: "frontend",
    featured: true,
    completedDate: "2024-02",
    status: "completed"
  },
  {
    id: 4,
    title: "FinTech Analytics Dashboard",
    description: "Real-time financial data visualization and analytics platform",
    longDescription: "Comprehensive dashboard for financial market analysis with real-time data feeds, interactive charts, and predictive analytics. Built with React and D3.js for dynamic visualizations.",
    technologies: ["React", "D3.js", "Node.js", "Express", "MongoDB", "WebSocket"],
    screenshot: "assets/images/projects/project1.jpg",
    githubUrl: "https://github.com/sangita/fintech-dashboard",
    liveUrl: "https://fintech-analytics.vercel.app",
    category: "frontend",
    featured: false,
    completedDate: "2023-10",
    status: "completed"
  },
  {
    id: 5,
    title: "AI Chatbot API",
    description: "Intelligent conversational AI with natural language processing",
    longDescription: "RESTful API for an AI chatbot with advanced NLP capabilities, sentiment analysis, and context awareness. Integrated with multiple messaging platforms and supports multi-language conversations.",
    technologies: ["Python", "FastAPI", "spaCy", "NLTK", "PostgreSQL", "Docker"],
    screenshot: "assets/images/projects/project2.jpg",
    githubUrl: "https://github.com/sangita/ai-chatbot-api",
    liveUrl: null,
    category: "backend",
    featured: false,
    completedDate: "2023-11",
    status: "completed"
  },
  {
    id: 6,
    title: "Hackathon Winner - EcoTracker",
    description: "Carbon footprint tracking app with gamification elements",
    longDescription: "Mobile-first web application that helps users track and reduce their carbon footprint through daily activities. Won first place at GreenTech Hackathon 2023 with innovative gamification features.",
    technologies: ["React Native", "Firebase", "Chart.js", "Geolocation API"],
    screenshot: "assets/images/projects/project3.jpg",
    githubUrl: "https://github.com/sangita/eco-tracker",
    liveUrl: "https://eco-tracker-app.vercel.app",
    category: "hackathon",
    featured: true,
    completedDate: "2023-09",
    status: "completed"
  }
];

// State management for projects
let currentFilter = 'all';
let projectModal = null;
let isAnimating = false;

// Initialize projects module
function initializeProjects() {
  console.log('Initializing projects module...');
  
  // Create project modal
  createProjectModal();
  
  // Initialize image error handling
  initializeImageErrorHandling();
  
  // Render projects grid with shooting star effects
  renderProjectsGrid(projectsData);
  
  // Initialize project filters
  initializeProjectFilters();
  
  // Initialize lazy loading
  initializeLazyLoading();
  
  // Initialize modal functionality
  initializeProjectModal();
  
  console.log('Projects module initialized');
}

// Render projects grid with staggered animations
function renderProjectsGrid(projects, animate = true) {
  const projectsGrid = document.getElementById('projects-grid');
  
  if (!projectsGrid) {
    console.warn('Projects grid container not found');
    return;
  }
  
  // Clear existing content
  projectsGrid.innerHTML = '';
  
  // Filter projects based on current filter
  const filteredProjects = currentFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === currentFilter);
  
  // Render each project with staggered animation
  filteredProjects.forEach((project, index) => {
    const projectCard = createProjectCard(project);
    
    if (animate) {
      // Add shooting star entrance animation
      projectCard.style.opacity = '0';
      projectCard.style.transform = 'translateX(-100px) rotate(-5deg)';
      projectCard.classList.add('shooting-star-entrance');
      
      // Stagger the animations
      setTimeout(() => {
        projectCard.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        projectCard.style.opacity = '1';
        projectCard.style.transform = 'translateX(0) rotate(0deg)';
      }, index * 150);
    }
    
    projectsGrid.appendChild(projectCard);
  });
}

// Create enhanced project card element with shooting star effects
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card shooting-star-card';
  card.setAttribute('data-category', project.category);
  card.setAttribute('data-project-id', project.id);
  
  // Add featured class for special styling
  if (project.featured) {
    card.classList.add('featured-project');
  }
  
  card.innerHTML = `
    <div class="project-image">
      <img 
        data-src="${project.screenshot}" 
        alt="${project.title}" 
        class="lazy-load project-img"
        loading="lazy"
      >
      <div class="project-overlay">
        <div class="project-links">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" 
             class="project-link github-link" aria-label="View ${project.title} source code">
            <span class="link-icon" aria-hidden="true">📁</span>
            <span class="link-text">Code</span>
          </a>
          ${project.liveUrl ? `
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" 
               class="project-link live-link" aria-label="View ${project.title} live demo">
              <span class="link-icon" aria-hidden="true">🚀</span>
              <span class="link-text">Live</span>
            </a>
          ` : ''}
          <button class="project-link details-link" data-project-id="${project.id}" 
                  aria-label="View ${project.title} details">
            <span class="link-icon" aria-hidden="true">ℹ️</span>
            <span class="link-text">Details</span>
          </button>
        </div>
      </div>
      <div class="shooting-star-trail" aria-hidden="true"></div>
    </div>
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-meta">
        <span class="project-date">${formatDate(project.completedDate)}</span>
        ${project.featured ? '<span class="featured-badge">Featured</span>' : ''}
      </div>
      <div class="project-technologies">
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
    </div>
  `;
  
  // Add click handler for card interaction
  card.addEventListener('click', (e) => {
    if (!e.target.closest('.project-link')) {
      openProjectModal(project.id);
    }
  });
  
  // Add shooting star hover effect
  card.addEventListener('mouseenter', () => {
    if (!isAnimating) {
      triggerShootingStarEffect(card);
    }
  });
  
  // Add keyboard support for card interaction
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openProjectModal(project.id);
    }
  });
  
  // Make card focusable
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `View details for ${project.title}`);
  
  return card;
}

// Initialize project filters with smooth transitions
function initializeProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Prevent multiple rapid clicks
      if (isAnimating) return;
      
      // Update active filter button
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
      
      // Filter projects with animation
      filterProjects(filter);
    });
    
    // Add keyboard support
    button.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
}

// Filter projects by category with smooth transitions
function filterProjects(category) {
  if (isAnimating) return;
  
  isAnimating = true;
  currentFilter = category;
  
  const projectCards = document.querySelectorAll('.project-card');
  const projectsGrid = document.getElementById('projects-grid');
  
  // Phase 1: Fade out all cards
  projectCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.transition = 'all 0.3s ease-out';
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px) scale(0.95)';
    }, index * 50);
  });
  
  // Phase 2: Re-render with new filter after fade out
  setTimeout(() => {
    renderProjectsGrid(projectsData, true);
    
    // Reset animation flag after all animations complete
    setTimeout(() => {
      isAnimating = false;
    }, projectsData.length * 150 + 800);
  }, projectCards.length * 50 + 300);
}

// Shooting star effect on hover
function triggerShootingStarEffect(card) {
  const trail = card.querySelector('.shooting-star-trail');
  if (!trail) return;
  
  // Reset any existing animation
  trail.style.animation = 'none';
  trail.offsetHeight; // Trigger reflow
  
  // Start shooting star animation
  trail.style.animation = 'shooting-star-trail 0.8s ease-out';
  
  // Add glow effect to card
  card.style.boxShadow = '0 0 30px rgba(74, 158, 255, 0.4), 0 10px 40px rgba(74, 158, 255, 0.2)';
  
  // Remove glow after animation
  setTimeout(() => {
    card.style.boxShadow = '';
  }, 800);
}

// Lazy loading implementation
function initializeLazyLoading() {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        
        if (src) {
          img.src = src;
          img.classList.remove('lazy-load');
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.1
  });
  
  // Observe all lazy load images
  document.querySelectorAll('.lazy-load').forEach(img => {
    imageObserver.observe(img);
  });
}

// Create project modal
function createProjectModal() {
  const modal = document.createElement('div');
  modal.id = 'project-modal';
  modal.className = 'project-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-hidden', 'true');
  
  modal.innerHTML = `
    <div class="modal-backdrop" aria-hidden="true"></div>
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="modal-title"></h2>
        <button class="modal-close" aria-label="Close modal">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="modal-image">
          <img id="modal-image" alt="" />
        </div>
        <div class="modal-details">
          <p class="modal-description" id="modal-description"></p>
          <div class="modal-meta">
            <span class="modal-date" id="modal-date"></span>
            <span class="modal-status" id="modal-status"></span>
          </div>
          <div class="modal-technologies" id="modal-technologies"></div>
          <div class="modal-links" id="modal-links"></div>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  projectModal = modal;
}

// Initialize project modal functionality
function initializeProjectModal() {
  if (!projectModal) return;
  
  const closeBtn = projectModal.querySelector('.modal-close');
  const backdrop = projectModal.querySelector('.modal-backdrop');
  
  // Close modal handlers
  closeBtn.addEventListener('click', closeProjectModal);
  backdrop.addEventListener('click', closeProjectModal);
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });
  
  // Details button handlers (delegated)
  document.addEventListener('click', (e) => {
    if (e.target.closest('.details-link')) {
      e.preventDefault();
      const projectId = parseInt(e.target.closest('.details-link').getAttribute('data-project-id'));
      openProjectModal(projectId);
    }
  });
}

// Open project modal
function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project || !projectModal) return;
  
  // Populate modal content
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-image').src = project.screenshot;
  document.getElementById('modal-image').alt = project.title;
  document.getElementById('modal-description').textContent = project.longDescription;
  document.getElementById('modal-date').textContent = `Completed: ${formatDate(project.completedDate)}`;
  document.getElementById('modal-status').textContent = project.status.charAt(0).toUpperCase() + project.status.slice(1);
  
  // Technologies
  const techContainer = document.getElementById('modal-technologies');
  techContainer.innerHTML = project.technologies.map(tech => 
    `<span class="tech-tag">${tech}</span>`
  ).join('');
  
  // Links
  const linksContainer = document.getElementById('modal-links');
  linksContainer.innerHTML = `
    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="modal-link github-link">
      <span class="link-icon" aria-hidden="true">📁</span>
      <span class="link-text">View Code</span>
    </a>
    ${project.liveUrl ? `
      <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="modal-link live-link">
        <span class="link-icon" aria-hidden="true">🚀</span>
        <span class="link-text">Live Demo</span>
      </a>
    ` : ''}
  `;
  
  // Show modal
  projectModal.classList.add('active');
  projectModal.setAttribute('aria-hidden', 'false');
  
  // Focus management
  const firstFocusable = projectModal.querySelector('.modal-close');
  firstFocusable.focus();
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
  if (!projectModal) return;
  
  projectModal.classList.remove('active');
  projectModal.setAttribute('aria-hidden', 'true');
  
  // Restore body scroll
  document.body.style.overflow = '';
  
  // Return focus to trigger element
  const activeFilter = document.querySelector('.filter-btn.active');
  if (activeFilter) activeFilter.focus();
}

// Utility function to format dates
function formatDate(dateString) {
  const date = new Date(dateString + '-01');
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long' 
  });
}

// Handle image loading errors with fallback
function handleImageError(img, project) {
  // Create a gradient placeholder based on project category
  const categoryColors = {
    frontend: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    backend: 'linear-gradient(135deg, #10b981, #059669)',
    ml: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    hackathon: 'linear-gradient(135deg, #f59e0b, #d97706)'
  };
  
  const fallbackColor = categoryColors[project.category] || categoryColors.frontend;
  
  // Create a canvas element for the placeholder
  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 200;
  const ctx = canvas.getContext('2d');
  
  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, project.category === 'frontend' ? '#3b82f6' : 
                          project.category === 'backend' ? '#10b981' :
                          project.category === 'ml' ? '#8b5cf6' : '#f59e0b');
  gradient.addColorStop(1, project.category === 'frontend' ? '#06b6d4' : 
                          project.category === 'backend' ? '#059669' :
                          project.category === 'ml' ? '#7c3aed' : '#d97706');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add project title text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(project.title, canvas.width / 2, canvas.height / 2);
  
  // Add category badge
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.font = '14px Arial';
  ctx.fillText(project.category.toUpperCase(), canvas.width / 2, canvas.height / 2 + 40);
  
  // Replace image with canvas
  img.src = canvas.toDataURL();
  img.classList.add('placeholder-image');
}

// Initialize image error handlers
function initializeImageErrorHandling() {
  document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG' && e.target.classList.contains('project-img')) {
      const projectId = parseInt(e.target.closest('.project-card').getAttribute('data-project-id'));
      const project = projectsData.find(p => p.id === projectId);
      if (project) {
        handleImageError(e.target, project);
      }
    }
  }, true);
}

// Export functions for external use
window.ProjectsModule = {
  init: initializeProjects,
  data: projectsData,
  render: renderProjectsGrid,
  filter: filterProjects,
  openModal: openProjectModal,
  closeModal: closeProjectModal
};