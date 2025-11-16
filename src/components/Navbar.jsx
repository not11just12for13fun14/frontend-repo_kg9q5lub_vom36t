import { Menu, Play, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 flex items-center justify-center shadow-inner ring-1 ring-white/30">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="font-extrabold tracking-wider text-white text-sm">RETROWAVE</p>
              <p className="text-[10px] uppercase text-white/70">Broadcast × Digital</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-white/80">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold shadow hover:shadow-lg transition-shadow">
              <Play className="h-4 w-4 fill-gray-900" /> Launch Brief
            </a>
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 border border-white/20 text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
