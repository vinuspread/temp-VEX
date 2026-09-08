"use client";
import React from "react";
import { useParams } from "next/navigation";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

const PRODUCTS_KO = [
  { id: 1, name: "다이아몬드 솔리테어 반지", price: "₩4,250,000", img: "/templates/OHMT002-jewelry/jewelry-ring.png", category: "engagement" },
  { id: 2, name: "로즈 골드 인피니티 밴드", price: "₩3,400,000", img: "/templates/OHMT002-jewelry/infinity-band.png", category: "engagement" },
  { id: 3, name: "에메랄드 컷 헤일로 반지", price: "₩6,800,000", img: "/templates/OHMT002-jewelry/emerald-cut-ring.png", category: "engagement" },
  { id: 4, name: "남양 진주 펜던트", price: "₩1,850,000", img: "/templates/OHMT002-jewelry/jewelry-pendant.png", category: "collections" },
  { id: 5, name: "클래식 테니스 다이아몬드 목걸이", price: "₩15,500,000", img: "/templates/OHMT002-jewelry/tennis-necklace.png", category: "high-jewelry" },
  { id: 6, name: "아쿠아 블루 사파이어 뱅글", price: "₩12,200,000", img: "/templates/OHMT002-jewelry/bangle-item.png", category: "high-jewelry" },
  { id: 7, name: "골드 링크 체인 팔찌", price: "₩2,950,000", img: "/templates/OHMT002-jewelry/gold-link-bracelet.png", category: "high-jewelry" },
  { id: 8, name: "다이아몬드 스터드 귀걸이", price: "₩1,250,000", img: "/templates/OHMT002-jewelry/diamond-studs.png", category: "collections" },
  { id: 9, name: "아코야 진주 드롭 귀걸이", price: "₩980,000", img: "/templates/OHMT002-jewelry/pearl-drop-earrings.png", category: "collections" },
  { id: 10, name: "에메랄드 샹들리에 귀걸이", price: "₩18,900,000", img: "/templates/OHMT002-jewelry/emerald-chandelier.png", category: "high-jewelry" },
];

const CATEGORY_ASSETS_KO: Record<string, { bg: string; eyebrow: string }> = {
  collections: { bg: "/templates/OHMT002-jewelry/category-atelier.png", eyebrow: "컬렉션" },
  engagement: { bg: "/templates/OHMT002-jewelry/category-engagement.png", eyebrow: "약혼·웨딩" },
  "high-jewelry": { bg: "/templates/OHMT002-jewelry/category-high-jewelry.png", eyebrow: "하이 주얼리" },
  about: { bg: "/templates/OHMT002-jewelry/jewelry-craft.png", eyebrow: "브랜드 이야기" },
};

