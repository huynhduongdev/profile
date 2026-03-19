import { motion as Motion, useSpring } from 'framer-motion'
import { BadgeCheck, Clock3, MapPin, Sparkles } from 'lucide-react'
import { useState } from 'react'
import ActionButton from './ActionButton'
import StatCard from './StatCard'

function HeroProfile({ profile, stats, actions }) {
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 })

  const x = useSpring(pointerOffset.x, { stiffness: 140, damping: 18, mass: 0.45 })
  const y = useSpring(pointerOffset.y, { stiffness: 140, damping: 18, mass: 0.45 })
  const rotateX = useSpring(pointerOffset.y * -0.4, { stiffness: 120, damping: 16, mass: 0.45 })
  const rotateY = useSpring(pointerOffset.x * 0.4, { stiffness: 120, damping: 16, mass: 0.45 })

  const onMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5
    const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5

    setPointerOffset({
      x: relativeX * 18,
      y: relativeY * 18,
    })
  }

  const onMouseLeave = () => {
    setPointerOffset({ x: 0, y: 0 })
  }

  return (
    <section id="gioi-thieu" className="space-y-8">
      <div className="grid gap-10 xl:grid-cols-[1.24fr_0.95fr] xl:items-center">
        <div className="order-2 xl:order-1">
          <Motion.span
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-100/25 bg-cyan-100/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Sparkles size={14} />
            Hồ sơ cá nhân
          </Motion.span>

          <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-6xl">
            <span className="text-shine">{profile.name}</span>
            <span className="ml-2 inline-flex translate-y-[-6px] items-center rounded-full border border-cyan-100/30 bg-cyan-100/15 px-2.5 py-1 text-xs font-semibold text-cyan-100">
              <BadgeCheck size={14} className="mr-1" />
              Xác minh
            </span>
          </h1>

          <p className="mt-3 text-lg font-medium text-slate-200/90">{profile.role}</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-200/80 md:text-base">
            {profile.bio}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-300/85">
            <span className="glass-card inline-flex items-center gap-1.5 rounded-full px-3 py-1.5">
              <MapPin size={14} />
              {profile.location}
            </span>
            <span className="glass-card inline-flex items-center gap-1.5 rounded-full px-3 py-1.5">
              <Clock3 size={14} />
              {profile.availability}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {actions.map((action) => (
              <ActionButton
                key={action.id}
                label={action.label}
                icon={action.icon}
                href={action.href}
                variant={action.variant}
                external={action.external}
              />
            ))}
          </div>
        </div>

        <div className="order-1 xl:order-2">
          <div
            className="relative mx-auto max-w-[360px]"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            <div className="pointer-events-none absolute -inset-8 rounded-[42px] bg-cyan-200/20 blur-3xl" />
            <div className="pointer-events-none absolute -inset-4 rounded-[36px] border border-cyan-100/25" />
            <Motion.div
              style={{ x, y, rotateX, rotateY, transformPerspective: 900 }}
              className="glass-card glass-sweep relative aspect-square overflow-hidden rounded-[32px] border border-white/30 p-2 shadow-[0_24px_65px_rgba(1,9,30,0.55)]"
            >
              <img
                src={profile.avatar}
                alt={profile.avatarAlt}
                className="h-full w-full rounded-[26px] object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-x-5 top-0 h-24 rounded-b-[60%] bg-gradient-to-b from-white/35 to-transparent" />
            </Motion.div>
            <div className="pointer-events-none absolute -bottom-5 left-1/2 h-14 w-44 -translate-x-1/2 rounded-full bg-cyan-300/25 blur-2xl" />
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={stat.id} stat={stat} index={index} />
        ))}
      </div>
    </section>
  )
}

export default HeroProfile
