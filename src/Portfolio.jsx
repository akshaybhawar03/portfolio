import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Github, Linkedin, Mail, ArrowUpRight, ArrowRight, MapPin,
  MessageCircle, Instagram, Circle, Menu, X,
} from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { HERO_IMG, stats, marquee, toolkit, projects, timeline, testimonials, contactInfo } from "./data";

const API = import.meta.env.VITE_BACKEND_URL ? `${import.meta.env.VITE_BACKEND_URL}/api` : 'http://localhost:8000/api';

/* ---------- motion helpers ---------- */
const ease = [0.2, 0.8, 0.2, 1];

const Reveal = ({ children, delay = 0, y = 28, className = "", ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, ease, delay }}
    {...rest}
  >
    {children}
  </motion.div>
);

const LineReveal = ({ lines, className }) => (
  <span className={className}>
    {lines.map((ln, i) => (
      <span className="line-mask" key={i}>
        <motion.span
          className="block"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease, delay: 0.15 + i * 0.12 }}
        >
          {ln}
        </motion.span>
      </span>
    ))}
  </span>
);

/* ---------- Nav ---------- */
const links = [
  { label: "Work", id: "work" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#f7f1e7]/70 border-b border-[#e6dccb]"
      data-testid="navbar"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("top")} className="flex items-center gap-2.5" data-testid="logo">
          <img src="/imgs/logo.png" alt="Akshay Bhawar" className="w-8 h-8 rounded-full object-cover border border-[#e6dccb]" />
          <span className="font-medium tracking-tight text-[#2b2620]">Akshay Bhawar</span>
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#58503f]">
          {links.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="relative group" data-testid={`nav-${l.id}`}>
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#d07a3f] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:inline-flex items-center gap-1.5 text-sm px-5 py-2 rounded-full border border-[#2b2620] text-[#2b2620] hover:bg-[#2b2620] hover:text-[#f7f1e7] transition-colors duration-300"
          data-testid="hire-me-btn"
        >
          HIRE ME
        </button>
        <button className="md:hidden text-[#2b2620]" onClick={() => setOpen(!open)} data-testid="mobile-menu-toggle">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-4 text-[#58503f]">
          {links.map((l) => (
            <button key={l.id} onClick={() => { scrollTo(l.id); setOpen(false); }} className="text-left" data-testid={`mobile-nav-${l.id}`}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

/* ---------- Hero ---------- */
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, -6]);

  return (
    <header ref={ref} id="top" className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-32 pb-16">
      <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="eyebrow flex items-center gap-3 mb-6" data-testid="hero-eyebrow"
          >
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d07a3f] animate-pulse" /> Available for work
            </span>
            <span className="w-8 h-px bg-[#cdbfa7]" /> Full stack developer
          </motion.p>

          <h1 className="font-serif-d leading-[0.92] text-[#2b2620] text-6xl sm:text-7xl lg:text-8xl tracking-tight" data-testid="hero-name">
            <LineReveal lines={["Akshay"]} className="block font-medium" />
            <LineReveal lines={["Bhawar."]} className="block italic font-light text-[#d07a3f]" />
          </h1>

          <Reveal delay={0.5} className="mt-7 max-w-md font-serif-d text-lg text-[#58503f] leading-relaxed">
            I design and build calm, human software — from the first pixel to the last line of backend logic. Based in <span className="text-[#2b2620]">Pune, India</span>, crafting products people actually enjoy using.
          </Reveal>

          <Reveal delay={0.65} className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={() => scrollTo("work")} className="btn-orange inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium" data-testid="see-work-btn">
              SEE MY WORK <ArrowRight size={16} />
            </button>
            <button onClick={() => scrollTo("contact")} className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium" data-testid="get-in-touch-btn">
              GET IN TOUCH
            </button>
          </Reveal>

          <Reveal delay={0.8} className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#58503f]">
            <a href="https://github.com/akshaybhawar03" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#d07a3f] transition-colors" data-testid="hero-github"><Github size={16} /> GitHub</a>
            <a href="https://www.linkedin.com/in/akshay-bhawar-5a7848291/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKTCruxv6RAKUQi37Ywu5UQ%3D%3D" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#d07a3f] transition-colors" data-testid="hero-linkedin"><Linkedin size={16} /> LinkedIn</a>
            <a href="mailto:bhawarakshay2003@gmail.com" className="flex items-center gap-2 hover:text-[#d07a3f] transition-colors" data-testid="hero-email"><Mail size={16} /> bhawarakshay2003@gmail.com</a>
          </Reveal>
        </div>

        {/* clay hero card with parallax */}
        <motion.div style={{ y, rotate: rot }} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.3 }}
            className="relative rounded-[2rem] overflow-hidden border border-[#e6dccb] shadow-[0_40px_80px_-40px_rgba(43,38,32,0.4)]"
            data-testid="hero-visual"
          >
            <img src={HERO_IMG} alt="Abstract clay render" className="w-full h-[420px] object-cover" />
            <div className="absolute top-4 left-4 bg-[#fdfaf4]/85 backdrop-blur px-4 py-2.5 rounded-xl">
              <p className="eyebrow text-[0.6rem] mb-0.5">Currently</p>
              <p className="text-sm font-serif-d text-[#2b2620]">Building for the web</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-[#2b2620] text-[#f7f1e7] px-4 py-2 rounded-full text-xs flex items-center gap-2">
              <Circle size={8} className="fill-[#7cae7c] text-[#7cae7c]" /> Open to roles
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* stats */}
      <Reveal delay={0.4} className="mt-16 grid grid-cols-3 gap-4 max-w-lg" data-testid="stats">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-serif-d text-3xl sm:text-4xl text-[#d07a3f]">{s.value}</p>
            <p className="text-xs text-[#58503f] mt-1">{s.label}</p>
          </div>
        ))}
      </Reveal>
    </header>
  );
};

