# Feedback & Progress Log (Cosmetic Template)

---

## [디자인 개선 지시] style.css 4곳 수정 (2026-05-03)

**경고: 지시된 4곳 외에 style.css의 다른 코드는 절대 건드리지 마십시오. 파일 전체 교체 엄금.**

---

### 개선 1: 제품 카드 — 버튼 hover reveal 효과 복구

현재 `.btn-add`는 항상 보입니다. Aureva 스타일처럼 hover 시에만 버튼이 올라오도록 해야 합니다.

현재:
```css
.btn-add {
    width: 100%; padding: 0.9rem; font-size: 0.82rem; font-weight: 600;
    border: 1px solid var(--color-text); background: transparent; transition: var(--transition);
}
.btn-add:hover { background: var(--color-text); color: var(--white); }
```

교체 후:
```css
.btn-add {
    width: 100%; padding: 0.9rem; font-size: 0.82rem; font-weight: 600;
    font-family: var(--font-main); letter-spacing: 0.05em; cursor: pointer;
    border: 1px solid var(--color-text); background: transparent;
    color: var(--color-text); border-radius: 0;
    opacity: 0; transform: translateY(8px); transition: var(--transition);
}
.product-card:hover .btn-add { opacity: 1; transform: translateY(0); }
.btn-add:hover { background: var(--color-text); color: var(--white); }
```

---

### 개선 2: Benefits 섹션 — 아이콘 스타일 + 섹션 헤더 여백

현재 `.benefit-icon` CSS가 없어서 아이콘 크기/여백이 없습니다. 아래를 Benefits 블록 안에 추가하십시오:

현재:
```css
.benefits-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 2rem; }
.benefit-item h4 { font-size: 1rem; font-weight: 600; margin-bottom: 0.6rem; }
.benefit-item p { font-size: 0.85rem; color: var(--color-muted); }
```

교체 후:
```css
.benefits-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 2rem; }
.benefit-item { text-align: left; }
.benefit-icon { width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; }
.benefit-item h4 { font-size: 0.9rem; font-weight: 700; margin-bottom: 0.6rem; letter-spacing: 0.02em; }
.benefit-item p { font-size: 0.85rem; color: var(--color-muted); line-height: 1.7; }
```

---

### 개선 3: Slider 버튼 — font-size 추가

현재 `.btn-slider`에 font-size가 없어서 화살표(← →)가 불균형합니다.

현재:
```css
.btn-slider {
    width: 56px; height: 56px; border: 1px solid var(--color-text);
    background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center;
}
```

교체 후:
```css
.btn-slider {
    width: 56px; height: 56px; border: 1px solid var(--color-text);
    background: transparent; cursor: pointer; font-size: 1.1rem; line-height: 1;
    border-radius: 0; display: flex; align-items: center; justify-content: center;
    transition: var(--transition);
}
```

---

### 개선 4: Blog 카드 — 이미지/텍스트 스타일 정리

현재 blog 관련 CSS가 불완전합니다. 아래로 교체하십시오:

현재:
```css
.blog, .journal-section { padding: var(--section-gap) 0; }
.blog-grid, .journal-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; }
.blog-img, .journal-card-img { overflow: hidden; margin-bottom: 1.5rem; }
.blog-img img, .journal-card-img img { width: 100%; height: 300px; object-fit: cover; transition: var(--transition); }
.blog-card:hover .blog-img img, .journal-card:hover .journal-card-img img { transform: scale(1.04); }
```

교체 후:
```css
.blog { padding: var(--section-gap) 0; background: var(--color-bg); }
.blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.blog-card { background: var(--color-surface); overflow: hidden; }
.blog-img { height: 280px; overflow: hidden; }
.blog-img img { width: 100%; height: 100%; object-fit: cover; transition: var(--transition); }
.blog-card:hover .blog-img img { transform: scale(1.05); }
.blog-info { padding: 1.8rem 1.5rem; }
.tag { display: inline-block; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; border: 1px solid var(--color-border); padding: 0.25rem 0.75rem; margin-bottom: 0.8rem; }
.blog-info h3 { font-size: 1rem; font-weight: 500; margin-bottom: 0.5rem; line-height: 1.4; color: var(--color-text); }
.date { font-size: 0.8rem; color: var(--color-muted); }
```

---

### 완료 확인

- [ ] 제품 카드 hover 전에는 버튼이 안 보이는가?
- [ ] Benefits 아이콘이 44×44px 영역 안에 정렬되어 보이는가?
- [ ] Slider ← → 버튼이 균형 잡혀 보이는가?
- [ ] Blog 카드에 tag, 제목, 날짜가 스타일링되어 보이는가?
- [ ] **style.css 외의 파일(index.html 등)은 수정하지 않았는가?**

