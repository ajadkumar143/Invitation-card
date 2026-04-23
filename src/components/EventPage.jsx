import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { AnimatedBorder, FloatingDecorations, Jhalar, Divider, BackgroundMotif, FloralArch } from './Decorations';

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const HaldiVisual = () => (
  <motion.div variants={textReveal} className="flex justify-center items-center my-6 opacity-95 drop-shadow-2xl relative w-full h-36">
    <div className="absolute inset-0 bg-gradient-to-t from-[#FF8C00]/40 to-[#FFD700]/10 blur-[30px] rounded-full"></div>
    {/* Turmeric Splash / Waves Background */}
    <svg className="absolute w-full h-full opacity-30" viewBox="0 0 200 100">
      <path d="M0,50 Q50,0 100,50 T200,50" fill="none" stroke="#FFA500" strokeWidth="8" strokeLinecap="round" />
      <path d="M0,70 Q50,20 100,70 T200,70" fill="none" stroke="#FFD700" strokeWidth="12" strokeLinecap="round" />
    </svg>
    {/* Marigold Curtains */}
    <div className="absolute top-0 flex w-full justify-between px-2 z-10 text-3xl">
      <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity }} className="flex flex-col items-center">
        <span>🌼</span><span>🌿</span><span>🌼</span>
      </motion.div>
      <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="flex flex-col items-center mt-[-10px]">
        <span>✨</span><span className="text-4xl">🌻</span>
      </motion.div>
      <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity }} className="flex flex-col items-center">
        <span>🌼</span><span>🌿</span><span>🌼</span>
      </motion.div>
    </div>
    {/* Central Glowing Motif without Plate */}
    <div className="z-20 mt-8 relative">
       <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full shadow-[0_0_40px_#FFA500] flex items-center justify-center border-4 border-[#FFA500]/50 backdrop-blur-sm">
          <span className="text-3xl filter hue-rotate-[-10deg] animate-pulse">🌞</span>
       </div>
    </div>
  </motion.div>
);

const WeddingVisual = () => (
  <motion.div variants={textReveal} className="flex justify-center items-center my-8 opacity-100 drop-shadow-2xl relative w-full h-40">
    <div className="absolute inset-0 bg-[#800000] blur-[50px] opacity-40 rounded-full"></div>
    
    {/* Golden Glow & Ornate Decor */}
    <div className="absolute inset-0 flex justify-center items-center opacity-40">
       <div className="w-32 h-32 border-2 border-dashed border-[#FFD700] rounded-full animate-spin-slow"></div>
       <div className="absolute w-28 h-28 border border-[#D4AF37] rounded-full"></div>
    </div>

    {/* Premium Varmalas (2 interlocking loops) */}
    <div className="relative flex justify-center items-start gap-0 z-10 mt-4">
      {/* Left Royal Mala */}
      <div className="w-16 h-28 border-x-4 border-b-8 border-double border-[#B22222] rounded-b-full relative drop-shadow-[0_15px_15px_rgba(0,0,0,0.7)]">
         <div className="absolute -inset-1 border border-dotted border-[#FFD700]/80 rounded-b-full"></div>
         <span className="absolute -left-4 top-2 text-2xl">🌹</span>
         <span className="absolute -right-4 top-8 text-xl">💮</span>
         <span className="absolute -left-4 top-14 text-2xl">🌹</span>
         <span className="absolute -right-4 top-20 text-xl">💮</span>
         <span className="absolute -left-3 bottom-0 text-xl">✨</span>
         <span className="absolute bottom-[-22px] left-[15%] text-4xl filter drop-shadow-[0_5px_15px_rgba(255,0,0,0.8)] z-30">🏵️</span>
      </div>

      {/* Right Royal Mala */}
      <div className="w-16 h-28 border-x-4 border-b-8 border-double border-[#8B0000] rounded-b-full relative drop-shadow-[0_15px_15px_rgba(0,0,0,0.7)] -ml-4 mt-6 z-20">
         <div className="absolute -inset-1 border border-dotted border-[#FFD700]/80 rounded-b-full"></div>
         <span className="absolute -right-4 top-2 text-2xl">🌹</span>
         <span className="absolute -left-4 top-8 text-xl">💮</span>
         <span className="absolute -right-4 top-14 text-2xl">🌹</span>
         <span className="absolute -left-4 top-20 text-xl">💮</span>
         <span className="absolute -right-3 bottom-0 text-xl">✨</span>
         <span className="absolute bottom-[-22px] left-[15%] text-4xl filter drop-shadow-[0_5px_15px_rgba(255,0,0,0.8)] z-30">🏵️</span>
      </div>
    </div>
  </motion.div>
);

