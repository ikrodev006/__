import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Avatar from './components/Avatar';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import Intro from './components/Intro';
import CustomCursor from './components/CustomCursor';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <div className="noise-overlay relative flex flex-col min-h-dvh selection:bg-accent/30 overflow-x-hidden bg-white dark:bg-black transition-colors duration-500">
      <CustomCursor />
      
      <AnimatePresence>
        {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <Avatar />

      {/* Main Layout Layer (Relative for Z-Index management) */}
      <div className="relative flex flex-col min-h-dvh w-full">
        {/* Ambient Depth Backgrounds (Global - Now covers full scroll height) */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isMobile ? 0.15 : 0.25,
              x: [-20, 20, -20],
              y: [-10, 30, -10],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              delay: 2.2, 
              duration: 25, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] max-w-[500px] max-h-[500px] bg-[#0071e3] rounded-full mix-blend-screen dark:mix-blend-lighten blur-[12vw] md:blur-[8vw]" 
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isMobile ? 0.1 : 0.15,
              x: [30, -30, 30],
              y: [20, -40, 20],
              scale: [1.1, 0.9, 1.1]
            }}
            transition={{ 
              delay: 2.5, 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] max-w-[400px] max-h-[400px] bg-[#5e5ce6] rounded-full mix-blend-screen dark:mix-blend-lighten blur-[10vw] md:blur-[6vw] translate-x-[10vw] md:translate-x-[15vw] translate-y-[5vh] md:translate-y-[10vh]" 
          />
        </div>

        {/* Content Layer */}
        <div className="flex-grow flex flex-col items-center justify-center relative z-10 w-full pt-[5vh] pb-[5vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="w-full flex flex-col items-center"
          >
            <ThemeToggle />
            <Hero />
          </motion.div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
