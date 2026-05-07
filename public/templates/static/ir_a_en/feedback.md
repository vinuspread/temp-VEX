# Vinuspread — IR Site Implementation Instructions for Gemma

아래 코드를 그대로 각 파일에 작성하십시오. **지시된 파일 외에는 절대 수정하지 마십시오.**

생성할 파일 목록:
1. `style.css`
2. `main.js`
3. `index.html`
4. `financials.html`
5. `governance.html`
6. `contact.html`

---

## 디자인 원칙 (반드시 준수)

- 배경: 순백 `#FFFFFF` 기반, 섹션 구분은 연한 `#F5F5F3`
- 텍스트: 거의 블랙 `#111111`, 서브 `#6B6B6B`
- 포인트 컬러: 딥네이비 `#0D1F3C`, 골드 포인트 `#B8962E`
- 폰트: Inter 단일 (sans-serif) — 헤딩 700~800, 바디 400
- 섹션 번호(01, 02, 03…)로 콘텐츠 흐름 안내
- 헤더 레이블: `/SECTION NAME/` 포맷의 작은 eyebrow
- CTA 버튼: 작고 절제된 스타일 — 화살표(→) 동반
- 레이아웃: 넉넉한 여백, 그리드 기반, 카드 그림자 없음
- 전체적으로 신뢰감·전문성·투명성을 전달하는 톤

---

## 1. style.css

