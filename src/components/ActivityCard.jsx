import { motion as Motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

function ActivityCard({ item, icon: Icon }) {
  return (
    <Motion.article
      whileHover={{ y: -3, scale: 1.01 }}
      className="glass-card rounded-2xl border border-white/15 p-4 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="rounded-xl border border-white/20 bg-white/10 p-2 text-cyan-100">
            {Icon ? <Icon size={16} /> : <ArrowUpRight size={16} />}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-50">{item.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-300/80">{item.meta}</p>
          </div>
        </div>
        <span className="text-[11px] font-medium text-slate-300/70">{item.time}</span>
      </div>
    </Motion.article>
  )
}

export default ActivityCard
