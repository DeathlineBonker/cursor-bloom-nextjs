# Quhan.im â Visual Identity System

## Design Philosophy

Editorial minimalism with warmth. The design should feel like a beautifully typeset book â not a tech startup landing page. Every element earns its place. Generous whitespace. Deliberate restraint.

**Keywords:** Warm Â· Editorial Â· Refined Â· Unhurried Â· Intentional

---

## Color Palette

### Light Mode (Default)

| Token | Name | HSL | HEX | Usage |
|---|---|---|---|---|
| `--background` | Parchment | `40 20% 97%` | `#F8F6F2` | Page background |
| `--foreground` | Ink | `30 10% 15%` | `#2A2724` | Primary text |
| `--card` | Warm White | `40 15% 95%` | `#F4F1EC` | Card surfaces |
| `--primary` | Ink | `30 10% 15%` | `#2A2724` | Buttons, emphasis |
| `--primary-foreground` | Parchment | `40 20% 97%` | `#F8F6F2` | Text on primary |
| `--secondary` | Stone | `35 12% 90%` | `#E8E4DD` | Secondary surfaces |
| `--muted` | Fog | `35 10% 92%` | `#EDEBE7` | Muted backgrounds |
| `--muted-foreground` | Slate | `30 5% 50%` | `#827E79` | Secondary text |
| `--accent` | Terracotta | `20 60% 55%` | `#C4714A` | Brand accent, `.im` |
| `--accent-foreground` | Parchment | `40 20% 97%` | `#F8F6F2` | Text on accent |
| `--border` | Mist | `35 15% 88%` | `#E3DFD7` | Borders, dividers |

### Dark Mode

| Token | Name | HSL | HEX | Usage |
|---|---|---|---|---|
| `--background` | Deep Ink | `30 10% 8%` | `#161413` | Page background |
| `--foreground` | Bone | `35 15% 88%` | `#E3DFD7` | Primary text |
| `--card` | Charcoal | `30 8% 12%` | `#211F1C` | Card surfaces |
| `--primary` | Bone | `35 15% 88%` | `#E3DFD7` | Buttons, emphasis |
| `--primary-foreground` | Deep Ink | `30 10% 8%` | `#161413` | Text on primary |
| `--secondary` | Dark Stone | `30 8% 18%` | `#312D28` | Secondary surfaces |
| `--muted` | Soot | `30 6% 15%` | `#282523` | Muted backgrounds |
| `--muted-foreground` | Ash | `30 5% 55%` | `#908C87` | Secondary text |
| `--accent` | Terracotta | `20 60% 55%` | `#C4714A` | Brand accent (same) |
| `--accent-foreground` | Deep Ink | `30 10% 8%` | `#161413` | Text on accent |
| `--border` | Ember | `30 6% 20%` | `#363230` | Borders, dividers |

### Category / Pillar Colors

For tagging and visual differentiation of content pillars:

| Pillar | HSL | HEX | Token |
|---|---|---|---|
| Technology | `210 40% 50%` | `#4D7EBF` | `--pillar-tech` |
| Civilization | `35 45% 55%` | `#C49B56` | `--pillar-civilization` |
| Science | `160 35% 45%` | `#4BA68A` | `--pillar-science` |
| Self-Education | `270 30% 55%` | `#8B6BBF` | `--pillar-education` |
| Self-Discovery | `340 35% 55%` | `#BF5B7A` | `--pillar-discovery` |
| Well-being | `140 35% 48%` | `#50A66B` | `--pillar-wellbeing` |
| Interpersonal | `25 50% 55%` | `#CC8044` | `--pillar-interpersonal` |
| Etiquette | `200 25% 50%` | `#608EA6` | `--pillar-etiquette` |

---

## Typography

### Font Stack

| Role | Font | Weights | CSS Variable |
|---|---|---|---|
| **Display** | Cormorant Garamond | 300, 400, 600 (+ italics) | `--font-display` |
| **Body / UI** | Space Grotesk | 300, 400, 500 | `--font-body` |
| **Monospace** | JetBrains Mono | 400, 500 | `--font-mono` |

### Type Scale

| Element | Font | Size | Weight | Tracking | Line Height |
|---|---|---|---|---|---|
| Hero / Page Title | Display | 4remâ6rem | 300 | -0.02em | 1.1 |
| Section Heading (H2) | Display | 2.5rem | 400 | -0.01em | 1.2 |
| Subsection (H3) | Display | 1.75rem | 400 | 0 | 1.3 |
| Body Text | Body | 1rem (16px) | 400 | 0 | 1.7 |
| Small / Caption | Body | 0.75rem | 400 | 0.05em | 1.5 |
| Navigation | Body | 0.75rem | 400 | 0.1em (uppercase) | 1 |
| Code | Mono | 0.875rem | 400 | 0 | 1.6 |
| Pull Quote | Display | 1.5rem | 300 italic | 0 | 1.5 |

---

## Spacing & Layout

### Grid
- Max content width: `720px` (article body â optimal reading width)
- Max layout width: `1200px` (full page with sidebars)
- Horizontal padding: `1.5rem` (mobile), `2rem` (desktop)
- Section spacing: `4rem` â `6rem` vertical

### Spacing Scale (rem)
`0.25 Â· 0.5 Â· 0.75 Â· 1 Â· 1.5 Â· 2 Â· 3 Â· 4 Â· 6 Â· 8`

---

## Border Radius & Shadows

| Element | Radius | Shadow |
|---|---|---|
| Cards | `0.25rem` | `0 1px 3px hsl(30 10% 15% / 0.04)` |
| Buttons | `0.25rem` | none |
| Inputs | `0.25rem` | none |
| Images | `0.125rem` or none | none |
| Modals | `0.5rem` | `0 20px 60px hsl(30 10% 15% / 0.1)` |

**Philosophy:** Sharp corners with just enough rounding to feel approachable. No rounded-full buttons. No heavy shadows.

---

## Dividers & Separators

- **Horizontal rule:** 1px solid `--border`, max-width `4rem`, centered
- **Section break:** A centered `Â·` character in muted-foreground
- **Article separator:** Thin 1px line spanning full content width

---

## Iconography

- **Style:** Line icons, 1.5px stroke, no fill
- **Library:** Lucide (already installed)
- **Size:** 16px (inline), 20px (navigation), 24px (feature)
- **Color:** Always `currentColor` â inherits text color

---

## Logo / Wordmark

The logo is typographic only:

```
Quhan.im
```

- Font: Cormorant Garamond, weight 300
- `.im` uses the accent color (terracotta)
- Minimum size: 24px font-size
- Clear space: at least 1em on all sides
- No icon, no symbol â the wordmark is the brand

### Favicon
- Use a simple `Q` letterform in Cormorant Garamond
- Dark text on transparent background
- Provide as SVG + PNG (32Ã32, 180Ã180)

---

## Motion & Animation

- **Page entry:** Fade-in + translateY(12px), 0.8s ease-out
- **Stagger:** 0.1sâ0.2s delay between sequential elements
- **Hover states:** Color transitions, 0.2s ease
- **Scroll reveals:** Fade-in on intersection, 0.6s ease-out
- **No:** Bouncing, spinning, parallax, or gratuitous animation

---

## Image Treatment

- **Photography:** Muted, warm tones. Desaturated slightly.
- **Aspect ratios:** 16:9 (hero), 3:2 (cards), 1:1 (avatar)
- **Overlays:** Subtle warm gradient overlay for text legibility
- **Borders:** None or 1px `--border`
