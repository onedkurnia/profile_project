import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { experienceData } from '../data/experienceData';
import { fadeInUp, staggerContainer, slideInLeft } from '../utils/animationVariants';
import Badge from '../components/ui/Badge';

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      variants={slideInLeft}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-white shadow" />

      <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
        {/* Header */}
        <div className="flex items-start gap-4 flex-wrap">
          <div className="w-12 h-12 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 overflow-hidden">
            {exp.logo ? (
              <img
                src={`${import.meta.env.BASE_URL}${exp.logo}`}
                alt={exp.company}
                className="w-full h-full object-contain p-1"
              />
            ) : (
              <span className="text-primary-600 font-bold text-sm">{exp.company.slice(0, 2).toUpperCase()}</span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="text-lg font-semibold text-slate-900">{exp.position}</h3>
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                exp.current
                  ? 'bg-green-100 text-green-700'
                  : 'bg-slate-100 text-slate-600'
              }`}>
                {exp.startDate} – {exp.endDate}
              </span>
            </div>
            <p className="text-primary-600 font-medium text-sm mt-0.5">{exp.company}</p>
            <p className="text-slate-400 text-xs flex items-center gap-1 mt-0.5">
              <FiMapPin className="w-3 h-3" />
              {exp.location}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-500 text-sm mt-4 leading-relaxed">{exp.description}</p>

        {/* Toggle achievements */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 flex items-center gap-1 text-primary-600 hover:text-primary-800 text-sm font-medium transition-colors"
        >
          {expanded ? (
            <><FiChevronUp className="w-4 h-4" /> Hide details</>
          ) : (
            <><FiChevronDown className="w-4 h-4" /> Show details</>
          )}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-primary-500 mt-0.5 shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.techStack.map((tech) => (
                  <Badge key={tech} variant="primary" size="sm">{tech}</Badge>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-heading font-bold text-slate-900 mb-3">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded mx-auto mb-4" />
          <p className="text-slate-500">4+ years shipping product across mobile, backend, and cloud.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1.5 md:left-1.5 top-3 bottom-3 w-px bg-slate-200" />
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
