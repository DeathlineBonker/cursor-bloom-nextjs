# ilhamsafari.com â Visual Identity System

## Design Philosophy

**Dark Warmth.** The aesthetic sits between a midnight architecture studio and a leather-bound notebook. Dark backgrounds provide drama and focus; warm undertones prevent coldness. Every element is placed with the precision of a typeset page but the warmth of a handwritten note.

**Keywords:** Warm Â· Architectural Â· Precise Â· Confident Â· Restrained

---

## Color Palette

### Primary Palette (Dark Warmth)

| Token | Name | HSL | HEX | Usage |
|---|---|---|---|---|
| `--background` | Deep Charcoal | `30 10% 8%` | `#161413` | Page background |
| `--foreground` | Warm Bone | `35 15% 88%` | `#E3DFD7` | Primary text |
| `--card` | Dark Walnut | `30 8% 12%` | `#211F1C` | Card surfaces |
| `--card-foreground` | Warm Bone | `35 15% 88%` | `#E3DFD7` | Card text |
| `--primary` | Terracotta | `20 60% 55%` | `#C4714A` | CTAs, accent, emphasis |
| `--primary-foreground` | Deep Charcoal | `30 10% 8%` | `#161413` | Text on primary |
| `--secondary` | Dark Stone | `30 8% 16%` | `#2B2826` | Secondary surfaces |
| `--secondary-foreground` | Pale Ash | `35 10% 75%` | `#C4BFB8` | Secondary text |
| `--muted` | Soot | `30 6% 15%` | `#282523` | Muted backgrounds |
| `--muted-foreground` | Ash | `30 5% 55%` | `#908C87` | Secondary/meta text |
| `--accent` | Terracotta | `20 60% 55%` | `#C4714A` | Brand accent |
| `--border` | Ember | `30 6% 20%` | `#363230` | Borders, dividers |
| `--destructive` | Rust Red | `0 65% 55%` | `#D04848` | Error states |

### Category Colors (for project types)

| Category | HSL | HEX | Usage |
|---|---|---|---|
| Web App / Platform | `20 60% 55%` | `#C4714A` | Terracotta (default) |
| Brand & Identity | `35 45% 50%` | `#B8944A` | Warm Gold |
| AI / Automation | `195 35% 45%` | `#4A8EA0` | Steel Blue |
| UI/UX Design | `340 35% 55%` | `#B8657A` | Dusty Rose |

---

## Typography

### Font Stack

| Role | Font | Weights | CSS Variable |
|---|---|---|---|
| **Display** | Cormorant Garamond | 300, 400, 500, 600, 700 (+ italic) | `--font-display` |
| **Body / UI** | Space Grotesk | 300, 400, 500, 600 | `--font-body` |

### Why Cormorant Garamond?
Elegant, literary, and warm â the same typographic DNA as quhan.im. Both sites share this display font, creating a unified brand family while each maintains its own personality through layout and content. Cormorant Garamond bridges the thinker (quhan.im) and the builder (ilhamsafari.com).

### Type Scale

| Element | Font | Size | Weight | Tracking | Line Height |
|---|---|---|---|---|---|
| Hero Title | Display | 5remâ8rem | 400 | -0.02em | 0.9 |
| Section Heading (H2) | Display | 2.5remâ3.5rem | 400 | -0.01em | 1.1 |
| Subsection (H3) | Display | 1.5rem | 400 | 0 | 1.3 |
| Body Text | Body | 1rem (16px) | 400 | 0 | 1.7 |
| Small / Caption | Body | 0.75rem | 400 | 0.05em | 1.5 |
| Navigation | Body | 0.75rem | 400 | 0.2em (uppercase) | 1 |

---

## Spacing & Layout

### Grid
- Max content width: `1400px`
- Horizontal padding: `1.5rem` (mobile), `4rem` (desktop)
- Section spacing: `8rem` vertical
- Component gaps: Follow Tailwind spacing scale

### Spacing Scale (rem)
`0.25 Â· 0.5 Â· 0.75 Â· 1 Â· 1.5 Â· 2 Â· 3 Â· 4 Â· 6 Â· 8`

---

## Border Radius & Shadows

| Element | Radius | Shadow |
|---|---|---|
| Cards | `0.25rem` | none (rely on border) |
| Buttons | `0.25rem` | none |
| Inputs | `0.25rem` | none |

**Philosophy:** Nearly square. Sharp precision. No rounded-full, no heavy shadows.

---

## Motion & Animation

- **Page entry:** Fade-in + translateY(20px), 0.6â0.8s ease-out
- **Stagger:** 0.1â0.2s delay between sequential elements
- **Hover states:** Color transitions, 0.2s ease
- **Scroll reveals:** Fade-in on viewport intersection, once only
- **No:** Spinning elements, bouncing, parallax, decorative animations

**Principle:** Motion confirms interaction and guides attention. It never entertains.

---

## Dividers & Separators

- **Section dividers:** 1px solid `--border` (full-width within container)
- **Content dividers:** 1px solid `--border` (constrained to content area)
- **Decorative line:** Single vertical line, gradient from `--primary/60` to transparent (hero scroll indicator)
- **No:** Thick dividers, colored separators, ornamental rules

---

## Iconography

- **Library:** Lucide React (line icons)
- **Style:** 1.5px stroke, current color
- **Size:** 16px (inline), 20px (standalone), 24px (feature)
- **Usage:** Navigation arrows, social links, UI indicators only
- **No:** Filled icons, emoji as icons, decorative icon walls

---

## Logo / Wordmark

### Monogram (Primary â used in navbar)
```
IS
```
- Font: Cormorant Garamond, weight 400
- Uppercase
- ~20â24px font-size
- Terracotta color on dark, or dark on light contexts

### Full Name (used in hero, footer)
```
Ilham Safari
```
- Font: Cormorant Garamond, weight 400
- Title case
- Hero: 5remâ8rem
- Footer: standard text size

### Favicon
- Simple `IS` letterform in Cormorant Garamond
- Terracotta on transparent background
- Provide as SVG + PNG (32Ã32, 180Ã180)

---

## Image Treatment

- **Project screenshots:** Clean, well-framed, on dark backgrounds
- **Aspect ratios:** 16:9 (hero/project), 3:2 (cards)
- **Borders:** 1px `--border` or none
- **No:** Decorative gradients, heavy overlays, stock photography
