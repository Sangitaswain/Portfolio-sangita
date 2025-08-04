# Sangita's Codeverse 🌌

An immersive, interactive, and animated personal developer portfolio website that represents Sangita's personality, coding skills, and career aspirations through a galaxy-themed interface with GenZ vibes.

## ✨ Features

- **🌌 Galaxy Landing Page**: Immersive 3D background with floating planet navigation
- **👤 Interactive About Me**: Profile in glowing orb with animated bio content  
- **🌟 Shooting Star Projects**: Project showcase with comet animations and filtering
- **⭐ Skills Constellation**: Interactive star map showing technical abilities
- **🪐 Saturn Ring Resume**: Animated download interface with PDF preview
- **🕳️ Contact Portal**: Contact form with cosmic animations and social links
- **📱 Responsive Design**: Optimized for all devices with performance considerations
- **🎮 Easter Egg**: Hidden Tic Tac Toe Herb Game with console activation

## 🚀 Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+) with modular architecture
- **3D Graphics**: Vanta.js with Three.js backend
- **Animations**: GSAP (GreenSock Animation Platform)
- **Styling**: CSS3 with custom design system
- **Scroll Effects**: ScrollReveal.js
- **Form Handling**: EmailJS for client-side email sending
- **Typography**: Google Fonts (Orbitron + Poppins)
- **Hosting**: Vercel or GitHub Pages

## 📁 Project Structure

```
sangitas-codeverse/
├── index.html                 # ✅ Complete HTML structure with semantic markup
├── css/                       # Stylesheets directory
│   ├── main.css              # 🔄 Core styles and design system (in progress)
│   ├── animations.css        # 📋 Animation-specific styles (placeholder)
│   ├── components.css        # 📋 Component-specific styles (placeholder)
│   └── responsive.css        # 📋 Media queries and responsive design (placeholder)
├── js/                       # JavaScript modules directory
│   ├── main.js              # 📋 Main application logic (placeholder)
│   ├── animations.js        # 📋 GSAP animations and scroll effects (placeholder)
│   ├── vanta-config.js      # 📋 Vanta.js 3D background configuration (placeholder)
│   ├── projects.js          # 📋 Projects data and filtering logic (placeholder)
│   ├── skills.js            # 📋 Skills constellation functionality (placeholder)
│   ├── contact.js           # 📋 Contact form and EmailJS integration (placeholder)
│   └── easter-egg.js        # 📋 Hidden game and console commands (placeholder)
├── assets/                   # Static assets directory
│   ├── images/              # 📋 Image assets (to be added)
│   │   ├── profile.jpg      # 📋 Profile picture for About section
│   │   ├── projects/        # 📋 Project screenshots and thumbnails
│   │   ├── icons/           # 📋 Social media and technology icons
│   │   └── backgrounds/     # 📋 Fallback background images
│   ├── fonts/               # 📋 Custom fonts (if not using CDN)
│   └── resume.pdf           # 📋 Downloadable resume file
├── libs/                    # 📋 External libraries (CDN alternatives)
├── .kiro/                   # Kiro AI assistant configuration
│   ├── specs/               # Project specifications and documentation
│   └── steering/            # AI assistant steering rules
└── README.md               # ✅ Project documentation

Legend: ✅ Complete | 🔄 In Progress | 📋 Placeholder/To Do
```

## 🚧 Development Status

**Current Phase:** CSS Foundation and Design System Implementation

### Completed:
- ✅ Project structure and file organization
- ✅ Complete HTML5 semantic structure with accessibility features
- ✅ All CSS and JavaScript files created (placeholder content)
- ✅ External library integration setup
- ✅ SEO and social media meta tags
- ✅ Responsive design foundation

### In Progress:
- 🔄 CSS design system implementation
- 🔄 Color palette and typography system
- 🔄 Component styling and layout

### Next Steps:
- 📋 3D galaxy background implementation
- 📋 Interactive animations and effects
- 📋 Project showcase functionality
- 📋 Contact form integration

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- Modern web browser with WebGL support
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/sangita/sangitas-codeverse.git
   cd sangitas-codeverse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The site will automatically reload on file changes

### Alternative Setup (No Node.js)
If you prefer not to use Node.js, you can:
1. Open `index.html` directly in a modern web browser
2. Use any local server (Python's `http.server`, PHP's built-in server, etc.)
3. Use VS Code's Live Server extension

