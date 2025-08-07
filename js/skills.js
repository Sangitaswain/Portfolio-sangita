/* Sangita's Codeverse - Skills Module */
/* Skills constellation functionality */

// Enhanced skills data structure with more comprehensive skills
const skillsData = {
  languages: [
    { name: "JavaScript", proficiency: 5, x: 120, y: 80, connections: ["React", "Node.js", "Express", "TypeScript"] },
    { name: "Python", proficiency: 5, x: 200, y: 120, connections: ["Django", "FastAPI", "TensorFlow", "Docker", "AWS"] },
    { name: "HTML/CSS", proficiency: 5, x: 80, y: 160, connections: ["React", "TailwindCSS", "SASS", "Figma"] },
    { name: "SQL", proficiency: 4, x: 160, y: 40, connections: ["PostgreSQL", "MongoDB", "AWS"] },
    { name: "TypeScript", proficiency: 4, x: 240, y: 180, connections: ["JavaScript", "React", "Node.js"] },
    { name: "Java", proficiency: 3, x: 120, y: 220, connections: ["Spring Boot", "Problem Solving"] },
    { name: "R", proficiency: 3, x: 280, y: 60, connections: ["Data Analysis", "Machine Learning"] }
  ],
  frameworks: [
    { name: "React", proficiency: 5, x: 400, y: 100, connections: ["JavaScript", "TypeScript", "HTML/CSS", "Node.js"] },
    { name: "Node.js", proficiency: 4, x: 480, y: 160, connections: ["JavaScript", "TypeScript", "Express", "MongoDB"] },
    { name: "Express", proficiency: 4, x: 360, y: 180, connections: ["Node.js", "JavaScript", "PostgreSQL"] },
    { name: "TailwindCSS", proficiency: 4, x: 320, y: 240, connections: ["HTML/CSS", "React", "Figma"] },
    { name: "Django", proficiency: 3, x: 440, y: 220, connections: ["Python", "PostgreSQL"] },
    { name: "FastAPI", proficiency: 3, x: 520, y: 120, connections: ["Python", "Docker"] },
    { name: "Spring Boot", proficiency: 2, x: 380, y: 280, connections: ["Java", "PostgreSQL"] },
    { name: "TensorFlow", proficiency: 3, x: 460, y: 40, connections: ["Python", "Machine Learning"] }
  ],
  tools: [
    { name: "Git", proficiency: 5, x: 600, y: 80, connections: ["GitHub", "Team Work", "Problem Solving"] },
    { name: "Docker", proficiency: 4, x: 680, y: 140, connections: ["Python", "FastAPI", "AWS", "DevOps"] },
    { name: "AWS", proficiency: 4, x: 640, y: 200, connections: ["Python", "Docker", "PostgreSQL", "DevOps"] },
    { name: "PostgreSQL", proficiency: 4, x: 560, y: 160, connections: ["SQL", "Django", "Express", "AWS"] },
    { name: "MongoDB", proficiency: 3, x: 720, y: 100, connections: ["Node.js", "Express"] },
    { name: "Figma", proficiency: 4, x: 580, y: 240, connections: ["HTML/CSS", "TailwindCSS", "Design Thinking"] },
    { name: "SASS", proficiency: 3, x: 660, y: 280, connections: ["HTML/CSS", "React"] },
    { name: "Webpack", proficiency: 3, x: 620, y: 40, connections: ["JavaScript", "React"] },
    { name: "GitHub", proficiency: 5, x: 740, y: 160, connections: ["Git", "Team Work"] }
  ],
  softSkills: [
    { name: "Problem Solving", proficiency: 5, x: 800, y: 100, connections: ["Critical Thinking", "Adaptability", "Java"] },
    { name: "Team Work", proficiency: 5, x: 760, y: 180, connections: ["Communication", "Leadership", "Git", "GitHub"] },
    { name: "Communication", proficiency: 4, x: 840, y: 160, connections: ["Team Work", "Leadership", "Presentation"] },
    { name: "Leadership", proficiency: 4, x: 780, y: 240, connections: ["Team Work", "Communication", "Project Management"] },
    { name: "Critical Thinking", proficiency: 4, x: 860, y: 80, connections: ["Problem Solving", "Data Analysis"] },
    { name: "Adaptability", proficiency: 5, x: 820, y: 220, connections: ["Problem Solving", "Learning Agility"] },
    { name: "Design Thinking", proficiency: 3, x: 740, y: 280, connections: ["Figma", "User Experience"] },
    { name: "Data Analysis", proficiency: 4, x: 900, y: 120, connections: ["R", "Critical Thinking", "Machine Learning"] },
    { name: "Machine Learning", proficiency: 3, x: 880, y: 200, connections: ["Python", "TensorFlow", "Data Analysis"] },
    { name: "DevOps", proficiency: 3, x: 800, y: 280, connections: ["Docker", "AWS", "Git"] }
  ]
};

