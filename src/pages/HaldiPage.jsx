import React from 'react';
import { motion } from 'framer-motion';

const HaldiPage = () => {
  return (
    <div className="w-full h-full relative bg-yellow-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute top-0 w-full h-1/3 bg-cover bg-bottom opacity-80"
        style={{ backgroundImage: "url('/images/haldi_marigold_1776886261113.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-50"></div>
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="z-10 text-center flex flex-col items-center px-6 mt-16"
      >
        <span className="text-orange-500 uppercase tracking-[0.2em] text-xs font-bold mb-2">The Golden Glow</span>
        <h1 className="font-serif text-5xl text-orange-600 mb-6 drop-shadow-sm">Haldi</h1>

        <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-yellow-200/50 w-full max-w-[300px] flex flex-col gap-4">
          <div>
            <p className="text-orange-800 font-medium">Saturday, 25th November</p>
            <p className="text-neutral-600 text-sm">10:00 AM Onwards</p>
          </div>
          
          <div className="w-full h-px bg-yellow-300"></div>
          
          <div>
            <p className="text-orange-800 font-medium">The Courtyard, Grand Taj</p>
            <p className="text-neutral-600 text-sm">Mumbai, Maharashtra</p>
          </div>

          <div className="mt-2 py-2 px-4 bg-yellow-100 rounded-full border border-yellow-300 inline-block">
            <p className="text-xs text-orange-700 font-semibold uppercase">Dress Code: Sunshine Yellow</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HaldiPage;
