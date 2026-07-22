# SRI RAJAGANAPATHI LOGISTICS — Corporate Website

Premium, enterprise-grade corporate website for **Sri Rajaganapathi Logistics (SRL)** — a Salem-based logistics partner specialising in pharmaceutical distribution, cold-chain transportation for vaccines and medicines, and industrial / commercial goods delivery across Tamil Nadu and India.

> Built with **React 19 · Vite · Material UI v6 · Framer Motion · React Router** — no template, no boilerplate flourishes, no filler. Every section is hand-tuned for a top-tier agency finish.

---

## ✨ Highlights

- Modern, spacious, brand-forward design with glassmorphism, soft gradients & premium type.
- Full **Framer Motion** interaction layer: staggered entrances, animated hero route, floating cards, counters, testimonial carousel, gallery lightbox.
- Sticky glass **navigation** with hide-on-scroll-down / reveal-on-scroll-up, active-section underline (`layoutId` shared element) and animated mobile drawer.
- **Light / Dark mode** with system-preference detection + localStorage persistence.
- **Accessible**: semantic HTML, ARIA labels, focus-visible ring, `prefers-reduced-motion` respected.
- **SEO ready**: meta, OG, Twitter, `LocalBusiness` JSON-LD, `sitemap.xml`, `robots.txt`.
- **Performance**: manual chunk splitting, lazy-loaded routes, SVG visuals (no heavy images required), font preconnect.

---

## 🧱 Project structure

```
sri-rajaganapathi-logistics/
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   ├── og-image.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── common/    (Section, Logo, Seo, PageLoader, ScrollProgress, WhatsAppFab, BackToTop)
│   │   ├── layout/    (Navbar, Footer)
│   │   └── sections/  (Hero, HeroVisual, About, Services, WhyChoose, Industries,
│   │                   Process, Stats, Gallery, Testimonials, ServiceAreas, Contact)
│   ├── constants/     (company.js, services.js, content.js)
│   ├── hooks/         (usePrefersReducedMotion, useScrollDirection, useCountUp)
│   ├── pages/         (Home, NotFound)
│   ├── styles/        (global.css)
│   ├── theme/         (index.js, ThemeProvider.jsx)
│   ├── utils/         (format.js)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── .env.example
```

---

## 🚀 Getting started

### Prerequisites

- **Node.js ≥ 18.18** (Node 20 LTS recommended)
- **npm ≥ 9** (or pnpm / yarn — commands adapt trivially)
- **Git** (optional)
- Recommended VS Code extensions: *ESLint*, *Prettier*, *Auto Rename Tag*, *Material Icon Theme*.

### Install & run

```bash
# 1. Install dependencies
npm install

# 2. (Optional) copy env template
cp .env.example .env.local

# 3. Start dev server (http://localhost:5173)
npm run dev

# 4. Production build
npm run build

# 5. Preview production build (http://localhost:4173)
npm run preview
```

### Troubleshooting

| Issue | Fix |
|---|---|
| `EACCES` / permission on install | Use a Node version manager (nvm-windows / nvm / volta) and reinstall. |
| Port 5173 already in use | Set `server.port` in `vite.config.js`, or `PORT=xxxx npm run dev`. |
| Fonts not rendering on first paint | Check that `<link>` preconnect to `fonts.gstatic.com` in `index.html` isn’t blocked by a corporate proxy. |
| Map iframe blocked | Some corporate networks block `google.com/maps` — try from a personal network for local dev. |

---

## 🎨 Brand tokens

Defined in [`src/theme/index.js`](src/theme/index.js):

| Token | Value |
|---|---|
| Primary (Deep Corporate Blue) | `#0A2B5C` |
| Secondary (Warm Orange) | `#F5A623` |
| Accent (Emerald Green) | `#10B981` |
| Type: display / body | Manrope / Inter (Google Fonts) |

Change these once and the whole site re-themes.

---

## 🖼 Replacing placeholders

- **Logo** – replace `public/logo.svg` (or update `src/components/common/Logo.jsx`).
- **OG image** – replace `public/og-image.svg` (recommended: 1200×630 PNG/JPG).
- **Gallery** – swap the branded SVG tiles in `src/components/sections/Gallery.jsx` for real operational photos (fleet, warehouse, cold-chain packaging, delivery moments).
- **Testimonials** – curate real quotes in `src/constants/content.js`.
- **Coverage map** – the schematic in `src/components/sections/ServiceAreas.jsx` can be replaced with a real GeoJSON map (`react-simple-maps` + Tamil Nadu GeoJSON) without changing the surrounding grid.

---

## 🚢 Deployment

### Vercel

1. Push the repo to GitHub / GitLab / Bitbucket.
2. On Vercel → *New Project* → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Add env vars from `.env.example` if needed.
5. Deploy.

### Netlify

1. New site → *Import from Git*.
2. Build command: `npm run build`. Publish directory: `dist`.
3. Add a `_redirects` file to `public/` for SPA routing:
   ```
   /*    /index.html    200
   ```

### Firebase Hosting

```bash
npm i -g firebase-tools
firebase login
firebase init hosting          # public: dist, single-page: yes
npm run build
firebase deploy --only hosting
```

### AWS S3 + CloudFront (optional)

1. `npm run build` → upload `dist/` to an S3 bucket (static website hosting enabled).
2. Create a CloudFront distribution in front of the bucket.
3. Add a custom-error-response mapping `403/404 → /index.html (200)` for SPA routes.

---

## 📇 Business details baked in

Extracted from the official SRL visiting card and used throughout the site:

- **Company**: Sri Rajaganapathi Logistics
- **Address**: M.K.S. Complex, Salem to Chennai Bye-Pass, 1375, Kumaragiri Murugan Kovil Adivaram, Kumaragiri, Ammapet, Salem – 636 003
- **Phone**: +91 94427 31439
- **Email**: srirajaganapathilogistics@gmail.com
- **Instagram**: https://www.instagram.com/srirajaganapathilogistics_001
- **LinkedIn**: https://www.linkedin.com/in/sri-rajaganapathi-logistics-srl-a6373b422/
- **Regular Service**: Chennai, Villupuram, Pondicherry, Salem, Erode, Coimbatore
- **Local Service**: Karur, Paramathi Velur, Mohanur, Namakkal, Budhan Santhai, Rasipuram, Mallur, Salem, Omalur, Thoppur, Dharmapuri, Kariyamangalam, Kaveripattinam, Krishnagiri, Solagiri, Hosur

All of the above are centrally editable in [`src/constants/company.js`](src/constants/company.js).

---

## ✅ Quality check (before publishing)

- [ ] `npm run build` completes with no errors.
- [ ] `npm run lint` is clean.
- [ ] Test navigation across desktop, tablet and phone widths.
- [ ] Replace gallery tiles with real photography.
- [ ] Update Google Maps address if any street name has changed.
- [ ] Set `VITE_SITE_URL` to your production domain and update `index.html` OG/canonical URLs.
- [ ] Verify Lighthouse Performance / Accessibility / Best Practices / SEO ≥ 95.

---

© Sri Rajaganapathi Logistics — All rights reserved.
