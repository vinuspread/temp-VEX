# VINUS Motors — Implementation Instructions for Gemma

아래 코드를 그대로 각 파일에 작성하십시오. **지시된 파일 외에는 절대 수정하지 마십시오.**

생성할 파일 목록:
1. `style.css`
2. `main.js`
3. `index.html`
4. `models.html`
5. `detail.html`
6. `about.html`

---

## 디자인 원칙 (반드시 준수)

- 배경: 전 페이지 순수 블랙 `#0A0A0A`
- 섹션마다 드라마틱한 차량 클로즈업 이미지가 주인공
- 텍스트는 극도로 미니멀: eyebrow + 헤드라인 + 1~2줄 body + 작은 CTA만
- 보더, 카드 테두리, 그림자, 배경색 구분 없음 — 전부 블랙
- 교차 레이아웃: 텍스트 좌/이미지 우 → 이미지 좌/텍스트 우 반복
- CTA 버튼은 작고 understated하게 — 절대 크고 굵게 만들지 말 것
- 섹션 간 여백으로만 구분, 구분선/배경색 변경 없음

---

## 1. style.css

```css
/*
  VINUS Motors
  Pure black. Image-driven. Minimal text.
  Font: Inter
*/

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

:root {
    --font: 'Inter', sans-serif;
    --black: #0A0A0A;
    --white: #FFFFFF;
    --muted: rgba(255,255,255,0.4);
    --border: rgba(255,255,255,0.08);
    --accent: #C9A84C;
    --transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    --container: 1440px;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
    font-family: var(--font);
    background: var(--black);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
}
a { color: inherit; text-decoration: none; transition: var(--transition); }
img { display: block; max-width: 100%; }

.container { max-width: var(--container); margin: 0 auto; padding: 0 60px; }

/* ===== NAVBAR ===== */
.navbar {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 900;
    height: 68px;
    display: flex;
    align-items: center;
    transition: background 0.4s ease;
}
.navbar.scrolled { background: rgba(10,10,10,0.9); backdrop-filter: blur(16px); }
.navbar .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.nav-logo {
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.25em;
    text-transform: uppercase;
}
.nav-logo span { color: var(--accent); }
.nav-links {
    display: flex;
    gap: 2.5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.nav-links a {
    font-size: 0.72rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--muted);
    transition: var(--transition);
}
.nav-links a:hover, .nav-links a.active { color: var(--white); }
.nav-right { display: flex; gap: 1.5rem; align-items: center; }
.nav-right a {
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--muted);
    transition: var(--transition);
}
.nav-right a:hover { color: var(--white); }
.btn-cta-small {
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    padding: 0.5rem 1.2rem;
    border: 1px solid rgba(255,255,255,0.25);
    background: transparent;
    color: var(--white);
    cursor: pointer;
    transition: var(--transition);
    font-family: var(--font);
}
.btn-cta-small:hover { border-color: var(--white); }

/* ===== EYEBROW ===== */
.eyebrow {
    display: block;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: var(--muted);
    margin-bottom: 1.2rem;
}
.eyebrow-gold { color: var(--accent); }

/* ===== BUTTONS ===== */
.btn-arrow {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--white);
    transition: var(--transition);
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font);
    padding: 0;
}
.btn-arrow::after {
    content: '→';
    transition: transform 0.3s ease;
}
.btn-arrow:hover::after { transform: translateX(6px); }
.btn-outline-sm {
    display: inline-block;
    font-size: 0.68rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    padding: 0.65rem 1.6rem;
    border: 1px solid rgba(255,255,255,0.3);
    color: var(--white);
    transition: var(--transition);
    background: transparent;
    cursor: pointer;
    font-family: var(--font);
}
.btn-outline-sm:hover { border-color: var(--white); }
.btn-gold-sm {
    display: inline-block;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    padding: 0.65rem 1.6rem;
    background: var(--accent);
    color: var(--black);
    transition: var(--transition);
    cursor: pointer;
    border: none;
    font-family: var(--font);
}
.btn-gold-sm:hover { opacity: 0.85; }

/* ===== HERO ===== */
.hero {
    position: relative;
    height: 100vh;
    min-height: 680px;
    overflow: hidden;
}
.hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 40%;
}
.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(105deg, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.2) 60%, transparent 100%);
}
.hero-content {
    position: absolute;
    bottom: 10vh;
    left: 0;
    right: 0;
}
.hero-content h1 {
    font-size: clamp(3.5rem, 6.5vw, 7rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 0.95;
    margin-bottom: 1.8rem;
    max-width: 640px;
}
.hero-content p {
    font-size: 0.9rem;
    color: var(--muted);
    line-height: 1.7;
    max-width: 360px;
    margin-bottom: 2.5rem;
    font-weight: 300;
}
.hero-btns { display: flex; gap: 1.2rem; align-items: center; }
.hero-price {
    font-size: 0.7rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-top: 2rem;
}
.hero-price strong { color: var(--white); font-size: 1rem; font-weight: 700; }

/* ===== SPLIT SECTIONS ===== */
/* text left / image right */
.split-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 620px;
}
.split-section.reverse { direction: rtl; }
.split-section.reverse > * { direction: ltr; }
.split-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6rem 5rem;
}
.split-body h2 {
    font-size: clamp(2rem, 3.5vw, 3.2rem);
    font-weight: 800;
    letter-spacing: -0.025em;
    line-height: 1.1;
    margin-bottom: 1.2rem;
}
.split-body p {
    font-size: 0.88rem;
    color: var(--muted);
    line-height: 1.8;
    font-weight: 300;
    margin-bottom: 2.5rem;
    max-width: 380px;
}
.split-img {
    overflow: hidden;
}
.split-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}
.split-section:hover .split-img img { transform: scale(1.04); }

/* ===== STATS ROW ===== */
.stats-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}
.stat-cell {
    padding: 3rem 0;
    text-align: center;
    border-right: 1px solid var(--border);
}
.stat-cell:last-child { border-right: none; }
.stat-num {
    display: block;
    font-size: clamp(2rem, 3.5vw, 3.5rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    margin-bottom: 0.5rem;
}
.stat-num span { font-size: 0.5em; color: var(--accent); font-weight: 700; }
.stat-label {
    font-size: 0.65rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--muted);
}

/* ===== FULLBLEED SECTION ===== */
.fullbleed {
    position: relative;
    height: 75vh;
    min-height: 500px;
    overflow: hidden;
}
.fullbleed img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.fullbleed-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.1) 55%, transparent 100%);
}
.fullbleed-content {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 4rem 60px;
}
.fullbleed-content h2 {
    font-size: clamp(2rem, 4vw, 4rem);
    font-weight: 900;
    letter-spacing: -0.025em;
    line-height: 1.05;
    margin-bottom: 1rem;
    max-width: 600px;
}
.fullbleed-content p {
    font-size: 0.88rem;
    color: var(--muted);
    font-weight: 300;
    margin-bottom: 2rem;
    max-width: 400px;
}

/* ===== APP SECTION ===== */
.app-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 700px;
    align-items: center;
}
.app-mockup {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    background: #111111;
}
.app-mockup img {
    width: 260px;
    filter: drop-shadow(0 40px 80px rgba(0,0,0,0.8));
}
.app-body {
    padding: 5rem;
}
.app-body h2 {
    font-size: clamp(2rem, 3vw, 2.8rem);
    font-weight: 800;
    letter-spacing: -0.025em;
    line-height: 1.1;
    margin-bottom: 1.2rem;
}
.app-body p {
    font-size: 0.88rem;
    color: var(--muted);
    line-height: 1.8;
    font-weight: 300;
    margin-bottom: 2.5rem;
    max-width: 380px;
}
.app-features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2.5rem;
}
.app-feature {
    font-size: 0.78rem;
    color: var(--muted);
    padding-left: 1.2rem;
    border-left: 2px solid var(--border);
    line-height: 1.5;
}
.app-feature strong { color: var(--white); display: block; margin-bottom: 0.1rem; }

/* ===== TESTIMONIALS STRIP ===== */
.testimonials-strip {
    padding: 5rem 0;
    border-top: 1px solid var(--border);
    overflow: hidden;
}
.testimonials-strip .container { margin-bottom: 3rem; }
.testimonials-track {
    display: flex;
    gap: 1px;
    background: var(--border);
}
.testimonial-card {
    flex: 0 0 380px;
    background: var(--black);
    padding: 2.5rem;
    border-right: 1px solid var(--border);
}
.testimonial-card:last-child { border-right: none; }
.testimonial-rating {
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    color: var(--accent);
    margin-bottom: 1.2rem;
}
.testimonial-text {
    font-size: 0.88rem;
    color: rgba(255,255,255,0.65);
    line-height: 1.75;
    font-weight: 300;
    font-style: italic;
    margin-bottom: 1.5rem;
}
.testimonial-name {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}
.testimonial-model {
    font-size: 0.68rem;
    color: var(--accent);
    margin-top: 0.2rem;
}

/* ===== NEWS SECTION ===== */
.news-section {
    padding: 6rem 0;
    border-top: 1px solid var(--border);
}
.news-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 3rem;
}
.news-header h2 {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 800;
    letter-spacing: -0.02em;
}
.news-grid {
    display: grid;
    grid-template-columns: 1.3fr 1fr 1fr;
    gap: 1px;
    background: var(--border);
}
.news-card {
    background: var(--black);
    overflow: hidden;
}
.news-card-img {
    overflow: hidden;
    height: 220px;
}
.news-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s var(--transition);
}
.news-card:hover .news-card-img img { transform: scale(1.06); }
.news-card-body { padding: 1.8rem; }
.news-tag {
    font-size: 0.62rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--accent);
    margin-bottom: 0.8rem;
    display: block;
}
.news-card h3 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 0.6rem;
}
.news-date {
    font-size: 0.68rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

/* ===== MODELS PAGE ===== */
.models-hero {
    padding-top: 68px;
    height: 50vh;
    min-height: 400px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
}
.models-hero img {
    position: absolute;
    inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
}
.models-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.3) 60%, transparent 100%);
}
.models-hero-content {
    position: relative;
    padding-bottom: 4rem;
}
.models-hero-content h1 {
    font-size: clamp(2.5rem, 5vw, 5rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
}
.filter-bar {
    display: flex;
    gap: 0;
    border-bottom: 1px solid var(--border);
    padding: 0 60px;
}
.filter-btn {
    background: none;
    border: none;
    padding: 1.2rem 1.8rem;
    font-family: var(--font);
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--muted);
    cursor: pointer;
    border-bottom: 1px solid transparent;
    margin-bottom: -1px;
    transition: var(--transition);
    white-space: nowrap;
}
.filter-btn:hover { color: var(--white); }
.filter-btn.active { color: var(--white); border-bottom-color: var(--accent); }
.models-grid-section { padding: 4rem 0 8rem; }
.models-list {
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: var(--border);
}
.model-row {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    background: var(--black);
    min-height: 440px;
    overflow: hidden;
}
.model-row.reverse { direction: rtl; }
.model-row.reverse > * { direction: ltr; }
.model-row-img {
    overflow: hidden;
}
.model-row-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s cubic-bezier(0.16,1,0.3,1);
}
.model-row:hover .model-row-img img { transform: scale(1.04); }
.model-row-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 5rem;
}
.model-series-tag {
    font-size: 0.62rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: var(--accent);
    margin-bottom: 1rem;
}
.model-row-body h2 {
    font-size: clamp(2.5rem, 4vw, 4.5rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 0.95;
    margin-bottom: 1rem;
}
.model-row-body .tagline {
    font-size: 0.88rem;
    color: var(--muted);
    font-weight: 300;
    line-height: 1.7;
    margin-bottom: 2.5rem;
    max-width: 320px;
}
.model-row-specs {
    display: flex;
    gap: 2.5rem;
    padding: 1.5rem 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    margin-bottom: 2rem;
}
.row-spec-val {
    display: block;
    font-size: 1.4rem;
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 1;
}
.row-spec-val em { font-style: normal; font-size: 0.6em; color: var(--accent); font-weight: 700; }
.row-spec-label {
    font-size: 0.6rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--muted);
    margin-top: 0.3rem;
}
.model-price-tag {
    font-size: 0.7rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 1.5rem;
}
.model-price-tag strong { color: var(--white); font-size: 1.1rem; font-weight: 800; margin-right: 0.3rem; }

/* ===== DETAIL PAGE ===== */
.detail-hero {
    height: 100vh;
    min-height: 680px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
}
.detail-hero > img {
    position: absolute;
    inset: 0; width: 100%; height: 100%;
    object-fit: cover;
}
.detail-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.4) 45%, rgba(10,10,10,0.1) 100%);
}
.detail-hero-content {
    position: relative;
    padding-bottom: 5rem;
    width: 100%;
}
.detail-model-name {
    font-size: clamp(5rem, 12vw, 12rem);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 0.9;
    margin-bottom: 1rem;
    display: block;
}
.detail-tagline {
    font-size: 1rem;
    color: var(--muted);
    font-weight: 300;
    margin-bottom: 3rem;
}
.detail-hero-row {
    display: flex;
    gap: 3rem;
    align-items: center;
}
.detail-spec-pill {
    display: flex;
    flex-direction: column;
}
.detail-spec-pill .val {
    font-size: 1.6rem;
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 1;
}
.detail-spec-pill .val em { font-style: normal; font-size: 0.55em; color: var(--accent); }
.detail-spec-pill .lbl {
    font-size: 0.6rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--muted);
    margin-top: 0.3rem;
}
.detail-divider { width: 1px; height: 40px; background: var(--border); }
.detail-body { padding: 6rem 0; }
.detail-layout {
    display: grid;
    grid-template-columns: 1fr 360px;
    gap: 6rem;
}
.detail-desc h2 {
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 1.5rem;
}
.detail-desc p {
    font-size: 0.9rem;
    color: var(--muted);
    line-height: 1.85;
    font-weight: 300;
    margin-bottom: 1.2rem;
}
.detail-actions { display: flex; gap: 1rem; margin-top: 2.5rem; }
.spec-panel { }
.spec-panel-title {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    color: var(--accent);
    margin-bottom: 1.5rem;
}
.spec-list { list-style: none; }
.spec-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.9rem 0;
    border-bottom: 1px solid var(--border);
    font-size: 0.82rem;
}
.spec-list li:first-child { border-top: 1px solid var(--border); }
.spec-list li span:first-child { color: var(--muted); font-weight: 400; }
.spec-list li span:last-child { font-weight: 600; }
.price-block {
    margin-top: 2.5rem;
    padding: 2rem 0;
    border-top: 1px solid var(--border);
}
.price-block .from { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.2em; color: var(--muted); display: block; margin-bottom: 0.4rem; }
.price-block .amount { font-size: 2.2rem; font-weight: 900; letter-spacing: -0.02em; display: block; margin-bottom: 1.5rem; }
.detail-gallery {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2px;
    height: 560px;
    margin-bottom: 6rem;
}
.detail-gallery img { width: 100%; height: 100%; object-fit: cover; }
.detail-gallery img:first-child { grid-row: 1 / 3; }

/* ===== ABOUT PAGE ===== */
.about-hero {
    height: 90vh;
    min-height: 600px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
}
.about-hero > img {
    position: absolute;
    inset: 0; width: 100%; height: 100%;
    object-fit: cover;
    object-position: center 50%;
}
.about-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.1) 100%);
}
.about-hero-content {
    position: relative;
    padding-bottom: 5rem;
    max-width: 700px;
}
.about-hero-content h1 {
    font-size: clamp(3rem, 6vw, 6rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 0.95;
    margin-bottom: 1.5rem;
}
.about-hero-content p {
    font-size: 0.9rem;
    color: var(--muted);
    font-weight: 300;
    line-height: 1.75;
    max-width: 480px;
}
.milestones {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--border);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}
.milestone {
    background: var(--black);
    padding: 3rem 2.5rem;
}
.milestone-year {
    font-size: 0.62rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    color: var(--accent);
    margin-bottom: 1.2rem;
}
.milestone h3 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
    line-height: 1.3;
}
.milestone p {
    font-size: 0.8rem;
    color: var(--muted);
    line-height: 1.65;
    font-weight: 300;
}
.leadership-section { padding: 6rem 0; border-top: 1px solid var(--border); }
.leadership-header { margin-bottom: 4rem; }
.leadership-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--border);
}
.leader {
    background: var(--black);
    overflow: hidden;
}
.leader img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    object-position: top;
    filter: grayscale(20%);
    transition: filter 0.6s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1);
}
.leader:hover img { filter: grayscale(0%); transform: scale(1.03); }
.leader-info { padding: 1.8rem; }
.leader-info h4 { font-size: 0.95rem; font-weight: 700; margin-bottom: 0.2rem; }
.leader-role { font-size: 0.65rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent); }

/* ===== FOOTER ===== */
.footer {
    border-top: 1px solid var(--border);
    padding: 5rem 0 3rem;
}
.footer-top {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
    gap: 5rem;
    padding-bottom: 4rem;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border);
}
.footer-logo {
    font-size: 0.9rem;
    font-weight: 800;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    display: block;
    margin-bottom: 1rem;
}
.footer-logo span { color: var(--accent); }
.footer-brand p {
    font-size: 0.8rem;
    color: var(--muted);
    line-height: 1.7;
    font-weight: 300;
    max-width: 240px;
}
.footer-col h5 {
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    color: var(--muted);
    margin-bottom: 1.5rem;
}
.footer-col nav { display: flex; flex-direction: column; gap: 0.75rem; }
.footer-col nav a {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.45);
    font-weight: 400;
    transition: color 0.3s ease;
}
.footer-col nav a:hover { color: var(--white); }
.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.7rem;
    color: rgba(255,255,255,0.2);
}
.footer-legal { display: flex; gap: 2rem; }
.footer-legal a { color: rgba(255,255,255,0.2); transition: color 0.3s ease; }
.footer-legal a:hover { color: var(--muted); }

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
    .container { padding: 0 32px; }
    .filter-bar { padding: 0 32px; }
    .fullbleed-content { padding: 3rem 32px; }
    .split-section { grid-template-columns: 1fr; min-height: auto; }
    .split-section.reverse { direction: ltr; }
    .split-img { height: 400px; }
    .split-body { padding: 4rem 3rem; }
    .app-section { grid-template-columns: 1fr; }
    .app-mockup { padding: 3rem; }
    .stats-row { grid-template-columns: repeat(2, 1fr); }
    .detail-layout { grid-template-columns: 1fr; }
    .detail-gallery { height: auto; grid-template-columns: 1fr; grid-template-rows: auto; }
    .detail-gallery img { height: 280px; }
    .detail-gallery img:first-child { grid-row: auto; }
    .milestones { grid-template-columns: repeat(2, 1fr); }
    .leadership-grid { grid-template-columns: repeat(2, 1fr); }
    .footer-top { grid-template-columns: 1fr 1fr; gap: 3rem; }
    .model-row { grid-template-columns: 1fr; min-height: auto; }
    .model-row.reverse { direction: ltr; }
    .model-row-img { height: 300px; }
    .model-row-body { padding: 3rem; }
}
@media (max-width: 768px) {
    .container { padding: 0 20px; }
    .nav-links { display: none; }
    .filter-bar { padding: 0 20px; }
    .fullbleed-content { padding: 2.5rem 20px; }
    .stats-row { grid-template-columns: repeat(2, 1fr); }
    .milestones { grid-template-columns: 1fr; }
    .leadership-grid { grid-template-columns: 1fr; }
    .news-grid { grid-template-columns: 1fr; }
    .testimonials-track { flex-wrap: nowrap; overflow-x: auto; }
    .footer-top { grid-template-columns: 1fr; gap: 2.5rem; }
    .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
    .detail-hero-row { flex-wrap: wrap; gap: 1.5rem; }
    .about-hero-content h1 { font-size: 3rem; }
}
```

