import { motion } from "framer-motion";
import { NAV } from "@/constants/testIds";
import { useEffect, useState } from "react";

const LINKS = [
  { key: "hero", label: "00 / INIT" },
  { key: "skills", label: "01 / POWER CORE" },
  { key: "projects", label: "02 / MISSIONS" },
  { key: "about", label: "03 / ORIGIN" },
  { key: "contact", label: "04 / COMMS" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-GB", { hour12: false }) +
          " UTC" +
          (-d.getTimezoneOffset() / 60 >= 0 ? "+" : "") +
          -d.getTimezoneOffset() / 60
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

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
      data-testid={NAV.root}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-4 flex items-center justify-between">
        <button
          data-testid={NAV.logo}
          onClick={() => go("hero")}
          className="group flex items-center gap-3"
        >
          <img 
            src="/imgs/Copilot_20260615_221116.png" 
            alt="Akshay Logo" 
            className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(0,200,255,0.6)]" 
          />
          <div className="font-display tracking-[0.32em] text-xs text-white">
            AKSHAY<span className="text-[#00c8ff]">.EXE</span>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-1 hud-frame px-4 py-2">
          <span className="hud-corner-tr" />
          <span className="hud-corner-bl" />
          {LINKS.map((l) => (
            <button
              key={l.key}
              data-testid={NAV.link(l.key)}
              onClick={() => go(l.key)}
              className={`px-4 py-2 text-[11px] font-mono tracking-[0.25em] transition-all ${
                active === l.key
                  ? "text-[#00c8ff] text-glow-arc"
                  : "text-white/70 hover:text-[#00c8ff]"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex flex-col items-end font-mono text-[10px] tracking-[0.2em] text-[#4ad8ff]/80">
          <span className="animate-flicker">● SYS ONLINE</span>
          <span>{time}</span>
        </div>
      </div>
    </motion.header>
  );
}