import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare, Linkedin } from "lucide-react";
import { PROFILE } from "@/components/portfolio/data";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("Message transmitted successfully.");
    }, 1500);
  };

  return (
    <section id="contact" className="w-full py-24 md:py-32 scroll-mt-24 border-t border-[#E6D8C8]/60 mt-12 mb-20">
      <div className="flex flex-col gap-4 mb-16 md:mb-24">
        <h2 className="font-serif text-4xl md:text-[4rem] font-black text-[#1F1B18] tracking-tighter leading-tight max-w-4xl">
          Let's build something.
        </h2>
        <p className="text-lg text-[#6E645B] font-medium max-w-xl">
          Have a project in mind, a team that needs scaling, or just want to discuss system architecture? Let's connect.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:w-7/12"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-bold text-[#C55E32] uppercase tracking-wider">Your Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white border-b-2 border-[#E6D8C8] py-3 px-2 text-[#1F1B18] focus:outline-none focus:border-[#DF6C3B] transition-colors placeholder:text-[#E6D8C8] font-medium"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-bold text-[#C55E32] uppercase tracking-wider">Your Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-white border-b-2 border-[#E6D8C8] py-3 px-2 text-[#1F1B18] focus:outline-none focus:border-[#DF6C3B] transition-colors placeholder:text-[#E6D8C8] font-medium"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#C55E32] uppercase tracking-wider">Subject</label>
              <input 
                type="text" 
                required
                className="w-full bg-white border-b-2 border-[#E6D8C8] py-3 px-2 text-[#1F1B18] focus:outline-none focus:border-[#DF6C3B] transition-colors placeholder:text-[#E6D8C8] font-medium"
                placeholder="Architecture Consultation"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#C55E32] uppercase tracking-wider">Message</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-white border border-[#E6D8C8] rounded-xl p-4 text-[#1F1B18] focus:outline-none focus:border-[#DF6C3B] transition-colors placeholder:text-[#E6D8C8] font-medium resize-none mt-2"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-5 bg-[#DF6C3B] text-white rounded-xl font-bold text-lg hover:bg-[#C55E32] transition-colors flex items-center justify-center gap-3 disabled:opacity-70 mt-4 shadow-lg shadow-[#DF6C3B]/20"
            >
              {isSubmitting ? "Transmitting..." : "Send Message"}
              <Send size={20} className={isSubmitting ? "animate-pulse" : ""} />
            </button>
          </form>
        </motion.div>

        {/* Right Column: Contact Details */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-5/12 flex flex-col gap-6"
        >
          {/* Detail Box 1 */}
          <div className="flex items-center gap-6 p-6 border border-[#E6D8C8] rounded-2xl bg-[#F6EFE7] group hover:border-[#DF6C3B] transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#E6D8C8]/30 flex items-center justify-center shrink-0 group-hover:bg-[#DF6C3B] transition-colors">
              <Mail className="w-6 h-6 text-[#DF6C3B] group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#9DA381] uppercase tracking-widest mb-1">Direct Line</p>
              <a href={`mailto:${PROFILE.email}`} className="font-serif text-lg font-black text-[#1F1B18] hover:text-[#C55E32]">{PROFILE.email}</a>
            </div>
          </div>

          {/* Detail Box 2 */}
          <div className="flex items-center gap-6 p-6 border border-[#E6D8C8] rounded-2xl bg-[#F6EFE7] group hover:border-[#DF6C3B] transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#E6D8C8]/30 flex items-center justify-center shrink-0 group-hover:bg-[#DF6C3B] transition-colors">
              <MapPin className="w-6 h-6 text-[#DF6C3B] group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#9DA381] uppercase tracking-widest mb-1">Base of Operations</p>
              <p className="font-serif text-lg font-black text-[#1F1B18]">{PROFILE.location}</p>
            </div>
          </div>

          {/* Detail Box 3 */}
          <div className="flex items-center gap-6 p-6 border border-[#E6D8C8] rounded-2xl bg-[#F6EFE7] group hover:border-[#DF6C3B] transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#E6D8C8]/30 flex items-center justify-center shrink-0 group-hover:bg-[#DF6C3B] transition-colors">
              <Linkedin className="w-6 h-6 text-[#DF6C3B] group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#9DA381] uppercase tracking-widest mb-1">Professional Network</p>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="font-serif text-lg font-black text-[#1F1B18] hover:text-[#C55E32]">Connect on LinkedIn</a>
            </div>
          </div>

          {/* Abstract Filler Block matching the layout */}
          <div className="mt-6 p-8 bg-[#E6D8C8]/20 rounded-2xl border border-[#E6D8C8] flex flex-col gap-4">
             <div className="w-8 h-8 text-[#DF6C3B]"><MessageSquare /></div>
             <p className="text-sm font-bold text-[#C55E32] uppercase tracking-widest leading-relaxed">
               Communication protocols are open 24/7. Expect a response within one business day for all standard inquiries.
             </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}