/* ---------- Tech marquee ---------- */
const TechStrip = () => (
  <div className="border-y border-[#e6dccb] py-5 overflow-hidden bg-[#fbf6ee]" data-testid="tech-marquee">
    <div className="tech-strip">
      {[...marquee, ...marquee].map((t, i) => (
        <span key={i} className="inline-flex items-center gap-6 px-6 text-lg text-[#2b2620] font-serif-d">
          {t} <ArrowRight size={16} className="text-[#d07a3f]" />
        </span>
      ))}
    </div>
  </div>
);

/* ---------- Section header ---------- */
const SectionHead = ({ eyebrow, title, sub, right }) => (
  <div className="mb-12">
    <Reveal className="flex items-center justify-between">
      <span className="eyebrow">{eyebrow}</span>
      {right && <span className="eyebrow hidden sm:block">{right}</span>}
    </Reveal>
    <div className="mt-5 border-t border-[#e6dccb] pt-8 grid md:grid-cols-[1.3fr_1fr] gap-6 items-end">
      <Reveal>
        <h2 className="font-serif-d text-4xl sm:text-5xl lg:text-6xl text-[#2b2620] tracking-tight leading-none">{title}</h2>
      </Reveal>
      {sub && <Reveal delay={0.1}><p className="font-serif-d text-lg text-[#58503f] leading-relaxed">{sub}</p></Reveal>}
    </div>
  </div>
);

