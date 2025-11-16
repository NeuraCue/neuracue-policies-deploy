# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **NeuraCue public-facing website** — a Next.js static site deployed on Vercel at `neuracue.com`. It serves as the landing page and policy/compliance site for the NeuraCue Android app (geofenced AI-powered reminders).

The core NeuraCue Android app repository is private. This public repo contains only the web presence and required legal documentation for Google Play compliance.

## Architecture

### Next.js with App Router

- **Next.js version**: 14.2+ with App Router
- **TypeScript**: Fully typed codebase
- **Build system**: Static export (`output: 'export'` in next.config.mjs)
- **Deployment**: Vercel with automatic deployments from `main` branch
- **Custom domain**: Configured via `public/CNAME` and Vercel settings

### Directory Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with metadata and structure
│   │   ├── page.tsx            # Home page (/)
│   │   ├── globals.css         # Global styles
│   │   ├── privacy/
│   │   │   └── page.tsx        # Privacy policy page (/privacy)
│   │   └── terms/
│   │       └── page.tsx        # Terms of service page (/terms)
│   └── components/
│       ├── Footer.tsx          # Footer with live Pacific time clock
│       └── CurrentDate.tsx     # Client component for dynamic date
├── public/                     # Static assets served at root
│   ├── assets/images/          # Logo and image files
│   ├── favicon.ico             # Site favicon
│   ├── robots.txt              # Search engine directives
│   ├── sitemap.xml             # SEO sitemap
│   └── CNAME                   # Custom domain config
├── docs/                       # Documentation and guidance files
│   ├── CLAUDE.md               # Comprehensive AI development guide
│   ├── JEKYLL.md               # Legacy Jekyll setup (historical)
│   ├── TECH.md                 # Tech stack and AI workflow considerations
│   └── ...
├── next.config.mjs             # Next.js configuration
├── package.json                # Node.js dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── vercel.json                 # Vercel deployment configuration
└── CLAUDE.md                   # This file
```

### React Components & TypeScript

- **React Server Components**: Default in App Router (except client components marked with `'use client'`)
- **Client Components**: Used for interactivity (Footer with live clock, CurrentDate)
- **Metadata API**: Page-level metadata using Next.js Metadata export
  ```typescript
  export const metadata: Metadata = {
    title: 'Page Title',
    description: 'Page description',
    alternates: { canonical: 'https://neuracue.com/page' },
  };
  ```
- **TypeScript**: All files use `.tsx` extension with strict type checking

### Styling

- **Global CSS**: `src/app/globals.css` for base styles
- **Inline styles**: Component-level styling using style objects
- **CSS-in-JS**: Using Next.js styled-jsx for scoped styles (see Footer component)
- **Color scheme**: Dark blue background (`#191970`), white text, orange accents (`#FF7A1A`)
- **Responsive**: Mobile-first with flexbox layouts
- **No external CSS framework**: Pure CSS, no Tailwind/Bootstrap

### Dynamic Features

- **Live clock**: React component in `src/components/Footer.tsx` displays Pacific time with auto-updating seconds
- **Dynamic dates**: `CurrentDate` component for effective dates on legal pages
- **Schema.org markup**: JSON-LD structured data in root layout for SEO
- **Client-side hydration**: Used only where necessary (clock, dates)

## Development Commands

### Local Development

```bash
# Install dependencies
npm install

# Run development server (with hot reload)
npm run dev
# Opens at http://localhost:3000

# Build for production (static export)
npm run build
# Output in /out directory

# Start production server (after build)
npm start

# Lint code
npm run lint
```

### Deployment

Vercel automatically builds and deploys from the `main` branch when you push changes.

```bash
# Standard workflow
git add .
git commit -m "Update [description]"
git push origin main
# Wait 1-2 minutes for Vercel to rebuild and deploy
```

**Manual deployment** (requires Vercel CLI):
```bash
npm install -g vercel
vercel --prod
```

## Key Files to Know

### Critical Files (Do Not Delete)

- `public/CNAME` — Required for custom domain. Contains `neuracue.com`
- `src/app/privacy/page.tsx` — Required by Google Play for app store listing
- `src/app/terms/page.tsx` — Required by Google Play for app store listing
- `public/sitemap.xml` — SEO indexing for search engines
- `public/robots.txt` — Search crawler directives
- `next.config.mjs` — Next.js configuration
- `vercel.json` — Vercel deployment configuration

### Documentation Files (Reference Only)

- `docs/CLAUDE.md` — 26KB guide on using Claude AI for Android development
- `docs/JEKYLL.md` — Legacy Jekyll setup (historical reference)
- `docs/TECH.md` — Tech stack overview, AI workflow tips
- `README.md` — Project overview for GitHub