```css
/*
  Vinuspread IR
  Clean. Authoritative. Transparent.
  Headings: Playfair Display | Body: Inter
*/

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
    --font: 'Inter', sans-serif;

    --white: #FFFFFF;
    --bg-alt: #F5F5F3;
    --black: #111111;
    --muted: #6B6B6B;
    --navy: #0D1F3C;
    --navy-light: #162f5a;
    --gold: #B8962E;
    --gold-light: #F5EDD5;
    --border: #E2E2E0;
    --up: #1a8a4a;
    --down: #c0392b;
    --transition: all 0.3s ease;
    --container: 1280px;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
    font-family: var(--font);
    background: var(--white);
    color: var(--black);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
}
a { color: inherit; text-decoration: none; transition: var(--transition); }
img { display: block; max-width: 100%; }

.container { max-width: var(--container); margin: 0 auto; padding: 0 60px; }

/* ===== ANNOUNCEMENT BANNER ===== */
.announcement-bar {
    background: var(--navy);
    color: rgba(255,255,255,0.85);
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-align: center;
    padding: 0.6rem 1rem;
    position: relative;
    z-index: 1000;
}
.announcement-bar a { color: var(--gold); text-decoration: underline; }
.announcement-bar strong { color: var(--white); }

/* ===== NAVBAR ===== */
.navbar {
    position: sticky;
    top: 0;
    z-index: 900;
    height: 64px;
    background: var(--white);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
}
.navbar .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.nav-logo {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
}
.nav-logo-name {
    
    font-size: 1rem;
    font-weight: 700;
    color: var(--navy);
    letter-spacing: 0.02em;
    line-height: 1;
}
.nav-logo-sub {
    font-size: 0.58rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--muted);
    line-height: 1;
}
.nav-links {
    display: flex;
    gap: 2.5rem;
}
.nav-links a {
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--muted);
    transition: var(--transition);
    padding-bottom: 2px;
    border-bottom: 1px solid transparent;
}
.nav-links a:hover { color: var(--black); }
.nav-links a.active { color: var(--navy); border-bottom-color: var(--gold); }
.nav-right { display: flex; gap: 1rem; align-items: center; }
.nav-stock {
    font-size: 0.7rem;
    padding-right: 1rem;
    border-right: 1px solid var(--border);
    line-height: 1.3;
    text-align: right;
}
.nav-stock-ticker { font-weight: 700; color: var(--navy); display: block; }
.nav-stock-price { font-weight: 600; display: block; }
.nav-stock-change { font-size: 0.62rem; color: var(--up); font-weight: 600; }
.nav-stock-change.down { color: var(--down); }
.btn-nav {
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    padding: 0.5rem 1.2rem;
    border: 1px solid var(--navy);
    color: var(--navy);
    background: transparent;
    cursor: pointer;
    font-family: var(--font);
    transition: var(--transition);
    white-space: nowrap;
}
.btn-nav:hover { background: var(--navy); color: var(--white); }

/* ===== EYEBROW & SECTION NUM ===== */
.eyebrow {
    display: block;
    font-size: 0.62rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: var(--muted);
    margin-bottom: 1.2rem;
}
.section-num {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    color: var(--border);
    display: block;
    margin-bottom: 0.4rem;
    font-family: var(--font);
}

/* ===== BUTTONS ===== */
.btn-arrow {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--navy);
    transition: var(--transition);
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font);
    padding: 0;
}
.btn-arrow::after { content: '→'; transition: transform 0.3s ease; }
.btn-arrow:hover::after { transform: translateX(5px); }
.btn-primary {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    padding: 0.78rem 1.8rem;
    background: var(--navy);
    color: var(--white);
    transition: var(--transition);
    cursor: pointer;
    border: 1px solid var(--navy);
    font-family: var(--font);
}
.btn-primary:hover { background: var(--navy-light); border-color: var(--navy-light); }
.btn-outline {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    padding: 0.78rem 1.8rem;
    border: 1px solid var(--border);
    color: var(--black);
    background: transparent;
    transition: var(--transition);
    cursor: pointer;
    font-family: var(--font);
}
.btn-outline:hover { border-color: var(--black); }
.btn-gold {
    display: inline-block;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    padding: 0.65rem 1.6rem;
    background: var(--gold);
    color: var(--white);
    border: 1px solid var(--gold);
    transition: var(--transition);
    cursor: pointer;
    font-family: var(--font);
}
.btn-gold:hover { opacity: 0.85; }

/* ===== PAGE HERO (서브페이지 공통) ===== */
.page-hero {
    background: var(--navy);
    padding: 5rem 0 4.5rem;
    position: relative;
    overflow: hidden;
}
.page-hero::after {
    content: '';
    position: absolute;
    right: -120px; top: -80px;
    width: 480px; height: 480px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.05);
}
.page-hero::before {
    content: '';
    position: absolute;
    right: 60px; top: 40px;
    width: 240px; height: 240px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.04);
}
.page-hero .eyebrow { color: rgba(255,255,255,0.35); }
.page-hero h1 {
    
    font-size: clamp(2.2rem, 4vw, 3.5rem);
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.1;
    color: var(--white);
    max-width: 600px;
}
.page-hero-meta {
    display: flex;
    gap: 3rem;
    margin-top: 2.5rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.1);
}
.page-hero-meta-item label {
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(255,255,255,0.35);
    display: block;
    margin-bottom: 0.3rem;
}
.page-hero-meta-item span {
    font-size: 0.88rem;
    font-weight: 600;
    color: rgba(255,255,255,0.75);
}

/* ===== HERO (index only) ===== */
.hero {
    background: var(--navy);
    min-height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
}
.hero-bg {
    position: absolute;
    inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    opacity: 0.12;
}
.hero-inner {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    padding: 6rem 0 3rem;
}
.hero-content { max-width: 760px; }
.hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 0.62rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: var(--gold);
    margin-bottom: 2rem;
}
.hero-eyebrow::before {
    content: '';
    display: block;
    width: 24px; height: 1px;
    background: var(--gold);
}
.hero-content h1 {
    
    font-size: clamp(2.8rem, 5.5vw, 5.5rem);
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.08;
    color: var(--white);
    margin-bottom: 1.8rem;
}
.hero-content h1 em {
    font-style: italic;
    color: rgba(255,255,255,0.38);
    font-weight: 400;
}
.hero-content p {
    font-size: 0.95rem;
    color: rgba(255,255,255,0.5);
    line-height: 1.8;
    max-width: 480px;
    margin-bottom: 2.8rem;
    font-weight: 300;
}
.hero-btns { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; }
.btn-hero-primary {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    padding: 0.85rem 2rem;
    background: var(--white);
    color: var(--navy);
    border: 1px solid var(--white);
    cursor: pointer;
    font-family: var(--font);
    transition: var(--transition);
    display: inline-block;
}
.btn-hero-primary:hover { background: transparent; color: var(--white); }
.btn-hero-outline {
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    padding: 0.85rem 2rem;
    border: 1px solid rgba(255,255,255,0.25);
    color: rgba(255,255,255,0.75);
    background: transparent;
    cursor: pointer;
    font-family: var(--font);
    transition: var(--transition);
    display: inline-block;
}
.btn-hero-outline:hover { border-color: rgba(255,255,255,0.6); color: var(--white); }

/* Hero bottom KPI strip */
.hero-strip {
    position: relative;
    border-top: 1px solid rgba(255,255,255,0.08);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
.hero-strip-cell {
    padding: 2rem 60px;
    border-right: 1px solid rgba(255,255,255,0.08);
}
.hero-strip-cell:last-child { border-right: none; }
.hero-strip-val {
    display: block;
    font-size: clamp(1.5rem, 2.2vw, 2rem);
    font-weight: 800;
    color: var(--white);
    letter-spacing: -0.02em;
    line-height: 1;
    margin-bottom: 0.35rem;
}
.hero-strip-val em { font-style: normal; font-size: 0.55em; color: rgba(255,255,255,0.4); font-weight: 500; }
.hero-strip-label {
    font-size: 0.62rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: rgba(255,255,255,0.35);
    display: block;
    margin-bottom: 0.3rem;
}
.hero-strip-change {
    font-size: 0.65rem;
    font-weight: 700;
    color: var(--up);
}
.hero-strip-change.down { color: #e87070; }

/* ===== STOCK TICKER SECTION ===== */
.stock-section {
    background: var(--bg-alt);
    border-bottom: 1px solid var(--border);
    padding: 1.8rem 0;
}
.stock-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}
.stock-left { display: flex; align-items: baseline; gap: 1.5rem; flex-wrap: wrap; }
.stock-ticker-label {
    font-size: 0.62rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--muted);
}
.stock-price-big {
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--navy);
    letter-spacing: -0.02em;
    line-height: 1;
}
.stock-change-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.78rem;
    font-weight: 700;
    padding: 0.3rem 0.7rem;
    background: #e8f5ee;
    color: var(--up);
    border-radius: 2px;
}
.stock-change-badge.down { background: #fdf0f0; color: var(--down); }
.stock-meta {
    display: flex;
    gap: 2rem;
    font-size: 0.72rem;
    color: var(--muted);
    flex-wrap: wrap;
}
.stock-meta span strong { color: var(--black); font-weight: 600; }
.stock-right {
    display: flex;
    gap: 1rem;
    flex-shrink: 0;
}

/* ===== SECTION COMMON ===== */
.section { padding: 7rem 0; }
.section-alt { padding: 7rem 0; background: var(--bg-alt); }
.section-header { margin-bottom: 4rem; }
.section-header h2 {
    
    font-size: clamp(1.9rem, 3.2vw, 2.8rem);
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.15;
    max-width: 560px;
}
.section-header p {
    font-size: 0.9rem;
    color: var(--muted);
    line-height: 1.78;
    max-width: 500px;
    margin-top: 1rem;
    font-weight: 400;
}
.section-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 4rem;
}
.section-row .section-header { margin-bottom: 0; }

/* ===== HIGHLIGHTS GRID ===== */
.highlights-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--border);
}
.highlight-card {
    background: var(--white);
    padding: 2.8rem 2.5rem;
    border-bottom: 3px solid transparent;
    transition: border-color 0.3s ease, background 0.3s ease;
}
.section-alt .highlight-card { background: var(--bg-alt); }
.highlight-card:hover { border-bottom-color: var(--gold); }
.highlight-num {
    display: block;
    
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 700;
    color: var(--navy);
    letter-spacing: -0.02em;
    line-height: 1;
    margin-bottom: 0.4rem;
}
.highlight-num em { font-style: normal; font-size: 0.55em; font-weight: 600; color: var(--muted); font-family: var(--font); }
.highlight-label {
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--muted);
    margin-bottom: 0.6rem;
    display: block;
}
.highlight-change {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--up);
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
}
.highlight-change.down { color: var(--down); }

/* ===== OVERVIEW CARDS (Business Segments) ===== */
.overview-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--border);
}
.overview-card {
    background: var(--white);
    padding: 3rem 2.5rem;
    border-top: 3px solid transparent;
    transition: border-color 0.3s ease;
    position: relative;
}
.section-alt .overview-card { background: var(--bg-alt); }
.overview-card:nth-child(1) { border-top-color: var(--navy); }
.overview-card:nth-child(2) { border-top-color: var(--gold); }
.overview-card:nth-child(3) { border-top-color: #4a7fa5; }
.overview-card-num {
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    color: var(--border);
    display: block;
    margin-bottom: 1.2rem;
}
.overview-card-icon {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
    display: block;
}
.overview-card h3 {
    
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
    line-height: 1.3;
    color: var(--navy);
}
.overview-card p {
    font-size: 0.83rem;
    color: var(--muted);
    line-height: 1.72;
    margin-bottom: 2rem;
}
.overview-card-stat {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--muted);
    padding-top: 1.2rem;
    border-top: 1px solid var(--border);
}
.overview-card-stat strong { color: var(--navy); font-size: 1rem; letter-spacing: -0.01em;  }

/* ===== SPLIT LAYOUT ===== */
.split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 7rem;
    align-items: center;
}
.split.reverse { direction: rtl; }
.split.reverse > * { direction: ltr; }
.split-body h2 {
    
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.2;
    margin-bottom: 1.2rem;
}
.split-body p {
    font-size: 0.88rem;
    color: var(--muted);
    line-height: 1.82;
    margin-bottom: 1.2rem;
    max-width: 440px;
}
.split-body .btn-arrow { margin-top: 1rem; }
.split-img img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}
.split-img-caption {
    font-size: 0.68rem;
    color: var(--muted);
    margin-top: 0.8rem;
    letter-spacing: 0.06em;
}

/* ===== KPI STATS ROW ===== */
.stats-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    background: var(--bg-alt);
}
.stat-cell {
    padding: 3rem 2.5rem;
    border-right: 1px solid var(--border);
}
.stat-cell:last-child { border-right: none; }
.stat-num {
    display: block;
    
    font-size: clamp(1.8rem, 2.8vw, 2.6rem);
    font-weight: 700;
    color: var(--navy);
    letter-spacing: -0.02em;
    line-height: 1;
    margin-bottom: 0.4rem;
}
.stat-num em { font-style: normal; font-size: 0.55em; font-weight: 600; color: var(--muted); font-family: var(--font); }
.stat-label {
    font-size: 0.62rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--muted);
    display: block;
    margin-bottom: 0.3rem;
}
.stat-change {
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--up);
    display: block;
}
.stat-change.down { color: var(--down); }

/* ===== ESG STRIP ===== */
.esg-strip {
    background: var(--navy);
    padding: 4rem 0;
}
.esg-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: rgba(255,255,255,0.08);
}
.esg-cell {
    background: var(--navy);
    padding: 2.5rem;
    text-align: center;
}
.esg-val {
    display: block;
    
    font-size: clamp(1.6rem, 2.5vw, 2.2rem);
    font-weight: 700;
    color: var(--white);
    letter-spacing: -0.01em;
    line-height: 1;
    margin-bottom: 0.5rem;
}
.esg-val em { font-style: normal; font-size: 0.55em; color: var(--gold); font-family: var(--font); font-weight: 600; }
.esg-label {
    font-size: 0.62rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: rgba(255,255,255,0.4);
    display: block;
    margin-bottom: 0.35rem;
}
.esg-note {
    font-size: 0.68rem;
    color: var(--gold);
    font-weight: 600;
}

/* ===== NEWS LIST ===== */
.news-list {
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--border);
}
.news-item {
    display: grid;
    grid-template-columns: 110px 1fr auto;
    gap: 2rem;
    align-items: start;
    padding: 1.8rem 0;
    border-bottom: 1px solid var(--border);
    transition: var(--transition);
    cursor: pointer;
}
.news-item:hover { padding-left: 0.5rem; }
.news-item:hover .news-title { color: var(--navy); }
.news-date-block {
    font-size: 0.68rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--muted);
    padding-top: 0.2rem;
    line-height: 1.5;
}
.news-tag {
    display: inline-block;
    font-size: 0.58rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    padding: 0.2rem 0.6rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;
}
/* 태그 색상 구분 */
.news-tag.tag-earnings { background: #EAF0FB; color: #2356b3; }
.news-tag.tag-dividend { background: var(--gold-light); color: #7a5a10; }
.news-tag.tag-disclosure { background: #F0F0F0; color: var(--muted); }
.news-tag.tag-ma { background: #F0F5EF; color: #2a6b3a; }
.news-tag.tag-esg { background: #EFF5F0; color: #2a7a3a; }
.news-title {
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.5;
    color: var(--black);
    transition: color 0.3s ease;
}
.news-arrow {
    font-size: 0.85rem;
    color: var(--border);
    padding-top: 0.25rem;
    transition: var(--transition);
    font-weight: 600;
}
.news-item:hover .news-arrow { color: var(--navy); transform: translateX(4px); }

/* ===== DOCUMENT LIST ===== */
.doc-list {
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--border);
}
.doc-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.4rem 0;
    border-bottom: 1px solid var(--border);
    transition: var(--transition);
    cursor: pointer;
}
.doc-item:hover { padding-left: 0.4rem; }
.doc-item-left { display: flex; align-items: center; gap: 1.2rem; }
.doc-icon {
    width: 38px; height: 38px;
    background: var(--navy);
    color: var(--white);
    display: flex; align-items: center; justify-content: center;
    font-size: 0.58rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    flex-shrink: 0;
}
.doc-icon.xlsx { background: #1a6b3a; }
.doc-icon.pptx { background: #b33a1e; }
.doc-name {
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--black);
    display: block;
    margin-bottom: 0.2rem;
}
.doc-date {
    font-size: 0.7rem;
    color: var(--muted);
}
.doc-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}
.doc-size {
    font-size: 0.68rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
}
.doc-download {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--navy);
    display: flex;
    align-items: center;
    gap: 0.4rem;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.2s ease;
}
.doc-item:hover .doc-download { opacity: 1; }

/* ===== TIMELINE ===== */
.timeline {
    display: flex;
    flex-direction: column;
    border-left: 1px solid var(--border);
    margin-left: 1.5rem;
}
.timeline-item {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 2.5rem;
    padding: 2.2rem 0 2.2rem 3rem;
    border-bottom: 1px solid var(--border);
    position: relative;
}
.timeline-item::before {
    content: '';
    position: absolute;
    left: -5px; top: 2.5rem;
    width: 9px; height: 9px;
    border-radius: 50%;
    background: var(--white);
    border: 2px solid var(--navy);
}
.timeline-item.upcoming::before { background: var(--gold); border-color: var(--gold); }
.timeline-date {
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--muted);
    padding-top: 0.15rem;
    line-height: 1.4;
}
.timeline-item.upcoming .timeline-date { color: var(--gold); font-weight: 700; }
.timeline-body h4 {
    font-size: 0.92rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
    color: var(--navy);
    line-height: 1.3;
}
.timeline-body p {
    font-size: 0.82rem;
    color: var(--muted);
    line-height: 1.65;
}

/* ===== BOARD / GOVERNANCE ===== */
.board-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--border);
}
.board-card {
    background: var(--white);
    padding: 0 0 1.8rem 0;
    overflow: hidden;
}
.section-alt .board-card { background: var(--bg-alt); }
.board-img {
    width: 100%;
    aspect-ratio: 4/5;
    object-fit: cover;
    object-position: top;
    filter: grayscale(20%);
    margin-bottom: 1.2rem;
    transition: filter 0.5s ease;
    display: block;
}
.board-card:hover .board-img { filter: grayscale(0%); }
.board-card-body { padding: 0 1.5rem; }
.board-badge {
    display: inline-block;
    font-size: 0.55rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    padding: 0.15rem 0.55rem;
    background: var(--gold-light);
    color: #7a5a10;
    margin-bottom: 0.5rem;
}
.board-badge.executive { background: #EAF0FB; color: #2356b3; }
.board-name {
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 0.2rem;
    color: var(--black);
}
.board-role {
    font-size: 0.68rem;
    font-weight: 500;
    color: var(--muted);
    line-height: 1.4;
}
.board-since {
    font-size: 0.65rem;
    color: var(--border);
    margin-top: 0.5rem;
    font-weight: 600;
    letter-spacing: 0.06em;
}

/* ===== IR ALERT SUBSCRIPTION ===== */
.alert-section {
    background: var(--gold-light);
    border-top: 1px solid #e8d8a0;
    border-bottom: 1px solid #e8d8a0;
    padding: 3.5rem 0;
}
.alert-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
}
.alert-text h3 {
    
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--navy);
    margin-bottom: 0.4rem;
}
.alert-text p {
    font-size: 0.82rem;
    color: var(--muted);
}
.alert-form {
    display: flex;
    gap: 0;
    flex-shrink: 0;
}
.alert-input {
    padding: 0.75rem 1.2rem;
    border: 1px solid #d4b86a;
    border-right: none;
    font-family: var(--font);
    font-size: 0.85rem;
    color: var(--black);
    background: var(--white);
    width: 280px;
    outline: none;
}
.alert-input:focus { border-color: var(--navy); }
.alert-submit {
    padding: 0.75rem 1.4rem;
    background: var(--navy);
    color: var(--white);
    font-family: var(--font);
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    border: 1px solid var(--navy);
    cursor: pointer;
    white-space: nowrap;
    transition: var(--transition);
}
.alert-submit:hover { background: var(--navy-light); }

/* ===== CONTACT FORM ===== */
.contact-layout {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 7rem;
    align-items: start;
}
.contact-info h2 {
    
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.2;
    margin-bottom: 1.2rem;
}
.contact-info p {
    font-size: 0.88rem;
    color: var(--muted);
    line-height: 1.78;
    margin-bottom: 2.5rem;
}
.contact-detail {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
}
.contact-detail-item label {
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--muted);
    display: block;
    margin-bottom: 0.25rem;
}
.contact-detail-item span {
    font-size: 0.88rem;
    font-weight: 500;
    color: var(--black);
    line-height: 1.5;
    display: block;
}
.form-group { margin-bottom: 1.3rem; }
.form-group label {
    display: block;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--muted);
    margin-bottom: 0.45rem;
}
.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid var(--border);
    background: var(--white);
    font-family: var(--font);
    font-size: 0.88rem;
    color: var(--black);
    transition: border-color 0.3s ease;
    outline: none;
    border-radius: 0;
}
.form-group input:focus,
.form-group textarea:focus { border-color: var(--navy); }
.form-group textarea { height: 130px; resize: vertical; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
/* Custom select */
.select-wrapper { position: relative; }
.select-wrapper::after {
    content: '↓';
    position: absolute;
    right: 1rem; top: 50%;
    transform: translateY(-50%);
    font-size: 0.7rem;
    color: var(--muted);
    pointer-events: none;
}
.form-group select {
    width: 100%;
    padding: 0.8rem 2.5rem 0.8rem 1rem;
    border: 1px solid var(--border);
    background: var(--white);
    font-family: var(--font);
    font-size: 0.88rem;
    color: var(--black);
    outline: none;
    border-radius: 0;
    appearance: none;
    cursor: pointer;
    transition: border-color 0.3s ease;
}
.form-group select:focus { border-color: var(--navy); }
.form-note {
    font-size: 0.7rem;
    color: var(--muted);
    line-height: 1.65;
    margin-top: 1rem;
}

/* ===== SCROLL ANIMATION ===== */
.reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }

/* ===== FOOTER ===== */
.footer {
    background: var(--navy);
    padding: 5rem 0 0;
}
.footer-top {
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr 1fr;
    gap: 4rem;
    padding-bottom: 4rem;
    margin-bottom: 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
}
.footer-brand-logo {
    
    font-size: 1rem;
    font-weight: 700;
    color: var(--white);
    display: block;
    margin-bottom: 0.4rem;
}
.footer-brand-sub {
    font-size: 0.6rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(255,255,255,0.3);
    display: block;
    margin-bottom: 1.2rem;
}
.footer-brand p {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.35);
    line-height: 1.72;
    max-width: 260px;
    font-weight: 300;
}
.footer-col h5 {
    font-size: 0.58rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    color: rgba(255,255,255,0.3);
    margin-bottom: 1.5rem;
}
.footer-col nav { display: flex; flex-direction: column; gap: 0.65rem; }
.footer-col nav a {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.45);
    font-weight: 400;
    transition: color 0.3s ease;
}
.footer-col nav a:hover { color: var(--white); }
.footer-disclaimer {
    padding: 1.8rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
}
.footer-disclaimer p {
    font-size: 0.7rem;
    color: rgba(255,255,255,0.2);
    line-height: 1.65;
    max-width: 900px;
}
.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.68rem;
    color: rgba(255,255,255,0.2);
    padding: 1.5rem 0;
}
.footer-legal { display: flex; gap: 2rem; }
.footer-legal a { color: rgba(255,255,255,0.2); transition: color 0.3s ease; }
.footer-legal a:hover { color: rgba(255,255,255,0.45); }

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
    .container { padding: 0 32px; }
    .hero-strip { grid-template-columns: repeat(2, 1fr); }
    .hero-strip-cell { padding: 1.5rem 32px; }
    .highlights-grid { grid-template-columns: 1fr 1fr; }
    .overview-grid { grid-template-columns: 1fr 1fr; }
    .split { grid-template-columns: 1fr; gap: 3rem; }
    .split.reverse { direction: ltr; }
    .split-img img { height: 340px; }
    .stats-row { grid-template-columns: repeat(2, 1fr); }
    .esg-grid { grid-template-columns: repeat(2, 1fr); }
    .board-grid { grid-template-columns: repeat(2, 1fr); }
    .contact-layout { grid-template-columns: 1fr; gap: 4rem; }
    .footer-top { grid-template-columns: 1fr 1fr; gap: 3rem; }
    .alert-inner { flex-direction: column; align-items: flex-start; }
    .alert-input { width: 240px; }
    .stock-inner { flex-direction: column; align-items: flex-start; gap: 1rem; }
}
@media (max-width: 768px) {
    .container { padding: 0 20px; }
    .nav-links { display: none; }
    .nav-stock { display: none; }
    .section, .section-alt { padding: 5rem 0; }
    .highlights-grid { grid-template-columns: 1fr; }
    .overview-grid { grid-template-columns: 1fr; }
    .stats-row { grid-template-columns: 1fr 1fr; }
    .esg-grid { grid-template-columns: 1fr 1fr; }
    .board-grid { grid-template-columns: 1fr 1fr; }
    .footer-top { grid-template-columns: 1fr; gap: 2.5rem; }
    .footer-bottom { flex-direction: column; gap: 0.8rem; text-align: center; }
    .news-item { grid-template-columns: 1fr; gap: 0.4rem; }
    .news-arrow { display: none; }
    .timeline-item { grid-template-columns: 1fr; gap: 0.4rem; padding-left: 2rem; }
    .form-row { grid-template-columns: 1fr; }
    .alert-form { flex-direction: column; }
    .alert-input { width: 100%; }
    .page-hero { padding: 3.5rem 0 3rem; }
}
```

