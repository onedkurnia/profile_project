import React from 'react';

const SkeletonLoader = ({ 
  type = 'text', 
  count = 1,
  className = '' 
}) => {
  const baseClasses = 'animate-pulse bg-slate-200 rounded';
  
  const typeClasses = {
    text: 'h-4 w-full',
    title: 'h-8 w-3/4',
    avatar: 'h-12 w-12 rounded-full',
    card: 'h-64 w-full rounded-xl',
    button: 'h-10 w-32 rounded-lg'
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={`${baseClasses} ${typeClasses[type]}`} />
      ))}
    </div>
  );
};

export default SkeletonLoader;
