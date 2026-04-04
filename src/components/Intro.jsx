import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const Intro = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 2.5, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-black pointer-events-none"
    >
      <motion.h1
        initial={{ y: 0, opacity: 0, filter: 'blur(12px)', scale: 0.85 }}
        animate={{ y: -80, opacity: [0, 1, 1, 0], filter: ['blur(12px)', 'blur(0px)', 'blur(0px)', 'blur(4px)'], scale: [0.85, 1, 1, 0.95] }}
        transition={{
          duration: 3,
          times: [0, 0.3, 0.75, 1],
          ease: [0.16, 1, 0.3, 1],
        }}
        className="font-serif font-medium tracking-tight leading-[0.9] text-gray-900 dark:text-[#f5f5f7]"
        style={{ fontSize: 'clamp(2.8rem, 12vw, 10rem)' }}
      >
        ikro<span className="text-[#0071e3] dark:text-[#0a84ff] drop-shadow-[0_0_15px_rgba(0,113,227,0.8)] dark:drop-shadow-[0_0_20px_rgba(10,132,255,1)]">.</span>dev
      </motion.h1>
    </motion.div>
  );
};

export default Intro;
