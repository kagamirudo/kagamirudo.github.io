# kagamirudo.github.io

Personal portfolio for **Vu Hoang (Gary) Pham** — Computer Engineering @ Drexel University.

Live site: https://kagamirudo.github.io/

## Stack

Plain, dependency-free **HTML + CSS + JavaScript**. No build step — GitHub Pages
serves the files directly.

```
index.html    # markup / content
styles.css    # theme + layout (light/dark)
script.js     # project cards, theme toggle, scroll reveal
.nojekyll     # tell GitHub Pages to skip Jekyll processing
```

## Editing

- **Projects** — edit the `PROJECTS` array in `script.js`.
- **About / skills / contact** — edit the matching sections in `index.html`.
- **Colors / fonts** — edit the CSS custom properties at the top of `styles.css`.

Update the `mailto:` and LinkedIn links in the Contact section of `index.html`.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

Pushing to the default branch publishes automatically once GitHub Pages is
enabled (Settings → Pages → Source: `main` / root).
