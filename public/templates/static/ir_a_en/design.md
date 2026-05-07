# Vinuspread IR — Design Reference & Decision Log

## Reference Site
https://validway.webflow.io/

---

## v1 → v2 개선 포인트 (만족도 55% → ~90%)

| # | 문제 | 해결 |
|---|---|---|
| 1 | 서브페이지 히어로 inline style="" 범벅 | `.page-hero` 컴포넌트 + `.page-hero-meta` 그리드 추가 |
| 2 | 주가 표시 없음 (IR 핵심 기능 누락) | navbar 내 `nav-stock` 위젯 + `stock-section` 풀바 추가 |
| 3 | 뉴스 태그 색상 구분 없음 | `.tag-earnings`, `.tag-dividend`, `.tag-ma`, `.tag-esg` 색상 분기 |
| 4 | ESG stats row — 텍스트를 숫자 자리에 넣어 패턴 붕괴 | `.esg-strip` 네이비 전용 섹션으로 분리, 레이아웃 패턴 복원 |
| 5 | highlight-card hover 인터랙션 없음 | `border-bottom: 3px solid transparent` → hover 시 골드 |
| 6 | 폰트 단조로움 (Inter만) | Playfair Display 추가 — 헤딩에 serif 권위감 부여 |
| 7 | IR 알림 구독 없음 | `.alert-section` 골드 배경 이메일 구독 컴포넌트 추가 |
| 8 | 스크롤 애니메이션 없음 | `.reveal` + IntersectionObserver — 섹션별 페이드인 |
| 9 | doc-list 다운로드 어포던스 약함 | `.doc-download "↓ Download"` hover 시 노출 |
| 10 | overview-card 시각적 차별화 없음 | 카드마다 top border 색상 구분 + 아이콘 + 세그먼트 매출 추가 |
| 11 | 공지 배너 없음 | `.announcement-bar` — 최신 공시 상단 고정 |
| 12 | board-card 역할 구분 없음 | `.board-badge` — Executive / Independent 배지 분리 |
| 13 | 면책 고지 footer에 없음 | `.footer-disclaimer` — forward-looking statements 경고 |
| 14 | 커스텀 셀렉트 없음 | `.select-wrapper::after` 화살표로 네이티브 select 커스터마이즈 |
| 15 | 그리드 정렬 지시 없음 | gap: 1px + background: border 패턴 일관 적용 명시 |

---

## Color Palette

| 변수 | 값 | 용도 |
|---|---|---|
| `--navy` | `#0D1F3C` | 히어로, 버튼, 강조, footer |
| `--navy-light` | `#162f5a` | 버튼 hover |
| `--gold` | `#B8962E` | 포인트 accent, nav active underline |
| `--gold-light` | `#F5EDD5` | 알림 섹션 배경, dividend 태그 배경 |
| `--white` | `#FFFFFF` | 기본 배경 |
| `--bg-alt` | `#F5F5F3` | 교차 섹션 배경 |
| `--black` | `#111111` | 본문 텍스트 |
| `--muted` | `#6B6B6B` | 서브텍스트, eyebrow |
| `--border` | `#E2E2E0` | 구분선 |
| `--up` | `#1a8a4a` | 상승 수치 |
| `--down` | `#c0392b` | 하락 수치 |

---

## Typography

- **Heading font**: Playfair Display — `h1`, `h2`, `section-header h2`, `split-body h2`, 숫자 블록
- **Body font**: Inter — 모든 나머지
- Eyebrow: `0.62rem`, `letter-spacing: 0.3em`, uppercase, `var(--muted)`
- Section number: `0.62rem`, `color: var(--border)` — 의도적으로 연하게 (장식적)
- Active nav: `border-bottom: 1px solid var(--gold)`

---

## Layout System & Grid Rules

- Container: `max-width: 1280px`, `padding: 0 60px` (tablet: 32px, mobile: 20px)
- 카드 그리드: `gap: 1px` + `background: var(--border)` — 선이 아닌 배경색으로 구분선 효과
- highlights-grid: `repeat(3, 1fr)` — 6개 카드 = 2행 3열
- overview-grid: `repeat(3, 1fr)` — 각 카드 top border 색상 구분 (navy / gold / steel blue)
- stats-row: `repeat(4, 1fr)` — border-right로 셀 구분
- esg-grid: `repeat(4, 1fr)` — 네이비 배경 위 `rgba(255,255,255,0.08)` gap
- board-grid: `repeat(4, 1fr)` — 이미지 `aspect-ratio: 4/5`
- footer-top: `1.6fr 1fr 1fr 1fr`

---

## Key Components

### `.announcement-bar`
- 네이비 배경 최상단 고정 — 최신 공시/이벤트 one-liner
- 링크는 `--gold` 언더라인

### `.navbar` (sticky)
- `nav-stock` 위젯: 티커 / 현재가 / 등락률 — JS로 mock 업데이트
- Active link: `border-bottom: 1px solid var(--gold)`

### `.hero` (index only)
- `min-height: calc(100vh - 40px)` (공지 배너 40px 제외)
- `hero-eyebrow`: 골드 라인(`::before`) + 텍스트
- 하단: `.hero-strip` 4칸 — label + val (serif) + change

### `.page-hero` (서브페이지 공통)
- 네이비 배경 + 장식 원형 `::before / ::after`
- `.page-hero-meta`: 페이지 핵심 메타 정보 수평 나열

### `.stock-section`
- 현재가 크게 + 등락 badge + OHLV 메타 + CTA 버튼들

### `.esg-strip`
- 네이비 배경으로 본문의 화이트/회색 단조로움 중간에 끊어주는 역할
- 수치 em 태그에 `--gold` 색상

### `.alert-section`
- `--gold-light` 배경으로 부드러운 시선 유도
- 이메일 인풋 + 구독 버튼 인라인 배치
- JS로 성공 상태 처리

### `.reveal`
- IntersectionObserver, `threshold: 0.12`
- `opacity: 0 + translateY(24px)` → visible 시 원위치
- `.reveal-delay-1/2/3` — 카드 그리드 순차 등장

### `.doc-list` 다운로드
- PDF: 네이비, XLSX: 녹색(`#1a6b3a`), PPTX: 레드(`#b33a1e`)
- hover 시 `.doc-download` opacity 0→1 노출

### `.news-tag` 색상 규칙
- Earnings: 파란 배경
- Dividend: 골드 배경
- Disclosure: 회색 배경
- M&A: 초록 배경
- ESG: 연초록 배경

---

## Page Structure

| 파일 | 주요 섹션 |
|---|---|
| `index.html` | 공지 배너 → 네이비 히어로 → 주가 스트립 → 재무 하이라이트 → 사업부문 → 전략 split → ESG 네이비 스트립 → IR 뉴스 → 알림 구독 → footer |
| `financials.html` | 공지 배너 → page-hero(메타) → KPI 4칸 → doc-list(↓ Download) → 손익 6칸 → 타임라인 → 알림 구독 → footer |
| `governance.html` | 공지 배너 → page-hero(이사회 메타) → board-grid(배지) → 정관 doc-list → 주주구성 split → footer |
| `contact.html` | 공지 배너 → page-hero(연락처 메타) → 2단 연락처+폼(커스텀 select) → footer |
