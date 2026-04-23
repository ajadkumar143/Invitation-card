import React from 'react';
import { motion } from 'framer-motion';

const CoverPage = () => {
  return (
    <div className="w-full h-full relative bg-crimson-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center mix-blend-screen"
        style={{ backgroundImage: "url('/images/cover_mandala_1776886245721.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-crimson-900 via-transparent to-crimson-900/50" />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="z-10 text-center flex flex-col items-center gap-6 p-8 border-2 border-gold-500/30 rounded-3xl backdrop-blur-sm shadow-[0_0_40px_rgba(251,191,36,0.15)] m-6"
      >
        <span className="text-gold-400 tracking-widest text-sm uppercase font-semibold">Together with their families</span>
        
        <div className="flex flex-col items-center gap-2 my-4">
          <h1 className="font-serif text-5xl md:text-6xl text-gold-400 drop-shadow-md">Rohan</h1>
          <span className="text-gold-500 font-serif italic text-3xl">&</span>
          <h1 className="font-serif text-5xl md:text-6xl text-gold-400 drop-shadow-md">Priya</h1>
        </div>

        <p className="text-gold-100 text-sm md:text-base font-light tracking-wide max-w-[250px]">
          Joyfully invite you to celebrate the beginning of their new life together
        </p>

        <div className="w-16 h-px bg-gold-500/50 mt-4"></div>
        <p className="text-gold-300 font-serif italic">Swipe or click next to open</p>
      </motion.div>
    </div>
  );
};

export default CoverPage;
