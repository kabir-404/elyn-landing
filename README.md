# Elyn — Vitamin C Serum Landing Page

A single-product, single-goal DTC landing page. One serum, one page, one call
to action: **Buy Now**.

## Stack

- Vite + React 18
- Tailwind CSS (PostCSS build — no CDN)
- Zero UI/animation dependencies. Production JS bundle: **~52 KB gzipped**.
- Product and founder imagery are real photography sourced from Unsplash
  (`src/components/ProductBottle.jsx`, `src/components/FounderStory.jsx`),
  loaded directly from Unsplash's CDN at the exact crop/size each usage needs
  (`w=`/`h=`/`fit=crop` params) rather than downloading a full-resolution
  original and letting the browser scale it down.

## Product concept

**Elyn** is a fictional 15% Vitamin C + 5% Niacinamide serum. The story:
founder Mira Torres spent years dealing with post-acne hyperpigmentation and
skin that reacted badly to most "brightening" actives, so she spent two years
with a formulation chemist building a Vitamin C serum stable enough to work
and gentle enough for daily use. The positioning throughout the page leans on
that tension — **efficacy without irritation** — since it's the core objection
a cold visitor has about any active-ingredient serum ("will this work" vs.
"will this wreck my skin").

## Palette & type

Three colors, deliberately restrained — **"Cognac Match"**:

| Role | Hex | Use |
|---|---|---|
| Espresso (near-black) | `#2B2420` | Headlines, primary CTA, footer, final-CTA background |
| Warm off-white | `#FAF9F6` | Page background |
| Cognac accent | `#A85D1D` (dark `#7C4415`, light `#C88A4A`) | Links, icons, star ratings, one CTA variant — used sparingly, never decoratively |

The accent isn't an arbitrary color choice — it's sampled directly from the
hero product photo. An 11-point pixel sample across the bottle's glass body
(excluding highlights and cap shadow) averaged to `#A95A0E`; `#A85D1D` is
that sampled tone, muted down slightly so it reads as a considered UI accent
rather than a literal copy-paste of a highlight pixel. The effect is a
palette that looks like it was built *around this specific product photo*,
not one that happens to share a page with it — every time the accent shows
up (a star rating, a CTA, a link) it's quietly rhyming with the actual bottle
sitting in the hero.

