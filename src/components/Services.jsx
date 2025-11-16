import { Radio, Megaphone, LineChart, Rocket, MonitorSmartphone } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Radio,
    title: 'Broadcast Creative',
    desc: 'Concept-to-air TV and radio spots with storyboards, VO, and post-production.',
  },
  {
    icon: Megaphone,
    title: 'Campaign Strategy',
    desc: 'Full-funnel planning across OOH, social, search, and OTT with measurable KPIs.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Digital Production',
    desc: 'High-performance landing pages, banners, UGC, and shoppable video.',
  },
  {
    icon: LineChart,
    title: 'Media & Analytics',
    desc: 'Audience planning, buying, and incrementality tracking across channels.',
  },
  {
    icon: Rocket,
    title: 'Go‑Live Orchestration',
    desc: 'From clearances to tracking URLs — we ship with speed and precision.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0b0d1a] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-widest text-white/60 mb-2">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">From retro vibes to modern metrics</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            We blend nostalgic charm with cutting‑edge tools to move audiences and the needle.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-pink-500 to-yellow-400 flex items-center justify-center ring-1 ring-white/30">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
