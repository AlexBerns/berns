# Alexander Berns — personal website

A small, fast, dependency-free personal site. Warm, simple design with large
type, a round profile photo, a **moon / sun** light-dark toggle, and a
**flag-based** language switcher for four languages: **English** (default,
🇳🇿), **German** (🇩🇪), **Traditional Chinese** (🇹🇼), and **Japanese** (🇯🇵).

No build step, no framework — just static HTML/CSS/JS, ideal for GitHub Pages.

## Editing content

Everything you write lives in **`assets/js/content.js`**, with a block per
language (`en`, `de`, `zh`, `ja`). Sections are **About**, **Experience**, and
**Education**; the About text, job/school entries, and headings are translated
in each block. Shared links (GitHub, LinkedIn, Email, CV, Bio) live once in
`SITE.meta.links`.

- **CV link:** `SITE.meta.links` has `CV` pointing at `"#"` — set it to your CV
  PDF/URL. `Bio` jumps to the About section (`#about`).
- **Add a job / school:** copy one `{ ... }` item inside the relevant `items` array.
- **Remove a section:** delete its block in *every* language and its entry in
  `SITE.meta.sectionOrder`.
- **Profile photo:** replace `assets/img/alex-berns.jpg` with your own image
  (keep the name, or update `SITE.meta.photo` in `content.js`). It's shown as a
  round crop; adjust `object-position` on `.avatar` in `style.css` if the face
  isn't centered how you like.
- **Language order / flags:** reorder the `SITE.langs` array in `content.js`;
  flag SVGs live in `assets/img/flags/`.

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing to GitHub Pages

This repo is `AlexBerns/berns`, so the site publishes at
**https://alexberns.github.io/berns/**.

1. Commit and push all files to the `main` branch.
2. On GitHub: **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select branch **`main`**, folder **`/ (root)`**, then **Save**.
5. Wait ~1 minute, then open https://alexberns.github.io/berns/.

The included `.nojekyll` file tells Pages to serve the files as-is. All asset
paths are relative, so the site works correctly under the `/berns/` subpath.

> Want the shorter URL `https://alexberns.github.io/` instead? Rename this repo
> to `AlexBerns.github.io` (Settings → General → Repository name).

## File layout

```
index.html               page shell
assets/css/style.css     all styling + light/dark themes (CSS variables)
assets/js/content.js     ← YOUR CONTENT + translations (edit this)
assets/js/app.js          rendering, language switch, theme toggle
assets/img/alex-berns.jpg profile photo
assets/img/favicon.png    favicon (your face)
assets/img/flags/         nz / de / tw / jp flag icons
```
