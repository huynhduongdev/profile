import { motion as Motion } from 'framer-motion'

function SkillTag({ label }) {
  return (
    <Motion.span
      whileHover={{ y: -2 }}
      className="inline-flex rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-slate-100/90 backdrop-blur-xl"
    >
      {label}
    </Motion.span>
  )
}

export default SkillTag
