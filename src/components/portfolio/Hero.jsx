import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, ArrowDown, Download } from "lucide-react";
import HoloGlobe from "@/components/portfolio/HoloGlobe";
import { HERO } from "@/constants/testIds";
import { PROFILE } from "@/components/portfolio/data";

const TITLE = "AKSHAY BHAWAR";

export default function Hero({ visible }) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const start = setTimeout(() => {
      const id = setInterval(() => {
        i++;
        setTyped(PROFILE.tagline.slice(0, i));
        if (i >= PROFILE.tagline.length) clearInterval(id);
      }, 38);
    }, 1300);
    return () => clearTimeout(start);
  }, [visible]);

  const scrollNext = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      data-testid={HERO.root}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center tech-grid scan-lines"
    >
      <h1 className="sr-only">Akshay Bhawar - Full Stack Developer</h1>
      
      {/* Background globe */}
      <div className="absolute inset-0 flex items-center justify-center opacity-90 pointer-events-none">
        <div className="hidden md:block" data-testid={HERO.globe}>
          <HoloGlobe size={620} />
        </div>
        {/* Mobile: 2D rotating ring */}
        <div className="md:hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-[320px] h-[320px] rounded-full border border-[#00c8ff]/40 box-glow-arc relative"
          >
            <div className="absolute inset-6 rounded-full border border-[#00c8ff]/25" />
            <div className="absolute inset-14 rounded-full border border-[#00c8ff]/15" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00c8ff] shadow-[0_0_24px_#00c8ff]" />
          </motion.div>
        </div>
      </div>

      {/* Corner HUDs */}
      <CornerHUD position="top-left" lines={["SYSTEM: ONLINE", "STACK: LOADED", "STATUS: BUILDING"]} />
      <CornerHUD position="top-right" lines={["LAT 18.5204°N", "LON 73.8567°E", "PUNE / MH / IN"]} align="right" />
      <CornerHUD position="bottom-left" lines={["CPU 92%", "GPU 88%", "RAM 76%"]} />
      <CornerHUD position="bottom-right" lines={["CHANNEL OPEN", "ENCRYPTION: HIGH", "READY TO DEPLOY"]} align="right" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="font-mono text-[11px] tracking-[0.45em] text-[#00c8ff] mb-8"
        >
          // ORIGIN STORY — VOLUME I
        </motion.div>

        <div
          aria-hidden="true"
          data-testid={HERO.title}
          className="font-display font-black text-white text-[42px] sm:text-7xl md:text-8xl lg:text-[120px] leading-[0.95] tracking-tight flex flex-wrap justify-center gap-[0.3em]"
        >
          {TITLE.split(" ").map((word, wIdx) => (
            <span key={wIdx} className="inline-block whitespace-nowrap">
              {word.split("").map((ch, i) => {
                const charIdx = wIdx * 10 + i;
                return (
                  <motion.span
                    key={`${ch}-${charIdx}`}
                    initial={{ y: -120, opacity: 0, filter: "blur(12px)" }}
                    animate={visible ? { y: 0, opacity: 1, filter: "blur(0px)" } : {}}
                    transition={{
                      delay: 0.6 + charIdx * 0.05,
                      duration: 0.5,
                      ease: [0.85, 0, 0.15, 1],
                    }}
                    className="inline-block relative"
                    style={{
                      textShadow:
                        "0 0 22px rgba(0,200,255,0.45), 0 0 60px rgba(0,200,255,0.2)",
                    }}
                  >
                    {ch}
                    {visible && (
                      <motion.span
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ delay: 0.6 + charIdx * 0.05, duration: 0.3 }}
                      />
                    )}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <h2 className="mt-6 h-7">
          <span
            data-testid={HERO.subtitle}
            className="font-mono text-sm md:text-base tracking-[0.2em] text-[#b9d6e6]"
          >
            {typed}
            <span className="inline-block w-2 h-5 bg-[#00c8ff] ml-1 animate-pulse-arc align-middle" />
          </span>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            data-testid={HERO.ctaPrimary}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="hud-btn"
          >
            <span>INITIATE MISSION FILES</span>
            <ArrowDown size={14} />
          </button>
          <a
            data-testid={HERO.ctaSecondary}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hud-btn gold"
          >
            <Download size={14} />
            <span>OPEN COMMS CHANNEL</span>
          </a>
        </motion.div>

        {/* Social mini-line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 2.6 }}
          className="mt-10 flex items-center justify-center gap-6 font-mono text-[11px] tracking-[0.25em] text-white/60"
        >
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#00c8ff] transition">
            <Github size={14} /> GITHUB
          </a>
          <span className="w-px h-3 bg-white/20" />
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#00c8ff] transition">
            <Linkedin size={14} /> LINKEDIN
          </a>
          <span className="w-px h-3 bg-white/20" />
          <span>{PROFILE.location.toUpperCase()}</span>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={scrollNext}
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.4em] text-[#00c8ff] flex flex-col items-center gap-2"
        data-cursor="hover"
      >
        <span>SCROLL TO ENGAGE</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#00c8ff] to-transparent"
        />
      </motion.button>

      {/* Letterbox bars */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-3 bg-black z-30" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-3 bg-black z-30" />
    </section>
  );
}

function CornerHUD({ position, lines, align = "left" }) {
  const map = {
    "top-left": "top-20 left-6",
    "top-right": "top-20 right-6",
    "bottom-left": "bottom-16 left-6",
    "bottom-right": "bottom-16 right-6",
  };
  return (
    <div
      className={`hidden md:block absolute ${map[position]} z-20 hud-frame px-3 py-2 font-mono text-[10px] tracking-[0.25em] text-[#4ad8ff] ${align === "right" ? "text-right" : ""}`}
    >
      <span className="hud-corner-tr" />
      <span className="hud-corner-bl" />
      {lines.map((l) => (
        <div key={l} className="leading-snug">
          {l}
        </div>
      ))}
    </div>
  );
}