// Enhanced color mapping for skill categories with gradients
const skillColors = {
  languages: '#8b5cf6',    // Neon purple
  frameworks: '#ec4899',   // Cosmic pink  
  tools: '#3b82f6',        // Electric blue
  softSkills: '#10b981'    // Success green
};

// Gradient definitions for enhanced visual appeal
const skillGradients = {
  languages: 'radial-gradient(circle, #8b5cf6 0%, #7c3aed 100%)',
  frameworks: 'radial-gradient(circle, #ec4899 0%, #db2777 100%)',
  tools: 'radial-gradient(circle, #3b82f6 0%, #2563eb 100%)',
  softSkills: 'radial-gradient(circle, #10b981 0%, #059669 100%)'
};

// State management for constellation
let constellationState = {
  selectedSkill: null,
  hoveredSkill: null,
  isAnimating: false,
  viewportWidth: 800,
  viewportHeight: 400,
  isMobile: false
};

// Initialize skills module
function initializeSkills() {
  console.log('Initializing skills constellation module...');
  
  // Detect mobile device
  constellationState.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Set up responsive constellation
  setupResponsiveConstellation();
  
  // Create skills constellation with enhanced features
  createSkillsConstellation();
  
  // Initialize advanced skill interactions
  initializeSkillInteractions();
  
  // Initialize constellation animations
  initializeConstellationAnimations();
  
  // Set up resize handler
  setupResizeHandler();
  
  console.log('Skills constellation module initialized');
}

// Setup responsive constellation dimensions
function setupResponsiveConstellation() {
  const container = document.querySelector('.skills-container');
  const svg = document.getElementById('skills-constellation');
  
  if (!container || !svg) return;
  
  const containerRect = container.getBoundingClientRect();
  constellationState.viewportWidth = Math.max(800, containerRect.width);
  constellationState.viewportHeight = constellationState.isMobile ? 300 : 400;
  
  svg.setAttribute('viewBox', `0 0 ${constellationState.viewportWidth} ${constellationState.viewportHeight}`);
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', constellationState.viewportHeight);
}

