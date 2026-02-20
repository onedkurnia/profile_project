import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';
import { personalInfo } from '../data/personalInfo';
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animationVariants';

// TODO: If you want a contact form, integrate a service like Formspree (https://formspree.io)
//       and replace the static links below with a working <form> element.

const contactLinks = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'onedkurnia@gmail.com',
    href: `mailto:onedkurnia@gmail.com`,
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+62 858-7181-8829',
    href: 'tel:+6285871818829',
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/denione',
    href: 'https://www.linkedin.com/in/denione/',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/onedkurnia',
    href: 'https://www.github.com/onedkurnia',
    color: 'text-slate-700',
    bg: 'bg-slate-100',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Jakarta, Indonesia',
    href: null,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-50">
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
            Open to new opportunities and collaborations. Whether it's a project, a role, or just a chat about tech — feel free to reach out.
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
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white h-full flex flex-col justify-center">
              <h3 className="text-2xl font-heading font-bold mb-3">Let's Build Something</h3>
              <p className="text-primary-100 text-sm leading-relaxed mb-8">
                I'm experienced in end-to-end product delivery — from architecture to Play Store launch.
                If you're looking for a developer who can lead and ship, let's talk.
              </p>
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-center gap-2 bg-white text-primary-600 hover:bg-primary-50 font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
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
                {/* TODO: Add GitHub link once URL is provided in personalInfo.js */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