## Editing Guidelines

### Adding New Pages

1. Create new directory in `src/app/` (e.g., `src/app/about/`)
2. Add `page.tsx` file:
   ```typescript
   import type { Metadata } from 'next';

   export const metadata: Metadata = {
     title: 'About - NeuraCue',
     description: 'About NeuraCue and our mission',
     alternates: { canonical: 'https://neuracue.com/about' },
   };

   export default function AboutPage() {
     return (
       <>
         <h1>About NeuraCue</h1>
         {/* Page content */}
       </>
     );
   }
   ```
3. Update `public/sitemap.xml` with new page URL
4. Link from existing pages using Next.js `<Link>` component

### Modifying Existing Pages

- **Privacy/Terms**: Edit `src/app/privacy/page.tsx` or `src/app/terms/page.tsx`. Dates update via `<CurrentDate />` component
- **Landing page**: Edit `src/app/page.tsx` content section
- **Footer**: Edit `src/components/Footer.tsx` to affect all pages
- **Layout**: Edit `src/app/layout.tsx` for site-wide structure or metadata changes
- **Global styles**: Edit `src/app/globals.css` for site-wide CSS

### SEO Best Practices

- Keep `<title>` tags descriptive and under 60 characters
- Write `description` meta tags between 120-160 characters
- Update metadata for Open Graph social sharing
- Maintain `canonical` URLs to avoid duplicate content issues
- Keep `public/sitemap.xml` updated when adding/removing pages
- Use Schema.org structured data for rich search results (configured in root layout)

## Common Tasks

### Update Site Metadata

Edit `src/app/layout.tsx` metadata export:
```typescript
export const metadata: Metadata = {
  title: 'NeuraCue',
  description: 'Policy and compliance pages for the NeuraCue Android app...',
  // ...
};
```

### Change Color Scheme

Edit `src/app/globals.css`:
```css
body {
  background: #191970;  /* Dark blue */
  color: #fff;          /* White text */
}
```

Footer accent color in `src/components/Footer.tsx`:
```typescript
<footer style={{ color: '#FF7A1A' }}>  {/* Orange */}
```

### Add/Update Images

1. Place images in `public/assets/images/`
2. Reference in components:
   ```typescript
   import Image from 'next/image';

   <Image
     src="/assets/images/filename.png"
     alt="Description"
     width={200}
     height={200}
     unoptimized
   />
   ```
3. Optimize images before adding (use WebP or optimized PNG/JPG)
4. Update metadata for social sharing in page.tsx

### Modify Live Clock

The clock displays Pacific time by default. To change timezone, edit `src/components/Footer.tsx`:
```typescript
const ZONE = 'America/Los_Angeles';  // Change to desired timezone
```

## Git Workflow

This repository follows a simple main-branch workflow:

```bash
# Clone repository
git clone https://github.com/NeuraCue/website.git
cd website

# Install dependencies
npm install

# Make changes
# ... edit files ...

# Test locally
npm run dev

# Commit and push
git add .
git commit -m "Description of changes"
git push origin main
```

**Branch**: `main`

## Important Notes

- **This is a public repository** — never commit sensitive data (API keys, credentials, PII)
- **Vercel deployment**:
  - Automatic builds from `main` branch
  - Deploy previews for all branches
  - Custom domain configured via Vercel dashboard
  - Edge network for fast global delivery
- **Mobile app is private** — This repo only contains web presence; actual Android app is in a separate private repository
- **Custom domain**: Configured through DNS provider (pointing to Vercel) + `public/CNAME` file

## Vercel-Specific Features

- **Automatic HTTPS**: SSL certificates managed automatically
- **Zero-config deployment**: Push to deploy
- **Preview deployments**: Every branch gets a unique URL
- **Analytics**: Available in Vercel dashboard
- **Edge functions**: Not used in current static export setup

## AI Workflow Considerations (from docs/TECH.md)

When working with AI tools on this codebase:

1. **Verify AI outputs** — Always double-check generated code before committing
2. **Incremental changes** — Add features one at a time; easier to revert if issues arise
3. **Mind placeholders** — AI won't generate sensitive data; you must provide real values
4. **Audit regularly** — Have AI review entire codebase periodically to catch inconsistencies
5. **Context awareness** — Remind AI what exists in the codebase to prevent rewrites
6. **One step at a time** — AI works better with focused, sequential tasks

## License & Trademarks

- Content: CC BY-NC-ND 4.0 License
- NeuraCue™ and logo: Trademarks of Jon DeMaagd
- See `LICENSE` and `TRADEMARK.md` for details

## Support

For issues with this website repository, contact via the email address provided in the Privacy Policy or open an issue on GitHub.