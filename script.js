// ============================================================
//  DATA  — edit these arrays to update the site content.
// ============================================================

// ---- Research threads (primary track, ~70%) ----
const RESEARCH = [
  {
    icon: "⚙️",
    area: "Hardware Acceleration",
    title: "A Compiler for Nearest-Neighbor Systolic Arrays on FPGA",
    venue: "Drexel M.S. Thesis · Jun 2025 – Present",
    advisor: "ADVISOR_FPGA",
    points: [
      "Building a compiler + hardware-template flow that emits systolic PE meshes with <strong>strict nearest-neighbor connectivity</strong> and AXI4-Stream–compliant boundaries by construction, driven from one shared PE template.",
      "Two case studies from the same template — <strong>LU decomposition</strong> and <strong>one-sided Jacobi SVD</strong> — benchmarked head-to-head against Vitis HLS on identical C source; emitted arrays reach <strong>&gt;90% pipeline utilization</strong>.",
      "A block-parallel (BLV) schedule delivers up to <strong>7.7× speedup</strong> over the serial core (N=8: 3.85×), verified end-to-end against NumPy golden references in cycle-accurate simulation.",
    ],
    tags: ["Vitis HLS", "VHDL", "Systolic Arrays", "AXI4-Stream", "Xilinx Zynq"],
    links: [{ label: "Code (FPGA)", href: "https://github.com/kagamirudo/FPGA" }],
  },
  {
    icon: "🧬",
    area: "Quantum Algorithms",
    title: "Quantum Lexicographically-Minimum String Rotation (LMSR)",
    venue: "Drexel Senior Project (CI 491–493) · Sep 2024 – Jun 2025",
    advisor: "ADVISOR_QUANTUM",
    points: [
      "Architected a quantum LMSR algorithm in <strong>Qiskit using Grover's amplification</strong>, reducing search complexity from O(N log N) to <strong>O(√N)</strong> (~320 fewer oracle calls).",
      "Deployed a 6-qubit LMSR circuit on <strong>IBM Quantum hardware</strong>: 100 runs across 20 instances at <strong>≥97% success rate</strong>, validated against classical benchmarks.",
      "Applied it to benzenoid edge-code recognition over 50 molecular graphs for Drexel's Week of Excellence, cutting end-to-end time by 30%.",
    ],
    tags: ["Qiskit", "Grover's Algorithm", "IBM Quantum", "Benzenoids"],
    links: [{ label: "Code & Notebooks", href: "https://github.com/kagamirudo/Quantum-Research-2024" }],
  },
  {
    icon: "🧩",
    area: "Combinatorics",
    title: "Adjacency-Free Colorings of the n×n×n Cube",
    venue: "Independent · 2025 — a three-note series",
    advisor: null,
    points: [
      "A self-authored trilogy on whether a six-color cube stickering must contain two same-colored orthogonal neighbors — and whether such colorings are unique.",
      "Combines a bipartite-graph proof, a super-exponential counting lower bound, and <strong>exhaustive computer search</strong> over the half-turn subgroup (order 663,552) and the full Rubik's group.",
      "Key results: a checkerboard coloring achieves zero monochromatic neighbors; the physical half-turn pattern (Pons Asinorum) is unique, but the full group admits the superflip as a second solution.",
    ],
    tags: ["Graph Theory", "Group Theory", "Exhaustive Search", "Python"],
    links: [{ label: "Read the papers ↓", href: "#publications" }],
  },
];

