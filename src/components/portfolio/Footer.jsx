import { PROFILE } from "@/components/portfolio/data";

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-white border-t border-gray-100 py-12 mt-12">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="font-black text-xl tracking-tight text-gray-900">
            {PROFILE.name.split(" ")[0]}<span className="text-blue-600">.</span>
          </div>
          <span className="hidden md:block w-px h-6 bg-gray-200" />
          <div className="text-sm font-medium text-gray-500">
            Full Stack Developer & Design Engineer
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">LinkedIn</a>
          <a href={`mailto:${PROFILE.email}`} className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">Email</a>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-2 text-xs font-medium text-gray-400">
        <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span>Available for new opportunities</span>
        </div>
      </div>
    </footer>
  );
}