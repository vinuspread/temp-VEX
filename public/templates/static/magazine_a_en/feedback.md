# VINUS Magazine — Implementation Instructions for Gemma

아래 코드를 그대로 각 파일에 작성하십시오. **지시된 파일 외에는 절대 수정하지 마십시오.**

생성할 파일 목록:
1. `style.css`
2. `main.js`
3. `index.html`
4. `article.html`
5. `issue.html`
6. `about.html`

---

## 1. style.css

```css
/*
  VINUS Magazine Design System
  Premium Lifestyle Editorial
  Headings: DM Serif Display | UI + Body: Inter
*/

@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap');

:root {
    --font-heading: 'DM Serif Display', Georgia, serif;
    --font-body: 'Inter', sans-serif;

    --color-bg: #FAFAF8;
    --color-text: #0D0D0D;
    --color-muted: #6B6B6B;
    --color-border: #E2DDD8;
    --color-surface: #F0EDE8;
    --color-accent: #8C6D3F;
    --color-accent-light: #F5EFE6;
    --white: #FFFFFF;

    --container: 1320px;
    --container-narrow: 860px;
    --transition: all 0.25s ease;
    --section-gap: 6rem;
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
.container { max-width: var(--container); margin: 0 auto; padding: 0 2.5rem; }
.container-narrow { max-width: var(--container-narrow); margin: 0 auto; padding: 0 2.5rem; }

/* ===== NAVBAR ===== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
    height: 64px;
    display: flex;
    align-items: center;
    transition: background 0.3s ease, box-shadow 0.3s ease;
}
.navbar.scrolled {
    background: rgba(250, 250, 248, 0.96);
    backdrop-filter: blur(12px);
    box-shadow: 0 1px 0 var(--color-border);
}
.navbar .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.nav-logo {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--white);
    transition: var(--transition);
}
.navbar.scrolled .nav-logo { color: var(--color-text); }
.nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
}
.nav-links a {
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: rgba(255,255,255,0.85);
    transition: var(--transition);
}
.navbar.scrolled .nav-links a { color: var(--color-muted); }
.nav-links a:hover { color: var(--white); opacity: 1; }
.navbar.scrolled .nav-links a:hover { color: var(--color-text); }
.nav-links a.active { color: var(--white); }
.navbar.scrolled .nav-links a.active { color: var(--color-text); }
.btn-nav-subscribe {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.5rem 1.2rem;
    border: 1px solid rgba(255,255,255,0.5);
    color: var(--white);
    cursor: pointer;
    background: transparent;
    transition: var(--transition);
}
.navbar.scrolled .btn-nav-subscribe {
    border-color: var(--color-text);
    color: var(--color-text);
}
.btn-nav-subscribe:hover {
    background: var(--white);
    color: var(--color-text);
    border-color: var(--white);
}
.navbar.scrolled .btn-nav-subscribe:hover {
    background: var(--color-text);
    color: var(--white);
}

/* ===== COVER HERO ===== */
.cover-hero {
    position: relative;
    height: 100vh;
    min-height: 700px;
    overflow: hidden;
}
.cover-hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
.cover-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%);
}
.cover-hero-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 4rem 2.5rem;
    max-width: calc(var(--container) + 5rem);
    margin: 0 auto;
}
.cover-issue-label {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--color-accent);
    background: var(--white);
    display: inline-block;
    padding: 0.3rem 0.8rem;
    margin-bottom: 1.2rem;
}
.cover-headline {
    font-family: var(--font-heading);
    font-size: clamp(2.8rem, 5vw, 5rem);
    font-weight: 400;
    line-height: 1.1;
    color: var(--white);
    max-width: 720px;
    margin-bottom: 1rem;
}
.cover-deck {
    font-size: 1rem;
    color: rgba(255,255,255,0.8);
    max-width: 500px;
    line-height: 1.65;
    margin-bottom: 1.5rem;
}
.cover-byline {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.6);
    font-weight: 500;
    letter-spacing: 0.04em;
}
.cover-byline strong { color: rgba(255,255,255,0.9); }
.btn-read-story {
    display: inline-block;
    margin-top: 1.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--white);
    border-bottom: 1px solid rgba(255,255,255,0.5);
    padding-bottom: 0.2rem;
    transition: var(--transition);
}
.btn-read-story:hover { border-color: var(--white); letter-spacing: 0.2em; }

/* ===== SECTION LABELS ===== */
.category-label {
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--color-accent);
    display: block;
    margin-bottom: 0.7rem;
}
.section-heading {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--color-muted);
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--color-text);
    margin-bottom: 2.5rem;
}

/* ===== FEATURED GRID ===== */
.featured-section { padding: var(--section-gap) 0; }
.featured-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 0;
    border: 1px solid var(--color-border);
    margin-bottom: 1px;
}
.featured-main {
    border-right: 1px solid var(--color-border);
    overflow: hidden;
}
.featured-main-img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
}
.featured-main:hover .featured-main-img { transform: scale(1.03); }
.featured-main-body { padding: 2rem 2.5rem 2.5rem; }
.featured-main-body h2 {
    font-family: var(--font-heading);
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 0.8rem;
}
.featured-main-body h2 a:hover { color: var(--color-accent); }
.featured-main-body p {
    font-size: 0.9rem;
    color: var(--color-muted);
    line-height: 1.7;
    margin-bottom: 1rem;
}
.featured-stack {
    display: grid;
    grid-template-rows: 1fr 1fr;
}
.featured-stack-item {
    padding: 2rem 2rem 2rem 2.5rem;
    border-bottom: 1px solid var(--color-border);
    overflow: hidden;
}
.featured-stack-item:last-child { border-bottom: none; }
.featured-stack-item img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    margin-bottom: 1rem;
    transition: transform 0.5s ease;
}
.featured-stack-item:hover img { transform: scale(1.04); }
.featured-stack-item h3 {
    font-family: var(--font-heading);
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 0.4rem;
}
.featured-stack-item h3 a:hover { color: var(--color-accent); }
.featured-stack-item p {
    font-size: 0.82rem;
    color: var(--color-muted);
    line-height: 1.6;
}

/* ===== BYLINE ===== */
.byline {
    font-size: 0.75rem;
    color: var(--color-muted);
    font-weight: 500;
    letter-spacing: 0.02em;
}
.byline strong { color: var(--color-text); font-weight: 600; }

/* ===== EDITORS PICKS ===== */
.editors-picks { padding: var(--section-gap) 0; background: var(--color-surface); }
.picks-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
}
.pick-card { }
.pick-img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    margin-bottom: 1.2rem;
    overflow: hidden;
}
.pick-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}
.pick-card:hover .pick-img img { transform: scale(1.04); }
.pick-card h3 {
    font-family: var(--font-heading);
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.25;
    margin-bottom: 0.6rem;
}
.pick-card h3 a:hover { color: var(--color-accent); }
.pick-card p {
    font-size: 0.85rem;
    color: var(--color-muted);
    line-height: 1.65;
    margin-bottom: 0.8rem;
}

/* ===== LATEST ===== */
.latest-section { padding: var(--section-gap) 0; }
.latest-layout {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 4rem;
}
.latest-list { }
.latest-item {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 1.8rem;
    padding: 2rem 0;
    border-bottom: 1px solid var(--color-border);
}
.latest-item:first-child { border-top: 2px solid var(--color-text); }
.latest-item img {
    width: 200px;
    height: 135px;
    object-fit: cover;
    flex-shrink: 0;
    transition: transform 0.5s ease;
}
.latest-item:hover img { transform: scale(1.04); }
.latest-item-body { }
.latest-item-body h3 {
    font-family: var(--font-heading);
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 0.5rem;
}
.latest-item-body h3 a:hover { color: var(--color-accent); }
.latest-item-body p {
    font-size: 0.83rem;
    color: var(--color-muted);
    line-height: 1.6;
    margin-bottom: 0.6rem;
}
.latest-sidebar { }
.sidebar-widget {
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--color-border);
}
.sidebar-widget:first-child { border-top: 2px solid var(--color-text); padding-top: 0; }
.sidebar-widget h4 {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    margin-bottom: 1.2rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid var(--color-border);
}
.sidebar-mini-item {
    display: flex;
    gap: 1rem;
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--color-border);
}
.sidebar-mini-item:last-child { border-bottom: none; }
.sidebar-mini-item img { width: 64px; height: 48px; object-fit: cover; flex-shrink: 0; }
.sidebar-mini-item h5 {
    font-family: var(--font-heading);
    font-size: 0.88rem;
    font-weight: 400;
    line-height: 1.3;
}
.sidebar-mini-item h5 a:hover { color: var(--color-accent); }

/* ===== NEWSLETTER STRIP ===== */
.newsletter-strip {
    background: var(--color-text);
    color: var(--white);
    padding: 4rem 0;
    text-align: center;
}
.newsletter-strip h2 {
    font-family: var(--font-heading);
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 400;
    margin-bottom: 0.6rem;
}
.newsletter-strip p {
    font-size: 0.88rem;
    color: rgba(255,255,255,0.55);
    margin-bottom: 2rem;
    letter-spacing: 0.02em;
}
.newsletter-form {
    display: flex;
    justify-content: center;
    gap: 0;
    max-width: 460px;
    margin: 0 auto;
}
.newsletter-form input {
    flex: 1;
    padding: 0.85rem 1.2rem;
    font-family: var(--font-body);
    font-size: 0.85rem;
    border: 1px solid rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.08);
    color: var(--white);
    outline: none;
}
.newsletter-form input::placeholder { color: rgba(255,255,255,0.3); }
.newsletter-form button {
    padding: 0.85rem 1.8rem;
    background: var(--color-accent);
    color: var(--white);
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border: none;
    cursor: pointer;
    transition: var(--transition);
    white-space: nowrap;
}
.newsletter-form button:hover { background: #7a5e34; }

/* ===== ARTICLE PAGE ===== */
.article-hero {
    padding-top: 64px;
}
.article-hero-img {
    width: 100%;
    height: 70vh;
    min-height: 480px;
    object-fit: cover;
}
.article-hero-caption {
    font-size: 0.72rem;
    color: var(--color-muted);
    padding: 0.6rem 2.5rem;
    border-bottom: 1px solid var(--color-border);
    font-style: italic;
}
.article-header {
    padding: 3rem 0 2rem;
    border-bottom: 1px solid var(--color-border);
    margin-bottom: 3rem;
}
.article-header .category-label { margin-bottom: 1rem; }
.article-headline {
    font-family: var(--font-heading);
    font-size: clamp(2.2rem, 4vw, 3.8rem);
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 1.2rem;
}
.article-deck {
    font-size: 1.15rem;
    color: var(--color-muted);
    line-height: 1.65;
    font-style: italic;
    margin-bottom: 1.5rem;
    max-width: 680px;
}
.article-meta {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 0.75rem;
    color: var(--color-muted);
    padding-top: 1.2rem;
    border-top: 1px solid var(--color-border);
}
.article-meta strong { color: var(--color-text); }
.article-layout {
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 5rem;
    padding-bottom: var(--section-gap);
}
.article-body { }
.article-body p {
    font-size: 1.05rem;
    line-height: 1.9;
    margin-bottom: 1.6rem;
    color: var(--color-text);
}
.article-body p:first-of-type::first-letter {
    font-family: var(--font-heading);
    font-size: 4.5rem;
    font-weight: 400;
    float: left;
    line-height: 0.8;
    margin-right: 0.12em;
    margin-top: 0.08em;
    color: var(--color-accent);
}
.article-body h2 {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    font-weight: 400;
    margin: 3rem 0 1.2rem;
    line-height: 1.2;
}
.article-body blockquote {
    margin: 3rem 0;
    padding: 2rem 2.5rem;
    border-left: 3px solid var(--color-accent);
    background: var(--color-accent-light);
}
.article-body blockquote p {
    font-family: var(--font-heading);
    font-style: italic;
    font-size: 1.4rem;
    line-height: 1.5;
    color: var(--color-text);
    margin-bottom: 0.6rem;
}
.article-body blockquote p:first-of-type::first-letter { all: unset; }
.article-body blockquote cite {
    font-size: 0.78rem;
    color: var(--color-muted);
    font-style: normal;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: block;
}
.article-body figure {
    margin: 2.5rem 0;
}
.article-body figure img {
    width: 100%;
    max-height: 540px;
    object-fit: cover;
}
.article-body figcaption {
    font-size: 0.75rem;
    color: var(--color-muted);
    font-style: italic;
    margin-top: 0.6rem;
    padding-left: 1rem;
    border-left: 2px solid var(--color-border);
}
.article-sidebar { }
.article-sidebar .sidebar-widget:first-child {
    border-top: 2px solid var(--color-text);
    padding-top: 1.5rem;
    margin-top: 0;
}

/* ===== ISSUE PAGE ===== */
.issue-hero {
    padding-top: 64px;
    background: var(--color-text);
    color: var(--white);
    padding-bottom: 4rem;
}
.issue-hero .container {
    display: grid;
    grid-template-columns: 340px 1fr;
    gap: 5rem;
    align-items: center;
    padding-top: 4rem;
}
.issue-cover-img {
    width: 100%;
    box-shadow: 0 40px 80px rgba(0,0,0,0.5);
}
.issue-hero-body { }
.issue-number {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--color-accent);
    margin-bottom: 1.5rem;
}
.issue-hero-body h1 {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 1rem;
    color: var(--white);
}
.issue-hero-body p {
    font-size: 1rem;
    color: rgba(255,255,255,0.6);
    line-height: 1.7;
    margin-bottom: 2rem;
}
.btn-get-issue {
    display: inline-block;
    padding: 0.9rem 2.2rem;
    background: var(--color-accent);
    color: var(--white);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    transition: var(--transition);
    cursor: pointer;
    border: none;
}
.btn-get-issue:hover { background: #7a5e34; }
.toc-section { padding: var(--section-gap) 0; }
.toc-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
}
.toc-item { border-top: 2px solid var(--color-text); padding-top: 1.5rem; }
.toc-number {
    font-family: var(--font-heading);
    font-size: 3rem;
    font-weight: 400;
    color: var(--color-border);
    line-height: 1;
    margin-bottom: 0.8rem;
}
.toc-item h3 {
    font-family: var(--font-heading);
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 0.5rem;
}
.toc-item h3 a:hover { color: var(--color-accent); }
.toc-item p { font-size: 0.83rem; color: var(--color-muted); line-height: 1.6; }
.toc-item .byline { margin-top: 0.6rem; }
.archive-section { padding: var(--section-gap) 0; background: var(--color-surface); }
.archive-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 2rem;
}
.archive-item img {
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    margin-bottom: 0.8rem;
    transition: transform 0.5s ease;
}
.archive-item:hover img { transform: scale(1.03); }
.archive-item p {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-muted);
    margin-bottom: 0.2rem;
}
.archive-item h4 {
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 400;
}

/* ===== ABOUT PAGE ===== */
.about-hero {
    padding-top: 64px;
    min-height: 70vh;
    display: flex;
    align-items: flex-end;
    position: relative;
    overflow: hidden;
}
.about-hero-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.about-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
}
.about-hero-content {
    position: relative;
    padding: 4rem 2.5rem;
    max-width: calc(var(--container) + 5rem);
    margin: 0 auto;
    width: 100%;
}
.about-hero-content h1 {
    font-family: var(--font-heading);
    font-size: clamp(3rem, 6vw, 6rem);
    font-weight: 400;
    color: var(--white);
    line-height: 1;
    margin-bottom: 1rem;
    max-width: 700px;
}
.about-hero-content p {
    font-size: 1rem;
    color: rgba(255,255,255,0.7);
    max-width: 500px;
    line-height: 1.65;
}
.manifesto-section {
    padding: var(--section-gap) 0;
    border-bottom: 1px solid var(--color-border);
}
.manifesto-layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 5rem;
    align-items: start;
}
.manifesto-label {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--color-muted);
    padding-top: 0.4rem;
}
.manifesto-text h2 {
    font-family: var(--font-heading);
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 400;
    line-height: 1.25;
    margin-bottom: 1.5rem;
}
.manifesto-text p {
    font-size: 1rem;
    color: var(--color-muted);
    line-height: 1.85;
    margin-bottom: 1.2rem;
}
.values-section { padding: var(--section-gap) 0; background: var(--color-surface); }
.values-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    border: 1px solid var(--color-border);
    margin-top: 2.5rem;
}
.value-card {
    padding: 2.5rem 2rem;
    border-right: 1px solid var(--color-border);
}
.value-card:last-child { border-right: none; }
.value-number {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--color-border);
    line-height: 1;
    margin-bottom: 1rem;
}
.value-card h3 {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: 0.6rem;
}
.value-card p { font-size: 0.83rem; color: var(--color-muted); line-height: 1.7; }
.team-section { padding: var(--section-gap) 0; }
.team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin-top: 2.5rem;
}
.team-card img {
    width: 100%;
    height: 360px;
    object-fit: cover;
    object-position: top;
    margin-bottom: 1.2rem;
    filter: grayscale(20%);
    transition: filter 0.4s ease;
}
.team-card:hover img { filter: grayscale(0%); }
.team-card h4 {
    font-family: var(--font-heading);
    font-size: 1.15rem;
    font-weight: 400;
    margin-bottom: 0.2rem;
}
.team-card .role {
    font-size: 0.75rem;
    color: var(--color-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
    margin-bottom: 0.6rem;
}
.team-card p { font-size: 0.83rem; color: var(--color-muted); line-height: 1.65; }

/* ===== FOOTER ===== */
.footer {
    background: var(--color-text);
    color: var(--white);
    padding: 4rem 0 2.5rem;
}
.footer-top {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
    border-bottom: 1px solid rgba(255,255,255,0.1);
}
.footer-logo {
    font-family: var(--font-heading);
    font-size: 2.2rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
}
.footer-tagline {
    font-size: 0.72rem;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    grid-column: 1;
    grid-row: 1;
    align-self: center;
}
.footer-subscribe-cta {
    text-align: right;
    grid-column: 3;
}
.footer-subscribe-cta p {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.5);
    margin-bottom: 0.6rem;
}
.footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-bottom: 3rem;
}
.footer-col h5 {
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: rgba(255,255,255,0.4);
    margin-bottom: 1.2rem;
}
.footer-col nav {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
}
.footer-col nav a {
    font-size: 0.82rem;
    color: rgba(255,255,255,0.65);
    transition: var(--transition);
}
.footer-col nav a:hover { color: var(--white); }
.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.72rem;
    color: rgba(255,255,255,0.3);
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.08);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
    .featured-grid { grid-template-columns: 1fr; }
    .featured-main { border-right: none; }
    .featured-stack { grid-template-columns: repeat(2, 1fr); grid-template-rows: auto; }
    .featured-stack-item { border-right: 1px solid var(--color-border); }
    .featured-stack-item:nth-child(2) { border-right: none; }
    .latest-layout { grid-template-columns: 1fr; }
    .article-layout { grid-template-columns: 1fr; }
    .issue-hero .container { grid-template-columns: 260px 1fr; gap: 3rem; }
    .toc-grid { grid-template-columns: repeat(2, 1fr); }
    .values-grid { grid-template-columns: repeat(2, 1fr); }
    .value-card:nth-child(2) { border-right: none; }
    .team-grid { grid-template-columns: repeat(2, 1fr); }
    .manifesto-layout { grid-template-columns: 1fr; gap: 2rem; }
}
@media (max-width: 768px) {
    :root { --section-gap: 4rem; }
    .nav-links { display: none; }
    .cover-headline { font-size: 2.2rem; }
    .picks-grid { grid-template-columns: 1fr; }
    .latest-item { grid-template-columns: 1fr; }
    .latest-item img { width: 100%; height: 200px; }
    .issue-hero .container { grid-template-columns: 1fr; }
    .issue-cover-img { max-width: 280px; margin: 0 auto; }
    .toc-grid, .archive-grid { grid-template-columns: repeat(2, 1fr); }
    .values-grid { grid-template-columns: 1fr; }
    .value-card { border-right: none; border-bottom: 1px solid var(--color-border); }
    .team-grid { grid-template-columns: 1fr; }
    .footer-grid { grid-template-columns: repeat(2, 1fr); }
    .footer-top { grid-template-columns: 1fr; gap: 1.5rem; }
    .footer-tagline, .footer-subscribe-cta { grid-column: 1; text-align: left; }
    .footer-bottom { flex-direction: column; gap: 0.5rem; }
}
```

