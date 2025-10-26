import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-black/5 dark:border-white/10">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="#" className="group relative inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/20 text-white/80 hover:text-white overflow-hidden">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 opacity-0 group-hover:opacity-100 blur transition" />
            <Github size={18} className="relative" />
          </a>
          <a href="#" className="group relative inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/20 text-white/80 hover:text-white overflow-hidden">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 blur transition" />
            <Linkedin size={18} className="relative" />
          </a>
          <a href="#" className="group relative inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/20 text-white/80 hover:text-white overflow-hidden">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 opacity-0 group-hover:opacity-100 blur transition" />
            <Twitter size={18} className="relative" />
          </a>
        </div>
      </div>
    </footer>
  );
}
