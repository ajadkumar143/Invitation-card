import React from 'react';
import { motion } from 'framer-motion';

const WelcomePage = () => {
  return (
    <div className="w-full h-full relative bg-orange-50 flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Decorative Border */}
      <div className="absolute inset-4 border border-gold-500/40 rounded-2xl pointer-events-none"></div>
      <div className="absolute inset-5 border border-gold-500/20 rounded-xl pointer-events-none"></div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center z-10"
      >
        {/* Lord Ganesha text representation / Om */}
        <div className="w-24 h-24 mb-6 rounded-full bg-gold-100 border border-gold-400 flex items-center justify-center shadow-lg shadow-gold-500/20">
          <span className="text-4xl text-crimson-800">ॐ</span>
        </div>

        <h2 className="text-crimson-800 font-serif text-2xl mb-2">Shree Ganeshay Namah</h2>
        <div className="w-12 h-0.5 bg-gold-500 mb-6"></div>

        <p className="text-neutral-700 text-sm md:text-base leading-relaxed max-w-[280px]">
          We seek the blessings of the Almighty and our elders as we embark on this beautiful journey of love and togetherness.
          Please join us to make our celebrations complete with your presence.
        </p>
      </motion.div>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-gold-500/50 rounded-tl-lg"></div>
      <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-gold-500/50 rounded-tr-lg"></div>
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-gold-500/50 rounded-bl-lg"></div>
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-gold-500/50 rounded-br-lg"></div>
    </div>
  );
};

export default WelcomePage;
