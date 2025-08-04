# 🌌 Sangita's Codeverse - Cosmic Developer Portfolio

An immersive, interactive, and animated personal developer portfolio website that represents Sangita's personality, coding skills, and career aspirations through a galaxy-themed interface with GenZ vibes.

## ✨ Features

- **🌌 Galaxy Landing Page**: Immersive 3D background with floating planet navigation
- **👤 Interactive About Me**: Profile in glowing orb with animated bio content  
- **🚀 Projects Showcase**: Project cards with comet animations and filtering
- **⭐ Skills Constellation**: Interactive star map showing technical abilities
- **🪐 Saturn Ring Resume Portal**: Animated download interface
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

1. **Clone the repository**
   ```bash
   git clone https://github.com/sangita/sangitas-codeverse.git
   cd sangitas-codeverse
   ```

2. **Open with a local server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   Navigate to `http://localhost:8000`

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
│   ├── skills.js            # Skills constellation
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
- **Primary**: Deep Space Black (#0a0a0a), Space Dark (#1a1a2e)
- **Secondary**: Neon Purple (#8b5cf6), Cosmic Pink (#ec4899)
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

### Planet Navigation
- Each section represented as a floating planet
- Smooth scroll navigation with URL updates
- Hover animations and visual feedback

### Skills Constellation
- Interactive SVG constellation map
- Skills organized by category with connecting lines
- Hover effects reveal skill names and proficiency

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

## 📞 Contact

**Sangita** - [LinkedIn](https://linkedin.com/in/sangita) - [GitHub](https://github.com/sangita)

Project Link: [https://github.com/sangita/sangitas-codeverse](https://github.com/sangita/sangitas-codeverse)

---

⭐ **Don't forget to star this repository if you found it helpful!**

🌿 **Try the easter egg**: Open browser console and type `initiate()` for a surprise!