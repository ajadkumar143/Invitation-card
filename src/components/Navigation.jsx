import React from 'react';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';

const Navigation = ({ currentPage, totalPages, onNext, onPrev, setPage }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-center gap-4 z-50">
      {/* Page Indicators */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPage(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentPage ? 'w-6 bg-crimson-700' : 'w-2 bg-crimson-700/30'
            }`}
            aria-label={`Go to page ${idx + 1}`}
          />
        ))}
      </div>

      {/* Control Bar */}
      <div className="flex items-center justify-between w-full max-w-xs bg-white/80 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50">
        <button
          onClick={onPrev}
          disabled={currentPage === 0}
          className="p-2 rounded-full hover:bg-crimson-50 text-crimson-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft size={24} />
        </button>

        <button className="p-2 rounded-full hover:bg-crimson-50 text-crimson-800 transition-colors">
          <Menu size={24} />
        </button>

        <button
          onClick={onNext}
          disabled={currentPage === totalPages - 1}
          className="p-2 rounded-full hover:bg-crimson-50 text-crimson-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          aria-label="Next page"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
