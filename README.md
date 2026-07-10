<<<<<<< HEAD
# Vikkymediatech Web World

Production-ready marketing website for **Vikkymediatech Web World**, built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion and next-themes.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/                # Next.js App Router pages
    about/
    academy/
    blog/
    careers/
    contact/
    portfolio/
    services/
    layout.tsx         # Root layout, fonts, metadata, navbar/footer
    page.tsx            # Home page
    globals.css
  components/
    layout/             # Navbar, Footer, Logo, ThemeToggle, PageHero
    sections/            # Home page sections (Hero, Stats, Services, etc.)
    ui/                  # Reusable primitives (Button, Container, SectionHeading)
    theme-provider.tsx
    providers.tsx
  data/
    site.ts              # All brand/business content in one place
  lib/
    utils.ts
public/
  assets/                # Logo, favicon and founder photo (extracted from brand kit)
```

## Brand assets

The logo icon, horizontal logo and founder photo were extracted from the provided brand flyer and optimized
(trimmed, transparent background) in `public/assets`. Favicons were generated at 16/32/180/192/512px.

## Notes

- Dark mode is implemented via `next-themes` and toggled from the navbar.
- Fonts (Poppins for display, Inter for body) are self-hosted via `@fontsource` — no runtime Google Fonts
  request is made, so the site builds and renders reliably even in network-restricted environments.
- The contact form uses `react-hook-form` + `zod` for validation; wire the `onSubmit` handler in
  `src/app/contact/contact-form.tsx` to your email/API endpoint of choice.
- Replace placeholder copy in `src/data/site.ts` (stats, testimonials, blog posts, portfolio projects) with
  real content as it becomes available.
- To swap the Google Maps placeholder on the Contact page for a live embed, replace the placeholder `div` in
  `src/app/contact/page.tsx` with an `<iframe>` pointing at your Google Maps embed URL.
=======
# vikkymediatech-web-world
Official website of Vikkymediatech Web World — a technology company specializing in web development, software solutions, technology education, and digital innovation.
>>>>>>> 2c638c33b0f24500e4ed0672be1091398ec40fb8
