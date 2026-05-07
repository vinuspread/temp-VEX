"use client";

import { useState } from "react";

interface ThumbnailSliderProps {
  urls: string[];
  alt: string;
}

export function ThumbnailSlider({ urls, alt }: ThumbnailSliderProps) {
  const [index, setIndex] = useState(0);

  if (urls.length === 0) {
    return <div className="aspect-[16/9] bg-white/5" />;
  }

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((i) => (i - 1 + urls.length) % urls.length);
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((i) => (i + 1) % urls.length);
  };

  return (
    <div className="group/slider relative aspect-[16/9] overflow-hidden">
      <img
        src={urls[index]}
        alt={`${alt} ${index + 1}`}
        className="h-full w-full object-cover transition-opacity duration-300"
      />

      {urls.length > 1 && (
        <>
          {/* Prev */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center text-white opacity-0 transition group-hover/slider:opacity-100"
            aria-label="이전 썸네일"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center text-white opacity-0 transition group-hover/slider:opacity-100"
            aria-label="다음 썸네일"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
            {urls.map((_, i) => (
              <span
                key={i}
                className={`block h-1 rounded-full transition-all duration-300 ${i === index ? "w-4 bg-white" : "w-1 bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
