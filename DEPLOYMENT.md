# Deployment Guide - Sangita's Codeverse

## 🚀 Quick Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

3. **Custom Domain (Optional)**
   ```bash
   vercel domains add sangita.dev
   vercel alias sangitas-codeverse.vercel.app sangita.dev
   ```

### GitHub Pages

1. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select source: Deploy from a branch
   - Choose branch: main
   - Folder: / (root)

2. **Custom Domain Setup**
   - Add CNAME file with your domain
   - Configure DNS records

## 📋 Pre-Deployment Checklist

### ✅ Code Quality
- [ ] All JavaScript modules load without errors
- [ ] CSS styles render correctly across browsers
- [ ] HTML validates without errors
- [ ] No console errors or warnings
- [ ] All external links work correctly

### ✅ Performance
- [ ] Images are optimized (WebP with fallbacks)
- [ ] CSS and JavaScript are minified
- [ ] Critical CSS is inlined
- [ ] Lazy loading is implemented
- [ ] Core Web Vitals meet targets (LCP < 2.5s, FID < 100ms, CLS < 0.1)

### ✅ Accessibility
- [ ] WCAG 2.1 AA compliance verified
- [ ] Keyboard navigation works throughout
- [ ] Screen reader compatibility tested
- [ ] Color contrast meets standards
- [ ] Alt text provided for all images

### ✅ SEO
- [ ] Meta tags are complete and accurate
- [ ] Sitemap.xml is generated and valid
- [ ] Robots.txt is configured
- [ ] Open Graph tags are set
- [ ] Twitter Card tags are set

### ✅ Security
- [ ] HTTPS is enforced
- [ ] Security headers are configured
- [ ] No sensitive data in client-side code
- [ ] External links use rel="noopener noreferrer"

## 🔧 Build Process

### Development Build
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test
```

### Production Build
```bash
# Optimize assets
npm run build

# Validate HTML
npm run validate

# Run accessibility tests
npm run test-accessibility

# Run performance tests
npm run test-performance

# Deploy
npm run deploy
```

## 📊 Analytics Setup

### Google Analytics 4

1. **Create GA4 Property**
   - Go to Google Analytics
   - Create new property
   - Copy Measurement ID

2. **Update Configuration**
   ```javascript
   // In js/deployment.js
   const deploymentConfig = {
     analytics: {
       enabled: true,
       googleAnalyticsId: 'G-XXXXXXXXXX', // Your actual GA4 ID
       trackingEnabled: true
     }
   };
   ```

3. **Privacy Compliance**
   - Analytics are disabled by default
   - No personal data is collected
   - IP anonymization is enabled
   - Google Signals are disabled

## 🔍 Monitoring Setup

### Performance Monitoring

The deployment includes automatic monitoring for:
- Core Web Vitals (LCP, FID, CLS)
- Resource loading times
- Memory usage
- User interactions
- Error tracking

### Error Tracking

Automatic error tracking includes:
- JavaScript errors
- Unhandled promise rejections
- Resource loading failures
- Network errors

## 🌐 Domain Configuration

### Custom Domain Setup

1. **DNS Configuration**
   ```
   Type: CNAME
   Name: www
   Value: sangitas-codeverse.vercel.app
   
   Type: A
   Name: @
   Value: 76.76.19.61 (Vercel IP)
   ```

2. **SSL Certificate**
   - Automatic SSL via Vercel
   - Let's Encrypt certificates
   - Auto-renewal enabled

### Environment Variables

For production deployment, set these environment variables:

```bash
# Vercel Environment Variables
VERCEL_ENV=production
NODE_ENV=production
GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🧪 Testing in Production

### Automated Testing

```bash
# Run full test suite
npm run audit

# Test accessibility
pa11y https://sangitas-codeverse.vercel.app

# Test performance
lighthouse https://sangitas-codeverse.vercel.app
```

### Manual Testing Checklist

#### ✅ Functionality Testing
- [ ] Galaxy background loads and animates
- [ ] Planet navigation works smoothly
- [ ] Project cards display and filter correctly
- [ ] Skills constellation is interactive
- [ ] Resume download functions
- [ ] Contact form submits successfully
- [ ] Easter egg activates (console: `initiate()`)

#### ✅ Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

#### ✅ Device Testing
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

#### ✅ Network Testing
- [ ] Fast 3G
- [ ] Slow 3G
- [ ] Offline (graceful degradation)

## 📈 Performance Targets

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5 seconds
- **FID (First Input Delay)**: < 100 milliseconds
- **CLS (Cumulative Layout Shift)**: < 0.1

### Lighthouse Scores
- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 95
- **SEO**: > 95

### Resource Optimization
- **Total Bundle Size**: < 1MB
- **Critical CSS**: < 50KB
- **JavaScript**: < 500KB
- **Images**: WebP format with JPEG fallbacks

## 🔒 Security Configuration

### Security Headers

The following security headers are configured in `vercel.json`:

```json
{
  "headers": [
    {
      "key": "X-Content-Type-Options",
      "value": "nosniff"
    },
    {
      "key": "X-Frame-Options",
      "value": "DENY"
    },
    {
      "key": "X-XSS-Protection",
      "value": "1; mode=block"
    },
    {
      "key": "Referrer-Policy",
      "value": "strict-origin-when-cross-origin"
    },
    {
      "key": "Permissions-Policy",
      "value": "camera=(), microphone=(), geolocation=()"
    }
  ]
}
```

### Content Security Policy

Consider adding CSP headers for additional security:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;
```

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for syntax errors
npm run lint

# Validate HTML
npm run validate
```

#### Performance Issues
```bash
# Analyze bundle size
npm run analyze

# Optimize images
npm run optimize-images

# Check for memory leaks
# Open DevTools > Memory tab
```

#### Accessibility Issues
```bash
# Run accessibility audit
npm run test-accessibility

# Test with screen reader
# Use NVDA, JAWS, or VoiceOver
```

### Debug Mode

Enable debug mode for troubleshooting:

```javascript
// In browser console
localStorage.setItem('debug', 'true');
location.reload();
```

## 📞 Support

### Resources
- **Documentation**: [README.md](README.md)
- **Testing Guide**: [TESTING.md](TESTING.md)
- **Changelog**: [CHANGELOG.md](CHANGELOG.md)

### Getting Help
- Check browser console for errors
- Review network tab for failed requests
- Test in incognito mode to rule out extensions
- Verify all external dependencies are loading

## 🎯 Post-Deployment

### Monitoring
- Set up uptime monitoring
- Configure performance alerts
- Monitor error rates
- Track user engagement

### Maintenance
- Regular dependency updates
- Security patch reviews
- Performance optimization
- Content updates

### Analytics Review
- Weekly performance reports
- Monthly accessibility audits
- Quarterly security reviews
- Annual technology updates

---

## 🚀 Deployment Commands Quick Reference

```bash
# Development
npm run dev                    # Start dev server
npm test                      # Run tests
npm run lint                  # Check code quality

# Build
npm run build                 # Build for production
npm run optimize              # Optimize assets
npm run validate              # Validate HTML

# Deploy
npm run deploy                # Deploy to production
npm run deploy-preview        # Deploy preview

# Monitor
npm run audit                 # Full audit
npm run test-accessibility    # A11y tests
npm run test-performance      # Performance tests
```