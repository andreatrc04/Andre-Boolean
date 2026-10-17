---
name: Warm Umami Minimal
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#524437'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#857466'
  outline-variant: '#d8c3b2'
  surface-tint: '#8b5000'
  primary: '#8b5000'
  on-primary: '#ffffff'
  primary-container: '#d68b3a'
  on-primary-container: '#4e2b00'
  inverse-primary: '#ffb872'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#646464'
  tertiary: '#006878'
  on-tertiary: '#ffffff'
  tertiary-container: '#2aaac2'
  on-tertiary-container: '#003943'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcbe'
  primary-fixed-dim: '#ffb872'
  on-primary-fixed: '#2d1600'
  on-primary-fixed-variant: '#6a3c00'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#a8edff'
  tertiary-fixed-dim: '#63d5ee'
  on-tertiary-fixed: '#001f25'
  on-tertiary-fixed-variant: '#004e5b'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display-hero:
    fontFamily: Bebas Neue
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: 0.04em
  display-hero-mobile:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: 0.03em
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 42px
    letterSpacing: 0.03em
  headline-lg-mobile:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 34px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Bebas Neue
    fontSize: 26px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.02em
  title-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.06em
  numeral-counter:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 3rem
  margin-tablet: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system is engineered for a contemporary, fast-paced sushi counter experience that blends Japanese architectural minimalism with bold, appetising culinary warmth. 

### Brand Personality & Emotional Impact
- **Disciplined Precision:** Inspired by omakase bar craft—uncluttered, deliberate, and calm.
- **Vibrant Appetite Appeal:** The warm salmon accent triggers an immediate sensory response, evoking fresh cuts of fish, roe, and flame-seared textures.
- **Decisive & Kinetic:** Clean, bold typographic hierarchy creates punchy visual cues for effortless menu exploration and rapid ordering.

### Design Movement: Modern Minimalist Japanese Editorial
This aesthetic pairs expansive negative space and crisp ink-black structural accents with energetic condensed typography. It avoids visual clutter, relying instead on high-contrast typographic scale, soft organic corner radii, and barely-there ambient shadows to establish natural visual hierarchy.

## Colors

The palette operates under a high-clarity framework anchored by pure white surfaces, deep ink-black structure, and a single, mouth-watering warm salmon orange accent.

### Palette Hierarchy & Application
- **Primary (`#D68B3A` — Salmon Glaze):** Reserved strictly for focal interactive actions (primary checkout buttons, active cart badges, primary filters) and key thematic highlights (piece counters, signature item markers).
- **Secondary (`#000000` — Pure Sumi Ink):** Provides structural framing, high-emphasis text, secondary action buttons, and dominant iconography. 
- **Neutral Canvas (`#FFFFFF` & `#F9F8F6` — Washed Shari):** The primary canvas is pristine `#FFFFFF`. `#F9F8F6` is employed for subtle, nested product inset trays and passive input backgrounds without interrupting the clean white atmosphere.
- **Feedback & Functional States:**
  - Success / Freshness indicator: `#2E7D32`
  - Warning / Sold-out: `#C62828`
  - Subtle borders: `#EFECE6` (a soft, bone-tinted grey rather than harsh industrial zinc)

Text legibility strictly enforces `#000000` over light canvas/cards and `#FFFFFF` on dark blocks or primary salmon buttons.

## Typography

The typographical character hinges on an architectural contrast: towering, cinematic, condensed display numbers and headlines paired with warm, hyper-readable modern sans micro-copy.

### Roles & Execution
- **Display & Section Headers (`Bebas Neue`):** Used for item names in hero presentations, sushi piece counts (`08 PCS`), category dividers (`NIGIRI`, `TEMAKI`), and grand price totals. Letter-spacing is widened subtly (+0.02em to +0.04em) to avoid an overly compressed look.
- **Body & Micro-UI (`Plus Jakarta Sans`):** Selected for its friendly, geometric legibility and gentle rounded terminals that complement soft-radius corners. Used for ingredient disclosures, flavor profiles, and operational UI labels.
- **Micro-Labels & Dietary Tags:** Set in `label-sm` using all-caps with generous tracking (+0.06em) to deliver pristine editorial metadata across item cards.

## Layout & Spacing

A disciplined, fluid 12-column grid anchors the experience on desktop and tablet, consolidating down to a nimble 4-column flow on mobile viewports.

