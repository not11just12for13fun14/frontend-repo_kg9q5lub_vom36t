import { motion } from 'framer-motion'

const projects = [
  {
    label: 'TV + Social',
    title: 'Launch Day — SnackCo',
    img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    label: 'OOH + Search',
    title: 'City Takeover — MoveMore',
    img: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    label: 'OTT + Influencer',
    title: 'Stream Sprint — GameHub',
    img: 'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative bg-[#0b0d1a] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-white/60 mb-2">Selected Work</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Campaigns that level up</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            A mix of channels, a focus on outcomes. Here are a few favorites.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">{p.label}</p>
                <h3 className="mt-1 text-lg font-semibold text-white">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
