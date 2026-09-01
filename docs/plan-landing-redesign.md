# Oh My Template landing redesign plan

## Concept

The landing page will work as a curated template desk rather than a generic SaaS sales page. A warm paper background, near-black typography, and a single persimmon accent create an editorial identity that keeps the templates themselves in focus. The visual system uses generous whitespace, strong typographic contrast, square editorial labels, and varied image proportions instead of repeated rounded cards.

## Information architecture

1. Compact navigation with direct links to templates, process, pricing, FAQ, and consultation
2. Editorial hero that explains the product in one sentence and leads directly into the catalogue
3. Curated template catalogue with search, category filters, and clear empty states
4. A short working-method section that explains selection, customization, and launch
5. Pricing packages with inclusions, schedule, and a single consultation action
6. FAQ rendered as crawlable native disclosure elements
7. Consultation introduction and a restrained utility footer

## Visual system

- Palette: warm paper, charcoal ink, muted stone, and one persimmon accent
- Type: a bold sans-serif display scale paired with compact, highly readable body copy
- Layout: a responsive 12-column editorial grid with asymmetry at large sizes and clean single-column reflow on mobile
- Rhythm: large section gaps, thin rules, and numbered annotations instead of repetitive cards and badges
- Motion: CSS-only hover and focus transitions; no decorative scroll animation or continuous carousel
- Korean typography: natural Korean copy, `word-break: keep-all`, conservative tracking, and comfortable line height

## Technical structure

- Keep metadata, Supabase queries, pricing, FAQ, hero, process, and consultation content in server components.
- Limit the client component to catalogue search and category filtering.
- Use `next/image` for template thumbnails with explicit responsive `sizes`.
- Preserve canonical and reciprocal hreflang metadata, Supabase data, package pricing, FAQ content, and consultation routes.
- Keep English and Korean implementations independent, with Korean copy hardcoded in the Korean route and shared template image URLs.
- Provide keyboard-visible focus states, 44px touch targets, native disclosure controls, and reduced-motion-safe interactions.
