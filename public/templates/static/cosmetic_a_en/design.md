# 코스메틱 템플릿 디자인 시스템 (Vinuspread 현대적 럭셔리)

이 문서는 Vash 템플릿의 영향을 받은 코스메틱 사이트의 새로운 시각적 정체성을 정의합니다.

## 1. 디자인 컨셉
- **테마**: "현대적 상업 럭셔리 (Modern Commercial Luxury)"
- **키워드**: 깔끔함, 대담함, 고대비, 인터랙티브, 프리미엄.
- **시각적 목표**: 고대비 컬러와 세련된 산세리프 타이포그래피를 통해 자신감 있고 현대적인 브랜드 이미지 구축.

## 2. 컬러 시스템
- **배경 (Background)**: `#F9F6F2` (연한 크림색)
- **표면 (Surface)**: `#FFFFFF` (카드 및 모달용 순백색)
- **기본 텍스트 (Text)**: `#000000` (순수 블랙)
- **강조색 (Accent)**: `#EBE4DE` (연한 타우프 베이지)
- **테두리 (Border)**: `rgba(0, 0, 0, 0.1)` (은은한 구분선)

## 3. 타이포그래피
- **전체 서체**: `Inter`, sans-serif — 단일 서체 시스템. 세리프 폰트 사용 금지.
  - Google Fonts: `Inter` (300, 400, 500, 600, 700)
  - H1 (Hero): Weight 300~400. **이탤릭 사용 금지** — `font-style: italic`, `<em>` 태그 일체 사용 불가. 강조는 font-weight 차이로만 표현.
  - 크기: 3.5rem (모바일) → 4rem (데스크탑), Line-height 1.1
- **H2 (Section Heading)**: Inter, Weight 600, 48px, Line-height 1.2
- **본문 (Body)**: Weight 400, 16px~18px, Line-height 1.6
- **버튼**: Weight 500, 14px, 화살표 아이콘(↗) 포함

## 4. UI 컴포넌트 및 요소
- **라운드 배제**: 카드·버튼·배지·이미지 등 모든 UI 요소의 `border-radius` = `0`. 직각 처리가 원칙.
- **카드 (Cards)**: `border-radius: 0`, 테두리 `1px solid var(--color-border)`, 그림자 최소화.
- **버튼 (Buttons)**: `border-radius: 0`, 호버 시 배경색 전환, 화살표 아이콘 포함.
- **플로팅 배지 (Floating Badges)**: `border-radius: 0`, "New", "Best" 등 직각 라벨.
- **그리드**: 12컬럼 시스템, 최대 너비 1336px.

## 5. 상호작용
- **노출 효과 (Reveal)**: 스크롤에 반응하는 슬라이드 업 및 페이드인 효과.
- **마이크로 인터랙션**: 제품 이미지 호버 시 미세한 스케일 변화 (1.05배).
- **네비게이션**: 스크롤 시 글래스모피즘 효과가 적용되는 상단 바.

## 6. 이미지 가이드라인
- 현대적이고 밝은 조명의 스튜디오 샷.
- 인물보다는 제품의 질감과 패키징의 대담함을 강조하는 클로즈업.

---

## 7. 레퍼런스 분석: Aureva (2026-05-02)

출처: https://aureva-agency.webflow.io/

### 정보 구조 (IA)
- **GNB**: 로고(좌) / 중앙 메뉴(Home, About, Shop, Blog, Contact) / 장바구니 아이콘(우)
- **서브 카테고리**: Facial Care, Hair Care, Lip Care, Body Care
- **페이지 섹션 순서**: Announcement Bar → Hero → Product Showcase → Brand Benefits → Testimonials → FAQ → Blog Preview → Footer

### 섹션별 레이아웃 패턴
| 섹션 | 구조 |
|------|------|
| Announcement Bar | sticky 상단 띠 배너, 단색 배경(검정), 흰 텍스트 |
| Hero | 2컬럼 (카피 좌 / 이미지 우), min-height 90vh, CTA 2개 |
| Product Showcase | 3컬럼 카드 그리드, 배지(New/Best), 가격 표기 |
| Brand Benefits | 5컬럼 아이콘+단문 카드 |
| Testimonials | 슬라이더, 별점 + 리뷰 + 고객명 |
| FAQ | 아코디언, 클릭 토글 |
| Blog Preview | 3컬럼 카드, 카테고리 태그 + 날짜 |
| Footer | 로고 + 링크 컬럼 + SNS + 갤러리 그리드 |

### 디자인 무드
- **프리미엄 미니멀리즘**: 절제된 색상, 넉넉한 여백
- **클린 뷰티 포지셔닝**: 비건·크루얼티프리·자연성분 신뢰 시그널 강조
- **웰니스 내러티브**: "Balance", "Gentle", "Daily Ritual" 키워드 (영문 사용)
- **언어 기준**: 사이트 전체 콘텐츠는 영문 기본

### 인터랙션 패턴
- GNB: 스크롤 시 글래스모피즘(backdrop-filter blur) 적용
- 제품 카드: 호버 시 translateY(-4px) + 이미지 scale(1.05)
- 스크롤 Reveal: opacity 0→1 + translateY(30px→0) fade-up
- FAQ: max-height 아코디언 토글
- Testimonial: translateX 슬라이더
- Marquee: 무한 흐르는 텍스트 배너

---

## 8. 서브페이지 설계 (Sub-pages)

