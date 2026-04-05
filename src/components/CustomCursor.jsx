import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 450, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleHover = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, .cursor-pointer');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    window.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget) setIsVisible(false);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [isVisible, mouseX, mouseY]);

  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches) return null;

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
        left: -8,
        top: -8,
      }}
      animate={{
        scale: isHovered ? 2.5 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      className="fixed inset-0 w-4 h-4 rounded-full bg-accent/20 dark:bg-accent-dark/20 border border-accent/40 dark:border-accent-dark/40 pointer-events-none z-[9999] backdrop-blur-[2px] shadow-sm mix-blend-difference"
    />
  );
}
