

# Plan: Project Planning Files + UI Fixes

## Part 1: Fix UI Issues

### NavBar â Bigger Logo & Menu Text
- `IS` monogram: change from `text-2xl` to `text-4xl`
- Nav link text: change from `text-xs` to `text-sm` with slightly wider tracking

### Footer â Update Tagline
- Change `"Design Â· Code Â· Craft"` to `"Think Â· Design Â· Build"` â reflects your actual workflow as an Agentic AI Engineer who thinks through systems and uses AI tools to build, not someone who writes code directly

**Files:** `src/components/NavBar.tsx`, `src/components/ContactSection.tsx`

---

## Part 2: Create 7 Project Planning Files

Create comprehensive planning files at `brand/portfolio/` for projects 02â08. Each file will serve as a standalone context document when you start a new Lovable project.

Each planning file includes:
- **Project overview** â what it is, who it's for
- **Brand identity** â name meaning, color palette (using your warm aesthetic DNA), typography (Cormorant Garamond + Inter/body font)
- **Site structure** â sections, page layout, content blocks
- **Design direction** â hero style, grid approach, interaction notes
- **Content guidance** â real copy suggestions, image direction
- **Technical notes** â SEO, performance, responsive considerations
- **Lovable build instructions** â step-by-step prompts to feed Lovable

### The 7 Files

| File | Project | Key Focus |
|---|---|---|
| `brand/portfolio/02-arch-and-line.md` | Arch & Line | Architecture studio â editorial hero, project grid, minimal palette |
| `brand/portfolio/03-maison-kopi.md` | Maison Kopi | Coffee brand â warm earthy tones, product showcase, origin story |
| `brand/portfolio/04-verdant-properties.md` | Verdant Properties | Real estate â property cards, map section, inquiry CTA |
| `brand/portfolio/05-studio-lumiere.md` | Studio LumiÃ¨re | Photography â masonry gallery, lightbox, dramatic contrast |
| `brand/portfolio/06-zenith-wellness.md` | Zenith Wellness | Wellness clinic â calming palette, services grid, team section |
| `brand/portfolio/07-focusflow.md` | FocusFlow | Productivity micro-SaaS â timer UI, task list, dashboard layout |
| `brand/portfolio/08-coinpulse.md` | CoinPulse | Personal finance â charts, categories, data visualization |

Each file will be ~150-200 lines with enough detail to start building immediately in a fresh Lovable project.

---

## Files Changed

| File | Change |
|---|---|
| `src/components/NavBar.tsx` | Increase IS logo size and nav link text size |
| `src/components/ContactSection.tsx` | Change footer tagline to "Think Â· Design Â· Build" |
| `brand/portfolio/02-arch-and-line.md` | New â full project planning doc |
| `brand/portfolio/03-maison-kopi.md` | New â full project planning doc |
| `brand/portfolio/04-verdant-properties.md` | New â full project planning doc |
| `brand/portfolio/05-studio-lumiere.md` | New â full project planning doc |
| `brand/portfolio/06-zenith-wellness.md` | New â full project planning doc |
| `brand/portfolio/07-focusflow.md` | New â full project planning doc |
| `brand/portfolio/08-coinpulse.md` | New â full project planning doc |