// Create enhanced skills constellation SVG
function createSkillsConstellation() {
  const svg = document.getElementById('skills-constellation');
  
  if (!svg) {
    console.warn('Skills constellation SVG not found');
    return;
  }
  
  // Clear existing content and add title
  svg.innerHTML = '<title id="constellation-desc">Interactive skills constellation showing technical abilities</title>';
  
  // Create gradient definitions
  createGradientDefinitions(svg);
  
  // Create background cosmic effect
  createCosmicBackground(svg);
  
  // Create constellation for each skill category
  Object.keys(skillsData).forEach((category, categoryIndex) => {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('class', `skill-category-${category}`);
    group.setAttribute('data-category', category);
    
    skillsData[category].forEach((skill, index) => {
      // Scale positions for responsive design
      const scaledX = scalePosition(skill.x, 'x');
      const scaledY = scalePosition(skill.y, 'y');
      const radius = calculateSkillRadius(skill.proficiency);
      
      // Create skill star container
      const starGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      starGroup.setAttribute('class', 'skill-star-group');
      starGroup.setAttribute('data-skill', skill.name);
      starGroup.setAttribute('data-category', category);
      
      // Create outer glow ring
      const glowRing = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      glowRing.setAttribute('cx', scaledX);
      glowRing.setAttribute('cy', scaledY);
      glowRing.setAttribute('r', radius + 4);
      glowRing.setAttribute('fill', 'none');
      glowRing.setAttribute('stroke', skillColors[category]);
      glowRing.setAttribute('stroke-width', '1');
      glowRing.setAttribute('opacity', '0.3');
      glowRing.setAttribute('class', 'skill-glow-ring');
      
      // Create main skill star
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', scaledX);
      circle.setAttribute('cy', scaledY);
      circle.setAttribute('r', radius);
      circle.setAttribute('fill', `url(#gradient-${category})`);
      circle.setAttribute('class', 'skill-star');
      circle.setAttribute('data-skill', skill.name);
      circle.setAttribute('data-category', category);
      circle.setAttribute('data-proficiency', skill.proficiency);
      circle.setAttribute('tabindex', '0');
      circle.setAttribute('role', 'button');
      circle.setAttribute('aria-label', `${skill.name} - ${skill.proficiency}/5 proficiency in ${category}`);
      
      // Add proficiency indicator (inner circle)
      const proficiencyIndicator = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      proficiencyIndicator.setAttribute('cx', scaledX);
      proficiencyIndicator.setAttribute('cy', scaledY);
      proficiencyIndicator.setAttribute('r', radius * 0.6);
      proficiencyIndicator.setAttribute('fill', 'rgba(255, 255, 255, 0.2)');
      proficiencyIndicator.setAttribute('class', 'skill-proficiency-indicator');
      
      // Create skill label with background
      const labelGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      labelGroup.setAttribute('class', 'skill-label-group');
      labelGroup.setAttribute('opacity', '0');
      
      // Label background
      const labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      labelBg.setAttribute('class', 'skill-label-bg');
      labelBg.setAttribute('fill', 'rgba(26, 26, 46, 0.9)');
      labelBg.setAttribute('stroke', skillColors[category]);
      labelBg.setAttribute('stroke-width', '1');
      labelBg.setAttribute('rx', '4');
      
      // Label text
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', scaledX);
      text.setAttribute('y', scaledY - radius - 20);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('class', 'skill-label');
      text.setAttribute('fill', '#ffffff');
      text.setAttribute('font-size', constellationState.isMobile ? '10' : '12');
      text.setAttribute('font-family', 'Orbitron, monospace');
      text.setAttribute('font-weight', '500');
      text.textContent = skill.name;
      
      // Position label background
      const textBBox = text.getBBox ? text.getBBox() : { x: scaledX - 30, y: scaledY - radius - 30, width: 60, height: 16 };
      labelBg.setAttribute('x', textBBox.x - 4);
      labelBg.setAttribute('y', textBBox.y - 2);
      labelBg.setAttribute('width', textBBox.width + 8);
      labelBg.setAttribute('height', textBBox.height + 4);
      
      // Proficiency stars
      const starsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      starsGroup.setAttribute('class', 'proficiency-stars');
      for (let i = 0; i < 5; i++) {
        const star = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        star.setAttribute('x', scaledX - 20 + (i * 8));
        star.setAttribute('y', scaledY - radius - 5);
        star.setAttribute('text-anchor', 'middle');
        star.setAttribute('font-size', '8');
        star.setAttribute('fill', i < skill.proficiency ? '#fbbf24' : 'rgba(255, 255, 255, 0.3)');
        star.textContent = '★';
        starsGroup.appendChild(star);
      }
      
      // Assemble label group
      labelGroup.appendChild(labelBg);
      labelGroup.appendChild(text);
      labelGroup.appendChild(starsGroup);
      
      // Assemble star group
      starGroup.appendChild(glowRing);
      starGroup.appendChild(circle);
      starGroup.appendChild(proficiencyIndicator);
      starGroup.appendChild(labelGroup);
      
      group.appendChild(starGroup);
    });
    
    svg.appendChild(group);
  });
  
  // Add connecting lines between related skills
  addEnhancedSkillConnections(svg);
  
  // Add constellation animations
  addConstellationTwinkle(svg);
}

