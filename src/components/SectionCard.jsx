function SectionCard({ id, title, subtitle, icon: Icon, children, className = '' }) {
  return (
    <section
      id={id}
      className={`glass-card rounded-[28px] border border-white/15 p-5 shadow-[0_22px_48px_rgba(2,8,24,0.38)] lg:p-6 ${className}`}
    >
      <header className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300/70">{title}</p>
          <p className="mt-1 text-sm text-slate-200/90">{subtitle}</p>
        </div>
        {Icon ? (
          <span className="rounded-xl border border-white/20 bg-white/10 p-2 text-cyan-100">
            <Icon size={17} />
          </span>
        ) : null}
      </header>
      {children}
    </section>
  )
}

export default SectionCard
