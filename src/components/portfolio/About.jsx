import { motion } from "framer-motion";
import { TIMELINE } from "@/components/portfolio/data";

export default function About() {
  return (
    <section id="about" className="w-full max-w-[1400px] mx-auto px-6 py-24 md:py-32 scroll-mt-24 border-t border-[#E6D8C8]">
      <div className="mb-20">
        <h2 className="font-serif text-[4rem] md:text-[5.5rem] font-black text-[#1F1B18] tracking-tighter leading-[0.9]">
          Rooted in Pune,<br/> building for everyone.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        {/* Left Column: Quote & Author */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-[45%] flex flex-col gap-10"
        >
          <div className="relative">
            <span className="absolute -top-10 -left-6 text-[6rem] font-serif font-black text-[#E6D8C8] opacity-50 leading-none">"</span>
            <h3 className="font-serif text-3xl md:text-[2.5rem] font-black text-[#1F1B18] leading-tight relative z-10">
              Code is the foundation. Design is the heart. The curiosity is what keeps it running.
            </h3>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#DF6C3B] flex items-center justify-center text-white font-serif font-black text-xl">
              A
            </div>
            <div>
              <h4 className="font-bold text-[#1F1B18] text-sm">Akshay Bhawar</h4>
              <p className="text-[#6E645B] text-xs font-bold uppercase tracking-widest mt-1">Full Stack Architect</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Paragraph & Timeline */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-[55%] flex flex-col gap-16"
        >
          <p className="text-[#6E645B] text-lg font-medium leading-relaxed">
            I design and code beautifully simple things, and I love what I do. Just simple like that! Having spent the past half-decade deep in the Javascript ecosystem, I now architect heavy-lifting SaaS platforms from the ground up, ensuring they are as beautiful as they are robust.
          </p>

          <div className="flex flex-col gap-8 border-l border-[#E6D8C8] pl-8 relative">
            {TIMELINE.map((item, index) => (
              <div key={item.year} className="relative group">
                <div className="absolute w-3 h-3 bg-[#F6EFE7] border-2 border-[#DF6C3B] rounded-full -left-[38px] top-1.5 group-hover:bg-[#DF6C3B] transition-colors"></div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-black text-[#DF6C3B] text-sm tracking-widest">{item.year}</span>
                  <h4 className="font-serif text-xl font-black text-[#1F1B18]">{item.title}</h4>
                </div>
                <p className="text-[#6E645B] font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}