// Create gradient definitions for enhanced visual appeal
function createGradientDefinitions(svg) {
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  
  Object.keys(skillColors).forEach(category => {
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
    gradient.setAttribute('id', `gradient-${category}`);
    gradient.setAttribute('cx', '30%');
    gradient.setAttribute('cy', '30%');
    gradient.setAttribute('r', '70%');
    
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', skillColors[category]);
    stop1.setAttribute('stop-opacity', '1');
    
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', skillColors[category]);
    stop2.setAttribute('stop-opacity', '0.7');
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
  });
  
  svg.appendChild(defs);
}

// Create cosmic background effect
function createCosmicBackground(svg) {
  const bgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  bgGroup.setAttribute('class', 'cosmic-background');
  bgGroup.setAttribute('opacity', '0.1');
  
  // Add subtle background stars
  for (let i = 0; i < 20; i++) {
    const star = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    star.setAttribute('cx', Math.random() * constellationState.viewportWidth);
    star.setAttribute('cy', Math.random() * constellationState.viewportHeight);
    star.setAttribute('r', Math.random() * 1.5 + 0.5);
    star.setAttribute('fill', '#ffffff');
    star.setAttribute('class', 'bg-star');
    bgGroup.appendChild(star);
  }
  
  svg.appendChild(bgGroup);
}

// Scale positions for responsive design
function scalePosition(position, axis) {
  if (axis === 'x') {
    return (position / 1000) * constellationState.viewportWidth;
  } else {
    return (position / 400) * constellationState.viewportHeight;
  }
}

// Calculate skill radius based on proficiency
function calculateSkillRadius(proficiency) {
  const baseRadius = constellationState.isMobile ? 6 : 8;
  return baseRadius + (proficiency * 2);
}

// Add enhanced connecting lines between related skills
function addEnhancedSkillConnections(svg) {
  const linesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  linesGroup.setAttribute('class', 'skill-connections');
  
  // Generate connections based on skill data
  Object.keys(skillsData).forEach(category => {
    skillsData[category].forEach(skill => {
      if (skill.connections) {
        skill.connections.forEach(connectionName => {
          const connectedSkill = findSkillByNameGlobal(connectionName);
          if (connectedSkill) {
            const line = createConnectionLine(skill, connectedSkill, category);
            if (line) linesGroup.appendChild(line);
          }
        });
      }
    });
  });
  
  // Insert lines before skill stars so they appear behind
  svg.insertBefore(linesGroup, svg.querySelector('.skill-category-languages'));
}

// Create connection line between two skills
function createConnectionLine(fromSkill, toSkill, fromCategory) {
  const fromX = scalePosition(fromSkill.x, 'x');
  const fromY = scalePosition(fromSkill.y, 'y');
  const toX = scalePosition(toSkill.skill.x, 'x');
  const toY = scalePosition(toSkill.skill.y, 'y');
  
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', fromX);
  line.setAttribute('y1', fromY);
  line.setAttribute('x2', toX);
  line.setAttribute('y2', toY);
  line.setAttribute('stroke', 'rgba(139, 92, 246, 0.2)');
  line.setAttribute('stroke-width', '1');
  line.setAttribute('stroke-dasharray', '2,3');
  line.setAttribute('class', 'skill-connection');
  line.setAttribute('data-from', fromSkill.name);
  line.setAttribute('data-to', toSkill.skill.name);
  line.setAttribute('opacity', '0.3');
  
  return line;
}

// Add constellation twinkling animation
function addConstellationTwinkle(svg) {
  const stars = svg.querySelectorAll('.skill-star');
  
  stars.forEach((star, index) => {
    // Stagger the twinkling animation
    const delay = index * 0.2;
    star.style.animation = `constellation-twinkle 3s ease-in-out infinite ${delay}s`;
  });
}

// Find skill by name in category
function findSkillByName(category, name) {
  return skillsData[category]?.find(skill => skill.name === name);
}

