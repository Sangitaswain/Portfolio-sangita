/* Sangita's Codeverse - Resume Module */
/* Saturn Ring Resume Portal with download functionality */

// Resume module state
const resumeState = {
  isDownloading: false,
  hasDownloaded: false,
  animationActive: false,
  ringRotationSpeed: 1,
  isMobile: false
};

// Resume data for dynamic generation
const resumeData = {
  personalInfo: {
    name: "Sangita",
    title: "Full Stack Developer & Data Engineer",
    email: "sangita@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "https://sangitas-codeverse.vercel.app",
    linkedin: "https://linkedin.com/in/sangita",
    github: "https://github.com/sangita"
  },
  summary: "Passionate full-stack developer with expertise in data engineering, machine learning, and modern web technologies. Experienced in building scalable applications and data pipelines with a focus on user experience and performance optimization.",
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led development of microservices architecture serving 100K+ daily users",
        "Implemented real-time data processing pipeline reducing latency by 40%",
        "Mentored junior developers and established coding best practices"
      ]
    },
    {
      title: "Data Engineer",
      company: "DataFlow Inc",
      period: "2020 - 2022",
      location: "Remote",
      achievements: [
        "Built ETL pipelines processing 10TB+ data daily using Python and Apache Spark",
        "Designed and implemented data warehouse architecture on AWS",
        "Optimized database queries resulting in 60% performance improvement"
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      period: "2018 - 2020",
      gpa: "3.8/4.0"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "UC Berkeley",
      period: "2014 - 2018",
      gpa: "3.7/4.0"
    }
  ],
  skills: {
    languages: ["JavaScript", "Python", "TypeScript", "SQL", "Java", "R"],
    frameworks: ["React", "Node.js", "Django", "FastAPI", "Express", "TensorFlow"],
    tools: ["AWS", "Docker", "Git", "PostgreSQL", "MongoDB", "Figma"],
    softSkills: ["Leadership", "Problem Solving", "Team Collaboration", "Communication"]
  },
  projects: [
    {
      name: "Cosmic Data Pipeline",
      description: "Scalable data engineering pipeline for astronomical data processing",
      technologies: ["Python", "Apache Spark", "AWS", "Docker"]
    },
    {
      name: "ML Galaxy Classifier",
      description: "Deep learning model for galaxy classification with 94% accuracy",
      technologies: ["Python", "TensorFlow", "OpenCV", "scikit-learn"]
    }
  ]
};

// Initialize resume module
function initializeResume() {
  console.log('Initializing Saturn Ring Resume Portal...');
  
  // Detect mobile device
  resumeState.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
  
  // Initialize Saturn ring animations
  initializeSaturnRingAnimations();
  
  // Initialize download functionality
  initializeDownloadFunctionality();
  
  // Initialize resume preview
  initializeResumePreview();
  
  // Initialize interactive effects
  initializeInteractiveEffects();
  
  // Setup resize handler
  setupResumeResizeHandler();
  
  console.log('Saturn Ring Resume Portal initialized');
}

// Initialize Saturn ring animations with enhanced 3D effects
function initializeSaturnRingAnimations() {
  const saturnRing = document.querySelector('.saturn-ring');
  const ringOuter = document.querySelector('.ring-outer');
  const ringInner = document.querySelector('.ring-inner');
  const planetCore = document.querySelector('.planet-core');
  
  if (!saturnRing || !ringOuter || !ringInner || !planetCore) {
    console.warn('Saturn ring elements not found');
    return;
  }
  
  // Enhanced ring rotation with different speeds
  ringOuter.style.animation = 'ring-rotation-outer 30s linear infinite';
  ringInner.style.animation = 'ring-rotation-inner 20s linear infinite reverse';
  
  // Add pulsing glow to planet core
  planetCore.style.animation = 'planet-core-glow 4s ease-in-out infinite alternate';
  
  // Add floating particles around Saturn
  createSaturnParticles(saturnRing);
  
  // Add interactive hover effects
  saturnRing.addEventListener('mouseenter', () => {
    if (!resumeState.animationActive) {
      enhanceSaturnAnimation(true);
    }
  });
  
  saturnRing.addEventListener('mouseleave', () => {
    if (!resumeState.animationActive) {
      enhanceSaturnAnimation(false);
    }
  });
}

