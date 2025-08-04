/* Sangita's Codeverse - Skills Module */
/* Skills constellation functionality */

// Skills data structure
const skillsData = {
  languages: [
    { name: "JavaScript", proficiency: 5, x: 150, y: 100 },
    { name: "Python", proficiency: 5, x: 300, y: 150 },
    { name: "HTML/CSS", proficiency: 5, x: 100, y: 200 },
    { name: "SQL", proficiency: 4, x: 250, y: 80 },
    { name: "TypeScript", proficiency: 3, x: 200, y: 250 }
  ],
  frameworks: [
    { name: "React", proficiency: 4, x: 400, y: 120 },
    { name: "Node.js", proficiency: 4, x: 350, y: 200 },
    { name: "Express", proficiency: 3, x: 450, y: 180 },
    { name: "TailwindCSS", proficiency: 4, x: 380, y: 280 }
  ],
  tools: [
    { name: "Git", proficiency: 5, x: 550, y: 100 },
    { name: "Docker", proficiency: 3, x: 600, y: 160 },
    { name: "AWS", proficiency: 3, x: 520, y: 220 },
    { name: "Figma", proficiency: 4, x: 580, y: 280 }
  ],
  softSkills: [
    { name: "Problem Solving", proficiency: 5, x: 700, y: 120 },
    { name: "Team Work", proficiency: 4, x: 650, y: 200 },
    { name: "Communication", proficiency: 4, x: 720, y: 250 }
  ]
};

// Color mapping for skill categories
const skillColors = {
  languages: '#8b5cf6', // Neon purple
  frameworks: '#ec4899', // Cosmic pink
  tools: '#3b82f6',      // Electric blue
  softSkills: '#10b981'  // Success green
};

// Initialize skills module
function initializeSkills() {
  console.log('Initializing skills module...');
  
  // Create skills constellation
  createSkillsConstellation();
  
  // Initialize skill interactions
  initializeSkillInteractions();
  
  console.log('Skills module initialized');
}

// Create skills constellation SVG
function createSkillsConstellation() {
  const svg = document.getElementById('skills-constellation');
  
  if (!svg) {
    console.warn('Skills constellation SVG not found');
    return;
  }
  
  // Clear existing content
  svg.innerHTML = '<title id="constellation-desc">Interactive skills constellation showing technical abilities</title>';
  
  // Create constellation for each skill category
  Object.keys(skillsData).forEach(category => {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('class', `skill-category-${category}`);
    
    skillsData[category].forEach((skill, index) => {
      // Create skill star (circle)
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', skill.x);
      circle.setAttribute('cy', skill.y);
      circle.setAttribute('r', skill.proficiency * 3 + 2);
      circle.setAttribute('fill', skillColors[category]);
      circle.setAttribute('class', 'skill-star');
      circle.setAttribute('data-skill', skill.name);
      circle.setAttribute('data-category', category);
      circle.setAttribute('data-proficiency', skill.proficiency);
      circle.setAttribute('tabindex', '0');
      circle.setAttribute('role', 'button');
      circle.setAttribute('aria-label', `${skill.name} - ${skill.proficiency}/5 proficiency`);
      
      // Add glow effect
      circle.style.filter = `drop-shadow(0 0 ${skill.proficiency * 2}px ${skillColors[category]})`;
      
      group.appendChild(circle);
      
      // Create skill label (initially hidden)
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', skill.x);
      text.setAttribute('y', skill.y - (skill.proficiency * 3 + 10));
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('class', 'skill-label');
      text.setAttribute('fill', '#ffffff');
      text.setAttribute('font-size', '12');
      text.setAttribute('font-family', 'Orbitron, monospace');
      text.setAttribute('opacity', '0');
      text.textContent = skill.name;
      
      group.appendChild(text);
    });
    
    svg.appendChild(group);
  });
  
  // Add connecting lines between related skills
  addSkillConnections(svg);
}

