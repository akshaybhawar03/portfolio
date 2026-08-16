import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/components/portfolio/data";

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-[1400px] mx-auto px-6 py-24 md:py-32 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-t border-[#E6D8C8] pt-12">
        <div className="flex flex-col gap-2">
          <h2 className="font-serif text-[3.5rem] font-black text-[#1F1B18] tracking-tighter leading-tight">
            Things I've built.
          </h2>
          <p className="text-lg text-[#6E645B] font-medium max-w-2xl mt-2">
            A selection of projects that showcase what I can do for you. Dive into them to get to know my approach.
          </p>
        </div>
        <div className="hidden md:flex">
           <a href="#" className="text-xs font-black text-[#1F1B18] uppercase tracking-[0.2em] border-b border-[#1F1B18] pb-1 hover:text-[#DF6C3B] hover:border-[#DF6C3B] transition-colors">
             View All Projects →
           </a>
        </div>
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        {PROJECTS.map((project, index) => {
          const isFeatured = index === 0;
          
          if (isFeatured) {
            return (
              <motion.article 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center group w-full"
              >
                <div className="w-full lg:w-[65%] h-[400px] md:h-[500px] relative overflow-hidden rounded-3xl transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-xl">
                   <img src={project.img} alt={project.name} className="w-full h-full object-cover rounded-3xl" />
                </div>
                <div className="w-full lg:w-[35%] flex flex-col gap-4">
                  <h4 className="text-[10px] font-black text-[#DF6C3B] uppercase tracking-[0.2em] mb-1">{project.classification}</h4>
                  <h3 className="font-serif text-[2.5rem] font-black text-[#1F1B18] tracking-tight leading-tight mb-2">{project.name}</h3>
                  <p className="text-[#6E645B] leading-relaxed font-medium text-base mb-2">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 bg-white border border-[#E6D8C8] text-[#6E645B] rounded-sm text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={project.link || "#"} target={project.link ? "_blank" : undefined} rel={project.link ? "noreferrer" : undefined} className="inline-flex items-center gap-2 text-[#DF6C3B] font-bold text-sm tracking-wide hover:text-[#C55E32] transition-colors w-max group-hover:gap-3 duration-300">
                    {project.link ? "View live website" : "View project"} <ArrowRight size={16} />
                  </a>
                </div>
              </motion.article>
            );
          }

          // Render normal 2-column grid for remaining projects
          // Group them into rows of 2
          return null; // Handled below
        })}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {PROJECTS.slice(1).map((project, index) => {
            return (
              <motion.article 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                className="flex flex-col gap-6 group w-full"
              >
                <div className="w-full h-[300px] md:h-[350px] relative overflow-hidden rounded-3xl transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-xl">
                   <img src={project.img} alt={project.name} className="w-full h-full object-cover rounded-3xl" />
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-[10px] font-black text-[#DF6C3B] uppercase tracking-[0.2em]">{project.classification}</h4>
                  <h3 className="font-serif text-3xl font-black text-[#1F1B18] tracking-tight">{project.name}</h3>
                  <p className="text-[#6E645B] leading-relaxed font-medium text-sm md:text-base max-w-md mb-2">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 bg-white border border-[#E6D8C8] text-[#6E645B] rounded-sm text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={project.link || "#"} target={project.link ? "_blank" : undefined} rel={project.link ? "noreferrer" : undefined} className="inline-flex items-center gap-2 text-[#DF6C3B] font-bold text-sm tracking-wide hover:text-[#C55E32] transition-colors w-max group-hover:gap-3 duration-300">
                    {project.link ? "View live website" : "View project"} <ArrowRight size={16} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}