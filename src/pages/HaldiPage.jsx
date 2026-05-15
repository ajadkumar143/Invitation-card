import React from 'react';
import { motion } from 'framer-motion';

const HaldiPage = () => {
  return (
    <div className="w-full h-full relative bg-yellow-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Full-screen Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/haldi-bg.png')", /* Make sure to save the uploaded image as haldi-bg.jpg in public/images/ */
          opacity: 0.18
        }}
      ></div>

      {/* Golden/Yellow Overlay for theme matching and blending */}
      <div className="absolute inset-0 bg-yellow-500/10 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/60 via-transparent to-yellow-50/80 pointer-events-none"></div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="z-10 text-center flex flex-col items-center px-6 mt-16"
      >
        <span className="text-orange-600 uppercase tracking-[0.2em] text-xs font-bold mb-2">स्वर्णिम आभा</span>
        <h1 className="font-serif text-5xl text-orange-600 mb-6 drop-shadow-sm">॥ हल्दी रस्म ॥</h1>

        <div className="bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-yellow-200/50 w-full max-w-[300px] flex flex-col gap-4">
          <div>
            <p className="text-orange-800 font-medium">12/06/2026</p>
            <p className="text-neutral-700 text-sm font-medium">06:30 PM</p>
          </div>

          <div className="w-full h-px bg-yellow-300"></div>

          <div>
            <p className="text-orange-800 font-medium">पता</p>
            <p className="text-neutral-700 text-sm font-medium">धौरहरा, वाराणसी 221104</p>
          </div>

          <div className="mt-2 py-2 px-4 bg-yellow-100/90 rounded-full border border-yellow-300 inline-block shadow-sm">
            <p className="text-xs text-orange-700 font-semibold uppercase">ड्रेस कोड: सनशाइन येलो</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HaldiPage;