공통 규칙:
- 모든 서브페이지는 `index.html`과 동일한 GNB + Footer 사용
- 페이지 최상단: `page-hero` 섹션 — 검정 배경, 흰 텍스트, 페이지 타이틀 + 브레드크럼
- 모든 콘텐츠는 `.container` 기준 정렬
- 공유 CSS는 `style.css`에서 관리, 페이지 전용 CSS는 없음

---

### 8-1. shop.html — Collection (제품 목록)

**목적**: 전체 제품 카탈로그 브라우징

**섹션 구조:**
```
[Page Hero] 검정 배경 — "Shop All" / 카테고리 필터 탭
[Filter Bar] 카테고리 탭: All / Serum / Cream / Oil / Set
[Product Grid] 6~9개 제품 카드 (3컬럼), 뱃지(New/Best/Sale)
[Load More] "Load More" 버튼 (텍스트 언더라인 스타일)
```

**카테고리 필터 탭 HTML 패턴:**
```html
<div class="filter-bar">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="serum">Serum</button>
  <button class="filter-btn" data-filter="cream">Cream</button>
  <button class="filter-btn" data-filter="oil">Oil</button>
  <button class="filter-btn" data-filter="set">Set</button>
</div>
```

**CSS 핵심:**
```css
.page-hero {
  background: var(--color-text);
  color: var(--white);
  padding: 160px 0 80px;
}
.page-hero h1 { color: var(--white); font-size: 3.5rem; font-weight: 300; }
.breadcrumb { font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-bottom: 1rem; }

.filter-bar { display: flex; gap: 0; border-bottom: 1px solid var(--color-border); margin-bottom: 60px; }
.filter-btn {
  background: none; border: none; padding: 1rem 2rem;
  font-size: 0.8rem; font-weight: 600; cursor: pointer;
  border-bottom: 2px solid transparent; transition: var(--transition);
}
.filter-btn.active { border-bottom-color: var(--color-text); }
```

**제품 목록 (9개):**
| 제품명 | 카테고리 | 가격 | 뱃지 |
|--------|---------|------|------|
| Hydrating Ampoule Serum | serum | $38 | Best |
| Brightening Vitamin C Serum | serum | $45 | New |
| Peptide Firming Serum | serum | $55 | — |
| Velvet Repair Cream | cream | $52 | — |
| Overnight Recovery Cream | cream | $48 | Best |
| Barrier Shield Cream | cream | $42 | New |
| Pure Cleansing Oil | oil | $29 | New |
| Nourishing Facial Oil | oil | $38 | — |
| Starter Ritual Set | set | $89 | Sale |

---

### 8-2. product.html — Product Detail (제품 상세)

**목적**: 개별 제품 상세 정보 및 구매

**섹션 구조:**
```
[Product Detail] 2컬럼: 좌(이미지 갤러리) / 우(정보+CTA)
[Ingredients] 전성분 아코디언
[How to Use] 사용법 스텝 (1→2→3)
[Related Products] "You may also like" 3컬럼 카드
```

**2컬럼 레이아웃:**
```css
.product-detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  padding: 80px 0;
  align-items: start;
}
.product-gallery { position: sticky; top: 140px; }
.product-gallery-main img { width: 100%; height: 600px; object-fit: cover; }
.product-gallery-thumbs { display: flex; gap: 1rem; margin-top: 1rem; }
.product-gallery-thumbs img { width: 80px; height: 80px; object-fit: cover; cursor: pointer; border: 1px solid var(--color-border); }
```

**우측 정보 패널:**
```html
<div class="product-info-panel">
  <span class="sub-title">Facial Care</span>
  <h1>Hydrating Ampoule Serum</h1>
  <p class="product-price-lg">$38.00</p>
  <p class="product-desc">A lightweight, fast-absorbing serum formulated with hyaluronic acid...</p>
  <div class="product-size-select"><!-- 30ml / 50ml 옵션 --></div>
  <button class="btn btn-primary full-width">Add to Cart ↗</button>
  <div class="product-meta"><!-- 배송, 무료반품, 성분 뱃지 --></div>
</div>
```

---

### 8-3. about.html — Our Story (브랜드 스토리)

**목적**: 브랜드 철학, 창업 스토리, 팀 소개

**섹션 구조:**
```
[Page Hero] 검정 배경 — "Our Story"
[Brand Mission] 2컬럼: 좌(대형 이미지) / 우(브랜드 철학 텍스트)
[Timeline] 브랜드 연혁 (2019~현재), 세로 타임라인
[Values] 3컬럼 가치관 카드 (Science / Nature / Ethics)
[Team] 2컬럼 팀 소개 카드
[CTA Banner] 검정 배경 풀위스 — "Start Your Ritual" 버튼
```

**핵심 카피:**
- Mission: "We believe great skin is the result of science that respects nature."
- Founded: 2019, Seoul
- 연혁: 2019 Founded → 2021 First product launch → 2023 Global expansion → 2025 100K customers

---

### 8-4. journal.html — Journal (블로그 목록)

**목적**: 스킨케어 콘텐츠 아카이브

**섹션 구조:**
```
[Page Hero] "Journal" — 검정 배경
[Featured Post] 전폭 1개 (대형 이미지 + 제목 + 발췌)
[Post Grid] 2컬럼 → 3컬럼 카드 그리드 (6개)
[Category Filter] Skincare Tips / Ingredients / Lifestyle / Brand
```

**Featured Post 레이아웃:**
```css
.featured-post {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: var(--section-gap) 0;
  border-bottom: 1px solid var(--color-border);
}
.featured-post img { height: 500px; object-fit: cover; }
.featured-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; }
```
