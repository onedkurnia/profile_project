import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiBook } from 'react-icons/fi';
import { publicationsData } from '../data/publicationsData';
import { fadeInUp, staggerContainer } from '../utils/animationVariants';
import Badge from '../components/ui/Badge';

// TODO: Add more publications to /src/data/publicationsData.js if needed

export default function Publications() {
  return (
    <section id="publications" className="section-padding bg-white">
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
          <h2 className="text-4xl font-heading font-bold text-slate-900 mb-3">Publications</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded mx-auto mb-4" />
          <p className="text-slate-500">Research published as part of academic and professional work.</p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {publicationsData.map((pub, index) => (
            <motion.div
              key={pub.id}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 rounded-lg p-3 shrink-0">
                  <FiBook className="w-5 h-5 text-primary-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start gap-2 justify-between mb-1">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">{pub.title}</h3>
                    <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full shrink-0">
                      {pub.year}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm mb-1">{pub.authors}</p>
                  <p className="text-primary-600 text-xs font-medium mb-3">{pub.platform} · {pub.type}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{pub.abstract}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag) => (
                      <Badge key={tag} variant="default" size="sm">{tag}</Badge>
                    ))}
                  </div>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary-600 hover:text-primary-800 text-sm font-medium transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      View on {pub.platform}
                    </a>
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
