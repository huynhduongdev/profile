import { motion as Motion } from 'framer-motion'
import CountUpNumber from './CountUpNumber'

function StatCard({ stat, index }) {
  const Icon = stat.icon

  return (
    <Motion.article
      className="glass-card glass-sweep relative rounded-[26px] px-5 py-4 shadow-[0_22px_45px_rgba(2,9,24,0.42)]"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18 + index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.015 }}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-[26px] bg-gradient-to-tr ${stat.tone ?? 'from-cyan-200/20 via-transparent to-transparent'}`}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300/75">
            {stat.label}
          </p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white">
            <CountUpNumber
              value={stat.value}
              decimals={stat.decimals}
              prefix={stat.prefix}
              suffix={stat.suffix}
              format={stat.format}
            />
          </p>
        </div>
        {Icon ? (
          <span className="rounded-xl border border-white/20 bg-white/10 p-2.5 text-cyan-100">
            <Icon size={18} />
          </span>
        ) : null}
      </div>
    </Motion.article>
  )
}

export default StatCard
