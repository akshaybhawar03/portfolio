import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BootSequence from "@/components/portfolio/BootSequence";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import About from "@/components/portfolio/About";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import Cursor from "@/components/portfolio/Cursor";

export default function Portfolio() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="relative bg-black text-white">
      <Cursor />
      {!booted && <BootSequence onComplete={() => setBooted(true)} />}

      <AnimatePresence>
        {booted && (
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />
            <main>
              <Hero visible={booted} />
              <Skills />
              <Projects />
              <About />
              <Contact />
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}