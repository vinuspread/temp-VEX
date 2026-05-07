"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Ticket, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import ReservationDrawer from "@exhib/components/common/ReservationDrawer";
import TotalMenu from "./TotalMenu";

// 밝은(흰색) 배경을 가진 페이지 경로 목록
const LIGHT_BG_ROUTES = [
  "/exhibition/our-story",
  "/exhibition/souvenir",
  "/exhibition/sacred-vatican",
];

export default function Header() {
  const pathname = usePathname();
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // 현재 페이지가 밝은 배경인지 판단
  const isLightPage = LIGHT_BG_ROUTES.some((route) => pathname.startsWith(route));

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 50);
    setHidden(latest > previous && latest > 150);
  });

  // 스크롤 전 + 메뉴 닫힘 상태: 페이지 배경에 따라 컬러 결정
  // 스크롤 후 또는 메뉴 열림: 항상 어두운 배경 + 흰 텍스트
  const isActive = scrolled || isMenuOpen;

  // 밝은 페이지에서 스크롤 전 → 어두운 텍스트. 나머지 → 흰 텍스트
  const textColor = isActive
    ? "text-white"
    : isLightPage
    ? "text-[#0F0F0F]"
    : "text-white";

  const bgStyle = isActive
    ? "bg-[#0F0F0FB2] backdrop-blur-xl"
    : isLightPage
    ? "bg-transparent"
    : "bg-transparent";

  // 로고와 버튼도 동일하게 컬러 적용
  const logoColor = isActive
    ? "text-white"
    : isLightPage
    ? "text-[#0F0F0F]"
    : "text-white";

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 w-full z-50 px-6 py-8 flex items-center justify-between transition-all duration-500 ${bgStyle} ${textColor}`}
      >
        {/* 좌측: Special Exhibition / Collections */}
        <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-bold hidden md:flex w-1/3">
          <Link
            href="/exhibition/exhibitions"
            className="hover:opacity-50 transition-opacity underline-offset-8 hover:underline"
          >
            Special Exhibition
          </Link>
          <Link
            href="/exhibition/collections"
            className="hover:opacity-50 transition-opacity underline-offset-8 hover:underline"
          >
            Collections
          </Link>
        </div>

        {/* 중앙: 로고 */}
        <Link
          href="/exhibition"
          className={`text-2xl md:text-3xl font-serif font-bold tracking-widest absolute left-1/2 -translate-x-1/2 cursor-pointer uppercase drop-shadow-sm transition-colors duration-500 ${logoColor}`}
        >
          vinuspread
        </Link>

        {/* 우측: Tickets / Souvenir Shop / 메뉴 버튼 */}
        <div className="flex items-center justify-end gap-8 text-[10px] uppercase tracking-[0.3em] font-bold w-1/3">
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setIsReservationOpen(true)}
              className="hover:opacity-50 transition-opacity underline-offset-8 hover:underline"
            >
              TICKETS
            </button>
            <Link
              href="/exhibition/souvenir"
              className="hover:opacity-50 transition-opacity underline-offset-8 hover:underline"
            >
              SOUVENIR SHOP
            </Link>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:opacity-50 transition-opacity"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* 전체메뉴 오버레이 */}
      <TotalMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* 플로팅 예약 버튼 */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsReservationOpen(true)}
        className="fixed bottom-8 right-8 z-[90] w-16 h-16 rounded-full bg-[#0F0F0F] text-[#F9F6F0] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform"
      >
        <Ticket size={24} />
      </motion.button>

      <ReservationDrawer
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </>
  );
}





