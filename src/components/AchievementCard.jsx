import { motion as Motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

function AchievementCard({ item, icon: Icon }) {
  return (
    <Motion.article
      whileHover={{ y: -3, scale: 1.01 }}
      className="glass-card flex items-start justify-between gap-3 rounded-2xl border border-white/15 p-4 transition-all duration-300"
    >
      <div className="flex gap-3">
        <div className="rounded-xl border border-white/20 bg-white/10 p-2 text-cyan-100">
          {Icon ? <Icon size={16} /> : null}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-50">{item.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-300/80">{item.detail}</p>
        </div>
      </div>
      <ChevronRight size={16} className="mt-0.5 text-slate-300/70" />
    </Motion.article>
  )
}

export default AchievementCard