---

## 2. main.js

```javascript
document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 60);
        }, { passive: true });
    }

    // 2. Model filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modelRows = document.querySelectorAll('.model-row[data-type]');
    if (filterBtns.length && modelRows.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const f = btn.dataset.filter;
                modelRows.forEach(row => {
                    row.style.display = (f === 'all' || row.dataset.type === f) ? '' : 'none';
                });
            });
        });
    }

    // 3. Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }
        });
    });

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
    <title>VINUS Motors — Drive the Future</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="nav-logo">VINUS<span>.</span></a>
            <div class="nav-links">
                <a href="models.html">Models</a>
                <a href="#technology">Technology</a>
                <a href="about.html">About</a>
                <a href="#">Configure</a>
            </div>
            <div class="nav-right">
                <a href="#">EN</a>
                <button class="btn-cta-small">Test Drive</button>
            </div>
        </div>
    </nav>

    <!-- Hero -->
    <section class="hero">
        <img class="hero-img" src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=2000&q=80" alt="VINUS EV9">
        <div class="hero-overlay"></div>
        <div class="hero-content container">
            <span class="eyebrow eyebrow-gold">New — EV9 Electric SUV</span>
            <h1>The electric<br>car era is<br>upon us.</h1>
            <p>Zero emissions. Infinite ambition. The VINUS EV9 redefines what a luxury vehicle can be.</p>
            <div class="hero-btns">
                <a href="detail.html" class="btn-gold-sm">Explore EV9</a>
                <a href="models.html" class="btn-arrow">All Models</a>
            </div>
            <p class="hero-price">From <strong>$79,900</strong></p>
        </div>
    </section>

    <!-- Stats -->
    <div class="stats-row">
        <div class="stat-cell">
            <span class="stat-num">530<span>km</span></span>
            <span class="stat-label">Range (WLTP)</span>
        </div>
        <div class="stat-cell">
            <span class="stat-num">4.2<span>s</span></span>
            <span class="stat-label">0–100 km/h</span>
        </div>
        <div class="stat-cell">
            <span class="stat-num">22<span>min</span></span>
            <span class="stat-label">10–80% Charge</span>
        </div>
        <div class="stat-cell">
            <span class="stat-num">800<span>V</span></span>
            <span class="stat-label">Architecture</span>
        </div>
    </div>

    <!-- Technology split — text left, image right -->
    <div class="split-section" id="technology">
        <div class="split-body">
            <span class="eyebrow">VINUS Technology</span>
            <h2>Where technology<br>meets design.</h2>
            <p>Our proprietary AI platform integrates real-time road analysis, predictive suspension response, and adaptive powertrain management — delivering a driving experience that feels less engineered and more alive.</p>
            <a href="about.html" class="btn-arrow">Discover More</a>
        </div>
        <div class="split-img">
            <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80" alt="VINUS Technology">
        </div>
    </div>

    <!-- Full-bleed — range -->
    <div class="fullbleed">
        <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=2000&q=80" alt="Unmatched Range">
        <div class="fullbleed-overlay"></div>
        <div class="fullbleed-content container">
            <span class="eyebrow">Battery & Range</span>
            <h2>Unmatched range<br>and efficiency benefits.</h2>
            <p>111.2 kWh battery. 530km on a single charge. And when you do need to top up, 100km of range in under five minutes.</p>
            <a href="detail.html" class="btn-arrow">View Specs</a>
        </div>
    </div>

    <!-- Split — image left, charging right -->
    <div class="split-section reverse">
        <div class="split-body">
            <span class="eyebrow">Fast Charging</span>
            <h2>Fast charging<br>and long battery.</h2>
            <p>The 800V electrical architecture enables 350kW DC fast charging. From 10 to 80 percent in just 22 minutes. The only wait is your coffee order.</p>
            <a href="detail.html" class="btn-arrow">Charging Network</a>
        </div>
        <div class="split-img">
            <img src="https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&q=80" alt="Fast Charging">
        </div>
    </div>

    <!-- App section -->
    <div class="app-section">
        <div class="app-mockup">
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80" alt="VINUS App">
        </div>
        <div class="app-body">
            <span class="eyebrow">VINUS Connected</span>
            <h2>Seamless dual<br>motor driving<br>experience.</h2>
            <p>Monitor charging, pre-condition the cabin, unlock remotely, and track your range in real time — all from the VINUS app.</p>
            <div class="app-features">
                <div class="app-feature">
                    <strong>Remote Monitoring</strong>
                    Battery, range, and charging status at a glance.
                </div>
                <div class="app-feature">
                    <strong>Climate Pre-conditioning</strong>
                    Set the perfect cabin temperature before you arrive.
                </div>
                <div class="app-feature">
                    <strong>OTA Updates</strong>
                    Your car gets better overnight, while you sleep.
                </div>
            </div>
            <a href="#" class="btn-arrow">Download App</a>
        </div>
    </div>

    <!-- Full-bleed interior -->
    <div class="fullbleed">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2000&q=80" alt="All New Interior">
        <div class="fullbleed-overlay"></div>
        <div class="fullbleed-content container">
            <span class="eyebrow">Interior</span>
            <h2>All new interior.</h2>
            <p>A 30-inch panoramic display. Haptic controls that learn your preferences. Leather-free premium materials throughout.</p>
            <a href="detail.html" class="btn-arrow">Explore Interior</a>
        </div>
    </div>

    <!-- Testimonials -->
    <section class="testimonials-strip">
        <div class="container">
            <span class="eyebrow">Owner Stories</span>
        </div>
        <div class="testimonials-track">
            <div class="testimonial-card">
                <div class="testimonial-rating">★★★★★</div>
                <p class="testimonial-text">"Unmatched power and performance. The EV9 corners like it reads your mind. I've done track days in supercars that couldn't match the precision of this car."</p>
                <div class="testimonial-name">James K.</div>
                <div class="testimonial-model">VINUS EV9 · Obsidian Black</div>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-rating">★★★★★</div>
                <p class="testimonial-text">"Incredible battery life. I've driven German, Italian, and Japanese luxury for twenty years. The EV9 is the first car that made me feel like the future had arrived."</p>
                <div class="testimonial-name">Sarah M.</div>
                <div class="testimonial-model">VINUS EV9 · Arctic White</div>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-rating">★★★★★</div>
                <p class="testimonial-text">"Best electric car I've ever driven. Seven seats, 530km range, 22-minute fast charge. I didn't believe a family car could feel this aspirational."</p>
                <div class="testimonial-name">Daniel P.</div>
                <div class="testimonial-model">VINUS X5 · Deep Forest</div>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-rating">★★★★★</div>
                <p class="testimonial-text">"Fast electric range and incredible performance. The GT7 is everything I wanted and nothing I expected. Track-ready and road-perfect."</p>
                <div class="testimonial-name">Elena R.</div>
                <div class="testimonial-model">VINUS GT7 · Midnight Silver</div>
            </div>
        </div>
    </section>

    <!-- News -->
    <section class="news-section">
        <div class="container">
            <div class="news-header">
                <h2>Our latest news</h2>
                <a href="#" class="btn-arrow">All News</a>
            </div>
            <div class="news-grid">
                <div class="news-card">
                    <div class="news-card-img">
                        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" alt="">
                    </div>
                    <div class="news-card-body">
                        <span class="news-tag">Electric</span>
                        <h3>The ultimate guide to electric car charging: Everything you need to know</h3>
                        <span class="news-date">May 3, 2026</span>
                    </div>
                </div>
                <div class="news-card">
                    <div class="news-card-img">
                        <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80" alt="">
                    </div>
                    <div class="news-card-body">
                        <span class="news-tag">Technology</span>
                        <h3>VINUS 2026: The most technologically advanced model year in history</h3>
                        <span class="news-date">April 28, 2026</span>
                    </div>
                </div>
                <div class="news-card">
                    <div class="news-card-img">
                        <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80" alt="">
                    </div>
                    <div class="news-card-body">
                        <span class="news-tag">Design</span>
                        <h3>Behind the EV9: How our designers reimagined the luxury SUV from scratch</h3>
                        <span class="news-date">April 15, 2026</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-brand">
                    <span class="footer-logo">VINUS<span>.</span></span>
                    <p>Engineering excellence for those who demand more from every journey. Crafted with precision. Driven with purpose.</p>
                </div>
                <div class="footer-col">
                    <h5>Models</h5>
                    <nav>
                        <a href="detail.html">EV9</a>
                        <a href="detail.html">GT7</a>
                        <a href="detail.html">X5</a>
                        <a href="detail.html">S3</a>
                        <a href="models.html">All Models</a>
                    </nav>
                </div>
                <div class="footer-col">
                    <h5>Experience</h5>
                    <nav>
                        <a href="#">Configurator</a>
                        <a href="#">Test Drive</a>
                        <a href="#">Find a Dealer</a>
                        <a href="#">Financing</a>
                    </nav>
                </div>
                <div class="footer-col">
                    <h5>Company</h5>
                    <nav>
                        <a href="about.html">About VINUS</a>
                        <a href="#">Sustainability</a>
                        <a href="#">Press</a>
                        <a href="#">Careers</a>
                    </nav>
                </div>
            </div>
            <div class="footer-bottom">
                <span>© 2026 VINUS Motors. All rights reserved.</span>
                <div class="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Cookie Settings</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>
```

