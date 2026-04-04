import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import avatarUrl from '../assets/images/avatar.jpeg';

const Avatar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: -20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ delay: 3.2, duration: 0.8, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed top-[max(2.5vh,1rem)] left-[max(2.5vw,1rem)] z-50 flex items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Avatar circle */}
      <div className="relative cursor-pointer">
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-full bg-[#0071e3]/30 dark:bg-[#0a84ff]/30 blur-md scale-110 animate-pulse" />
        {/* Photo */}
        <img
          src={avatarUrl}
          alt="Icaro Pereira"
          className="relative w-10 h-10 md:w-12 md:h-12 rounded-full object-cover object-top ring-2 ring-[#0071e3]/60 dark:ring-[#0a84ff]/60 shadow-lg"
          style={{ boxShadow: '0 0 12px rgba(0, 113, 227, 0.4)' }}
        />
        {/* Online indicator */}
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-black shadow-sm" />
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: -8, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -8, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 380, damping: 24 }}
            className="glass-material px-4 py-2 rounded-xl text-xs font-medium tracking-wide text-gray-700 dark:text-gray-200 whitespace-nowrap shadow-lg"
          >
            <span className="text-gray-400 dark:text-gray-500">status: </span>
            <span className="text-green-400 font-semibold">openToWork</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Avatar;
