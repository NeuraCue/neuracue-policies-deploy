# NeuraCue Website

This is the official public-facing website for [NeuraCue](https://neuracue.com) — an AI-powered productivity platform
providing geofenced reminders and contextual task cues.

The site is built with **Next.js** and deployed on **Vercel** at the custom domain `neuracue.com`. It serves as the
landing and compliance site for the NeuraCue Android application.

This repo is public, while the core NeuraCue Android app is private under the same organization.

---

## 🌐 Live Website

🔗 [https://neuracue.com](https://neuracue.com)

---

## 📁 Project Structure

| File/Directory    | Description                                                 |
|-------------------|-------------------------------------------------------------|
| `src/app/`        | Next.js App Router pages and layouts                        |
| `src/components/` | Reusable React components                                   |
| `public/`         | Static assets (images, favicon, robots.txt, sitemap, CNAME) |
| `next.config.mjs` | Next.js configuration                                       |
| `package.json`    | Node.js dependencies and scripts                            |
| `vercel.json`     | Vercel deployment configuration                             |
| `CLAUDE.md`       | Documentation for Claude Code AI assistant                  |

---

## 🚀 Development

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Create static export
npm run build

# Output will be in the /out directory
```

---

## 🚀 Deployment

This project is configured for automatic deployment to **Vercel**.

### Deploy to Vercel

1. Push changes to the `main` branch
2. Vercel automatically builds and deploys
3. Changes are live within 1-2 minutes

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

---

## License

Content in this repository is licensed under
the [CC BY-NC-ND 4.0 License](https://creativecommons.org/licenses/by-nc-nd/4.0/).  
NeuraCue™ and the NeuraCue logo are trademarks of Jon DeMaagd. All rights reserved.
