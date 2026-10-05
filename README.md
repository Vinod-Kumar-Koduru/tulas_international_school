# Tulas International School (TIS) Homepage

A responsive school homepage built to introduce Tulas International School,
showcase student activities, share school highlights, and direct prospective
families to an admissions enquiry.

## Project status

- **Live website:** Not deployed yet
- **Source repository:** Not provided
- **Application type:** React single-page app built with Vite (not Next.js)

## What the project includes

The homepage renders these sections in order:

1. **Hero** — School introduction, headline, student image, feature callouts,
   and links to learn more.
2. **About** — School introduction and key points about the learning
   environment.
3. **School highlights** — Campus video and animated school statistics.
4. **Sports and activities** — Image cards for archery, cycling, swimming,
   horse riding, volleyball, and football.
5. **Testimonials** — Quotes from parents and an alumnus.
6. **Admissions** — Enquiry form for parent/guardian name, email, phone, class,
   and an optional message.
7. **Footer/contact** — School details, Google Maps link, section navigation,
   and links to the school's website.

The fixed navigation includes links to the homepage sections, a mobile menu,
and a light/dark theme toggle. The page also includes scroll progress and
scroll-triggered reveal animations.

## Technology

- React 18
- Vite 5
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Run locally

### Requirements

- Node.js 18 or newer
- npm

Install the locked dependencies and start the development server:

```bash
npm i
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

The production-ready static site is generated in `dist/`. The preview command
serves that build locally.

## Deployment

No hosting provider or live deployment is configured in this project yet. It
can be deployed to Vercel, Netlify, or another static host using:

* Live Link:- 

- **Build command:** `npm run build`
- **Output directory:** `dist`

After deployment, replace the status above with the actual public URL. A
repository URL can be added once one is available.

## Source structure

```text
tis-homepage/
├── index.html                         # HTML shell, metadata, font, initial theme
├── package.json                       # Dependencies and npm scripts
├── package-lock.json                  # Locked dependency versions
├── vite.config.js                     # React and Tailwind Vite plugins
├── README.md                          # Project and setup documentation
└── src/
    ├── main.jsx                       # React entry point and global stylesheet
    ├── App.jsx                        # App composition and homepage section order
    ├── components/
    │   ├── animation/
    │   │   ├── CustomCursor.jsx       # Pointer-following cursor for fine pointers
    │   │   ├── Reveal.jsx              # Viewport reveal animation wrapper
    │   │   └── ScrollProgress.jsx      # Reading progress bar
    │   ├── layout/
    │   │   ├── Footer.jsx              # Contact details, map, links, copyright
    │   │   └── Navbar.jsx              # Desktop/mobile navigation and skip link
    │   ├── sections/
    │   │   ├── About.jsx               # School introduction and key points
    │   │   ├── Admissions.jsx          # Admissions enquiry form
    │   │   ├── Hero.jsx                # Hero headline, image, and calls to action
    │   │   ├── Programs.jsx            # Sports and activities cards
    │   │   ├── Stats.jsx               # Campus video and animated statistics
    │   │   └── Testimonials.jsx        # Community testimonial cards
    │   └── ui/
    │       └── ThemeToggle.jsx         # Light/dark mode control
    ├── data/
    │   └── content.js                  # Navigation, copy, statistics, and links
    ├── hooks/
    │   └── useTheme.js                 # Theme state and localStorage persistence
    └── styles/
        └── index.css                   # Tailwind import, theme, and global styles
```

## Updating content

Edit `src/data/content.js` to change navigation labels, page text, statistics,
activity-card content, school address, map URL, or school website URL. Section
layout and behavior live in `src/components/sections/`.

## Form and media notes

- The admissions form opens a prefilled email addressed to `info@tis.edu.in`.
  It does **not** send or store submissions itself. Connect a backend or form
  service before relying on it to collect leads.
- The logo, hero/activity images, and campus video use external media URLs and
  therefore require an internet connection to load.
- The theme is saved in `localStorage` and initially follows the visitor's
  system preference. Framer Motion and the global styles respect reduced-motion
  preferences.
