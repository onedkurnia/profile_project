import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

export const useCountUp = (end, duration = 2000, inView = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const startValue = 0;
    const endValue = typeof end === 'string' ? parseInt(end) : end;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuad = (t) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(progress) * (endValue - startValue) + startValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, inView]);

  return count;
};