// Find skill by name across all categories
function findSkillByNameGlobal(name) {
  for (const category of Object.keys(skillsData)) {
    const skill = skillsData[category].find(s => s.name === name);
    if (skill) {
      return { skill, category };
    }
  }
  return null;
}

// Initialize advanced skill interactions
function initializeSkillInteractions() {
  const skillStars = document.querySelectorAll('.skill-star');
  const skillGroups = document.querySelectorAll('.skill-star-group');
  
  skillGroups.forEach(group => {
    const star = group.querySelector('.skill-star');
    const skillName = star.getAttribute('data-skill');
    const category = star.getAttribute('data-category');
    
    // Enhanced mouse hover events
    group.addEventListener('mouseenter', function(e) {
      if (!constellationState.isAnimating) {
        handleSkillHover(skillName, category, true);
      }
    });
    
    group.addEventListener('mouseleave', function(e) {
      if (!constellationState.isAnimating) {
        handleSkillHover(skillName, category, false);
      }
    });
    
    // Enhanced keyboard events
    star.addEventListener('focus', function() {
      handleSkillFocus(skillName, category, true);
    });
    
    star.addEventListener('blur', function() {
      handleSkillFocus(skillName, category, false);
    });
    
    // Enhanced click events for mobile and desktop
    star.addEventListener('click', function(e) {
      e.preventDefault();
      handleSkillClick(skillName, category);
    });
    
    // Touch events for mobile optimization
    if (constellationState.isMobile) {
      group.addEventListener('touchstart', function(e) {
        e.preventDefault();
        handleSkillTouch(skillName, category);
      });
    }
    
    // Keyboard navigation
    star.addEventListener('keydown', function(e) {
      handleSkillKeyboard(e, skillName, category);
    });
  });
  
  // Initialize category filter interactions
  initializeCategoryFilters();
}

// Handle skill hover interactions
function handleSkillHover(skillName, category, isEntering) {
  if (isEntering) {
    constellationState.hoveredSkill = skillName;
    showSkillDetails(skillName, category);
    highlightSkillConnections(skillName);
    animateSkillGlow(skillName, true);
  } else {
    constellationState.hoveredSkill = null;
    hideSkillDetails(skillName);
    unhighlightSkillConnections(skillName);
    animateSkillGlow(skillName, false);
  }
}

// Handle skill focus interactions
function handleSkillFocus(skillName, category, isFocusing) {
  if (isFocusing) {
    showSkillDetails(skillName, category);
    highlightSkillConnections(skillName);
    animateSkillGlow(skillName, true);
    announceSkillForScreenReader(skillName, category);
  } else {
    hideSkillDetails(skillName);
    unhighlightSkillConnections(skillName);
    animateSkillGlow(skillName, false);
  }
}

// Handle skill click interactions
function handleSkillClick(skillName, category) {
  if (constellationState.selectedSkill === skillName) {
    // Deselect if already selected
    constellationState.selectedSkill = null;
    hideSkillDetails(skillName);
    unhighlightSkillConnections(skillName);
  } else {
    // Select new skill
    if (constellationState.selectedSkill) {
      // Deselect previous skill
      hideSkillDetails(constellationState.selectedSkill);
      unhighlightSkillConnections(constellationState.selectedSkill);
    }
    
    constellationState.selectedSkill = skillName;
    showSkillDetails(skillName, category);
    highlightSkillConnections(skillName);
    animateSkillPulse(skillName);
  }
}

// Handle touch interactions for mobile
function handleSkillTouch(skillName, category) {
  // Prevent multiple rapid touches
  if (constellationState.isAnimating) return;
  
  constellationState.isAnimating = true;
  
  // Show details temporarily on touch
  showSkillDetails(skillName, category);
  highlightSkillConnections(skillName);
  
  // Hide after delay
  setTimeout(() => {
    hideSkillDetails(skillName);
    unhighlightSkillConnections(skillName);
    constellationState.isAnimating = false;
  }, 3000);
}

