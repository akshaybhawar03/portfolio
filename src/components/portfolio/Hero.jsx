import { motion } from "framer-motion";
import { ArrowRight, Download, Box, Mail, Linkedin, FileText } from "lucide-react";

export default function Hero() {
  const scrollNext = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="w-full max-w-[1400px] mx-auto px-6 relative pt-24 pb-24 md:pt-32 md:pb-32 flex flex-col lg:flex-row gap-16 lg:gap-12 min-h-[90vh]">
      
      {/* Left Column: Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-[55%] flex flex-col items-start justify-center"
      >
        <div className="flex items-center gap-2 mb-8 px-4 py-1.5 bg-white border border-[#E6D8C8] rounded-full shadow-sm text-[10px] font-black tracking-[0.15em] text-[#DF6C3B] uppercase">
          <div className="w-2 h-2 rounded-full bg-[#DF6C3B] animate-pulse"></div>
          AVAILABLE FOR HIRE — FULL STACK DEVELOPER
        </div>

        {/* Serif Heading */}
        <h1 className="font-serif text-[4.5rem] lg:text-[6.5rem] xl:text-[7.5rem] text-[#1F1B18] leading-[0.9] tracking-tighter mb-8 whitespace-nowrap">
          Akshay <br/>
          <span className="text-[#DF6C3B] italic">Bhawar.</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#6E645B] max-w-lg mb-10 font-medium leading-relaxed">
          I design and code beautifully simple things, and I love what I do. Just simple like that!
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <button 
            onClick={scrollNext}
            className="px-8 py-4 bg-[#DF6C3B] text-white rounded-full font-bold text-sm tracking-wide hover:bg-[#C55E32] transition-colors flex items-center gap-2 shadow-lg shadow-[#DF6C3B]/20"
          >
            Explore Work <ArrowRight size={16} />
          </button>
          <a 
            href="#" 
            className="px-8 py-4 bg-transparent border border-[#DF6C3B] text-[#DF6C3B] rounded-full font-bold text-sm tracking-wide hover:bg-[#DF6C3B] hover:text-white transition-all flex items-center gap-2"
          >
            Get Resume <Download size={16} />
          </a>
        </div>

        {/* Text Links */}
        <div className="flex flex-wrap items-center gap-8 mb-16 border-b border-[#E6D8C8] pb-10 w-full max-w-xl">
          <a href="#" className="flex items-center gap-2 text-sm font-bold text-[#6E645B] hover:text-[#DF6C3B] transition-colors"><Mail size={16} /> Email</a>
          <a href="#" className="flex items-center gap-2 text-sm font-bold text-[#6E645B] hover:text-[#DF6C3B] transition-colors"><Linkedin size={16} /> LinkedIn</a>
          <a href="#" className="flex items-center gap-2 text-sm font-bold text-[#6E645B] hover:text-[#DF6C3B] transition-colors"><FileText size={16} /> Download Resume</a>
        </div>

        {/* Stats Row inside a white card */}
        <div className="bg-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between w-full max-w-xl shadow-sm border border-[#E6D8C8]">
          <div className="flex items-center gap-4">
            <h4 className="font-serif text-[2.5rem] font-black text-[#DF6C3B] leading-none">5+</h4>
            <span className="text-[10px] font-black text-[#6E645B] uppercase tracking-[0.1em] max-w-[60px] leading-tight">Years coding</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-[#E6D8C8]"></div>
          <div className="flex items-center gap-4">
            <h4 className="font-serif text-[2.5rem] font-black text-[#DF6C3B] leading-none">15+</h4>
            <span className="text-[10px] font-black text-[#6E645B] uppercase tracking-[0.1em] max-w-[60px] leading-tight">Projects shipped</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-[#E6D8C8]"></div>
          <div className="flex items-center gap-4">
            <h4 className="font-serif text-[2.5rem] font-black text-[#DF6C3B] leading-none">100%</h4>
            <span className="text-[10px] font-black text-[#6E645B] uppercase tracking-[0.1em] max-w-[60px] leading-tight">Client sat.</span>
          </div>
        </div>
      </motion.div>

      {/* Right Column: Organic 3D Paper-Cut SVG */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="w-full lg:w-[45%] relative flex items-center justify-center min-h-[500px]"
      >
        <div className="relative w-full max-w-[550px] aspect-[4/5] rounded-[3rem] bg-[#F6EFE7] border border-[#E6D8C8] shadow-2xl shadow-[#DF6C3B]/10 overflow-hidden flex items-center justify-center">
          
          <svg viewBox="0 0 800 1000" className="w-[120%] h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl">
            <defs>
              <filter id="paper-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="15" stdDeviation="20" floodColor="#000000" floodOpacity="0.15" />
              </filter>
              <filter id="paper-shadow-deep" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="25" stdDeviation="30" floodColor="#000000" floodOpacity="0.25" />
              </filter>
            </defs>

            <rect width="800" height="1000" fill="#E6D8C8" />
            <path d="M 800,0 C 600,50 500,200 650,350 C 750,450 600,600 800,1000 L 800,0 Z" fill="#8A4225" filter="url(#paper-shadow-deep)" />
            <path d="M 800,100 C 500,150 300,300 450,550 C 550,700 700,850 800,1000 L 800,100 Z" fill="#C55E32" filter="url(#paper-shadow)" />
            <path d="M 800,300 C 600,350 400,500 400,650 C 400,750 500,900 800,1000 L 800,300 Z" fill="#DF6C3B" filter="url(#paper-shadow)" />
            <path d="M 800,450 C 700,500 550,600 600,750 C 650,850 800,900 800,1000 L 800,450 Z" fill="#F6EFE7" filter="url(#paper-shadow)" />

            <circle cx="150" cy="800" r="120" fill="#DF6C3B" filter="url(#paper-shadow)" className="animate-pulse" style={{animationDuration: '4s'}} />
            <path d="M 0,200 C 150,250 200,100 0,0 L 0,200 Z" fill="#C55E32" filter="url(#paper-shadow)" />
          </svg>

          {/* Label Overlays matching reference */}
          <div className="absolute top-8 left-8 bg-white px-4 py-2 rounded-full border border-[#E6D8C8] shadow-sm flex items-center gap-2 text-[10px] font-black text-[#6E645B] uppercase tracking-widest z-10">
            LATEST PROJECT
          </div>

          <div className="absolute bottom-8 right-8 bg-white px-5 py-2.5 rounded-full border border-[#E6D8C8] shadow-sm flex items-center gap-2 text-[11px] font-black text-[#DF6C3B] uppercase tracking-widest z-10">
            <div className="w-2 h-2 rounded-full bg-[#DF6C3B]"></div>
            Finance AI
          </div>
        </div>
      </motion.div>
    </section>
  );
}