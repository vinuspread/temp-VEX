# Vinus Times — 신문사 템플릿 제작 지시

---

## 작업 규칙 (반드시 준수)

- 아래 코드 블록을 각 파일에 **그대로** 복사하여 새 파일을 생성한다.
- 파일 내용을 임의로 수정하거나 축약하지 않는다.
- 작업 완료 후 반드시 각 파일을 열어 내용이 정확히 저장됐는지 확인한다.

---

## 생성할 파일 목록

- `style.css`
- `main.js`
- `index.html`
- `article.html`
- `section.html`
- `about.html`

---

## 1. style.css

```css
/*
  Vinus Times Design System
  Traditional Newspaper Aesthetic
  Headings: Playfair Display | UI: Inter | Body: Georgia
*/

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap');

:root {
    --font-heading: 'Playfair Display', Georgia, serif;
    --font-body: Georgia, 'Times New Roman', serif;
    --font-ui: 'Inter', sans-serif;

    --color-bg: #FFFFFF;
    --color-text: #111111;
    --color-muted: #555555;
    --color-border: #DDDDDD;
    --color-surface: #F7F7F5;
    --color-accent: #C41E3A;
    --color-accent-dark: #9B1528;
    --white: #FFFFFF;

    --container: 1280px;
    --transition: all 0.2s ease;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
    font-family: var(--font-body);
    background: var(--color-bg);
    color: var(--color-text);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
}
a { color: inherit; text-decoration: none; transition: var(--transition); }
img { display: block; max-width: 100%; }

/* ===== UTILITIES ===== */
.container { max-width: var(--container); margin: 0 auto; padding: 0 2rem; }
.flex-between { display: flex; justify-content: space-between; align-items: center; }

/* ===== BREAKING NEWS TICKER ===== */
.breaking-bar {
    background: var(--color-accent);
    color: var(--white);
    font-family: var(--font-ui);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    height: 36px;
    display: flex;
    align-items: center;
    overflow: hidden;
}
.breaking-label {
    background: var(--color-accent-dark);
    padding: 0 1.2rem;
    height: 100%;
    display: flex;
    align-items: center;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.72rem;
    flex-shrink: 0;
}
.breaking-track {
    display: flex;
    animation: ticker 30s linear infinite;
    white-space: nowrap;
    padding-left: 2rem;
}
.breaking-track span { padding-right: 5rem; }
@keyframes ticker {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

/* ===== MASTHEAD ===== */
.masthead {
    border-bottom: 3px solid var(--color-text);
    padding: 1.5rem 0 1rem;
}
.masthead-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.8rem;
}
.masthead-meta {
    font-family: var(--font-ui);
    font-size: 0.75rem;
    color: var(--color-muted);
}
.masthead-title {
    font-family: var(--font-heading);
    font-size: clamp(3rem, 6vw, 5.5rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 1;
    text-align: center;
    flex: 1;
}
.masthead-edition {
    font-family: var(--font-ui);
    font-size: 0.75rem;
    color: var(--color-muted);
    text-align: right;
}

/* ===== NAVBAR ===== */
.navbar {
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    background: var(--color-bg);
    position: sticky;
    top: 0;
    z-index: 100;
}
.navbar .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
}
.nav-sections {
    display: flex;
    gap: 0;
    height: 100%;
}
.nav-sections a {
    font-family: var(--font-ui);
    font-size: 0.78rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    border-right: 1px solid var(--color-border);
    color: var(--color-text);
    transition: var(--transition);
}
.nav-sections a:first-child { border-left: 1px solid var(--color-border); }
.nav-sections a:hover { background: var(--color-text); color: var(--white); }
.nav-sections a.active { background: var(--color-text); color: var(--white); }
.nav-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
}
.nav-actions a {
    font-family: var(--font-ui);
    font-size: 0.78rem;
    font-weight: 600;
}
.btn-subscribe {
    background: var(--color-accent);
    color: var(--white);
    padding: 0.4rem 1rem;
    font-family: var(--font-ui);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border: none;
    cursor: pointer;
    transition: var(--transition);
}
.btn-subscribe:hover { background: var(--color-accent-dark); }

/* ===== SECTION LABEL ===== */
.section-label {
    font-family: var(--font-ui);
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--color-accent);
    display: block;
    margin-bottom: 0.6rem;
}
.section-divider {
    border: none;
    border-top: 2px solid var(--color-text);
    margin-bottom: 1.5rem;
}
.section-divider-sm {
    border: none;
    border-top: 1px solid var(--color-border);
    margin: 1.2rem 0;
}

/* ===== HOMEPAGE LAYOUT ===== */

/* Hero — Top Story */
.hero-story {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 0;
    border-bottom: 2px solid var(--color-text);
    padding: 2rem 0;
}
.hero-main {
    padding-right: 2rem;
    border-right: 1px solid var(--color-border);
}
.hero-sidebar {
    padding-left: 2rem;
}
.hero-img {
    width: 100%;
    height: 420px;
    object-fit: cover;
    margin-bottom: 1.2rem;
}
.hero-headline {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 0.8rem;
}
.hero-headline a:hover { color: var(--color-accent); }
.hero-deck {
    font-size: 1.05rem;
    color: var(--color-muted);
    line-height: 1.6;
    margin-bottom: 1rem;
}
.byline {
    font-family: var(--font-ui);
    font-size: 0.78rem;
    color: var(--color-muted);
    font-weight: 500;
}
.byline strong { color: var(--color-text); }

/* Sidebar stories */
.sidebar-story {
    padding-bottom: 1.2rem;
    margin-bottom: 1.2rem;
    border-bottom: 1px solid var(--color-border);
}
.sidebar-story:last-child { border-bottom: none; margin-bottom: 0; }
.sidebar-story h3 {
    font-family: var(--font-heading);
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 0.4rem;
}
.sidebar-story h3 a:hover { color: var(--color-accent); }
.sidebar-story p {
    font-size: 0.85rem;
    color: var(--color-muted);
    line-height: 1.5;
}

/* Mid Grid — 3 columns */
.mid-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border-bottom: 2px solid var(--color-text);
    padding: 2rem 0;
}
.mid-article {
    padding: 0 1.5rem;
    border-right: 1px solid var(--color-border);
}
.mid-article:first-child { padding-left: 0; }
.mid-article:last-child { padding-right: 0; border-right: none; }
.mid-article img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 0.8rem;
}
.mid-article h3 {
    font-family: var(--font-heading);
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: 0.5rem;
}
.mid-article h3 a:hover { color: var(--color-accent); }
.mid-article p {
    font-size: 0.88rem;
    color: var(--color-muted);
    line-height: 1.6;
}

/* Bottom — 4 column grid + sidebar */
.bottom-section {
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 2rem;
    padding: 2rem 0;
    border-bottom: 1px solid var(--color-border);
}
.bottom-main h2 {
    font-family: var(--font-heading);
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
}
.latest-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}
.latest-item {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 1rem;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid var(--color-border);
}
.latest-item:last-child { border-bottom: none; }
.latest-item img { width: 100px; height: 70px; object-fit: cover; }
.latest-item h4 {
    font-family: var(--font-heading);
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 0.3rem;
}
.latest-item h4 a:hover { color: var(--color-accent); }
.latest-item .byline { font-size: 0.72rem; }

/* Opinion sidebar */
.opinion-sidebar h2 {
    font-family: var(--font-heading);
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
}
.opinion-item {
    padding-bottom: 1.2rem;
    margin-bottom: 1.2rem;
    border-bottom: 1px solid var(--color-border);
}
.opinion-item:last-child { border-bottom: none; }
.opinion-author {
    font-family: var(--font-ui);
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-muted);
    margin-bottom: 0.3rem;
}
.opinion-item h4 {
    font-family: var(--font-heading);
    font-style: italic;
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.4;
}
.opinion-item h4 a:hover { color: var(--color-accent); }

/* ===== ARTICLE PAGE ===== */
.article-header { padding: 2rem 0 1.5rem; border-bottom: 1px solid var(--color-border); margin-bottom: 2rem; }
.article-section-label { margin-bottom: 1rem; }
.article-headline {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 1rem;
}
.article-deck {
    font-size: 1.15rem;
    color: var(--color-muted);
    line-height: 1.6;
    margin-bottom: 1.2rem;
    font-style: italic;
}
.article-meta {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    font-family: var(--font-ui);
    font-size: 0.78rem;
    color: var(--color-muted);
    padding-top: 1rem;
    border-top: 1px solid var(--color-border);
}
.article-layout {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 3rem;
}
.article-body { max-width: 680px; }
.article-body .lead-img {
    width: 100%;
    height: 460px;
    object-fit: cover;
    margin-bottom: 0.6rem;
}
.img-caption {
    font-family: var(--font-ui);
    font-size: 0.75rem;
    color: var(--color-muted);
    margin-bottom: 2rem;
    border-left: 3px solid var(--color-border);
    padding-left: 0.8rem;
}
.article-body p {
    font-size: 1.05rem;
    line-height: 1.85;
    margin-bottom: 1.5rem;
    color: var(--color-text);
}
.article-body h2 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    margin: 2rem 0 1rem;
}
.article-body blockquote {
    border-left: 4px solid var(--color-accent);
    padding: 0.5rem 0 0.5rem 1.5rem;
    margin: 2rem 0;
    font-family: var(--font-heading);
    font-style: italic;
    font-size: 1.3rem;
    line-height: 1.5;
    color: var(--color-text);
}
.article-sidebar { padding-top: 0; }
.sidebar-widget { margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 2px solid var(--color-text); }
.sidebar-widget h3 {
    font-family: var(--font-ui);
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--color-border);
}
.related-item {
    display: flex;
    gap: 0.8rem;
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--color-border);
}
.related-item:last-child { border-bottom: none; }
.related-item img { width: 70px; height: 50px; object-fit: cover; flex-shrink: 0; }
.related-item h4 {
    font-family: var(--font-heading);
    font-size: 0.88rem;
    font-weight: 700;
    line-height: 1.3;
}
.related-item h4 a:hover { color: var(--color-accent); }

/* ===== SECTION PAGE ===== */
.section-hero {
    background: var(--color-text);
    color: var(--white);
    padding: 3rem 0;
    margin-bottom: 0;
}
.section-hero h1 {
    font-family: var(--font-heading);
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 900;
    letter-spacing: -0.02em;
}
.section-hero p {
    font-family: var(--font-ui);
    font-size: 0.85rem;
    opacity: 0.6;
    margin-top: 0.5rem;
    color: var(--white);
}
.section-content { padding: 2rem 0; }
.section-top-story {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--color-text);
}
.section-top-story img { width: 100%; height: 320px; object-fit: cover; }
.section-top-story h2 {
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.8rem;
}
.section-top-story h2 a:hover { color: var(--color-accent); }
.section-top-story p { font-size: 0.95rem; color: var(--color-muted); line-height: 1.6; }
.section-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 2rem;
}
.section-card { padding-bottom: 1.5rem; border-bottom: 1px solid var(--color-border); }
.section-card img { width: 100%; height: 180px; object-fit: cover; margin-bottom: 0.8rem; }
.section-card h3 {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 0.4rem;
}
.section-card h3 a:hover { color: var(--color-accent); }
.section-card p { font-size: 0.85rem; color: var(--color-muted); }

/* Pagination */
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    padding: 2rem 0;
    border-top: 1px solid var(--color-border);
}
.page-btn {
    width: 36px; height: 36px;
    border: 1px solid var(--color-border);
    background: transparent;
    font-family: var(--font-ui);
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: var(--transition);
    color: var(--color-text);
}
.page-btn:hover, .page-btn.active { background: var(--color-text); color: var(--white); border-color: var(--color-text); }
.page-btn.dots { border: none; cursor: default; }
.page-btn.dots:hover { background: transparent; color: var(--color-text); }

/* ===== ABOUT PAGE ===== */
.about-hero {
    background: var(--color-text);
    color: var(--white);
    padding: 5rem 0;
    text-align: center;
}
.about-hero h1 {
    font-family: var(--font-heading);
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 900;
    margin-bottom: 1rem;
}
.about-hero p {
    font-family: var(--font-ui);
    font-size: 1rem;
    opacity: 0.65;
    max-width: 600px;
    margin: 0 auto;
    color: var(--white);
}
.about-section { padding: 4rem 0; border-bottom: 1px solid var(--color-border); }
.about-section h2 {
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
}
.about-section p {
    font-size: 1rem;
    color: var(--color-muted);
    line-height: 1.85;
    max-width: 720px;
    margin-bottom: 1.2rem;
}
.team-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 2rem;
}
.team-card img { width: 100%; height: 220px; object-fit: cover; margin-bottom: 1rem; filter: grayscale(100%); }
.team-card h4 { font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.2rem; }
.team-card .role { font-family: var(--font-ui); font-size: 0.78rem; color: var(--color-muted); text-transform: uppercase; letter-spacing: 0.08em; }
.values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;
}
.value-card {
    padding: 2rem;
    border: 1px solid var(--color-border);
}
.value-card h3 {
    font-family: var(--font-heading);
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
    padding-bottom: 0.8rem;
    border-bottom: 2px solid var(--color-text);
}
.value-card p { font-size: 0.88rem; color: var(--color-muted); line-height: 1.7; }
.contact-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;
}
.contact-item h4 { font-family: var(--font-ui); font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; }
.contact-item p { font-size: 0.88rem; color: var(--color-muted); line-height: 1.7; }

/* ===== FOOTER ===== */
.footer {
    background: var(--color-text);
    color: var(--white);
    padding: 3rem 0 2rem;
}
.footer-top {
    text-align: center;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgba(255,255,255,0.15);
}
.footer-logo {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 900;
    letter-spacing: -0.02em;
    margin-bottom: 0.5rem;
}
.footer-tagline {
    font-family: var(--font-ui);
    font-size: 0.78rem;
    opacity: 0.5;
}
.footer-nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem 2rem;
    margin-bottom: 2rem;
}
.footer-nav a {
    font-family: var(--font-ui);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.6;
    transition: var(--transition);
}
.footer-nav a:hover { opacity: 1; }
.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-ui);
    font-size: 0.72rem;
    opacity: 0.4;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255,255,255,0.1);
}

/* ===== AD PLACEHOLDER ===== */
.ad-placeholder {
    background: var(--color-surface);
    border: 1px dashed var(--color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-ui);
    font-size: 0.72rem;
    color: var(--color-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}
.ad-banner { height: 90px; margin: 1.5rem 0; }
.ad-box { height: 250px; width: 100%; }

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
    .hero-story { grid-template-columns: 1fr; }
    .hero-main { border-right: none; padding-right: 0; }
    .hero-sidebar { padding-left: 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
    .mid-grid { grid-template-columns: 1fr; }
    .mid-article { border-right: none; padding: 1.5rem 0; border-bottom: 1px solid var(--color-border); }
    .bottom-section { grid-template-columns: 1fr; }
    .article-layout { grid-template-columns: 1fr; }
    .team-grid { grid-template-columns: repeat(2, 1fr); }
    .section-top-story { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
    .nav-sections a { padding: 0 0.6rem; font-size: 0.72rem; }
    .masthead-title { font-size: 2.5rem; }
    .section-grid { grid-template-columns: 1fr; }
    .latest-grid { grid-template-columns: 1fr; }
    .team-grid { grid-template-columns: 1fr; }
    .values-grid, .contact-grid { grid-template-columns: 1fr; }
    .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
}
```