---

## 2. main.js

```javascript
document.addEventListener('DOMContentLoaded', () => {

    // Active nav link
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
        if (a.getAttribute('href') === path) a.classList.add('active');
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }
        });
    });

    // Number count-up animation
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = parseFloat(el.dataset.count);
                const suffix = el.dataset.suffix || '';
                const prefix = el.dataset.prefix || '';
                const duration = 1400;
                const start = performance.now();
                const isDecimal = target % 1 !== 0;
                const animate = (time) => {
                    const progress = Math.min((time - start) / duration, 1);
                    const ease = 1 - Math.pow(1 - progress, 3);
                    const current = target * ease;
                    el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString()) + suffix;
                    if (progress < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
                observer.unobserve(el);
            });
        }, { threshold: 0.4 });
        counters.forEach(el => observer.observe(el));
    }

    // Scroll reveal animation
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        reveals.forEach(el => revealObserver.observe(el));
    }

    // IR Alert form
    const alertForm = document.querySelector('.alert-form');
    if (alertForm) {
        alertForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('.alert-input');
            if (input && input.value) {
                const btn = this.querySelector('.alert-submit');
                btn.textContent = 'Subscribed ✓';
                btn.style.background = '#1a8a4a';
                input.value = '';
                input.disabled = true;
                btn.disabled = true;
            }
        });
    }

    // Stock ticker mock update (demo purposes)
    const priceEl = document.querySelector('.nav-stock-price');
    if (priceEl) {
        setInterval(() => {
            const base = 48200;
            const delta = (Math.random() - 0.48) * 80;
            const price = (base + delta).toFixed(0);
            priceEl.textContent = '₩' + parseInt(price).toLocaleString();
        }, 8000);
    }

});
```

