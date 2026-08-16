import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import About from "@/components/portfolio/About";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-[#fafafa] text-slate-900 selection:bg-indigo-600 selection:text-white">
      <Navbar />
      
      <main className="w-full flex flex-col items-center">
        {/* We will apply padding directly to the sections as requested by the reference layout flow */}
        <Hero />
        
        {/* Marquee will be placed here or inside Hero */}
        <div className="w-full border-y border-gray-200/60 bg-white/50 overflow-hidden flex whitespace-nowrap py-4">
          <div className="animate-marquee flex gap-12 text-sm font-bold text-gray-400 tracking-widest uppercase">
            <span>React</span><span>•</span>
            <span>Next.js</span><span>•</span>
            <span>TypeScript</span><span>•</span>
            <span>Node.js</span><span>•</span>
            <span>MongoDB</span><span>•</span>
            <span>Tailwind</span><span>•</span>
            <span>Python</span><span>•</span>
            <span>Docker</span><span>•</span>
            <span>GraphQL</span><span>•</span>
            {/* Duplicate for seamless looping */}
            <span>React</span><span>•</span>
            <span>Next.js</span><span>•</span>
            <span>TypeScript</span><span>•</span>
            <span>Node.js</span><span>•</span>
            <span>MongoDB</span><span>•</span>
            <span>Tailwind</span><span>•</span>
            <span>Python</span><span>•</span>
            <span>Docker</span><span>•</span>
            <span>GraphQL</span><span>•</span>
          </div>
        </div>

        <div className="max-w-[1400px] w-full px-6 flex flex-col">
          <Skills />
          <Projects />
          <About />
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}