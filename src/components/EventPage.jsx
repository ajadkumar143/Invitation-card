import React, { useMemo } from 'react';
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

// --- PREMIUM INVITATION PAGE COMPONENTS ---

const GoldenShimmer = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
    {Array.from({ length: 14 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-[#FFD700] shadow-[0_0_6px_#FFD700]"
        style={{ left: `${8 + Math.random() * 84}%`, top: `${5 + Math.random() * 90}%` }}
        animate={{ opacity: [0, 0.9, 0], scale: [0.3, 1.3, 0.3] }}
        transition={{ duration: 2.5 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 4 }}
      />
    ))}
  </div>
);

const InvitationJhalar = () => {
  const items = ['🌸', '🌼', '✨', '🌺', '🌼', '✨', '🌸'];
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center items-end gap-0.5"
    >
      {items.map((f, i) => (
        <motion.span
          key={i}
          className="text-xl drop-shadow-md"
          animate={{ y: [0, -3, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 2.5 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {f}
        </motion.span>
      ))}
    </motion.div>
  );
};

const GoldenDivider = () => (
  <div className="flex items-center justify-center gap-2 w-48 mx-auto my-2">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
    <motion.div
      className="w-2.5 h-2.5 rotate-45 bg-[#D4AF37] shadow-[0_0_10px_#FFD700]"
      animate={{ scale: [0.9, 1.15, 0.9] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
  </div>
);

const PremiumInvitationContent = ({ data }) => {
  const { bride, groom, date, time, address, subtitle, message, extraMessage } = data;

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      className="z-20 flex-1 flex flex-col items-center text-center w-full max-w-[340px] mx-auto pt-10 pb-8 px-4 relative"
    >
      {/* Floral Corners */}
      {['top-1 left-1', 'top-1 right-1 scale-x-[-1]', 'bottom-1 left-1 scale-y-[-1]', 'bottom-1 right-1 scale-x-[-1] scale-y-[-1]'].map((pos, i) => (
        <motion.span
          key={i}
          className={`absolute ${pos} text-2xl z-[5] opacity-60 pointer-events-none`}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
        >🌿</motion.span>
      ))}

      {/* Jhalar Header */}
      <motion.div variants={fadeUp}><InvitationJhalar /></motion.div>

      {/* Blessing Symbol */}
      <motion.div variants={fadeUp} className="my-2.5">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFFDF2] to-[#FFD700]/25 flex items-center justify-center border-2 border-[#D4AF37]/40 shadow-[0_0_30px_rgba(212,175,55,0.25)]">
          <span className="text-3xl">🙏</span>
        </div>
      </motion.div>

      {/* Badge + Title */}
      <motion.div variants={fadeUp} className="flex flex-col items-center">
        <span className="text-[#B8860B] uppercase tracking-[0.25em] text-[9px] font-bold mb-1 opacity-80">
          Auspicious Beginning
        </span>
        <h1 className="font-serif text-[2rem] sm:text-4xl text-[#800000] drop-shadow-md tracking-tight leading-[1.1]">
          {data.title}
        </h1>
      </motion.div>

      {/* Divider */}
      <motion.div variants={fadeUp}><GoldenDivider /></motion.div>

      {/* Subtitle */}
      <motion.p variants={fadeUp} className="text-[11px] sm:text-xs italic text-[#B8860B] max-w-[280px] leading-relaxed font-medium">
        &ldquo;{subtitle}&rdquo;
      </motion.p>

      {/* Bride & Groom Names */}
      <motion.div variants={fadeUp} className="w-full my-3 py-3 relative z-30">
        <div className="absolute inset-x-6 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
        <div className="absolute inset-x-6 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

        <motion.h2
          className="font-serif text-2xl sm:text-3xl font-extrabold text-[#800000] drop-shadow-lg tracking-wide"
          animate={{ textShadow: ['0 0 0px transparent', '0 0 20px rgba(212,175,55,0.3)', '0 0 0px transparent'] }}
          transition={{ duration: 3, repeat: Infinity }}
        >{bride}</motion.h2>

        <div className="flex items-center justify-center gap-3 my-0.5">
          <div className="h-px w-14 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <span className="font-serif italic text-base text-[#D4AF37] drop-shadow-sm">संग</span>
          <div className="h-px w-14 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>

        <motion.h2
          className="font-serif text-2xl sm:text-3xl font-extrabold text-[#800000] drop-shadow-lg tracking-wide"
          animate={{ textShadow: ['0 0 0px transparent', '0 0 20px rgba(212,175,55,0.3)', '0 0 0px transparent'] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        >{groom}</motion.h2>
      </motion.div>

      {/* Date, Time, Venue Cards (Centered prominently) */}
      <motion.div variants={fadeUp} className="flex flex-col gap-2 w-full my-2 z-30">
        <div className="flex justify-center gap-2">
          <div className="flex items-center gap-1.5 bg-gradient-to-br from-[#FFF8DC] to-[#FDF5E6] backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#D4AF37] shadow-[0_4px_10px_rgba(212,175,55,0.2)]">
            <Calendar size={14} className="text-[#800000]" />
            <span className="text-xs font-extrabold text-[#800000]">{date}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gradient-to-br from-[#FFF8DC] to-[#FDF5E6] backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#D4AF37] shadow-[0_4px_10px_rgba(212,175,55,0.2)]">
            <Clock size={14} className="text-[#800000]" />
            <span className="text-xs font-extrabold text-[#800000]">{time}</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1.5 bg-gradient-to-br from-[#FFF8DC] to-[#FDF5E6] backdrop-blur-md px-4 py-1.5 rounded-xl border border-[#D4AF37] shadow-[0_4px_10px_rgba(212,175,55,0.2)] mx-auto w-[85%]">
          <MapPin size={14} className="text-[#800000] shrink-0" />
          <span className="text-xs font-extrabold text-[#800000] text-center leading-tight">{address}</span>
        </div>
      </motion.div>

      {/* Invitation Message */}
      <motion.p variants={fadeUp} className="text-[11px] sm:text-xs text-[#5C4033] leading-relaxed px-2 max-w-[300px] font-medium my-2">
        {message}
      </motion.p>

      {/* Bottom Blessing */}
      <motion.div variants={fadeUp} className="flex flex-col items-center mt-3">
        <GoldenDivider />
        <p className="text-[10px] sm:text-xs font-semibold tracking-wide text-[#D4AF37] uppercase mt-1">
          {extraMessage}
        </p>
        <div className="flex gap-2 mt-1.5 text-lg">
          <span>🌸</span><span>✨</span><span>🌸</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- PREMIUM MEHNDI PAGE COMPONENT ---

const MehndiHennaPattern = () => (
  <div className="absolute inset-0 pointer-events-none z-[3] overflow-hidden opacity-[0.06]">
    <svg className="absolute top-4 left-4 w-24 h-24" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" className="text-green-900" />
      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" className="text-green-900" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-green-900" />
      <path d="M50,5 Q65,30 50,50 Q35,30 50,5" fill="currentColor" className="text-green-900" />
      <path d="M50,95 Q65,70 50,50 Q35,70 50,95" fill="currentColor" className="text-green-900" />
      <path d="M5,50 Q30,65 50,50 Q30,35 5,50" fill="currentColor" className="text-green-900" />
      <path d="M95,50 Q70,65 50,50 Q70,35 95,50" fill="currentColor" className="text-green-900" />
    </svg>
    <svg className="absolute bottom-4 right-4 w-24 h-24" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" className="text-green-900" />
      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" className="text-green-900" />
      <path d="M50,5 Q65,30 50,50 Q35,30 50,5" fill="currentColor" className="text-green-900" />
      <path d="M50,95 Q65,70 50,50 Q35,70 50,95" fill="currentColor" className="text-green-900" />
    </svg>
    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-green-800" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" className="text-green-800" />
    </svg>
  </div>
);

const MehndiLeafySides = () => (
  <div className="absolute inset-y-0 left-0 right-0 pointer-events-none z-[4] overflow-hidden">
    {/* Left side leaves */}
    {[15, 35, 55, 75].map((top, i) => (
      <motion.div
        key={`l-${i}`}
        className="absolute left-1 text-xl opacity-40"
        style={{ top: `${top}%` }}
        animate={{ x: [-2, 3, -2], rotate: [-5, 5, -5] }}
        transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        🌿
      </motion.div>
    ))}
    {/* Right side leaves */}
    {[20, 45, 65, 85].map((top, i) => (
      <motion.div
        key={`r-${i}`}
        className="absolute right-1 text-xl opacity-40 scale-x-[-1]"
        style={{ top: `${top}%` }}
        animate={{ x: [2, -3, 2], rotate: [5, -5, 5] }}
        transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        🌿
      </motion.div>
    ))}
  </div>
);

const MehndiFloatingPetals = () => {
  const petals = useMemo(() => Array.from({ length: 12 }).map((_, i) => ({
    left: `${Math.random() * 85 + 5}%`,
    top: `${Math.random() * 85 + 5}%`,
    dur: 5 + Math.random() * 4,
    delay: Math.random() * 3,
    icon: ['🍃', '🌿', '💚', '🌱', '✨'][i % 5]
  })), []);

  return (
    <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden">
      {petals.map((p, i) => (
        <motion.div
          key={i}
          className="absolute text-base opacity-50 drop-shadow-sm"
          style={{ left: p.left, top: p.top }}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            opacity: [0.15, 0.55, 0.15],
            rotate: [0, 15, -15, 0]
          }}
          transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        >
          {p.icon}
        </motion.div>
      ))}
    </div>
  );
};

const MehndiHangingDecor = () => (
  <div className="absolute top-0 left-8 right-8 flex justify-between z-[6] pointer-events-none">
    {['🌿💚🌿', '💚🌿💚', '🌿✨🌿'].map((mala, i) => (
      <motion.div
        key={i}
        animate={{ rotate: i % 2 === 0 ? [-2, 2, -2] : [2, -2, 2] }}
        transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
        style={{ originY: 0 }}
        className="flex flex-col items-center"
      >
        <div className="text-lg drop-shadow-md tracking-widest">{mala}</div>
        <div className="w-0.5 h-5 bg-green-700/30 mt-0.5"></div>
        <div className="w-2 h-2 rotate-45 bg-green-600/60 shadow-[0_0_5px_rgba(34,139,34,0.5)]"></div>
      </motion.div>
    ))}
  </div>
);

const MehndiGreenDivider = () => (
  <div className="flex items-center justify-center gap-2 w-44 mx-auto my-1.5">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-700/60 to-green-700/60" />
    <motion.div
      className="w-2 h-2 rotate-45 bg-green-700 shadow-[0_0_8px_rgba(34,139,34,0.5)]"
      animate={{ scale: [0.9, 1.15, 0.9] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-green-700/60 to-green-700/60" />
  </div>
);

const PremiumMehndiContent = ({ data }) => {
  const { title, subtitle, date, time, address, message, extraMessage, theme } = data;

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <>
      <MehndiHennaPattern />
      <MehndiLeafySides />
      <MehndiFloatingPetals />
      <MehndiHangingDecor />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="z-20 flex-1 flex flex-col items-center text-center w-full max-w-[340px] mx-auto pt-4 pb-4 px-2 relative"
      >
        {/* Floral Corners */}
        {['top-0 left-0', 'top-0 right-0 scale-x-[-1]', 'bottom-0 left-0 scale-y-[-1]', 'bottom-0 right-0 scale-x-[-1] scale-y-[-1]'].map((pos, i) => (
          <motion.span
            key={i}
            className={`absolute ${pos} text-2xl z-[5] opacity-50 pointer-events-none`}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
          >🌿</motion.span>
        ))}

        {/* Badge */}
        <motion.div variants={fadeUp}>
          <div className="px-4 py-1.5 rounded-full border border-green-700/50 text-green-800 text-[10px] uppercase tracking-[0.25em] font-bold mb-3 bg-white/25 backdrop-blur-sm shadow-sm">
            {data.badgeText}
          </div>
        </motion.div>

        {/* Title */}
        <motion.div variants={fadeUp}>
          <h1 className="font-serif text-[2.2rem] sm:text-5xl text-[#004B23] drop-shadow-md tracking-tight leading-[1.1] mb-1">
            {title}
          </h1>
        </motion.div>

        <motion.div variants={fadeUp}>
          <MehndiGreenDivider />
        </motion.div>

        {/* Subtitle Quote Block */}
        <motion.div variants={fadeUp} className="my-2">
          <div className="bg-white/35 backdrop-blur-md px-5 py-3 rounded-2xl border border-green-600/20 shadow-lg">
            <p className="text-[11px] sm:text-xs italic text-green-800 leading-relaxed font-medium">
              "{subtitle}"
            </p>
          </div>
        </motion.div>

        {/* Symbolic Visual */}
        <motion.div variants={fadeUp} className="flex justify-center items-center my-2 relative w-full h-20">
          <div className="absolute inset-0 bg-green-500 blur-[30px] opacity-15 rounded-full"></div>
          <div className="z-10 flex items-center gap-3">
            <motion.span className="text-3xl" animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity }}>🌿</motion.span>
            <div className="w-14 h-14 bg-gradient-to-br from-[#F0FFF0] to-[#228B22]/20 rounded-full flex items-center justify-center border-2 border-green-600/30 shadow-[0_0_25px_rgba(34,139,34,0.2)]">
              <span className="text-3xl">🖐️</span>
            </div>
            <motion.span className="text-3xl" animate={{ rotate: [5, -5, 5] }} transition={{ duration: 3, repeat: Infinity }}>🌿</motion.span>
          </div>
        </motion.div>

        {/* Mehndi Message Card */}
        {message && (
          <motion.div variants={fadeUp} className="w-full my-1.5">
            <div className="bg-white/40 backdrop-blur-md px-4 py-2.5 rounded-xl border border-green-600/15 shadow-md">
              <p className="text-[11px] sm:text-xs text-green-900 leading-relaxed font-medium">
                {message}
              </p>
            </div>
          </motion.div>
        )}

        {/* Date, Time, Address Cards */}
        <motion.div variants={fadeUp} className="flex flex-col gap-2 w-full mt-1.5 z-30">
          <div className="flex justify-center gap-2">
            <div className="flex items-center gap-1.5 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#2E8B57] shadow-[0_4px_10px_rgba(0,75,35,0.2)]">
              <Calendar size={14} className="text-[#004B23]" />
              <span className="text-xs font-extrabold text-[#004B23]">{date}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#2E8B57] shadow-[0_4px_10px_rgba(0,75,35,0.2)]">
              <Clock size={14} className="text-[#004B23]" />
              <span className="text-xs font-extrabold text-[#004B23]">{time}</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] backdrop-blur-md px-4 py-1.5 rounded-xl border border-[#2E8B57] shadow-[0_4px_10px_rgba(0,75,35,0.2)] mx-auto w-[85%]">
            <MapPin size={14} className="text-[#004B23] shrink-0" />
            <span className="text-xs font-extrabold text-[#004B23] text-center leading-tight">{address}</span>
          </div>
        </motion.div>

        {/* Dress Code Badge */}
        <motion.div variants={fadeUp} className="mt-2">
          <div className="py-1.5 px-5 bg-green-100/50 rounded-full border border-green-500/30 shadow-sm backdrop-blur-sm">
            <p className="text-[10px] text-green-800 font-semibold uppercase tracking-wider">ड्रेस कोड: हरे रंग के परिधान</p>
          </div>
        </motion.div>

        {/* Footer Section */}
        <motion.div variants={fadeUp} className="flex flex-col items-center w-full mt-auto pt-4">
          <MehndiGreenDivider />
          <p className="text-[10px] sm:text-xs font-semibold tracking-wide text-green-800/80 px-4 mt-1.5 uppercase leading-relaxed">
            {extraMessage}
          </p>
          <div className="flex gap-2 mt-1.5 text-base">
            <span>🌿</span><span>✨</span><span>🌿</span>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

// --- PREMIUM WEDDING PAGE COMPONENT ---

const WeddingGoldenDivider = () => (
  <div className="flex items-center justify-center gap-2 w-44 mx-auto my-1">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#FFD700]/70 to-[#FFD700]/70" />
    <motion.div
      className="w-2 h-2 rotate-45 bg-[#FFD700] shadow-[0_0_10px_#FFD700]"
      animate={{ scale: [0.9, 1.15, 0.9] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#FFD700]/70 to-[#FFD700]/70" />
  </div>
);

const PremiumWeddingContent = ({ data }) => {
  const { title, subtitle, bride, groom, date, time, address, extraMessage } = data;

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="z-20 flex-1 flex flex-col items-center justify-center text-center w-full max-w-[340px] mx-auto px-2 py-2 relative"
    >
      <FloralArch color="text-[#FFD700]" />
      <AnimatedBorder borderColor="text-[#FFD700]" />

      {/* Badge */}
      <motion.div variants={fadeUp}>
        <div className="px-4 py-1.5 rounded-full border border-[#FFD700]/50 text-[#FFD700] text-[10px] uppercase tracking-[0.25em] font-bold mb-2 bg-white/10 backdrop-blur-sm shadow-sm">
          {data.badgeText}
        </div>
      </motion.div>

      {/* Title */}
      <motion.div variants={fadeUp}>
        <h1 className="font-serif text-[2rem] sm:text-4xl text-[#FFD700] drop-shadow-md tracking-tight leading-[1.1] mb-1">
          {title}
        </h1>
      </motion.div>

      <motion.div variants={fadeUp}>
        <WeddingGoldenDivider />
      </motion.div>

      {/* Subtitle */}
      {subtitle && (
        <motion.div variants={fadeUp} className="mb-2">
          <p className="text-[11px] sm:text-xs italic text-[#F0E68C] max-w-[280px] leading-relaxed font-medium">
            "{subtitle}"
          </p>
        </motion.div>
      )}

      {/* Premium Wedding Malas */}
      <motion.div variants={fadeUp} className="flex justify-center items-center my-2 relative w-full h-28">
        {/* Warm glow behind malas */}
        <div className="absolute inset-0 bg-[#800000] blur-[40px] opacity-25 rounded-full"></div>

        {/* Golden shimmer particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#FFD700] shadow-[0_0_4px_#FFD700]"
            style={{ left: `${15 + Math.random() * 70}%`, top: `${10 + Math.random() * 80}%` }}
            animate={{ opacity: [0, 0.9, 0], scale: [0.3, 1.2, 0.3] }}
            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}

        <div className="z-10 flex justify-center items-start relative">
          {/* Left Mala */}
          <motion.div
            className="relative"
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-14 h-24 border-x-[3px] border-b-[5px] border-double border-[#B22222] rounded-b-full relative drop-shadow-[0_8px_12px_rgba(0,0,0,0.5)]">
              <div className="absolute -inset-[3px] border border-dotted border-[#FFD700]/60 rounded-b-full"></div>
              {/* Rose beads */}
              <span className="absolute -left-3 top-1 text-lg">🌹</span>
              <span className="absolute -right-3 top-5 text-sm">💮</span>
              <span className="absolute -left-3 top-10 text-lg">🌹</span>
              <span className="absolute -right-3 top-14 text-sm">💮</span>
              <span className="absolute -left-2 bottom-2 text-sm">✨</span>
              {/* Golden bead string */}
              <div className="absolute inset-x-1 top-0 bottom-2 border-x border-dashed border-[#FFD700]/40"></div>
              {/* Bottom rosette */}
              <span className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 text-2xl drop-shadow-[0_4px_8px_rgba(255,0,0,0.6)] z-10">🏵️</span>
            </div>
          </motion.div>

          {/* Right Mala — offset and interlocking */}
          <motion.div
            className="relative -ml-3 mt-4 z-20"
            animate={{ rotate: [1, -1, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-14 h-24 border-x-[3px] border-b-[5px] border-double border-[#8B0000] rounded-b-full relative drop-shadow-[0_8px_12px_rgba(0,0,0,0.5)]">
              <div className="absolute -inset-[3px] border border-dotted border-[#FFD700]/60 rounded-b-full"></div>
              {/* Rose beads */}
              <span className="absolute -right-3 top-1 text-lg">🌹</span>
              <span className="absolute -left-3 top-5 text-sm">💮</span>
              <span className="absolute -right-3 top-10 text-lg">🌹</span>
              <span className="absolute -left-3 top-14 text-sm">💮</span>
              <span className="absolute -right-2 bottom-2 text-sm">✨</span>
              {/* Golden bead string */}
              <div className="absolute inset-x-1 top-0 bottom-2 border-x border-dashed border-[#FFD700]/40"></div>
              {/* Bottom rosette */}
              <span className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 text-2xl drop-shadow-[0_4px_8px_rgba(255,0,0,0.6)] z-10">🏵️</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bride & Groom Names */}
      <motion.div variants={fadeUp} className="w-full py-2 relative">
        <div className="absolute inset-x-6 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent" />
        <div className="absolute inset-x-6 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent" />

        <motion.h2
          className="font-serif text-[1.6rem] sm:text-3xl font-extrabold text-[#FFD700] drop-shadow-lg tracking-wide"
          animate={{ textShadow: ['0 0 0px transparent', '0 0 18px rgba(255,215,0,0.3)', '0 0 0px transparent'] }}
          transition={{ duration: 3, repeat: Infinity }}
        >{bride}</motion.h2>

        <div className="flex items-center justify-center gap-3 my-1">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
          <span className="font-serif italic text-lg text-[#F0E68C] drop-shadow-sm">संग</span>
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
        </div>

        <motion.h2
          className="font-serif text-[1.6rem] sm:text-3xl font-extrabold text-[#FFD700] drop-shadow-lg tracking-wide"
          animate={{ textShadow: ['0 0 0px transparent', '0 0 18px rgba(255,215,0,0.3)', '0 0 0px transparent'] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        >{groom}</motion.h2>
      </motion.div>

      {/* Date, Time, Address Cards */}
      <motion.div variants={fadeUp} className="flex flex-col gap-2 w-full mt-2 z-30">
        <div className="flex justify-center gap-2">
          <div className="flex items-center gap-1.5 bg-gradient-to-br from-[#800000] to-[#4A0E0E] backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#FFD700] shadow-[0_4px_10px_rgba(255,215,0,0.25)]">
            <Calendar size={14} className="text-[#FFD700]" />
            <span className="text-xs font-extrabold text-[#FFD700]">{date}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gradient-to-br from-[#800000] to-[#4A0E0E] backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#FFD700] shadow-[0_4px_10px_rgba(255,215,0,0.25)]">
            <Clock size={14} className="text-[#FFD700]" />
            <span className="text-xs font-extrabold text-[#FFD700]">{time}</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1.5 bg-gradient-to-br from-[#800000] to-[#4A0E0E] backdrop-blur-md px-4 py-1.5 rounded-xl border border-[#FFD700] shadow-[0_4px_10px_rgba(255,215,0,0.25)] mx-auto w-[85%]">
          <MapPin size={14} className="text-[#FFD700] shrink-0" />
          <span className="text-xs font-extrabold text-[#FFD700] text-center leading-tight">{address}</span>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div variants={fadeUp} className="flex flex-col items-center w-full mt-auto pt-3">
        <WeddingGoldenDivider />
        {extraMessage && (
          <p className="text-[10px] sm:text-xs font-semibold tracking-wide text-[#F0E68C]/80 px-4 mt-1 uppercase">
            {extraMessage}
          </p>
        )}
        <div className="flex gap-2 mt-1 text-base">
          <span>🌹</span><span>✨</span><span>🌹</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- PREMIUM VIDAI PAGE COMPONENT ---

const VidaiFallingPetals = () => {
  const petals = useMemo(() => Array.from({ length: 14 }).map((_, i) => ({
    left: `${Math.random() * 90 + 5}%`,
    dur: 6 + Math.random() * 5,
    delay: Math.random() * 4,
    icon: ['🌸', '💕', '🌺', '✨', '💗', '🌷'][i % 6],
    size: ['text-sm', 'text-base', 'text-lg'][i % 3]
  })), []);

  return (
    <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden">
      {petals.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute ${p.size} opacity-40 drop-shadow-sm`}
          style={{ left: p.left, top: '-5%' }}
          animate={{
            y: ['0%', '110vh'],
            x: [-10, 10, -5],
            rotate: [0, 30, -20, 10],
            opacity: [0, 0.5, 0.4, 0]
          }}
          transition={{ duration: p.dur, repeat: Infinity, ease: 'linear', delay: p.delay }}
        >
          {p.icon}
        </motion.div>
      ))}
    </div>
  );
};

const VidaiWarmGlow = () => (
  <div className="absolute inset-0 pointer-events-none z-[3]">
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#FFB6C1] blur-[60px] opacity-20 rounded-full"></div>
    <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#FFD700] blur-[50px] opacity-10 rounded-full"></div>
  </div>
);

const VidaiPinkDivider = () => (
  <div className="flex items-center justify-center gap-2 w-40 mx-auto my-1.5">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C71585]/50 to-[#C71585]/50" />
    <motion.div
      className="w-2 h-2 rotate-45 bg-[#C71585] shadow-[0_0_8px_rgba(199,21,133,0.5)]"
      animate={{ scale: [0.9, 1.15, 0.9] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#C71585]/50 to-[#C71585]/50" />
  </div>
);

const PremiumVidaiContent = ({ data }) => {
  const { title, subtitle, date, time, address, message, extraMessage, theme } = data;

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <>
      <VidaiFallingPetals />
      <VidaiWarmGlow />

      {/* Floral side decorations */}
      <div className="absolute inset-y-0 left-0 right-0 pointer-events-none z-[4] overflow-hidden">
        {[18, 42, 68].map((top, i) => (
          <motion.div
            key={`l-${i}`}
            className="absolute left-1 text-lg opacity-35"
            style={{ top: `${top}%` }}
            animate={{ x: [-2, 3, -2], rotate: [-5, 5, -5] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          >🌸</motion.div>
        ))}
        {[25, 55, 78].map((top, i) => (
          <motion.div
            key={`r-${i}`}
            className="absolute right-1 text-lg opacity-35 scale-x-[-1]"
            style={{ top: `${top}%` }}
            animate={{ x: [2, -3, 2], rotate: [5, -5, 5] }}
            transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          >🌷</motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="z-20 flex-1 flex flex-col items-center justify-center text-center w-full max-w-[340px] mx-auto px-3 py-4 relative"
      >
        {/* Badge */}
        <motion.div variants={fadeUp}>
          <div className="px-4 py-1.5 rounded-full border border-[#FF69B4]/50 text-[#800040] text-[10px] uppercase tracking-[0.25em] font-bold mb-2 bg-white/30 backdrop-blur-sm shadow-sm">
            {data.badgeText}
          </div>
        </motion.div>

        {/* Title */}
        <motion.div variants={fadeUp}>
          <h1 className="font-serif text-[2rem] sm:text-4xl text-[#800040] drop-shadow-md tracking-tight leading-[1.1] mb-1">
            {title}
          </h1>
        </motion.div>

        <motion.div variants={fadeUp}>
          <VidaiPinkDivider />
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={fadeUp} className="mb-2">
          <p className="text-[11px] sm:text-xs italic text-[#8B0A50] max-w-[280px] leading-relaxed font-medium">
            "{subtitle}"
          </p>
        </motion.div>

        {/* Emotional Visual */}
        <motion.div variants={fadeUp} className="flex justify-center items-center my-2 relative w-full h-16">
          <div className="absolute inset-0 bg-pink-400 blur-[30px] opacity-15 rounded-full"></div>
          <div className="z-10 flex items-center gap-3">
            <motion.span className="text-2xl" animate={{ y: [-3, 3, -3], rotate: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity }}>🌸</motion.span>
            <div className="w-14 h-14 bg-gradient-to-br from-[#FFF0F5] to-[#DB7093]/25 rounded-full flex items-center justify-center border-2 border-[#FF69B4]/30 shadow-[0_0_25px_rgba(219,112,147,0.2)]">
              <span className="text-3xl">🕊️</span>
            </div>
            <motion.span className="text-2xl" animate={{ y: [3, -3, 3], rotate: [5, -5, 5] }} transition={{ duration: 3, repeat: Infinity }}>🌸</motion.span>
          </div>
        </motion.div>

        {/* Emotional Message Card */}
        <motion.div variants={fadeUp} className="w-full">
          <div className="bg-white/35 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#FF69B4]/20 shadow-lg">
            <p className="text-[11px] sm:text-xs text-[#800040] leading-relaxed font-medium">
              {message}
            </p>
          </div>
        </motion.div>

        {/* Date, Time, Address */}
        <motion.div variants={fadeUp} className="flex flex-col gap-2 w-full mt-1.5 z-30">
          <div className="flex justify-center gap-2">
            <div className="flex items-center gap-1.5 bg-gradient-to-br from-[#FFE4E1] to-[#FFB6C1] backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#C71585] shadow-[0_4px_10px_rgba(199,21,133,0.2)]">
              <Calendar size={14} className="text-[#8B0A50]" />
              <span className="text-xs font-extrabold text-[#8B0A50]">{date}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gradient-to-br from-[#FFE4E1] to-[#FFB6C1] backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#C71585] shadow-[0_4px_10px_rgba(199,21,133,0.2)]">
              <Clock size={14} className="text-[#8B0A50]" />
              <span className="text-xs font-extrabold text-[#8B0A50]">{time}</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-gradient-to-br from-[#FFE4E1] to-[#FFB6C1] backdrop-blur-md px-4 py-1.5 rounded-xl border border-[#C71585] shadow-[0_4px_10px_rgba(199,21,133,0.2)] mx-auto w-[85%]">
            <MapPin size={14} className="text-[#8B0A50] shrink-0" />
            <span className="text-xs font-extrabold text-[#8B0A50] text-center leading-tight">{address}</span>
          </div>
        </motion.div>

        {/* Supporting Line */}
        <motion.div variants={fadeUp} className="mt-2">
          <p className="text-[10px] sm:text-[11px] italic text-[#8B0A50]/80 px-4 leading-relaxed font-medium">
            {extraMessage}
          </p>
        </motion.div>

        {/* Footer Blessing */}
        <motion.div variants={fadeUp} className="flex flex-col items-center w-full mt-auto pt-3">
          <VidaiPinkDivider />
          <p className="text-[10px] sm:text-xs font-semibold tracking-wide text-[#8B0A50]/70 px-4 mt-1 uppercase leading-relaxed">
            May this new journey be filled with love, peace, prosperity, and endless happiness.
          </p>
          <div className="flex gap-2 mt-1.5 text-base">
            <span>🕊️</span><span>💕</span><span>🕊️</span>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

const PremiumThankYouContent = ({ data }) => {
  const { title, subtitle, message, extraMessage, theme } = data;

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="z-20 flex-1 flex flex-col items-center justify-center text-center w-full max-w-[340px] mx-auto px-4 py-2 relative"
    >
      {/* Title */}
      <motion.div variants={fadeUp}>
        <h1 className={`font-serif text-4xl sm:text-5xl ${theme.textPrimary} drop-shadow-md tracking-tight leading-tight mb-2`}>
          {title}
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.div variants={fadeUp} className="mb-4">
        <p className={`text-sm font-medium italic ${theme.textSecondary} max-w-[280px]`}>
          "{subtitle}"
        </p>
      </motion.div>

      {/* Main Message */}
      <motion.div variants={fadeUp} className="mb-6">
        <p className={`text-sm sm:text-base font-semibold leading-relaxed ${theme.textPrimary} px-2`}>
          {message}
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-col items-center w-full mt-1">
        {/* Venue Location Heading & Text ABOVE QR */}
        <motion.div 
          variants={fadeUp} 
          className="mb-4 px-5 py-3 bg-white/40 backdrop-blur-md rounded-xl border border-[#D4AF37]/20 shadow-md max-w-[280px] text-center"
        >
          <h3 className="text-[#800000] uppercase tracking-[0.2em] text-[11px] font-extrabold mb-1">
            विवाह स्थल की लोकेशन
          </h3>
          <p className={`text-[11px] font-semibold leading-tight ${theme.textPrimary} opacity-90`}>
            विवाह स्थल की सटीक लोकेशन देखने के लिए इस QR कोड को स्कैन करें।
          </p>
        </motion.div>

        {/* Premium QR Card */}
        <div className="relative group">
          {/* Ornate Glow Effect */}
          <div className="absolute -inset-4 bg-[#D4AF37] blur-[25px] opacity-20 rounded-full animate-pulse"></div>
          
          <div className="relative p-4 bg-white/70 backdrop-blur-md rounded-[2rem] border-2 border-[#D4AF37]/30 shadow-[0_15px_35px_rgba(212,175,55,0.25)] flex flex-col items-center">
            {/* Corner Accents */}
            <div className="absolute top-2.5 left-2.5 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl-2xl"></div>
            <div className="absolute top-2.5 right-2.5 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/50 rounded-tr-2xl"></div>
            <div className="absolute bottom-2.5 left-2.5 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/50 rounded-bl-2xl"></div>
            <div className="absolute bottom-2.5 right-2.5 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/50 rounded-br-2xl"></div>

            <div className="bg-white p-2 rounded-xl shadow-inner border border-gray-100">
              <img 
                src="./public/images/QR.png" 
                alt="Location QR Code" 
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-lg"
              />
            </div>
            
            <div className="mt-3 px-2">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#800000] opacity-70">
                विवाह स्थल मानचित्र
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Section */}
      <motion.div variants={fadeUp} className="flex flex-col items-center w-full mt-auto pt-4">
        <Divider color={theme.textAccent} />
        {extraMessage && (
          <p className={`text-[10px] sm:text-xs font-semibold tracking-wide ${theme.textSecondary} px-4 mt-1 uppercase`}>
            {extraMessage}
          </p>
        )}
        <div className="flex gap-2 mt-1 text-base">
          <span>🌸</span><span>✨</span><span>🌸</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- MAIN EVENT PAGE COMPONENT ---


export const EventPage = ({ data }) => {
  const { type, badgeText, title, subtitle, message, extraMessage, date, time, address, bride, groom, theme } = data;

  return (
    <motion.div
      key={data.id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full h-full relative ${theme.bg} flex flex-col p-8 pb-10 overflow-hidden`}
    >
      {/* === Decorative Background Image for Haldi / Mehndi / Wedding === */}
      {(type === 'haldi' || type === 'mehndi' || type === 'wedding') && (() => {
        // Specific background images per ceremony (only Haldi and Mehndi use photo backgrounds)
        const bgImageMap = {
          haldi: '/images/haldi-bg.png',
          mehndi: '/images/mehndi.png',
        };

        // Theme-specific overlay gradients
        const overlayMap = {
          haldi: 'linear-gradient(180deg, rgba(255,215,0,0.22) 0%, rgba(255,165,0,0.25) 40%, rgba(255,140,0,0.18) 100%)',
          mehndi: 'linear-gradient(180deg, rgba(34,139,34,0.18) 0%, rgba(60,179,113,0.22) 40%, rgba(46,139,87,0.16) 100%)',
          wedding: 'linear-gradient(180deg, rgba(139,0,0,0.18) 0%, rgba(178,34,34,0.20) 40%, rgba(212,175,55,0.15) 100%)',
        };

        // Readability gradient per theme
        const readabilityMap = {
          haldi: 'linear-gradient(to bottom, rgba(255,245,225,0.55) 0%, rgba(255,245,225,0.10) 30%, rgba(255,245,225,0.08) 65%, rgba(255,245,225,0.55) 100%)',
          mehndi: 'linear-gradient(to bottom, rgba(240,255,240,0.55) 0%, rgba(240,255,240,0.10) 30%, rgba(240,255,240,0.08) 65%, rgba(240,255,240,0.55) 100%)',
          wedding: 'linear-gradient(to bottom, rgba(74,14,14,0.50) 0%, rgba(74,14,14,0.08) 30%, rgba(74,14,14,0.08) 65%, rgba(74,14,14,0.50) 100%)',
        };

        return (
          <>
            {/* Layer 1: Background image for Haldi/Mehndi only */}
            {(type === 'haldi' || type === 'mehndi') && (
              <div
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                style={{
                  backgroundImage: `url('${bgImageMap[type]}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  opacity: 0.35
                }}
              ></div>
            )}

            {/* Wedding page decorative glow with no photo background */}
            {type === 'wedding' && (
              <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,0,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),transparent_20%)]" />
            )}

            {/* Layer 2: Theme-colored semi-transparent overlay */}
            <div
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{
                background: overlayMap[type],
                mixBlendMode: 'multiply'
              }}
            ></div>
            {/* Layer 3: Soft gradient for text readability */}
            <div
              className="absolute inset-0 pointer-events-none z-[2]"
              style={{
                background: readabilityMap[type]
              }}
            ></div>
          </>
        );
      })()}
      <BackgroundMotif color={theme.textAccent} />
      <FloatingDecorations type={type} color={theme.particleColor} />

      {/* Premium invitation layout */}
      {type === 'invitation' && (
        <>
          <GoldenShimmer />
          <PremiumInvitationContent data={data} />
        </>
      )}

      {/* Premium mehndi layout */}
      {type === 'mehndi' && (
        <PremiumMehndiContent data={data} />
      )}

      {/* Premium wedding layout */}
      {type === 'wedding' && (
        <PremiumWeddingContent data={data} />
      )}

      {/* Premium vidai layout */}
      {type === 'vidai' && (
        <PremiumVidaiContent data={data} />
      )}

      {/* Premium thank you layout */}
      {type === 'thankyou' && (
        <PremiumThankYouContent data={data} />
      )}

      {/* Generic layout for all other page types */}
      {type !== 'invitation' && type !== 'mehndi' && type !== 'wedding' && type !== 'vidai' && type !== 'thankyou' && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="z-20 flex-1 flex flex-col justify-center items-center text-center w-full max-w-[340px] mx-auto pb-8 pt-16"
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
                  <div className={`h-px flex-1 bg-gradient-to-r from-transparent via-current to-transparent ${theme.textAccent}`}></div>
                  <span className={`font-serif italic text-xl ${theme.textSecondary}`}>संग</span>
                  <div className={`h-px flex-1 bg-gradient-to-r from-transparent via-current to-transparent ${theme.textAccent}`}></div>
                </div>
                <h2 className={`font-serif text-3xl font-extrabold ${theme.textPrimary} drop-shadow-lg`}>{groom}</h2>
              </div>
            )}

            {(date || time || address) && (
              <div className={`flex flex-col gap-2 w-full mt-2 z-30`}>
                <div className="flex justify-center items-center gap-2">
                  {date && (
                    <div className={`flex items-center gap-1.5 ${type === 'haldi' ? 'bg-gradient-to-br from-[#FFFACD] to-[#FFD700]/30' : 'bg-gradient-to-br from-[#FFFDF2] to-[#FDF5E6]'} px-3.5 py-1.5 rounded-xl border ${theme.borderColor} shadow-[0_4px_10px_rgba(0,0,0,0.15)] backdrop-blur-md`}>
                      <Calendar size={14} className={theme.textPrimary} />
                      <span className={`text-xs font-extrabold ${theme.textPrimary}`}>{date}</span>
                    </div>
                  )}
                  {time && (
                    <div className={`flex items-center gap-1.5 ${type === 'haldi' ? 'bg-gradient-to-br from-[#FFFACD] to-[#FFD700]/30' : 'bg-gradient-to-br from-[#FFFDF2] to-[#FDF5E6]'} px-3.5 py-1.5 rounded-xl border ${theme.borderColor} shadow-[0_4px_10px_rgba(0,0,0,0.15)] backdrop-blur-md`}>
                      <Clock size={14} className={theme.textPrimary} />
                      <span className={`text-xs font-extrabold ${theme.textPrimary}`}>{time}</span>
                    </div>
                  )}
                </div>

                {address && (
                  <div className={`flex items-center justify-center gap-1.5 mt-1 ${type === 'haldi' ? 'bg-gradient-to-br from-[#FFFACD] to-[#FFD700]/30' : 'bg-gradient-to-br from-[#FFFDF2] to-[#FDF5E6]'} px-4 py-1.5 rounded-xl border ${theme.borderColor} shadow-[0_4px_10px_rgba(0,0,0,0.15)] backdrop-blur-md mx-auto w-[85%]`}>
                    <MapPin size={14} className={`shrink-0 ${theme.textPrimary}`} />
                    <span className={`text-xs font-extrabold text-center leading-tight ${theme.textPrimary}`}>{address}</span>
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
      )}
    </motion.div>
  );
};