// Handle keyboard navigation
function handleSkillKeyboard(e, skillName, category) {
  switch (e.key) {
    case 'Enter':
    case ' ':
      e.preventDefault();
      handleSkillClick(skillName, category);
      break;
    case 'Escape':
      if (constellationState.selectedSkill) {
        constellationState.selectedSkill = null;
        hideSkillDetails(skillName);
        unhighlightSkillConnections(skillName);
      }
      break;
    case 'ArrowRight':
    case 'ArrowLeft':
    case 'ArrowUp':
    case 'ArrowDown':
      e.preventDefault();
      navigateToNextSkill(e.key, skillName);
      break;
  }
}

// Navigate to next skill with arrow keys
function navigateToNextSkill(direction, currentSkill) {
  const allStars = Array.from(document.querySelectorAll('.skill-star'));
  const currentIndex = allStars.findIndex(star => star.getAttribute('data-skill') === currentSkill);
  
  let nextIndex;
  switch (direction) {
    case 'ArrowRight':
    case 'ArrowDown':
      nextIndex = (currentIndex + 1) % allStars.length;
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      nextIndex = (currentIndex - 1 + allStars.length) % allStars.length;
      break;
  }
  
  if (nextIndex !== undefined) {
    allStars[nextIndex].focus();
  }
}

// Show skill details with enhanced animations
function showSkillDetails(skillName, category) {
  const starGroup = document.querySelector(`[data-skill="${skillName}"]`).closest('.skill-star-group');
  const labelGroup = starGroup.querySelector('.skill-label-group');
  
  if (labelGroup) {
    // Animate label appearance
    labelGroup.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    labelGroup.setAttribute('opacity', '1');
    labelGroup.style.transform = 'translateY(-5px)';
  }
}

// Hide skill details
function hideSkillDetails(skillName) {
  const starGroup = document.querySelector(`[data-skill="${skillName}"]`).closest('.skill-star-group');
  const labelGroup = starGroup?.querySelector('.skill-label-group');
  
  if (labelGroup) {
    labelGroup.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    labelGroup.setAttribute('opacity', '0');
    labelGroup.style.transform = 'translateY(0)';
  }
}

// Animate skill glow effect
function animateSkillGlow(skillName, isGlowing) {
  const starGroup = document.querySelector(`[data-skill="${skillName}"]`).closest('.skill-star-group');
  const glowRing = starGroup?.querySelector('.skill-glow-ring');
  const star = starGroup?.querySelector('.skill-star');
  
  if (glowRing && star) {
    if (isGlowing) {
      glowRing.style.transition = 'opacity 0.3s ease, stroke-width 0.3s ease';
      glowRing.setAttribute('opacity', '0.8');
      glowRing.setAttribute('stroke-width', '2');
      star.style.filter = `drop-shadow(0 0 10px ${star.getAttribute('fill')})`;
    } else {
      glowRing.style.transition = 'opacity 0.3s ease, stroke-width 0.3s ease';
      glowRing.setAttribute('opacity', '0.3');
      glowRing.setAttribute('stroke-width', '1');
      star.style.filter = 'none';
    }
  }
}

// Animate skill pulse effect for selection
function animateSkillPulse(skillName) {
  const star = document.querySelector(`[data-skill="${skillName}"].skill-star`);
  if (star) {
    star.style.animation = 'skill-pulse 0.6s ease-out';
    setTimeout(() => {
      star.style.animation = '';
    }, 600);
  }
}

