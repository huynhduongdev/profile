import { motion as Motion } from 'framer-motion'
import { Command, Sparkles } from 'lucide-react'

const trafficLights = ['bg-[#ff5f57]', 'bg-[#febb2e]', 'bg-[#28c840]']

function Header({ navItems }) {
  return (
    <Motion.header
      className="glass-panel sticky top-4 z-20 mb-10 rounded-3xl px-4 py-3 shadow-[0_18px_45px_rgba(0,8,28,0.4)]"
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {trafficLights.map((color) => (
              <span key={color} className={`h-3 w-3 rounded-full ${color}`} />
            ))}
          </div>
          <div className="hidden items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-slate-200/90 sm:flex">
            <Command size={14} />
            <span>Liquid Profile</span>
          </div>
        </div>

        <nav className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-200/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="inline-flex items-center gap-1 rounded-xl border border-cyan-200/25 bg-cyan-200/10 px-3 py-1.5 text-xs font-semibold text-cyan-100">
          <Sparkles size={13} />
          <span>Premium</span>
        </div>
      </div>
    </Motion.header>
  )
}

export default Header