This replaced an earlier "Cool minimal" direction (a dusty blue-grey accent,
`#5F7080`) that was chosen for a clinical/dermatological register but ended
up fighting the product photo's warmth instead of agreeing with it — a cool
accent next to a warm amber bottle read as slightly disjointed rather than
considered. Cognac Match keeps the same restrained, low-saturation spirit
(it's a muted cognac, not a bright DTC orange) while pointing that restraint
at a color the photo actually contains.

Contrast was re-verified for every text-on-accent and accent-on-background
pairing in the component tree, not assumed:

| Pairing | Ratio | Result |
|---|---|---|
| Accent text on cream background (eyebrow labels, hero headline span, FAQ `+`) | 4.69:1 | Passes AA |
| Accent text on white background (FAQ hover state, benefit/review cards) | 4.94:1 | Passes AA |
| Cream button text on accent background (`FinalCTA` base state) | 4.69:1 | Passes AA |
| Cream button text on `accent-dark` (every button's hover state) | 7.40:1 | Passes AAA |
| Focus ring (accent) against cream/white | 4.69–4.94:1 | Passes non-text 3:1 minimum with margin |

For reference, neither of the two earlier palettes actually cleared AA for
white-text-on-button: the original launch amber (`#C1652F`) sat at 3.86:1,
and the cool blue-grey (`#5F7080`) sat at 3.62:1. This swap fixes that
alongside the color match — every interactive text/background pairing now
clears 4.5:1, and hover states in particular are comfortably above it.

One spot this doesn't touch: the faint `01 / 02 / 03` step numerals in
`HowItWorks.jsx` render the accent at 40% opacity (`text-accent/40`) purely
as a decorative watermark behind each step's full-contrast title — that
combination sits around 1.7:1 against the cream background. It was already
below AA before this change and is unchanged by it; it's left as-is because
the numeral carries no information that isn't already stated at full
contrast one line below it (the step title itself), so it isn't a
WCAG failure, just worth naming rather than silently leaving unaudited.

The near-black text uses a true **espresso brown** (`#2B2420`) rather than a
neutral warm-black, which keeps just enough warmth in the type to stop the
page from feeling cold or sterile even as the accent now leans warm too.

**Type**: [Fraunces](https://fonts.google.com/specimen/Fraunces) (a warm,
editorial serif with soft optical-size detailing) for all headlines, paired
with [Inter](https://fonts.google.com/specimen/Inter) for body copy and UI.
Fraunces gives the page a premium, print-magazine feel that a generic
Tailwind sans-only page doesn't have, while Inter keeps paragraphs and buttons
legible and neutral at small sizes.

## Imagery

Both hero and founder art are real photography from Unsplash rather than
illustration:

- **Product shot** (`ProductBottle.jsx`) — an unbranded amber-glass dropper
  bottle on a wooden stand, chosen specifically because it carries no visible
  brand name (most "serum bottle" stock photography is shot for an existing
  DTC brand and has a logo baked into the label) and because its editorial
  shadow-play styling suits a premium single-product hero. The component is
  shared across the hero, the sticky bar, and the order-confirmation modal —
  each caller sizes it with its own wrapper classes, and `ProductBottle`
  applies `object-cover` so it crops cleanly regardless of the container's
  aspect ratio.
- **Founder portrait** (`FounderStory.jsx`) — a warm, direct-gaze headshot
  against a plain background, chosen for an approachable-but-professional
  read rather than a corporate-office or high-fashion-editorial one (both of
  which were in the candidate pool and rejected for tone).
- **Palette match**: the hero frames the photo in a rounded card sitting on
  a soft `accent/15` backdrop wash. Now that the accent itself is sampled
  from the bottle's glass, that wash and the photo are the same color
  family by construction rather than by coincidence.
- **Loading strategy**: the hero product photo is `loading="eager"` (it's
  the page's LCP element, above the fold on first paint); the founder photo
  is `loading="lazy"` (below the fold). Both use `decoding="async"` and a
  `srcSet` so mobile doesn't download the same pixel count as desktop.
- **Alt text**: the hero and founder photos carry real descriptive alt text
  (they're the primary content in their sections). The two small reused
  instances of the product photo — the sticky bar icon and the order-modal
  thumbnail — pass `decorative` to `ProductBottle`, which renders `alt=""`,
  since adjacent visible text already names the product and a repeated
  screen-reader announcement would just be noise.

## Why this section order (conversion reasoning)

The order is not arbitrary — it follows the standard cold-traffic DTC funnel:

1. **Hero** — the visitor decides in ~3 seconds whether to keep reading. The
   headline leads with the outcome + timeframe + differentiator formula
   ("Visibly Clearer Skin in 21 Days — No Harsh Actives"), not the brand name,
   because a cold visitor doesn't yet care what it's called — they care what
   it does for them and why it's different from what they've already tried.
2. **Founder story** — before asking for benefits to be believed, we establish
   *why this exists* and who's behind it. Trust before pitch.
3. **Benefits** — now that there's some trust, sell the transformation in
   scannable blocks, not paragraphs.
4. **How it works / ingredients** — handles the single biggest objection
   left standing: "does this actually work, or is it marketing." Concrete
   ingredients + a dead-simple 3-step routine answer that.
5. **Social proof** — third-party validation once the visitor understands
   the product, not before (reviews mean little without context).
6. **FAQ** — mops up remaining logistical objections (shipping, sensitivity,
   returns) right before the ask.
7. **Final CTA** — one more clean shot at the action, no new information,
   just the decision.
8. **Footer** — minimal, no exit ramps to other content.

Throughout, there is exactly one interactive path forward (Buy Now) — no nav
menu, no product grid, no secondary links competing for attention.

## Buy Now flow

Clicking **Buy Now** (from the hero, sticky bar, or final CTA — all three
call the same handler) opens an order-confirmation modal showing a generated
order number, a line-item summary, and a total. No payment form, no backend —
it's explicitly labeled "This is a demo checkout — no payment was processed."

## Animation approach

Everything is CSS transitions/keyframes or `IntersectionObserver`-driven
class toggles — no GSAP, no Framer Motion:

- Hero content fades/rises in on load with a staggered `animation-delay`
  per element (badge → headline → subhead → CTA), plus a separate,
  continuous, low-amplitude `float` keyframe on the product image.
- Every other major section (`useReveal` hook) observes itself and adds a
  `reveal-visible` class the first time it enters the viewport, then
  disconnects — it never re-fires on repeat scrolls.
- The star rating counts up from 0 to 4.8 via `requestAnimationFrame` once
  the Reviews section is visible (`useCountUp` hook).
- The FAQ accordion animates height using a `grid-template-rows: 0fr → 1fr`
  transition (no JS height measurement, no snapping).
- The sticky buy bar slides in/out via `transform: translateY()` transitions,
  never an abrupt `display` toggle.
- `prefers-reduced-motion: reduce` is respected globally — a media query in
  `index.css` collapses all animation/transition durations to ~0 and disables
  smooth scrolling for users who've asked for it.

## Sticky buy bar behavior

`StickyBuyBar.jsx` is always mounted; an `IntersectionObserver` on the hero
section (wired up in `App.jsx`) toggles a `visible` boolean once the hero
scrolls out of view. The bar itself is positioned with plain Tailwind
responsive classes — no JS media-query branching:

- Base (mobile / mobile-landscape / iPad portrait, **<1024px**): `fixed
  bottom-0`, slides up from `translate-y-full`. Bottom placement is
  deliberate — thumb reach on a handheld device.
- `lg:` (iPad landscape / desktop, **≥1024px**): `lg:top-0`, slides down from
  `lg:-translate-y-full`. The breakpoint match to iPad-landscape/desktop is
  exact, per spec, at 1024px.

## Responsive verification

Built mobile-first (base Tailwind classes target 375px; `sm:`/`md:`/`lg:`
progressively enhance upward — no desktop-first overrides). Verified by
actually rendering the built app inside a same-origin `<iframe>` resized to
each exact width below (not just resizing the browser window, which doesn't
map cleanly to arbitrary device widths), and both screenshotting and
programmatically checking `document.documentElement.scrollWidth` against
`clientWidth` for overflow, plus computed grid column counts and the sticky
bar's `top`/`bottom` position at each width.

| Width | Device target | Overflow-free | Notes |
|---|---|---|---|
| 375px | Mobile portrait | ✅ | Hero single-column, benefits/reviews 1-col, sticky bar bottom |
| 390px | Mobile portrait | ✅ | Same as above, confirmed independently |
| 667px | Mobile landscape | ✅ | Benefits/reviews shift to 2-col, sticky bar still bottom |
| 844px | Mobile landscape | ✅ | Same 2-col treatment holds, no cramping |
| 768px | iPad portrait | ✅ | Hero still stacked (below `lg:`) but with roomier type/padding than phone — not a stretched phone layout; benefits/reviews 2-col |
| 820px | iPad portrait | ✅ | Same in-between treatment confirmed |
| 1024px | iPad landscape | ✅ | Hero switches to side-by-side; benefits/reviews go 4-col; **sticky bar flips from bottom to top here**, confirmed via computed `getBoundingClientRect()` |
| 1180px | iPad landscape | ✅ | Top sticky bar, 4-col grids hold |
| 1280px | Small desktop | ✅ | Top sticky bar, generous whitespace, no sparse feel |
| 1536px+ | Large desktop | ✅ | Content max-width caps (`max-w-6xl`/`max-w-4xl`) keep line lengths readable rather than stretching edge-to-edge |

Also manually verified: FAQ accordion opens/closes with a smooth height
transition at all widths, the star-rating count-up fires once on scroll into
view, the Buy Now → order-confirmation modal flow works end-to-end, and all
interactive elements (buttons, accordion triggers, sticky-bar CTA) show a
visible focus ring on keyboard navigation. Tap targets on the primary CTAs
and sticky bar button are ≥44px tall.

## Project structure

```
src/
  components/
    Hero.jsx
    FounderStory.jsx
    Benefits.jsx
    HowItWorks.jsx
    Reviews.jsx
    FAQAccordion.jsx
    FinalCTA.jsx
    Footer.jsx
    StickyBuyBar.jsx
    OrderModal.jsx      — Buy Now confirmation state
    ProductBottle.jsx    — shared Unsplash product photo (hero/sticky bar/modal)
    Reveal.jsx            — generic scroll-reveal wrapper
  hooks/
    useReveal.js          — IntersectionObserver, fires once
    useCountUp.js          — rAF count-up, respects reduced motion
  App.jsx
  main.jsx
  index.css
```

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```
