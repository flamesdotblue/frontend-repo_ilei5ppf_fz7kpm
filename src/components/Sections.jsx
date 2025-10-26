import { motion } from 'framer-motion';
import { Code2, Cpu, Layers, Sparkles, Github, ExternalLink, Mail, Phone } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const skills = [
  { icon: <Code2 className="text-cyan-400" size={22} />, label: 'React' },
  { icon: <Layers className="text-fuchsia-400" size={22} />, label: 'Tailwind' },
  { icon: <Cpu className="text-emerald-400" size={22} />, label: 'FastAPI' },
  { icon: <Sparkles className="text-amber-400" size={22} />, label: 'Framer Motion' },
];

const projects = [
  {
    title: 'Immersive Portfolio',
    desc: '3D-enhanced hero with world-class motion design.',
    tags: ['React', 'Spline', 'Framer Motion'],
    href: '#',
    repo: '#',
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Live metrics with compelling micro-interactions.',
    tags: ['Vite', 'Tailwind', 'Charts'],
    href: '#',
    repo: '#',
  },
  {
    title: 'Design System',
    desc: 'Accessible, animated component library.',
    tags: ['Radix', 'shadcn/ui', 'Storybook'],
    href: '#',
    repo: '#',
  },
];

export default function Sections() {
  return (
    <div className="relative">
      {/* About */}
      <section id="about" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-fuchsia-500/10 to-transparent blur-2xl" />
        </div>
        <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">About</motion.h2>
        <motion.p
          {...fadeUp}
          className="mt-4 max-w-3xl text-slate-700 dark:text-slate-300"
        >
          I’m a front-end engineer obsessed with clarity, motion, and craft. I blend modern tools with thoughtful design
          to build interfaces that feel alive yet effortless.
        </motion.p>
      </section>

      {/* Skills */}
      <section id="skills" className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Skills</motion.h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5 flex flex-col items-start hover:-translate-y-1 transition-transform"
            >
              <div className="p-2 rounded-lg bg-black/5 dark:bg-white/10">{s.icon}</div>
              <div className="mt-3 font-semibold text-slate-900 dark:text-slate-100">{s.label}</div>
              <div className="mt-1 h-1 w-full rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400 animate-[pulse_2.5s_ease-in-out_infinite]" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Projects</motion.h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur p-6"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.15),transparent_40%)]" />
              <h3 className="relative z-10 text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="relative z-10 mt-2 text-sm text-slate-700 dark:text-slate-300">{p.desc}</p>
              <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-full bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="relative z-10 mt-5 flex items-center gap-3">
                <a href={p.href} className="inline-flex items-center gap-1 text-sm text-cyan-500 hover:text-cyan-400">
                  <ExternalLink size={16} /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Contact</motion.h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div {...fadeUp} className="rounded-2xl p-6 border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                form.reset();
                alert('Thanks! Your message has been staged. Connect via email for a quick response.');
              }}
              className="grid gap-4"
            >
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm text-slate-700 dark:text-slate-300">Name</label>
                <input id="name" name="name" required className="w-full rounded-xl bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10 px-4 py-3 outline-none focus:ring-2 ring-fuchsia-400/40" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm text-slate-700 dark:text-slate-300">Email</label>
                <input id="email" type="email" name="email" required className="w-full rounded-xl bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10 px-4 py-3 outline-none focus:ring-2 ring-cyan-400/40" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm text-slate-700 dark:text-slate-300">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full rounded-xl bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10 px-4 py-3 outline-none focus:ring-2 ring-emerald-400/40" />
              </div>
              <button type="submit" className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-transform hover:-translate-y-0.5">
                Send Message
              </button>
              <p className="text-xs text-slate-500 dark:text-slate-400">No backend needed to preview. Replace with your email service when deploying.</p>
            </form>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="rounded-2xl p-6 border border-black/5 dark:border-white/10 bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur flex flex-col justify-center"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Let’s build something great.</h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">I’m open to roles, freelance work, and collaborations.</p>
            <div className="mt-6 grid gap-3 text-sm">
              <a href="mailto:you@example.com" className="inline-flex items-center gap-2 text-slate-800 dark:text-slate-200 hover:text-cyan-400">
                <Mail size={16} /> you@example.com
              </a>
              <a href="tel:+123456789" className="inline-flex items-center gap-2 text-slate-800 dark:text-slate-200 hover:text-cyan-400">
                <Phone size={16} /> +1 234 567 89
              </a>
            </div>
            <div className="mt-8 grid grid-flow-col auto-cols-max gap-3">
              <a href="#" className="group relative inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/20 text-white/80 hover:text-white overflow-hidden">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 opacity-0 group-hover:opacity-100 blur transition" />
                <Github size={18} className="relative" />
              </a>
              <a href="#" className="group relative inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/20 text-white/80 hover:text-white overflow-hidden">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur transition" />
                <ExternalLink size={18} className="relative" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