### Rhythm & Empty Space
- **Emphasised Whitespace:** Whitespace is treated as an active ingredient, reminiscent of traditional Japanese spatial awareness (*ma*). Sections breathe with generous vertical padding (`margin` & `space-xl`), ensuring food imagery remains luminous and untethered.
- **Breakpoints:**
  - **Mobile (< 768px):** 4 columns, `1.25rem` outer canvas padding, `0.75rem` gutters. Horizontal scrolling trays for category tabs.
  - **Tablet (768px – 1024px):** 8 columns, `2rem` outer margin, `1.25rem` gutters. Two-column grid configurations for order items.
  - **Desktop (> 1024px):** 12 columns, max-width `1360px` centered canvas, `3rem` outer margins. Accommodates split views (menu catalog alongside an active floating order counter).

## Elevation & Depth

Visual hierarchy rejects harsh borders in favor of soft, diffused, warm ambient shadows that gently lift food surfaces from the pure white backdrop.

### Ambient Shadow Formulas
- **Card Rest Level:** `box-shadow: 0 4px 20px -2px rgba(214, 139, 58, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04);`
  A dual-layer shadow using a faint, warm salmon undertone combined with a featherweight black anchor to make cards feel floating and appetizing.
- **Elevated / Hover Level:** `box-shadow: 0 16px 36px -4px rgba(214, 139, 58, 0.12), 0 6px 12px -2px rgba(0, 0, 0, 0.05);`
  Used when hovering over menu items, interactive drawer triggers, or when hovering actionable buttons.
- **Floating Sticky Bar / Cart Sheet:** `box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.06);`
  Anchors bottom-navigation checkout sheets seamlessly on mobile screens.

### Ghost Layering
Where separation is needed without shadow volume (such as segmented options or table listings), utilize a 1px border colored with `#EFECE6`.

## Shapes

The design system incorporates generous, organic curvature (`rounded-2xl` and `rounded-3xl`) to echo the hand-pressed softness of nigiri and smooth ceramic tableware.

### Curvature Guidelines
- **Product Cards & Surfaces:** Scaled up to 24px (`1.5rem` / `rounded-2xl`) and 32px (`2rem` / `rounded-3xl` on desktop heroes).
- **Buttons:** Rectangular with intentional soft-radii (12px to 16px), retaining structural punch without feeling sharp or utilitarian.
- **Pills & Chips:** Fully radiused (`9999px`) for quick-tap categories, counter tags, and allergen pills.
- **Iconography:** Handled exclusively with soft-cornered, rounded terminals (e.g., Material Symbols Rounded), reinforcing a friendly, tactile interface.

## Components

### 1. Buttons
- **Primary CTA:** Background `#D68B3A`, text `#FFFFFF`, border-radius `14px`, font `label-lg` with uppercase styling. Hover triggers an elevation lift and subtle brightness increase (`#E29949`). Active state slightly scales (`transform: scale(0.98)`).
- **Secondary CTA:** Background `#000000`, text `#FFFFFF`, border-radius `14px`. Delivers authoritative grounding for modal actions, secondary additions, or counter reservations.
- **Counter Step Button:** Compact 36x36px rectangles with 10px rounded corners; `#F9F8F6` background, black rounded plus/minus icons, instantly responsive feedback.

### 2. Menu Cards
- Base surface in `#FFFFFF` with 24px corner radius and rest-level ambient warmth shadow.
- Photography occupies the top half with subtle bottom gradient blending into the card.
- Title rendered in `Bebas Neue` (`headline-md`), paired with piece count tag (`label-sm`) and prominent numeral pricing in bold black.
- Primary card action features a compact floating add button at the bottom-right corner in `#D68B3A`.

### 3. Chips & Category Tabs
- **Default State:** Transparent or `#F9F8F6` pill with 1px `#EFECE6` border, text `#000000` (`label-sm`).
- **Active State:** Solid `#000000` pill with `#FFFFFF` text, or filled `#D68B3A` when filtering signature chef selections.

### 4. Input Fields
- Form backgrounds sit on `#F9F8F6` with 12px rounded corners, 0px border at rest, shifting to a 1.5px `#D68B3A` focus ring.
- Placeholder copy uses neutral muted tone, shifting smoothly to bold `#000000` upon input.

### 5. Checkboxes & Radio Buttons
- Custom circular selection indicators with a 3px offset white ring and solid `#D68B3A` fill for selections.
- Multi-select ingredient modifiers use rounded rectangular tiles (12px radius) that tint background to `#FFF8F2` with a `#D68B3A` stroke when checked.

### 6. Sushi Counter Specifics: The Real-Time Tray
- A persistent bottom dock or desktop sidebar utilizing `#FFFFFF` surface elevation, displaying the accumulated piece tally formatted in `Bebas Neue` display figures alongside an instant one-tap checkout button.