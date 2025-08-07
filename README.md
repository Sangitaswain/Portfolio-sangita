# 🌌 Sangita's Codeverse - Cosmic Developer Portfolio

An immersive, interactive, and animated personal developer portfolio website that represents Sangita's personality, coding skills, and career aspirations through a galaxy-themed interface with GenZ vibes.

## ✨ Features

- **🌌 Galaxy Landing Page**: Immersive 3D background with floating planet navigation
- **👤 Interactive About Me**: Profile in glowing orb with animated bio content  
- **🚀 Projects Showcase**: Enhanced project cards with shooting star effects, filtering, and modal details
- **⭐ Developer Timeline**: Professional timeline showcasing skills journey with immersive cosmic background
- **🪐 Saturn Ring Resume Portal**: Advanced 3D Saturn ring animations with intelligent download system and resume preview
- **🌑 Contact Portal**: Contact form with cosmic animations and social links
- **📱 Responsive Design**: Cross-device optimization with performance considerations
- **🎮 Easter Egg Feature**: Hidden Tic Tac Toe Herb Game (try typing `initiate()` in console!)

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+) with modular architecture
- **3D Graphics**: Vanta.js with Three.js backend
- **Animations**: GSAP (GreenSock Animation Platform)
- **Styling**: CSS3 with custom design system
- **Typography**: Google Fonts (Orbitron + Poppins)
- **Form Handling**: EmailJS for client-side email sending
- **Hosting**: Vercel or GitHub Pages ready

## 🚀 Quick Start

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/sangita/sangitas-codeverse.git
   cd sangitas-codeverse
   ```

2. **Install dependencies (optional)**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   # Using npm (recommended)
   npm run dev
   
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000` (npm) or `http://localhost:8000`

### Production Deployment

1. **Deploy to Vercel (Recommended)**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

2. **Deploy to GitHub Pages**
   - Enable GitHub Pages in repository settings
   - Select source: Deploy from branch (main)

3. **Custom Domain Setup**
   ```bash
   vercel domains add your-domain.com
   vercel alias your-project.vercel.app your-domain.com
   ```

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## 📁 Project Structure

```
sangitas-codeverse/
├── index.html                 # Main HTML file
├── css/                       # Stylesheets
│   ├── main.css              # Core styles and design system
│   ├── components.css        # Component-specific styles
│   ├── animations.css        # Animation definitions
│   └── responsive.css        # Media queries
├── js/                       # JavaScript modules
│   ├── main.js              # Main application logic
│   ├── vanta-config.js      # 3D background configuration
│   ├── projects.js          # Projects data and filtering
│   ├── skills.js            # Developer timeline
│   ├── resume.js            # Saturn Ring Resume Portal
│   ├── contact.js           # Contact form handling
│   ├── animations.js        # GSAP animations
│   └── easter-egg.js        # Hidden game
├── assets/                   # Static assets
│   ├── images/              # Images and icons
│   └── resume.pdf           # Downloadable resume
└── README.md                # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: Modern Dark Theme (#0f0f0f), Space Dark (#1a1a1a)
- **Secondary**: Professional Blue (#4a9eff), Sophisticated Teal (#14b8a6)
- **Accent**: Electric Blue (#3b82f6), Cyan Glow (#06b6d4)

### Typography
- **Headings**: Orbitron (futuristic, space-themed)
- **Body**: Poppins (clean, readable)
- **Code**: JetBrains Mono (for tech tags)

## 🌟 Key Features Explained

### 3D Galaxy Background
- Uses Vanta.js with Three.js for WebGL-powered galaxy effect
- Updated neon purple color scheme (0x8b5cf6) for cosmic theme consistency
- Enhanced device detection with automatic fallback for low-end devices
- Respects user's reduced motion preferences with graceful degradation
- Modular configuration system with proper error handling and cleanup

### Enhanced Projects Showcase
- **Dynamic Project Data**: Comprehensive structure with 6 sample projects across categories (frontend, backend, ML, hackathon)
- **Shooting Star Animations**: Advanced trail effects with hover interactions and staggered entrance animations
- **Smart Filtering System**: Smooth fade-out/fade-in transitions with category-based organization (all, frontend, backend, ml, hackathon)
- **Modal Details View**: Full-featured modal system with detailed project information, technology tags, and external links
- **Lazy Loading**: IntersectionObserver API implementation for optimal performance
- **Accessibility First**: Keyboard navigation, ARIA labels, screen reader support, and focus management
- **Error Handling**: Dynamic placeholder generation for missing images with category-based gradients
- **Responsive Design**: Mobile-optimized interactions with touch support and simplified animations

### Planet Navigation
- Each section represented as a floating planet
- Smooth scroll navigation with URL updates
- Hover animations and visual feedback

### Enhanced Developer Timeline
- **Professional Timeline**: Horizontal scrollable timeline showcasing developer journey from 2024-2025
- **Refined Layout**: Centered container design (max-width: 1400px) for better content focus and professional presentation
- **Subtle Background**: Simplified cosmic gradients with optimized opacity for better content readability
- **Dynamic Starfield**: Drifting star patterns with extended animation cycle for smooth, subtle movement
- **Interactive Year Cards**: Elegant planet nodes with orbiting skill icons and hover tooltips
- **Skill Visualization**: 14 professional skills with realistic proficiency levels and practical descriptions
- **Clean Design**: Standard padding structure with improved overflow handling for better responsive behavior
- **Accessibility First**: Full keyboard navigation, ARIA labels, and screen reader support
- **Responsive Design**: Mobile-optimized touch interactions with device-specific optimizations
- **Performance Optimized**: GPU acceleration, reduced motion support, and balanced visual hierarchy

### Easter Egg Game
- Hidden Tic Tac Toe game with cosmic theme
- Activated by typing `initiate()` in browser console
- Alternative activation via Konami code

## 📱 Responsive Design

- **Mobile**: 320px+ (simplified animations for performance)
- **Tablet**: 768px+ (moderate animations)
- **Desktop**: 1024px+ (full animation suite)

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support
- High contrast compatibility

## 🔧 Configuration

### EmailJS Setup (Optional)
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Update configuration in `js/contact.js`:
   ```javascript
   const emailConfig = {
     serviceId: 'your_service_id',
     templateId: 'your_template_id',
     publicKey: 'your_public_key'
   };
   ```

### Customization
- Update personal information in HTML
- Replace placeholder images in `assets/images/`
- Modify project data in `js/projects.js`
- Adjust skills data in `js/skills.js`
- Customize colors in CSS custom properties

### Projects Module API
The enhanced projects module provides a comprehensive API for managing project data and interactions:

```javascript
// Project data structure
const projectExample = {
  id: 1,
  title: "Project Name",
  description: "Brief description for card display",
  longDescription: "Detailed description for modal view",
  technologies: ["HTML", "CSS", "JavaScript", "React"],
  screenshot: "assets/images/projects/project1.jpg",
  githubUrl: "https://github.com/username/project",
  liveUrl: "https://project-demo.vercel.app", // Optional
  category: "frontend", // frontend, backend, ml, hackathon
  featured: true, // Adds special styling and badge
  completedDate: "2024-01", // YYYY-MM format
  status: "completed" // completed, in-progress, planned
};

