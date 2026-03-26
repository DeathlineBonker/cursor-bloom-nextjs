# Migration Plan — Ilham Safari â Agentic AI Engineer

## Summary
Automated migration from Vite/React to Next.js App Router (SPA mode).
4 files transformed, 1 items need attention.

## Critical Issues

1. ### Replace react-router-dom with Next.js App Router
- Remove `<BrowserRouter>`, `<Routes>`, `<Route>` usage
- Convert each route to a folder under `app/`
- Replace `useNavigate()` with `useRouter()` from `next/navigation`
- Replace `<Link to="...">` with `<Link href="...">`

2. ### Add "use client" directives
The following 14 components use React hooks and need `"use client"` at the top:
- `src/components/CursorParticles.tsx`
- `src/components/HeroSection.tsx`
- `src/components/MagneticButton.tsx`
- `src/components/NavBar.tsx`
- `src/components/WorkSection.tsx`
- `src/components/ui/carousel.tsx`
- `src/components/ui/chart.tsx`
- `src/components/ui/form.tsx`
- `src/components/ui/input-otp.tsx`
- `src/components/ui/sidebar.tsx`
- `src/components/ui/toggle-group.tsx`
- `src/hooks/use-mobile.tsx`
- `src/pages/Index.tsx`
- `src/pages/NotFound.tsx`

3. ### Meta Tags & SEO
- Move `<title>` and `<meta>` from `index.html` to `metadata` exports in layout/page files
- Implement `generateMetadata()` for dynamic pages

4. ### Add Loading & Error States
- Add `loading.tsx` and `error.tsx` files to route segments for better UX

## Automated Changes Applied
- ✅ Created `next.config.mjs` with SPA export configuration
- ✅ Created `src/app/layout.tsx` with metadata from index.html
- ✅ Created catch-all route `src/app/[[...slug]]/page.tsx`
- ✅ Migrated environment variables (`VITE_` → `NEXT_PUBLIC_`)
- ✅ Updated `import.meta.env` → `process.env` references
- ✅ Updated `tsconfig.json` for Next.js
- ✅ Updated `package.json` scripts
- ✅ Removed Vite artifacts (vite.config, main.tsx, etc.)
- ✅ Created image import helper utility

## Next Steps
1. Run `npm install` to install Next.js
2. Run `npm run dev` to start development server
3. Work through the Critical Issues above
4. Run `npm run build` to verify production build
