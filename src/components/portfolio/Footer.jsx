import { motion } from "framer-motion";
import { FOOTER } from "@/constants/testIds";

const CREDITS = [
  { role: "DIRECTED BY", name: "AKSHAY BHAWAR" },
  { role: "WRITTEN BY", name: "AKSHAY BHAWAR" },
  { role: "ENGINEERED BY", name: "AKSHAY BHAWAR" },
  { role: "DESIGN BY", name: "AKSHAY BHAWAR" },
  { role: "STACK", name: "REACT · TYPESCRIPT · NODE · MONGODB" },
  { role: "POWERED BY", name: "CAFFEINE & CURIOSITY" },
  { role: "STUDIO", name: "AKSHAY.EXE STUDIOS · 2025" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      role="contentinfo"
      data-testid={FOOTER.root}
      className="relative w-full overflow-hidden border-t border-[#00c8ff]/15"
    >
      <div className="sr-only">
        <h2>About This Portfolio</h2>
        <p>
          Welcome to the official portfolio of Akshay Bhawar, a top Full Stack Developer and Design Engineer based in Pune, Maharashtra. 
          Specializing in React, Next.js, Node.js, and MongoDB, Akshay is available for hire in India and worldwide. 
          Whether you need a MERN Stack Developer, a Next.js Developer in India, or a Web Developer in Daund, 
          Akshay delivers highly optimized, scalable, and cinematic web experiences. 
          Known as the Best Full Stack Developer Maharashtra for combining modern tech with stunning UI/UX design.
        </p>
      </div>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 relative">
        <div className="font-mono text-[11px] tracking-[0.4em] text-[#00c8ff] text-center mb-10">
          // END OF FILE
        </div>

        <div className="font-display font-black text-white text-center text-3xl md:text-5xl tracking-[0.18em] mb-12 text-glow-arc">
          AKSHAY.EXE
        </div>

        {/* Scrolling end credits */}
        <div className="relative h-[260px] overflow-hidden mask-fade">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: "-110%" }}
            viewport={{ once: false }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 flex flex-col items-center gap-6"
          >
            {[...CREDITS, ...CREDITS].map((c, i) => (
              <div key={i} className="text-center">
                <div className="font-mono text-[10px] tracking-[0.45em] text-white/40">{c.role}</div>
                <div className="font-display font-bold text-white tracking-[0.2em] text-lg md:text-xl mt-1">
                  {c.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Post-credits scene */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          data-testid={FOOTER.postCredits}
          className="mt-16 text-center"
        >
          <div className="font-mono text-[10px] tracking-[0.4em] text-[#ff6b35] mb-2">// POST-CREDITS SCENE</div>
          <div className="font-display font-black text-white text-2xl md:text-4xl tracking-[0.15em] text-glow-gold">
            AKSHAY WILL RETURN
          </div>
          <div className="font-mono text-[11px] tracking-[0.3em] text-white/40 mt-3">
            ...in production. v2.0 currently in development.
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[10px] tracking-[0.3em] text-white/40">
          <div>© 2025 AKSHAY.EXE STUDIOS · ALL FRAMES RESERVED</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c8ff] animate-pulse-arc" />
            <span>BUILT IN PUNE · DEPLOYED EVERYWHERE</span>
          </div>
        </div>
      </div>

      <style>{`
        .mask-fade {
          mask-image: linear-gradient(180deg, transparent 0%, #000 15%, #000 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 15%, #000 85%, transparent 100%);
        }
      `}</style>
    </footer>
  );
}