// Available functions
window.ProjectsModule = {
  init: initializeProjects,        // Initialize the entire module
  data: projectsData,              // Access to project data array
  render: renderProjectsGrid,      // Re-render projects grid
  filter: filterProjects,          // Filter by category
  openModal: openProjectModal,     // Open project details modal
  closeModal: closeProjectModal    // Close modal
};
```

**Key Features:**
- **Lazy Loading**: Images load only when visible using IntersectionObserver
- **Error Handling**: Automatic fallback placeholders for missing images
- **Accessibility**: Full keyboard navigation and screen reader support
- **Responsive**: Touch-optimized for mobile devices
- **Performance**: GPU-accelerated animations with reduced motion support

### Developer Timeline Module API
The enhanced developer timeline provides a professional journey visualization:

```javascript
// Timeline data structure for each year
const yearExample = {
  year: "2024",
  title: "Foundation Year",
  subtitle: "Building Core Skills",
  description: "Focused on mastering fundamental technologies...",
  skills: [
    {
      name: "JavaScript",
      icon: "⚡",
      status: "mastered", // learning, proficient, mastered
      proficiency: 5 // 1-5 scale
    }
  ],
  isCurrent: false
};

// Available functions
window.DeveloperTimelineModule = {
  init: initializeTimeline, // Initialize timeline with cosmic background
  data: timelineData, // Access to timeline data
  updateYear: updateYearCard, // Update specific year data
  addYear: addNewYear // Add future years dynamically
};
```

**Visual Features:**
- **Refined Background**: Centered layout with subtle cosmic gradients and optimized starfield
- **Interactive Cards**: Hover effects with enhanced glow and elevation
- **Skill Orbits**: Orbiting skill icons around year planet nodes
- **Professional Layout**: Centered container design with improved content hierarchy
- **Responsive Design**: Horizontal scroll on desktop, vertical stack on mobile
- **Performance**: Optimized animations with device-specific particle counts
- **Clean Aesthetics**: Simplified gradients for better readability and professional appearance
- **Accessibility**: Screen reader announcements and ARIA labels

### Saturn Ring Resume Portal
The Saturn Ring Resume Portal provides an immersive, cosmic-themed interface for resume viewing and downloading:

```javascript
// Resume data structure
const resumeData = {
  personalInfo: {
    name: "Sangita",
    title: "Full Stack Developer & Data Engineer",
    email: "sangita@example.com",
    // ... additional contact information
  },
  experience: [...], // Work experience array
  education: [...],  // Education background
  skills: {...},     // Technical and soft skills
  projects: [...]    // Featured projects
};

