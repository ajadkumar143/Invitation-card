import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './Navigation';
import CoverPage from '../pages/CoverPage';
import WelcomePage from '../pages/WelcomePage';
import HaldiPage from '../pages/HaldiPage';
import SangeetPage from '../pages/SangeetPage';
import WeddingPage from '../pages/WeddingPage';
import ReceptionPage from '../pages/ReceptionPage';

const FoldableLayout = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { id: 0, component: <CoverPage /> },
    { id: 1, component: <WelcomePage /> },
    { id: 2, component: <HaldiPage /> },
    { id: 3, component: <SangeetPage /> },
    { id: 4, component: <WeddingPage /> },
    { id: 5, component: <ReceptionPage /> },
  ];

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  // Variants for smooth page flip animations
  const pageVariants = {
    initial: { opacity: 0, x: -20, scale: 0.98 },
    in: { opacity: 1, x: 0, scale: 1 },
    out: { opacity: 0, x: 20, scale: 0.98 }
  };

  const rightPageVariants = {
    initial: { opacity: 0, x: 20, scale: 0.98 },
    in: { opacity: 1, x: 0, scale: 1 },
    out: { opacity: 0, x: -20, scale: 0.98 }
  };

  return (
    <div className="flex w-full h-full relative font-sans bg-neutral-900">
      {/* Left Screen (Main View on Mobile, Left Side on Foldable) */}
      <div className="w-full sm:w-1/2 h-full relative overflow-hidden flex flex-col z-10 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={`left-${currentPage}`}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full absolute inset-0"
          >
            {pages[currentPage].component}
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Layer */}
        <Navigation 
          currentPage={currentPage} 
          totalPages={pages.length} 
          onNext={handleNext} 
          onPrev={handlePrev} 
          setPage={setCurrentPage} 
        />
      </div>

      {/* Right Screen (Only visible on Foldable/sm+) */}
      <div className="hidden sm:flex w-1/2 h-full relative overflow-hidden flex-col z-0 border-l border-neutral-800 shadow-inner">
        <AnimatePresence mode="wait">
          {currentPage + 1 < pages.length ? (
            <motion.div
              key={`right-${currentPage}`}
              initial="initial"
              animate="in"
              exit="out"
              variants={rightPageVariants}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="w-full h-full absolute inset-0 filter brightness-75 hover:brightness-100 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>
              {pages[currentPage + 1].component}
            </motion.div>
          ) : (
            <motion.div
              key="end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-400 p-8 text-center absolute inset-0"
            >
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 text-2xl">💍</div>
              <h2 className="font-serif text-2xl text-slate-300 mb-2">We can't wait to see you</h2>
              <p className="text-sm">Please RSVP to confirm your presence.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FoldableLayout;
