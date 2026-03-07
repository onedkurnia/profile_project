import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > prevScroll && currentScroll > 80) {
        setScrollDirection('down');
      } else if (currentScroll < prevScroll) {
        setScrollDirection('up');
      }
      
      setPrevScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScroll]);

  return scrollDirection;
};
