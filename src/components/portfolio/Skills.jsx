import { motion } from "framer-motion";
import { SKILLS } from "@/constants/testIds";
import { SKILL_GROUPS } from "@/components/portfolio/data";
import ChapterCard from "@/components/portfolio/ChapterCard";
import { useState } from "react";

function Hexagon({ skill, accent, index, groupKey }) {
  const [hover, setHover] = useState(false);
  const power = hover ? skill.power : 0;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.06, duration: 0.55, ease: [0.85, 0, 0.15, 1] }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onTouchStart={() => setHover((s) => !s)}
      data-testid={SKILLS.hex(`${groupKey}-${skill.name.toLowerCase()}`)}
      data-cursor="hover"
      className="relative w-[150px] h-[170px] cursor-pointer select-none"
    >
      <div
        className="absolute inset-0 hex-clip transition-all duration-300"
        style={{
          background: hover
            ? `radial-gradient(circle at 50% 40%, ${accent}33, #02060d 70%)`
            : "linear-gradient(180deg, #051018, #02060d)",
          boxShadow: hover
            ? `0 0 0 1px ${accent}, 0 0 32px ${accent}99, inset 0 0 28px ${accent}33`
            : `0 0 0 1px ${accent}66, inset 0 0 14px ${accent}22`,
        }}
      />
      {/* inner ring */}
      <div className="absolute inset-3 hex-clip" style={{ background: "#02060d", boxShadow: `inset 0 0 0 1px ${accent}55` }} />

      <div className="relative h-full flex flex-col items-center justify-center px-3 text-center">
        {/* SVG energy ring */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 m-auto w-[110px] h-[110px] -mt-2">
          <circle cx="50" cy="50" r="40" fill="none" stroke={`${accent}33`} strokeWidth="2" />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 40}
            strokeDashoffset={2 * Math.PI * 40 * (1 - power / 100)}
            initial={false}
            animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - power / 100) }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            transform="rotate(-90 50 50)"
            style={{ filter: hover ? `drop-shadow(0 0 6px ${accent})` : "none" }}
          />
        </svg>
        <div
          className="relative font-display font-bold text-white text-sm tracking-[0.15em]"
          style={{ textShadow: hover ? `0 0 12px ${accent}` : "none" }}
        >
          {skill.name.toUpperCase()}
        </div>
        <div className="relative font-mono text-[10px] tracking-[0.3em] mt-1" style={{ color: accent }}>
          {hover ? `${skill.power}%` : "▲ HOVER"}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" aria-label="Technical Skills" data-testid={SKILLS.root} className="relative w-full tech-grid">
      <h2 className="sr-only">Technical Skills - MERN Stack Developer, Node.js MongoDB Developer</h2>
      <ChapterCard chapter="CHAPTER II / 06" title="THE POWER CORE" accent="#00c8ff" />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-24">
        {SKILL_GROUPS.map((group) => (
          <div key={group.code} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="font-mono text-[11px] tracking-[0.35em]" style={{ color: group.accent }}>
                {group.code}
              </div>
              <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${group.accent}, transparent)` }} />
              <div className="font-display font-bold text-white text-lg tracking-[0.18em]">{group.title}</div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {group.items.map((skill, i) => (
                <Hexagon key={skill.name} skill={skill} accent={group.accent} index={i} groupKey={group.code} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}