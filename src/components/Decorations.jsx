import React from 'react';
import { motion } from 'framer-motion';

// Complex background mandala/motif
export const BackgroundMotif = ({ color }) => (
  <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-0 overflow-hidden">
    <svg width="400" height="400" viewBox="0 0 100 100" className={`animate-spin-slow ${color}`}>
      <path fill="currentColor" d="M50 0 C55 20, 80 45, 100 50 C80 55, 55 80, 50 100 C45 80, 20 55, 0 50 C20 45, 45 20, 50 0 Z" />
      <path fill="currentColor" d="M20 20 C35 30, 65 30, 80 20 C70 35, 70 65, 80 80 C65 70, 35 70, 20 80 C30 65, 30 35, 20 20 Z" opacity="0.5"/>
    </svg>
  </div>
);

// Animated floating particles and petals
export const FloatingDecorations = ({ type, color }) => {
  const elements = Array.from({ length: 20 });

  const getShape = () => {
    switch(type) {
      case 'haldi': return 'rounded-full scale-y-125 scale-x-75'; // marigold petal
      case 'mehndi': return 'rounded-tl-full rounded-br-full border border-green-800/30'; // leaf
      case 'wedding': return 'rounded-full shadow-[0_0_12px_currentColor]'; // golden particle
      case 'vidai': return 'rounded-t-full rounded-bl-full rotate-45'; // rose petal
      default: return 'rounded-full shadow-sm blur-[1px]'; // generic sparkle
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((_, i) => {
        const size = Math.random() * 14 + 6;
        const initialX = Math.random() * 100;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * -20; // negative delay so they start already on screen

        return (
          <motion.div
            key={i}
            className={`absolute ${color} ${getShape()} opacity-50`}
            style={{ width: size, height: size, left: `${initialX}%`, top: '-10%' }}
            animate={{
              y: ['0vh', '110vh'],
              x: [`${initialX}%`, `${initialX + (Math.random() * 30 - 15)}%`],
              rotate: [0, 360, 180],
            }}
            transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
          />
        );
      })}
    </div>
  );
};

// Rich Jhalar (Hanging Decor)
export const Jhalar = ({ borderColor }) => {
  const drops = Array.from({ length: 9 });
  return (
    <div className="absolute top-0 w-full flex justify-between px-6 pointer-events-none z-10">
      {drops.map((_, i) => (
        <motion.div
          key={i}
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 4 + (i % 4), repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="flex flex-col items-center"
        >
          <div className={`w-0.5 h-${i % 2 === 0 ? '16' : '24'} ${borderColor} opacity-60 bg-current`}></div>
          <div className={`w-4 h-4 rotate-45 ${borderColor} bg-current border-2 shadow-lg mt-1`}></div>
          <div className={`w-2 h-2 rounded-full ${borderColor} bg-current mt-1 opacity-80`}></div>
        </motion.div>
      ))}
    </div>
  );
};

// Ornate animated border with rich corner SVGs
export const AnimatedBorder = ({ borderColor }) => (
  <div className="absolute inset-4 sm:inset-6 pointer-events-none z-10 flex flex-col justify-between">
    <div className={`absolute inset-0 border-2 ${borderColor} opacity-40 rounded-xl`}></div>
    <div className={`absolute inset-1 border border-dashed ${borderColor} opacity-30 rounded-lg`}></div>
    
    {/* Top Left */}
    <div className={`absolute -top-1 -left-1 w-12 h-12 text-current ${borderColor} flex items-start justify-start opacity-80`}>
       <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
         <path d="M0,50 Q50,50 50,0" />
         <circle cx="20" cy="20" r="5" fill="currentColor"/>
       </svg>
    </div>
    {/* Top Right */}
    <div className={`absolute -top-1 -right-1 w-12 h-12 text-current ${borderColor} flex items-start justify-end opacity-80`}>
       <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" className="rotate-90">
         <path d="M0,50 Q50,50 50,0" />
         <circle cx="20" cy="20" r="5" fill="currentColor"/>
       </svg>
    </div>
    {/* Bottom Left */}
    <div className={`absolute -bottom-1 -left-1 w-12 h-12 text-current ${borderColor} flex items-end justify-start opacity-80`}>
       <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" className="-rotate-90">
         <path d="M0,50 Q50,50 50,0" />
         <circle cx="20" cy="20" r="5" fill="currentColor"/>
       </svg>
    </div>
    {/* Bottom Right */}
    <div className={`absolute -bottom-1 -right-1 w-12 h-12 text-current ${borderColor} flex items-end justify-end opacity-80`}>
       <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" className="rotate-180">
         <path d="M0,50 Q50,50 50,0" />
         <circle cx="20" cy="20" r="5" fill="currentColor"/>
       </svg>
    </div>
  </div>
);

// Elegant Section Divider
export const Divider = ({ color }) => (
  <div className={`flex items-center justify-center w-full my-6 opacity-70 ${color}`}>
    <div className="flex-1 h-px bg-current"></div>
    <span className="mx-4 text-xl">❁</span>
    <div className="flex-1 h-px bg-current"></div>
  </div>
);

// Floral Arch for the Wedding Page
export const FloralArch = ({ color }) => (
  <div className={`absolute top-0 w-full flex justify-center opacity-40 pointer-events-none z-0 ${color}`}>
    <svg width="300" height="150" viewBox="0 0 300 150" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M0,150 Q150,0 300,150" />
      <path d="M20,150 Q150,20 280,150" strokeDasharray="5,5" />
      <circle cx="150" cy="75" r="10" fill="currentColor"/>
    </svg>
  </div>
);