// ---- Collaborators & advisors ----
// Prof. Kandasamy's `note` still needs one line (card renders dashed until then).
const COLLABORATORS = [
  {
    key: "ADVISOR_FPGA",
    name: "Prof. Prawat Nagvajara",
    role: "M.S. thesis advisor — FPGA / Computer Architecture",
    org: "Drexel University, Dept. of Electrical & Computer Engineering",
    note: "Advises my thesis on compiler-emitted nearest-neighbor systolic arrays for LU decomposition and Jacobi SVD.",
    profile: "https://drexel.edu/engineering/about/faculty-staff/N/nagvajara-prawat/",
    placeholder: false,
  },
  {
    key: "ADVISOR_QUANTUM",
    name: "Prof. Mark Boady",
    role: "Senior-project advisor — Quantum Algorithms",
    org: "Drexel University, College of Computing & Informatics",
    note: "Supervised the quantum LMSR senior project (CI 491–493) and its benzenoid graph application.",
    profile: "https://drexel.edu/cci/about/directory/B/Boady-Mark/",
    placeholder: false,
  },
  {
    key: "ADVISOR_KANDASAMY",
    name: "Prof. Nagarajan Kandasamy",
    role: "Faculty collaborator — Embedded & Reconfigurable Systems",
    org: "Drexel University, Dept. of Electrical & Computer Engineering",
    note: "[Add one line on what you worked on with Prof. Kandasamy.]",
    profile: "https://drexel.edu/engineering/about/faculty-staff/K/kandasamy-nagarajan/",
    placeholder: true,
  },
];

// ---- Publications & writing ----
const PUBLICATIONS = [
  {
    type: "Preprint",
    title: "On Monochromatic Orthogonal Adjacencies in the Faces of an n×n×n Cube",
    authors: "V. H. Pham",
    year: "2025",
    summary:
      "Disproves the claim that every six-color, n²-per-color stickering must contain two orthogonally adjacent same-color facelets: a checkerboard (parity) coloring achieves zero, because each face's grid graph is bipartite.",
    href: "assets/papers/cube_coloring.pdf",
    cta: "PDF",
  },
  {
    type: "Preprint",
    title: "On the Non-Uniqueness of Adjacency-Free Colorings of the n×n×n Cube",
    authors: "V. H. Pham",
    year: "2025",
    summary:
      "Shows adjacency-free colorings are far from unique — in two senses: distinct symmetry-group orbits (distinguished by the color co-occurrence graph), and a super-exponential lower bound N(n) ≥ ((3n²)!/(n²!)³)² on their count.",
    href: "assets/papers/cube_uniqueness.pdf",
    cta: "PDF",
  },
  {
    type: "Preprint",
    title: "Adjacency-Free Patterns on a Physical 3×3×3 Cube: A Reachability Model",
    authors: "V. H. Pham",
    year: "2025",
    summary:
      "Re-examines the question under physical reachability (fixed centers, glued cubies), verified by exhaustive/exact search against a from-scratch simulator. The half-turn pattern is unique (Pons Asinorum); the full group adds the superflip. Includes an erratum to the counting note.",
    href: "assets/papers/cube_reachable.pdf",
    cta: "PDF",
  },
  {
    type: "Project",
    title: "Quantum LMSR via Grover Amplification (Senior Project)",
    authors: "V. H. Pham · Drexel CCI",
    year: "2024–25",
    summary:
      "Senior-project report and Qiskit implementation of an O(√N) lexicographically-minimum string rotation algorithm, run on IBM Quantum hardware and applied to benzenoid graph recognition.",
    href: "https://github.com/kagamirudo/Quantum-Research-2024",
    cta: "Repo ↗",
  },
];

