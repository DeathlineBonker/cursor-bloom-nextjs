# ilhamsafari.com â Platform Architecture

## Overview

ilhamsafari.com is a single-page professional portfolio. It presents the work, the person, and an invitation to collaborate â in that order of importance. Simple, focused, elegant.

---

## Site Structure

```
ilhamsafari.com/
âââ /                    â Single page (Hero â About â Work â Contact)
```

### Future Expansion
- `/project/:slug`      â Individual case study pages
- `/blog`               â Short-form technical/design writing
- `/uses`               â Tools, stack, setup (Lovable, Cursor, Supabase, etc.)

---

## Sections

### 1. Hero
- Monogram `IS` in navbar (Instrument Serif, terracotta)
- Name: "Ilham Safari" in large display type
- Role: "Agentic AI Engineer"
- Positioning: "I think through systems, design with intention, and build with AI â from idea to deployment."
- Single CTA: "See my work" (scrolls to Work section)
- No decorative elements â confidence through typography alone

### 2. About
- Short personal philosophy (2-3 sentences max)
- What you do: think, design, articulate, build with AI, iterate fast
- Compact skills/tools display â not a wall of logos
- Skills: Systems Thinking, AI-Assisted Development, UI/UX Design, Brand Identity, Full-Stack Products, Rapid Iteration
- A subtle nod to the deeper thinking side (without linking quhan.im yet)

### 3. Work (Portfolio)
- Numbered project list format
- Each entry: number, title, category, brief description
- Hover state reveals terracotta accent
- Projects should feel real and specific:
  - 01: Quhan.im â Personal publishing & membership platform
  - 02: Brand Identity System â Complete visual identity with AI-assisted design
  - 03: AI-Powered Dashboard â Data visualization with intelligent automation
  - 04: E-Commerce Platform â Full-stack with platform integration
- Future: each project links to a case study page

### 4. Contact
- Warm, inviting language: "Let's make something together"
- Email address (primary contact method)
- Social links: GitHub, LinkedIn, Twitter/X
- No contact form (email is more personal)

### 5. Footer
- Copyright line
- "Design Â· Code Â· Craft" tagline
- Minimal â just enough to close the page properly

---

## Content Strategy

### Copy Principles
- First person, direct
- Short paragraphs, generous spacing
- No jargon without context
- Every word serves a purpose
- Acknowledge AI as a tool, not a gimmick

### Project Descriptions
Keep them concrete:
- â "A personal publishing platform with membership tiers and newsletter integration"
- â "A cutting-edge solution leveraging next-gen technologies"

---

## Technical Notes

### SEO
- Title: "Ilham Safari â Agentic AI Engineer"
- Meta description: "Design Â· Code Â· Craft. Portfolio of Ilham Safari, an Agentic AI Engineer who thinks through systems, designs with intention, and builds with AI."
- Single H1 (the hero name)
- Semantic HTML throughout
- JSON-LD Person schema

### Performance
- Minimal JavaScript â framer-motion for subtle animations only
- No heavy images until case study pages exist
- Lazy loading for below-fold content
- Core Web Vitals optimized