---

## 3. index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vinuspread — Investor Relations</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Announcement Bar -->
    <div class="announcement-bar">
        <strong>Q1 2026 Earnings Release</strong> — May 2, 2026 · Results exceeded consensus estimates. <a href="financials.html">View Full Report →</a>
    </div>

    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="nav-logo">
                <span class="nav-logo-name">Vinuspread</span>
                <span class="nav-logo-sub">Investor Relations</span>
            </a>
            <div class="nav-links">
                <a href="index.html" class="active">Overview</a>
                <a href="financials.html">Financials</a>
                <a href="governance.html">Governance</a>
                <a href="contact.html">Contact IR</a>
            </div>
            <div class="nav-right">
                <div class="nav-stock">
                    <span class="nav-stock-ticker">KRX 034580</span>
                    <span class="nav-stock-price">₩48,200</span>
                    <span class="nav-stock-change">▲ 1.4%</span>
                </div>
                <a href="#" class="btn-nav">Annual Report</a>
            </div>
        </div>
    </nav>

    <!-- Hero -->
    <section class="hero">
        <img class="hero-bg" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&q=80" alt="">
        <div class="hero-inner">
            <div class="container">
                <div class="hero-content reveal">
                    <span class="hero-eyebrow">Investor Relations</span>
                    <h1>Building long-term value<br><em>with</em> disciplined growth.</h1>
                    <p>Vinuspread is a diversified industrial group operating across clean energy, advanced manufacturing, and mobility. Committed to transparent governance and sustainable shareholder returns.</p>
                    <div class="hero-btns">
                        <a href="financials.html" class="btn-hero-primary">View Financials</a>
                        <a href="#overview" class="btn-hero-outline">Company Overview</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-strip">
            <div class="hero-strip-cell">
                <span class="hero-strip-label">Market Cap</span>
                <span class="hero-strip-val">₩4.2<em>T</em></span>
                <span class="hero-strip-change">As of May 2026</span>
            </div>
            <div class="hero-strip-cell">
                <span class="hero-strip-label">FY2025 Revenue</span>
                <span class="hero-strip-val">₩892<em>B</em></span>
                <span class="hero-strip-change">↑ 12.4% YoY</span>
            </div>
            <div class="hero-strip-cell">
                <span class="hero-strip-label">Operating Margin</span>
                <span class="hero-strip-val">18.4<em>%</em></span>
                <span class="hero-strip-change">↑ 1.8pp YoY</span>
            </div>
            <div class="hero-strip-cell">
                <span class="hero-strip-label">Dividend Yield</span>
                <span class="hero-strip-val">3.2<em>%</em></span>
                <span class="hero-strip-change">↑ 12.5% growth</span>
            </div>
        </div>
    </section>

    <!-- Stock Bar -->
    <div class="stock-section">
        <div class="container">
            <div class="stock-inner">
                <div class="stock-left">
                    <span class="stock-ticker-label">KRX 034580</span>
                    <span class="stock-price-big">₩48,200</span>
                    <span class="stock-change-badge">▲ ₩660 (1.39%)</span>
                </div>
                <div class="stock-meta">
                    <span>Open <strong>₩47,800</strong></span>
                    <span>High <strong>₩48,450</strong></span>
                    <span>Low <strong>₩47,600</strong></span>
                    <span>52W High <strong>₩52,100</strong></span>
                    <span>52W Low <strong>₩38,200</strong></span>
                    <span>Vol <strong>1.24M</strong></span>
                </div>
                <div class="stock-right">
                    <a href="#" class="btn-outline">Historic Data</a>
                    <a href="contact.html" class="btn-primary">IR Contact</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Financial Highlights -->
    <section class="section" id="overview">
        <div class="container">
            <div class="section-row">
                <div class="section-header reveal">
                    <span class="section-num">01</span>
                    <span class="eyebrow">/Financial Highlights/</span>
                    <h2>FY2025 Performance at a Glance</h2>
                </div>
                <a href="financials.html" class="btn-arrow">Full Financials</a>
            </div>
            <div class="highlights-grid">
                <div class="highlight-card reveal reveal-delay-1">
                    <span class="highlight-label">Revenue</span>
                    <span class="highlight-num">₩892<em>B</em></span>
                    <span class="highlight-change">↑ 12.4% YoY</span>
                </div>
                <div class="highlight-card reveal reveal-delay-2">
                    <span class="highlight-label">Operating Income</span>
                    <span class="highlight-num">₩164<em>B</em></span>
                    <span class="highlight-change">↑ 18.7% YoY</span>
                </div>
                <div class="highlight-card reveal reveal-delay-3">
                    <span class="highlight-label">Net Income</span>
                    <span class="highlight-num">₩118<em>B</em></span>
                    <span class="highlight-change">↑ 22.1% YoY</span>
                </div>
                <div class="highlight-card reveal reveal-delay-1">
                    <span class="highlight-label">EPS (Basic)</span>
                    <span class="highlight-num">₩8,420</span>
                    <span class="highlight-change">↑ 19.3% YoY</span>
                </div>
                <div class="highlight-card reveal reveal-delay-2">
                    <span class="highlight-label">Total Assets</span>
                    <span class="highlight-num">₩2.1<em>T</em></span>
                    <span class="highlight-change">↑ 8.2% YoY</span>
                </div>
                <div class="highlight-card reveal reveal-delay-3">
                    <span class="highlight-label">Dividend per Share</span>
                    <span class="highlight-num">₩1,800</span>
                    <span class="highlight-change">↑ 12.5% YoY</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Business Segments -->
    <section class="section-alt">
        <div class="container">
            <div class="section-row">
                <div class="section-header reveal">
                    <span class="section-num">02</span>
                    <span class="eyebrow">/Business Segments/</span>
                    <h2>Three engines of<br>sustainable growth.</h2>
                </div>
            </div>
            <div class="overview-grid">
                <div class="overview-card reveal reveal-delay-1">
                    <span class="overview-card-num">01</span>
                    <span class="overview-card-icon">⚡</span>
                    <h3>Clean Energy</h3>
                    <p>Solar, wind, and hydrogen infrastructure across 14 countries. 8.4GW installed capacity with a 22GW pipeline through 2030.</p>
                    <div class="overview-card-stat">FY2025 Revenue <strong>₩342B</strong> · ↑ 18.2%</div>
                </div>
                <div class="overview-card reveal reveal-delay-2">
                    <span class="overview-card-num">02</span>
                    <span class="overview-card-icon">⚙️</span>
                    <h3>Advanced Manufacturing</h3>
                    <p>Precision components for aerospace, defense, and semiconductor equipment. Long-term supply agreements with Tier-1 OEMs globally.</p>
                    <div class="overview-card-stat">FY2025 Revenue <strong>₩318B</strong> · ↑ 9.4%</div>
                </div>
                <div class="overview-card reveal reveal-delay-3">
                    <span class="overview-card-num">03</span>
                    <span class="overview-card-icon">🚗</span>
                    <h3>Mobility</h3>
                    <p>Electric vehicle platforms, charging infrastructure, and connected fleet management software. Leading position in the Korean EV market.</p>
                    <div class="overview-card-stat">FY2025 Revenue <strong>₩232B</strong> · ↑ 28.6%</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Strategy Split -->
    <section class="section">
        <div class="container">
            <div class="split">
                <div class="split-body reveal">
                    <span class="section-num">03</span>
                    <span class="eyebrow">/Strategic Direction/</span>
                    <h2>A decade-long commitment to value creation.</h2>
                    <p>Our Vision 2030 strategy targets ₩2T revenue with a 22% operating margin — expanding our clean energy footprint, scaling advanced manufacturing globally, and leading Korea's EV ecosystem transition.</p>
                    <p>Capital allocation priorities: reinvestment in high-return segments, strategic M&A, and consistent dividend growth of 10%+ annually.</p>
                    <a href="governance.html" class="btn-arrow">Governance & Strategy</a>
                </div>
                <div class="split-img reveal reveal-delay-1">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80" alt="Strategy">
                    <p class="split-img-caption">Vinuspread HQ · Seoul, Korea · Est. 2009</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ESG Strip -->
    <div class="esg-strip">
        <div class="container">
            <div class="section-header reveal" style="margin-bottom:2.5rem;">
                <span class="eyebrow" style="color:rgba(255,255,255,0.35);">/ESG & Sustainability/</span>
                <h2 style="color:var(--white);">Our commitment<br>to responsible growth.</h2>
            </div>
            <div class="esg-grid">
                <div class="esg-cell reveal reveal-delay-1">
                    <span class="esg-label">Carbon Target</span>
                    <span class="esg-val">2040<em>Net Zero</em></span>
                    <span class="esg-note">–34% since 2020</span>
                </div>
                <div class="esg-cell reveal reveal-delay-2">
                    <span class="esg-label">Women in Leadership</span>
                    <span class="esg-val">38<em>%</em></span>
                    <span class="esg-note">+6pp YoY</span>
                </div>
                <div class="esg-cell reveal reveal-delay-3">
                    <span class="esg-label">MSCI ESG Rating</span>
                    <span class="esg-val">AA</span>
                    <span class="esg-note">Upgraded 2024</span>
                </div>
                <div class="esg-cell reveal reveal-delay-3">
                    <span class="esg-label">R&D Investment</span>
                    <span class="esg-val">₩24<em>B</em></span>
                    <span class="esg-note">↑ 31% YoY</span>
                </div>
            </div>
        </div>
    </div>

    <!-- IR News -->
    <section class="section">
        <div class="container">
            <div class="section-row">
                <div class="section-header reveal">
                    <span class="section-num">04</span>
                    <span class="eyebrow">/IR News & Disclosures/</span>
                    <h2>Latest announcements.</h2>
                </div>
                <a href="#" class="btn-arrow">All Disclosures</a>
            </div>
            <div class="news-list">
                <div class="news-item reveal">
                    <div class="news-date-block">May 2<br>2026</div>
                    <div>
                        <span class="news-tag tag-earnings">Earnings</span>
                        <div class="news-title">Vinuspread Reports Q1 2026 Results — Revenue Up 14% YoY, Operating Margin Expands to 19.2%</div>
                    </div>
                    <span class="news-arrow">→</span>
                </div>
                <div class="news-item reveal">
                    <div class="news-date-block">Apr 15<br>2026</div>
                    <div>
                        <span class="news-tag tag-dividend">Dividend</span>
                        <div class="news-title">Board Declares Q2 2026 Dividend of ₩450 per Share, Payable June 30</div>
                    </div>
                    <span class="news-arrow">→</span>
                </div>
                <div class="news-item reveal">
                    <div class="news-date-block">Mar 28<br>2026</div>
                    <div>
                        <span class="news-tag tag-disclosure">Disclosure</span>
                        <div class="news-title">Vinuspread Files FY2025 Annual Report with Korea Exchange — Record Earnings Across All Segments</div>
                    </div>
                    <span class="news-arrow">→</span>
                </div>
                <div class="news-item reveal">
                    <div class="news-date-block">Feb 12<br>2026</div>
                    <div>
                        <span class="news-tag tag-ma">M&A</span>
                        <div class="news-title">Vinuspread Acquires 51% Stake in EuroGrid Solar GmbH, Expanding European Clean Energy Presence</div>
                    </div>
                    <span class="news-arrow">→</span>
                </div>
            </div>
        </div>
    </section>

    <!-- IR Alert Subscription -->
    <div class="alert-section">
        <div class="container">
            <div class="alert-inner">
                <div class="alert-text">
                    <h3>Stay informed with IR alerts.</h3>
                    <p>Receive earnings releases, dividend announcements, and material disclosures directly to your inbox.</p>
                </div>
                <form class="alert-form">
                    <input type="email" class="alert-input" placeholder="Enter your email address">
                    <button type="submit" class="alert-submit">Subscribe →</button>
                </form>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-brand">
                    <span class="footer-brand-logo">Vinuspread</span>
                    <span class="footer-brand-sub">Investor Relations</span>
                    <p>Vinuspread Co., Ltd. is listed on the Korea Exchange (KRX: 034580). Incorporated in Seoul, Korea. Fiscal year ends December 31.</p>
                </div>
                <div class="footer-col">
                    <h5>IR Pages</h5>
                    <nav>
                        <a href="index.html">Overview</a>
                        <a href="financials.html">Financials</a>
                        <a href="governance.html">Governance</a>
                        <a href="contact.html">Contact IR</a>
                    </nav>
                </div>
                <div class="footer-col">
                    <h5>Reports</h5>
                    <nav>
                        <a href="#">Annual Report 2025</a>
                        <a href="#">Q1 2026 Earnings</a>
                        <a href="#">ESG Report 2025</a>
                        <a href="#">Investor Presentation</a>
                    </nav>
                </div>
                <div class="footer-col">
                    <h5>Contact</h5>
                    <nav>
                        <a href="contact.html">IR Inquiries</a>
                        <a href="#">Press Releases</a>
                        <a href="#">Shareholder FAQ</a>
                        <a href="#">KRX Filing</a>
                    </nav>
                </div>
            </div>
            <div class="footer-disclaimer">
                <p>This website contains forward-looking statements that involve risks and uncertainties. Actual results may differ materially from those expressed or implied. Past performance is not indicative of future results. All financial data is presented in Korean Won (KRW) and based on K-IFRS consolidated financial statements unless otherwise noted.</p>
            </div>
            <div class="footer-bottom">
                <span>© 2026 Vinuspread Co., Ltd. All rights reserved. KRX: 034580</span>
                <div class="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Disclaimer</a>
                    <a href="#">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>
