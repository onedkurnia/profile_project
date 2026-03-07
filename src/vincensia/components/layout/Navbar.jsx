import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiMail, FiLinkedin } from 'react-icons/fi';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { personalInfo } from '../../data/personalInfo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const scrollProgress = useScrollProgress();

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-10 left-0 right-0 h-1 bg-slate-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-400 to-pink-500"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Navbar */}
      <motion.nav
        className={`fixed top-10 left-0 right-0 z-40 transition-transform duration-300 ${
          scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="glass border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                <h1 className="text-2xl font-heading font-bold gradient-text">
                  VINSENSIA
                </h1>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-slate-700 hover:text-primary-500 font-medium cursor-pointer transition-colors"
                    activeClass="text-primary-500"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Social Icons */}
              <div className="hidden md:flex items-center space-x-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-600 hover:text-primary-500 transition-colors"
                  aria-label="Email"
                >
                  <FiMail className="w-5 h-5" />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-slate-700 hover:text-primary-500"
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="block text-slate-700 hover:text-primary-500 font-medium cursor-pointer transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-200">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FiLinkedin className="w-5 h-5 text-slate-600" />
                  </a>
                  <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                    <FiMail className="w-5 h-5 text-slate-600" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
