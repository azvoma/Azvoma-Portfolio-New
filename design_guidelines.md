# Design Guidelines: Premium Portfolio Website for UX/UI Designer

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern portfolio leaders like Linear (typography excellence), Stripe (premium minimalism), and Awwwards-featured portfolios (subtle sophistication).

**Core Principle**: Premium minimalism with strategic use of white space, strong typography hierarchy, and restrained animations that emphasize professionalism and clarity.

---

## Typography System

**Font Stack**: 
- Headings: Inter or similar geometric sans-serif (weights: 600, 700)
- Body: Inter (weights: 400, 500)
- Monospace (for tags/badges): JetBrains Mono or SF Mono

**Hierarchy**:
- H1 (Hero): text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight, leading-tight
- H2 (Section headings): text-3xl md:text-4xl lg:text-5xl, font-semibold, tracking-tight
- H3 (Card titles): text-xl md:text-2xl, font-semibold
- Body Large: text-lg md:text-xl, leading-relaxed
- Body: text-base, leading-relaxed
- Small/Meta: text-sm, font-medium

---

## Layout & Spacing System

**Tailwind Units**: Consistently use 4, 6, 8, 12, 16, 20, 24, 32 for spacing
- Section padding: py-20 md:py-32
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl for text-heavy sections
- Grid gaps: gap-8 md:gap-12

**Grid Patterns**:
- Featured case studies: grid-cols-1 md:grid-cols-2 gap-8
- Credibility strip: grid-cols-2 md:grid-cols-4 gap-4
- Process steps: grid-cols-1 md:grid-cols-5 gap-6

---

## Component Library

**Cards** (Case Study Cards):
- Contained style with subtle border: border border-gray-200
- Generous padding: p-8 md:p-10
- Hover: transform scale-[1.02] transition-all duration-300
- Include: Type badge (top), project name, role line, outcome metric, CTA link

**Badges** (Type indicators):
- Pill style: px-4 py-1.5 rounded-full text-sm font-medium
- Outlined variant: border border-current
- Uppercase: uppercase tracking-wider

**Buttons**:
- Primary: Large, solid, rounded-lg, px-8 py-4, text-base font-semibold
- Secondary: Outlined variant with hover fill
- Text links: Underline on hover with arrow icon (→)

**Navigation**:
- Sticky header: backdrop-blur-md bg-white/80, border-b
- Links: Subtle underline animation on active section
- Height: h-16 md:h-20

**Section Headers**:
- Centered or left-aligned based on section
- Include optional eyebrow text (small, uppercase, tracking-wide)
- Generous margin-bottom: mb-16 md:mb-24

---

## Page-Specific Layouts

**Home Page Hero**:
- Full viewport height: min-h-screen flex items-center
- Centered content: max-w-5xl mx-auto text-center
- H1 + subtext + value bullets (list with checkmarks or arrows)
- Two-button CTA group: gap-4, stacked on mobile
- **No hero background image** - clean white space with subtle gradient overlay (optional)

**Credibility Strip**:
- Four stat cards in grid
- Each card: Icon + stat text + label
- Minimal style: text-center, p-6

**Featured Case Studies Section**:
- 2-column grid on desktop
- Each card takes equal height
- Hover state reveals subtle shadow
- Consistent image aspect ratio: aspect-video for preview images

**Process Section**:
- 5-column grid on desktop, stacked on mobile
- Each step: Number badge + title + short description
- Visual connector line between steps (optional decorative element)

**AI & Tooling**:
- Two-column layout: text left, tool tags right (stacked on mobile)
- Tool tags as outlined badges in flex-wrap layout

**Contact Section**:
- Centered, max-w-2xl
- Large headline + email as prominent link
- Button group below

**Case Study Pages**:
- Hero: Project name + meta info (type, role, duration) + summary
- Sections use alternating full-width and contained layouts
- Deliverables displayed as image placeholders in 2-column grid where applicable
- Outcome section uses stat cards similar to credibility strip
- "Next case study" link at bottom with arrow

**Case Studies Index**:
- Filter buttons: inline-flex gap-2, pill-shaped tabs
- Grid same as featured section
- Page header: centered, mb-16

---

## Images

**Hero Section**: No background image - rely on typography and white space

**Case Study Cards**: 
- Placeholder images with aspect-video ratio
- Description: "Project mockup preview - dashboard UI or mobile screens"
- Use gradient placeholders with project name overlay initially

**Case Study Pages**:
- Header image: Full-width hero image showing final product (aspect-[21/9])
- Description: "Final product screenshot - full interface view"
- Section images: Deliverable screenshots (wireframes, flows, prototypes)
- Description: "Process deliverable - [wireframe/user flow/prototype]"
- Before/After comparisons: Side-by-side 2-column layout

---

## Animations & Interactions

**Scroll Animations** (subtle):
- Section fade-in on scroll: opacity-0 to opacity-100, translate-y-4 to translate-y-0
- Only on first load, not every scroll

**Hover States**:
- Cards: scale-[1.02] + shadow-lg
- Buttons: brightness-110 or background shift
- Links: underline expansion from center

**Navigation**:
- Active section indicator: border-bottom or background highlight
- Smooth scroll behavior: scroll-behavior: smooth

**Avoid**: Parallax, complex scroll-triggered animations, auto-playing carousels

---

## Accessibility

- Focus rings: ring-2 ring-offset-2 on all interactive elements
- Skip to content link for keyboard users
- Semantic HTML: proper heading hierarchy, nav/main/footer
- ARIA labels for icon-only buttons
- Sufficient color contrast (WCAG AA minimum)

---

## Footer

- Full-width, border-top
- Three-column layout: Contact info | Quick links | Social (if applicable)
- Minimal style: py-12, text-sm
- Copyright + "Made with [tools]" optional

This premium, minimal approach emphasizes the designer's work through clarity, hierarchy, and generous white space while maintaining modern sophistication appropriate for 2026.