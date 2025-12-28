# TOB Solutions LLC Website

Professional consulting website for TOB Solutions LLC, specializing in strategic technology consulting and personal culinary services. We help non-technical founders turn their app and website ideas into reality.

## About TOB Solutions LLC

We provide expert consulting and implementation services specializing in:
- **App Development** - Full-stack web and mobile applications from concept to launch
- **Website Design & Development** - Custom, responsive websites and e-commerce solutions
- **AI Integration** - Artificial intelligence and machine learning implementation
- **Systems Architecture** - Scalable, secure cloud-based system design
- **Operations Excellence** - Process optimization and DevOps implementation
- **Strategic Planning** - Technology roadmaps aligned with business objectives
- **Culinary Services** - Private chef services and culinary consultation

## Brand Colors

- **Brand Dark (Blue)**: #003366
- **Brand Gold**: #FFC900
- **Brand Charcoal**: #36454F
- **White**: #FFFFFF
- **Black**: #000000

## Project Structure

```
.
├── index.html           # Main homepage with service highlights
├── consulting.html      # Detailed consulting services page
├── culinary.html        # Culinary services page
├── about.html          # About Trenton and expertise
├── contact.html        # Contact form page
└── README.md           # This file
```

## Features

✨ **Multi-Page Design** - Dedicated pages for consulting, culinary, about, and contact
🎨 **Varsity Aesthetic** - Bold, professional design with uppercase typography
🌙 **Dark Mode Support** - System preference detection with manual toggle and localStorage persistence
📱 **Mobile Optimized** - Fully responsive design for all devices
⚡ **Fast Performance** - Static HTML with Tailwind CSS and Alpine.js
🎯 **Accessibility** - Semantic HTML and keyboard navigation support

## Getting Started

1. Clone the repository
2. Open any `.html` file in a web browser (no build process required)
3. The site is live at `https://tob-solutions-llc.github.io`

## Technology Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (CDN)
- **Alpine.js** - Lightweight JavaScript framework for interactivity
- **Basin** - Third-party form submission service for contact forms

## File Descriptions

### index.html
Main homepage containing:
- Navigation with dark mode toggle
- Hero section with call-to-action
- "How I Can Help" consulting highlights (4 key services)
- "Ready to Transform Your Business" section with links to detailed services
- Culinary services teaser
- Footer with contact info and quick links

### consulting.html
Detailed consulting services page featuring:
- Overview of all 6 consulting services
- App Development and Website Design & Development (for non-technical founders)
- AI Integration, Systems Architecture, Operations Excellence, Strategic Planning
- Call-to-action for consultation scheduling

### culinary.html
Culinary services page with:
- Private cooking classes
- Wine pairing consultation
- Culinary competition coaching
- Custom event catering

### about.html
About page with:
- Bio and professional background
- Expertise highlights
- Experience overview

### contact.html
Contact form page with:
- Basin form submission integration
- Full-width form with amber background in dark mode
- Contact information

## Customization

### Update Contact Information
Contact details are in the footer of all pages:
- Email: `TOBSolutionsLLC@gmail.com`
- Phone: `(816) 332-7763`

### Modify Services
Update service descriptions in:
- `index.html` - Home page highlights section
- `consulting.html` - Detailed services grid

### Change Brand Colors
Tailwind colors are configured in each HTML file's `<script>` tag:
```javascript
'brand-dark': '#003366',
'brand-gold': '#FFC900',
'brand-charcoal': '#36454F',
```

### Dark Mode Customization
Dark mode styles are in the CSS section of each page with:
- `@media (prefers-color-scheme: dark)` for system preference
- `body.manual-dark` and `body.manual-light` for manual overrides
- localStorage persistence with key `colorMode`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 TOB Solutions LLC. All rights reserved.

## Contact

For inquiries about consulting services or culinary offerings:
- **Email**: TOBSolutionsLLC@gmail.com
- **Phone**: (816) 332-7763
- **Website**: https://tob-solutions-llc.github.io