```

---

## 4. financials.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Financials — Vinuspread IR</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="announcement-bar">
        <strong>Q1 2026 Earnings:</strong> Revenue ₩231B (+14% YoY) · Operating Margin 19.2% · <a href="#">Download Presentation →</a>
    </div>

    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="nav-logo">
                <span class="nav-logo-name">Vinuspread</span>
                <span class="nav-logo-sub">Investor Relations</span>
            </a>
            <div class="nav-links">
                <a href="index.html">Overview</a>
                <a href="financials.html" class="active">Financials</a>
                <a href="governance.html">Governance</a>
                <a href="contact.html">Contact IR</a>
            </div>
            <div class="nav-right">
                <div class="nav-stock">
                    <span class="nav-stock-ticker">KRX 034580</span>
                    <span class="nav-stock-price">₩48,200</span>
                    <span class="nav-stock-change">▲ 1.4%</span>
                </div>
                <a href="#" class="btn-nav">Annual Report</a>
            </div>
        </div>
    </nav>

    <div class="page-hero">
        <div class="container">
            <span class="eyebrow">/Financials/</span>
            <h1>Financial Performance<br>& Disclosures</h1>
            <div class="page-hero-meta">
                <div class="page-hero-meta-item">
                    <label>Last Updated</label>
                    <span>May 2, 2026</span>
                </div>
                <div class="page-hero-meta-item">
                    <label>Fiscal Year</label>
                    <span>January 1 – December 31</span>
                </div>
                <div class="page-hero-meta-item">
                    <label>Reporting Standard</label>
                    <span>K-IFRS Consolidated</span>
                </div>
            </div>
        </div>
    </div>

    <div class="stats-row">
        <div class="stat-cell reveal reveal-delay-1">
            <span class="stat-label">FY2025 Revenue</span>
            <span class="stat-num">₩892<em>B</em></span>
            <span class="stat-change">↑ 12.4% YoY</span>
        </div>
        <div class="stat-cell reveal reveal-delay-2">
            <span class="stat-label">Operating Margin</span>
            <span class="stat-num">18.4<em>%</em></span>
            <span class="stat-change">↑ 1.8pp YoY</span>
        </div>
        <div class="stat-cell reveal reveal-delay-3">
            <span class="stat-label">Net Debt / EBITDA</span>
            <span class="stat-num">0.38<em>×</em></span>
            <span class="stat-change">↓ 0.12× YoY</span>
        </div>
        <div class="stat-cell reveal reveal-delay-3">
            <span class="stat-label">Return on Equity</span>
            <span class="stat-num">14.2<em>%</em></span>
            <span class="stat-change">↑ 2.1pp YoY</span>
        </div>
    </div>

    <section class="section">
        <div class="container">
            <div class="section-row">
                <div class="section-header reveal">
                    <span class="section-num">01</span>
                    <span class="eyebrow">/Annual Reports/</span>
                    <h2>Reports & Filings</h2>
                </div>
            </div>
            <div class="doc-list">
                <div class="doc-item reveal">
                    <div class="doc-item-left">
                        <div class="doc-icon">PDF</div>
                        <div>
                            <span class="doc-name">Vinuspread Annual Report 2025</span>
                            <span class="doc-date">Filed March 28, 2026</span>
                        </div>
                    </div>
                    <div class="doc-right">
                        <span class="doc-size">8.4 MB</span>
                        <span class="doc-download">↓ Download</span>
                    </div>
                </div>
                <div class="doc-item reveal">
                    <div class="doc-item-left">
                        <div class="doc-icon">PDF</div>
                        <div>
                            <span class="doc-name">Q1 2026 Earnings Release & Presentation</span>
                            <span class="doc-date">Filed May 2, 2026</span>
                        </div>
                    </div>
                    <div class="doc-right">
                        <span class="doc-size">3.1 MB</span>
                        <span class="doc-download">↓ Download</span>
                    </div>
                </div>
                <div class="doc-item reveal">
                    <div class="doc-item-left">
                        <div class="doc-icon">PDF</div>
                        <div>
                            <span class="doc-name">Vinuspread Annual Report 2024</span>
                            <span class="doc-date">Filed March 30, 2025</span>
                        </div>
                    </div>
                    <div class="doc-right">
                        <span class="doc-size">7.9 MB</span>
                        <span class="doc-download">↓ Download</span>
                    </div>
                </div>
                <div class="doc-item reveal">
                    <div class="doc-item-left">
                        <div class="doc-icon">PDF</div>
                        <div>
                            <span class="doc-name">Q4 2025 Earnings Release & Presentation</span>
                            <span class="doc-date">Filed February 6, 2026</span>
                        </div>
                    </div>
                    <div class="doc-right">
                        <span class="doc-size">2.8 MB</span>
                        <span class="doc-download">↓ Download</span>
                    </div>
                </div>
                <div class="doc-item reveal">
                    <div class="doc-item-left">
                        <div class="doc-icon xlsx">XLSX</div>
                        <div>
                            <span class="doc-name">Financial Data Pack — FY2025 (Excel)</span>
                            <span class="doc-date">Filed March 28, 2026</span>
                        </div>
                    </div>
                    <div class="doc-right">
                        <span class="doc-size">1.2 MB</span>
                        <span class="doc-download">↓ Download</span>
                    </div>
                </div>
                <div class="doc-item reveal">
                    <div class="doc-item-left">
                        <div class="doc-icon pptx">PPTX</div>
                        <div>
                            <span class="doc-name">Investor Day Presentation — September 2025</span>
                            <span class="doc-date">Filed September 18, 2025</span>
                        </div>
                    </div>
                    <div class="doc-right">
                        <span class="doc-size">14.2 MB</span>
                        <span class="doc-download">↓ Download</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section-alt">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-num">02</span>
                <span class="eyebrow">/Income Statement/</span>
                <h2>FY2025 Financial Summary</h2>
                <p>Figures in Korean Won (KRW). Based on K-IFRS consolidated financial statements.</p>
            </div>
            <div class="highlights-grid">
                <div class="highlight-card reveal reveal-delay-1">
                    <span class="highlight-label">Revenue</span>
                    <span class="highlight-num">₩892<em>B</em></span>
                    <span class="highlight-change">↑ 12.4% vs FY2024</span>
                </div>
                <div class="highlight-card reveal reveal-delay-2">
                    <span class="highlight-label">Gross Profit</span>
                    <span class="highlight-num">₩312<em>B</em></span>
                    <span class="highlight-change">Gross Margin 35.0%</span>
                </div>
                <div class="highlight-card reveal reveal-delay-3">
                    <span class="highlight-label">EBITDA</span>
                    <span class="highlight-num">₩198<em>B</em></span>
                    <span class="highlight-change">EBITDA Margin 22.2%</span>
                </div>
                <div class="highlight-card reveal reveal-delay-1">
                    <span class="highlight-label">Operating Income</span>
                    <span class="highlight-num">₩164<em>B</em></span>
                    <span class="highlight-change">↑ 18.7% vs FY2024</span>
                </div>
                <div class="highlight-card reveal reveal-delay-2">
                    <span class="highlight-label">Net Income</span>
                    <span class="highlight-num">₩118<em>B</em></span>
                    <span class="highlight-change">Net Margin 13.2%</span>
                </div>
                <div class="highlight-card reveal reveal-delay-3">
                    <span class="highlight-label">EPS (Basic)</span>
                    <span class="highlight-num">₩8,420</span>
                    <span class="highlight-change">↑ 19.3% vs FY2024</span>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-num">03</span>
                <span class="eyebrow">/IR Calendar/</span>
                <h2>Upcoming IR Events</h2>
            </div>
            <div class="timeline">
                <div class="timeline-item upcoming reveal">
                    <div class="timeline-date">Aug 7, 2026</div>
                    <div class="timeline-body">
                        <h4>Q2 2026 Earnings Release</h4>
                        <p>Second quarter results and management conference call. Webcast link to be provided 48 hours in advance.</p>
                    </div>
                </div>
                <div class="timeline-item upcoming reveal">
                    <div class="timeline-date">Sep 18, 2026</div>
                    <div class="timeline-body">
                        <h4>Vinuspread Capital Markets Day</h4>
                        <p>Full-day investor event in Seoul covering Vision 2030 update, segment deep dives, and management Q&A.</p>
                    </div>
                </div>
                <div class="timeline-item upcoming reveal">
                    <div class="timeline-date">Nov 6, 2026</div>
                    <div class="timeline-body">
                        <h4>Q3 2026 Earnings Release</h4>
                        <p>Third quarter results and full-year 2026 guidance update.</p>
                    </div>
                </div>
                <div class="timeline-item reveal">
                    <div class="timeline-date">Mar 2027</div>
                    <div class="timeline-body">
                        <h4>FY2026 Annual Results</h4>
                        <p>Full-year 2026 results. Annual Report and proxy materials to follow.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="alert-section">
        <div class="container">
            <div class="alert-inner">
                <div class="alert-text">
                    <h3>Get notified of new filings.</h3>
                    <p>Earnings releases, dividend announcements, and regulatory disclosures delivered to your inbox.</p>
                </div>
                <form class="alert-form">
                    <input type="email" class="alert-input" placeholder="Enter your email address">
                    <button type="submit" class="alert-submit">Subscribe →</button>
                </form>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-brand">
                    <span class="footer-brand-logo">Vinuspread</span>
                    <span class="footer-brand-sub">Investor Relations</span>
                    <p>Vinuspread Co., Ltd. is listed on the Korea Exchange (KRX: 034580). All financial disclosures comply with K-IFRS.</p>
                </div>
                <div class="footer-col"><h5>IR Pages</h5><nav><a href="index.html">Overview</a><a href="financials.html">Financials</a><a href="governance.html">Governance</a><a href="contact.html">Contact IR</a></nav></div>
                <div class="footer-col"><h5>Reports</h5><nav><a href="#">Annual Report 2025</a><a href="#">Q1 2026 Earnings</a><a href="#">ESG Report</a><a href="#">Investor Presentation</a></nav></div>
                <div class="footer-col"><h5>Contact</h5><nav><a href="contact.html">IR Inquiries</a><a href="#">Press Releases</a><a href="#">Shareholder FAQ</a><a href="#">KRX Filing</a></nav></div>
            </div>
            <div class="footer-disclaimer"><p>This website contains forward-looking statements. Past performance is not indicative of future results. All figures in KRW, K-IFRS consolidated basis.</p></div>
            <div class="footer-bottom">
                <span>© 2026 Vinuspread Co., Ltd. All rights reserved. KRX: 034580</span>
                <div class="footer-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Use</a><a href="#">Disclaimer</a></div>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>
```

