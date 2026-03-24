# Deni Kurnia — Personal Portfolio

A modern, responsive personal portfolio website built with React and Vite. This site showcases my professional profile, skills, projects, publications, and work experience as a Software Developer with 4+ years at Samsung R&D Indonesia.

**Live site:** [onedkurnia.github.io/profile_project](https://onedkurnia.github.io/profile_project)

---

## About

This portfolio serves as a central hub for my professional identity, covering:

- **Hero** — Introduction with animated stats (years of experience, apps delivered, performance improvements)
- **About** — Summary and background
- **Skills** — Tech stack across languages, mobile, backend, databases, and DevOps
- **Experience** — Professional work history
- **Projects** — Highlighted projects (Salaam, SLime, Speed Measurement System, Smart Card Reader)
- **Publications** — Research papers and technical writings
- **Contact** — Ways to get in touch

---

## Tech Stack

### Core
| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI library |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |

### Libraries
| Library | Purpose |
|---|---|
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon set (Si, Fa, etc.) |
| [React Scroll](https://www.npmjs.com/package/react-scroll) | Smooth section scrolling |

### Tooling
| Tool | Purpose |
|---|---|
| [ESLint](https://eslint.org/) | Code linting |
| [PostCSS](https://postcss.org/) | CSS processing |
| [gh-pages](https://www.npmjs.com/package/gh-pages) | GitHub Pages deployment |

---

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar
│   └── ui/           # Reusable components (Badge, Button, Card, Toast, SkeletonLoader)
├── data/             # Static data (personalInfo, projects, skills, experience, etc.)
├── hooks/            # Custom React hooks (useScrollDirection, useCountUp, etc.)
├── sections/         # Page sections (Hero, About, Skills, Projects, ...)
└── utils/            # Animation variants
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is deployed to GitHub Pages via the `gh-pages` package.

```bash
npm run deploy
```