---

## 2. main.js

```javascript
document.addEventListener('DOMContentLoaded', () => {

    // 1. Breaking news ticker duplicate (seamless loop)
    const track = document.querySelector('.breaking-track');
    if (track) {
        track.innerHTML += track.innerHTML;
    }

    // 2. Active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-sections a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 3. Section page pagination
    const pageButtons = document.querySelectorAll('.page-btn:not(.dots)');
    const sectionCards = document.querySelectorAll('.section-card');
    const CARDS_PER_PAGE = 6;

    if (pageButtons.length > 0 && sectionCards.length > 0) {
        const showPage = (page) => {
            sectionCards.forEach((card, i) => {
                card.style.display = (i >= (page - 1) * CARDS_PER_PAGE && i < page * CARDS_PER_PAGE) ? '' : 'none';
            });
            pageButtons.forEach(btn => {
                btn.classList.toggle('active', parseInt(btn.dataset.page) === page);
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pageButtons.forEach(btn => {
            btn.addEventListener('click', () => showPage(parseInt(btn.dataset.page)));
        });
        showPage(1);
    }

    // 4. Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    <title>Vinus Times — The World's Most Trusted News</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Breaking News -->
    <div class="breaking-bar">
        <span class="breaking-label">Breaking</span>
        <div class="breaking-track">
            <span>Global Leaders Convene for Emergency Climate Summit · </span>
            <span>Markets Rally as Inflation Data Shows Cooling Trend · </span>
            <span>Historic Peace Agreement Signed in Eastern Europe · </span>
            <span>Tech Giants Face New Antitrust Scrutiny in Brussels · </span>
            <span>Scientists Announce Major Breakthrough in Cancer Research · </span>
        </div>
    </div>

    <!-- Masthead -->
    <div class="masthead">
        <div class="container">
            <div class="masthead-top">
                <div class="masthead-meta">
                    <div>Monday, May 3, 2026</div>
                    <div>Vol. CLXXV · No. 124</div>
                </div>
                <div class="masthead-title">Vinus Times</div>
                <div class="masthead-edition">
                    <div>International Edition</div>
                    <div style="margin-top: 0.3rem;"><button class="btn-subscribe">Subscribe</button></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Navbar -->
    <nav class="navbar">
        <div class="container">
            <div class="nav-sections">
                <a href="index.html" class="active">Home</a>
                <a href="section.html">World</a>
                <a href="section.html">Politics</a>
                <a href="section.html">Business</a>
                <a href="section.html">Technology</a>
                <a href="section.html">Culture</a>
                <a href="section.html">Opinion</a>
            </div>
            <div class="nav-actions">
                <a href="about.html">About</a>
            </div>
        </div>
    </nav>

    <main>
        <div class="container" style="padding-top: 2rem;">

            <!-- Ad Banner -->
            <div class="ad-placeholder ad-banner">Advertisement</div>

            <!-- Hero Story -->
            <div class="hero-story">
                <div class="hero-main">
                    <span class="section-label">World</span>
                    <img class="hero-img" src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&q=80" alt="Global Climate Summit">
                    <h1 class="hero-headline">
                        <a href="article.html">World Leaders Reach Landmark Agreement on Climate Finance, Pledging $500 Billion for Developing Nations</a>
                    </h1>
                    <p class="hero-deck">In a historic accord, representatives from 195 countries agreed to triple funding for climate adaptation, marking the most significant environmental commitment since the Paris Agreement.</p>
                    <div class="byline">By <strong>Eleanor Whitfield</strong> · Senior Correspondent · 2 hours ago</div>
                </div>
                <div class="hero-sidebar">
                    <div class="sidebar-story">
                        <span class="section-label">Politics</span>
                        <h3><a href="article.html">Senate Passes Sweeping Infrastructure Bill After Months of Debate</a></h3>
                        <p>The bipartisan legislation allocates $1.2 trillion for roads, bridges, and broadband expansion.</p>
                        <div class="byline" style="margin-top: 0.5rem;">By <strong>Marcus Chen</strong> · 4 hours ago</div>
                    </div>
                    <div class="sidebar-story">
                        <span class="section-label">Business</span>
                        <h3><a href="article.html">Federal Reserve Signals Cautious Approach to Interest Rate Cuts</a></h3>
                        <p>Chair's remarks suggest policymakers are in no rush to ease monetary policy despite slowing inflation.</p>
                        <div class="byline" style="margin-top: 0.5rem;">By <strong>Sophia Alvarez</strong> · 5 hours ago</div>
                    </div>
                    <div class="sidebar-story">
                        <span class="section-label">Technology</span>
                        <h3><a href="article.html">AI Regulation Framework Proposed by European Commission Sets Global Precedent</a></h3>
                        <p>The comprehensive rules would require transparency and human oversight of high-risk AI systems.</p>
                        <div class="byline" style="margin-top: 0.5rem;">By <strong>James O'Brien</strong> · 6 hours ago</div>
                    </div>
                </div>
            </div>

            <hr class="section-divider" style="margin-top: 2rem;">
            <span class="section-label">Top Stories</span>

            <!-- Mid Grid -->
            <div class="mid-grid">
                <div class="mid-article">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="Economy">
                    <span class="section-label">Economy</span>
                    <h3><a href="article.html">Consumer Confidence Hits Two-Year High as Job Market Remains Resilient</a></h3>
                    <p>New data points to sustained economic momentum despite ongoing concerns about global uncertainty.</p>
                    <div class="byline" style="margin-top: 0.6rem;">By <strong>Laura Kim</strong> · 7 hours ago</div>
                </div>
                <div class="mid-article">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" alt="Science">
                    <span class="section-label">Science</span>
                    <h3><a href="article.html">Researchers Discover a New Class of Antibiotics Capable of Defeating Drug-Resistant Bacteria</a></h3>
                    <p>The breakthrough could transform treatment of infections that have become increasingly difficult to manage.</p>
                    <div class="byline" style="margin-top: 0.6rem;">By <strong>Dr. Aisha Patel</strong> · 8 hours ago</div>
                </div>
                <div class="mid-article">
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" alt="Technology">
                    <span class="section-label">Technology</span>
                    <h3><a href="article.html">Quantum Computing Reaches Commercial Viability Threshold, IBM Announces</a></h3>
                    <p>The company claims its latest processor can outperform classical supercomputers on real-world tasks.</p>
                    <div class="byline" style="margin-top: 0.6rem;">By <strong>Ryan Foster</strong> · 9 hours ago</div>
                </div>
            </div>

            <!-- Ad Banner -->
            <div class="ad-placeholder ad-banner" style="margin: 2rem 0;">Advertisement</div>

            <!-- Bottom Section -->
            <div class="bottom-section">
                <div class="bottom-main">
                    <hr class="section-divider">
                    <h2 style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 0.08em;">Latest News</h2>
                    <div class="latest-grid">
                        <div class="latest-item">
                            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=200&q=80" alt="">
                            <div>
                                <span class="section-label">World</span>
                                <h4><a href="article.html">Diplomatic Talks Resume Between Regional Powers After Year-Long Freeze</a></h4>
                                <div class="byline">3 hours ago</div>
                            </div>
                        </div>
                        <div class="latest-item">
                            <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&q=80" alt="">
                            <div>
                                <span class="section-label">Business</span>
                                <h4><a href="article.html">Global Supply Chains Stabilize as Shipping Costs Return to Pre-Pandemic Levels</a></h4>
                                <div class="byline">4 hours ago</div>
                            </div>
                        </div>
                        <div class="latest-item">
                            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&q=80" alt="">
                            <div>
                                <span class="section-label">Culture</span>
                                <h4><a href="article.html">Cannes Film Festival Opens with Record Number of Female-Directed Features</a></h4>
                                <div class="byline">5 hours ago</div>
                            </div>
                        </div>
                        <div class="latest-item">
                            <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&q=80" alt="">
                            <div>
                                <span class="section-label">Health</span>
                                <h4><a href="article.html">WHO Reports Significant Progress in Reducing Child Mortality Globally</a></h4>
                                <div class="byline">6 hours ago</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="opinion-sidebar">
                    <hr class="section-divider">
                    <h2 style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 0.08em;">Opinion</h2>
                    <div class="opinion-item">
                        <div class="opinion-author">Eleanor Whitfield</div>
                        <h4><a href="article.html">'The Climate Deal Is a Start, But Words Must Now Become Action'</a></h4>
                    </div>
                    <div class="opinion-item">
                        <div class="opinion-author">Prof. David Crane</div>
                        <h4><a href="article.html">'We Are Sleepwalking Into an AI-Dependent Economy Without Safeguards'</a></h4>
                    </div>
                    <div class="opinion-item">
                        <div class="opinion-author">Sophia Alvarez</div>
                        <h4><a href="article.html">'The Fed's Caution Is Justified — Inflation Scars Run Deep'</a></h4>
                    </div>
                    <div style="margin-top: 1.5rem;">
                        <div class="ad-placeholder ad-box">Advertisement</div>
                    </div>
                </div>
            </div>

        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-logo">Vinus Times</div>
                <div class="footer-tagline">The World's Most Trusted News — Since 1851</div>
            </div>
            <div class="footer-nav">
                <a href="section.html">World</a>
                <a href="section.html">Politics</a>
                <a href="section.html">Business</a>
                <a href="section.html">Technology</a>
                <a href="section.html">Culture</a>
                <a href="section.html">Opinion</a>
                <a href="about.html">About</a>
                <a href="#">Subscribe</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
            <div class="footer-bottom">
                <span>© 2026 Vinus Times. All rights reserved.</span>
                <span>Vinus Times is published daily in print and digital editions.</span>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>
```