---

## 5. governance.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Governance — Vinuspread IR</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="announcement-bar">
        <strong>AGM 2026</strong> — Annual General Meeting held March 20, 2026. All resolutions passed. <a href="#">View Results →</a>
    </div>

    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="nav-logo">
                <span class="nav-logo-name">Vinuspread</span>
                <span class="nav-logo-sub">Investor Relations</span>
            </a>
            <div class="nav-links">
                <a href="index.html">Overview</a>
                <a href="financials.html">Financials</a>
                <a href="governance.html" class="active">Governance</a>
                <a href="contact.html">Contact IR</a>
            </div>
            <div class="nav-right">
                <div class="nav-stock">
                    <span class="nav-stock-ticker">KRX 034580</span>
                    <span class="nav-stock-price">₩48,200</span>
                    <span class="nav-stock-change">▲ 1.4%</span>
                </div>
                <a href="#" class="btn-nav">Annual Report</a>
            </div>
        </div>
    </nav>

    <div class="page-hero">
        <div class="container">
            <span class="eyebrow">/Governance/</span>
            <h1>Corporate Governance<br>& Leadership</h1>
            <div class="page-hero-meta">
                <div class="page-hero-meta-item">
                    <label>Board Size</label>
                    <span>8 Directors</span>
                </div>
                <div class="page-hero-meta-item">
                    <label>Independence</label>
                    <span>75% Independent</span>
                </div>
                <div class="page-hero-meta-item">
                    <label>Avg. Tenure</label>
                    <span>6.2 Years</span>
                </div>
                <div class="page-hero-meta-item">
                    <label>Gender Diversity</label>
                    <span>38% Women</span>
                </div>
            </div>
        </div>
    </div>

    <section class="section">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-num">01</span>
                <span class="eyebrow">/Board of Directors/</span>
                <h2>Board of Directors</h2>
                <p>Vinuspread is governed by a board of eight directors, six of whom are independent. The board meets quarterly and oversees strategy, risk, and executive performance.</p>
            </div>
            <div class="board-grid">
                <div class="board-card reveal reveal-delay-1">
                    <img class="board-img" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="">
                    <div class="board-card-body">
                        <span class="board-badge executive">Executive</span>
                        <div class="board-name">James Kwon</div>
                        <div class="board-role">Chairman & CEO</div>
                        <div class="board-since">Director since 2009</div>
                    </div>
                </div>
                <div class="board-card reveal reveal-delay-2">
                    <img class="board-img" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" alt="">
                    <div class="board-card-body">
                        <span class="board-badge">Independent</span>
                        <div class="board-name">Elena Brandt</div>
                        <div class="board-role">Independent Director<br>Chair, Audit Committee</div>
                        <div class="board-since">Director since 2018</div>
                    </div>
                </div>
                <div class="board-card reveal reveal-delay-3">
                    <img class="board-img" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" alt="">
                    <div class="board-card-body">
                        <span class="board-badge executive">Executive</span>
                        <div class="board-name">Daniel Park</div>
                        <div class="board-role">CFO & Executive Director</div>
                        <div class="board-since">Director since 2015</div>
                    </div>
                </div>
                <div class="board-card reveal reveal-delay-3">
                    <img class="board-img" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" alt="">
                    <div class="board-card-body">
                        <span class="board-badge">Independent</span>
                        <div class="board-name">Sarah Lee</div>
                        <div class="board-role">Independent Director<br>Chair, ESG Committee</div>
                        <div class="board-since">Director since 2021</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section-alt">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-num">02</span>
                <span class="eyebrow">/Governance Documents/</span>
                <h2>Policies & Charters</h2>
            </div>
            <div class="doc-list">
                <div class="doc-item reveal">
                    <div class="doc-item-left">
                        <div class="doc-icon">PDF</div>
                        <div>
                            <span class="doc-name">Articles of Incorporation</span>
                            <span class="doc-date">Last amended March 2025</span>
                        </div>
                    </div>
                    <div class="doc-right">
                        <span class="doc-size">420 KB</span>
                        <span class="doc-download">↓ Download</span>
                    </div>
                </div>
                <div class="doc-item reveal">
                    <div class="doc-item-left">
                        <div class="doc-icon">PDF</div>
                        <div>
                            <span class="doc-name">Board Charter & Committee Terms of Reference</span>
                            <span class="doc-date">Adopted January 2024</span>
                        </div>
                    </div>
                    <div class="doc-right">
                        <span class="doc-size">680 KB</span>
                        <span class="doc-download">↓ Download</span>
                    </div>
                </div>
                <div class="doc-item reveal">
                    <div class="doc-item-left">
                        <div class="doc-icon">PDF</div>
                        <div>
                            <span class="doc-name">Code of Ethics & Business Conduct</span>
                            <span class="doc-date">Last revised June 2025</span>
                        </div>
                    </div>
                    <div class="doc-right">
                        <span class="doc-size">510 KB</span>
                        <span class="doc-download">↓ Download</span>
                    </div>
                </div>
                <div class="doc-item reveal">
                    <div class="doc-item-left">
                        <div class="doc-icon">PDF</div>
                        <div>
                            <span class="doc-name">Dividend Policy Statement</span>
                            <span class="doc-date">Adopted March 2022</span>
                        </div>
                    </div>
                    <div class="doc-right">
                        <span class="doc-size">180 KB</span>
                        <span class="doc-download">↓ Download</span>
                    </div>
                </div>
                <div class="doc-item reveal">
                    <div class="doc-item-left">
                        <div class="doc-icon">PDF</div>
                        <div>
                            <span class="doc-name">ESG & Sustainability Report 2025</span>
                            <span class="doc-date">Published April 2026</span>
                        </div>
                    </div>
                    <div class="doc-right">
                        <span class="doc-size">5.2 MB</span>
                        <span class="doc-download">↓ Download</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="split">
                <div class="split-body reveal">
                    <span class="section-num">03</span>
                    <span class="eyebrow">/Shareholder Structure/</span>
                    <h2>Ownership &<br>Share Information</h2>
                    <p>Vinuspread has 14,018,420 shares outstanding. Major shareholders include the founding Kwon family (31.4%), domestic institutional investors (28.2%), and foreign institutional investors (24.6%).</p>
                    <p>The company maintains a treasury share policy with buyback authority approved annually at the AGM. No single non-founding shareholder holds more than 5%.</p>
                    <a href="contact.html" class="btn-arrow">Contact IR Team</a>
                </div>
                <div class="split-img reveal reveal-delay-1">
                    <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80" alt="Shareholder">
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-brand">
                    <span class="footer-brand-logo">Vinuspread</span>
                    <span class="footer-brand-sub">Investor Relations</span>
                    <p>Vinuspread Co., Ltd. is listed on the Korea Exchange (KRX: 034580). All financial disclosures comply with K-IFRS.</p>
                </div>
                <div class="footer-col"><h5>IR Pages</h5><nav><a href="index.html">Overview</a><a href="financials.html">Financials</a><a href="governance.html">Governance</a><a href="contact.html">Contact IR</a></nav></div>
                <div class="footer-col"><h5>Reports</h5><nav><a href="#">Annual Report 2025</a><a href="#">Q1 2026 Earnings</a><a href="#">ESG Report</a><a href="#">Investor Presentation</a></nav></div>
                <div class="footer-col"><h5>Contact</h5><nav><a href="contact.html">IR Inquiries</a><a href="#">Press Releases</a><a href="#">Shareholder FAQ</a><a href="#">KRX Filing</a></nav></div>
            </div>
            <div class="footer-disclaimer"><p>This website contains forward-looking statements. Past performance is not indicative of future results. All figures in KRW, K-IFRS consolidated basis.</p></div>
            <div class="footer-bottom">
                <span>© 2026 Vinuspread Co., Ltd. All rights reserved. KRX: 034580</span>
                <div class="footer-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Use</a><a href="#">Disclaimer</a></div>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>
