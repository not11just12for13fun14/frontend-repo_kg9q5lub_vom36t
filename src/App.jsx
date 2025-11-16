import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0d1a]">
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <CTA />
      <footer className="bg-[#0b0d1a] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-white/60 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} Retrowave Agency. All rights reserved.</p>
          <p className="hidden sm:block">Made with bold ideas and 8‑bit energy.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
