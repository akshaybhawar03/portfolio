import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HERO } from "@/constants/testIds";

/**
 * Arc Reactor boot sequence:
 *  - black screen
 *  - blue dot pulses & expands like an explosion
 *  - quick boot logs
 *  - SLAM reveal
 */
export default function BootSequence({ onComplete }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 350);    // dot pulse
    const t2 = setTimeout(() => setPhase(2), 1500);   // logs
    const t3 = setTimeout(() => setPhase(3), 2900);   // expansion / slam
    const t4 = setTimeout(() => onComplete?.(), 3500);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onComplete]);

  const logs = [
    "> INITIALIZING ARC REACTOR.....",
    "> CALIBRATING STACK CORES.....",
    "> LOADING AKSHAY.EXE...........",
    "> SYSTEM ONLINE :: READY",
  ];

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          data-testid={HERO.bootOverlay}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center scan-lines"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Center pulse / expansion */}
          <motion.div
            className="relative rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              phase >= 3
                ? { scale: 60, opacity: 0 }
                : phase >= 1
                ? { scale: 1, opacity: 1 }
                : { scale: 0, opacity: 0 }
            }
            transition={
              phase >= 3
                ? { duration: 0.6, ease: [0.7, 0, 0.84, 0] }
                : { duration: 0.7, ease: "easeOut" }
            }
            style={{
              width: 80,
              height: 80,
              background:
                "radial-gradient(circle, #ffffff 0%, #00c8ff 35%, rgba(0,200,255,0.25) 70%, transparent 80%)",
              boxShadow:
                "0 0 60px #00c8ff, 0 0 120px rgba(0,200,255,0.6), 0 0 240px rgba(0,200,255,0.35)",
            }}
          />

          {/* concentric rings */}
          {phase >= 1 && phase < 3 && (
            <>
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-[#00c8ff]"
                  initial={{ width: 80, height: 80, opacity: 0.8 }}
                  animate={{ width: 600, height: 600, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.55, ease: "easeOut" }}
                />
              ))}
            </>
          )}

          {/* Logs */}
          {phase >= 2 && phase < 3 && (
            <div className="absolute bottom-12 left-12 font-mono text-[11px] tracking-widest text-[#4ad8ff]">
              {logs.map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
          )}

          {/* Top status bar */}
          {phase >= 1 && phase < 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-8 left-0 right-0 flex justify-between px-8 font-mono text-[10px] tracking-[0.3em] text-[#4ad8ff]/80"
            >
              <span>SYS://AKSHAY.EXE</span>
              <span className="animate-flicker">● BOOT SEQUENCE</span>
              <span>v.0xC8FF</span>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}