# NoPain Dental Lounge Website

A premium, conversion-focused dental website for NoPain Dental Lounge in Whitefield, Bengaluru. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern Animations**: Smooth page transitions and micro-interactions using Framer Motion
- **SEO Optimized**: Meta tags, schema markup, and semantic HTML
- **Accessible**: ARIA labels, keyboard navigation, sufficient color contrast
- **Performance**: Lazy loading, optimized images, minified CSS/JS
- **Brand Colors**: Gradient from #7E287D → #A34D9D (premium lavender/purple)

## Pages

1. **Homepage** - Hero, About Preview, USP Section, Featured Services, Testimonials, Gallery Preview, CTA
2. **About** - Full bio of Dr. Nikita Singh, clinic story, mission, values, ambience photos
3. **Team** - Founder profile, specialist team cards, support team, team values
4. **Services** - Featured services overview with individual service information
5. **Gallery** - Before/after smile transformations slider
6. **Patient Experience** - Pain-free philosophy, comfort features, patient journey
7. **Contact** - Contact form, clinic information, map, appointment booking

## Components

### Reusable Components
- `Button` - Multiple variants (primary, secondary, outline) with hover animations
- `Card` - Animated card with hover effects
- `Section` - Section wrapper with background options
- `Header` - Sticky navigation with smooth scroll
- `Footer` - Multi-column footer with social links and WhatsApp button
- `Preloader` - Animated loading screen
- `SEO` - Dynamic meta tags and schema markup

### Page Components
- `Hero` - Full-screen hero with gradient background and stats
- `AboutPreview` - Doctor introduction section
- `USPSection` - Four key value propositions
- `FeaturedServices` - Service cards grid
- `Testimonials` - Carousel with patient reviews
- `GalleryPreview` - Before/after slider
- `CTASection` - Conversion-focused call-to-action

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Typography

- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)
- **Line Height**: 150% for body, 120% for headings

## Color System

- **Primary Gradient**: #7E287D → #A34D9D
- **Accent Colors**: Used throughout for icons and highlights
- **Neutral Tones**: Grays for text and backgrounds
- **White Space**: Ample spacing for premium feel

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Option 1: Netlify
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Option 2: Vercel
1. Import your repository to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

### Option 3: Traditional Hosting
1. Run `npm run build`
2. Upload contents of `dist` folder to your web host
3. Ensure your server serves `index.html` for all routes

## Content Management

### Updating Doctor Information
Edit `/src/pages/About.tsx` and `/src/components/home/AboutPreview.tsx`

### Updating Services
Edit `/src/components/home/FeaturedServices.tsx`

### Updating Team Members
Edit `/src/pages/Team.tsx`

### Updating Testimonials
Edit `/src/components/home/Testimonials.tsx`

### Updating Contact Information
Edit `/src/pages/Contact.tsx` and `/src/components/Footer.tsx`

### Updating Gallery
Edit `/src/components/home/GalleryPreview.tsx`

## SEO Configuration

The website includes:
- **LocalBusiness Schema** for Google search
- **Meta Tags** for social sharing (Open Graph)
- **Keywords** for local search (Whitefield, Bengaluru)
- **Alt Text** on all images
- **Semantic HTML** structure

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Sufficient color contrast ratios
- Alt text on all images
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Code splitting
- Lazy loading images
- Minified CSS and JavaScript
- Optimized animations
- WebP image format support
- Smooth scrolling behavior

## Integration Notes

### Appointment Booking
Update the booking buttons to link to your Practo or appointment system:
```tsx
// In Button components
<Button onClick={() => window.open('YOUR_PRACTO_URL', '_blank')}>
  Book Appointment
</Button>
```

### WhatsApp Integration
Update phone number in Footer.tsx:
```tsx
href="https://wa.me/918012345678" // Replace with actual number
```

### Google Maps
Update map embed URL in Contact.tsx with actual clinic coordinates

### Instagram Feed
Add Instagram feed widget in Footer.tsx (requires Instagram API setup)

## Assets Needed

Replace placeholder images with actual clinic photos:

1. **Hero Image**: Smiling patient or aesthetic smile close-up
2. **Doctor Photo**: Professional headshot of Dr. Nikita Singh
3. **Team Photos**: Individual headshots of team members
4. **Clinic Ambience**: 3-4 photos of waiting area and treatment rooms
5. **Before/After Gallery**: Patient transformation photos (with consent)
6. **Logo/Favicon**: Clinic logo for branding

## Custom Development

To add new pages:
1. Create page component in `/src/pages/`
2. Import in `/src/App.tsx`
3. Add route handling in `renderPage()` function
4. Add navigation link in Header component

## Support

For technical support or customization requests, refer to the codebase documentation or contact your development team.

## License

© 2025 NoPain Dental Lounge. All rights reserved.

---

**Built with care for Dr. Nikita Singh and the NoPain Dental Lounge team.**
