import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft glow gradients */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute bottom-[-4rem] right-[-4rem] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 md:pt-40 flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-black/40 backdrop-blur text-xs text-slate-800 dark:text-slate-100 border border-black/5 dark:border-white/10"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Realtime social platform
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-slate-50"
        >
          Connect, share, and react in the moment
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-slate-700 dark:text-slate-300"
        >
          Profiles, posts, likes, comments, and live notifications — wrapped in a sleek, modern interface.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#feed"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-transform hover:-translate-y-0.5"
          >
            Open Feed
          </a>
          <a
            href="#profiles"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur border border-black/5 dark:border-white/10 text-slate-800 dark:text-slate-100 hover:bg-white/90 dark:hover:bg-white/10"
          >
            Create Profile
          </a>
        </motion.div>
      </div>

      {/* subtle parallax callout */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="text-center text-slate-700 dark:text-slate-300 text-xs"
        >
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
