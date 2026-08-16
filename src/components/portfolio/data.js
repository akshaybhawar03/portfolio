export const PROFILE = {
  name: "Akshay Bhawar",
  title: "Full Stack Engineer",
  email: "akshay.bhawar@example.com",
  location: "Pune, India",
  linkedin: "https://linkedin.com/in/akshay-bhawar",
};

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "NestJS" },
      { name: "GraphQL" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
    ],
  },
  {
    title: "Ops & Tooling",
    items: [
      { name: "Docker" },
      { name: "AWS" },
      { name: "Vercel" },
      { name: "CI/CD" },
      { name: "Git" },
      { name: "Jest" },
    ],
  },
];

import finance_ai_img from "../../assets/Finance Ai.png";
import mechat_img from "../../assets/mechat.jpg";
import ecommerce_img from "../../assets/ecommerce.jpg";
import pathology_lab_img from "../../assets/impulse path.png";
import fin_nexus_img from "../../assets/Fin Nexus .png";
import smart_godown_img from "../../assets/Smart Godown.png";
import think_stack_img from "../../assets/Think Stack.png";
import need_data_img from "../../assets/Need Data.png";

export const PROJECTS = [
  {
    id: "think-stack-technologies",
    name: "Think Stack Technologies",
    classification: "Featured Project",
    summary: "Corporate landing and service portal for Think Stack Technologies, featuring dynamic service showcases and lead generation funnels.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    img: think_stack_img,
    link: "https://thinkstacktechnologies.vercel.app/"
  },
  {
    id: "smart-godown",
    name: "Smart Godown",
    classification: "Warehouse Management",
    summary: "A comprehensive digital platform for warehouse and inventory management, optimizing storage allocation and tracking logistics.",
    tech: ["React", "Node.js", "MongoDB"],
    img: smart_godown_img,
    link: "https://www.smartgodown.in/"
  },
  {
    id: "need-data",
    name: "Need Data",
    classification: "EdTech Platform",
    summary: "Freelance project for a large education academy providing teaching and placement assistance to students, complete with user portals and resource hubs.",
    tech: ["React", "Express", "MongoDB"],
    img: need_data_img,
    link: "https://needdata.in/"
  },
  {
    id: "finance-ai",
    name: "Finance AI",
    classification: "Financial Platform",
    summary: "A full-stack web application designed for the financial sector. Features deep data analytics, real-time reporting, and an intuitive premium dashboard interface.",
    tech: ["React", "TypeScript", "Node.js"],
    img: finance_ai_img,
    link: "https://ai-puce-mu.vercel.app/"
  },
  {
    id: "mechat",
    name: "meChat",
    classification: "Full Stack App",
    summary: "Real-time communication platform built on WebSockets. Designed for zero-latency messaging, robust user authentication, and group chat capabilities.",
    tech: ["React", "Socket.io", "MongoDB"],
    img: mechat_img
  },
  {
    id: "ecommerce-grid",
    name: "E-Commerce Grid",
    classification: "E-Commerce Platform",
    summary: "High-performance headless e-commerce solution. Integrating Stripe payments, complex product variants, and lightning-fast edge rendering.",
    tech: ["Next.js", "Stripe", "Tailwind"],
    img: ecommerce_img
  },
  {
    id: "impulse-pathology",
    name: "Impulse Pathology Lab",
    classification: "Healthcare System",
    summary: "An enterprise-grade laboratory management system. Built to handle patient data, automated test reporting, and secure medical record storage.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    img: pathology_lab_img,
    link: "https://impulse-smoky.vercel.app/"
  },
  {
    id: "fine-tuned-ai",
    name: "Fine-Tuned AI",
    classification: "Machine Learning Interface",
    summary: "Custom dashboard interface allowing clients to interact with, train, and deploy specialized LLM models directly from the browser.",
    tech: ["Next.js", "TypeScript", "MongoDB", "AI"],
    img: fin_nexus_img,
    link: "https://ai-finance-swart.vercel.app/"
  },
];

export const TIMELINE = [
  { year: "2024", title: "Enterprise Scaling", text: "Led frontend architecture for global fintech platforms." },
  { year: "2023", title: "Freelance Excellence", text: "Delivered custom web applications for B2B clients worldwide." },
  { year: "2022", title: "Full Stack Mastery", text: "Mastered Node.js and React ecosystems." },
  { year: "2021", title: "The Beginning", text: "Started the journey into software engineering." },
];