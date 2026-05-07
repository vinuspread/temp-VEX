'use client';

import React from 'react';
import { useReview } from './ReviewProvider';
import { MousePointer2, Settings2 } from 'lucide-react';

export const ReviewToggle: React.FC = () => {
  const { isReviewMode, setReviewMode } = useReview();

  return (
    <button 
      onClick={() => setReviewMode(!isReviewMode)}
      className={`fixed bottom-6 right-6 z-[100000] p-4 rounded-2xl shadow-2xl border transition-all duration-300 flex items-center gap-3 active:scale-95 ${
        isReviewMode 
          ? 'bg-pink-500 text-white border-pink-400' 
          : 'bg-white/90 text-black border-white backdrop-blur-md hover:shadow-pink-500/20'
      }`}
    >
      <div className={`p-2 rounded-lg ${isReviewMode ? 'bg-white/20' : 'bg-gray-100'}`}>
        <MousePointer2 size={20} />
      </div>
      <span className="font-bold text-sm">
        {isReviewMode ? 'Close Review' : 'Review Mode'}
      </span>
      <Settings2 size={16} className={isReviewMode ? 'animate-spin-slow' : ''} />
    </button>
  );
};