```

---

## 6. contact.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact IR — Vinuspread</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="announcement-bar">
        <strong>IR Response Time:</strong> We aim to respond to all inquiries within 2 business days.
    </div>

    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="nav-logo">
                <span class="nav-logo-name">Vinuspread</span>
                <span class="nav-logo-sub">Investor Relations</span>
            </a>
            <div class="nav-links">
                <a href="index.html">Overview</a>
                <a href="financials.html">Financials</a>
                <a href="governance.html">Governance</a>
                <a href="contact.html" class="active">Contact IR</a>
            </div>
            <div class="nav-right">
                <div class="nav-stock">
                    <span class="nav-stock-ticker">KRX 034580</span>
                    <span class="nav-stock-price">₩48,200</span>
                    <span class="nav-stock-change">▲ 1.4%</span>
                </div>
                <a href="#" class="btn-nav">Annual Report</a>
            </div>
        </div>
    </nav>

    <div class="page-hero">
        <div class="container">
            <span class="eyebrow">/Contact/</span>
            <h1>IR Team<br>& Inquiries</h1>
            <div class="page-hero-meta">
                <div class="page-hero-meta-item">
                    <label>Response Time</label>
                    <span>Within 2 Business Days</span>
                </div>
                <div class="page-hero-meta-item">
                    <label>IR Hotline</label>
                    <span>+82-2-3480-7200</span>
                </div>
                <div class="page-hero-meta-item">
                    <label>Email</label>
                    <span>ir@vinuspread.com</span>
                </div>
            </div>
        </div>
    </div>

    <section class="section">
        <div class="container">
            <div class="contact-layout">
                <div class="contact-info reveal">
                    <span class="eyebrow">/IR Contact/</span>
                    <h2>Get in touch with our Investor Relations team.</h2>
                    <p>Our IR team is available to assist institutional investors, analysts, and individual shareholders with financial inquiries, meeting requests, and disclosure questions.</p>
                    <div class="contact-detail">
                        <div class="contact-detail-item">
                            <label>IR Department</label>
                            <span>Vinuspread Investor Relations</span>
                        </div>
                        <div class="contact-detail-item">
                            <label>Email</label>
                            <span>ir@vinuspread.com</span>
                        </div>
                        <div class="contact-detail-item">
                            <label>Phone</label>
                            <span>+82-2-3480-7200</span>
                        </div>
                        <div class="contact-detail-item">
                            <label>Address</label>
                            <span>23F Vinuspread Tower<br>123 Teheran-ro, Gangnam-gu<br>Seoul 06134, Korea</span>
                        </div>
                        <div class="contact-detail-item">
                            <label>KRX Stock Code</label>
                            <span>034580</span>
                        </div>
                    </div>
                </div>
                <div class="reveal reveal-delay-1">
                    <span class="eyebrow">/Send Inquiry/</span>
                    <form>
                        <div class="form-row">
                            <div class="form-group">
                                <label>First Name</label>
                                <input type="text" placeholder="John">
                            </div>
                            <div class="form-group">
                                <label>Last Name</label>
                                <input type="text" placeholder="Smith">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Company / Institution</label>
                            <input type="text" placeholder="Company name">
                        </div>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="john@company.com">
                        </div>
                        <div class="form-group">
                            <label>Investor Type</label>
                            <div class="select-wrapper">
                                <select>
                                    <option value="">Select type</option>
                                    <option>Institutional Investor</option>
                                    <option>Sell-Side Analyst</option>
                                    <option>Individual / Retail Investor</option>
                                    <option>Media</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Subject</label>
                            <div class="select-wrapper">
                                <select>
                                    <option value="">Select subject</option>
                                    <option>Earnings & Financials</option>
                                    <option>Meeting Request</option>
                                    <option>Annual Report / Documents</option>
                                    <option>Dividend Inquiry</option>
                                    <option>ESG / Governance</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Message</label>
                            <textarea placeholder="Please describe your inquiry in detail."></textarea>
                        </div>
                        <button type="submit" class="btn-primary">Submit Inquiry →</button>
                        <p class="form-note">We aim to respond to all IR inquiries within 2 business days. For urgent matters, please call our IR hotline directly at +82-2-3480-7200.</p>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-brand">
                    <span class="footer-brand-logo">Vinuspread</span>
                    <span class="footer-brand-sub">Investor Relations</span>
                    <p>Vinuspread Co., Ltd. is listed on the Korea Exchange (KRX: 034580). All financial disclosures comply with K-IFRS.</p>
                </div>
                <div class="footer-col"><h5>IR Pages</h5><nav><a href="index.html">Overview</a><a href="financials.html">Financials</a><a href="governance.html">Governance</a><a href="contact.html">Contact IR</a></nav></div>
                <div class="footer-col"><h5>Reports</h5><nav><a href="#">Annual Report 2025</a><a href="#">Q1 2026 Earnings</a><a href="#">ESG Report</a><a href="#">Investor Presentation</a></nav></div>
                <div class="footer-col"><h5>Contact</h5><nav><a href="contact.html">IR Inquiries</a><a href="#">Press Releases</a><a href="#">Shareholder FAQ</a><a href="#">KRX Filing</a></nav></div>
            </div>
            <div class="footer-disclaimer"><p>This website contains forward-looking statements. Past performance is not indicative of future results. All figures in KRW, K-IFRS consolidated basis.</p></div>
            <div class="footer-bottom">
                <span>© 2026 Vinuspread Co., Ltd. All rights reserved. KRX: 034580</span>
                <div class="footer-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Use</a><a href="#">Disclaimer</a></div>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>
```

