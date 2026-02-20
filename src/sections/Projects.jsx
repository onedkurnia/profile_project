import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiBookOpen } from 'react-icons/fi';
import { projectsData } from '../data/projectsData';
import { fadeInUp, staggerContainer } from '../utils/animationVariants';
import Badge from '../components/ui/Badge';

// TODO: Add project screenshots to /public/assets/projects/
//   - salaam.jpg
//   - slime.jpg
//   - speed.jpg
//   - smartcard.jpg

const categoryColors = {
  'Mobile App': 'primary',
  'IoT / Embedded': 'success',
  'Hardware / Mobile': 'warning',
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(projectsData.map((p) => p.category))];
  const filtered =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-heading font-bold text-slate-900 mb-3">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded mx-auto mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto">
            Selected work spanning consumer mobile apps, IoT systems, and hardware prototypes.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-primary-400 hover:text-primary-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-primary-300 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Project image — TODO: add screenshot, shows placeholder until then */}
              <div className="h-44 bg-gradient-to-br from-primary-50 to-slate-100 flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                ) : null}
                {/* Placeholder overlay (hidden when image loads) */}
                <div className="absolute inset-0 flex items-center justify-center text-primary-200 text-6xl font-bold select-none pointer-events-none">
                  {project.title.slice(0, 1)}
                </div>
                {/* Category badge */}
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium px-3 py-1 rounded-full border border-slate-200">
                  {project.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                  {project.longDescription}
                </p>

                {/* Achievements */}
                <ul className="space-y-1 mb-4">
                  {project.achievements.map((ach, i) => (
                    <li key={i} className="flex gap-2 text-xs text-slate-500">
                      <span className="text-primary-400 shrink-0">✓</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="primary" size="sm">{tech}</Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-primary-600 hover:text-primary-800 text-sm font-medium transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Visit
                    </a>
                  )}
                  {project.links.publication && (
                    <a
                      href={project.links.publication}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-green-600 hover:text-green-800 text-sm font-medium transition-colors"
                    >
                      <FiBookOpen className="w-4 h-4" />
                      Publication
                    </a>
                  )}
                  {/* TODO: Add GitHub repo links to projectsData.js when repos are available */}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {!project.links.live && !project.links.github && !project.links.publication && (
                    <span className="text-slate-400 text-xs italic">Internal / Private</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
