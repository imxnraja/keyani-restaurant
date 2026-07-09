# Keyani Restaurant — Website

A premium, responsive restaurant website built with React, Tailwind CSS, React Router and Three.js.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Replacing placeholder assets

Real assets weren't included with the brief, so the site currently ships with clearly-marked
placeholders. Everything is centralized so swapping them is a one-line change per item:

| Asset | Where to change it |
|---|---|
| Restaurant logo | `public/logo.svg` — replace the file directly (keep the filename, or update the `<img src>` in `src/components/home/Hero.jsx`) |
| Hero background photo | `src/components/home/Hero.jsx` → the `backgroundImage` URL |
| Special dish photos & prices | `src/data/dishes.js` |
| Menu gallery photos (with prices) | `src/data/menuImages.js` — drop real photos into `src/assets/menu/` and point `image` at them |
| Customer reviews | `src/data/reviews.js` |
| Address / phone / email / hours / socials | `src/components/layout/Footer.jsx` and `src/pages/Contact.jsx` |
| Google Maps embed | `src/pages/Contact.jsx` → the `iframe src` (paste the restaurant's real "Embed a map" URL from Google Maps) |
| WhatsApp number | `src/pages/Contact.jsx` and `src/components/layout/Footer.jsx` (`wa.me/<number>`) |

All food photography currently used is royalty-free (Unsplash), loaded directly by URL — no
attribution files to manage, and no build step required to swap them.

## Project structure

```
src/
  components/
    ui/         Button, SectionHeading, GoldDivider, StarRating — shared primitives
    layout/     Navbar, Footer, LoadingScreen, BackToTop, ScrollToTop
    home/       Hero, HeroParticles (Three.js), About, SpecialDishes, ReviewsPreview
    menu/       MenuGallery, MenuModal
  pages/        Home, Menu, OrderNow, Reviews, Feedback, Contact
  data/         dishes.js, reviews.js, menuImages.js — all editable content lives here
  index.css     Design tokens, fonts, global utility classes
```

## Notes

- The order and feedback forms are fully functional client-side (validation, order summary,
  confirmation screen) but don't yet send data anywhere — wire them to your backend/email
  provider of choice in `src/pages/OrderNow.jsx` and `src/pages/Feedback.jsx`.
- The Three.js hero particle layer is lazy-loaded so it never blocks the initial page render,
  and respects `prefers-reduced-motion`.
- Tailwind tokens (colors, fonts, animations) live in `tailwind.config.js` — the whole palette
  can be restyled from that single file.