// Add connecting lines between related skills
function addSkillConnections(svg) {
  const connections = [
    // Connect JavaScript to React and Node.js
    { from: { category: 'languages', name: 'JavaScript' }, to: { category: 'frameworks', name: 'React' } },
    { from: { category: 'languages', name: 'JavaScript' }, to: { category: 'frameworks', name: 'Node.js' } },
    // Connect HTML/CSS to TailwindCSS
    { from: { category: 'languages', name: 'HTML/CSS' }, to: { category: 'frameworks', name: 'TailwindCSS' } },
    // Connect Python to various tools
    { from: { category: 'languages', name: 'Python' }, to: { category: 'tools', name: 'Docker' } }
  ];
  
  const linesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  linesGroup.setAttribute('class', 'skill-connections');
  
  connections.forEach(connection => {
    const fromSkill = findSkillByName(connection.from.category, connection.from.name);
    const toSkill = findSkillByName(connection.to.category, connection.to.name);
    
    if (fromSkill && toSkill) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', fromSkill.x);
      line.setAttribute('y1', fromSkill.y);
      line.setAttribute('x2', toSkill.x);
      line.setAttribute('y2', toSkill.y);
      line.setAttribute('stroke', 'rgba(139, 92, 246, 0.3)');
      line.setAttribute('stroke-width', '1');
      line.setAttribute('class', 'skill-connection');
      
      linesGroup.appendChild(line);
    }
  });
  
  // Insert lines before skill stars so they appear behind
  svg.insertBefore(linesGroup, svg.firstChild.nextSibling);
}

// Find skill by name in category
function findSkillByName(category, name) {
  return skillsData[category]?.find(skill => skill.name === name);
}

// Initialize skill interactions
function initializeSkillInteractions() {
  const skillStars = document.querySelectorAll('.skill-star');
  
  skillStars.forEach(star => {
    // Mouse hover events
    star.addEventListener('mouseenter', function() {
      showSkillLabel(this);
      highlightSkillConnections(this);
    });
    
    star.addEventListener('mouseleave', function() {
      hideSkillLabel(this);
      unhighlightSkillConnections(this);
    });
    
    // Keyboard events
    star.addEventListener('focus', function() {
      showSkillLabel(this);
      highlightSkillConnections(this);
    });
    
    star.addEventListener('blur', function() {
      hideSkillLabel(this);
      unhighlightSkillConnections(this);
    });
    
    // Click events for mobile
    star.addEventListener('click', function() {
      const label = this.nextElementSibling;
      if (label && label.classList.contains('skill-label')) {
        const isVisible = label.getAttribute('opacity') === '1';
        if (isVisible) {
          hideSkillLabel(this);
        } else {
          // Hide all other labels first
          document.querySelectorAll('.skill-label').forEach(l => l.setAttribute('opacity', '0'));
          showSkillLabel(this);
        }
      }
    });
  });
}

// Show skill label
function showSkillLabel(star) {
  const label = star.nextElementSibling;
  if (label && label.classList.contains('skill-label')) {
    label.setAttribute('opacity', '1');
    label.style.transition = 'opacity 0.3s ease';
  }
  
  // Add glow effect to star
  star.classList.add('skill-star-active');
}

// Hide skill label
function hideSkillLabel(star) {
  const label = star.nextElementSibling;
  if (label && label.classList.contains('skill-label')) {
    label.setAttribute('opacity', '0');
  }
  
  // Remove glow effect from star
  star.classList.remove('skill-star-active');
}

// Highlight skill connections
function highlightSkillConnections(star) {
  const skillName = star.getAttribute('data-skill');
  const connections = document.querySelectorAll('.skill-connection');
  
  connections.forEach(connection => {
    // This is a simplified version - in a full implementation,
    // you'd check if the connection involves this skill
    connection.style.stroke = 'rgba(139, 92, 246, 0.6)';
    connection.style.strokeWidth = '2';
  });
}

// Remove highlight from skill connections
function unhighlightSkillConnections(star) {
  const connections = document.querySelectorAll('.skill-connection');
  
  connections.forEach(connection => {
    connection.style.stroke = 'rgba(139, 92, 246, 0.3)';
    connection.style.strokeWidth = '1';
  });
}

// Export functions for external use
window.SkillsModule = {
  init: initializeSkills,
  data: skillsData,
  colors: skillColors
};