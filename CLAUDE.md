# CLAUDE.md — working notes for this repo

Personal **research portfolio** for **Vu Hoang (Gary) Pham** — M.S. Computer
Engineering @ Drexel, PhD applicant. Live at **https://kagamirudo.github.io/**
(GitHub Pages, source: `main` / root). Today's framing: **~70% research /
30% engineering** — research is the primary track; industry is the backup if a
PhD doesn't land after the Drexel M.S.

## Stack / layout
Plain HTML + CSS + JS, no build step, no deps.
- `index.html` — section markup + hero.
- `styles.css` — research-journal theme (light/dark via CSS vars), responsive.
- `script.js` — **all content lives in the DATA arrays at the top**:
  `RESEARCH`, `COLLABORATORS`, `PUBLICATIONS`, `EXPERIENCE`. Edit these to change
  content; render functions below them build the DOM.
- `assets/papers/*.pdf` — publication PDFs. `assets/img/avatar.jpg` — hero photo.
  `assets/Gary-Pham-Resume.pdf` — resume (linked in hero + contact).
- `.nojekyll` present so Pages serves files as-is.

## ⚠️ Pushing (important — SSH is denied)
The repo belongs to GitHub account **`kagamirudo`**, but the local SSH key auths
as **`garypham-credit`** (work account), so `git push` over SSH is **denied**.
Always push like this:
```bash
gh auth switch --user kagamirudo
git push          # remote is HTTPS; gh credential helper supplies the token
```
Remote is already `https://github.com/kagamirudo/...`. Restore the work account
afterward only if asked (`gh auth switch --user garypham-credit`).

Keep **commit messages short/generic about the Credit Genie job** — a verbose
message describing the Payments/Plaid work was once blocked by the auto-mode
classifier ("Excess Sensitive Detail").

## Keeping papers in sync (do this when asked to "update papers")
Source LaTeX + PDFs live in **`/Users/garypham/Drexel/rubik_adjacency/`** (the
cube combinatorics series). When asked to refresh: for each `*.pdf` there, if its
sha differs from `assets/papers/`, copy it in; also watch for **new** papers
(read the `.tex` `\title`/abstract, then add a `PUBLICATIONS` entry + copy the
PDF). As of 2026-10-14 the folder also builds `cube_fmc` and `cube_fmc_methods`.
These papers use `\date{\today}` so their **year is 2026**, not 2025.

Current publications (6): cube_coloring, cube_uniqueness, cube_reachable,
cube_fmc, cube_fmc_methods (all **2026**, author V. H. Pham), plus the quantum
**LMSR paper** (`quantum_lmsr.pdf`, **2025**, co-authored **Mark Boady & Gary
Pham**, from the GitHub repo `kagamirudo/Quantum-Research-2024` root `paper.pdf`).

## Research + advisors (verified)
- **FPGA** — M.S. thesis, advisor **Prof. Prawat Nagvajara** (Drexel ECE).
  It's a *compiler* emitting nearest-neighbor systolic arrays (LU + one-sided
  Jacobi SVD); BLV grid gives up to **7.7×** speedup. Repo:
  github.com/kagamirudo/FPGA (its README is the source of truth).
- **Quantum** — senior project, advisor/co-author **Prof. Mark Boady** (Drexel
  CCI). LMSR via Grover + QRAM, **O(√N log N)** vs classical O(N).
- **Combinatorics** — the Rubik's-cube adjacency/FMC series (independent).
- Collaborator card: **Prof. Nagarajan Kandasamy** (Drexel ECE). Faculty-page
  URLs for all three were checked (HTTP 200).

## Work experience (chronological, newest first)
Credit Genie (Sep 2026–present, **Plymouth Meeting, PA**, Payments Engineering —
keep generic/non-confidential) → ImesPro (Jun–Sep 2026; firmware + **UAIP** ADK
agent + **VisionTestAI** clinic vision-screening platform, all private repos) →
Drexel Material Lab → Medcrypt → FPT Software. Private repos are shown but marked
🔒 (no public links — they'd 404).

## OPEN ITEMS (ask Gary / finish later)
1. **Prof. Kandasamy note** — his `COLLABORATORS` card still has a bracketed
   placeholder `note` and renders dashed. Needs one line on what Gary worked on
   with him.

## Gotchas already fixed (don't regress)
- **Sticky nav**: both `html` and `body` must use `overflow-x: clip` (NOT
  `hidden`) — `overflow:hidden` on a sticky ancestor silently kills
  `position: sticky`. The `clip` value still prevents mobile horizontal overflow.
- **Avatar**: can't be pulled from a chat paste — needs an actual file on disk.
  Current one is `assets/img/avatar.jpg` (Gary's formal headshot).
- VisionTestAI repo is SSH-only at `code.primetek.ai:775` (not GitHub); clone to
  a temp dir to read, don't rely on the GitHub API for it.
