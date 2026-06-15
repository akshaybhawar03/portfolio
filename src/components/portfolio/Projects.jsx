import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Folder, FolderOpen, X, ExternalLink, MapPin } from "lucide-react";
import ChapterCard from "@/components/portfolio/ChapterCard";
import { PROJECTS as PLIST } from "@/components/portfolio/data";
import { PROJECTS as TIDS } from "@/constants/testIds";

function MissionCard({ p, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.85, 0, 0.15, 1] }}
      data-testid={TIDS.card(p.id)}
      className="group relative hud-frame p-6 cursor-pointer overflow-hidden"
      data-cursor="hover"
      onClick={() => onOpen(p)}
    >
      <span className="hud-corner-tr" />
      <span className="hud-corner-bl" />

      {/* Red classified stripe */}
      <div className="absolute top-0 left-0 h-full w-1.5 bg-[#e23636] shadow-[0_0_18px_#e23636]" />

      {/* Glitch overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none scan-lines" />

      <div className="flex items-start gap-4">
        <div className="relative">
          <Folder className="w-8 h-8 text-[#e23636] group-hover:hidden" />
          <FolderOpen className="w-8 h-8 text-[#ff6b35] hidden group-hover:block" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-mono text-[10px] tracking-[0.35em] text-[#e23636]">CLASSIFIED · {p.code}</div>
          <div className="font-display font-black text-white text-xl md:text-2xl mt-1 tracking-wide group-hover:text-glow-arc transition">
            {p.name}
          </div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#00c8ff] mt-1">{p.classification}</div>
        </div>
      </div>

      <p className="mt-5 text-[#b9d6e6] text-sm leading-relaxed line-clamp-3">{p.summary}</p>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {p.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] tracking-[0.2em] px-2 py-1 border border-[#00c8ff]/40 text-[#4ad8ff]"
            >
              {t}
            </span>
          ))}
          {p.tech.length > 3 && (
            <span className="font-mono text-[10px] tracking-[0.2em] px-2 py-1 text-white/40">
              +{p.tech.length - 3}
            </span>
          )}
        </div>
        <div className="font-mono text-[10px] tracking-[0.3em] text-[#00c8ff] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00c8ff] animate-pulse-arc" />
          {p.status}
        </div>
      </div>

      {/* Hover prompt */}
      <div className="mt-5 pt-4 border-t border-[#00c8ff]/15 font-mono text-[10px] tracking-[0.35em] text-white/40 group-hover:text-[#00c8ff] transition flex items-center gap-2">
        <span>▸ OPEN MISSION DOSSIER</span>
        <span className="opacity-0 group-hover:opacity-100 transition">[ENTER]</span>
      </div>
    </motion.div>
  );
}

function DossierModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.85, 0, 0.15, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl hud-frame p-6 md:p-10 origin-top scan-lines"
            style={{ background: "linear-gradient(180deg, #02060d, #050a14)" }}
          >
            <span className="hud-corner-tr" />
            <span className="hud-corner-bl" />

            {/* Top bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#e23636] animate-pulse-arc" />
                <span className="font-mono text-[10px] tracking-[0.4em] text-[#e23636]">
                  TOP SECRET · DOSSIER {project.code}
                </span>
              </div>
              <button
                data-testid={TIDS.closeDossier}
                onClick={onClose}
                className="text-white/60 hover:text-[#00c8ff] transition"
                data-cursor="hover"
              >
                <X size={20} />
              </button>
            </div>

            <div className="font-display font-black text-white text-3xl md:text-5xl tracking-wide text-glow-arc">
              {project.name}
            </div>
            <div className="font-mono text-[11px] tracking-[0.3em] text-[#00c8ff] mt-2">
              {project.classification}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 font-mono text-[10px] tracking-[0.25em]">
              <div>
                <div className="text-white/40">SECTOR</div>
                <div className="text-[#4ad8ff] mt-1">{project.sector}</div>
              </div>
              <div>
                <div className="text-white/40">COORDS</div>
                <div className="text-[#4ad8ff] mt-1 flex items-center gap-1">
                  <MapPin size={10} /> {project.coords}
                </div>
              </div>
              <div>
                <div className="text-white/40">STATUS</div>
                <div className="text-[#00c8ff] mt-1">{project.status}</div>
              </div>
              <div>
                <div className="text-white/40">CLEARANCE</div>
                <div className="text-[#ff6b35] mt-1">LEVEL 7</div>
              </div>
            </div>

            <div className="mt-8">
              <div className="font-mono text-[10px] tracking-[0.35em] text-white/40 mb-2">// BRIEFING</div>
              <p className="text-[#dbeaf2] leading-relaxed">{project.summary}</p>
            </div>

            <div className="mt-8">
              <div className="font-mono text-[10px] tracking-[0.35em] text-white/40 mb-2">// ARSENAL</div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] tracking-[0.18em] px-3 py-1.5 border border-[#00c8ff]/50 text-[#00c8ff] box-glow-arc"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://github.com/akshaybhawar03"
                target="_blank"
                rel="noreferrer"
                className="hud-btn"
              >
                <ExternalLink size={14} /> VIEW SOURCE
              </a>
              <button onClick={onClose} className="hud-btn gold">
                CLOSE FILE
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(null);
  return (
    <section id="projects" data-testid={TIDS.root || "scene-projects"} className="relative w-full">
      <ChapterCard chapter="CHAPTER III / 06" title="MISSION BRIEFING" accent="#e23636" />

      {/* Faint moving world map background */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0 animate-ticker"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 30%, #00c8ff 1px, transparent 1.5px), radial-gradient(circle at 30% 60%, #00c8ff 1px, transparent 1.5px), radial-gradient(circle at 60% 20%, #00c8ff 1px, transparent 1.5px), radial-gradient(circle at 80% 70%, #00c8ff 1px, transparent 1.5px)",
            backgroundSize: "200px 200px",
            width: "200%",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLIST.map((p, i) => (
            <MissionCard key={p.id} p={p} index={i} onOpen={setOpen} />
          ))}
        </div>
      </div>

      <DossierModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}