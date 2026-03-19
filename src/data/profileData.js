import avatar from '../assets/avatar.jpeg'

export const profileData = {
  name: 'HuHaDuo',
  role: 'Developer + AI, VV',
  bio: 'Xây dựng trải nghiệm số hiện đại, giao thoa giữa lập trình, AI và tư duy thẩm mỹ.',
  location: 'Việt Nam',
  availability: 'Sẵn sàng đồng hành cùng dự án có chiều sâu sản phẩm',
  contactEmail: 'hello@huhaduo.dev',
  githubUrl: 'https://github.com/',
  avatar,
  avatarAlt: 'Ảnh đại diện HuHaDuo',
}

export const navItems = [
  { label: 'Giới thiệu', href: '#gioi-thieu' },
  { label: 'Dự án nổi bật', href: '#du-an-noi-bat' },
  { label: 'Thành tựu', href: '#thanh-tuu' },
  { label: 'Kỹ năng', href: '#ky-nang' },
  { label: 'Liên hệ', href: '#lien-he' },
]

export const statItems = [
  {
    id: 'followers',
    icon: 'followers',
    label: 'Người theo dõi',
    value: 85600,
    format: 'compact',
    tone: 'from-cyan-300/35 via-sky-300/10 to-white/0',
  },
  {
    id: 'projects',
    icon: 'projects',
    label: 'Dự án',
    value: 128,
    suffix: '+',
    tone: 'from-blue-300/35 via-violet-300/10 to-white/0',
  },
  {
    id: 'experience',
    icon: 'experience',
    label: 'Năm kinh nghiệm',
    value: 8,
    suffix: '+',
    tone: 'from-slate-100/25 via-cyan-100/10 to-white/0',
  },
  {
    id: 'reputation',
    icon: 'reputation',
    label: 'Đánh giá uy tín',
    value: 4.9,
    decimals: 1,
    suffix: '/5',
    tone: 'from-violet-300/35 via-blue-300/10 to-white/0',
  },
]

export const actionItems = [
  {
    id: 'follow',
    icon: 'follow',
    label: 'Theo dõi',
    variant: 'primary',
    href: '#',
  },
  {
    id: 'collaborate',
    icon: 'collaborate',
    label: 'Hợp tác',
    variant: 'secondary',
    href: '#lien-he',
  },
  {
    id: 'contact',
    icon: 'contact',
    label: 'Liên hệ',
    variant: 'secondary',
    href: 'mailto:hello@huhaduo.dev',
  },
  {
    id: 'github',
    icon: 'github',
    label: 'Xem GitHub',
    variant: 'ghost',
    href: 'https://github.com/',
    external: true,
  },
]

export const featuredProjects = [
  {
    title: 'Luma Agent Studio',
    domain: 'AI Product Architecture',
    description:
      'Nền tảng đa tác nhân tối ưu quy trình tạo nội dung, giữ chất lượng đầu ra nhất quán theo thương hiệu.',
    stack: ['React', 'LangChain', 'Vector Search'],
    impact: 'Tăng 61% tốc độ sản xuất chiến dịch',
  },
  {
    title: 'SignalCraft OS',
    domain: 'Data Visualization',
    description:
      'Hệ thống quan sát dữ liệu thời gian thực, tập trung vào trải nghiệm cinematic và khả năng phân tích tức thời.',
    stack: ['Next.js', 'WebGL', 'Streaming'],
    impact: 'Giảm 43% thời gian ra quyết định',
  },
  {
    title: 'Orchid Persona Engine',
    domain: 'Personalization AI',
    description:
      'Bộ máy cá nhân hoá hành vi người dùng theo ngữ cảnh, kết hợp mô hình dự đoán và scoring đa chiều.',
    stack: ['Python', 'Feature Store', 'MLOps'],
    impact: 'Nâng 2.4x tỉ lệ giữ chân',
  },
]

export const achievements = [
  {
    id: 'award-2025',
    icon: 'award',
    title: 'Giải thưởng Sản phẩm Đột phá 2025',
    detail: 'Vinh danh bởi cộng đồng builder khu vực APAC.',
  },
  {
    id: 'featured-talk',
    icon: 'spotlight',
    title: '12+ phiên chia sẻ chuyên sâu về AI UX',
    detail: 'Tập trung vào sự cân bằng giữa kỹ thuật và thẩm mỹ sản phẩm.',
  },
  {
    id: 'open-source',
    icon: 'star',
    title: 'Top 1% dự án open-source trong lĩnh vực creator tooling',
    detail: 'Được cộng đồng quốc tế sử dụng trong môi trường production.',
  },
]

export const recentActivities = [
  {
    id: 'activity-1',
    icon: 'spark',
    title: 'Ra mắt phiên bản v3 cho AI Workflow Canvas',
    meta: 'Bổ sung orchestration theo ngữ cảnh và memory pipeline mới.',
    time: '2 giờ trước',
  },
  {
    id: 'activity-2',
    icon: 'code',
    title: 'Public module Fine-Tune Guardrail',
    meta: 'Tối ưu đánh giá chất lượng prompt theo quy mô enterprise.',
    time: 'Hôm qua',
  },
  {
    id: 'activity-3',
    icon: 'community',
    title: 'Mentor workshop “Thiết kế sản phẩm AI cao cấp”',
    meta: 'Đồng hành cùng team startup tối ưu chiến lược go-to-market.',
    time: '3 ngày trước',
  },
]

export const skillGroups = [
  {
    title: 'Kỹ năng chính',
    skills: ['System Design', 'AI Agents', 'Frontend Craft', 'Product Strategy'],
  },
  {
    title: 'Kinh nghiệm',
    skills: ['8+ năm xây sản phẩm số', 'Đa ngành: SaaS, Media, AI', 'Lead team đa chức năng'],
  },
  {
    title: 'Theo dõi',
    skills: ['GitHub /huhaduo', 'X @huhaduo', 'Behance /huhaduo-lab'],
  },
]

export const dockItems = [
  { id: 'finder', label: 'Finder', icon: 'finder', href: '#' },
  { id: 'terminal', label: 'Terminal', icon: 'terminal', href: '#' },
  { id: 'ai-lab', label: 'AI Lab', icon: 'brain', href: '#' },
  { id: 'github', label: 'GitHub', icon: 'github', href: 'https://github.com/' },
  { id: 'mail', label: 'Liên hệ', icon: 'mail', href: 'mailto:hello@huhaduo.dev' },
  { id: 'calendar', label: 'Lịch', icon: 'calendar', href: '#' },
  { id: 'music', label: 'Chill', icon: 'music', href: '#' },
]
