import { motion as Motion } from 'framer-motion'

const buttonVariants = {
  primary:
    'border border-cyan-200/35 bg-gradient-to-r from-sky-400/80 via-blue-300/75 to-cyan-300/80 text-slate-950 shadow-[0_14px_40px_rgba(74,170,255,0.38)]',
  secondary:
    'border border-white/20 bg-white/10 text-slate-100 hover:bg-white/14 hover:border-cyan-100/40',
  ghost:
    'border border-white/14 bg-slate-900/40 text-slate-200 hover:bg-slate-900/60 hover:border-white/30',
}

function ActionButton({ label, icon: Icon, href, variant = 'secondary', external = false }) {
  return (
    <Motion.a
      href={href}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ${buttonVariants[variant] ?? buttonVariants.secondary}`}
    >
      {Icon ? <Icon size={16} /> : null}
      <span>{label}</span>
    </Motion.a>
  )
}

export default ActionButton
