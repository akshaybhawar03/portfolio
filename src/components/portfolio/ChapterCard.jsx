import { motion } from "framer-motion";

/** Cinematic CHAPTER card — slams into view, dramatic Marvel-title-card vibe. */
export default function ChapterCard({ chapter, title, accent = "#00c8ff" }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      className="relative w-full py-12 md:py-16"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.85, 0, 0.15, 1] }}
            className="origin-left h-px w-full"
            style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
          />
          <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="font-mono text-[11px] tracking-[0.35em]"
                style={{ color: accent }}
              >
                {chapter}
              </motion.div>
              <motion.h2
                initial={{ y: 30, opacity: 0, letterSpacing: "0.5em" }}
                whileInView={{ y: 0, opacity: 1, letterSpacing: "0.08em" }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.6, ease: [0.85, 0, 0.15, 1] }}
                className="font-display font-black text-white text-4xl md:text-6xl lg:text-7xl mt-3"
                style={{ textShadow: `0 0 18px ${accent}55` }}
              >
                {title}
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="font-mono text-[10px] tracking-[0.3em] text-white/40"
            >
              <div>// CINEMATIC LOG</div>
              <div>FRAME 24 / SCENE LIVE</div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}