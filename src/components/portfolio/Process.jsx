import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Discovery & Architecture",
    description: "Deep dive into your requirements, market context, and technical constraints. We architect the database schema, system flow, and tech stack before writing a single line of code.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    id: "02",
    title: "UI/UX Engineering",
    description: "Crafting wireframes and high-fidelity prototypes. I focus on creating a visually striking, premium user experience tailored perfectly to your target audience.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    id: "03",
    title: "Full-Stack Development",
    description: "Building the engine. Writing clean, scalable, and secure code using modern frameworks. I ensure high performance, responsiveness, and seamless API integrations.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: "04",
    title: "Launch & Handover",
    description: "Rigorous testing, optimization, and deployment to production. I provide complete documentation and smooth handover, ensuring you have total control of your new asset.",
    icon: <Rocket className="w-6 h-6" />,
  }
];

export default function Process() {
  return (
    <section id="process" className="w-full scroll-mt-24 py-32">
      <div className="flex flex-col gap-2 mb-16">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Workflow</h2>
        <p className="text-4xl font-extrabold text-gray-900 tracking-tight">My Freelance Process</p>
      </div>
      
      <div className="flex flex-col gap-6">
        {PROCESS_STEPS.map((step, index) => (
          <motion.div 
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className="glass-card p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8 group hover:border-blue-200"
          >
            {/* Step Number & Icon */}
            <div className="flex items-center gap-6 md:w-1/4 shrink-0">
              <span className="text-5xl font-black text-gray-100 group-hover:text-blue-50 transition-colors duration-500">
                {step.id}
              </span>
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                {step.icon}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
