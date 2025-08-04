/* Sangita's Codeverse - Projects Module */
/* Project data and filtering functionality */

// Sample project data structure
const projectsData = [
  {
    id: 1,
    title: "Cosmic Data Pipeline",
    description: "A scalable data engineering pipeline for processing astronomical data",
    longDescription: "Built with Python, Apache Spark, and AWS services to handle large-scale astronomical datasets with real-time processing capabilities.",
    technologies: ["Python", "Apache Spark", "AWS", "Docker", "PostgreSQL"],
    screenshot: "assets/images/projects/project1.jpg",
    githubUrl: "https://github.com/sangita/cosmic-data-pipeline",
    liveUrl: null,
    category: "backend",
    featured: true,
    completedDate: "2024-01"
  },
  {
    id: 2,
    title: "ML Galaxy Classifier",
    description: "Machine learning model to classify galaxy types from telescope images",
    longDescription: "Deep learning CNN model using TensorFlow to classify different galaxy morphologies with 94% accuracy on test data.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Jupyter", "scikit-learn"],
    screenshot: "assets/images/projects/project2.jpg",
    githubUrl: "https://github.com/sangita/galaxy-classifier",
    liveUrl: "https://galaxy-classifier.vercel.app",
    category: "ml",
    featured: true,
    completedDate: "2023-12"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Interactive cosmic-themed portfolio with 3D animations",
    longDescription: "Modern portfolio website built with vanilla JavaScript, featuring 3D galaxy backgrounds and smooth animations.",
    technologies: ["HTML", "CSS", "JavaScript", "Three.js", "GSAP"],
    screenshot: "assets/images/projects/project3.jpg",
    githubUrl: "https://github.com/sangita/portfolio",
    liveUrl: "https://sangitas-codeverse.vercel.app",
    category: "frontend",
    featured: true,
    completedDate: "2024-02"
  }
];

// Initialize projects module
function initializeProjects() {
  console.log('Initializing projects module...');
  
  // Render projects grid
  renderProjectsGrid(projectsData);
  
  // Initialize project filters
  initializeProjectFilters();
  
  console.log('Projects module initialized');
}

// Render projects grid
function renderProjectsGrid(projects) {
  const projectsGrid = document.getElementById('projects-grid');
  
  if (!projectsGrid) {
    console.warn('Projects grid container not found');
    return;
  }
  
  // Clear existing content
  projectsGrid.innerHTML = '';
  
  // Render each project
  projects.forEach(project => {
    const projectCard = createProjectCard(project);
    projectsGrid.appendChild(projectCard);
  });
}

// Create project card element
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.setAttribute('data-category', project.category);
  
  card.innerHTML = `
    <div class="project-image">
      <img src="${project.screenshot}" alt="${project.title}" loading="lazy">
      <div class="project-overlay">
        <div class="project-links">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link github-link">
            <span class="link-icon">📁</span>
            <span class="link-text">Code</span>
          </a>
          ${project.liveUrl ? `
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link live-link">
              <span class="link-icon">🚀</span>
              <span class="link-text">Live</span>
            </a>
          ` : ''}
        </div>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-technologies">
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
    </div>
  `;
  
  return card;
}

// Initialize project filters
function initializeProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active filter button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter projects
      filterProjects(filter);
    });
  });
}

// Filter projects by category
function filterProjects(category) {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    
    if (category === 'all' || cardCategory === category) {
      card.style.display = 'block';
      card.classList.add('animate-fade-in-up');
    } else {
      card.style.display = 'none';
      card.classList.remove('animate-fade-in-up');
    }
  });
}

// Export functions for external use
window.ProjectsModule = {
  init: initializeProjects,
  data: projectsData,
  render: renderProjectsGrid,
  filter: filterProjects
};