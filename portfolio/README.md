# Vittal Mani portfolio

Static HTML/CSS/JavaScript portfolio. No build step is required.

## Preview
Run `python3 -m http.server 8000` from this directory, then open http://localhost:8000.

## Update
- `index.html`: biography, experience, skills, education, certificates and contact.
- `projects-data.js`: four project summaries, case studies, status and links.
- `project.html`: reusable project detail page.
- `script.js`: project filtering, case study rendering, theme preference.
- `style.css`: responsive light/dark styles.
- `resume.pdf`: supplied IBM resume, retained as provided. Replace with a general resume when ready.

## Netlify
Replace the contents of the repository's `portfolio` folder with this folder. Keep the existing Netlify publish directory set to `portfolio` (or the current equivalent). No build command. Commit and push through your normal workflow. The live site is not changed by downloading this package.

## Content checks before release
Confirm employment dates and responsibilities. Project metrics are labeled as reported; add evaluation documentation. Add remaining repository/demo links to projects-data.js. Streamlit/Docker plans and unfinished integration are explicitly scoped. Existing certificate links and image assets are preserved without guessing which Coursera course each link represents.
