import React from 'react';
import { motion } from 'framer-motion';

const WeddingPage = () => {
  return (
    <div className="w-full h-full relative bg-gradient-to-b from-[#2C0505] via-[#600000] to-[#180202] flex flex-col items-center justify-center overflow-hidden text-[#FFD700]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-6 w-24 h-24 text-[#D4AF37]/30 text-6xl">❀</div>
        <div className="absolute bottom-10 right-6 w-28 h-28 text-[#FFDE7D]/20 text-7xl">❁</div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,0,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.05),transparent_20%)]" />
      </div>

      {/* Top Floral/Mandap garland approximation */}
      <div className="absolute top-4 w-full flex justify-center opacity-80 text-[#FFD700] text-2xl tracking-widest">
        ❁ ❀ ❁ ❀ ❁ ❀ ❁ ❀ ❁
      </div>

      <motion.div 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="z-10 text-center flex flex-col items-center px-6"
      >
        <div className="mb-4">
          <p className="text-gold-400 font-serif italic text-lg">शुभ</p>
          <h1 className="font-serif text-5xl md:text-6xl text-gold-500 mb-2 drop-shadow-md">मुहूर्त</h1>
        </div>

        <div className="bg-red-900/40 backdrop-blur-sm p-6 rounded-t-full rounded-b-lg border-2 border-gold-500/30 w-full max-w-[280px] flex flex-col gap-5 mt-4 shadow-[0_0_30px_rgba(217,119,6,0.15)] relative">
          {/* Inner floral accent */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-gold-400 text-3xl bg-red-950 rounded-full w-12 h-12 flex items-center justify-center border border-gold-500/30">
            ❋
          </div>

          <div className="mt-4">
            <p className="text-gold-200 font-medium text-lg">रविवार, 26 नवंबर</p>
            <p className="text-gold-400/80 text-sm">बारात: सुबह 9:00 बजे</p>
            <p className="text-gold-400/80 text-sm">फेरे: सुबह 11:30 बजे</p>
          </div>
          
          <div className="flex justify-center items-center gap-2 text-gold-500/50">
            <span>~</span><span className="text-xs text-gold-500">❁</span><span>~</span>
          </div>
          
          <div>
            <p className="text-gold-200 font-medium">द ग्रैंड मंडप</p>
            <p className="text-gold-400/80 text-sm">ताज पैलेस, मुंबई</p>
          </div>

          <div className="mt-2 py-2 px-4 border border-gold-500/40 rounded-full inline-block">
            <p className="text-xs text-gold-300 font-semibold uppercase tracking-widest">ड्रेस कोड: पारंपरिक</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WeddingPage;