---

## 완료 확인

- [x] `style.css` — Playfair Display + Inter 듀얼 폰트, 골드 포인트, page-hero, esg-strip, alert-section, 뉴스태그 색상, reveal 애니메이션 (완료: 2026-05-03 15:04)
- [x] `main.js` — 카운트업, 스크롤 reveal, IR 알림 폼, 주가 mock 업데이트 (완료: 2026-05-03 15:04)
- [x] `index.html` — 공지 배너 → 네이비 히어로(서체 serif) → 주가 스트립 → 재무 하이라이트 → 사업부문(아이콘+매출) → 전략 split → ESG 네이비 스트립 → IR 뉴스(태그 컬러) → 알림 구독 → 면책 footer (완료: 2026-05-03 15:04)
- [x] `financials.html` — 공지 배너 → page-hero(메타정보) → KPI 4칸 → doc-list(다운로드 버튼) → 손익 요약 → 타임라인(upcoming 강조) → 알림 구독 (완료: 2026-05-03 15:04)
- [x] `governance.html` — 공지 배너 → page-hero(이사회 메타) → board-grid(Executive/Independent 배지) → 정관 doc-list → 주주구성 split (완료: 2026-05-03 15:04)
- [x] `contact.html` — 공지 배너 → page-hero(연락처 메타) → 연락처+커스텀 셀렉트 폼 (완료: 2026-05-03 15:04)
- [x] **지시된 6개 파일 외 다른 파일은 일체 수정하지 않았는가** (확인 완료)

### 📝 추가 수정 내역 (2026-05-03 15:05)
- [x] **폰트 스타일 전면 수정**: 사용자 피드백을 반영하여 모든 헤딩 서체를 `Playfair Display (Serif)`에서 `Inter (Sans-serif)`로 변경.
  - 굵기(800)와 자간(-0.02em)을 조정하여 모던하고 신뢰감 있는 분위기 조성.
  - 모든 서브페이지(`financials`, `governance`, `contact`)의 타이틀 서체 일괄 적용 완료.

### 📝 추가 고도화 내역 (2026-05-03 16:40)
- [x] **프리미엄 비주얼 시스템**: Glassmorphism(유리 질감) 및 깊이감 있는 그라데이션 레이어를 적용하여 신뢰감 있고 현대적인 디자인으로 업그레이드.
- [x] **재미있고 고급스러운 인터랙션**:
  - **Scroll Progress**: 페이지 상단에 골드 톤의 스크롤 진행 바를 추가하여 탐색 편의성 증대.
  - **Staggered Reveal**: 그리드 및 리스트 아이템이 스크롤에 따라 순차적으로 리드미컬하게 등장하는 효과 구현.
  - **KPI Count-up**: 주요 지표(매출, 이익 등)가 나타날 때 숫자가 부드럽게 올라가는 카운트업 애니메이션 적용.
  - **Live Stock Flash**: 실시간 주가 변동을 시각적으로 보여주는 플래시 애니메이션 시스템 구축.
- [x] **레이아웃 정교화**: 픽셀 단위의 간격 조정 및 타이포그래피 최적화 완료.

### 📝 디자인 시스템 최종 복구 및 정밀 튜닝 (2026-05-04 21:11)
- [x] **Premium Elite 가이드라인 준수**: `feedback.md` 내 최신 지침에 따라 `Inter` 단일 서체 시스템(Sans-serif)으로의 전면 복원 및 타이포그래피 최적화 완료.
- [x] **고도화 기능 통합**: Glassmorphism 효과, Staggered Reveal, KPI 카운트업, 실시간 주가 티커 등 모든 인터랙티브 요소의 작동 무결성 확보.
- [x] **전체 페이지 브라우저 검수**: 4개 핵심 페이지(`index`, `financials`, `governance`, `contact`)의 레이아웃, 색상 대비 및 반응형 동작 최종 검증 완료.

**최종 업데이트: 2026-05-04 21:11**
**작업자: Karina (Senior Full-Stack Engineer)**