---

## 4. models.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Models — VINUS Motors</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <nav class="navbar scrolled">
        <div class="container">
            <a href="index.html" class="nav-logo">VINUS<span>.</span></a>
            <div class="nav-links">
                <a href="models.html" class="active">Models</a>
                <a href="index.html#technology">Technology</a>
                <a href="about.html">About</a>
                <a href="#">Configure</a>
            </div>
            <div class="nav-right">
                <a href="#">EN</a>
                <button class="btn-cta-small">Test Drive</button>
            </div>
        </div>
    </nav>

    <div class="models-hero">
        <img src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=2000&q=80" alt="Models">
        <div class="models-hero-overlay"></div>
        <div class="models-hero-content container">
            <span class="eyebrow eyebrow-gold">Complete Lineup</span>
            <h1>Every model.<br>One standard.</h1>
        </div>
    </div>

    <div class="filter-bar">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="electric">Electric</button>
        <button class="filter-btn" data-filter="sport">Sport</button>
        <button class="filter-btn" data-filter="suv">SUV</button>
        <button class="filter-btn" data-filter="sedan">Sedan</button>
    </div>

    <main class="models-grid-section container">
        <div class="models-list">

            <div class="model-row" data-type="electric">
                <div class="model-row-img">
                    <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80" alt="EV9">
                </div>
                <div class="model-row-body">
                    <div class="model-series-tag">Electric SUV</div>
                    <h2>EV9</h2>
                    <p class="tagline">Full-size electric flagship. 530km range, 800V charging, room for seven.</p>
                    <div class="model-row-specs">
                        <div>
                            <span class="row-spec-val">530<em>km</em></span>
                            <span class="row-spec-label">Range</span>
                        </div>
                        <div>
                            <span class="row-spec-val">4.2<em>s</em></span>
                            <span class="row-spec-label">0–100</span>
                        </div>
                        <div>
                            <span class="row-spec-val">380<em>kW</em></span>
                            <span class="row-spec-label">Power</span>
                        </div>
                    </div>
                    <p class="model-price-tag">From <strong>$79,900</strong></p>
                    <a href="detail.html" class="btn-arrow">Explore EV9</a>
                </div>
            </div>

            <div class="model-row reverse" data-type="sport">
                <div class="model-row-img">
                    <img src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&q=80" alt="GT7">
                </div>
                <div class="model-row-body">
                    <div class="model-series-tag">Sport Coupe</div>
                    <h2>GT7</h2>
                    <p class="tagline">Track-tuned twin-turbo V8. Obsidian elegance with supercar performance.</p>
                    <div class="model-row-specs">
                        <div>
                            <span class="row-spec-val">510<em>hp</em></span>
                            <span class="row-spec-label">Power</span>
                        </div>
                        <div>
                            <span class="row-spec-val">3.8<em>s</em></span>
                            <span class="row-spec-label">0–100</span>
                        </div>
                        <div>
                            <span class="row-spec-val">302<em>km/h</em></span>
                            <span class="row-spec-label">Top Speed</span>
                        </div>
                    </div>
                    <p class="model-price-tag">From <strong>$112,000</strong></p>
                    <a href="detail.html" class="btn-arrow">Explore GT7</a>
                </div>
            </div>

            <div class="model-row" data-type="suv">
                <div class="model-row-img">
                    <img src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=1200&q=80" alt="X5">
                </div>
                <div class="model-row-body">
                    <div class="model-series-tag">Luxury SUV</div>
                    <h2>X5</h2>
                    <p class="tagline">Seven-seat luxury benchmark. The SUV that refuses to compromise.</p>
                    <div class="model-row-specs">
                        <div>
                            <span class="row-spec-val">340<em>hp</em></span>
                            <span class="row-spec-label">Power</span>
                        </div>
                        <div>
                            <span class="row-spec-val">5.1<em>s</em></span>
                            <span class="row-spec-label">0–100</span>
                        </div>
                        <div>
                            <span class="row-spec-val">7<em>seats</em></span>
                            <span class="row-spec-label">Capacity</span>
                        </div>
                    </div>
                    <p class="model-price-tag">From <strong>$68,500</strong></p>
                    <a href="detail.html" class="btn-arrow">Explore X5</a>
                </div>
            </div>

            <div class="model-row reverse" data-type="sedan">
                <div class="model-row-img">
                    <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80" alt="S3">
                </div>
                <div class="model-row-body">
                    <div class="model-series-tag">Executive Sedan</div>
                    <h2>S3</h2>
                    <p class="tagline">Commanding presence. Effortless power. The executive sedan redefined.</p>
                    <div class="model-row-specs">
                        <div>
                            <span class="row-spec-val">420<em>hp</em></span>
                            <span class="row-spec-label">Power</span>
                        </div>
                        <div>
                            <span class="row-spec-val">4.5<em>s</em></span>
                            <span class="row-spec-label">0–100</span>
                        </div>
                        <div>
                            <span class="row-spec-val">AWD</span>
                            <span class="row-spec-label">Drive</span>
                        </div>
                    </div>
                    <p class="model-price-tag">From <strong>$88,000</strong></p>
                    <a href="detail.html" class="btn-arrow">Explore S3</a>
                </div>
            </div>

        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-brand">
                    <span class="footer-logo">VINUS<span>.</span></span>
                    <p>Engineering excellence for those who demand more from every journey.</p>
                </div>
                <div class="footer-col"><h5>Models</h5><nav><a href="detail.html">EV9</a><a href="detail.html">GT7</a><a href="detail.html">X5</a><a href="detail.html">S3</a></nav></div>
                <div class="footer-col"><h5>Experience</h5><nav><a href="#">Configurator</a><a href="#">Test Drive</a><a href="#">Find a Dealer</a></nav></div>
                <div class="footer-col"><h5>Company</h5><nav><a href="about.html">About</a><a href="#">Sustainability</a><a href="#">Press</a></nav></div>
            </div>
            <div class="footer-bottom">
                <span>© 2026 VINUS Motors. All rights reserved.</span>
                <div class="footer-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Use</a></div>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>