function CategoryContent() {
  const params = useParams();
  const categoryId = String(params?.id || "collections");

  const assetKo = CATEGORY_ASSETS_KO[categoryId] || CATEGORY_ASSETS_KO.collections;

  const filteredProducts = PRODUCTS_KO.filter(p => {
    if (categoryId === "collections") return true;
    return p.category === categoryId;
  });

  const getCategoryTitle = () => {
    switch (categoryId) {
      case "collections": return "ALL COLLECTIONS";
      case "engagement": return "ENGAGEMENT & WEDDING";
      case "high-jewelry": return "HIGH JEWELRY";
      case "about": return "BRAND STORY";
      default: return "FINE JEWELRY";
    }
  };

  const getCategoryDesc = () => {
    switch (categoryId) {
      case "collections": return "매일 편하게 착용하면서도 오래 간직할 수 있는 주얼리를 모았습니다.";
      case "engagement": return "소중한 약속을 오래 기억할 수 있도록 원석과 세팅을 세심하게 고른 웨딩 링 컬렉션입니다.";
      case "high-jewelry": return "희소한 원석과 정교한 세공으로 완성한 특별한 하이 주얼리 컬렉션입니다.";
      case "about": return "브랜드가 시작된 순간부터 지금까지 이어온 제작 방식과 기준을 소개합니다.";
      default: return "AVELINE가 제안하는 파인 주얼리의 섬세한 광채를 만나보세요.";
    }
  };

  return (
    <TemplateWrapper theme={theme}>
      <main className="min-h-screen bg-[var(--color-bg)] selection:bg-[var(--color-primary)] selection:text-white font-sans text-neutral-900">
        <Navbar />

        {/* Category Header - h-[40vh] */}
        <section className="relative h-[40vh] min-h-[320px] overflow-hidden flex items-center justify-center">
          <img
            src={assetKo.bg}
            alt={getCategoryTitle()}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.65] contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/45" />
          <div className="relative z-10 text-center px-6">
            <span className="text-xs text-white/80 mb-3 block tracking-[-0.03em] font-bold uppercase">
              {assetKo.eyebrow}
            </span>
            <h1 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h1)] font-bold text-white leading-[var(--leading-heading)] tracking-[0em]">
              {getCategoryTitle()}
            </h1>
            <p className="text-sm text-white/70 max-w-xl mx-auto mt-4 leading-relaxed break-keep tracking-[-0.025em]">
              {getCategoryDesc()}
            </p>
          </div>
        </section>

        {categoryId === "about" ? (
          /* About Page Content - split into multiple full-width sections for alternating backgrounds */
          <>
            {/* Story Grid Section */}
            <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
              <div className="max-w-[1440px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                  <div className="aspect-[4/5] overflow-hidden bg-white border border-neutral-100 shadow-sm">
                    <img src="/templates/OHMT002-jewelry/jewelry-visual-detail.png" alt="Craftsmanship" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-6">
                    <span className="text-xs uppercase tracking-[-0.03em] text-neutral-500 font-bold">세공 이야기</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-neutral-900 leading-[var(--leading-heading)] tracking-[-0.04em]">원석의 빛을 살리는 섬세한 세공</h2>
                    <p className="text-sm text-neutral-600 leading-relaxed break-keep tracking-[-0.025em]">
                      AVELINE는 원석이 지닌 색과 투명도, 형태를 먼저 살핀 뒤 그에 맞는 디자인과 세팅을 정합니다. 숙련된 세공사가 원석 하나하나를 직접 다듬고 고정하며, 표면과 가장자리를 여러 차례 확인해 착용감까지 편안하게 완성합니다.
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed break-keep tracking-[-0.025em]">
                      빠르게 바뀌는 유행보다 오래 착용할 수 있는 균형과 완성도를 중요하게 생각합니다. 시간이 지나도 자연스럽게 손이 가고, 소중한 사람에게 이어줄 수 있는 주얼리를 만듭니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Three Pillars Section */}
            <section className="py-20 md:py-28 px-6 md:px-12 bg-[#FAF9F6] border-y border-neutral-200/50">
              <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-16">
                  <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-bold">브랜드 원칙</span>
                  <h3 className="text-2xl md:text-4xl font-serif font-bold text-neutral-900 mt-2 tracking-[-0.03em]">AVELINE가 지키는 세 가지 기준</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                  <div className="bg-white p-8 md:p-10 border border-neutral-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mx-auto text-lg font-serif text-white font-bold">I</div>
                    <h4 className="text-lg font-serif font-bold text-neutral-800 tracking-[-0.02em]">책임 있는 원석 선택</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed max-w-xs mx-auto break-keep tracking-[-0.02em]">
                      명확하고 정직하게 검증된 공급 경로의 원석만을 사용합니다. 원산지와 유통 과정도 투명하게 안내합니다.
                    </p>
                  </div>
                  <div className="bg-white p-8 md:p-10 border border-neutral-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mx-auto text-lg font-serif text-white font-bold">II</div>
                    <h4 className="text-lg font-serif font-bold text-neutral-800 tracking-[-0.02em]">원석의 특징에 맞춘 커팅</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed max-w-xs mx-auto break-keep tracking-[-0.02em]">
                      원석마다 다른 색과 투명도, 내포물을 살펴 가장 자연스럽게 빛나는 비율로 커팅하고 세심하게 연마합니다.
                    </p>
                  </div>
                  <div className="bg-white p-8 md:p-10 border border-neutral-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mx-auto text-lg font-serif text-white font-bold">III</div>
                    <h4 className="text-lg font-serif font-bold text-neutral-800 tracking-[-0.02em]">지속 가능한 아름다움</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed max-w-xs mx-auto break-keep tracking-[-0.02em]">
                      균형과 내구성을 함께 고려해 제작하며, 언제든 수선과 관리를 받으실 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Legacy Chronicles (Timeline) */}
            <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
              <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-12">
                  <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-bold">브랜드의 기록</span>
                  <h3 className="text-2xl md:text-4xl font-serif font-bold text-neutral-900 mt-2 tracking-[-0.03em]">AVELINE가 걸어온 길</h3>
                </div>
                <div className="max-w-5xl mx-auto space-y-12 relative before:absolute before:inset-y-0 before:left-4 md:before:left-1/2 before:w-[1px] before:bg-neutral-200">

                  {/* 1924 */}
                  <div className="relative flex flex-col md:flex-row items-start md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white -translate-x-[7px] md:-translate-x-2 z-10" />
                    <div className="w-full md:w-[47%] pl-10 md:pl-0 md:pr-10 md:text-right">
                      <div className="bg-white border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1 inline-block text-left w-full overflow-hidden">
                        <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden">
                          <img src="/templates/OHMT002-jewelry/heritage-1924-atelier.png" alt="1924 첫 공방" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-6 md:p-8">
                          <span className="text-xl md:text-2xl font-serif font-bold text-[var(--color-primary)]">1924</span>
                          <h4 className="text-base md:text-base font-serif font-bold text-neutral-800 mt-1">첫 공방을 열다</h4>
                          <p className="text-sm text-neutral-500 mt-2 leading-relaxed break-keep tracking-[-0.025em]">
                            작은 공방에서 맞춤 반지와 기념 주얼리를 만들며 AVELINE의 첫 작업을 시작했습니다. 원석을 고르는 일부터 세팅과 마감까지 전 과정을 직접 진행합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block w-[47%]" />
                  </div>

                  {/* 1968 */}
                  <div className="relative flex flex-col md:flex-row items-start md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white -translate-x-[7px] md:-translate-x-2 z-10" />
                    <div className="hidden md:block w-[47%]" />
                    <div className="w-full md:w-[47%] pl-10 md:pl-10">
                      <div className="bg-white border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1 inline-block w-full overflow-hidden">
                        <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden">
                          <img src="/templates/OHMT002-jewelry/heritage-1968-boutique.png" alt="1968 맞춤 제작 서비스" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-6 md:p-8">
                          <span className="text-xl md:text-2xl font-serif font-bold text-[var(--color-primary)]">1968</span>
                          <h4 className="text-base md:text-base font-serif font-bold text-neutral-800 mt-1">맞춤 제작 서비스 시작</h4>
                          <p className="text-sm text-neutral-500 mt-2 leading-relaxed break-keep tracking-[-0.025em]">
                            고객의 이야기와 취향을 반영한 1:1 맞춤 제작 서비스를 시작했습니다. 상담부터 원석 선택, 디자인과 제작 과정을 함께 확인할 수 있도록 운영했습니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2002 */}
                  <div className="relative flex flex-col md:flex-row items-start md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white -translate-x-[7px] md:-translate-x-2 z-10" />
                    <div className="w-full md:w-[47%] pl-10 md:pl-0 md:pr-10 md:text-right">
                      <div className="bg-white border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1 inline-block text-left w-full overflow-hidden">
                        <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden">
                          <img src="/templates/OHMT002-jewelry/heritage-2002-global.png" alt="2002 해외 고객 확장" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-6 md:p-8">
                          <span className="text-xl md:text-2xl font-serif font-bold text-[var(--color-primary)]">2002</span>
                          <h4 className="text-base md:text-base font-serif font-bold text-neutral-800 mt-1">해외 고객과 만나다</h4>
                          <p className="text-sm text-neutral-500 mt-2 leading-relaxed break-keep tracking-[-0.025em]">
                            온라인 상담과 해외 배송을 확대해 더 많은 고객이 AVELINE의 컬렉션과 맞춤 제작 서비스를 이용할 수 있도록 했습니다.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block w-[47%]" />
                  </div>

                  {/* 2026 */}
                  <div className="relative flex flex-col md:flex-row items-start md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white -translate-x-[7px] md:-translate-x-2 z-10" />
                    <div className="hidden md:block w-[46%]" />
                    <div className="w-full md:w-[46%] pl-10 md:pl-8">
                      <div className="bg-white border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1 inline-block w-full overflow-hidden">
                        <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden">
                          <img src="/templates/OHMT002-jewelry/heritage-2026-studio.png" alt="2026 책임 있는 제작 기준" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-6 md:p-8">
                          <span className="text-xl md:text-2xl font-serif font-bold text-[var(--color-primary)]">2026</span>
                          <h4 className="text-base md:text-base font-serif font-bold text-neutral-800 mt-1">책임 있는 제작 기준 마련</h4>
                          <p className="text-sm text-neutral-500 mt-2 leading-relaxed break-keep tracking-[-0.025em]">
                            원석의 공급 경로를 확인하고 포장과 제작 과정에서 불필요한 자원 사용을 줄이는 등, 브랜드가 지켜야 할 기준을 구체적으로 정리했습니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Pledge Box Section */}
            <section className="pb-24 px-6 md:px-12 bg-white">
              <div className="max-w-[1440px] mx-auto">
                <div className="bg-[#1C1C1A] border-t-2 border-t-[var(--color-primary)] border-x border-b border-neutral-800 p-10 md:p-16 text-center max-w-5xl mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                  <span className="text-xs tracking-[0.3em] text-[var(--color-primary)] font-bold uppercase block mb-3">서비스 안내</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">오래 함께하기 위한 관리 서비스</h3>
                  <p className="text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto font-light break-keep">
                    모든 제품에는 정품 인증서와 품질 보증 안내가 함께 제공됩니다.<br className="hidden md:block" /> 사이즈 조절과 세척, 상태 점검 등 제품에 필요한 관리 서비스를 안내해 드립니다.
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : (
          /* Products Grid Content */
          <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
            <div className="max-w-[1440px] mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {filteredProducts.map((item) => (
                  <div key={item.id} className="group cursor-pointer">
                    <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-[var(--color-bg-secondary)]">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover scale-[1.06] group-hover:scale-[1.12] transition-transform duration-[2.5s] ease-out" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                        <button className="w-full py-4 bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-[0.1em] hover:bg-neutral-900 transition-colors rounded-none">
                          상담 예약
                        </button>
                      </div>
                    </div>
                    <div className="space-y-1 text-center">
                      <h4 className="text-sm md:text-base font-serif font-bold text-neutral-800 group-hover:text-[var(--color-primary)] transition-colors leading-[var(--leading-heading)] truncate tracking-[-0.03em]">
                        {item.name}
                      </h4>
                      <p className="text-sm text-neutral-500 font-bold tracking-[-0.025em]">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function CategoryPage() {
  return (
    <React.Suspense fallback={null}>
      <CategoryContent />
    </React.Suspense>
  );
}
