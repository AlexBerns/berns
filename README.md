# Alex Berns — personal website

Static, dependency-free site — four languages (EN / 日本語 / 繁中 / DE), dark-by-default with a light toggle, no build step. Live at **https://alexberns.github.io/berns/** (GitHub Pages).

## Edit
All text and translations live in **`assets/js/content.js`**. Styling in `assets/css/style.css`, logic in `assets/js/app.js`.

## Preview
```sh
python3 -m http.server 8000   # → http://localhost:8000
```

## Deploy
Push to `main`; GitHub Pages redeploys in ~1 min. (Push once and wait — rapid pushes get throttled.)

## Files
```
index.html            page
bio.html              terminal-style bio
assets/js/content.js  ← content + translations (edit this)
assets/js/app.js      rendering / language / theme
assets/css/style.css  styling + themes
assets/img/           photo, favicon, flags
cv/berns-cv-en.tex    English CV (LaTeX source)
```
