# kagamirudo.github.io

Research-forward portfolio for **Vu Hoang (Gary) Pham** — M.S. Computer Engineering
@ Drexel University, PhD applicant.

Live site: https://kagamirudo.github.io/

Weighted roughly **70% research / 30% engineering** — research is the primary
track, with industry experience as the backup.

## Stack

Plain, dependency-free **HTML + CSS + JavaScript**. No build step — GitHub Pages
serves the files directly. Fully responsive (mobile nav, single-column reflow).

```
index.html         # section markup
styles.css         # research-journal theme (light/dark) + responsive layout
script.js          # all content lives in the DATA arrays at the top
assets/papers/     # publication PDFs
.nojekyll          # skip Jekyll processing
```

## Editing content

Everything is data-driven. Open `script.js` and edit the arrays at the top:

- `RESEARCH` — research threads (FPGA, quantum, combinatorics).
- `COLLABORATORS` — advisors / collaborators. **Replace the placeholder names.**
- `PUBLICATIONS` — papers and project writeups (PDFs live in `assets/papers/`).
- `EXPERIENCE` — work timeline. **Fill in the Credit Genie placeholder.**

### Placeholders to replace
- Advisor names in `COLLABORATORS` (shown in amber/dashed until filled).
- The **Credit Genie** experience entry (dashed card) — add real bullets + stack.

## Adding a paper

1. Drop the PDF in `assets/papers/`.
2. Add an entry to the `PUBLICATIONS` array with `href: "assets/papers/your.pdf"`.

## Local preview

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy

Push to `main`; GitHub Pages redeploys automatically.
