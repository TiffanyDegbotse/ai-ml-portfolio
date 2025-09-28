# How to Edit Your Portfolio

1) **Update your name, links, and stats**
   - Open `index.html`:
     - Replace `Your Name`, `youremail@example.com`, and social links.
     - Update quick stats in the hero section if you want static numbers.

2) **Add or edit projects**
   - Open `projects.js` and edit the `PROJECTS` array.
   - For each project, fill in:
     - `title`, `category` (one of: NLP, CV, TimeSeries, MLOps), `img` path, `blurb`
     - `tags` and `badges`
     - `links`: `repo`, `demo`, `case`
     - `details`: HTML string for the modal (you can include lists, bold text, etc.).

3) **Writing section**
   - Edit the `WRITING` array in `projects.js` to add posts/talks.

4) **Images**
   - Replace placeholder images in `/assets` with your own screenshots (keep names or update paths in `projects.js`).

5) **Styling**
   - Adjust colors/spacing in `styles.css`. The site supports a light/dark toggle via the moon button.

6) **Deploy on GitHub Pages (no frameworks)**
   - Create a new **public** GitHub repo (e.g., `aiml-portfolio`).
   - Add the files from this folder to the repo root, commit, and push.
   - In GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
   - Set **Branch: main** and **Folder: / (root)**, then Save.
   - Wait for the page to build; your site will be at `https://<your-username>.github.io/aiml-portfolio/`.

7) **Custom domain (optional)**
   - In **Settings → Pages**, add your domain, and configure DNS with a CNAME to `<your-username>.github.io`.

8) **Bonus polish**
   - Add a Loom/YouTube 1–2 minute demo walkthrough per flagship project.
   - Link to Medium/Blog posts for at least 1–2 projects.
   - Include SHAP visualizations, ablation tables, and reproducibility steps in each repo.

---

## Common Q&A
- **Can I add categories?** Yes—add a new filter chip in `index.html` and use the same `category` string in projects.
- **Can I use Markdown for details?** Keep it HTML inside the template string, or extend `script.js` to render Markdown.
- **How do I track clicks?** Add `onClick` handlers in `script.js` and send to an analytics endpoint (or just log to console).