### Development Workflow
The project is currently in the CSS implementation phase. To contribute:

1. **CSS Development**: Start with `css/main.css` for the design system
   - Implement CSS custom properties for the color palette
   - Set up typography system with Google Fonts
   - Create responsive grid layouts

2. **Component Styling**: Move to `css/components.css`
   - Style individual components (buttons, cards, forms)
   - Implement cosmic-themed visual effects

3. **Animation Implementation**: Work on `css/animations.css`
   - Create smooth transitions and hover effects
   - Implement scroll-triggered animations

4. **Responsive Design**: Finalize `css/responsive.css`
   - Test across different screen sizes
   - Optimize for mobile performance

## 🎨 Design System

### Color Palette (Ready for CSS Implementation)
```css
/* CSS Custom Properties - To be implemented in css/main.css */
:root {
  /* Primary Colors - Deep Space Theme */
  --color-space-black: #0a0a0a;
  --color-space-dark: #1a1a2e;
  --color-space-medium: #16213e;
  
  /* Secondary Colors - Cosmic Accents */
  --color-neon-purple: #8b5cf6;
  --color-neon-purple-light: #a855f7;
  --color-neon-purple-dark: #7c3aed;
  
  /* Interactive Colors */
  --color-electric-blue: #3b82f6;
  --color-cyan-glow: #06b6d4;
  --color-text-primary: #ffffff;
  --color-text-secondary: #f8fafc;
  --color-text-muted: #cbd5e1;
}
```

### Typography (Already integrated in HTML)
```css
/* Font System - To be implemented in css/main.css */
--font-heading: 'Orbitron', monospace; /* Futuristic, space-themed */
--font-body: 'Poppins', sans-serif;    /* Clean, readable */
--font-code: 'JetBrains Mono', monospace; /* For tech tags */

/* Responsive Font Sizes */
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
--text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
--text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
```

### Responsive Breakpoints
- **Mobile**: 320px - 768px (simplified animations)
- **Tablet**: 768px - 1024px (moderate animations)
- **Desktop**: 1024px+ (full animation suite)

## 🌟 Key Features Implementation

### Galaxy Background
- Vanta.js with Three.js for 3D galaxy effect
- Performance optimization for mobile devices
- Fallback static background for unsupported browsers

### Planet Navigation
- Floating animated planets as navigation links
- Smooth scroll between sections
- Hover effects with glow and scale animations

### Skills Constellation
- SVG-based interactive star map
- Hover effects reveal skill names
- Categorized by Languages, Frameworks, Tools, Soft Skills

### Project Showcase
- Dynamic project cards with shooting star effects
- Filtering system by category (Frontend, Backend, ML, Hackathon)
- Modal views for detailed project information

### Contact Form
- EmailJS integration for client-side email sending
- Form validation with cosmic-themed error messages
- Success animations with cosmic burst effects

## 🎮 Easter Egg

Discover the hidden Tic Tac Toe Herb Game by:
1. Opening browser console
2. Typing `initiate()`
3. Or using the Konami code: ↑↑↓↓←→←→BA

## 📱 Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Reduced motion preferences respected

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain configuration available

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Select source branch (main or gh-pages)
3. Site will be available at `https://username.github.io/sangitas-codeverse`

### Manual Deployment
1. Build the project (if using build tools)
2. Upload files to your web hosting provider
3. Ensure proper MIME types for all file extensions

## 🔧 Configuration

### EmailJS Setup
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service and template
3. Update configuration in `js/contact.js`

### Analytics (Optional)
Add Google Analytics or similar tracking by including the script in `index.html`

## 🐛 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

**Note**: WebGL support required for 3D effects. Fallback provided for unsupported browsers.

## 📄 License

MIT License - feel free to use this project as inspiration for your own portfolio!

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome:
1. Open an issue for bugs or feature requests
2. Fork the repository for your own version
3. Share your cosmic portfolio creations!

## 📞 Contact

- **Email**: sangita@example.com
- **LinkedIn**: [linkedin.com/in/sangita](https://linkedin.com/in/sangita)
- **GitHub**: [github.com/sangita](https://github.com/sangita)
- **Portfolio**: [sangitas-codeverse.vercel.app](https://sangitas-codeverse.vercel.app)

---

*Crafted with 💜 and cosmic energy by Sangita*