export const PROFILE = {
  name: "AKSHAY BHAWAR",
  role: "Full Stack Developer & Design Engineer",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/akshaybhawar03",
  linkedin: "https://www.linkedin.com/in/akshay-bhawar-5a7848291",
  email: "bhawarakshay2003@gmail.com",
  tagline: "Full Stack Developer. Design Engineer. Problem Solver.",
};

export const SKILL_GROUPS = [
  {
    title: "FRONTEND ARRAY",
    code: "01 / FRONT",
    accent: "#00c8ff",
    items: [
      { name: "Next.js", power: 92 },
      { name: "TypeScript", power: 90 },
      { name: "React", power: 95 },
      { name: "Tailwind", power: 93 },
      { name: "Figma", power: 80 },
    ],
  },
  {
    title: "BACKEND CORE",
    code: "02 / BACK",
    accent: "#ff6b35",
    items: [
      { name: "Node.js", power: 90 },
      { name: "Express", power: 88 },
      { name: "Python", power: 84 },
      { name: "GraphQL", power: 78 },
      { name: "MongoDB", power: 89 },
      { name: "SQL", power: 82 },
    ],
  },
  {
    title: "OPS & TOOLS",
    code: "03 / OPS",
    accent: "#7b2fbe",
    items: [
      { name: "Docker", power: 80 },
      { name: "AWS", power: 78 },
      { name: "Git", power: 92 },
    ],
  },
];

export const PROJECTS = [
  {
    id: "finance-ai",
    code: "M-001",
    name: "FINANCE AI",
    classification: "ECONOMIC INTELLIGENCE",
    summary:
      "AI-powered finance & productivity command center. Forecasting, automated budgeting, and intelligent transaction parsing built into a single command UI.",
    tech: ["Next.js", "TypeScript", "MySQL", "AI"],
    status: "MISSION COMPLETE",
    coords: "18.52°N, 73.85°E",
    sector: "Sector 07 / FIN-OPS",
  },
  {
    id: "mechat",
    code: "M-002",
    name: "meCHAT",
    classification: "REAL-TIME COMMS RELAY",
    summary:
      "Encrypted real-time chat platform — WhatsApp-class fidelity with WebSockets, presence indicators, typing telemetry and media payloads.",
    tech: ["React", "Node.js", "MongoDB", "WebSockets"],
    status: "MISSION COMPLETE",
    coords: "12.97°N, 77.59°E",
    sector: "Sector 02 / COMMS",
  },
  {
    id: "ecom",
    code: "M-003",
    name: "E-COMMERCE GRID",
    classification: "COMMERCE NETWORK",
    summary:
      "End-to-end commerce platform with auth, cart logic, secure checkout pipeline and Firebase-backed product graph.",
    tech: ["HTML", "CSS", "JS", "Firebase"],
    status: "MISSION COMPLETE",
    coords: "28.61°N, 77.20°E",
    sector: "Sector 11 / MARKET",
  },
  {
    id: "impulse",
    code: "M-004",
    name: "IMPULSE PATHOLOGY LAB",
    classification: "MEDICAL OPS PLATFORM",
    summary:
      "Lab management web app — patient triage, report generation, role-based dashboards and secure record vault.",
    tech: ["Next.js", "TypeScript", "MongoDB"],
    status: "MISSION COMPLETE",
    coords: "18.52°N, 73.85°E",
    sector: "Sector 09 / MED-OPS",
  },
  {
    id: "fin-nexus",
    code: "M-005",
    name: "FIN-NEXUS AI",
    classification: "FINANCIAL HUD",
    summary:
      "Financial dashboard with AI-driven insights, anomaly detection, and a live HUD for portfolio telemetry.",
    tech: ["Next.js", "TypeScript", "MongoDB", "AI"],
    status: "MISSION COMPLETE",
    coords: "19.07°N, 72.87°E",
    sector: "Sector 04 / NEXUS",
  },
];

export const TIMELINE = [
  { year: "2020", title: "INITIALIZATION", text: "First commit. The signal goes live." },
  { year: "2021", title: "FRAMEWORK FORGE", text: "Stack-up: React, Node, MongoDB. The arsenal expands." },
  { year: "2022", title: "MISSIONS BEGIN", text: "Shipping production apps, the first real-world deployments." },
  { year: "2023", title: "AI INTEGRATION", text: "Embedding intelligence into finance and ops platforms." },
  { year: "2024", title: "DESIGN ENGINEERING", text: "Pixel-perfect UX joins the toolkit. Form meets function." },
  { year: "2025", title: "PRESENT DAY", text: "Building the future, one cinematic deploy at a time." },
];