```

---

## 5. detail.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EV9 — VINUS Motors</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="nav-logo">VINUS<span>.</span></a>
            <div class="nav-links">
                <a href="models.html">Models</a>
                <a href="index.html#technology">Technology</a>
                <a href="about.html">About</a>
                <a href="#">Configure</a>
            </div>
            <div class="nav-right">
                <a href="#">EN</a>
                <button class="btn-cta-small">Test Drive</button>
            </div>
        </div>
    </nav>

    <div class="detail-hero">
        <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=2000&q=80" alt="VINUS EV9">
        <div class="detail-hero-overlay"></div>
        <div class="detail-hero-content container">
            <span class="eyebrow eyebrow-gold">Electric SUV · 2026</span>
            <span class="detail-model-name">EV9</span>
            <p class="detail-tagline">The electric flagship. Redefined.</p>
            <div class="detail-hero-row">
                <div class="detail-spec-pill">
                    <span class="val">530<em>km</em></span>
                    <span class="lbl">Range (WLTP)</span>
                </div>
                <div class="detail-divider"></div>
                <div class="detail-spec-pill">
                    <span class="val">4.2<em>s</em></span>
                    <span class="lbl">0–100 km/h</span>
                </div>
                <div class="detail-divider"></div>
                <div class="detail-spec-pill">
                    <span class="val">380<em>kW</em></span>
                    <span class="lbl">Peak Output</span>
                </div>
                <div class="detail-divider"></div>
                <div class="detail-spec-pill">
                    <span class="val">22<em>min</em></span>
                    <span class="lbl">10–80% Charge</span>
                </div>
            </div>
        </div>
    </div>

    <main>
        <div class="container">
            <div class="detail-gallery">
                <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1400&q=80" alt="">
                <img src="https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80" alt="">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="">
            </div>

            <div class="detail-body">
                <div class="detail-layout">
                    <div class="detail-desc">
                        <span class="eyebrow">Overview</span>
                        <h2>Power that moves you.<br>Intelligence that guides you.</h2>
                        <p>The VINUS EV9 is the culmination of a decade of electric vehicle research — a full-size luxury SUV that delivers supercar performance, genuine seven-seat utility, and a driving range that makes range anxiety obsolete.</p>
                        <p>Built on our dedicated EV architecture, the EV9 uses a dual-motor AWD system producing 380kW of peak power. The 800V architecture enables 350kW DC fast charging, adding 100km of range in under five minutes.</p>
                        <p>Inside, a 30-inch panoramic display spans the entire dashboard. Our VINUS AI assistant learns your preferences over time. Every surface designed without leather. Every material chosen for its future.</p>
                        <div class="detail-actions">
                            <a href="#" class="btn-gold-sm">Configure Your EV9</a>
                            <a href="#" class="btn-outline-sm">Book a Test Drive</a>
                        </div>
                    </div>
                    <aside class="spec-panel">
                        <div class="spec-panel-title">Full Specifications</div>
                        <ul class="spec-list">
                            <li><span>Drivetrain</span><span>Dual Motor AWD</span></li>
                            <li><span>Peak Power</span><span>380 kW (510 hp)</span></li>
                            <li><span>Peak Torque</span><span>700 Nm</span></li>
                            <li><span>0–100 km/h</span><span>4.2 seconds</span></li>
                            <li><span>Top Speed</span><span>250 km/h</span></li>
                            <li><span>Range (WLTP)</span><span>530 km</span></li>
                            <li><span>Battery</span><span>111.2 kWh</span></li>
                            <li><span>DC Charging</span><span>350 kW</span></li>
                            <li><span>10–80% Charge</span><span>22 minutes</span></li>
                            <li><span>Seating</span><span>6 or 7</span></li>
                            <li><span>Cargo</span><span>333 + 88L frunk</span></li>
                        </ul>
                        <div class="price-block">
                            <span class="from">Starting From</span>
                            <span class="amount">$79,900</span>
                            <a href="#" class="btn-gold-sm" style="display:block;text-align:center;margin-bottom:0.8rem;">Configure Now</a>
                            <a href="#" class="btn-outline-sm" style="display:block;text-align:center;">Request Brochure</a>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-brand">
                    <span class="footer-logo">VINUS<span>.</span></span>
                    <p>Engineering excellence for those who demand more from every journey.</p>
                </div>
                <div class="footer-col"><h5>Models</h5><nav><a href="detail.html">EV9</a><a href="detail.html">GT7</a><a href="detail.html">X5</a><a href="detail.html">S3</a></nav></div>
                <div class="footer-col"><h5>Experience</h5><nav><a href="#">Configurator</a><a href="#">Test Drive</a><a href="#">Find a Dealer</a></nav></div>
                <div class="footer-col"><h5>Company</h5><nav><a href="about.html">About</a><a href="#">Sustainability</a><a href="#">Press</a></nav></div>
            </div>
            <div class="footer-bottom">
                <span>© 2026 VINUS Motors. All rights reserved.</span>
                <div class="footer-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Use</a></div>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>
```

