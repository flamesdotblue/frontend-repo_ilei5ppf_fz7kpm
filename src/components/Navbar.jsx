import { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#feed', label: 'Feed' },
  { href: '#profiles', label: 'Profiles' },
  { href: '#notifications', label: 'Notifications' },
];

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const onHashLink = (e) => {
      if (e.target.closest('a[href^="#"]')) setOpen(false);
    };
    window.addEventListener('click', onHashLink);
    return () => window.removeEventListener('click', onHashLink);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/40 dark:bg-black/30 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400">@</span>
          <span className="ml-1">SocialX</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="p-2 rounded-full bg-slate-900/5 dark:bg-white/10 hover:bg-slate-900/10 dark:hover:bg-white/20 text-slate-700 dark:text-slate-200 transition"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-900/5 dark:hover:bg-white/10"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2 text-sm text-slate-800 dark:text-slate-100 hover:text-slate-900 dark:hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