// Highlight skill connections with enhanced visuals
function highlightSkillConnections(skillName) {
  const connections = document.querySelectorAll('.skill-connection');
  const skill = findSkillByNameGlobal(skillName);
  
  if (!skill) return;
  
  connections.forEach(connection => {
    const fromSkill = connection.getAttribute('data-from');
    const toSkill = connection.getAttribute('data-to');
    
    if (fromSkill === skillName || toSkill === skillName) {
      // Highlight connected lines
      connection.style.transition = 'all 0.3s ease';
      connection.setAttribute('stroke', 'rgba(139, 92, 246, 0.8)');
      connection.setAttribute('stroke-width', '2');
      connection.setAttribute('opacity', '1');
      connection.style.filter = 'drop-shadow(0 0 3px rgba(139, 92, 246, 0.6))';
      
      // Highlight connected skills
      const connectedSkillName = fromSkill === skillName ? toSkill : fromSkill;
      const connectedStar = document.querySelector(`[data-skill="${connectedSkillName}"].skill-star`);
      if (connectedStar) {
        connectedStar.style.transition = 'all 0.3s ease';
        connectedStar.style.opacity = '1';
        connectedStar.style.transform = 'scale(1.1)';
      }
    } else {
      // Dim unrelated connections
      connection.style.transition = 'all 0.3s ease';
      connection.setAttribute('opacity', '0.1');
    }
  });
  
  // Dim unrelated skills
  const allStars = document.querySelectorAll('.skill-star');
  allStars.forEach(star => {
    const starName = star.getAttribute('data-skill');
    if (starName !== skillName && !isSkillConnected(skillName, starName)) {
      star.style.transition = 'opacity 0.3s ease';
      star.style.opacity = '0.3';
    }
  });
}

// Remove highlight from skill connections
function unhighlightSkillConnections(skillName) {
  const connections = document.querySelectorAll('.skill-connection');
  const allStars = document.querySelectorAll('.skill-star');
  
  // Reset all connections
  connections.forEach(connection => {
    connection.style.transition = 'all 0.3s ease';
    connection.setAttribute('stroke', 'rgba(139, 92, 246, 0.2)');
    connection.setAttribute('stroke-width', '1');
    connection.setAttribute('opacity', '0.3');
    connection.style.filter = 'none';
  });
  
  // Reset all stars
  allStars.forEach(star => {
    star.style.transition = 'all 0.3s ease';
    star.style.opacity = '1';
    star.style.transform = 'scale(1)';
  });
}

// Check if two skills are connected
function isSkillConnected(skill1, skill2) {
  const skillData1 = findSkillByNameGlobal(skill1);
  const skillData2 = findSkillByNameGlobal(skill2);
  
  if (!skillData1 || !skillData2) return false;
  
  return skillData1.skill.connections?.includes(skill2) || 
         skillData2.skill.connections?.includes(skill1);
}

// Announce skill for screen readers
function announceSkillForScreenReader(skillName, category) {
  const skill = findSkillByNameGlobal(skillName);
  if (skill) {
    const announcement = `${skillName}, ${skill.skill.proficiency} out of 5 stars, ${category} category`;
    
    // Create temporary announcement element
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.style.position = 'absolute';
    announcer.style.left = '-10000px';
    announcer.textContent = announcement;
    
    document.body.appendChild(announcer);
    
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 1000);
  }
}

// Export functions for external use
window.SkillsModule = {
  init: initializeSkills,
  data: skillsData,
  colors: skillColors
};

// Initialize category filter interactions
function initializeCategoryFilters() {
  const legendItems = document.querySelectorAll('.legend-item');
  
  legendItems.forEach(item => {
    const legendColor = item.querySelector('.legend-color');
    const category = legendColor?.className.split(' ').find(cls => 
      ['languages', 'frameworks', 'tools', 'soft-skills'].includes(cls)
    );
    
    if (category) {
      item.style.cursor = 'pointer';
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', `Filter by ${category.replace('-', ' ')}`);
      
      // Click handler
      item.addEventListener('click', () => {
        toggleCategoryFilter(category);
      });
      
      // Keyboard handler
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleCategoryFilter(category);
        }
      });
      
      // Hover effects
      item.addEventListener('mouseenter', () => {
        highlightCategory(category, true);
      });
      
      item.addEventListener('mouseleave', () => {
        highlightCategory(category, false);
      });
    }
  });
}

