import { motion as Motion } from 'framer-motion'
import {
  Award,
  Code2,
  FolderCode,
  Github,
  Layers3,
  Mail,
  Sparkles,
  Star,
  Trophy,
  UserPlus,
  Users,
  Waves,
} from 'lucide-react'
import AchievementCard from '../components/AchievementCard'
import ActivityCard from '../components/ActivityCard'
import DockBar from '../components/DockBar'
import Header from '../components/Header'
import HeroProfile from '../components/HeroProfile'
import SectionCard from '../components/SectionCard'
import SkillTag from '../components/SkillTag'
import {
  achievements,
  actionItems,
  dockItems,
  featuredProjects,
  navItems,
  profileData,
  recentActivities,
  skillGroups,
  statItems,
} from '../data/profileData'

const statIconMap = {
  followers: Users,
  projects: Layers3,
  experience: FolderCode,
  reputation: Star,
}

const actionIconMap = {
  follow: UserPlus,
  collaborate: Sparkles,
  contact: Mail,
  github: Github,
}

const activityIconMap = {
  spark: Sparkles,
  code: Code2,
  community: Users,
}

const achievementIconMap = {
  award: Award,
  spotlight: Trophy,
  star: Star,
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.1,
    },
  },
}

const fadeSlideItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

function ProfilePage() {
  const stats = statItems.map((item) => ({ ...item, icon: statIconMap[item.icon] }))
  const actions = actionItems.map((item) => ({ ...item, icon: actionIconMap[item.icon] }))

  return (
    <div className="relative min-h-screen pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[-16%] h-[460px] w-[460px] rounded-full bg-cyan-300/20 blur-[110px]" />
        <div className="absolute right-[8%] top-[12%] h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-[120px]" />
        <div className="absolute bottom-[-18%] left-[35%] h-[520px] w-[520px] rounded-full bg-violet-300/16 blur-[140px]" />
      </div>

      <main className="mx-auto w-full max-w-[1440px] px-4 pb-24 pt-6 sm:px-8 lg:px-10">
        <Motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="glass-window noise-mask relative overflow-hidden rounded-[32px] border border-white/20 px-4 pb-12 pt-4 shadow-[0_45px_120px_rgba(0,8,34,0.55)] sm:px-7 lg:px-10"
        >
          <Motion.div variants={fadeSlideItem}>
            <Header navItems={navItems} />
          </Motion.div>

          <Motion.div variants={fadeSlideItem}>
            <HeroProfile profile={profileData} stats={stats} actions={actions} />
          </Motion.div>

          <Motion.section
            variants={fadeSlideItem}
            className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.86fr]"
          >
            <div className="space-y-6">
              <SectionCard
                id="du-an-noi-bat"
                title="Dự án nổi bật"
                subtitle="Tập trung vào sản phẩm giàu tính trải nghiệm và hiệu suất triển khai thực tế."
                icon={Waves}
              >
                <div className="space-y-3">
                  {featuredProjects.map((project, index) => (
                    <Motion.article
                      key={project.title}
                      whileHover={{ y: -4 }}
                      className="glass-card rounded-2xl border border-white/15 p-4 shadow-[0_14px_35px_rgba(2,9,24,0.35)]"
                    >
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
                            {project.domain}
                          </p>
                          <h3 className="mt-1 text-lg font-semibold text-white">{project.title}</h3>
                        </div>
                        <span className="w-fit rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200/90">
                          #0{index + 1}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-200/82">{project.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-white/15 bg-slate-950/35 px-2.5 py-1 text-xs text-slate-200/85"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="mt-3 text-xs font-medium text-cyan-100/85">{project.impact}</p>
                    </Motion.article>
                  ))}
                </div>
              </SectionCard>

              <SectionCard
                id="thanh-tuu"
                title="Thành tựu"
                subtitle="Các cột mốc tiêu biểu phản ánh độ tin cậy và khả năng thực thi."
                icon={Trophy}
              >
                <div className="space-y-3">
                  {achievements.map((item) => (
                    <AchievementCard
                      key={item.id}
                      item={item}
                      icon={achievementIconMap[item.icon]}
                    />
                  ))}
                </div>
              </SectionCard>
            </div>

            <div className="space-y-6">
              <SectionCard
                id="hoat-dong-gan-day"
                title="Hoạt động gần đây"
                subtitle="Những cập nhật mới nhất trong hệ sinh thái sản phẩm và cộng đồng."
                icon={Sparkles}
              >
                <div className="space-y-3">
                  {recentActivities.map((item) => (
                    <ActivityCard key={item.id} item={item} icon={activityIconMap[item.icon]} />
                  ))}
                </div>
              </SectionCard>

              <SectionCard
                id="ky-nang"
                title="Kỹ năng"
                subtitle="Bộ năng lực cốt lõi cho vai trò developer và AI creator."
                icon={Code2}
              >
                <div className="space-y-4">
                  {skillGroups.map((group) => (
                    <div key={group.title}>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.17em] text-slate-300/70">
                        {group.title}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <SkillTag key={skill} label={skill} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div id="lien-he" className="mt-5 rounded-2xl border border-cyan-100/22 bg-cyan-100/8 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/75">Liên hệ</p>
                  <p className="mt-2 text-sm text-slate-100">
                    Sẵn sàng đồng hành cho dự án cần chất lượng thẩm mỹ cao và nền tảng AI vững chắc.
                  </p>
                  <a
                    href={`mailto:${profileData.contactEmail}`}
                    className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-cyan-100 transition-all hover:bg-white/16"
                  >
                    <Mail size={15} />
                    {profileData.contactEmail}
                  </a>
                </div>
              </SectionCard>
            </div>
          </Motion.section>
        </Motion.div>
      </main>

      <DockBar items={dockItems} />
    </div>
  )
}

export default ProfilePage
