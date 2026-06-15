import { motion } from "framer-motion";
import { ABOUT } from "@/constants/testIds";
import { TIMELINE, PROFILE } from "@/components/portfolio/data";
import ChapterCard from "@/components/portfolio/ChapterCard";

const STORY = [
  "From a curious kid in Pune to a full-stack engineer shipping production systems —",
  "every line of code is a frame in an unfolding origin story.",
  "Stack-fluent across the modern web. Obsessed with detail. Allergic to mediocrity.",
  "I don't just build apps. I engineer experiences that feel inevitable.",
];

export default function About() {
  return (
    <section id="about" data-testid={ABOUT.root} className="relative w-full">
      <ChapterCard chapter="CHAPTER IV / 06" title="THE ORIGIN" accent="#7b2fbe" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[300px] h-[380px] md:w-[360px] md:h-[440px]">
              {/* Glow halo */}
              <div className="absolute -inset-6 rounded-3xl opacity-80 blur-2xl"
                   style={{ background: "radial-gradient(circle, rgba(123,47,190,0.5), transparent 60%)" }} />

              {/* Frame */}
              <div className="absolute inset-0 hud-frame overflow-hidden">
                <span className="hud-corner-tr" />
                <span className="hud-corner-bl" />

                {/* Stylized SVG silhouette */}
                <svg viewBox="0 0 200 240" className="w-full h-full">
                  <defs>
                    <linearGradient id="suit" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#0a1622" />
                      <stop offset="100%" stopColor="#02060d" />
                    </linearGradient>
                    <radialGradient id="chestArc" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="30%" stopColor="#00c8ff" />
                      <stop offset="100%" stopColor="rgba(0,200,255,0)" />
                    </radialGradient>
                  </defs>
                  <rect width="200" height="240" fill="url(#suit)" />
                  {/* head */}
                  <circle cx="100" cy="70" r="28" fill="#0a1622" stroke="#00c8ff" strokeOpacity="0.5" strokeWidth="0.8" />
                  {/* shoulders / torso */}
                  <path d="M40,240 C40,160 70,120 100,120 C130,120 160,160 160,240 Z" fill="#0a1622" stroke="#00c8ff" strokeOpacity="0.55" strokeWidth="0.8" />
                  {/* arc reactor chest */}
                  <circle cx="100" cy="170" r="22" fill="url(#chestArc)" />
                  <circle cx="100" cy="170" r="11" fill="none" stroke="#00c8ff" strokeWidth="0.6" />
                  <circle cx="100" cy="170" r="6" fill="#ffffff" />
                  {/* armor panel lines */}
                  <path d="M70 200 L100 190 L130 200" stroke="#00c8ff" strokeOpacity="0.35" fill="none" />
                  <path d="M80 220 L100 210 L120 220" stroke="#00c8ff" strokeOpacity="0.25" fill="none" />
                  <path d="M84 100 L100 90 L116 100" stroke="#00c8ff" strokeOpacity="0.4" fill="none" />
                </svg>

                {/* Particle dots */}
                {[...Array(14)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-[#7b2fbe] shadow-[0_0_6px_#7b2fbe]"
                    initial={{ x: Math.random() * 360, y: 440, opacity: 0 }}
                    animate={{ y: -40, opacity: [0, 1, 0] }}
                    transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}
              </div>

              <div className="absolute -bottom-4 left-4 right-4 hud-frame px-3 py-2 bg-black/80">
                <span className="hud-corner-tr" />
                <span className="hud-corner-bl" />
                <div className="font-mono text-[10px] tracking-[0.3em] text-[#00c8ff]">SUBJECT // AKSHAY BHAWAR</div>
                <div className="font-mono text-[9px] tracking-[0.25em] text-white/50">CLASSIFICATION: FULL-STACK · DESIGN ENG.</div>
              </div>
            </div>
          </motion.div>

          {/* Right: narration */}
          <div>
            {STORY.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className={`text-lg md:text-xl leading-relaxed mb-5 ${i === 3 ? "text-white text-glow-arc font-display font-bold tracking-wide" : "text-[#b9d6e6]"}`}
              >
                {line}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10 hud-frame p-6"
            >
              <span className="hud-corner-tr" />
              <span className="hud-corner-bl" />
              <div className="font-mono text-[10px] tracking-[0.35em] text-[#7b2fbe] mb-2">// DIALOGUE</div>
              <blockquote className="font-display font-bold text-2xl md:text-3xl text-white tracking-wide leading-snug">
                "Code is the suit. Design is the heart. The reactor — that's the curiosity."
              </blockquote>
              <div className="mt-4 font-mono text-[10px] tracking-[0.3em] text-white/40">— {PROFILE.name}, 2025</div>
            </motion.div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <div className="font-mono text-[11px] tracking-[0.35em] text-[#7b2fbe] mb-6">// STORY ARC TIMELINE</div>
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#7b2fbe] to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative pt-10"
                >
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#7b2fbe] shadow-[0_0_18px_#7b2fbe] animate-pulse-arc" />
                  <div className="font-display font-black text-white text-2xl text-center">{t.year}</div>
                  <div className="font-mono text-[10px] tracking-[0.3em] text-[#00c8ff] text-center mt-1">{t.title}</div>
                  <div className="text-[#b9d6e6] text-xs text-center mt-2">{t.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}