---

## 2. main.js

```javascript
document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const updateNav = () => {
            if (window.scrollY > 60) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', updateNav, { passive: true });
        updateNav();
    }

    // 2. Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // 3. Newsletter form (demo)
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            const btn = newsletterForm.querySelector('button');
            if (input.value.trim()) {
                btn.textContent = 'Subscribed ✓';
                input.value = '';
                setTimeout(() => { btn.textContent = 'Subscribe'; }, 3000);
            }
        });
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
    <title>VINUS — Culture. Design. Living.</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="nav-logo">VINUS</a>
            <div class="nav-links">
                <a href="index.html" class="active">Home</a>
                <a href="issue.html">Issue</a>
                <a href="article.html">Culture</a>
                <a href="article.html">Design</a>
                <a href="article.html">Living</a>
                <a href="about.html">About</a>
                <button class="btn-nav-subscribe">Subscribe</button>
            </div>
        </div>
    </nav>

    <!-- Cover Hero -->
    <section class="cover-hero">
        <img class="cover-hero-img" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80" alt="Cover Story">
        <div class="cover-hero-overlay"></div>
        <div class="cover-hero-content container">
            <span class="cover-issue-label">Issue 47 — May 2026</span>
            <h1 class="cover-headline">The New Language of Interiors: How Silence Became a Design Statement</h1>
            <p class="cover-deck">A generation of architects and decorators is stripping away the excess — and discovering that what remains is everything.</p>
            <div class="cover-byline">By <strong>Margot Vellacott</strong> · Culture Editor</div>
            <a href="article.html" class="btn-read-story">Read the Story →</a>
        </div>
    </section>

    <!-- Featured Stories -->
    <section class="featured-section">
        <div class="container">
            <p class="section-heading">Featured</p>
            <div class="featured-grid">
                <div class="featured-main">
                    <img class="featured-main-img" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80" alt="">
                    <div class="featured-main-body">
                        <span class="category-label">Design</span>
                        <h2><a href="article.html">The Architects Who Are Building for the End of the Car</a></h2>
                        <p>Across Europe and Asia, a new generation of urban planners is redesigning cities around pedestrians, cyclists, and the radical idea that streets belong to people.</p>
                        <div class="byline">By <strong>Daniel Osei</strong> · 12 min read</div>
                    </div>
                </div>
                <div class="featured-stack">
                    <div class="featured-stack-item">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="">
                        <span class="category-label">Culture</span>
                        <h3><a href="article.html">The Quiet Revival of Independent Bookshops — And What It Tells Us About How We Read</a></h3>
                        <p>Foot traffic is up. Amazon's grip is weakening. Something is changing.</p>
                        <div class="byline" style="margin-top: 0.5rem;">By <strong>Isla Brennan</strong> · 8 min read</div>
                    </div>
                    <div class="featured-stack-item">
                        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" alt="">
                        <span class="category-label">Living</span>
                        <h3><a href="article.html">Why Slow Travel Is the Most Political Act You Can Take This Year</a></h3>
                        <p>The case for overland journeys, overnight trains, and arriving somewhere already changed.</p>
                        <div class="byline" style="margin-top: 0.5rem;">By <strong>Theo Lindqvist</strong> · 10 min read</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Editors Picks -->
    <section class="editors-picks">
        <div class="container">
            <p class="section-heading">Editor's Picks</p>
            <div class="picks-grid">
                <div class="pick-card">
                    <div class="pick-img">
                        <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80" alt="">
                    </div>
                    <span class="category-label">Living</span>
                    <h3><a href="article.html">The Japanese Practice of Forest Bathing, and Why It Works</a></h3>
                    <p>Shinrin-yoku is not a trend. It is a centuries-old technology for resetting a mind depleted by modernity.</p>
                    <div class="byline">By <strong>Keiko Murakami</strong> · 7 min read</div>
                </div>
                <div class="pick-card">
                    <div class="pick-img">
                        <img src="https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?w=800&q=80" alt="">
                    </div>
                    <span class="category-label">Culture</span>
                    <h3><a href="article.html">The Return of Long-Form Journalism in the Age of the Scroll</a></h3>
                    <p>Readers are spending more time with fewer things. Publishers are beginning to notice.</p>
                    <div class="byline">By <strong>Sophie Arnaud</strong> · 9 min read</div>
                </div>
                <div class="pick-card">
                    <div class="pick-img">
                        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80" alt="">
                    </div>
                    <span class="category-label">Design</span>
                    <h3><a href="article.html">How the Most Sustainable Material in Architecture Has Been Here All Along</a></h3>
                    <p>Mass timber is not just a material. It is a philosophy — and its moment has finally arrived.</p>
                    <div class="byline">By <strong>Lars Eriksson</strong> · 11 min read</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Latest + Sidebar -->
    <section class="latest-section">
        <div class="container">
            <div class="latest-layout">
                <div class="latest-list">
                    <p class="section-heading">Latest</p>
                    <div class="latest-item">
                        <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80" alt="">
                        <div class="latest-item-body">
                            <span class="category-label">Design</span>
                            <h3><a href="article.html">The Living Room Is Dead. Long Live the Living Room.</a></h3>
                            <p>Post-pandemic habits have permanently rewritten how we use domestic space. Designers are finally catching up.</p>
                            <div class="byline">By <strong>Margot Vellacott</strong> · May 2, 2026</div>
                        </div>
                    </div>
                    <div class="latest-item">
                        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80" alt="">
                        <div class="latest-item-body">
                            <span class="category-label">Living</span>
                            <h3><a href="article.html">The Fermentation Revival: Why Chefs and Home Cooks Are Rediscovering an Ancient Art</a></h3>
                            <p>From miso to sourdough to kimchi, the culture of culture is transforming kitchens worldwide.</p>
                            <div class="byline">By <strong>Nina Castelli</strong> · May 1, 2026</div>
                        </div>
                    </div>
                    <div class="latest-item">
                        <img src="https://images.unsplash.com/photo-1446776709462-d6b525b76f29?w=400&q=80" alt="">
                        <div class="latest-item-body">
                            <span class="category-label">Culture</span>
                            <h3><a href="article.html">The Sound of Solitude: Inside the World of Ambient Music's New Wave</a></h3>
                            <p>A generation of composers is creating music designed not to be listened to — and finding huge audiences.</p>
                            <div class="byline">By <strong>James Okafor</strong> · April 30, 2026</div>
                        </div>
                    </div>
                    <div class="latest-item">
                        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80" alt="">
                        <div class="latest-item-body">
                            <span class="category-label">Living</span>
                            <h3><a href="article.html">Night Hiking: The Case for Exploring the Dark</a></h3>
                            <p>When the trail empties and the sky opens, a different kind of clarity becomes possible.</p>
                            <div class="byline">By <strong>Elsa Moreau</strong> · April 29, 2026</div>
                        </div>
                    </div>
                </div>
                <aside class="latest-sidebar">
                    <div class="sidebar-widget">
                        <h4>Also Reading</h4>
                        <div class="sidebar-mini-item">
                            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&q=80" alt="">
                            <div>
                                <span class="category-label">Design</span>
                                <h5><a href="article.html">The Most Influential Designers of the Decade</a></h5>
                            </div>
                        </div>
                        <div class="sidebar-mini-item">
                            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&q=80" alt="">
                            <div>
                                <span class="category-label">Living</span>
                                <h5><a href="article.html">A Traveller's Guide to the World's Best Hotel Libraries</a></h5>
                            </div>
                        </div>
                        <div class="sidebar-mini-item">
                            <img src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=200&q=80" alt="">
                            <div>
                                <span class="category-label">Culture</span>
                                <h5><a href="article.html">Craft Is Back. But Is It Here to Stay?</a></h5>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-widget">
                        <h4>Current Issue</h4>
                        <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80" alt="Issue 47" style="width:100%;margin-bottom:1rem;">
                        <p style="font-size:0.82rem;color:var(--color-muted);line-height:1.6;margin-bottom:1rem;">Issue 47 — May 2026<br>The Silence Issue</p>
                        <a href="issue.html" style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;border-bottom:1px solid var(--color-text);">View Full Issue →</a>
                    </div>
                </aside>
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <section class="newsletter-strip">
        <div class="container">
            <h2>The VINUS Letter</h2>
            <p>Thoughtful writing on culture, design, and living — once a week, no noise.</p>
            <form class="newsletter-form">
                <input type="email" placeholder="Your email address">
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-tagline">Culture · Design · Living</div>
                <div class="footer-logo">VINUS</div>
                <div class="footer-subscribe-cta">
                    <p>Est. 2009 · Issue 47</p>
                    <button class="btn-get-issue">Subscribe Now</button>
                </div>
            </div>
            <div class="footer-grid">
                <div class="footer-col">
                    <h5>Sections</h5>
                    <nav>
                        <a href="article.html">Culture</a>
                        <a href="article.html">Design</a>
                        <a href="article.html">Living</a>
                        <a href="article.html">Travel</a>
                        <a href="article.html">Food</a>
                    </nav>
                </div>
                <div class="footer-col">
                    <h5>Magazine</h5>
                    <nav>
                        <a href="issue.html">Current Issue</a>
                        <a href="issue.html">Archive</a>
                        <a href="about.html">About VINUS</a>
                        <a href="about.html">Our Team</a>
                    </nav>
                </div>
                <div class="footer-col">
                    <h5>Subscribe</h5>
                    <nav>
                        <a href="#">Print + Digital</a>
                        <a href="#">Digital Only</a>
                        <a href="#">Newsletter</a>
                        <a href="#">Gift a Subscription</a>
                    </nav>
                </div>
                <div class="footer-col">
                    <h5>Follow</h5>
                    <nav>
                        <a href="#">Instagram</a>
                        <a href="#">Pinterest</a>
                        <a href="#">Twitter / X</a>
                        <a href="#">RSS Feed</a>
                    </nav>
                </div>
            </div>
            <div class="footer-bottom">
                <span>© 2026 VINUS Magazine. All rights reserved.</span>
                <div style="display:flex;gap:2rem;">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Advertise</a>
                </div>
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
    <title>The New Language of Interiors — VINUS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="nav-logo">VINUS</a>
            <div class="nav-links">
                <a href="index.html">Home</a>
                <a href="issue.html">Issue</a>
                <a href="article.html" class="active">Culture</a>
                <a href="article.html">Design</a>
                <a href="article.html">Living</a>
                <a href="about.html">About</a>
                <button class="btn-nav-subscribe">Subscribe</button>
            </div>
        </div>
    </nav>

    <div class="article-hero">
        <img class="article-hero-img" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80" alt="Interior">
        <p class="article-hero-caption">The home of architect Elise Vandermeer in Ghent, Belgium. Photography by Pieter Claes.</p>
    </div>

    <main>
        <div class="container-narrow">
            <header class="article-header">
                <span class="category-label">Design</span>
                <h1 class="article-headline">The New Language of Interiors: How Silence Became a Design Statement</h1>
                <p class="article-deck">A generation of architects and decorators is stripping away the excess — and discovering that what remains is everything.</p>
                <div class="article-meta">
                    <span>By <strong>Margot Vellacott</strong>, Culture Editor</span>
                    <span>May 3, 2026</span>
                    <span>12 min read</span>
                    <span>Issue 47</span>
                </div>
            </header>

            <div class="article-layout">
                <article class="article-body">

                    <p>There is a room in Ghent that contains almost nothing. A single oak table, worn smooth by decades of use. Two chairs. A window that looks onto a courtyard where a fig tree grows. No art on the walls. No decoration of any kind. And yet standing in it, you feel — unmistakably, powerfully — that this is a room designed with extraordinary care.</p>

                    <p>The room belongs to Elise Vandermeer, a Belgian architect who has spent the past fifteen years developing what she describes as a practice of "considered absence." It is an approach that is finding increasing resonance at a moment when many of us feel overwhelmed by the visual noise of contemporary life — by the feeds and the notifications and the relentless accumulation of things.</p>

                    <blockquote>
                        <p>"I am not interested in emptiness for its own sake. I am interested in what happens when you remove everything that is unnecessary and discover what is left."</p>
                        <cite>— Elise Vandermeer, Architect</cite>
                    </blockquote>

                    <p>Vandermeer is not alone. Across Europe, Asia, and North America, a generation of architects, interior designers, and craftspeople are working in a mode that resists easy categorisation. It is not minimalism, exactly — there is too much warmth, too much attention to natural materials and handmade objects. It is not maximalism. It might best be described as a kind of edited abundance: spaces that feel generous and alive precisely because every element has been chosen with absolute intentionality.</p>

                    <h2>The Materials That Matter</h2>

                    <p>At the heart of this movement is a renewed interest in natural materials — stone, timber, linen, clay, leather — that age gracefully and carry the evidence of their own making. These are materials that resist the flattening effect of digital culture, that cannot be reproduced exactly, that exist in time in a way that mass-produced objects do not.</p>

                    <figure>
                        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80" alt="Natural materials in interior design">
                        <figcaption>A detail from Vandermeer's studio space, featuring reclaimed timber and hand-thrown ceramics from a workshop in Oaxaca.</figcaption>
                    </figure>

                    <p>In Tokyo, designer Yuki Hasegawa has built an entire practice around the Japanese concept of <em>mono no aware</em> — the bittersweet awareness of impermanence — applying it to residential interiors in ways that feel simultaneously ancient and urgently contemporary. Her spaces feature unpolished plaster walls, iron hardware patinated by hand, floors of natural stone that will wear differently in every room.</p>

                    <p>"I want people to feel time in the spaces I design," Hasegawa tells me over tea in her studio in Minami-Aoyama. "Not a frozen moment — time that is moving, that is alive. A surface that will be different next year than it is today."</p>

                    <h2>Against the Algorithm</h2>

                    <p>There is something almost political about this approach at a time when so much visual culture is shaped by the logic of social media — optimised for a specific kind of immediate impact, designed to produce a response at a glance. The spaces that Vandermeer, Hasegawa, and their peers create are explicitly resistant to this logic. They reward sustained attention. They get better as you live in them.</p>

                    <p>"The algorithm wants everything to be immediately legible," says London-based designer Patrick Adeyemi, whose work has been featured in this magazine several times over the past decade. "I'm interested in spaces that take time to understand. Spaces that you're still discovering six months after you move in."</p>

                    <p>This is, in a sense, a very old idea — the idea that the best-designed environments are those that seem to grow richer over time, rather than exhausting themselves immediately. But it feels newly relevant at a moment when so much of our experience of the world is mediated by screens designed to capture and hold our attention for the briefest possible moment before moving on.</p>

                </article>

                <aside class="article-sidebar">
                    <div class="sidebar-widget">
                        <h4>Related Stories</h4>
                        <div class="sidebar-mini-item">
                            <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=200&q=80" alt="">
                            <div>
                                <span class="category-label">Design</span>
                                <h5><a href="article.html">The Architects Who Are Building for the End of the Car</a></h5>
                            </div>
                        </div>
                        <div class="sidebar-mini-item">
                            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&q=80" alt="">
                            <div>
                                <span class="category-label">Design</span>
                                <h5><a href="article.html">How Mass Timber Is Transforming the Built Environment</a></h5>
                            </div>
                        </div>
                        <div class="sidebar-mini-item">
                            <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=200&q=80" alt="">
                            <div>
                                <span class="category-label">Living</span>
                                <h5><a href="article.html">The Japanese Practice of Forest Bathing, and Why It Works</a></h5>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-widget">
                        <h4>From This Issue</h4>
                        <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80" alt="Issue 47" style="width:100%;margin-bottom:0.8rem;">
                        <p style="font-size:0.8rem;color:var(--color-muted);line-height:1.6;margin-bottom:1rem;font-style:italic;">Issue 47 — The Silence Issue. On interiors, music, meditation, and the radical act of doing less.</p>
                        <a href="issue.html" style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;border-bottom:1px solid var(--color-text);">View Full Issue →</a>
                    </div>
                </aside>
            </div>
        </div>
    </main>

    <section class="newsletter-strip">
        <div class="container">
            <h2>The VINUS Letter</h2>
            <p>Thoughtful writing on culture, design, and living — once a week, no noise.</p>
            <form class="newsletter-form">
                <input type="email" placeholder="Your email address">
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-tagline">Culture · Design · Living</div>
                <div class="footer-logo">VINUS</div>
                <div class="footer-subscribe-cta">
                    <p>Est. 2009 · Issue 47</p>
                    <button class="btn-get-issue">Subscribe Now</button>
                </div>
            </div>
            <div class="footer-grid">
                <div class="footer-col">
                    <h5>Sections</h5>
                    <nav>
                        <a href="article.html">Culture</a>
                        <a href="article.html">Design</a>
                        <a href="article.html">Living</a>
                        <a href="article.html">Travel</a>
                        <a href="article.html">Food</a>
                    </nav>
                </div>
                <div class="footer-col">
                    <h5>Magazine</h5>
                    <nav>
                        <a href="issue.html">Current Issue</a>
                        <a href="issue.html">Archive</a>
                        <a href="about.html">About VINUS</a>
                        <a href="about.html">Our Team</a>
                    </nav>
                </div>
                <div class="footer-col">
                    <h5>Subscribe</h5>
                    <nav>
                        <a href="#">Print + Digital</a>
                        <a href="#">Digital Only</a>
                        <a href="#">Newsletter</a>
                        <a href="#">Gift a Subscription</a>
                    </nav>
                </div>
                <div class="footer-col">
                    <h5>Follow</h5>
                    <nav>
                        <a href="#">Instagram</a>
                        <a href="#">Pinterest</a>
                        <a href="#">Twitter / X</a>
                        <a href="#">RSS Feed</a>
                    </nav>
                </div>
            </div>
            <div class="footer-bottom">
                <span>© 2026 VINUS Magazine. All rights reserved.</span>
                <div style="display:flex;gap:2rem;">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Advertise</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>
```