---

## 4. article.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>World Leaders Reach Landmark Climate Agreement — Vinus Times</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="breaking-bar">
        <span class="breaking-label">Breaking</span>
        <div class="breaking-track">
            <span>Global Leaders Convene for Emergency Climate Summit · </span>
            <span>Markets Rally as Inflation Data Shows Cooling Trend · </span>
            <span>Historic Peace Agreement Signed in Eastern Europe · </span>
            <span>Tech Giants Face New Antitrust Scrutiny in Brussels · </span>
            <span>Scientists Announce Major Breakthrough in Cancer Research · </span>
        </div>
    </div>

    <div class="masthead">
        <div class="container">
            <div class="masthead-top">
                <div class="masthead-meta">
                    <div>Monday, May 3, 2026</div>
                    <div>Vol. CLXXV · No. 124</div>
                </div>
                <div class="masthead-title">Vinus Times</div>
                <div class="masthead-edition">
                    <div>International Edition</div>
                    <div style="margin-top: 0.3rem;"><button class="btn-subscribe">Subscribe</button></div>
                </div>
            </div>
        </div>
    </div>

    <nav class="navbar">
        <div class="container">
            <div class="nav-sections">
                <a href="index.html">Home</a>
                <a href="section.html" class="active">World</a>
                <a href="section.html">Politics</a>
                <a href="section.html">Business</a>
                <a href="section.html">Technology</a>
                <a href="section.html">Culture</a>
                <a href="section.html">Opinion</a>
            </div>
            <div class="nav-actions">
                <a href="about.html">About</a>
            </div>
        </div>
    </nav>

    <main>
        <div class="container" style="padding-top: 2rem;">

            <div class="article-header">
                <span class="section-label article-section-label">World</span>
                <h1 class="article-headline">World Leaders Reach Landmark Agreement on Climate Finance, Pledging $500 Billion for Developing Nations</h1>
                <p class="article-deck">In a historic accord, representatives from 195 countries agreed to triple funding for climate adaptation, marking the most significant environmental commitment since the Paris Agreement of 2015.</p>
                <div class="article-meta">
                    <span>By <strong>Eleanor Whitfield</strong>, Senior Correspondent</span>
                    <span>May 3, 2026</span>
                    <span>8 min read</span>
                </div>
            </div>

            <div class="article-layout">
                <article class="article-body">
                    <img class="lead-img" src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&q=80" alt="Climate Summit">
                    <p class="img-caption">Delegates gathered at the United Nations Climate Conference in Geneva. Credit: AP Photo / Michael Sohn</p>

                    <p>GENEVA — In what observers are calling the most consequential environmental accord in a decade, world leaders concluded a marathon three-day summit on Friday by committing to a sweeping new framework for climate finance that will channel $500 billion annually to developing nations most vulnerable to global warming.</p>

                    <p>The agreement, reached after tense overnight negotiations that stretched into the early hours of Friday morning, represents a dramatic scaling-up of the pledges made at the 2015 Paris Agreement. It includes binding commitments from the world's twenty largest economies to phase out coal power by 2035 and to achieve carbon neutrality by 2050.</p>

                    <blockquote>"This is not just a financial commitment — it is a moral reckoning. We owe it to the generations that will inherit this planet to act with urgency and with integrity."</blockquote>

                    <p>The deal was brokered over months of behind-the-scenes diplomacy, with key breakthroughs coming in the final hours when the United States and China — the world's two largest emitters — agreed on a shared mechanism for verifying emissions reductions. The compromise was described by veteran negotiators as unprecedented.</p>

                    <h2>What the Agreement Includes</h2>

                    <p>At its core, the accord establishes a new international fund, to be administered by the World Bank, that will distribute climate finance to over 120 eligible nations. Priority will be given to small island states and sub-Saharan African countries, which contribute least to global emissions but face the most severe consequences of climate change.</p>

                    <p>The framework also includes provisions for technology transfer, allowing developing countries to access cutting-edge renewable energy technologies at reduced cost. A new arbitration mechanism will allow countries to lodge formal complaints if commitments are not honoured — a provision that advocates say gives the agreement genuine teeth.</p>

                    <p>Environmental groups reacted with cautious optimism. "This is a meaningful step forward," said Claire Dubois, executive director of Climate Action Now. "But the history of climate diplomacy is littered with promises that were made and then forgotten. What matters now is implementation."</p>

                    <p>The agreement must still be ratified by national legislatures in most signatory countries, a process that is expected to take between six and eighteen months and that will face opposition in several key nations, including Australia and Brazil.</p>

                    <div class="ad-placeholder ad-banner" style="margin: 2rem 0;">Advertisement</div>

                    <h2>A Moment Decades in the Making</h2>

                    <p>For climate scientists, the deal represents the culmination of decades of advocacy and research. "We have been warning about this moment since the 1980s," said Dr. Priya Nair of the Intergovernmental Panel on Climate Change. "The science was never in doubt. What was always in doubt was the political will."</p>

                    <p>That political will, analysts say, has been galvanised by a series of increasingly extreme weather events in recent years — from catastrophic flooding in Pakistan to unprecedented wildfires across southern Europe and North America. Public support for bold climate action has risen sharply in opinion polls across the democratic world.</p>

                    <p>The summit was not without its tensions. Several oil-producing nations pushed back against the timelines for fossil fuel phase-outs, and a bloc of middle-income countries argued that the finance commitments did not go far enough. India, while signing the agreement, issued a formal reservation expressing concern about the pace of the coal phase-out timeline.</p>
                </article>

                <aside class="article-sidebar">
                    <div class="sidebar-widget">
                        <h3>Related Articles</h3>
                        <div class="related-item">
                            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&q=80" alt="">
                            <div>
                                <span class="section-label">Science</span>
                                <h4><a href="article.html">New IPCC Report Warns of Irreversible Tipping Points Within a Decade</a></h4>
                            </div>
                        </div>
                        <div class="related-item">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="">
                            <div>
                                <span class="section-label">Business</span>
                                <h4><a href="article.html">Green Energy Investment Surpasses Fossil Fuels for First Time in History</a></h4>
                            </div>
                        </div>
                        <div class="related-item">
                            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=200&q=80" alt="">
                            <div>
                                <span class="section-label">Politics</span>
                                <h4><a href="article.html">US Congress Debates Ratification of New Climate Finance Accord</a></h4>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-widget">
                        <h3>Opinion</h3>
                        <div class="opinion-item" style="padding-top: 0;">
                            <div class="opinion-author">Eleanor Whitfield</div>
                            <h4><a href="article.html">'The Climate Deal Is a Start, But Words Must Now Become Action'</a></h4>
                        </div>
                        <div class="opinion-item">
                            <div class="opinion-author">Prof. David Crane</div>
                            <h4><a href="article.html">'We Are Sleepwalking Into a Crisis We Can Still Prevent'</a></h4>
                        </div>
                    </div>
                    <div class="ad-placeholder ad-box">Advertisement</div>
                </aside>
            </div>

        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-logo">Vinus Times</div>
                <div class="footer-tagline">The World's Most Trusted News — Since 1851</div>
            </div>
            <div class="footer-nav">
                <a href="section.html">World</a>
                <a href="section.html">Politics</a>
                <a href="section.html">Business</a>
                <a href="section.html">Technology</a>
                <a href="section.html">Culture</a>
                <a href="section.html">Opinion</a>
                <a href="about.html">About</a>
                <a href="#">Subscribe</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
            <div class="footer-bottom">
                <span>© 2026 Vinus Times. All rights reserved.</span>
                <span>Vinus Times is published daily in print and digital editions.</span>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>
