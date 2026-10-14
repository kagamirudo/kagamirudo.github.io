// ---- Projects (curated from github.com/kagamirudo) ----
const PROJECTS = [
  {
    name: "FPGA Optimized Computing",
    repo: "https://github.com/kagamirudo/FPGA",
    icon: "⚡",
    stars: 1,
    desc: "Research into optimized computing on FPGAs, comparing hand-written RTL against High-Level Synthesis (HLS).",
    tags: ["VHDL", "FPGA", "HLS", "Research"],
  },
  {
    name: "Quantum Research 2024",
    repo: "https://github.com/kagamirudo/Quantum-Research-2024",
    icon: "🔬",
    stars: 1,
    desc: "Drexel CCI Senior Project (CI 491/492/493) exploring quantum computing approaches.",
    tags: ["Quantum", "Jupyter", "Python"],
  },
  {
    name: "FPGA Digital Systems",
    repo: "https://github.com/kagamirudo/FPGA-Digital-Systems-Projects",
    icon: "🧩",
    stars: 0,
    desc: "A collection of digital systems design projects implemented in SystemVerilog.",
    tags: ["SystemVerilog", "Digital Logic"],
  },
  {
    name: "ESP-IDF Toolkit",
    repo: "https://github.com/kagamirudo/esp_idf",
    icon: "📡",
    stars: 0,
    desc: "Full support library and build setup for the ESP32 using the ESP-IDF framework.",
    tags: ["C", "ESP32", "Embedded"],
  },
  {
    name: "HC-SR04 Driver",
    repo: "https://github.com/kagamirudo/hc-sr04-driver",
    icon: "📏",
    stars: 0,
    desc: "Professional HC-SR04 ultrasonic sensor driver for Raspberry Pi.",
    tags: ["Python", "Raspberry Pi", "Drivers"],
  },
  {
    name: "ML / AI Applications",
    repo: "https://github.com/kagamirudo/CS-614_Application_ML_AI",
    icon: "🤖",
    stars: 0,
    desc: "Applied machine learning and AI coursework and experiments (CS-614).",
    tags: ["Python", "ML", "Jupyter"],
  },
  {
    name: "Kubernetes on MI300X",
    repo: "https://github.com/kagamirudo/Kubernetes-MI300X",
    icon: "☸️",
    stars: 0,
    desc: "Orchestration experiments targeting AMD MI300X accelerators with Kubernetes.",
    tags: ["Kubernetes", "GPU", "Systems"],
  },
  {
    name: "Laser Material Lab",
    repo: "https://github.com/kagamirudo/Laser-Material-Lab",
    icon: "🔦",
    stars: 0,
    desc: "C-based tooling and experiments for a laser materials laboratory.",
    tags: ["C", "Instrumentation"],
  },
];

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(
    (p) => `
    <article class="card reveal">
      <div class="card__head">
        <span class="card__icon">${p.icon}</span>
        ${p.stars ? `<span class="card__stars">★ ${p.stars}</span>` : ""}
      </div>
      <h3 class="card__title"><a href="${p.repo}" target="_blank" rel="noopener">${p.name}</a></h3>
      <p class="card__desc">${p.desc}</p>
      <div class="card__tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
    </article>`
  ).join("");
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
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initTheme();
  // mark sections for reveal, then observe (projects were just injected)
  document.querySelectorAll(".section, .hero__inner").forEach((s) => s.classList.add("reveal"));
  initReveal();
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
});