// ---- Experience (backup track, ~30%) ----
const EXPERIENCE = [
  {
    role: "Software Engineer — Payments Engineering",
    org: "Credit Genie",
    loc: "Remote, US",
    date: "Sep 2026 – Present",
    points: [
      "Backend engineer on the Payments team of a membership-based personal-finance platform (interest-free cash advances, spending tools, and credit-building products).",
      "Build and harden the money-movement stack: bank-linking (Plaid) item-health tracking, transfer/settlement status mapping, and reliable handling of failures, reversals, and chargebacks.",
      "Own scheduled payment infrastructure — daily collection scheduling, cleanup jobs for stale attempts, and timezone-correct cron orchestration — to keep automated debits accurate and dependable.",
    ],
    tags: ["Node.js", "Backend", "Plaid", "Payments", "Cron"],
    repos: [{ label: "Private (company)", private: true }],
  },
  {
    role: "Embedded Software Engineer (Internship)",
    org: "ImesPro — Edge AI & Factory Automation",
    loc: "Ho Chi Minh, Vietnam",
    date: "Jun 2026 – Sep 2026",
    points: [
      "ESP32-S3-CAM factory-automation firmware in C/ESP-IDF with ThingsBoard MQTT (telemetry, RPC, OTA) and multi-task FreeRTOS; double-buffered frame upload to an OCR backend for on-line visual inspection.",
      "Edge CV on ESP32-S3-CAM (ESP-DL) and Luckfox Pico Pro (RKNN): PyTorch digit CNN quantized INT8, on-device OCR ~10 FPS; YOLO11n on RV1106 NPU ~8–12 FPS; QR + face firmware with dual-core FreeRTOS ≥15 FPS.",
      "SmartClass inattention pipeline (YOLOv8, ByteTrack, MediaPipe) 15–30 FPS; YOLO→ONNX for Jetson TensorRT.",
    ],
    tags: ["ESP-IDF", "FreeRTOS", "PyTorch", "YOLO", "RKNN"],
    repos: [{ label: "ImesPro repos (private)", private: true }],
  },
  {
    role: "Embedded Software Engineer",
    org: "Drexel University — Material Lab",
    loc: "Philadelphia, PA",
    date: "Nov 2025 – May 2026",
    points: [
      "ESP32-S3 DAQ system in C/ESP-IDF for laser-material experiments: 12-bit ADC at 3 kHz, 5 kHz PWM laser control, 10M-sample capture sessions.",
      "Dual-core FreeRTOS pipeline with a 48k-entry SPIRAM queue (~16 s buffer) and 500-sample batched CSV writes for reliable logging under SD/network I/O.",
      "Browser-based control stack: live telemetry, start/stop APIs, chunked downloads, SD/SPIFFS failover, synchronized timestamps.",
    ],
    tags: ["ESP32-S3", "DAQ", "FreeRTOS", "C"],
    repos: [{ label: "Laser-Material-Lab", href: "https://github.com/kagamirudo/Laser-Material-Lab" }],
  },
  {
    role: "Embedded Software Engineer (CO-OP)",
    org: "Medcrypt",
    loc: "Solana Beach, CA",
    date: "Apr 2024 – Sep 2024",
    points: [
      "Optimized ASN.1 encoder/decoder in C for STM32 — firmware footprint −30% (64→45 KB), encoding throughput +40%.",
      "Resolved 150,000+ namespace symbol conflicts in a 2 MB vendor codebase, eliminating CI build failures (−50% debug time).",
      "Unified hardware-accelerated AES on STM32, cutting crypto latency 25% for deterministic real-time protection.",
    ],
    tags: ["C", "STM32", "ASN.1", "AES"],
    repos: [],
  },
  {
    role: "A.I. Researcher & Engineer (Internship)",
    org: "FPT Software — OCR Quy Nhon Team",
    loc: "Hanoi, Vietnam",
    date: "Jun 2022 – Sep 2022",
    points: [
      "Fine-tuned a CNN OCR pipeline on 50k Japanese Kanji samples: accuracy 77% → 92%.",
      "Pruned + quantized the model, cutting inference 200 ms → 80 ms (−60%) for real-time edge OCR.",
      "Integrated OCR into an Angular web app processing up to 2000 scanned images/min.",
    ],
    tags: ["CNN", "OCR", "Quantization", "Angular"],
    repos: [],
  },
];

// ============================================================
//  RENDER
// ============================================================
function collaboratorByKey(key) {
  return COLLABORATORS.find((c) => c.key === key);
}

