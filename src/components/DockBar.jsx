import { motion as Motion } from 'framer-motion'
import {
  BrainCircuit,
  CalendarDays,
  Compass,
  Github,
  Mail,
  Music2,
  TerminalSquare,
} from 'lucide-react'
import { useMemo, useState } from 'react'

const iconMap = {
  finder: Compass,
  terminal: TerminalSquare,
  brain: BrainCircuit,
  github: Github,
  mail: Mail,
  calendar: CalendarDays,
  music: Music2,
}

function DockBar({ items }) {
  const [activeIndex, setActiveIndex] = useState(null)

  const itemScale = useMemo(
    () => (index) => {
      if (activeIndex === null) {
        return 1
      }

      const distance = Math.abs(activeIndex - index)
      if (distance === 0) return 1.34
      if (distance === 1) return 1.17
      if (distance === 2) return 1.06
      return 1
    },
    [activeIndex],
  )

  return (
    <Motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none fixed bottom-4 left-1/2 z-30 hidden -translate-x-1/2 md:block"
    >
      <div className="glass-panel pointer-events-auto flex items-end gap-2 rounded-[22px] border border-white/20 px-3 py-2 shadow-[0_20px_45px_rgba(0,8,30,0.45)]">
        {items.map((item, index) => {
          const Icon = iconMap[item.icon] ?? Compass

          return (
            <Motion.a
              key={item.id}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              animate={{ scale: itemScale(index) }}
              transition={{ type: 'spring', stiffness: 320, damping: 20, mass: 0.35 }}
              className="group relative grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-gradient-to-b from-white/22 to-white/6 text-white/95 shadow-[0_10px_20px_rgba(7,14,33,0.45)]"
            >
              <Icon size={20} />
              <span className="pointer-events-none absolute -top-10 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/15 bg-slate-900/85 px-2 py-1 text-[11px] font-medium text-slate-100 group-hover:block">
                {item.label}
              </span>
            </Motion.a>
          )
        })}
      </div>
    </Motion.div>
  )
}

export default DockBar
