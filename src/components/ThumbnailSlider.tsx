"use client";

import { useEffect, useRef, useState } from "react";

interface ThumbnailSliderProps {
  urls: string[];
  alt: string;
}

const DURATION = 420;
const EASE = "cubic-bezier(0.65,0,0.35,1)";

export function ThumbnailSlider({ urls, alt }: ThumbnailSliderProps) {
  const [cur, setCur]   = useState(0);
  const [anim, setAnim] = useState<{ to: number; dir: "left" | "right" } | null>(null);
  const busy = useRef(false);

  useEffect(() => {
    if (!anim) return;
    const timer = setTimeout(() => {
      setCur(anim.to);
      setAnim(null);
      busy.current = false;
    }, DURATION + 20);
    return () => clearTimeout(timer);
  }, [anim]);

  if (urls.length === 0) {
    return <div className="aspect-[16/9] bg-white/5" />;
  }

  const go = (dir: "left" | "right") => {
    if (busy.current || urls.length < 2) return;
    const to =
      dir === "right"
        ? (cur + 1) % urls.length
        : (cur - 1 + urls.length) % urls.length;
    busy.current = true;
    setAnim({ to, dir });
  };

  return (
    <div className="group/slider relative aspect-[16/9] overflow-hidden">
      <div className="absolute inset-0 z-[1] bg-black/40 pointer-events-none" />
      {/* 현재 이미지 — 제자리 유지, 진입 이미지가 위로 슬라이드 */}
      <img
        src={urls[cur]}
        alt={`${alt} ${cur + 1}`}
        width={640}
        height={360}
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* 진입 이미지 — key 변경으로 매번 리마운트, CSS @keyframes 애니메이션 */}
      {anim && (
        <img
          key={anim.to}
          src={urls[anim.to]}
          alt={`${alt} ${anim.to + 1}`}
          width={640}
          height={360}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            animation: `${anim.dir === "right" ? "tsl-enter-right" : "tsl-enter-left"} ${DURATION}ms ${EASE} both`,
          }}
        />
      )}

      {urls.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); go("left"); }}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center text-white opacity-0 transition group-hover/slider:opacity-100"
            aria-label="이전 썸네일"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => { e.preventDefault(); go("right"); }}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center text-white opacity-0 transition group-hover/slider:opacity-100"
            aria-label="다음 썸네일"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1">
            {urls.map((_, i) => (
              <span
                key={i}
                className={`block h-1 rounded-full transition-all duration-300 ${
                  i === (anim?.to ?? cur) ? "w-4 bg-white" : "w-1 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
