# HuHaDuo Liquid Glass Profile

Landing profile cao cấp theo phong cách macOS Liquid Glass, xây dựng bằng `React + Tailwind CSS + Framer Motion`.

## Stack

- React (Vite)
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

## Cấu trúc thư mục

```txt
.
├─ public/
├─ src/
│  ├─ assets/
│  │  └─ avatar.jpeg
│  ├─ components/
│  │  ├─ AchievementCard.jsx
│  │  ├─ ActionButton.jsx
│  │  ├─ ActivityCard.jsx
│  │  ├─ CountUpNumber.jsx
│  │  ├─ DockBar.jsx
│  │  ├─ Header.jsx
│  │  ├─ HeroProfile.jsx
│  │  ├─ SectionCard.jsx
│  │  ├─ SkillTag.jsx
│  │  └─ StatCard.jsx
│  ├─ data/
│  │  └─ profileData.js
│  ├─ pages/
│  │  └─ ProfilePage.jsx
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
├─ tailwind.config.js
└─ vite.config.js
```

## Cài dependencies

```bash
npm install
```

## Chạy local

```bash
npm run dev
```

## Build production

```bash
npm run build
npm run preview
```

## Deploy lên GitHub (source code)

1. Tạo repository mới trên GitHub.
2. Push project:

```bash
git init
git add .
git commit -m "feat: premium liquid glass profile"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

## Deploy bằng GitHub Pages

Project đã có sẵn script deploy:

- `npm run build:gh` build với base tương thích GitHub Pages (`./`)
- `npm run deploy` publish thư mục `dist` lên nhánh `gh-pages`

Các bước:

```bash
npm run deploy
```

Sau đó vào GitHub repo:

1. `Settings` → `Pages`
2. Source: chọn branch `gh-pages`, folder `/ (root)`
3. Save và chờ URL được cấp

## Deploy bằng Vercel

1. Import repository từ GitHub vào Vercel
2. Framework preset: `Vite`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy

## Tùy biến nhanh nội dung

- Sửa data hiển thị tại `src/data/profileData.js`
- Avatar đang dùng `src/assets/avatar.jpeg` (copy từ file local `1370704 (1).jpeg`)
- Màu sắc/hiệu ứng glass chỉnh ở `src/index.css`

## Scripts

- `npm run dev`: chạy môi trường phát triển
- `npm run build`: build production
- `npm run build:gh`: build tối ưu cho GitHub Pages
- `npm run preview`: chạy preview bản build
- `npm run deploy`: deploy lên nhánh `gh-pages`
