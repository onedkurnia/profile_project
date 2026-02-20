import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { personalInfo } from '../data/personalInfo';
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animationVariants';

const contactLinks = [
  {
    icon: FiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vincensia31',
    href: personalInfo.linkedin,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white/50 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-heading font-bold text-slate-900 mb-3">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded mx-auto mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto">
            Open to new clinical and occupational health opportunities. Whether it's a nursing role, a health program, or a collaboration — feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Links */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactLinks.map((link) => {
              const Icon = link.icon;
              const content = (
                <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-4 hover:border-primary-300 hover:shadow-md transition-all duration-300">
                  <div className={`${link.bg} rounded-lg p-3 shrink-0`}>
                    <Icon className={`w-5 h-5 ${link.color}`} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-0.5">{link.label}</p>
                    <p className="text-slate-800 font-medium text-sm">{link.value}</p>
                  </div>
                </div>
              );

              return link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={link.label}>{content}</div>
              );
            })}

          </motion.div>

          {/* CTA Panel */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary-500 to-pink-600 rounded-2xl p-8 text-white h-full flex flex-col justify-center">
              <h3 className="text-2xl font-heading font-bold mb-3">Let's Connect</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-8">
                I am experienced in clinical nursing, occupational health, and emergency care across hospital and industrial settings. If you are looking for a dedicated and certified nurse, I would love to hear from you.
              </p>
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-center gap-2 bg-white text-primary-700 hover:bg-slate-50 font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <FiMail className="w-4 h-4" />
                  Send Email
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FiLinkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
