import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  glass = false,
  hover = true,
  padding = true,
  ...props 
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300';
  const paddingClasses = padding ? 'p-6' : '';
  const glassClasses = glass 
    ? 'glass shadow-lg' 
    : 'bg-white border border-slate-200 shadow-md';
  const hoverClasses = hover 
    ? 'hover:shadow-xl hover:-translate-y-1' 
    : '';

  return (
    <motion.div
      className={`${baseClasses} ${paddingClasses} ${glassClasses} ${hoverClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
