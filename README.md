# Portfolio Project

A multi-profile personal portfolio web app built with React and deployed to GitHub Pages. The app hosts two distinct profiles — each with its own sections, styling, and data — switchable via a top profile switcher bar.

**Live Demo:** [https://onedkurnia.github.io/profile_project](https://onedkurnia.github.io/profile_project)

---

## Profiles

| Profile | Role |
|---|---|
| **Deni Kurnia One** | Software Developer — 4+ years at Samsung R&D Indonesia, specializing in Android, backend architecture, and fullstack development |
| **Vinsensia Sihotang** | Registered Nurse — 4+ years experience across hospital, industrial, and emergency medical settings |

---

## Features

- Multi-profile support with a shared `ProfileSwitcher` top bar
- Smooth scroll navigation with animated sections
- Framer Motion page and section animations
- Responsive design for mobile and desktop
- PWA support (installable, offline-capable via Workbox)
- Toast notification system
- Skeleton loaders for async content
- Deployed via GitHub Pages with `gh-pages`

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Build Tool | [Vite 7](https://vitejs.dev/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Routing | [React Router DOM v7](https://reactrouter.com/) |
| Scroll | [React Scroll](https://github.com/fisshy/react-scroll) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| PWA | [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) + [Workbox](https://developer.chrome.com/docs/workbox/) |
| Linting | [ESLint](https://eslint.org/) |
| Deployment | [gh-pages](https://github.com/tschaub/gh-pages) → GitHub Pages |

---

## Project Structure

```
src/
├── App.jsx                      # Root router — mounts ProfileSwitcher + routes
├── DeniApp.jsx                  # Deni's profile entry point
├── components/
│   ├── layout/Navbar.jsx        # Shared navigation bar
│   ├── shared/
│   │   └── ProfileSwitcher.jsx  # Top bar to switch between profiles
│   └── ui/                      # Reusable UI components (Badge, Button, Card, Toast, SkeletonLoader)
├── data/                        # Deni's profile data (personalInfo, skills, projects, experience, etc.)
├── hooks/                       # Custom hooks (useToast, useScrollDirection, useCountUp, etc.)
├── sections/                    # Deni's page sections (Hero, About, Skills, Projects, Publications, Experience, Contact)
├── utils/                       # Animation variants
└── vincensia/                   # Vincensia's self-contained profile (mirrors same structure)
    ├── VincensiaApp.jsx
    ├── data/
    ├── sections/
    └── ...
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build & Deploy

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## License

This project is private and intended for personal use.
