import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiPhone } from 'react-icons/fi';
import { personalInfo } from '../data/personalInfo';
import { fadeInUp, staggerContainer } from '../utils/animationVariants';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-primary-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="relative inline-block">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/profile.png`}
                alt={personalInfo.name}
                className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-xl"
              />

            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-medium px-4 py-1 rounded-full mb-5">
              Open to Opportunities
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold gradient-text mb-3 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 font-medium">
              Software Developer Lead
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-500 max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Location & Contact Info */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 text-slate-500 text-sm mb-8"
          >
            <span className="flex items-center gap-1.5">
              <FiMapPin className="w-4 h-4 text-primary-500" />
              {personalInfo.location}
            </span>
            <span className="flex items-center gap-1.5">
              <FiPhone className="w-4 h-4 text-primary-500" />
              {personalInfo.phone}
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-primary-500 transition-colors"
            >
              <FiMail className="w-4 h-4 text-primary-500" />
              {personalInfo.email}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10"
          >
            {personalInfo.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-slate-200 rounded-xl px-4 py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
            >
              <FiMail className="w-4 h-4" />
              Contact Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer border-2 border-primary-500 text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              View Projects
            </Link>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-300 text-slate-600 hover:border-primary-500 hover:text-primary-600 px-5 py-3 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <FiLinkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-300 text-slate-600 hover:border-primary-500 hover:text-primary-600 px-5 py-3 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <FiGithub className="w-4 h-4" />
              GitHub
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            variants={fadeInUp}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="text-slate-400 text-xs flex flex-col items-center gap-1"
          >
            <span>scroll down</span>
            <span>↓</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
