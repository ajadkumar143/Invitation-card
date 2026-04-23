import React from 'react';

const MobileFrame = ({ children }) => {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-[2.5rem] h-[800px] w-[380px] shadow-2xl overflow-hidden flex flex-col sm:w-[800px] sm:flex-row transition-all duration-500 ease-in-out">
      {/* Mobile Notch (only visible on small screens to simulate standard phone) */}
      <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-3xl w-40 mx-auto z-50 sm:hidden"></div>
      
      {/* Dual Screen Notch/Hinge (visible on larger screens to simulate foldable) */}
      <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-4 bg-gray-900 z-50 shadow-inner">
        <div className="w-full h-full bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
      </div>

      <div className="flex-1 w-full h-full bg-white relative overflow-hidden flex sm:flex-row flex-col">
        {children}
      </div>
    </div>
  );
};

export default MobileFrame;