---

## 6. about.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About — VINUS Motors</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="nav-logo">VINUS<span>.</span></a>
            <div class="nav-links">
                <a href="models.html">Models</a>
                <a href="index.html#technology">Technology</a>
                <a href="about.html" class="active">About</a>
                <a href="#">Configure</a>
            </div>
            <div class="nav-right">
                <a href="#">EN</a>
                <button class="btn-cta-small">Test Drive</button>
            </div>
        </div>
    </nav>

    <div class="about-hero">
        <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=2000&q=80" alt="VINUS Manufacturing">
        <div class="about-hero-overlay"></div>
        <div class="about-hero-content container">
            <span class="eyebrow eyebrow-gold">Est. 2009 · Seoul & Munich</span>
            <h1>We build cars<br>for people who<br>refuse to settle.</h1>
            <p>VINUS Motors was founded on a single conviction: that performance and responsibility are not opposites.</p>
        </div>
    </div>

    <main>

        <!-- Mission split -->
        <div class="split-section">
            <div class="split-body">
                <span class="eyebrow">Our Mission</span>
                <h2>To engineer the most desirable vehicles<br>in the world.</h2>
                <p>We started VINUS in 2009 with a factory, twelve engineers, and an argument: that the electric vehicle had been undersold by every manufacturer that had attempted it. We were right. The next fifteen years proved it.</p>
                <a href="models.html" class="btn-arrow">See Our Models</a>
            </div>
            <div class="split-img">
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80" alt="">
            </div>
        </div>

        <!-- Milestones -->
        <div class="milestones">
            <div class="milestone">
                <div class="milestone-year">2009</div>
                <h3>Founded</h3>
                <p>VINUS Motors established in Seoul with a 12-person engineering team and a single prototype.</p>
            </div>
            <div class="milestone">
                <div class="milestone-year">2013</div>
                <h3>First Production Vehicle</h3>
                <p>The S1 sedan enters production. 0–100 in 4.8s. 420km range. The world takes notice.</p>
            </div>
            <div class="milestone">
                <div class="milestone-year">2018</div>
                <h3>800V Architecture</h3>
                <p>VINUS becomes the first mass-market EV brand to deploy 800V charging as standard across the lineup.</p>
            </div>
            <div class="milestone">
                <div class="milestone-year">2024</div>
                <h3>World Car of the Year</h3>
                <p>The EV9 wins World Car of the Year, World Electric Vehicle, and World Car Design simultaneously.</p>
            </div>
        </div>

        <!-- Philosophy split reverse -->
        <div class="split-section reverse">
            <div class="split-body">
                <span class="eyebrow">Our Philosophy</span>
                <h2>Less noise.<br>More signal.</h2>
                <p>Every VINUS is designed to do one thing better than any competitor: communicate. The relationship between driver and machine should feel like instinct, not instruction. Our vehicles respond before you've finished the thought.</p>
            </div>
            <div class="split-img">
                <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80" alt="">
            </div>
        </div>

        <!-- Leadership -->
        <section class="leadership-section">
            <div class="container">
                <div class="leadership-header">
                    <span class="eyebrow">Leadership</span>
                    <h2 style="font-size:clamp(2rem,3vw,3rem);font-weight:800;letter-spacing:-0.02em;margin-top:0.5rem;">The people<br>behind the cars.</h2>
                </div>
                <div class="leadership-grid">
                    <div class="leader">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" alt="">
                        <div class="leader-info">
                            <h4>James Kwon</h4>
                            <div class="leader-role">Founder & CEO</div>
                        </div>
                    </div>
                    <div class="leader">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" alt="">
                        <div class="leader-info">
                            <h4>Elena Brandt</h4>
                            <div class="leader-role">Chief Design Officer</div>
                        </div>
                    </div>
                    <div class="leader">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80" alt="">
                        <div class="leader-info">
                            <h4>Daniel Park</h4>
                            <div class="leader-role">Chief Technology Officer</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-brand">
                    <span class="footer-logo">VINUS<span>.</span></span>
                    <p>Engineering excellence for those who demand more from every journey.</p>
                </div>
                <div class="footer-col"><h5>Models</h5><nav><a href="detail.html">EV9</a><a href="detail.html">GT7</a><a href="detail.html">X5</a><a href="detail.html">S3</a></nav></div>
                <div class="footer-col"><h5>Experience</h5><nav><a href="#">Configurator</a><a href="#">Test Drive</a><a href="#">Find a Dealer</a></nav></div>
                <div class="footer-col"><h5>Company</h5><nav><a href="about.html">About</a><a href="#">Sustainability</a><a href="#">Press</a></nav></div>
            </div>
            <div class="footer-bottom">
                <span>© 2026 VINUS Motors. All rights reserved.</span>
                <div class="footer-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Use</a></div>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>
```

---

## 완료 확인

- [ ] `style.css` 생성됨
- [ ] `main.js` 생성됨
- [ ] `index.html` — 히어로 → stats bar → split(기술) → fullbleed(레인지) → split reverse(충전) → 앱섹션 → fullbleed(인테리어) → 테스티모니얼 스트립 → 뉴스
- [ ] `models.html` — 히어로 → 필터바 → 모델 로우 리스트 (이미지+텍스트 교차)
- [ ] `detail.html` — 풀스크린 히어로(모델명 초대형) → 갤러리 그리드 → 설명+스펙테이블
- [ ] `about.html` — 풀스크린 히어로 → split(미션) → 마일스톤 4칸 → split reverse(철학) → 리더십 그리드
- [ ] **지시된 6개 파일 외 다른 파일은 일체 수정하지 않았는가**
