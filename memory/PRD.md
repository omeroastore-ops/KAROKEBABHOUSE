# KARO KEBAB HOUSE - Restaurant Website PRD

## Project Overview
**Project Name:** KARO KEBAB HOUSE Website  
**Type:** Modern Street-Food Restaurant Website  
**Date Created:** March 14, 2026  
**Status:** Frontend MVP Complete

## Original Requirements

### Business Information
- **Restaurant Name:** KARO KEBAB HOUSE
- **Address:** Marktstraße 103, 20357 Hamburg
- **Phone:** 040 30387414
- **Type:** Street-Food Restaurant with Urban Style

### Opening Hours
- Monday-Thursday: 10:00 – 22:00
- Friday-Saturday: 10:00 – 23:00
- Sunday: 10:00 – 22:00

### Design Requirements
- **Style:** Modern Urban Street-Food
- **Color Scheme:**
  - Background: Black/Anthracite (#0a0a0a)
  - Primary Colors: Red/Orange (Fire Effect)
  - Text: White
  - Accent: Neon-Orange (#ff6b00), Neon-Yellow (#ffd000)
- **Typography:**
  - Headlines: Bebas Neue (Bold Urban Font)
  - Body: Inter (Sans-serif)
- **Features:**
  - Large, bold headings
  - High-quality food images
  - Scroll animations
  - Mobile-optimized
  - Minimalist but very modern

## User Personas

### Primary User: Hungry Customer
- **Goal:** Find menu items, check prices, get contact info
- **Behavior:** Quick browsing, mobile usage, decision-making
- **Needs:** Clear menu, appetizing images, easy contact

### Secondary User: First-time Visitor
- **Goal:** Learn about restaurant, find location
- **Behavior:** Research opening hours, check reviews/quality
- **Needs:** About section, location map, professional appearance

## Core Requirements (Static)

### Functional Requirements
1. **Navigation:** Smooth scrolling to sections
2. **Menu Display:** All 9 categories with images and prices
3. **Location:** Embedded Google Maps
4. **Contact:** Click-to-call functionality
5. **Responsive:** Mobile, tablet, desktop optimization

### Non-Functional Requirements
1. **Performance:** Fast loading, optimized images
2. **Accessibility:** Readable text, proper contrast
3. **SEO:** Semantic HTML structure
4. **Cross-browser:** Works on all modern browsers

## What's Been Implemented ✅

### Date: March 14, 2026

#### Frontend Components
1. **Header Component** (`/app/frontend/src/components/Header.jsx`)
   - Sticky navigation with logo
   - Desktop and mobile menu
   - Click-to-call button
   - Smooth scroll navigation

2. **Hero Section** (`/app/frontend/src/components/Hero.jsx`)
   - Full-screen hero with background image
   - Bold typography with fire glow effect
   - CTA button "Speisekarte ansehen"
   - Location badge
   - Animated scroll indicator

3. **About Section** (`/app/frontend/src/components/About.jsx`)
   - Welcome text with restaurant description
   - Feature cards (Frisch vom Grill, Hochwertig, Mit Liebe)
   - High-quality food image
   - Decorative gradient elements

4. **Menu Section** (`/app/frontend/src/components/Menu.jsx`)
   - Category filter buttons
   - 9 menu categories with images:
     - Döner Gerichte
     - Bowls & Salate
     - Lahmacun & Pide
     - Pfannengerichte & Nudeln
     - Vegetarisch / Vegan
     - Fingerfood
     - Pizza
     - Dessert
   - Menu items with prices
   - Hover effects on cards

5. **Opening Hours Section** (`/app/frontend/src/components/OpeningHours.jsx`)
   - Complete weekly schedule
   - Special highlight for Friday-Saturday
   - Clock icon
   - Clean table layout

6. **Location Section** (`/app/frontend/src/components/Location.jsx`)
   - Google Maps embed
   - Address card
   - Phone card with click-to-call
   - "Route in Google Maps öffnen" button

7. **Footer Component** (`/app/frontend/src/components/Footer.jsx`)
   - Brand logo
   - Contact information
   - Opening hours summary
   - Social media links (Facebook, Instagram)
   - Copyright notice
   - Back to top button

#### Design System
8. **Styling** (`/app/frontend/src/index.css`, `/app/frontend/src/App.css`)
   - Custom CSS variables
   - Urban street-food theme
   - Fire glow text effects
   - Gradient buttons
   - Hover animations
   - Custom scrollbar
   - Smooth transitions

#### Data Layer
9. **Mock Data** (`/app/frontend/src/data/mockData.js`)
   - All menu items organized by category
   - Item names, descriptions, prices
   - Category images from Unsplash

#### Images
10. **High-Quality Food Images** (via vision_expert_agent)
    - Hero: Döner on grill
    - Döner category
    - Bowls & Salate
    - Lahmacun & Pide
    - Pfannengerichte & Nudeln
    - Vegetarisch (Falafel)
    - Fingerfood (Fries)
    - Pizza
    - Dessert (Baklava)

## Architecture

### Frontend Stack
- **Framework:** React 19
- **Styling:** Tailwind CSS + Custom CSS
- **Fonts:** Bebas Neue (headlines), Inter (body)
- **Icons:** Lucide React
- **Routing:** React Router DOM (single page with scroll navigation)
- **Build Tool:** Create React App with CRACO

### Current Status
- ✅ Frontend fully functional
- ✅ All sections implemented
- ✅ Mobile responsive
- ✅ High-quality images integrated
- ✅ Google Maps embedded
- ⏸️ Backend not implemented (not required for current scope)

## Prioritized Backlog

### P0 Features (Critical - Not Needed for Current MVP)
None - MVP is complete for stated requirements

### P1 Features (High Priority - Future Enhancements)
1. **Image Optimization**
   - Convert images to WebP format
   - Add lazy loading
   - Implement responsive images

2. **SEO Optimization**
   - Add meta tags
   - Implement structured data (Schema.org)
   - Add Open Graph tags
   - Create sitemap

3. **Performance**
   - Add loading skeleton screens
   - Optimize bundle size
   - Enable compression

### P2 Features (Nice to Have)
1. **Interactive Elements**
   - Online ordering system
   - Table reservation system
   - Customer reviews section
   - Photo gallery

2. **Content Management**
   - Admin panel for menu updates
   - Blog section for news
   - Special offers section

3. **Analytics**
   - Google Analytics integration
   - Conversion tracking
   - User behavior analysis

## Next Action Items

1. **User Testing:** Get feedback on design and usability
2. **Content Review:** Verify all menu items and prices are correct
3. **SEO Implementation:** Add meta tags and structured data
4. **Performance Audit:** Run Lighthouse audit and optimize
5. **Launch Preparation:** Deploy to production environment

## Technical Notes

### File Structure
```
/app/frontend/src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Menu.jsx
│   ├── OpeningHours.jsx
│   ├── Location.jsx
│   └── Footer.jsx
├── data/
│   └── mockData.js
├── App.js
├── App.css
└── index.css
```

### Key Dependencies
- react: ^19.0.0
- react-dom: ^19.0.0
- react-router-dom: ^7.5.1
- lucide-react: ^0.507.0
- tailwindcss: ^3.4.17

### Environment Variables
- `REACT_APP_BACKEND_URL`: https://karo-hamburg-eats.preview.emergentagent.com

### Deployment
- Frontend runs on port 3000 (internal)
- Accessible via: https://karo-hamburg-eats.preview.emergentagent.com
- Hot reload enabled for development

## Success Metrics

### Current Status
- ✅ All required sections implemented
- ✅ Mobile-responsive design
- ✅ Modern urban street-food aesthetic achieved
- ✅ High-quality food photography integrated
- ✅ Smooth navigation and animations
- ✅ Click-to-call functionality working
- ✅ Google Maps embedded

### Future Goals
- Improve page load time to < 2 seconds
- Achieve 90+ Lighthouse score
- Drive phone call conversions
- Increase foot traffic to restaurant

## Notes
- No backend required for current MVP (static website)
- All data stored in mockData.js
- Google Maps embedded using iframe
- Social media links placeholder (update with real URLs when available)
