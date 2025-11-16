import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-[#0b0d1a] to-[#12172a] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 opacity-20" />
          <div className="absolute -left-12 -bottom-12 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 opacity-20" />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Ready to press start on your next campaign?
            </h3>
            <p className="mt-2 text-gray-700 max-w-2xl">
              Drop us a brief and we’ll respond within one business day with timing, team, and a first move.
            </p>
            <form className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
              <input className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none" placeholder="Your name" />
              <input className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none" placeholder="Email" type="email" />
              <button className="rounded-xl bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-black transition-colors">Send brief</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