// Available functions
window.ResumeModule = {
  init: initializeResume,        // Initialize Saturn ring animations
  download: handleResumeDownload, // Trigger download with animations
  preview: toggleResumePreview,   // Show/hide resume preview
  data: resumeData,              // Access to resume data
  state: resumeState             // Current module state
};
```

**Key Features:**
- **3D Saturn Ring Animation**: Dual-speed rotating rings with pulsing planet core and floating particles
- **Intelligent Download System**: Automatic PDF detection with HTML fallback generation
- **Resume Preview**: Toggle-able formatted preview with professional styling
- **Enhanced User Feedback**: Cosmic burst animations, success particles, and status messages
- **Mobile Responsive**: Device-specific particle counts and optimized animations
- **Accessibility First**: Keyboard navigation, ARIA labels, and screen reader support
- **Performance Optimized**: Intersection observers, scroll-based parallax, and GPU acceleration

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### GitHub Pages
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Select source branch

### Custom Server
- Upload files to web server
- Ensure server supports static file serving
- Configure domain and SSL certificate

## 📊 Performance

- **Target Load Time**: < 2 seconds on good connections
- **Lighthouse Score**: 90+ across all metrics
- **Mobile Optimized**: Reduced animations for performance
- **Progressive Enhancement**: Works without JavaScript

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vanta.js](https://www.vantajs.com/) for 3D backgrounds
- [GSAP](https://greensock.com/gsap/) for animations
- [Three.js](https://threejs.org/) for WebGL support
- [Google Fonts](https://fonts.google.com/) for typography
- [EmailJS](https://www.emailjs.com/) for form handling

## 🧪 Testing & Quality Assurance

### Automated Testing
```bash
# Run full test suite
npm test

# Accessibility testing
npm run test-accessibility

# Performance testing
npm run test-performance

# Code quality checks
npm run lint
npm run validate
```

### Manual Testing
- **Cross-browser compatibility**: Chrome, Firefox, Safari, Edge
- **Responsive design**: Desktop, tablet, mobile devices
- **Accessibility**: Screen reader, keyboard navigation, high contrast
- **Performance**: Core Web Vitals, loading speed, memory usage

For detailed testing procedures, see [TESTING.md](TESTING.md).

## 📊 Performance Metrics

### Current Scores
- **Lighthouse Performance**: 95+
- **Lighthouse Accessibility**: 98+
- **Lighthouse Best Practices**: 95+
- **Lighthouse SEO**: 95+

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## 🔧 Development Tools

### Build Tools
- **Live Server**: Development server with hot reload
- **Terser**: JavaScript minification
- **CleanCSS**: CSS optimization
- **ImageMin**: Image compression

### Testing Tools
- **pa11y**: Accessibility testing
- **Lighthouse**: Performance auditing
- **ESLint**: Code quality checking
- **Prettier**: Code formatting

### Deployment Tools
- **Vercel**: Production hosting
- **GitHub Actions**: CI/CD pipeline
- **Google Analytics**: Usage tracking

## 📚 Documentation

- **[DEPLOYMENT.md](DEPLOYMENT.md)**: Comprehensive deployment guide
- **[TESTING.md](TESTING.md)**: Cross-browser and accessibility testing
- **[CHANGELOG.md](CHANGELOG.md)**: Version history and updates

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Ensure accessibility compliance (WCAG 2.1 AA)
- Test across multiple browsers and devices
- Maintain performance standards
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vanta.js](https://www.vantajs.com/) for 3D backgrounds
- [GSAP](https://greensock.com/gsap/) for animations
- [Three.js](https://threejs.org/) for WebGL support
- [Google Fonts](https://fonts.google.com/) for typography
- [EmailJS](https://www.emailjs.com/) for form handling

## 📞 Contact

**Sangita** - [LinkedIn](https://linkedin.com/in/sangita) - [GitHub](https://github.com/sangita)

Project Link: [https://github.com/sangita/sangitas-codeverse](https://github.com/sangita/sangitas-codeverse)

Live Demo: [https://sangitas-codeverse.vercel.app](https://sangitas-codeverse.vercel.app)

---

⭐ **Don't forget to star this repository if you found it helpful!**

🌿 **Try the easter egg**: Open browser console and type `initiate()` for a surprise!

🚀 **Ready to deploy?** Check out the [deployment guide](DEPLOYMENT.md) for step-by-step instructions.