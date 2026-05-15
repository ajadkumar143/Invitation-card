import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { invitationData } from './data/invitationData';
import { EventPage } from './components/EventPage';

// --- PREMIUM INNER BORDER DECORATIONS ---

const InnerFlowerCorners = ({ theme }) => {
  const getFlowers = () => {
    switch (theme.type) {
      case 'haldi': return ['🌼', '💛', '✨'];
      case 'mehndi': return ['🌿', '💚', '✨'];
      case 'wedding': return ['🌹', '❤️', '✨'];
      case 'vidai': return ['🌸', '💕', '✨'];
      default: return ['💮', '🤍', '✨'];
    }
  };
  const [main, sub, sparkle] = getFlowers();

  const CornerBunch = ({ position }) => (
    <motion.div
      className={`absolute ${position} flex items-center justify-center w-12 h-12 z-40 filter contrast-125 drop-shadow-lg`}
      animate={{ scale: [1, 1.08, 1], rotate: [-2, 2, -2] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="text-4xl absolute z-10">{main}</span>
      <span className="text-xl absolute -top-2 -right-2 z-0">{sub}</span>
      <span className="text-lg absolute -bottom-1 -left-1 z-20 animate-pulse">{sparkle}</span>
    </motion.div>
  );

  return (
    <>
      <CornerBunch position="-top-4 -left-4" />
      <CornerBunch position="-top-4 -right-4" />
      <CornerBunch position="-bottom-4 -left-4" />
      <CornerBunch position="-bottom-4 -right-4" />
    </>
  );
};

const InnerHangingGarland = ({ theme }) => {
  const getMala = () => {
    switch (theme.type) {
      case 'haldi': return ['🌼💛🌼', '💛🌼💛'];
      case 'mehndi': return ['🌿💚🌿', '💚🌿💚'];
      case 'wedding': return ['🌹✨🌹', '✨🌹✨'];
      case 'vidai': return ['🌸💖🌸', '💖🌸💖'];
      default: return ['💮🤍💮', '🤍💮🤍'];
    }
  };
  const mala = getMala();

  return (
    <div className="absolute top-0 left-8 right-8 flex justify-between z-30 pointer-events-none">
      <motion.div animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ originY: 0 }} className="flex flex-col items-center">
        <div className="text-2xl drop-shadow-md filter contrast-125 tracking-widest">{mala[0]}</div>
        <div className="w-0.5 h-6 bg-[#D4AF37]/40 mt-1"></div>
        <div className="w-2 h-2 rotate-45 bg-[#D4AF37] shadow-[0_0_5px_#D4AF37]"></div>
      </motion.div>
      <motion.div animate={{ rotate: [2, -2, 2] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} style={{ originY: 0 }} className="flex flex-col items-center">
        <div className="text-2xl drop-shadow-md filter contrast-125 tracking-widest">{mala[1]}</div>
        <div className="w-0.5 h-6 bg-[#D4AF37]/40 mt-1"></div>
        <div className="w-2 h-2 rotate-45 bg-[#D4AF37] shadow-[0_0_5px_#D4AF37]"></div>
      </motion.div>
    </div>
  );
};

const InnerBorderLights = () => {
  const lights = Array.from({ length: 32 });
  return (
    <div className="absolute inset-0 z-30 pointer-events-none">
      {lights.map((_, i) => {
        const sideLength = 8;
        const isTop = i < sideLength;
        const isBottom = i >= sideLength && i < sideLength * 2;
        const isLeft = i >= sideLength * 2 && i < sideLength * 3;
        const isRight = i >= sideLength * 3;

        return (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#FFF5E1] shadow-[0_0_12px_#FFD700]"
            style={{
              top: isTop ? '-3px' : isBottom ? 'auto' : `${(i % sideLength) * 14}%`,
              bottom: isBottom ? '-3px' : 'auto',
              left: isTop || isBottom ? `${(i % sideLength) * 14}%` : isLeft ? '-3px' : 'auto',
              right: isRight ? '-3px' : 'auto'
            }}
            animate={{ opacity: [0.1, 1, 0.1], scale: [0.7, 1.3, 0.7] }}
            transition={{ duration: Math.random() * 2 + 1.5, repeat: Infinity, delay: Math.random() * 2 }}
          />
        );
      })}
    </div>
  );
};

const InnerStarStrings = () => {
  const strings = [220, 150, 150, 220];
  return (
    <div className="absolute top-0 bottom-0 left-4 right-4 flex justify-between z-20 pointer-events-none">
      <div className="flex gap-6">
        {strings.slice(0, 2).map((h, i) => (
          <motion.div key={`l-${i}`} animate={{ y: [-4, 4, -4] }} transition={{ duration: 4.5 + i, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center">
            <div className="w-px bg-gradient-to-b from-[#D4AF37]/80 via-white/50 to-transparent" style={{ height: `${h}px` }}></div>
            <div className="w-2.5 h-2.5 rotate-45 bg-[#FFF8DC] shadow-[0_0_10px_#FFD700] -mt-1"></div>
          </motion.div>
        ))}
      </div>
      <div className="flex gap-6">
        {strings.slice(2, 4).map((h, i) => (
          <motion.div key={`r-${i}`} animate={{ y: [-4, 4, -4] }} transition={{ duration: 5.5 + i, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center">
            <div className="w-px bg-gradient-to-b from-[#D4AF37]/80 via-white/50 to-transparent" style={{ height: `${h}px` }}></div>
            <div className="w-2.5 h-2.5 rotate-45 bg-[#FFF8DC] shadow-[0_0_10px_#FFD700] -mt-1"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const FloatingHearts = ({ theme }) => {
  const elements = Array.from({ length: 10 });
  const getIcon = () => {
    switch (theme.type) {
      case 'wedding': return ['❤️', '✨'];
      case 'vidai': return ['💕', '🌸'];
      case 'haldi': return ['🧡', '🌼'];
      case 'mehndi': return ['💚', '🌿'];
      default: return ['✨', '🤍'];
    }
  };
  const icons = getIcon();

  return (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
      {elements.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-xl drop-shadow-md opacity-70"
          style={{ left: `${Math.random() * 85 + 5}%`, top: `${Math.random() * 85 + 5}%` }}
          animate={{
            y: [-20, 20, -20],
            x: [-8, 8, -8],
            opacity: [0.1, 0.7, 0.1],
            scale: [0.7, 1.2, 0.7],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 5 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 3 }}
        >
          {i % 2 === 0 ? icons[0] : icons[1]}
        </motion.div>
      ))}
    </div>
  );
};

const OrnateSideBorders = () => {
  const motifs = Array.from({ length: 12 });

  return (
    <div className="absolute inset-y-10 -left-2 -right-2 flex justify-between z-20 pointer-events-none">

      {/* Left Ornate Border */}
      <div className="w-8 h-full flex flex-col items-center justify-between py-2 relative">
        <div className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37]/80 to-transparent shadow-[0_0_8px_#FFD700]"></div>

        {motifs.map((_, i) => (
          <div key={`l-${i}`} className="relative flex items-center justify-center w-full group">
            <div className="absolute w-4 h-4 border-2 border-[#D4AF37]/60 rotate-45"></div>
            <motion.div
              className="w-2 h-2 bg-[#FFD700] rotate-45 shadow-[0_0_8px_#FFD700]"
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
            />
            <div className="absolute -right-3 w-1 h-1 bg-[#FFF8DC] rounded-full shadow-[0_0_5px_white]"></div>
            <div className="absolute -left-3 w-1 h-1 bg-[#FFF8DC] rounded-full shadow-[0_0_5px_white]"></div>
          </div>
        ))}

        {/* Top/Bottom accents */}
        <div className="absolute -top-4 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-full"></div>
        <div className="absolute -bottom-4 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] rounded-bl-full"></div>
      </div>

      {/* Right Ornate Border */}
      <div className="w-8 h-full flex flex-col items-center justify-between py-2 relative">
        <div className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37]/80 to-transparent shadow-[0_0_8px_#FFD700]"></div>

        {motifs.map((_, i) => (
          <div key={`r-${i}`} className="relative flex items-center justify-center w-full group">
            <div className="absolute w-4 h-4 border-2 border-[#D4AF37]/60 rotate-45"></div>
            <motion.div
              className="w-2 h-2 bg-[#FFD700] rotate-45 shadow-[0_0_8px_#FFD700]"
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
            />
            <div className="absolute -left-3 w-1 h-1 bg-[#FFF8DC] rounded-full shadow-[0_0_5px_white]"></div>
            <div className="absolute -right-3 w-1 h-1 bg-[#FFF8DC] rounded-full shadow-[0_0_5px_white]"></div>
          </div>
        ))}

        <div className="absolute -top-4 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-full"></div>
        <div className="absolute -bottom-4 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] rounded-br-full"></div>
      </div>

    </div>
  );
};

const InnerBorderDecorations = ({ theme }) => {
  return (
    <div className="absolute inset-4 sm:inset-6 pointer-events-none z-50">
      {/* Enhanced Outer Border */}
      <div className="absolute inset-0 border-[3px] border-[#D4AF37]/70 rounded-3xl shadow-[inset_0_0_40px_rgba(212,175,55,0.3),0_0_20px_rgba(212,175,55,0.3)]"></div>

      {/* Intricate Inner Border */}
      <div className="absolute inset-2 border-2 border-double border-[#D4AF37]/60 rounded-2xl"></div>
      <div className="absolute inset-3 border border-dashed border-[#D4AF37]/30 rounded-xl"></div>

      {/* Grand Corner Pieces */}
      <div className="absolute -top-2 -left-2 w-14 h-14 border-t-4 border-l-4 border-[#D4AF37] rounded-tl-3xl shadow-lg">
        <div className="absolute top-1 left-1 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl-2xl"></div>
      </div>
      <div className="absolute -top-2 -right-2 w-14 h-14 border-t-4 border-r-4 border-[#D4AF37] rounded-tr-3xl shadow-lg">
        <div className="absolute top-1 right-1 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/60 rounded-tr-2xl"></div>
      </div>
      <div className="absolute -bottom-2 -left-2 w-14 h-14 border-b-4 border-l-4 border-[#D4AF37] rounded-bl-3xl shadow-lg">
        <div className="absolute bottom-1 left-1 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/60 rounded-bl-2xl"></div>
      </div>
      <div className="absolute -bottom-2 -right-2 w-14 h-14 border-b-4 border-r-4 border-[#D4AF37] rounded-br-3xl shadow-lg">
        <div className="absolute bottom-1 right-1 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br-2xl"></div>
      </div>

      <OrnateSideBorders />
      <InnerFlowerCorners theme={theme} />
      <InnerHangingGarland theme={theme} />
      <InnerBorderLights />
      <InnerStarStrings />
      <FloatingHearts theme={theme} />
    </div>
  );
};

const AnimatedMobileFrame = ({ children, currentTheme }) => (
  <div className="relative mx-auto h-[100dvh] w-full sm:h-[750px] sm:w-[420px] flex items-center justify-center transition-all duration-700">
    <div className={`absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent blur-3xl opacity-30 pointer-events-none transition-colors duration-1000`}></div>

    <div className="relative h-full w-full border-gray-900 bg-black sm:border-[16px] rounded-none sm:rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-20">
      <div className="absolute top-0 inset-x-0 h-7 bg-gray-950 rounded-b-3xl w-36 mx-auto z-[60] hidden sm:block border-b border-[#D4AF37]/30 shadow-inner"></div>

      <div className="flex-1 w-full h-full relative overflow-hidden flex flex-col">
        {children}
        <InnerBorderDecorations theme={currentTheme} />
      </div>
    </div>
  </div>
);

const PageIndicator = ({ currentPage, totalPages }) => (
  <div className="absolute top-10 w-full flex justify-center gap-2 z-[60]">
    {Array.from({ length: totalPages }).map((_, idx) => (
      <div
        key={idx}
        className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentPage ? 'w-10 bg-white shadow-[0_0_15px_white]' : 'w-2 bg-white/40'
          }`}
      />
    ))}
  </div>
);

const PageNavigation = ({ onPrev, onNext }) => (
  <div className="absolute bottom-12 w-full px-12 flex justify-between items-center z-[60] pointer-events-none">
    <button
      onClick={onPrev}
      className="pointer-events-auto p-3 rounded-full bg-black/30 backdrop-blur-md border border-white/40 text-white shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:bg-black/50 transition-all duration-300 transform active:scale-95"
    >
      <ChevronLeft size={24} />
    </button>

    <div className="pointer-events-auto px-6 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/40 text-white/90 text-xs tracking-[0.25em] font-bold uppercase shadow-[0_0_20px_rgba(255,255,255,0.4)]">
      ऑटो
    </div>

    <button
      onClick={onNext}
      className="pointer-events-auto p-3 rounded-full bg-black/30 backdrop-blur-md border border-white/40 text-white shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:bg-black/50 transition-all duration-300 transform active:scale-95"
    >
      <ChevronRight size={24} />
    </button>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [interactionKey, setInteractionKey] = useState(0);

  const handleNext = () => {
    setCurrentPage((p) => (p + 1) % invitationData.length);
    setInteractionKey((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentPage((p) => (p - 1 + invitationData.length) % invitationData.length);
    setInteractionKey((prev) => prev + 1);
  };

  // Auto-play interval: auto change page every 5 seconds (5000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((p) => (p + 1) % invitationData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [interactionKey]);

  let touchStartX = 0;
  const handleTouchStart = (e) => touchStartX = e.touches[0].clientX;
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) handleNext();
    if (touchStartX - touchEndX < -50) handlePrev();
  };

  const currentTheme = invitationData[currentPage].theme;
  currentTheme.type = invitationData[currentPage].type;

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center sm:p-10 overflow-hidden relative">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37] rounded-full blur-[180px] opacity-15 animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#FF4500] rounded-full blur-[180px] opacity-10 animate-pulse delay-1000"></div>

      <AnimatedMobileFrame currentTheme={currentTheme}>
        <div
          className="w-full h-full relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <PageIndicator currentPage={currentPage} totalPages={invitationData.length} />

          <AnimatePresence mode="wait">
            <EventPage key={currentPage} data={invitationData[currentPage]} />
          </AnimatePresence>
        </div>
      </AnimatedMobileFrame>
    </div>
  );
}
