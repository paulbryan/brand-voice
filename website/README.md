# BrandVoice Website

A beautiful, professional landing page for the BrandVoice AgentApp - showcasing AI-powered brand voice consistency.

## 🎯 What's Included

This website package includes:

- **index.html** - Complete landing page with all sections
- **styles.css** - Modern, responsive styling
- **script.js** - Interactive features and animations
- **README.md** - This file

## 📁 File Structure

```
brandvoice_website/
├── index.html       # Main landing page
├── styles.css       # Styles and responsive design
├── script.js        # Interactive features
└── README.md        # Documentation
```

## ✨ Features

### Sections Included

1. **Navigation** - Sticky navbar with smooth scrolling
2. **Hero Section** - Eye-catching headline with CTAs and social proof
3. **Problem Statement** - Three key pain points solved
4. **Features** - Two-phase workflow (Mirror & Match) with detailed explanations
5. **How It Works** - Step-by-step process visualization
6. **Use Cases** - Target audience segments
7. **Interactive App Section** - Launch button for the AgentApp
8. **Demo Video** - Placeholder for video content
9. **Testimonials** - Social proof from users
10. **CTA Section** - Final conversion opportunity
11. **Footer** - Links and branding

### Design Highlights

- 🎨 **Modern Gradient Design** - Purple-violet gradient matching your brand
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Smooth Animations** - Scroll-based animations for engagement
- 🎯 **Conversion Optimized** - Multiple CTAs strategically placed
- 🔥 **Fast Loading** - Pure HTML/CSS/JS, no frameworks needed

## 🚀 How to Deploy

### Option 1: Deploy to CREAO Static Hosting (Recommended)

The website is already in the correct format for CREAO's static hosting. To deploy:

1. The files are located in `/tmp/brandvoice_website/`
2. Use CREAO's static hosting tool to upload the directory
3. Get your permanent URL
4. Share with the world!

### Option 2: Deploy to Any Web Host

This is a standard static website that works on any hosting platform:

**Netlify:**
1. Drag and drop the `brandvoice_website` folder to Netlify
2. Get instant deployment with free HTTPS

**Vercel:**
1. Upload via Vercel CLI or drag-and-drop
2. Deploy in seconds

**GitHub Pages:**
1. Create a new repo
2. Upload files to the repo
3. Enable GitHub Pages in settings

**Traditional Hosting (cPanel, etc.):**
1. Upload files via FTP to your web root
2. Access via your domain

## 🎨 Customization Guide

### Colors

The website uses CSS variables for easy customization. Edit in `styles.css`:

```css
:root {
    --primary-purple: #667eea;  /* Main brand color */
    --primary-violet: #764ba2;  /* Secondary brand color */
    --dark-gray: #2d3748;       /* Text color */
}
```

### Content

All content is in `index.html`. Key areas to customize:

- **Hero Section** (line ~30): Update headline and subtitle
- **Social Proof** (line ~50): Update numbers (creators, transformations, accuracy)
- **Features** (line ~100): Modify feature descriptions
- **Testimonials** (line ~280): Add real testimonials when available
- **Footer** (line ~350): Update contact information

### Images

Replace placeholder images with real screenshots:

```html
<!-- Line ~145 and ~175 in index.html -->
<img src="path/to/your/screenshot.png" alt="Description">
```

Recommended:
- Voice Analysis Dashboard screenshot (800x500px)
- Transformation Comparison screenshot (800x500px)

## 🔗 Integration with AgentApp

### Current Setup

The website includes a launch button that displays instructions for running the AgentApp. The current implementation:

1. Shows an overlay with "Launch App" button
2. When clicked, displays the AgentApp ID and instructions
3. Provides guidance on how to run it in CREAO Platform

### To Add Direct Integration

If you want to embed the AgentApp directly in the iframe:

1. Get your CREAO AgentApp embed URL
2. Update `script.js` line ~15:

```javascript
// Replace this line in the launchAgentApp() function
iframe.src = 'YOUR_CREAO_AGENTAPP_EMBED_URL';
```

## 📊 Analytics (Optional)

To track visitors, add Google Analytics or similar:

```html
<!-- Add before closing </head> tag in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 🎬 Demo Video

To add a real demo video:

1. Upload your video to YouTube or Vimeo
2. Get the embed code
3. Replace the placeholder in `index.html` (line ~260)

```html
<!-- Replace .demo-placeholder div with: -->
<iframe
    width="100%"
    height="500"
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    frameborder="0"
    allowfullscreen>
</iframe>
```

## 📱 Mobile Optimization

The website is fully responsive with breakpoints at:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

Test on multiple devices to ensure perfect rendering.

## ⚡ Performance Tips

1. **Optimize Images**: Compress screenshots before uploading
2. **Enable Caching**: Configure your hosting for browser caching
3. **Use CDN**: Consider Cloudflare for faster global delivery
4. **Minify**: For production, minify CSS and JS (optional)

## 🐛 Troubleshooting

### Smooth Scrolling Not Working
- Ensure JavaScript is enabled
- Check browser console for errors

### Animations Not Appearing
- Clear browser cache
- Make sure JavaScript file is loading

### Responsive Issues
- Test in browser DevTools responsive mode
- Check for CSS conflicts

## 📧 Support

For questions about:
- **The Website**: Check this README or browser console for errors
- **The AgentApp**: Use AgentApp ID `TMXhceRjWM` in CREAO Platform
- **CREAO Platform**: Contact CREAO support

## 🎉 Launch Checklist

Before going live:

- [ ] Replace placeholder images with real screenshots
- [ ] Update social proof numbers with real data (or remove section)
- [ ] Add real testimonials (or remove section)
- [ ] Update contact email in CTA section
- [ ] Test all links and buttons
- [ ] Test on mobile, tablet, and desktop
- [ ] Add analytics tracking (optional)
- [ ] Configure custom domain (if applicable)
- [ ] Test AgentApp launch button
- [ ] Share on social media!

## 📝 License

This website template is created for the BrandVoice project. Feel free to modify and customize as needed.

---

**Built with ❤️ for LovHack Mini**

AgentApp ID: `TMXhceRjWM`
Platform: CREAO AgentApp Framework
