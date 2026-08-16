import hero_img from "./assets/Hero img.jpg";

export const HERO_IMG = hero_img;

export const stats = [
  { value: "3+", label: "Years building" },
  { value: "15+", label: "Projects shipped" },
  { value: "100%", label: "Attention to detail" },
];

export const marquee = [
  "React", "Next.js", "TypeScript", "Node.js", "MongoDB",
  "Tailwind CSS", "GraphQL", "Python", "Docker",
];

export const toolkit = [
  { n: "01", title: "Frontend", tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma", "HTML / CSS"] },
  { n: "02", title: "Backend", tags: ["Node.js", "Express", "Python", "GraphQL", "MongoDB", "SQL"] },
  { n: "03", title: "Ops & Tooling", tags: ["Docker", "AWS", "Git", "CI/CD", "REST APIs", "Firebase"] },
];

import finance_ai_img from "./assets/Finance Ai.png";
import mechat_img from "./assets/mechat.jpg";
import ecommerce_img from "./assets/ecommerce.jpg";
import pathology_lab_img from "./assets/impulse path.png";
import fin_nexus_img from "./assets/Fin Nexus .png";
import smart_godown_img from "./assets/Smart Godown.png";
import think_stack_img from "./assets/Think Stack.png";
import need_data_img from "./assets/Need Data.png";

export const projects = [
  {
    category: "ENTERPRISE SOLUTIONS",
    title: "Think Stack Technologies",
    desc: "Corporate landing and service portal for Think Stack Technologies, featuring dynamic service showcases and lead generation funnels.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    img: think_stack_img,
    accent: "#cf7b45",
    link: "https://thinkstacktechnologies.vercel.app/",
    featured: true,
  },
  {
    category: "WAREHOUSE MANAGEMENT",
    title: "Smart Godown",
    desc: "A comprehensive digital platform for warehouse and inventory management, optimizing storage allocation and tracking logistics.",
    tags: ["React", "Node.js", "MongoDB"],
    img: smart_godown_img,
    accent: "#cf7b45",
    link: "https://www.smartgodown.in/",
  },
  {
    category: "EDTECH PLATFORM",
    title: "Need Data",
    desc: "Freelance project for a large education academy providing teaching and placement assistance to students, complete with user portals and resource hubs.",
    tags: ["React", "Express", "MongoDB"],
    img: need_data_img,
    accent: "#7d8b63",
    link: "https://needdata.in/",
  },
  {
    category: "AI FINANCE PLATFORM",
    title: "Finance AI",
    desc: "An AI-powered finance & productivity command center. Forecasting, automated budgeting, and intelligent transaction parsing folded into one clean interface.",
    tags: ["Next.js", "TypeScript", "MySQL"],
    img: finance_ai_img,
    accent: "#cf7b45",
    link: "https://ai-puce-mu.vercel.app/",
  },
  {
    category: "REAL-TIME MESSAGING",
    title: "meCHAT",
    desc: "Encrypted real-time chat platform with WebSockets, presence indicators, typing telemetry, and media payloads.",
    tags: ["React", "Node.js", "MongoDB"],
    img: mechat_img,
    accent: "#cf7b45",
  },
  {
    category: "COMMERCE PLATFORM",
    title: "E-Commerce Grid",
    desc: "End-to-end commerce platform with auth, cart logic, secure checkout, and a Firebase-backed product graph.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: ecommerce_img,
    accent: "#cf7b45",
  },
  {
    category: "HEALTHCARE PLATFORM",
    title: "Impulse Pathology Lab",
    desc: "Lab management web app — patient triage, report generation, role-based dashboards, and a secure record vault.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    img: pathology_lab_img,
    accent: "#7d8b63",
    link: "https://impulse-smoky.vercel.app/",
  },
  {
    category: "FINANCIAL DASHBOARD",
    title: "Fin-Nexus AI",
    desc: "Financial dashboard with AI-driven insights, anomaly detection, and a live portfolio telemetry view.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    img: fin_nexus_img,
    accent: "#cf7b45",
    link: "https://ai-finance-swart.vercel.app/",
  },
];

export const timeline = [
  { year: "2023", title: "The first commit", desc: "A curious kid in Pune starts writing code." },
  { year: "2024", title: "Stack-up & Real missions", desc: "React, Node, MongoDB — the core arsenal comes together and first production apps go live." },
  { year: "2025", title: "AI Integration & Design", desc: "Embedding intelligence into finance platforms while mastering pixel-perfect UX." },
  { year: "2026", title: "Present day", desc: "Building the future, one calm product at a time." },
];

export const testimonials = [
  { quote: "Akshay turned a vague idea into a product that felt inevitable. The attention to the tiny details — the ones nobody asks for but everyone feels — is what set the whole thing apart.", name: "Pushaparaj Singh Rathod", role: "Need Data Owner", initial: "P" },
  { quote: "Rare to find an engineer who cares this much about how software feels. He shipped fast, communicated clearly, and the final build was calmer and cleaner than we imagined.", name: "Kaushal Giri", role: "Smart Godown Owner", initial: "K" },
  { quote: "From backend logic to the last pixel, Akshay owned it end to end. Our dashboard went from clunky to something the whole team actually enjoys opening every morning.", name: "Sangita Funde", role: "Think Stack Co-founder", initial: "S" },
  { quote: "He engineers experiences, not just apps. Deadlines were met, edge cases were handled before I even flagged them. Genuinely the smoothest dev collaboration I've had.", name: "Aditya Rao", role: "Design Director, Impulse Labs", initial: "A" },
];

export const contactInfo = [
  { label: "EMAIL", value: "bhawarakshay2003@gmail.com", icon: "mail", link: "mailto:bhawarakshay2003@gmail.com" },
  { label: "LINKEDIN", value: "@akshay-bhawar", icon: "linkedin", link: "https://www.linkedin.com/in/akshay-bhawar-5a7848291/" },
  { label: "LOCATION", value: "Pune, Maharashtra, India", icon: "pin" },
];
