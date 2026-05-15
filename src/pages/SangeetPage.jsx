import React from 'react';
import { motion } from 'framer-motion';

const SangeetPage = () => {
  return (
    <div className="w-full h-full relative bg-purple-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute bottom-0 w-full h-1/2 bg-cover bg-top opacity-60 mix-blend-luminosity"
        style={{ backgroundImage: "url('/images/sangeet_dhol_1776886281474.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-purple-900"></div>
      </div>
      
      {/* Stars/Dust overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/50 via-purple-900/80 to-purple-950 pointer-events-none"></div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center flex flex-col items-center px-6 mb-16"
      >
        <h1 className="font-serif text-5xl text-purple-100 mb-2 drop-shadow-[0_0_15px_rgba(216,180,254,0.5)]">संगीत</h1>
        <span className="text-purple-300 italic font-serif text-lg mb-8">संगीत और नृत्य की एक शाम</span>

        <div className="bg-purple-950/40 backdrop-blur-xl p-6 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-purple-500/30 w-full max-w-[300px] flex flex-col gap-4">
          <div>
            <p className="text-purple-100 font-medium">शनिवार, 25 नवंबर</p>
            <p className="text-purple-300 text-sm">शाम 7:00 बजे से</p>
          </div>
          
          <div className="w-full h-px bg-purple-500/30"></div>
          
          <div>
            <p className="text-purple-100 font-medium">क्रिस्टल बॉलरूम</p>
            <p className="text-purple-300 text-sm">ग्रैंड ताज, मुंबई</p>
          </div>

          <div className="mt-2 py-2 px-4 bg-purple-800/50 rounded-full border border-purple-400/50 inline-block">
            <p className="text-xs text-purple-200 font-semibold uppercase tracking-wider">ड्रेस कोड: इंडो-वेस्टर्न</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SangeetPage;
