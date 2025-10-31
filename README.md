# The Conscious League's Rulebook - Interactive Site

Interactive web companion to The Conscious League's Rulebook, built with Astro.

## Features

- **Chapters**: All 11 chapters (Preface + 9 chapters + Epilogue) fully converted
- **Calculators**: 5 interactive formula calculators:
  - Time Violence Score (TV(S))
  - Relative Time Severity (TSS)
  - Consciousness Index (C(S))
  - Time Justice Triad (J)
  - Hybrid Time Violence (η^HA)
- **Dashboard**: Time Justice Triad Dashboard with 3 synchronized panels
- **Formula Rendering**: KaTeX for beautiful mathematical notation

## Tech Stack

- **Astro**: Content-first static site framework
- **KaTeX**: LaTeX formula rendering
- **Chart.js**: For interactive visualizations
- **Vanilla CSS**: Simple, maintainable styling

## Development

```bash
# Install dependencies
cd site
npm install

# Start dev server (runs on http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is configured for GitHub Pages deployment via GitHub Actions.

The workflow automatically:
- Builds the site on push to `main`/`master`
- Deploys to GitHub Pages

To enable:
1. Go to repository Settings → Pages
2. Source: Deploy from a branch → select `gh-pages` (or configure Actions)
3. The GitHub Actions workflow will handle deployment automatically

## Project Structure

```
site/
├── src/
│   ├── pages/          # Astro pages (file-based routing)
│   │   ├── chapters/   # Chapter pages
│   │   └── calculate/  # Calculator pages
│   ├── components/      # Reusable components
│   │   ├── layout/      # Base layout, navigation
│   │   ├── shared/      # Formula, Theorem components
│   │   ├── calculators/ # Calculator components
│   │   └── dashboards/  # Dashboard components
│   ├── scripts/         # Utility JavaScript (formulas, etc.)
│   └── styles/          # Global CSS
└── public/              # Static assets
```

## Status

✅ **Complete Features:**
- All chapters converted and rendered
- All 5 calculators built and functional
- Time Justice Triad Dashboard complete
- KaTeX formula rendering working
- Full navigation structure
- Responsive design

Ready for production deployment!