// Create floating particles around Saturn
function createSaturnParticles(container) {
  const particleCount = resumeState.isMobile ? 8 : 12;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'saturn-particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 2}px;
      height: ${Math.random() * 3 + 2}px;
      background: #f59e0b;
      border-radius: 50%;
      opacity: ${Math.random() * 0.6 + 0.2};
      animation: saturn-particle-orbit ${15 + Math.random() * 10}s linear infinite;
      animation-delay: ${i * 0.5}s;
      transform-origin: ${100 + Math.random() * 50}px center;
    `;
    container.appendChild(particle);
  }
}

// Enhance Saturn animation on interaction
function enhanceSaturnAnimation(enhance) {
  const ringOuter = document.querySelector('.ring-outer');
  const ringInner = document.querySelector('.ring-inner');
  const planetCore = document.querySelector('.planet-core');
  
  if (enhance) {
    ringOuter.style.animationDuration = '15s';
    ringInner.style.animationDuration = '10s';
    planetCore.style.transform = 'scale(1.1)';
    planetCore.style.boxShadow = '0 0 40px rgba(245, 158, 11, 0.8)';
  } else {
    ringOuter.style.animationDuration = '30s';
    ringInner.style.animationDuration = '20s';
    planetCore.style.transform = 'scale(1)';
    planetCore.style.boxShadow = '0 0 30px rgba(245, 158, 11, 0.5)';
  }
}

// Initialize download functionality
function initializeDownloadFunctionality() {
  const downloadBtn = document.getElementById('download-resume');
  
  if (!downloadBtn) {
    console.warn('Download resume button not found');
    return;
  }
  
  // Add click handler
  downloadBtn.addEventListener('click', handleResumeDownload);
  
  // Add keyboard support
  downloadBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleResumeDownload();
    }
  });
  
  // Add hover effects
  downloadBtn.addEventListener('mouseenter', () => {
    if (!resumeState.isDownloading) {
      animateDownloadButton(true);
    }
  });
  
  downloadBtn.addEventListener('mouseleave', () => {
    if (!resumeState.isDownloading) {
      animateDownloadButton(false);
    }
  });
}

// Handle resume download with enhanced feedback
async function handleResumeDownload() {
  if (resumeState.isDownloading) return;
  
  resumeState.isDownloading = true;
  resumeState.animationActive = true;
  
  const downloadBtn = document.getElementById('download-resume');
  const btnText = downloadBtn.querySelector('.btn-text');
  const btnIcon = downloadBtn.querySelector('.btn-icon');
  
  try {
    // Update button state
    downloadBtn.disabled = true;
    downloadBtn.classList.add('downloading');
    btnText.textContent = 'Generating...';
    btnIcon.textContent = '⏳';
    
    // Trigger cosmic download animation
    triggerCosmicDownloadAnimation();
    
    // Check if PDF exists, if not generate one
    const resumeExists = await checkResumeExists();
    
    if (!resumeExists) {
      // Generate PDF dynamically
      await generateResumePDF();
    }
    
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Download the resume
    await downloadResumeFile();
    
    // Success feedback
    showDownloadSuccess();
    
  } catch (error) {
    console.error('Resume download failed:', error);
    showDownloadError();
  } finally {
    // Reset button state
    setTimeout(() => {
      downloadBtn.disabled = false;
      downloadBtn.classList.remove('downloading');
      btnText.textContent = 'Download Resume';
      btnIcon.textContent = '📄';
      resumeState.isDownloading = false;
      resumeState.animationActive = false;
    }, 3000);
  }
}

// Check if resume PDF exists
async function checkResumeExists() {
  try {
    const response = await fetch('assets/Sangita_Resume.pdf', { method: 'HEAD' });
    return response.ok && response.headers.get('content-type')?.includes('pdf');
  } catch (error) {
    return false;
  }
}

// Generate resume PDF dynamically
async function generateResumePDF() {
  // For now, we'll create a simple HTML-based resume that can be printed as PDF
  // In a real implementation, you might use libraries like jsPDF or Puppeteer
  
  const resumeHTML = generateResumeHTML();
  
  // Create a temporary window for PDF generation
  const printWindow = window.open('', '_blank');
  printWindow.document.write(resumeHTML);
  printWindow.document.close();
  
  // Note: In a production environment, you'd want to use a proper PDF generation service
  console.log('Resume HTML generated for PDF conversion');
}

// Generate HTML resume content
function generateResumeHTML() {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${resumeData.personalInfo.name} - Resume</title>
      <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; border-bottom: 2px solid #4a9eff; padding-bottom: 20px; margin-bottom: 30px; }
        .name { font-size: 2.5em; font-weight: bold; color: #4a9eff; margin-bottom: 10px; }
        .title { font-size: 1.2em; color: #666; margin-bottom: 15px; }
        .contact { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
        .section { margin-bottom: 30px; }
        .section-title { font-size: 1.4em; font-weight: bold; color: #4a9eff; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-bottom: 15px; }
        .experience-item, .education-item { margin-bottom: 20px; }
        .job-title { font-weight: bold; font-size: 1.1em; }
        .company { color: #666; font-style: italic; }
        .period { float: right; color: #888; }
        .achievements { margin-top: 10px; }
        .achievements li { margin-bottom: 5px; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
        .skill-category { background: #f8f9fa; padding: 15px; border-radius: 5px; }
        .skill-category h4 { margin-top: 0; color: #4a9eff; }
        .skill-list { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-tag { background: #4a9eff; color: white; padding: 3px 8px; border-radius: 3px; font-size: 0.9em; }
        @media print { body { font-size: 12px; } .contact { font-size: 0.9em; } }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="name">${resumeData.personalInfo.name}</div>
        <div class="title">${resumeData.personalInfo.title}</div>
        <div class="contact">
          <span>📧 ${resumeData.personalInfo.email}</span>
          <span>📱 ${resumeData.personalInfo.phone}</span>
          <span>📍 ${resumeData.personalInfo.location}</span>
          <span>🌐 ${resumeData.personalInfo.website}</span>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">Professional Summary</div>
        <p>${resumeData.summary}</p>
      </div>
      
      <div class="section">
        <div class="section-title">Experience</div>
        ${resumeData.experience.map(exp => `
          <div class="experience-item">
            <div class="job-title">${exp.title}</div>
            <div class="company">${exp.company} <span class="period">${exp.period}</span></div>
            <ul class="achievements">
              ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
      
      <div class="section">
        <div class="section-title">Education</div>
        ${resumeData.education.map(edu => `
          <div class="education-item">
            <div class="job-title">${edu.degree}</div>
            <div class="company">${edu.school} <span class="period">${edu.period}</span></div>
            <div>GPA: ${edu.gpa}</div>
          </div>
        `).join('')}
      </div>
      
      <div class="section">
        <div class="section-title">Technical Skills</div>
        <div class="skills-grid">
          ${Object.entries(resumeData.skills).map(([category, skills]) => `
            <div class="skill-category">
              <h4>${category.charAt(0).toUpperCase() + category.slice(1)}</h4>
              <div class="skill-list">
                ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">Featured Projects</div>
        ${resumeData.projects.map(project => `
          <div class="experience-item">
            <div class="job-title">${project.name}</div>
            <p>${project.description}</p>
            <div class="skill-list">
              ${project.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </body>
    </html>
  `;
}

// Download resume file
async function downloadResumeFile() {
  try {
    // Try to download existing PDF first
    const response = await fetch('assets/Sangita_Resume.pdf');
    
    if (response.ok) {
      // Download existing PDF
      const blob = await response.blob();
      downloadBlob(blob, 'Sangita_Resume.pdf');
    } else {
      // Generate and download HTML version
      const htmlContent = generateResumeHTML();
      const blob = new Blob([htmlContent], { type: 'text/html' });
      downloadBlob(blob, 'Sangita_Resume.html');
    }
    
    resumeState.hasDownloaded = true;
  } catch (error) {
    throw new Error('Failed to download resume: ' + error.message);
  }
}

// Download blob as file
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.style.display = 'none';
  
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  // Clean up the URL object
  setTimeout(() => URL.revokeObjectURL(url), 100);
}

// Trigger cosmic download animation
function triggerCosmicDownloadAnimation() {
  const saturnRing = document.querySelector('.saturn-ring');
  const resumeSection = document.querySelector('.resume-section');
  
  // Add cosmic burst effect
  createCosmicBurst(saturnRing);
  
  // Enhance Saturn animation during download
  enhanceSaturnAnimation(true);
  
  // Add section-wide glow effect
  resumeSection.classList.add('downloading-active');
  
  setTimeout(() => {
    resumeSection.classList.remove('downloading-active');
  }, 3000);
}

// Create cosmic burst effect
function createCosmicBurst(container) {
  const burst = document.createElement('div');
  burst.className = 'cosmic-burst';
  burst.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(245, 158, 11, 0.8) 0%, transparent 70%);
    pointer-events: none;
    z-index: 10;
    animation: cosmic-burst-animation 2s ease-out forwards;
  `;
  
  container.appendChild(burst);
  
  setTimeout(() => {
    container.removeChild(burst);
  }, 2000);
}

// Show download success feedback
function showDownloadSuccess() {
  const downloadBtn = document.getElementById('download-resume');
  const btnText = downloadBtn.querySelector('.btn-text');
  const btnIcon = downloadBtn.querySelector('.btn-icon');
  
  downloadBtn.classList.add('download-success');
  btnText.textContent = 'Downloaded!';
  btnIcon.textContent = '✅';
  
  // Create success particles
  createSuccessParticles();
  
  // Show success message
  showStatusMessage('Resume downloaded successfully! 🚀', 'success');
}

// Show download error feedback
function showDownloadError() {
  const downloadBtn = document.getElementById('download-resume');
  const btnText = downloadBtn.querySelector('.btn-text');
  const btnIcon = downloadBtn.querySelector('.btn-icon');
  
  downloadBtn.classList.add('download-error');
  btnText.textContent = 'Error';
  btnIcon.textContent = '❌';
  
  // Show error message
  showStatusMessage('Download failed. Please try again.', 'error');
}

// Create success particles
function createSuccessParticles() {
  const container = document.querySelector('.resume-content');
  const particleCount = 12;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'success-particle';
    particle.style.cssText = `
      position: absolute;
      width: 6px;
      height: 6px;
      background: #10b981;
      border-radius: 50%;
      pointer-events: none;
      z-index: 20;
      animation: success-particle-burst 1.5s ease-out forwards;
      animation-delay: ${i * 0.1}s;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    `;
    
    container.appendChild(particle);
    
    setTimeout(() => {
      container.removeChild(particle);
    }, 1500);
  }
}

// Show status message
function showStatusMessage(message, type) {
  const statusDiv = document.createElement('div');
  statusDiv.className = `resume-status-message ${type}`;
  statusDiv.textContent = message;
  statusDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 1000;
    animation: status-message-appear 0.3s ease-out forwards;
    background: ${type === 'success' ? '#10b981' : '#ef4444'};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  `;
  
  document.body.appendChild(statusDiv);
  
  setTimeout(() => {
    statusDiv.style.animation = 'status-message-disappear 0.3s ease-out forwards';
    setTimeout(() => {
      document.body.removeChild(statusDiv);
    }, 300);
  }, 3000);
}

// Animate download button
function animateDownloadButton(enhance) {
  const downloadBtn = document.getElementById('download-resume');
  
  if (enhance) {
    downloadBtn.style.transform = 'translateY(-3px) scale(1.05)';
    downloadBtn.style.boxShadow = '0 8px 25px rgba(74, 158, 255, 0.4)';
  } else {
    downloadBtn.style.transform = 'translateY(0) scale(1)';
    downloadBtn.style.boxShadow = '';
  }
}

// Initialize resume preview functionality
function initializeResumePreview() {
  const previewContainer = document.getElementById('resume-preview');
  
  if (!previewContainer) return;
  
  // Add preview toggle button
  const previewBtn = document.createElement('button');
  previewBtn.className = 'btn-secondary preview-btn';
  previewBtn.innerHTML = `
    <span class="btn-text">Preview Resume</span>
    <span class="btn-icon" aria-hidden="true">👁️</span>
  `;
  previewBtn.setAttribute('aria-label', 'Preview resume content');
  
  const resumeActions = document.querySelector('.resume-actions');
  resumeActions.appendChild(previewBtn);
  
  previewBtn.addEventListener('click', toggleResumePreview);
}

// Toggle resume preview
function toggleResumePreview() {
  const previewContainer = document.getElementById('resume-preview');
  const previewBtn = document.querySelector('.preview-btn');
  const btnText = previewBtn.querySelector('.btn-text');
  const btnIcon = previewBtn.querySelector('.btn-icon');
  
  if (previewContainer.getAttribute('aria-hidden') === 'true') {
    // Show preview
    previewContainer.innerHTML = generateResumePreview();
    previewContainer.setAttribute('aria-hidden', 'false');
    previewContainer.style.display = 'block';
    previewContainer.style.animation = 'resume-preview-appear 0.5s ease-out forwards';
    
    btnText.textContent = 'Hide Preview';
    btnIcon.textContent = '🙈';
  } else {
    // Hide preview
    previewContainer.style.animation = 'resume-preview-disappear 0.3s ease-out forwards';
    setTimeout(() => {
      previewContainer.setAttribute('aria-hidden', 'true');
      previewContainer.style.display = 'none';
      previewContainer.innerHTML = '';
    }, 300);
    
    btnText.textContent = 'Preview Resume';
    btnIcon.textContent = '👁️';
  }
}

// Generate resume preview HTML
function generateResumePreview() {
  return `
    <div class="resume-preview-content">
      <div class="preview-header">
        <h3>Resume Preview</h3>
        <p>This is how your resume will appear when downloaded</p>
      </div>
      <div class="preview-body">
        ${generateResumeHTML().replace(/<style>[\s\S]*?<\/style>/, '<style>body { font-size: 14px; padding: 20px; background: white; color: #333; }</style>')}
      </div>
    </div>
  `;
}

// Initialize interactive effects
function initializeInteractiveEffects() {
  // Add parallax effect to Saturn ring on scroll
  window.addEventListener('scroll', handleResumeScroll);
  
  // Add intersection observer for entrance animation
  const resumeSection = document.querySelector('.resume-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('resume-visible');
        triggerEntranceAnimation();
      }
    });
  }, { threshold: 0.3 });
  
  observer.observe(resumeSection);
}

// Handle resume scroll effects
function handleResumeScroll() {
  const resumeSection = document.querySelector('.resume-section');
  const saturnRing = document.querySelector('.saturn-ring');
  
  if (!resumeSection || !saturnRing) return;
  
  const rect = resumeSection.getBoundingClientRect();
  const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
  
  // Apply parallax effect
  const translateY = (scrollProgress - 0.5) * 20;
  saturnRing.style.transform = `translateY(${translateY}px)`;
}

// Trigger entrance animation
function triggerEntranceAnimation() {
  const saturnRing = document.querySelector('.saturn-ring');
  const resumeActions = document.querySelector('.resume-actions');
  
  if (saturnRing) {
    saturnRing.style.animation = 'saturn-entrance 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
  }
  
  if (resumeActions) {
    resumeActions.style.animation = 'resume-actions-entrance 1s ease-out 0.5s forwards';
    resumeActions.style.opacity = '0';
  }
}

// Setup resize handler
function setupResumeResizeHandler() {
  let resizeTimeout;
  
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resumeState.isMobile = window.innerWidth < 768;
      
      // Recreate particles with new count
      const existingParticles = document.querySelectorAll('.saturn-particle');
      existingParticles.forEach(particle => particle.remove());
      
      const saturnRing = document.querySelector('.saturn-ring');
      if (saturnRing) {
        createSaturnParticles(saturnRing);
      }
    }, 250);
  });
}

// Export resume module
window.ResumeModule = {
  init: initializeResume,
  download: handleResumeDownload,
  preview: toggleResumePreview,
  data: resumeData,
  state: resumeState
};