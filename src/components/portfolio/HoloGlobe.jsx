import { motion } from "framer-motion";

/** Pure SVG holographic wireframe globe + orbiting rings (lightweight, GPU-friendly). */
export default function HoloGlobe({ size = 520 }) {
  const lines = 14;
  const meridianCount = 16;
  return (
    <div
      className="relative pointer-events-none"
      style={{ width: size, height: size }}
    >
      {/* Outer glow halo */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,200,255,0.18) 0%, rgba(0,200,255,0.06) 35%, transparent 65%)",
          filter: "blur(8px)",
        }}
      />

      {/* Orbiting tilted rings */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <ellipse cx="50" cy="50" rx="48" ry="14" fill="none" stroke="#00c8ff" strokeWidth="0.25" opacity="0.5" />
          <ellipse cx="50" cy="50" rx="48" ry="14" fill="none" stroke="#00c8ff" strokeWidth="0.25" opacity="0.5" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="48" ry="14" fill="none" stroke="#00c8ff" strokeWidth="0.25" opacity="0.5" transform="rotate(120 50 50)" />
        </svg>
      </motion.div>

      {/* Globe sphere */}
      <motion.div
        className="absolute inset-[8%]"
        animate={{ rotateY: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d", perspective: 800 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(0,200,255,0.15)" />
              <stop offset="60%" stopColor="rgba(0,200,255,0.04)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#globeGrad)" stroke="#00c8ff" strokeOpacity="0.5" strokeWidth="0.4" />

          {/* Latitude lines */}
          {Array.from({ length: lines }).map((_, i) => {
            const y = (i + 1) * (96 / (lines + 1)) + 2;
            const ry = Math.sin(((i + 1) / (lines + 1)) * Math.PI) * 48;
            return (
              <ellipse
                key={`lat-${i}`}
                cx="50"
                cy={y}
                rx={ry}
                ry={1.2}
                fill="none"
                stroke="#00c8ff"
                strokeOpacity={0.35}
                strokeWidth="0.25"
              />
            );
          })}

          {/* Meridian lines */}
          {Array.from({ length: meridianCount }).map((_, i) => {
            const rot = (i * 180) / meridianCount;
            return (
              <ellipse
                key={`mer-${i}`}
                cx="50"
                cy="50"
                rx="48"
                ry="48"
                fill="none"
                stroke="#00c8ff"
                strokeOpacity={0.18}
                strokeWidth="0.25"
                transform={`rotate(${rot} 50 50) scale(${Math.cos((rot * Math.PI) / 180) || 0.02} 1) translate(${50 - 50 * (Math.cos((rot * Math.PI) / 180) || 0.02)} 0)`}
              />
            );
          })}

          {/* Glow nodes / SHIELD pins */}
          {[
            [50, 22],
            [68, 38],
            [32, 55],
            [62, 70],
            [44, 78],
            [22, 40],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="1" fill="#00c8ff" />
              <circle cx={cx} cy={cy} r="2.5" fill="none" stroke="#00c8ff" strokeOpacity="0.45" />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* center pulse */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00c8ff] shadow-[0_0_24px_#00c8ff] animate-pulse-arc" />
    </div>
  );
}