---

## 5. issue.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Issue 47: The Silence Issue — VINUS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="nav-logo">VINUS</a>
            <div class="nav-links">
                <a href="index.html">Home</a>
                <a href="issue.html" class="active">Issue</a>
                <a href="article.html">Culture</a>
                <a href="article.html">Design</a>
                <a href="article.html">Living</a>
                <a href="about.html">About</a>
                <button class="btn-nav-subscribe">Subscribe</button>
            </div>
        </div>
    </nav>

    <div class="issue-hero">
        <div class="container">
            <div class="issue-number">Issue 47 — May 2026</div>
            <img class="issue-cover-img" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" alt="Issue 47 Cover">
            <div class="issue-hero-body">
                <h1>The Silence Issue</h1>
                <p>On interiors stripped of excess, music designed to disappear, travel that slows the clock, and the architects of deliberate calm. Forty-seven pages on the radical power of doing less — and what fills the space when we do.</p>
                <button class="btn-get-issue">Get This Issue — $18</button>
            </div>
        </div>
    </div>

    <main>

        <!-- Table of Contents -->
        <section class="toc-section">
            <div class="container">
                <p class="section-heading">In This Issue</p>
                <div class="toc-grid">
                    <div class="toc-item">
                        <div class="toc-number">01</div>
                        <span class="category-label">Design</span>
                        <h3><a href="article.html">The New Language of Interiors</a></h3>
                        <p>A generation of architects discovers that what you leave out is as important as what you put in.</p>
                        <div class="byline">By <strong>Margot Vellacott</strong></div>
                    </div>
                    <div class="toc-item">
                        <div class="toc-number">02</div>
                        <span class="category-label">Culture</span>
                        <h3><a href="article.html">The Sound of Solitude</a></h3>
                        <p>Inside the world of ambient music's new wave — and its unlikely mass audience.</p>
                        <div class="byline">By <strong>James Okafor</strong></div>
                    </div>
                    <div class="toc-item">
                        <div class="toc-number">03</div>
                        <span class="category-label">Living</span>
                        <h3><a href="article.html">Why Slow Travel Is the Most Political Act You Can Take</a></h3>
                        <p>The case for trains, ships, and arriving somewhere already changed.</p>
                        <div class="byline">By <strong>Theo Lindqvist</strong></div>
                    </div>
                    <div class="toc-item">
                        <div class="toc-number">04</div>
                        <span class="category-label">Living</span>
                        <h3><a href="article.html">The Japanese Practice of Forest Bathing</a></h3>
                        <p>Shinrin-yoku is not a wellness trend. It is a centuries-old technology for a depleted mind.</p>
                        <div class="byline">By <strong>Keiko Murakami</strong></div>
                    </div>
                    <div class="toc-item">
                        <div class="toc-number">05</div>
                        <span class="category-label">Design</span>
                        <h3><a href="article.html">The Architects Building for the End of the Car</a></h3>
                        <p>Cities are being redesigned around people. The car is losing the argument.</p>
                        <div class="byline">By <strong>Daniel Osei</strong></div>
                    </div>
                    <div class="toc-item">
                        <div class="toc-number">06</div>
                        <span class="category-label">Food</span>
                        <h3><a href="article.html">The Fermentation Revival</a></h3>
                        <p>Why chefs and home cooks are rediscovering one of humanity's oldest arts.</p>
                        <div class="byline">By <strong>Nina Castelli</strong></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Archive -->
        <section class="archive-section">
            <div class="container">
                <p class="section-heading">Past Issues</p>
                <div class="archive-grid">
                    <div class="archive-item">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Issue 46">
                        <p>Issue 46 — April 2026</p>
                        <h4>The Makers Issue</h4>
                    </div>
                    <div class="archive-item">
                        <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&q=80" alt="Issue 45">
                        <p>Issue 45 — March 2026</p>
                        <h4>The Nature Issue</h4>
                    </div>
                    <div class="archive-item">
                        <img src="https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?w=400&q=80" alt="Issue 44">
                        <p>Issue 44 — February 2026</p>
                        <h4>The Reading Issue</h4>
                    </div>
                    <div class="archive-item">
                        <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80" alt="Issue 43">
                        <p>Issue 43 — January 2026</p>
                        <h4>The Home Issue</h4>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <section class="newsletter-strip">
        <div class="container">
            <h2>The VINUS Letter</h2>
            <p>Thoughtful writing on culture, design, and living — once a week, no noise.</p>
            <form class="newsletter-form">
                <input type="email" placeholder="Your email address">
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-tagline">Culture · Design · Living</div>
                <div class="footer-logo">VINUS</div>
                <div class="footer-subscribe-cta">
                    <p>Est. 2009 · Issue 47</p>
                    <button class="btn-get-issue">Subscribe Now</button>
                </div>
            </div>
            <div class="footer-grid">
                <div class="footer-col">
                    <h5>Sections</h5>
                    <nav>
                        <a href="article.html">Culture</a>
                        <a href="article.html">Design</a>
                        <a href="article.html">Living</a>
                        <a href="article.html">Travel</a>
                        <a href="article.html">Food</a>
                    </nav>
                </div>
                <div class="footer-col">
                    <h5>Magazine</h5>
                    <nav>
                        <a href="issue.html">Current Issue</a>
                        <a href="issue.html">Archive</a>
                        <a href="about.html">About VINUS</a>
                        <a href="about.html">Our Team</a>
                    </nav>
                </div>
                <div class="footer-col">
                    <h5>Subscribe</h5>
                    <nav>
                        <a href="#">Print + Digital</a>
                        <a href="#">Digital Only</a>
                        <a href="#">Newsletter</a>
                        <a href="#">Gift a Subscription</a>
                    </nav>
                </div>
                <div class="footer-col">
                    <h5>Follow</h5>
                    <nav>
                        <a href="#">Instagram</a>
                        <a href="#">Pinterest</a>
                        <a href="#">Twitter / X</a>
                        <a href="#">RSS Feed</a>
                    </nav>
                </div>
            </div>
            <div class="footer-bottom">
                <span>© 2026 VINUS Magazine. All rights reserved.</span>
                <div style="display:flex;gap:2rem;">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Advertise</a>
                </div>
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
    <title>About — VINUS Magazine</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="nav-logo">VINUS</a>
            <div class="nav-links">
                <a href="index.html">Home</a>
                <a href="issue.html">Issue</a>
                <a href="article.html">Culture</a>
                <a href="article.html">Design</a>
                <a href="article.html">Living</a>
                <a href="about.html" class="active">About</a>
                <button class="btn-nav-subscribe">Subscribe</button>
            </div>
        </div>
    </nav>

    <div class="about-hero">
        <img class="about-hero-img" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=80" alt="VINUS Studio">
        <div class="about-hero-overlay"></div>
        <div class="about-hero-content">
            <h1>We believe in the power of slowness.</h1>
            <p>VINUS is a magazine for people who want to look more carefully at the world — at how things are made, where they come from, and why they matter.</p>
        </div>
    </div>

    <main>

        <!-- Manifesto -->
        <section class="manifesto-section">
            <div class="container">
                <div class="manifesto-layout">
                    <div class="manifesto-label">Our Manifesto</div>
                    <div class="manifesto-text">
                        <h2>Thoughtful journalism for a world that moves too fast.</h2>
                        <p>VINUS was founded in 2009 with a simple conviction: that the most interesting things happening in culture, design, and the way we live deserve more than a headline and a scroll. We make a magazine for readers who want to sit with an idea, to follow a writer into a subject, to emerge on the other side knowing something they didn't know before.</p>
                        <p>We are independently owned and editorially independent. We take no advertising from the industries we cover. We are not optimised for clicks, shares, or the attention economy. We are optimised for the reader who wants to spend forty minutes with one thing — and to feel, at the end of it, that their time was well spent.</p>
                        <p>We publish six times a year in print and continuously online. Our writers include some of the most respected journalists, critics, and essayists working today. Our photographers work exclusively — no stock, no shortcuts.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Values -->
        <section class="values-section">
            <div class="container">
                <p class="section-heading">What We Stand For</p>
                <div class="values-grid">
                    <div class="value-card">
                        <div class="value-number">01</div>
                        <h3>Independence</h3>
                        <p>We are reader-supported and take no advertising from the industries we cover. Our editorial decisions are made entirely on the basis of what interests, challenges, and enriches our readers.</p>
                    </div>
                    <div class="value-card">
                        <div class="value-number">02</div>
                        <h3>Depth</h3>
                        <p>We believe the best journalism takes time — to report, to write, to edit, and to read. We give our writers the space to go deep, and we trust our readers to come with us.</p>
                    </div>
                    <div class="value-card">
                        <div class="value-number">03</div>
                        <h3>Craft</h3>
                        <p>From the weight of the paper to the spacing of the type, every element of VINUS is considered. We believe that how something is made is inseparable from what it means.</p>
                    </div>
                    <div class="value-card">
                        <div class="value-number">04</div>
                        <h3>Curiosity</h3>
                        <p>We follow our interests wherever they lead, across disciplines and geographies, without regard for what is trending or what the algorithm favours. Genuine curiosity is our only editorial compass.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Team -->
        <section class="team-section">
            <div class="container">
                <p class="section-heading">The Team</p>
                <div class="team-grid">
                    <div class="team-card">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80" alt="Editor in Chief">
                        <h4>Margot Vellacott</h4>
                        <div class="role">Editor in Chief</div>
                        <p>Margot has led VINUS since its founding in 2009. Previously Culture Editor at The European, she has written for publications in seven countries.</p>
                    </div>
                    <div class="team-card">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="Design Director">
                        <h4>Daniel Osei</h4>
                        <div class="role">Design Director</div>
                        <p>Daniel oversees the visual identity of VINUS across print and digital. He trained in typography at the Royal College of Art and has taught at Parsons.</p>
                    </div>
                    <div class="team-card">
                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80" alt="Senior Editor">
                        <h4>Isla Brennan</h4>
                        <div class="role">Senior Editor, Culture</div>
                        <p>Isla joined VINUS in 2014 after five years as a literary editor in Edinburgh. She oversees the magazine's books, film, and arts coverage.</p>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <section class="newsletter-strip">
        <div class="container">
            <h2>The VINUS Letter</h2>
            <p>Thoughtful writing on culture, design, and living — once a week, no noise.</p>
            <form class="newsletter-form">
                <input type="email" placeholder="Your email address">
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-tagline">Culture · Design · Living</div>
                <div class="footer-logo">VINUS</div>
                <div class="footer-subscribe-cta">
                    <p>Est. 2009 · Issue 47</p>
                    <button class="btn-get-issue">Subscribe Now</button>
                </div>
            </div>
            <div class="footer-grid">
                <div class="footer-col">
                    <h5>Sections</h5>
                    <nav>
                        <a href="article.html">Culture</a>
                        <a href="article.html">Design</a>
                        <a href="article.html">Living</a>
                        <a href="article.html">Travel</a>
                        <a href="article.html">Food</a>
                    </nav>
                </div>
                <div class="footer-col">
                    <h5>Magazine</h5>
                    <nav>
                        <a href="issue.html">Current Issue</a>
                        <a href="issue.html">Archive</a>
                        <a href="about.html">About VINUS</a>
                        <a href="about.html">Our Team</a>
                    </nav>
                </div>
                <div class="footer-col">
                    <h5>Subscribe</h5>
                    <nav>
                        <a href="#">Print + Digital</a>
                        <a href="#">Digital Only</a>
                        <a href="#">Newsletter</a>
                        <a href="#">Gift a Subscription</a>
                    </nav>
                </div>
                <div class="footer-col">
                    <h5>Follow</h5>
                    <nav>
                        <a href="#">Instagram</a>
                        <a href="#">Pinterest</a>
                        <a href="#">Twitter / X</a>
                        <a href="#">RSS Feed</a>
                    </nav>
                </div>
            </div>
            <div class="footer-bottom">
                <span>© 2026 VINUS Magazine. All rights reserved.</span>
                <div style="display:flex;gap:2rem;">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Advertise</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>
```

---

## 완료 확인

생성 완료 후 아래를 확인하십시오:

- [ ] `style.css` 생성됨 (DM Serif Display + Inter 폰트 import 포함)
- [ ] `main.js` 생성됨 (navbar scroll, newsletter form)
- [ ] `index.html` 생성됨 (cover hero 전체 화면, featured grid, editors picks, latest + sidebar, newsletter strip, footer)
- [ ] `article.html` 생성됨 (full-bleed hero image, dropcap 첫 문단, blockquote, figure + figcaption, sidebar)
- [ ] `issue.html` 생성됨 (어두운 배경 issue hero with cover image, TOC 그리드, archive 그리드)
- [ ] `about.html` 생성됨 (full-bleed hero, manifesto 2컬럼, values 4그리드, team 3그리드)
- [ ] **지시된 6개 파일 외 다른 파일은 일체 수정하지 않았는가**
