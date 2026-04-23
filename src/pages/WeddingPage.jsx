import React from 'react';
import { motion } from 'framer-motion';

const WeddingPage = () => {
  return (
    <div className="w-full h-full relative bg-red-950 flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative floral corners using CSS and pseudo-elements or text */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-800 to-transparent"></div>
      
      {/* Top Floral/Mandap garland approximation */}
      <div className="absolute top-0 w-full flex justify-center opacity-80 mt-4 text-gold-500 text-2xl tracking-widest">
        ❁ ❀ ❁ ❀ ❁ ❀ ❁ ❀ ❁
      </div>

      <motion.div 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="z-10 text-center flex flex-col items-center px-6"
      >
        <div className="mb-4">
          <p className="text-gold-400 font-serif italic text-lg">The Auspicious</p>
          <h1 className="font-serif text-5xl md:text-6xl text-gold-500 mb-2 drop-shadow-md">Muhurtham</h1>
        </div>

        <div className="bg-red-900/40 backdrop-blur-sm p-6 rounded-t-full rounded-b-lg border-2 border-gold-500/30 w-full max-w-[280px] flex flex-col gap-5 mt-4 shadow-[0_0_30px_rgba(217,119,6,0.15)] relative">
          {/* Inner floral accent */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-gold-400 text-3xl bg-red-950 rounded-full w-12 h-12 flex items-center justify-center border border-gold-500/30">
            ❋
          </div>

          <div className="mt-4">
            <p className="text-gold-200 font-medium text-lg">Sunday, 26th November</p>
            <p className="text-gold-400/80 text-sm">Baraat: 9:00 AM</p>
            <p className="text-gold-400/80 text-sm">Pheras: 11:30 AM</p>
          </div>
          
          <div className="flex justify-center items-center gap-2 text-gold-500/50">
            <span>~</span><span className="text-xs text-gold-500">❁</span><span>~</span>
          </div>
          
          <div>
            <p className="text-gold-200 font-medium">The Grand Mandap</p>
            <p className="text-gold-400/80 text-sm">Taj Palace, Mumbai</p>
          </div>

          <div className="mt-2 py-2 px-4 border border-gold-500/40 rounded-full inline-block">
            <p className="text-xs text-gold-300 font-semibold uppercase tracking-widest">Dress Code: Traditional</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WeddingPage;