const SymbolicVisual = ({ type }) => {
  switch (type) {
    case 'invitation':
      return (
        <motion.div variants={textReveal} className="flex justify-center items-center my-6 opacity-90 drop-shadow-xl relative w-full h-24">
          <div className="absolute inset-0 bg-[#D4AF37] blur-[40px] opacity-20 rounded-full"></div>
          <span className="text-7xl z-10 filter sepia-[0.4] hue-rotate-[10deg]">🙏</span>
        </motion.div>
      );
    case 'haldi':
      return <HaldiVisual />;
    case 'mehndi':
      return (
        <motion.div variants={textReveal} className="flex justify-center items-center my-6 opacity-90 drop-shadow-xl relative w-full h-24">
          <div className="absolute inset-0 bg-green-500 blur-[40px] opacity-20 rounded-full"></div>
          <span className="text-7xl z-10 relative filter sepia-[0.5] hue-rotate-[-40deg]">
            <span className="text-7xl">🖐️</span>
            <span className="text-4xl absolute -right-6 top-0 filter hue-rotate-[40deg]">🌿</span>
          </span>
        </motion.div>
      );
    case 'wedding':
      return <WeddingVisual />;
    case 'vidai':
      return (
        <motion.div variants={textReveal} className="flex justify-center items-center my-6 opacity-90 drop-shadow-xl relative w-full h-24">
          <div className="absolute inset-0 bg-pink-500 blur-[40px] opacity-20 rounded-full"></div>
          <span className="text-7xl z-10 relative">
            <span className="text-7xl">🕊️</span>
            <span className="text-4xl absolute -bottom-4 -right-4">🌸</span>
          </span>
        </motion.div>
      );
    default:
      return null;
  }
};

export const EventPage = ({ data }) => {
  const { type, badgeText, title, subtitle, message, extraMessage, date, time, address, bride, groom, theme } = data;

  return (
    <motion.div 
      key={data.id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full h-full relative ${theme.bg} flex flex-col p-8 pb-16 overflow-hidden`}
    >
      <BackgroundMotif color={theme.textAccent} />
      <FloatingDecorations type={type} color={theme.particleColor} />

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="z-20 flex-1 flex flex-col justify-center items-center text-center w-full max-w-[340px] mx-auto pt-16 pb-8"
      >
        <motion.div variants={textReveal} className="flex flex-col items-center w-full">
          <div className={`px-4 py-1.5 rounded-full border ${theme.borderColor} ${theme.textAccent} text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold mb-4 bg-white/20 backdrop-blur-sm shadow-sm`}>
            {badgeText}
          </div>
          
          <h1 className={`font-serif text-4xl sm:text-5xl ${theme.textPrimary} drop-shadow-md tracking-tight leading-tight mb-3`}>
            {title}
          </h1>
          
          {subtitle && (
            <p className={`text-sm font-medium italic ${theme.textSecondary} max-w-[280px]`}>
              "{subtitle}"
            </p>
          )}
        </motion.div>

        <motion.div variants={textReveal} className="w-full flex flex-col items-center my-2">
          
          <SymbolicVisual type={type} />
          
          {message && (
            <p className={`text-sm sm:text-base font-semibold leading-relaxed ${theme.textPrimary} px-2 mt-2`}>
              {message}
            </p>
          )}

          {bride && groom && (
            <div className="w-full relative py-2">
              <h2 className={`font-serif text-3xl font-extrabold ${theme.textPrimary} drop-shadow-lg`}>{bride}</h2>
              <div className="flex items-center justify-center gap-3 my-2">
                <div className={`h-px flex-1 ${theme.bg.split(' ')[0]} bg-gradient-to-r from-transparent via-current to-transparent ${theme.textAccent}`}></div>
                <span className={`font-serif italic text-xl ${theme.textSecondary}`}>weds</span>
                <div className={`h-px flex-1 ${theme.bg.split(' ')[0]} bg-gradient-to-r from-transparent via-current to-transparent ${theme.textAccent}`}></div>
              </div>
              <h2 className={`font-serif text-3xl font-extrabold ${theme.textPrimary} drop-shadow-lg`}>{groom}</h2>
            </div>
          )}

          {(date || time || address) && (
            <div className={`flex flex-col gap-3 font-bold text-xs sm:text-sm ${theme.textSecondary} w-full mt-4`}>
              <div className="flex justify-center items-center gap-4">
                {date && (
                  <div className="flex items-center gap-2 bg-white/40 px-3 py-1.5 rounded-lg border border-white/30 shadow-sm backdrop-blur-md">
                    <Calendar size={14} className={theme.textAccent} />
                    <span>{date}</span>
                  </div>
                )}
                {time && (
                  <div className="flex items-center gap-2 bg-white/40 px-3 py-1.5 rounded-lg border border-white/30 shadow-sm backdrop-blur-md">
                    <Clock size={14} className={theme.textAccent} />
                    <span>{time}</span>
                  </div>
                )}
              </div>
              
              {address && (
                <div className="flex items-center justify-center gap-2 mt-2 bg-white/40 px-4 py-2 rounded-xl border border-white/30 shadow-sm backdrop-blur-md">
                  <MapPin size={16} className={`shrink-0 ${theme.textAccent}`} />
                  <span className={`text-left leading-snug ${theme.textPrimary}`}>{address}</span>
                </div>
              )}
            </div>
          )}
        </motion.div>

        <motion.div variants={textReveal} className="flex flex-col items-center w-full mt-auto pt-6">
          <Divider color={theme.textAccent} />
          {extraMessage && (
            <p className={`text-[11px] sm:text-xs font-semibold tracking-wide ${theme.textSecondary} px-4 mb-4 uppercase`}>
              {extraMessage}
            </p>
          )}
        </motion.div>

      </motion.div>
    </motion.div>
  );
};