// Toggle category filter
function toggleCategoryFilter(category) {
  const normalizedCategory = category.replace('-', '');
  const categoryGroup = document.querySelector(`.skill-category-${normalizedCategory}`);
  const legendItem = document.querySelector(`.legend-color.${category}`).closest('.legend-item');
  
  if (!categoryGroup || !legendItem) return;
  
  const isHidden = categoryGroup.style.opacity === '0.3';
  
  if (isHidden) {
    // Show category
    categoryGroup.style.transition = 'opacity 0.3s ease';
    categoryGroup.style.opacity = '1';
    legendItem.style.opacity = '1';
    legendItem.setAttribute('aria-pressed', 'false');
  } else {
    // Hide category
    categoryGroup.style.transition = 'opacity 0.3s ease';
    categoryGroup.style.opacity = '0.3';
    legendItem.style.opacity = '0.6';
    legendItem.setAttribute('aria-pressed', 'true');
  }
}

// Highlight category on hover
function highlightCategory(category, isHighlighting) {
  const normalizedCategory = category.replace('-', '');
  const categoryGroup = document.querySelector(`.skill-category-${normalizedCategory}`);
  const allGroups = document.querySelectorAll('[class*="skill-category-"]');
  
  if (isHighlighting) {
    // Highlight selected category
    allGroups.forEach(group => {
      if (group !== categoryGroup) {
        group.style.transition = 'opacity 0.3s ease';
        group.style.opacity = '0.3';
      }
    });
    
    if (categoryGroup) {
      categoryGroup.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      categoryGroup.style.opacity = '1';
      categoryGroup.style.transform = 'scale(1.05)';
    }
  } else {
    // Reset all categories
    allGroups.forEach(group => {
      group.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      group.style.opacity = '1';
      group.style.transform = 'scale(1)';
    });
  }
}

// Initialize constellation animations
function initializeConstellationAnimations() {
  // Add entrance animations
  const skillGroups = document.querySelectorAll('.skill-star-group');
  
  skillGroups.forEach((group, index) => {
    group.style.opacity = '0';
    group.style.transform = 'scale(0.5)';
    
    setTimeout(() => {
      group.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      group.style.opacity = '1';
      group.style.transform = 'scale(1)';
    }, index * 100);
  });
  
  // Add floating animation to background stars
  const bgStars = document.querySelectorAll('.bg-star');
  bgStars.forEach((star, index) => {
    star.style.animation = `float ${3 + Math.random() * 2}s ease-in-out infinite ${index * 0.5}s`;
  });
}

// Setup resize handler for responsive behavior
function setupResizeHandler() {
  let resizeTimeout;
  
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Update mobile detection
      constellationState.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
      
      // Recreate constellation with new dimensions
      setupResponsiveConstellation();
      createSkillsConstellation();
      initializeSkillInteractions();
    }, 250);
  });
}

// Utility function to create skill tooltip
function createSkillTooltip(skillName, category) {
  const skill = findSkillByNameGlobal(skillName);
  if (!skill) return null;
  
  const tooltip = document.createElement('div');
  tooltip.className = 'skill-tooltip';
  tooltip.innerHTML = `
    <div class="tooltip-header">
      <h4>${skillName}</h4>
      <span class="tooltip-category">${category}</span>
    </div>
    <div class="tooltip-proficiency">
      ${'★'.repeat(skill.skill.proficiency)}${'☆'.repeat(5 - skill.skill.proficiency)}
    </div>
    ${skill.skill.connections ? `
      <div class="tooltip-connections">
        <strong>Related:</strong> ${skill.skill.connections.slice(0, 3).join(', ')}
        ${skill.skill.connections.length > 3 ? '...' : ''}
      </div>
    ` : ''}
  `;
  
  return tooltip;
}

// Performance optimization: Debounce function
function debounce(func, wait) {
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

// Export enhanced functions for external use
window.SkillsModule = {
  init: initializeSkills,
  data: skillsData,
  colors: skillColors,
  state: constellationState,
  showSkill: (skillName, category) => showSkillDetails(skillName, category),
  hideSkill: (skillName) => hideSkillDetails(skillName),
  highlightConnections: (skillName) => highlightSkillConnections(skillName),
  unhighlightConnections: (skillName) => unhighlightSkillConnections(skillName),
  toggleCategory: (category) => toggleCategoryFilter(category)
};