```

---

## 5. section.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>World — Vinus Times</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="breaking-bar">
        <span class="breaking-label">Breaking</span>
        <div class="breaking-track">
            <span>Global Leaders Convene for Emergency Climate Summit · </span>
            <span>Markets Rally as Inflation Data Shows Cooling Trend · </span>
            <span>Historic Peace Agreement Signed in Eastern Europe · </span>
            <span>Tech Giants Face New Antitrust Scrutiny in Brussels · </span>
            <span>Scientists Announce Major Breakthrough in Cancer Research · </span>
        </div>
    </div>

    <div class="masthead">
        <div class="container">
            <div class="masthead-top">
                <div class="masthead-meta">
                    <div>Monday, May 3, 2026</div>
                    <div>Vol. CLXXV · No. 124</div>
                </div>
                <div class="masthead-title">Vinus Times</div>
                <div class="masthead-edition">
                    <div>International Edition</div>
                    <div style="margin-top: 0.3rem;"><button class="btn-subscribe">Subscribe</button></div>
                </div>
            </div>
        </div>
    </div>

    <nav class="navbar">
        <div class="container">
            <div class="nav-sections">
                <a href="index.html">Home</a>
                <a href="section.html" class="active">World</a>
                <a href="section.html">Politics</a>
                <a href="section.html">Business</a>
                <a href="section.html">Technology</a>
                <a href="section.html">Culture</a>
                <a href="section.html">Opinion</a>
            </div>
            <div class="nav-actions">
                <a href="about.html">About</a>
            </div>
        </div>
    </nav>

    <div class="section-hero">
        <div class="container">
            <h1>World</h1>
            <p>International news, global affairs, and foreign correspondence from every corner of the globe.</p>
        </div>
    </div>

    <main>
        <div class="container section-content">

            <div class="ad-placeholder ad-banner">Advertisement</div>

            <!-- Top Story -->
            <div class="section-top-story">
                <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=900&q=80" alt="">
                <div>
                    <span class="section-label">Top Story</span>
                    <h2><a href="article.html">World Leaders Reach Landmark Agreement on Climate Finance, Pledging $500 Billion for Developing Nations</a></h2>
                    <p>In a historic accord, representatives from 195 countries agreed to triple funding for climate adaptation, marking the most significant environmental commitment since the Paris Agreement.</p>
                    <div class="byline" style="margin-top: 1rem;">By <strong>Eleanor Whitfield</strong> · 2 hours ago</div>
                </div>
            </div>

            <hr class="section-divider">

            <!-- Article Grid -->
            <div class="section-grid">
                <div class="section-card">
                    <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" alt="">
                    <span class="section-label">Diplomacy</span>
                    <h3><a href="article.html">Diplomatic Talks Resume Between Regional Powers After Year-Long Freeze</a></h3>
                    <p>Mediators describe cautious progress as delegations return to the negotiating table for the first time since hostilities escalated.</p>
                    <div class="byline" style="margin-top: 0.6rem;">By <strong>Marcus Chen</strong> · 3 hours ago</div>
                </div>
                <div class="section-card">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="">
                    <span class="section-label">Economy</span>
                    <h3><a href="article.html">IMF Revises Global Growth Forecast Upward, Citing Resilient Consumer Demand</a></h3>
                    <p>The international body now projects 3.2% global GDP growth for the year, up from its January estimate of 2.9%.</p>
                    <div class="byline" style="margin-top: 0.6rem;">By <strong>Sophia Alvarez</strong> · 4 hours ago</div>
                </div>
                <div class="section-card">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" alt="">
                    <span class="section-label">Science</span>
                    <h3><a href="article.html">Arctic Sea Ice Reaches Record Low Extent for Third Consecutive Year</a></h3>
                    <p>Scientists warn the trend signals accelerating permafrost thaw with significant consequences for global methane levels.</p>
                    <div class="byline" style="margin-top: 0.6rem;">By <strong>Dr. Aisha Patel</strong> · 5 hours ago</div>
                </div>
                <div class="section-card">
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" alt="">
                    <span class="section-label">Technology</span>
                    <h3><a href="article.html">Undersea Cable Sabotage Raises Alarm Over Critical Digital Infrastructure</a></h3>
                    <p>Intelligence agencies are investigating deliberate damage to fibre-optic cables in the Baltic Sea, officials confirmed.</p>
                    <div class="byline" style="margin-top: 0.6rem;">By <strong>James O'Brien</strong> · 6 hours ago</div>
                </div>
                <div class="section-card">
                    <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80" alt="">
                    <span class="section-label">Society</span>
                    <h3><a href="article.html">Global Fertility Rates Decline to Historic Lows Across Developed and Emerging Economies</a></h3>
                    <p>Demographers say the trend will reshape labour markets, pension systems, and political landscapes over the coming decades.</p>
                    <div class="byline" style="margin-top: 0.6rem;">By <strong>Laura Kim</strong> · 7 hours ago</div>
                </div>
                <div class="section-card">
                    <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80" alt="">
                    <span class="section-label">Finance</span>
                    <h3><a href="article.html">Emerging Market Currencies Surge as Dollar Weakens on Fed Signals</a></h3>
                    <p>A basket of developing-world currencies posted their best week in eighteen months following the Federal Reserve's latest statement.</p>
                    <div class="byline" style="margin-top: 0.6rem;">By <strong>Ryan Foster</strong> · 8 hours ago</div>
                </div>
                <div class="section-card">
                    <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80" alt="">
                    <span class="section-label">Health</span>
                    <h3><a href="article.html">WHO Warns of Growing Threat from Antibiotic-Resistant Infections in Low-Income Countries</a></h3>
                    <p>The organisation called for urgent international cooperation to address what it described as a slow-moving pandemic.</p>
                    <div class="byline" style="margin-top: 0.6rem;">By <strong>Eleanor Whitfield</strong> · 9 hours ago</div>
                </div>
                <div class="section-card">
                    <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&q=80" alt="">
                    <span class="section-label">Environment</span>
                    <h3><a href="article.html">Amazon Deforestation Drops 40% as Brazil's New Environmental Policies Take Hold</a></h3>
                    <p>Satellite data shows a significant reduction in tree loss, though environmentalists caution that the gains remain fragile.</p>
                    <div class="byline" style="margin-top: 0.6rem;">By <strong>Marcus Chen</strong> · 10 hours ago</div>
                </div>
                <div class="section-card">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="">
                    <span class="section-label">Politics</span>
                    <h3><a href="article.html">G7 Leaders Agree on New Framework to Counter Economic Coercion by State Actors</a></h3>
                    <p>The agreement establishes a rapid-response mechanism to coordinate sanctions and trade measures among member nations.</p>
                    <div class="byline" style="margin-top: 0.6rem;">By <strong>Sophia Alvarez</strong> · 11 hours ago</div>
                </div>
            </div>

            <!-- Pagination -->
            <div class="pagination">
                <button class="page-btn active" data-page="1">1</button>
                <button class="page-btn" data-page="2">2</button>
                <button class="page-btn dots">…</button>
                <button class="page-btn" data-page="5">5</button>
            </div>

        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-logo">Vinus Times</div>
                <div class="footer-tagline">The World's Most Trusted News — Since 1851</div>
            </div>
            <div class="footer-nav">
                <a href="section.html">World</a>
                <a href="section.html">Politics</a>
                <a href="section.html">Business</a>
                <a href="section.html">Technology</a>
                <a href="section.html">Culture</a>
                <a href="section.html">Opinion</a>
                <a href="about.html">About</a>
                <a href="#">Subscribe</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
            <div class="footer-bottom">
                <span>© 2026 Vinus Times. All rights reserved.</span>
                <span>Vinus Times is published daily in print and digital editions.</span>
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
    <title>About Us — Vinus Times</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="breaking-bar">
        <span class="breaking-label">Breaking</span>
        <div class="breaking-track">
            <span>Global Leaders Convene for Emergency Climate Summit · </span>
            <span>Markets Rally as Inflation Data Shows Cooling Trend · </span>
            <span>Historic Peace Agreement Signed in Eastern Europe · </span>
            <span>Tech Giants Face New Antitrust Scrutiny in Brussels · </span>
            <span>Scientists Announce Major Breakthrough in Cancer Research · </span>
        </div>
    </div>

    <div class="masthead">
        <div class="container">
            <div class="masthead-top">
                <div class="masthead-meta">
                    <div>Monday, May 3, 2026</div>
                    <div>Vol. CLXXV · No. 124</div>
                </div>
                <div class="masthead-title">Vinus Times</div>
                <div class="masthead-edition">
                    <div>International Edition</div>
                    <div style="margin-top: 0.3rem;"><button class="btn-subscribe">Subscribe</button></div>
                </div>
            </div>
        </div>
    </div>

    <nav class="navbar">
        <div class="container">
            <div class="nav-sections">
                <a href="index.html">Home</a>
                <a href="section.html">World</a>
                <a href="section.html">Politics</a>
                <a href="section.html">Business</a>
                <a href="section.html">Technology</a>
                <a href="section.html">Culture</a>
                <a href="section.html">Opinion</a>
            </div>
            <div class="nav-actions">
                <a href="about.html">About</a>
            </div>
        </div>
    </nav>

    <div class="about-hero">
        <div class="container">
            <h1>About Vinus Times</h1>
            <p>Independent journalism, rigorously reported, fearlessly published — since 1851.</p>
        </div>
    </div>

    <main>
        <div class="container">

            <div class="about-section">
                <h2>Our Mission</h2>
                <p>The Vinus Times was founded on a single, enduring principle: that a free press is the cornerstone of a functioning democracy. For 175 years, we have reported the news of the world with accuracy, fairness, and an unwavering commitment to the truth — even when the truth is uncomfortable.</p>
                <p>We believe that journalism, at its best, holds power to account. Our reporters and editors are guided not by ideology or commercial interest, but by the discipline of verification and the responsibility we feel to our readers and to the public record.</p>
                <p>In an era of information abundance and trust scarcity, we remain committed to the slow, painstaking work of getting the story right. We would rather be last with the truth than first with a falsehood.</p>
            </div>

            <div class="about-section">
                <h2>Our Values</h2>
                <div class="values-grid">
                    <div class="value-card">
                        <h3>Independence</h3>
                        <p>We are editorially independent and accept no direction from governments, corporations, or advertisers. Our journalism is guided solely by newsworthiness and the public interest.</p>
                    </div>
                    <div class="value-card">
                        <h3>Accuracy</h3>
                        <p>Every fact we publish has been verified. We maintain one of the most rigorous fact-checking processes in the industry, and we correct our errors promptly and transparently.</p>
                    </div>
                    <div class="value-card">
                        <h3>Accountability</h3>
                        <p>We hold institutions and individuals in power to account — including ourselves. We publish corrections, respond to reader feedback, and engage openly with criticism.</p>
                    </div>
                </div>
            </div>

            <div class="about-section">
                <h2>Editorial Team</h2>
                <div class="team-grid">
                    <div class="team-card">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="Editor in Chief">
                        <h4>William Ashford</h4>
                        <div class="role">Editor in Chief</div>
                    </div>
                    <div class="team-card">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" alt="Managing Editor">
                        <h4>Clara Montague</h4>
                        <div class="role">Managing Editor</div>
                    </div>
                    <div class="team-card">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" alt="Foreign Editor">
                        <h4>Thomas Okafor</h4>
                        <div class="role">Foreign Editor</div>
                    </div>
                    <div class="team-card">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" alt="Deputy Editor">
                        <h4>Nadia Hartmann</h4>
                        <div class="role">Deputy Editor, Digital</div>
                    </div>
                </div>
            </div>

            <div class="about-section">
                <h2>Contact Us</h2>
                <div class="contact-grid">
                    <div class="contact-item">
                        <h4>Editorial</h4>
                        <p>For story tips, corrections, or editorial enquiries:<br>editorial@vinustimes.com<br>+1 (212) 555-0190</p>
                    </div>
                    <div class="contact-item">
                        <h4>Subscriptions</h4>
                        <p>For subscription support or billing enquiries:<br>subscribe@vinustimes.com<br>+1 (212) 555-0191</p>
                    </div>
                    <div class="contact-item">
                        <h4>Advertising</h4>
                        <p>For advertising and partnership opportunities:<br>advertising@vinustimes.com<br>+1 (212) 555-0192</p>
                    </div>
                </div>
            </div>

        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-logo">Vinus Times</div>
                <div class="footer-tagline">The World's Most Trusted News — Since 1851</div>
            </div>
            <div class="footer-nav">
                <a href="section.html">World</a>
                <a href="section.html">Politics</a>
                <a href="section.html">Business</a>
                <a href="section.html">Technology</a>
                <a href="section.html">Culture</a>
                <a href="section.html">Opinion</a>
                <a href="about.html">About</a>
                <a href="#">Subscribe</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
            <div class="footer-bottom">
                <span>© 2026 Vinus Times. All rights reserved.</span>
                <span>Vinus Times is published daily in print and digital editions.</span>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>
```

---

## 완료 확인 체크리스트

작업 완료 후 반드시 확인:
- [ ] `style.css` 파일이 생성됐는가?
- [ ] `main.js` 파일이 생성됐는가?
- [ ] `index.html` 파일이 생성됐는가?
- [ ] `article.html` 파일이 생성됐는가?
- [ ] `section.html` 파일이 생성됐는가?
- [ ] `about.html` 파일이 생성됐는가?
- [ ] 각 HTML 파일에서 `<link rel="stylesheet" href="style.css">` 가 있는가?
- [ ] 각 HTML 파일에서 `<script src="main.js"></script>` 가 있는가?
- [ ] **기존 cosmetic 폴더 파일은 절대 건드리지 않았는가?**
