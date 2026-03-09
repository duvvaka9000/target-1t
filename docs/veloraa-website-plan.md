# Veloraa Website — Planning & Design Blueprint

## 1) Project Vision
Veloraa's website should position the agency as a **premium, trustworthy, and future-ready technology partner**.

### Primary goal
Convert visitors into leads by encouraging them to:
- Start a project
- Book a consultation
- Contact on WhatsApp

### Secondary goals
- Communicate clear website development services for businesses
- Establish credibility via portfolio-style demos and process clarity
- Introduce upcoming AI capabilities (automation, chatbots, AI agents, pipelines, integrations)

## 2) Target Audience
- Small and medium business owners who need modern websites
- Startup founders launching MVPs or company sites
- Brands looking for redesigns and better conversion-focused UX
- Early adopters interested in AI-enabled business workflows

## 3) Brand & Design Direction

### Visual identity
- **Theme:** Dark, premium, modern tech aesthetic
- **Personality:** Professional, confident, clean, innovative
- **Design style:** Generous spacing, sharp hierarchy, subtle gradients/glows, minimal clutter

### Suggested design tokens (starting point)
- Background: `#0B0F19`
- Surface: `#121826`
- Text primary: `#F5F7FF`
- Text secondary: `#A7B0C0`
- Primary accent: `#5B8CFF`
- Secondary accent: `#22D3EE`
- Success/CTA support: `#34D399`

### Typography direction
- Heading font: modern geometric sans (e.g., **Sora**, **Plus Jakarta Sans**)
- Body font: highly readable sans (e.g., **Inter**)
- Strong contrast between hero headlines and supporting content

## 4) Information Architecture (Sitemap)

### Core pages
1. **Home**
2. **Services**
3. **AI Solutions** (future-focused)
4. **Portfolio**
5. **Contact**

### Utility/optional pages (phase 2)
- About
- FAQ
- Privacy Policy
- Terms

## 5) Homepage UX Flow (Top to Bottom)
1. **Hero section**
   - Clear value proposition
   - Primary CTA: “Start a Project”
   - Secondary CTA: “View Services”
2. **Trust strip**
   - Quick credibility indicators (delivery speed, support, modern stack)
3. **Services overview**
   - Website packages and outcomes, not only technical features
4. **Process section**
   - Discovery → Design → Build → Launch → Support
5. **Why choose Veloraa**
   - Clear differentiators and business outcomes
6. **AI future preview**
   - Teaser cards for chatbot, automation, agent workflows, integrations
7. **Portfolio highlights**
   - Demo/concept projects with short case-style notes
8. **Pricing preview**
   - Entry package around **₹8000** plus higher tiers
9. **Final CTA block**
   - Contact form and WhatsApp action for quick conversion

## 6) Page-Level Content Blueprint

## 6.1 Services Page
- Service categories (business website, landing page, redesign, maintenance)
- Feature checklist (responsive, SEO basics, fast load, analytics ready)
- Package comparison (Starter / Growth / Premium)
- FAQ section + conversion CTA

## 6.2 AI Solutions Page
- Messaging: “Available soon / now onboarding pilot clients”
- Offer cards:
  - AI automation workflows
  - AI chatbots for lead support
  - AI agents for internal tasks
  - Data pipelines and integrations
- Distinct visual treatment (futuristic gradients, animated accents)
- CTA for waitlist or consultation

## 6.3 Portfolio Page
- Grid of projects (initially concept/demos)
- Each card: problem, approach, result focus
- Filter tags (business type / page type / stack)
- CTA to discuss a similar project

## 6.4 Contact Page
- Short, low-friction form (name, business, goal, budget, timeline)
- WhatsApp button as high-visibility quick contact
- Optional calendar scheduling (phase 2)

## 7) Conversion Strategy
- Persistent top-right CTA in navbar (“Start Project”)
- Repeated context-aware CTAs every 1–2 sections
- Lead capture with simple forms (minimal required fields)
- Social proof placeholders ready for future client testimonials
- Pricing transparency to pre-qualify leads

## 8) Technology & Architecture

### Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel (recommended)

### Technical principles
- Component-driven architecture with reusable section blocks
- Mobile-first responsive layout
- Performance-first approach (optimized images, lazy loading, minimal JS)
- SEO fundamentals from day one (metadata, semantic headings, Open Graph)

## 9) Suggested Project Structure (Next.js App Router)
```txt
app/
  layout.tsx
  page.tsx                # Home
  services/page.tsx
  ai-solutions/page.tsx
  portfolio/page.tsx
  contact/page.tsx

components/
  layout/
    Navbar.tsx
    Footer.tsx
  sections/
    Hero.tsx
    ServicesOverview.tsx
    Process.tsx
    WhyVeloraa.tsx
    AIPreview.tsx
    PortfolioPreview.tsx
    PricingPreview.tsx
    CTASection.tsx
  ui/
    Button.tsx
    Card.tsx
    SectionHeader.tsx

lib/
  site-config.ts
  seo.ts

content/
  services.ts
  portfolio.ts
  pricing.ts
  ai-solutions.ts
```

## 10) Navigation Model
- Navbar links: Home, Services, AI Solutions, Portfolio, Contact
- Primary CTA button: Start Project
- Footer: quick links, WhatsApp, email, legal links

## 11) Pricing Strategy (Initial)
- **Starter:** from ₹8000
- **Growth:** mid-tier with more pages/features
- **Premium:** custom scope, advanced integrations
- Note: “Final quote depends on scope and timeline”

## 12) Development Roadmap (Phased)

### Phase 1 — Foundation
- Set up project architecture and global layout
- Implement dark premium theme and base components
- Create homepage sections with static content

### Phase 2 — Core pages
- Build Services, Portfolio, Contact pages
- Add form handling and WhatsApp integration
- Improve mobile responsiveness and spacing polish

### Phase 3 — AI positioning
- Build AI Solutions page with distinct visual language
- Add teaser workflows and pilot CTA

### Phase 4 — Optimization
- SEO metadata, schema, performance tuning
- Accessibility checks (contrast, keyboard nav, alt text)
- Final QA before launch

## 13) UX Quality Checklist (Before Build Complete)
- Clear message in first 5 seconds
- CTA visible above the fold on all major pages
- Mobile readability and tap targets verified
- Fast page load and optimized media
- Contact path requires minimal effort
- Every page ends with a meaningful CTA

## 14) Success Metrics
- Contact form submissions
- WhatsApp click-through rate
- Start Project CTA click rate
- Time on Services and Portfolio pages
- Bounce rate reduction after iterative improvements

---
This plan is intended to serve as the **single source of truth** for design and development decisions before implementation begins.