---

---

## [수정 지시] 제품 버튼 + Hero 이미지 + CSS 중복 (2026-05-03)

### 수정 A: index.html — Product card 버튼 클래스 추가 (3곳)

제품 카드 버튼에 `btn` 클래스가 빠져서 보더/패딩이 전혀 없음. 아래 3곳 모두 수정:

**현재 (잘못됨):**
```html
<button class="btn-add">Add to Cart ↗</button>
```

**교체 후 (정확):**
```html
<button class="btn btn-add">Add to Cart ↗</button>
```

index.html 내 `btn-add` 버튼 3개 전부 이렇게 고쳐야 함.

---

### 수정 B: index.html — Hero product card 이미지 교체 (line 53)

현재 `photo-1571781926291-c477ebfd024b` 는 Curology 브랜드 보라색 제품 사진. 완전 오브랜드.

**현재:**
```html
<img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80" alt="Hydrating Ampoule Serum">
```

**교체 후:**
```html
<img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80" alt="Hydrating Ampoule Serum">
```

---

### 수정 C: style.css — `.btn-add` 중복 정의 제거

style.css에 `.btn-add`가 두 번 정의되어 있음 (219번, 472번). 두 번째 정의가 `width: 100%`를 덮어써서 버튼 폭이 무너짐.

아래 블록을 style.css에서 **완전히 삭제**하십시오:

```css
/* ===== PRODUCTS — 호버 시 버튼 노출 ===== */
.products { padding: var(--section-gap) 0; }
.btn-add {
    opacity: 0;
    transform: translateY(6px);
    transition: var(--transition);
}
.product-card:hover .btn-add {
    opacity: 1;
    transform: translateY(0);
}
```

그리고 style.css 219번 근처의 첫 번째 `.btn-add` 정의를 아래로 교체:

```css
.btn-add {
    width: 100%;
    padding: 0.9rem 1rem;
    font-size: 0.82rem;
    font-weight: 600;
    font-family: var(--font-main);
    letter-spacing: 0.05em;
    border: 1px solid var(--color-text);
    background: transparent;
    color: var(--color-text);
    cursor: pointer;
    border-radius: 0;
    opacity: 0;
    transform: translateY(8px);
    transition: var(--transition);
}
.product-card:hover .btn-add {
    opacity: 1;
    transform: translateY(0);
}
.btn-add:hover {
    background: var(--color-text);
    color: var(--white);
}
```

---

### 완료 확인

- [ ] 제품 카드 hover 시 `Add to Cart ↗` 버튼이 full-width 보더 버튼으로 보이는가?
- [ ] Hero product card에 Curology 브랜드 사진이 더 이상 없는가?
- [ ] style.css에 `.btn-add` 정의가 1개만 있는가?

---

## [CSS 수정 지시] Hero 여백 + Slider 버튼 (2026-05-03)

`style.css` 두 곳을 수정하십시오. **다른 CSS는 절대 건드리지 마십시오.**

---

### 수정 1: `.hero-top` margin-top 수정

**현재 (잘못됨):**
```css
.hero-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px 2rem 100px;
    margin-top: calc(var(--announcement-h) + var(--navbar-h));
    gap: 4rem;
}
```

**교체 후 (정확):**
```css
.hero-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px 2rem 100px;
    margin-top: var(--navbar-h);
    gap: 4rem;
}
```

이유: `body`에 이미 `padding-top: var(--announcement-h)`가 있어서 announcement-bar 높이는 body가 처리함. hero-top은 navbar 높이(80px)만 밀어주면 됨. `calc(--announcement-h + --navbar-h)`는 이중계산이라 히어로 상단에 불필요한 빈 공간 38px이 발생함.

---

### 수정 2: `.btn-slider` font-size 추가

**현재 (잘못됨):**
```css
.btn-slider {
    width: 56px; height: 56px;
    border: 1px solid var(--color-text);
    background: transparent; cursor: pointer;
    transition: var(--transition);
    display: flex; align-items: center; justify-content: center;
    border-radius: 0;
}
```

**교체 후 (정확):**
```css
.btn-slider {
    width: 56px; height: 56px;
    border: 1px solid var(--color-text);
    background: transparent; cursor: pointer;
    font-size: 1.1rem;
    line-height: 1;
    transition: var(--transition);
    display: flex; align-items: center; justify-content: center;
    border-radius: 0;
}
```

이유: font-size 미지정 시 화살표(← →) 크기가 부모에서 상속되어 버튼 크기와 불균형함.

---

### 완료 확인

- [ ] Hero 섹션 상단에 과도한 빈 공간이 없는가?
- [ ] Slider prev/next 버튼이 56×56px 정사각형으로 균형 잡혀 보이는가?
