# Xuanpei Chen portfolio

A React + Vite portfolio that builds to static files for GitHub Pages. The user experience is a smooth single-page application, while the deployment output is a standard static `dist/` directory.

## Commands

```bash
npm install
npm run dev
```

Use `npm run build` to generate the production-ready `dist/` folder. `npm run preview` serves that generated build locally.

## Content

All profile information, CV data, and project case studies live in `src/data/portfolio.js`. The project detail pages are generated from this data, so adding a project normally means adding one entry to the `projects` array.

The current portfolio includes seven CV-backed cases:

1. Magic Fan Made — Game System
2. Magic Fan Made — Game AI
3. MuteGravity — Face Swap AI
4. Auto Dump
5. Stop Ghosting Me
6. Birthday Gift for KaKa
7. TheDayOfSagittarius3

The downloadable PDF is stored in `public/files/CV_XuanpeiChen.pdf`.

## GitHub Pages

Push the project to the `main` branch, then open **Settings → Pages** in the GitHub repository and select **GitHub Actions** as the deployment source. The included workflow installs dependencies, builds the Vite output, and publishes it automatically.