function renderResearch() {
  const el = document.getElementById("researchList");
  if (!el) return;
  el.innerHTML = RESEARCH.map((r) => {
    const adv = r.advisor ? collaboratorByKey(r.advisor) : null;
    const advLine = adv
      ? `<p class="research__advisor">Advisor: <span class="${adv.placeholder ? "is-placeholder" : ""}">${adv.name}</span></p>`
      : "";
    const links = (r.links || [])
      .map((l) => `<a class="research__link" href="${l.href}"${l.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${l.label}</a>`)
      .join("");
    return `
      <article class="research__card reveal">
        <div class="research__top">
          <span class="research__icon">${r.icon}</span>
          <span class="research__area">${r.area}</span>
        </div>
        <h3 class="research__title">${r.title}</h3>
        <p class="research__venue">${r.venue}</p>
        ${advLine}
        <ul class="research__points">${r.points.map((p) => `<li>${p}</li>`).join("")}</ul>
        <div class="research__tags">${r.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="research__links">${links}</div>
      </article>`;
  }).join("");
}

function renderCollaborators() {
  const el = document.getElementById("collabList");
  if (!el) return;
  el.innerHTML = COLLABORATORS.map((c) => {
    const nameHtml = c.profile
      ? `<a href="${c.profile}" target="_blank" rel="noopener">${c.name}</a>`
      : c.name;
    return `
      <article class="collab__card reveal${c.placeholder ? " collab__card--placeholder" : ""}">
        <h4 class="collab__name">${nameHtml}</h4>
        <p class="collab__role">${c.role}</p>
        <p class="collab__org">${c.org}</p>
        <p class="collab__note">${c.note}</p>
      </article>`;
  }).join("");
}

function renderPublications() {
  const el = document.getElementById("pubsList");
  if (!el) return;
  el.innerHTML = PUBLICATIONS.map((p) => {
    const external = p.href.startsWith("http");
    return `
      <li class="pub reveal">
        <a class="pub__link" href="${p.href}"${external ? ' target="_blank" rel="noopener"' : ' target="_blank"'}>
          <div class="pub__main">
            <span class="pub__type pub__type--${p.type.toLowerCase()}">${p.type}</span>
            <h3 class="pub__title">${p.title}</h3>
            <p class="pub__meta">${p.authors} · ${p.year}</p>
            <p class="pub__summary">${p.summary}</p>
          </div>
          <span class="pub__cta">${p.cta}</span>
        </a>
      </li>`;
  }).join("");
}

function renderExperience() {
  const el = document.getElementById("experienceList");
  if (!el) return;
  el.innerHTML = EXPERIENCE.map((e) => {
    const repos = (e.repos || [])
      .map((r) =>
        r.private
          ? `<span class="exp__repo exp__repo--private">🔒 ${r.label}</span>`
          : `<a class="exp__repo" href="${r.href}" target="_blank" rel="noopener">${r.label} ↗</a>`
      )
      .join("");
    return `
      <article class="exp reveal${e.placeholder ? " exp--placeholder" : ""}">
        <div class="exp__dot"></div>
        <div class="exp__body">
          <div class="exp__head">
            <h3 class="exp__role">${e.role}</h3>
            <span class="exp__date">${e.date}</span>
          </div>
          <p class="exp__org">${e.org} · <span class="exp__loc">${e.loc}</span></p>
          <ul class="exp__points">${e.points.map((p) => `<li>${p}</li>`).join("")}</ul>
          <div class="exp__footer">
            <div class="exp__tags">${e.tags.map((t) => `<span class="tag tag--sm">${t}</span>`).join("")}</div>
            <div class="exp__repos">${repos}</div>
          </div>
        </div>
      </article>`;
  }).join("");
}

// ---- Theme toggle (persisted) ----
function initTheme() {
  const toggle = document.getElementById("themeToggle");
  let saved;
  try { saved = localStorage.getItem("theme"); } catch (e) { /* storage blocked */ }
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  toggle?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* storage blocked */ }
  });
}

// ---- Mobile nav ----
function initNav() {
  const burger = document.getElementById("navBurger");
  const links = document.getElementById("navLinks");
  if (!burger || !links) return;
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
    burger.textContent = open ? "✕" : "☰";
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      burger.textContent = "☰";
    })
  );
}

// ---- Scroll reveal ----
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  items.forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderResearch();
  renderCollaborators();
  renderPublications();
  renderExperience();
  initTheme();
  initNav();
  document.querySelectorAll(".section, .hero__inner").forEach((s) => s.classList.add("reveal"));
  initReveal();
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
});
