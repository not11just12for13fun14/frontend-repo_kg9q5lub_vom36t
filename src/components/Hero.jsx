import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0d1a]/50 via-[#0b0d1a]/60 to-[#0b0d1a]" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <p className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/20">Mario-inspired • Retro yet Modern</p>
            <h1 className="text-4xl sm:text-6xl font-black leading-[1.05] drop-shadow-[0_2px_0_rgba(0,0,0,0.3)]">
              Broadcast boldness. Digital precision.
            </h1>
            <p className="mt-4 text-white/80 text-lg sm:text-xl">
              We concept, craft, and launch campaigns that play across worlds — from prime-time TV to pixel-perfect feeds.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 font-semibold shadow hover:shadow-xl transition-all">
                Start a Project
              </a>
              <a href="#work" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-transparent text-white px-6 py-3 font-semibold ring-1 ring-white/30 hover:bg-white/10 transition-all">
                See Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
