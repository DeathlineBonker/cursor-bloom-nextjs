# Quhan.im â Platform Architecture

## Overview

Quhan.im functions as a personal publishing and membership platform â similar to Ghost, Substack, or a curated blog. It is the home for long-form writing, idea exploration, and community building.

---

## Site Structure

```
quhan.im/
âââ /                    â Home (featured + recent articles)
âââ /articles            â All articles (filterable by pillar)
âââ /series              â Multi-part article series
âââ /series/:slug        â Individual series page
âââ /article/:slug       â Individual article
âââ /about               â About Quhan / brand story
âââ /membership          â Membership info + signup
âââ /archive             â Full chronological archive
âââ /newsletter          â Newsletter signup (standalone)
âââ /tags/:tag           â Tag-filtered article list
âââ /pillar/:pillar      â Pillar-filtered article list
```

---

## Page Types

### Home (`/`)
- Hero with brand wordmark or featured article
- 3â5 featured/pinned articles
- Recent articles grid (6â12)
- Newsletter signup CTA
- Pillar navigation

### Article (`/article/:slug`)
- Full-width hero image (optional)
- Title (Display font, large)
- Metadata: date, reading time, pillar tags
- Article body (max-width 720px, prose styling)
- Author card at bottom
- Related articles (2â3)
- Comments or reactions (future)

### Series (`/series/:slug`)
- Series title and description
- Ordered list of articles in the series
- Progress indicator (for logged-in members)

### Archive (`/archive`)
- Year-grouped chronological list
- Minimal styling â just titles, dates, and pillar tags
- Search/filter capability

### About (`/about`)
- Personal narrative â who Quhan is and why this exists
- Content pillars explained
- Link to ilhamsafari.com for professional profile

### Membership (`/membership`)
- Value proposition
- Tier comparison
- Signup / login flow

---

## Content Taxonomy

```
Pillar (8 fixed categories)
  âââ Tags (unlimited, freeform)
       âââ Series (optional grouping)
```

### Pillars
Fixed set of 8 (see BRAND.md). Every article must belong to at least one pillar.

### Tags
Freeform, lowercase, hyphenated. Examples: `artificial-intelligence`, `stoicism`, `urban-design`, `reading-habits`.

### Series
An ordered collection of articles exploring one topic in depth. Examples:
- "Learning How to Learn" (Self-Education)
- "Building in Public" (Technology)
- "The Shape of Cities" (Civilization)

---

## Membership Tiers

| Tier | Price | Access |
|---|---|---|
| **Free** | $0 | All public articles, newsletter |
| **Member** | $X/mo | Full archive, series, member-only posts, comments |
| **Supporter** | $Y/mo | Everything in Member + behind-the-scenes, early access |

*(Pricing TBD. Start with free + one paid tier.)*

---

## Newsletter

- **Frequency:** Weekly or bi-weekly
- **Content:** Curated digest of recent articles + one personal note
- **Platform:** Integrated with membership (email collection via site)
- **Tone:** Personal letter format, not a marketing blast

---

## Technical Notes

### Content Management
- Articles stored in database (Lovable Cloud / Supabase)
- Markdown or rich-text editor for authoring
- Draft / Published / Archived states
- Scheduled publishing

### Authentication
- Email + password signup
- Magic link login
- Social login (Google, Apple) via Lovable Cloud

### SEO Per Page
- Dynamic `<title>` and `<meta description>`
- Open Graph and Twitter Card meta tags
- JSON-LD structured data (Article, Person, WebSite)
- Canonical URLs
- Sitemap.xml generation

### Performance
- Lazy-loaded images
- Static generation where possible
- Minimal JavaScript â content-first
- Core Web Vitals optimized

---

## Future Considerations

- **Bookmarks / Reading List** â Members can save articles
- **Reactions** â Simple emoji reactions instead of comments (initially)
- **Analytics Dashboard** â Author-facing stats
- **RSS Feed** â Full content RSS for subscribers
- **API** â Public read API for content syndication
- **Mobile App** â PWA or native reader (long-term)
