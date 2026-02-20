import React from 'react';
import { motion } from 'framer-motion';
import profilePic from './assets/images/profile.jpeg';
import Navbar from './components/layout/Navbar';
import Toast from './components/ui/Toast';
import Contact from './sections/Contact';
import { useToast } from './hooks/useToast';
import { personalInfo } from './data/personalInfo';
import { experienceData } from './data/experienceData';
import { educationData, certificationsData } from './data/educationData';
import { skillsData } from './data/skillsData';
import { projectsData } from './data/projectsData';
import { publicationsData } from './data/publicationsData';
import { fadeInUp, staggerContainer } from './utils/animationVariants';

function App() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="min-h-screen mesh-gradient text-slate-900">
      <Navbar />
      <Toast toasts={toasts} onRemove={removeToast} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-32">
        <motion.div
          className="text-center px-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="flex justify-center mb-8" variants={fadeInUp}>
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-primary-400 ring-offset-2 ring-offset-white/50 shadow-xl">
              <img
                src={profilePic}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-heading font-bold gradient-text mb-4 pb-2"
            variants={fadeInUp}
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p className="text-2xl text-slate-600 mb-2" variants={fadeInUp}>
            {personalInfo.title}
          </motion.p>
          <motion.p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12" variants={fadeInUp}>
            {personalInfo.tagline}
          </motion.p>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {personalInfo.stats.map((stat) => (
              <div key={stat.label} className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/80">
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading font-bold text-center mb-4">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded mx-auto mb-10" />
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              {personalInfo.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-primary-50/40 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">Skills</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded mx-auto" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {skillsData.map((group, groupIdx) => (
              <motion.div
                key={group.category}
                className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm p-6 border border-white/80"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              >
                  <h3 className="text-lg font-heading font-bold text-slate-800 mb-5">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 text-sm font-medium text-primary-800"
                      >
                        {Icon && <Icon style={{ color: skill.color }} className="w-4 h-4 shrink-0" />}
                        {skill.name}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">Experience</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded mx-auto" />
          </motion.div>
          <div className="relative border-l-2 border-primary-200 ml-4 space-y-10">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={exp.id}
                className="relative pl-8"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 bg-primary-500 rounded-full border-2 border-white shadow" />
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/80">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-xl font-heading font-bold text-slate-900">{exp.position}</h3>
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm mb-4">{exp.company} · {exp.location}</p>
                  <ul className="space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex gap-2 text-slate-600 text-sm leading-relaxed">
                        <span className="text-primary-500 font-bold shrink-0 mt-0.5">·</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-primary-50/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">Education</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded mx-auto" />
          </motion.div>
          <div className="space-y-6 mb-12">
            {educationData.map((edu, idx) => (
              <motion.div
                key={edu.id}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/80"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-xl font-heading font-bold text-slate-900">{edu.degree}</h3>
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {edu.endDate}
                  </span>
                </div>
                <p className="text-slate-500 text-sm mb-2">{edu.institution} · {edu.location}</p>
                <p className="text-slate-600 text-sm font-medium">GPA: {edu.gpa}</p>
              </motion.div>
            ))}
          </div>

          {certificationsData.length > 0 && (
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-heading font-bold text-slate-800 mb-6 text-center">
                Certifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {certificationsData.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-sm border-l-4 border-pink-400"
                  >
                    <p className="text-lg font-bold text-primary-600">{cert.name}</p>
                    <p className="text-slate-500 text-sm mt-1">{cert.fullName}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Projects Section — hidden when empty */}
      {projectsData.length > 0 && (
        <section id="projects" className="section-padding bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">Projects</h2>
          </div>
        </section>
      )}

      {/* Publications Section — hidden when empty */}
      {publicationsData.length > 0 && (
        <section id="publications" className="section-padding bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">Publications</h2>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
