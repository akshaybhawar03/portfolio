import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Send, Github, Linkedin, MapPin, Mail } from "lucide-react";
import ChapterCard from "@/components/portfolio/ChapterCard";
import { CONTACT } from "@/constants/testIds";
import { PROFILE } from "@/components/portfolio/data";

const EMAILJS_SERVICE_ID = "service_j25s9c2";
const EMAILJS_TEMPLATE_ID = "template_vd9yz34";
const EMAILJS_PUBLIC_KEY = "pxVTReSx11DFWsxC4";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("TRANSMISSION ABORTED · Required fields missing");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name.trim(),
            from_email: form.email.trim(),
            subject: form.subject.trim() || "INCOMING TRANSMISSION",
            message: form.message.trim(),
          },
        }),
      });
      if (res.ok) {
        toast.success("TRANSMISSION RECEIVED · Agent will respond within 24h");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const text = await res.text();
        throw new Error(text || "Email service error");
      }
    } catch (err) {
      toast.error("SIGNAL LOST · " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid={CONTACT.root} className="relative w-full overflow-hidden">
      <ChapterCard chapter="CHAPTER V / 06" title="OPEN COMMS CHANNEL" accent="#ff6b35" />

      {/* Radar background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="relative w-[720px] h-[720px] max-w-[120vw] max-h-[120vw]">
          <div className="absolute inset-0 rounded-full border border-[#00c8ff]/30" />
          <div className="absolute inset-[12%] rounded-full border border-[#00c8ff]/25" />
          <div className="absolute inset-[26%] rounded-full border border-[#00c8ff]/20" />
          <div className="absolute inset-[40%] rounded-full border border-[#00c8ff]/15" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-[#00c8ff]/15" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-full w-px bg-[#00c8ff]/15" />
          </div>
          <motion.div
            className="absolute inset-0 origin-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{
              background:
                "conic-gradient(from 0deg, rgba(0,200,255,0.35), rgba(0,200,255,0) 30%)",
              borderRadius: "50%",
              maskImage:
                "radial-gradient(circle at center, #000 0%, #000 100%)",
            }}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00c8ff] shadow-[0_0_18px_#00c8ff] animate-pulse-arc" />
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <form
            data-testid={CONTACT.form}
            onSubmit={submit}
            className="lg:col-span-3 hud-frame p-6 md:p-10 scan-lines"
            style={{ background: "rgba(2,6,13,0.85)" }}
          >
            <span className="hud-corner-tr" />
            <span className="hud-corner-bl" />

            <div className="flex items-center justify-between mb-6">
              <div className="font-mono text-[11px] tracking-[0.35em] text-[#ff6b35]">
                // CHANNEL: SECURE / ENCRYPTED
              </div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-white/50 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00c8ff] animate-pulse-arc" /> LIVE
              </div>
            </div>

            <Field label="AGENT NAME" testId={CONTACT.name}>
              <input
                data-testid={CONTACT.name}
                type="text"
                className="hud-input"
                placeholder="Enter your designation..."
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </Field>
            <Field label="ENCRYPTED RELAY (EMAIL)" testId={CONTACT.email}>
              <input
                data-testid={CONTACT.email}
                type="email"
                className="hud-input"
                placeholder="agent@protocol.io"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </Field>
            <Field label="SUBJECT LINE" testId={CONTACT.subject}>
              <input
                data-testid={CONTACT.subject}
                type="text"
                className="hud-input"
                placeholder="Mission objective..."
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </Field>
            <Field label="TRANSMISSION PAYLOAD" testId={CONTACT.message}>
              <textarea
                data-testid={CONTACT.message}
                rows={6}
                className="hud-input resize-none"
                placeholder="Compose your signal..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </Field>

            <button
              data-testid={CONTACT.submit}
              type="submit"
              disabled={loading}
              className="hud-btn mt-2 w-full justify-center disabled:opacity-50"
            >
              <Send size={14} />
              <span>{loading ? "TRANSMITTING..." : "SEND TRANSMISSION"}</span>
            </button>
          </form>

          {/* Agent locator */}
          <div className="lg:col-span-2 space-y-5">
            <div className="hud-frame p-6">
              <span className="hud-corner-tr" />
              <span className="hud-corner-bl" />
              <div className="font-mono text-[10px] tracking-[0.35em] text-[#00c8ff] mb-3">// LOCATE AGENT</div>
              <div className="space-y-4">
                <Locator icon={<MapPin size={14} />} label="POSITION" value={PROFILE.location} />
                <Locator icon={<Mail size={14} />} label="DIRECT LINE" value={PROFILE.email} />
                <Locator icon={<Github size={14} />} label="CODE VAULT" value="@akshaybhawar03" href={PROFILE.github} />
                <Locator icon={<Linkedin size={14} />} label="PROFESSIONAL NET" value="/akshay-bhawar" href={PROFILE.linkedin} />
              </div>
            </div>

            <div className="hud-frame p-6">
              <span className="hud-corner-tr" />
              <span className="hud-corner-bl" />
              <div className="font-mono text-[10px] tracking-[0.35em] text-[#ff6b35] mb-3">// RESPONSE PROTOCOL</div>
              <p className="text-[#b9d6e6] text-sm leading-relaxed">
                All incoming transmissions are reviewed within 24 standard hours.
                For mission-critical engagements, use the encrypted relay above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <div className="mb-5">
      <div className="font-mono text-[10px] tracking-[0.3em] text-[#4ad8ff] mb-2">{label}</div>
      {children}
    </div>
  );
}

function Locator({ icon, label, value, href }) {
  const Inner = (
    <div className="flex items-center gap-3 group" data-cursor="hover">
      <div className="w-9 h-9 hex-clip flex items-center justify-center text-[#00c8ff] box-glow-arc bg-[#02060d]">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="font-mono text-[10px] tracking-[0.3em] text-white/40">{label}</div>
        <div className="text-white text-sm group-hover:text-[#00c8ff] transition truncate">{value}</div>
      </div>
    </div>
  );
  if (href) return <a href={href} target="_blank" rel="noreferrer">{Inner}</a>;
  return Inner;
}