import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData';
import { fadeInUp, staggerContainer } from '../utils/animationVariants';
import Badge from '../components/ui/Badge';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-50">
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
          <h2 className="text-4xl font-heading font-bold text-slate-900 mb-3">Core Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded mx-auto mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto">
            Technologies and practices I've worked with across mobile, frontend, backend, and cloud projects.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillsData.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: groupIndex * 0.05 }}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-500 inline-block"></span>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 hover:border-primary-300 hover:bg-primary-50 px-3 py-1.5 rounded-full text-sm text-slate-700 transition-colors duration-200"
                  >
                    {skill.icon && (
                      <skill.icon
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: skill.color }}
                      />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
