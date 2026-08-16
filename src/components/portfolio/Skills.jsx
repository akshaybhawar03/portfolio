import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/components/portfolio/data";

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 md:py-32 scroll-mt-24 border-t border-[#E6D8C8]/60 mt-12">
      <div className="flex flex-col gap-4 mb-16">
        <h2 className="font-serif text-4xl md:text-[3.5rem] font-black text-[#1F1B18] tracking-tighter leading-tight">
          A toolkit built to ship.
        </h2>
        <p className="text-lg text-[#6E645B] font-medium max-w-xl">
          Enterprise-grade architecture demands an elite arsenal. The core tech stack driving modern, scalable platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {SKILL_GROUPS.map((group, index) => {
          const num = `0${index + 1}`;
          const cleanTitle = group.title.replace(/ARRAY|CORE/, "").trim();
          
          // Match the colors from the reference image: 1=Orange, 2=Olive Green, 3=Beige
          let circleBg, textColor, waterMarkColor;
          if (index === 0) {
            circleBg = "bg-[#F2CBAA]"; textColor = "text-[#DF6C3B]"; waterMarkColor = "text-[#E6D8C8]";
          } else if (index === 1) {
            circleBg = "bg-[#E6D8C8]"; textColor = "text-[#9DA381]"; waterMarkColor = "text-[#E6D8C8]";
          } else {
            circleBg = "bg-[#F6EFE7]"; textColor = "text-[#8A4225]"; waterMarkColor = "text-[#E6D8C8]";
          }
          
          return (
            <motion.div 
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col border-t-2 border-[#E6D8C8] pt-6 group transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <div className={`w-10 h-10 rounded-full ${circleBg} border border-[#E6D8C8] flex items-center justify-center ${textColor} font-bold text-sm`}>
                  {num}
                </div>
                <div className={`font-serif text-5xl font-black ${waterMarkColor} transition-colors duration-300`}>
                  {num}
                </div>
              </div>

              <h3 className="font-serif text-2xl font-black text-[#1F1B18] mb-6 tracking-tight">
                {cleanTitle}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span 
                    key={skill.name}
                    className="px-4 py-2 bg-[#F6EFE7] border border-[#E6D8C8] rounded-full text-sm font-semibold text-[#6E645B] shadow-sm hover:border-[#DF6C3B] hover:text-[#C55E32] transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}