/* ---------- Skills ---------- */
const Skills = () => (
  <section id="skills" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
    <SectionHead eyebrow="[01]" right="What I work with" title="A toolkit built to ship." sub="Full-stack fluency across the modern web — from expressive interfaces to reliable infrastructure." />
    <div className="grid md:grid-cols-3 gap-5">
      {toolkit.map((cat, i) => (
        <Reveal key={cat.title} delay={i * 0.1}>
          <div className="card-soft rounded-2xl p-7 h-full" data-testid={`toolkit-${cat.title.toLowerCase().replace(/\W/g, '-')}`}>
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-[#f3e7d6] grid place-items-center">
                <Circle size={16} className="text-[#d07a3f]" />
              </div>
              <span className="font-serif-d text-4xl text-[#e0d3ba]">{cat.n}</span>
            </div>
            <h3 className="mt-6 font-serif-d text-2xl text-[#2b2620]">{cat.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {cat.tags.map((t) => (
                <span key={t} className="text-xs text-[#58503f] border border-[#e6dccb] rounded-full px-3 py-1 hover:border-[#d07a3f] hover:text-[#d07a3f] transition-colors">{t}</span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

/* ---------- Project card ---------- */
const ProjectCard = ({ p, big }) => (
  <Reveal className={big ? "md:col-span-2" : ""}>
    <div className={`group card-soft rounded-2xl overflow-hidden h-full ${big ? "grid md:grid-cols-2" : ""}`} data-testid={`project-${p.title.toLowerCase().replace(/\W/g, '-')}`}>
      <div className="overflow-hidden">
        <img src={p.img} alt={p.title} className={`img-zoom w-full object-cover ${big ? "h-full min-h-[260px]" : "h-52"}`} />
      </div>
      <div className="p-7 flex flex-col">
        <span className="eyebrow" style={{ color: p.accent }}>{p.category}</span>
        <h3 className="mt-3 font-serif-d text-2xl text-[#2b2620]">{p.title}</h3>
        <p className="mt-3 text-sm text-[#58503f] leading-relaxed">{p.desc}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="text-[0.7rem] text-[#58503f] border border-[#e6dccb] rounded-full px-2.5 py-1">{t}</span>
          ))}
        </div>
        {p.link ? (
          <a href={p.link} target="_blank" rel="noreferrer" className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium w-fit group/link ${big ? 'text-[#d07a3f]' : 'text-[#58503f] hover:text-[#d07a3f] transition-colors'}`}>
            View live website <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        ) : big && (
          <button onClick={() => scrollTo("contact")} className="mt-6 inline-flex items-center gap-1.5 text-sm text-[#d07a3f] font-medium w-fit group/link">
            View case study <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </button>
        )}
      </div>
    </div>
  </Reveal>
);

const Work = () => (
  <section id="work" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
    <SectionHead eyebrow="[02]" right="Selected work" title="Things I've built." sub="A mix of products and platforms — each one shipped with care, from concept to deploy." />
    <div className="grid md:grid-cols-2 gap-5">
      <ProjectCard p={projects[0]} big />
      {projects.slice(1).map((p) => <ProjectCard key={p.title} p={p} />)}
    </div>
  </section>
);

/* ---------- Testimonials ---------- */
const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 overflow-hidden">
      <SectionHead eyebrow="[03]" right="Kind words" title="Trusted by the people I build with." sub="A few words from founders, leads, and teams I've shipped calm software alongside." />
      <div className="mt-10 relative min-h-[350px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5, ease }}
            className="w-full absolute"
          >
            <figure className="card-soft rounded-2xl p-8 h-full flex flex-col max-w-3xl mx-auto" data-testid={`testimonial-${index}`}>
              <span className="font-serif-d text-5xl leading-none text-[#e0c9a8] mb-2">&ldquo;</span>
              <blockquote className="font-serif-d text-lg md:text-xl text-[#2b2620] leading-relaxed flex-1 min-h-[120px]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-[#e6dccb]">
                <span className="w-10 h-10 rounded-full bg-[#f3e7d6] text-[#d07a3f] grid place-items-center font-serif-d text-base">{t.initial}</span>
                <div>
                  <div className="font-serif-d text-base text-[#2b2620]">{t.name}</div>
                  <div className="text-sm text-[#58503f]">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === index ? 'bg-[#d07a3f]' : 'bg-[#e6dccb]'}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

/* ---------- About ---------- */
const About = () => (
  <section id="about" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
    <SectionHead eyebrow="[04]" right="A little about me" title="Rooted in Pune, building for everyone." />
    <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-12">
      <Reveal>
        <div className="sticky top-24">
          <div className="relative mb-12 max-w-sm">
            <div className="card-soft rounded-[1.5rem] border border-[#e6dccb] overflow-hidden shadow-lg bg-[#fcf9f4]">
              <div className="flex items-center gap-2 px-5 py-4 border-b border-[#e6dccb]/60 bg-[#f8f3eb]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#e3aba3]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#e0c9a8]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#b8cfb8]" />
                <span className="ml-2 font-mono text-xs text-[#a2937d]">akshay.config.js</span>
              </div>
              <div className="p-6 font-mono text-[13px] leading-relaxed overflow-x-auto text-[#58503f]">
                <p><span className="text-[#a86532]">const</span> <span className="text-[#2b2620]">developer</span> <span className="text-[#a86532]">=</span> {'{'}</p>
                <p className="pl-4"><span className="text-[#758461]">name:</span> <span className="text-[#c17a52]">'Akshay Bhawar'</span>,</p>
                <p className="pl-4"><span className="text-[#758461]">role:</span> <span className="text-[#c17a52]">'Full Stack Engineer'</span>,</p>
                <p className="pl-4"><span className="text-[#758461]">location:</span> <span className="text-[#c17a52]">'Pune, India'</span>,</p>
                <p className="pl-4"><span className="text-[#758461]">skills:</span> {'['}</p>
                <p className="pl-8"><span className="text-[#c17a52]">'React'</span>, <span className="text-[#c17a52]">'Node.js'</span>, <span className="text-[#c17a52]">'MongoDB'</span>,</p>
                <p className="pl-8"><span className="text-[#c17a52]">'Tailwind'</span>, <span className="text-[#c17a52]">'FastAPI'</span></p>
                <p className="pl-4">{']'},</p>
                <p className="pl-4"><span className="text-[#758461]">passion:</span> <span className="text-[#c17a52]">'Building scalable, calm software'</span></p>
                <p>{'};'}</p>
                <p className="mt-4"><span className="text-[#a86532]">export default</span> <span className="text-[#2b2620]">developer</span>;</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d07a3f] rounded-full blur-3xl opacity-20 pointer-events-none" />
          </div>
          <p className="eyebrow mb-5">My philosophy</p>
          <blockquote className="font-serif-d text-2xl sm:text-3xl leading-snug text-[#2b2620]">
            "Code is the suit. Design is the heart. The curiosity is what keeps it running."
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[#d07a3f] text-white grid place-items-center font-serif-d text-sm">A</span>
            <div>
              <p className="text-sm font-medium text-[#2b2620]">Akshay Bhawar</p>
              <p className="text-xs text-[#a2937d]">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <p className="font-serif-d text-lg text-[#58503f] leading-relaxed">
            I am an excited freelancer and highly technical Full Stack Developer based in Pune, India. I specialize in building robust, scalable software architectures from the ground up while maintaining a deep focus on pixel-perfect frontend experiences.
          </p>
          <p className="mt-5 font-serif-d text-lg text-[#58503f] leading-relaxed">
            With a deep passion for modern web technologies, I don't just write code — I engineer technical solutions that help businesses scale. I'm actively taking on new freelance projects and always excited to tackle complex engineering challenges.
          </p>
        </Reveal>

        <p className="eyebrow mt-12 mb-6">The journey</p>
        <div className="relative pl-6">
          <div className="absolute left-[3px] top-1 bottom-1 w-px bg-[#e6dccb]" />
          {timeline.map((t, i) => (
            <Reveal key={t.year + t.title} delay={i * 0.06} className="relative pb-8 last:pb-0">
              <span className="absolute -left-[22px] top-1 w-2.5 h-2.5 rounded-full bg-[#d07a3f] ring-4 ring-[#f7f1e7]" />
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-medium text-[#d07a3f]">{t.year}</span>
                <span className="font-serif-d text-lg text-[#2b2620]">{t.title}</span>
              </div>
              <p className="mt-1 text-sm text-[#58503f]">{t.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------- Contact ---------- */
const iconMap = { mail: Mail, message: MessageCircle, linkedin: Linkedin, pin: MapPin };

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    setSending(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d8b2105f-7251-472a-aafb-c792cf67f746",
          from_name: "Portfolio Contact Form",
          name: form.name,
          email: form.email,
          subject: form.subject || "New Portfolio Inquiry",
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <SectionHead eyebrow="[05]" right="Let's talk" title="Let's build something." sub="Have a project, a role, or just an idea? My inbox is always open — I reply within 24 hours." />
      <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-6">
        <Reveal>
          <div className="card-soft rounded-2xl p-7 min-h-[400px] flex flex-col justify-center" data-testid="contact-form">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={submit} 
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="eyebrow block mb-2">Your name</label>
                      <input className="field" placeholder="Jane Doe" value={form.name} onChange={set("name")} data-testid="contact-name" />
                    </div>
                    <div>
                      <label className="eyebrow block mb-2">Your email</label>
                      <input className="field" type="email" placeholder="jane@example.com" value={form.email} onChange={set("email")} data-testid="contact-email" />
                    </div>
                  </div>
                  <div>
                    <label className="eyebrow block mb-2">Subject</label>
                    <input className="field" placeholder="Let's talk about..." value={form.subject} onChange={set("subject")} data-testid="contact-subject" />
                  </div>
                  <div>
                    <label className="eyebrow block mb-2">Message</label>
                    <textarea rows={4} className="field resize-none" placeholder="Tell me about your project..." value={form.message} onChange={set("message")} data-testid="contact-message" />
                  </div>
                  <button type="submit" disabled={sending} className="btn-orange w-full py-3.5 rounded-full text-sm font-medium inline-flex items-center justify-center gap-2 disabled:opacity-60" data-testid="contact-submit">
                    {sending ? "SENDING..." : <>SEND MESSAGE <ArrowRight size={16} /></>}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 bg-[#7cae7c]/20 text-[#7cae7c] rounded-full flex items-center justify-center mx-auto mb-6">
                    <motion.svg 
                      initial={{ pathLength: 0 }} 
                      animate={{ pathLength: 1 }} 
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                    </motion.svg>
                  </div>
                  <h3 className="font-serif-d text-3xl text-[#2b2620] mb-3">Message sent!</h3>
                  <p className="text-[#58503f] max-w-sm mx-auto mb-8">
                    Thanks for reaching out! I've received your message and will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-4">
          <div className="card-soft rounded-2xl p-7">
            <p className="eyebrow mb-5">Say hello</p>
            <div className="space-y-4">
              {contactInfo.map((c) => {
                const Icon = iconMap[c.icon];
                return (
                  <div key={c.label} className="flex items-center gap-3" data-testid={`contact-info-${c.icon}`}>
                    <span className="w-9 h-9 rounded-lg bg-[#f3e7d6] grid place-items-center shrink-0"><Icon size={15} className="text-[#d07a3f]" /></span>
                    <div>
                      <p className="text-[0.62rem] tracking-[0.2em] text-[#a2937d] uppercase">{c.label}</p>
                      {c.link ? (
                        <a href={c.link} target="_blank" rel="noreferrer" className="text-sm text-[#2b2620] hover:text-[#d07a3f] transition-colors">
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#2b2620]">{c.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rounded-2xl p-7 bg-[#f3e7d6] border border-[#e6dccb]">
            <p className="eyebrow mb-2" style={{ color: "#d07a3f" }}>Availability</p>
            <p className="text-sm text-[#58503f] leading-relaxed">Currently open to freelance projects and full-time roles. Let's make something people love.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ---------- Footer ---------- */
const Footer = () => (
  <footer className="border-t border-[#e6dccb] bg-[#fbf6ee]">
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <img src="/imgs/logo.png" alt="Akshay Bhawar" className="w-8 h-8 rounded-full object-cover border border-[#e6dccb]" />
            <span className="font-medium text-[#2b2620]">Akshay Bhawar</span>
          </div>
          <p className="font-serif-d text-[#58503f] max-w-sm leading-relaxed">Full Stack Developer in Pune, India. Building calm, human software that ships and ships well.</p>
        </div>
        <div className="flex flex-col md:items-end gap-4">
          <div className="flex gap-6 text-sm text-[#58503f]">
            {links.map((l) => <button key={l.id} onClick={() => scrollTo(l.id)} className="hover:text-[#d07a3f] transition-colors">{l.label}</button>)}
          </div>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/akshay-bhawar-5a7848291/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKTCruxv6RAKUQi37Ywu5UQ%3D%3D" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-[#e6dccb] grid place-items-center text-[#58503f] hover:bg-[#d07a3f] hover:text-white hover:border-[#d07a3f] transition-colors">
              <Linkedin size={15} />
            </a>
            <a href="https://www.instagram.com/akshay_bhawar_3/?__pwa=1#" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-[#e6dccb] grid place-items-center text-[#58503f] hover:bg-[#d07a3f] hover:text-white hover:border-[#d07a3f] transition-colors">
              <Instagram size={15} />
            </a>
            <a href="https://github.com/akshaybhawar03" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-[#e6dccb] grid place-items-center text-[#58503f] hover:bg-[#d07a3f] hover:text-white hover:border-[#d07a3f] transition-colors">
              <Github size={15} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-[#e6dccb] flex flex-col sm:flex-row justify-between gap-2 text-xs text-[#a2937d]">
        <p>© 2025 Akshay Bhawar. All rights reserved.</p>
        <p>Pune, India</p>
      </div>
    </div>
  </footer>
);

export default function Portfolio() {
  return (
    <div className="grain relative">
      <Nav />
      <Hero />
      <TechStrip />
      <Skills />
      <Work />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
