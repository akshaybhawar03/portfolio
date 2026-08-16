import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PROFILE } from "@/components/portfolio/data";

const LINKS = [
  { key: "hero", label: "Home" },
  { key: "skills", label: "Expertise" },
  { key: "projects", label: "Work" },
  { key: "about", label: "About" },
  { key: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const ids = LINKS.map((l) => l.key);
    const onScroll = () => {
      const y = window.scrollY + 200;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActive(id);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (key) => {
    const el = document.getElementById(key);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => go("hero")}
          className="font-serif font-black text-2xl tracking-tight text-[#1F1B18]"
        >
          {PROFILE.name.split(" ")[0]}<span className="text-[#DF6C3B] not-italic">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <button
              key={l.key}
              onClick={() => go(l.key)}
              className={`px-4 py-2 text-sm font-bold rounded-full transition-all ${
                active === l.key
                  ? "bg-[#E6D8C8] text-[#1F1B18]"
                  : "text-[#6E645B] hover:text-[#C55E32] hover:bg-[#F6EFE7]"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="px-6 py-2.5 rounded-full font-bold text-sm border border-[#1F1B18] text-[#1F1B18] hover:bg-[#1F1B18] hover:text-[#F6EFE7] transition-colors">
            Hire Me
          </a>
        </div>
      </div>
    </motion.header>
  );
}