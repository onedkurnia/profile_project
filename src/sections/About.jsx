import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { educationData, certificationsData } from '../data/educationData';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '../utils/animationVariants';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-heading font-bold text-slate-900 mb-3">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded mx-auto mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto">
            Passionate about building products that scale — from Android apps to cloud-native backend services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — summary */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile Photo */}
            <div className="flex items-center gap-5 mb-6">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/profile.png`}
                alt={personalInfo.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-primary-200 shadow-md shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900">{personalInfo.name}</h3>
                <p className="text-primary-600 font-medium text-sm">{personalInfo.title || 'Software Developer Lead'}</p>
                <p className="text-slate-400 text-xs mt-0.5">{personalInfo.location}</p>
              </div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {personalInfo.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 hover:bg-primary-100 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 hover:bg-slate-200 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 hover:bg-slate-200 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </motion.div>

          {/* Right — stats + education */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center hover:border-primary-300 hover:shadow-md transition-all duration-300"
                >
                  <p className="text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                  <p className="text-slate-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Education */}
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-primary-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 border border-primary-100 rounded-lg p-1 shrink-0 w-14 h-14 flex items-center justify-center overflow-hidden">
                    {edu.logo ? (
                      <img
                        src={`${import.meta.env.BASE_URL}${edu.logo}`}
                        alt={edu.institution}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-primary-600 font-bold text-sm">ITB</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{edu.degree}</h4>
                    <p className="text-primary-600 text-sm font-medium">{edu.institution}</p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      {edu.field} · Minor: {edu.minor} · {edu.startDate}–{edu.endDate}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Certifications */}
            {certificationsData.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-primary-300 hover:shadow-md transition-all duration-300">
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span>🏅</span> Licenses & Certifications
                </h4>
                <ul className="space-y-3">
                  {certificationsData.map((cert) => (
                    <li key={cert.id} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                          cert.badgeColor === 'green'  ? 'bg-green-50 border-green-200 text-green-700' :
                          cert.badgeColor === 'purple' ? 'bg-purple-50 border-purple-200 text-purple-700' :
                          cert.badgeColor === 'orange' ? 'bg-orange-50 border-orange-200 text-orange-700' :
                          'bg-primary-50 border-primary-200 text-primary-700'
                        }`}>
                          {cert.date}
                        </span>
                        <div>
                          <p className="text-slate-800 text-sm font-medium leading-tight">{cert.name}</p>
                          <p className="text-slate-400 text-xs">{cert.issuer}</p>
                        </div>
                      </div>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-500 hover:text-primary-700 text-xs font-medium whitespace-nowrap transition-colors"
                        >
                          View ↗
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
