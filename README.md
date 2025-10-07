# AI/ML Portfolio — Static Site (Vanilla HTML/CSS/JS)

A clean, responsive portfolio to showcase AI/ML projects with filters, modals, and links to repos/demos/case studies.
No frameworks or build step required. Deploy easily to GitHub Pages.

## Features
- Project grid with category filters (NLP/LLMs, CV, Time Series, MLOps)
- Details modal per project (tech stack, metrics, eval, lessons learned)
- Writing & talks section
- Light/dark theme toggle with persistence
- Minimal, modern design

## Quickstart
1. Edit `index.html` with your name and links.
2. Edit `projects.js` to add your projects (update images in `/assets`).
3. (Optional) Drop your `Resume.pdf` into `/docs` and update the link.
4. Open `index.html` locally to preview.
5. Deploy to GitHub Pages (Settings → Pages → Deploy from branch, root).

## Structure
```
.
├── assets/                # images/screenshots
├── docs/                  # put Resume.pdf here
├── HOW_TO_EDIT.md         # step-by-step guide
├── index.html             # main page
├── projects.js            # portfolio data (projects & writing)
├── script.js              # rendering, filters, modal, theme
└── styles.css             # styling
```
See site : https://tiffanydegbotse.github.io/ai-ml-portfolio/
## License
MIT
