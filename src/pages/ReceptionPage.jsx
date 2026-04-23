import React from 'react';
import { motion } from 'framer-motion';

const ReceptionPage = () => {
  return (
    <div className="w-full h-full relative bg-slate-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Starry Night CSS Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[20%] shadow-[0_0_10px_white] animate-pulse"></div>
        <div className="absolute w-1.5 h-1.5 bg-blue-200 rounded-full top-[25%] left-[70%] shadow-[0_0_15px_white] animate-pulse delay-75"></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[40%] left-[10%] shadow-[0_0_5px_white] animate-pulse delay-150"></div>
        <div className="absolute w-2 h-2 bg-yellow-100 rounded-full top-[15%] left-[85%] shadow-[0_0_20px_white] animate-pulse delay-300"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[60%] left-[80%] shadow-[0_0_10px_white] animate-pulse delay-500"></div>
        <div className="absolute w-1 h-1 bg-blue-100 rounded-full top-[80%] left-[30%] shadow-[0_0_10px_white] animate-pulse delay-200"></div>
      </div>
      
      {/* Light gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent pointer-events-none z-0"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 text-center flex flex-col items-center px-6 w-full"
      >
        <span className="text-blue-300 uppercase tracking-[0.3em] text-xs font-bold mb-3">Grand Finale</span>
        <h1 className="font-serif text-5xl md:text-6xl text-slate-100 mb-8 drop-shadow-lg">Reception</h1>

        <div className="bg-slate-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-blue-400/20 w-full max-w-[300px] flex flex-col gap-5">
          <div>
            <p className="text-slate-200 font-medium text-lg">Sunday, 26th November</p>
            <p className="text-blue-200/70 text-sm">7:30 PM Onwards</p>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          <div>
            <p className="text-slate-200 font-medium">Starlight Lawn</p>
            <p className="text-blue-200/70 text-sm">Taj Palace, Mumbai</p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 py-3 px-8 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
          >
            RSVP NOW
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ReceptionPage;
