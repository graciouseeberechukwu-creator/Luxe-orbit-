---
name: Digital Prestige Storefront
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#524348'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#847378'
  outline-variant: '#d6c1c7'
  surface-tint: '#8e4767'
  primary: '#2b0018'
  on-primary: '#ffffff'
  primary-container: '#4a0e2e'
  on-primary-container: '#c57597'
  inverse-primary: '#ffb0cf'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#001605'
  on-tertiary: '#ffffff'
  tertiary-container: '#002e10'
  on-tertiary-container: '#00a44a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd8e5'
  primary-fixed-dim: '#ffb0cf'
  on-primary-fixed: '#3c0223'
  on-primary-fixed-variant: '#72304f'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#66ff8e'
  tertiary-fixed-dim: '#3de273'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005322'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style
The design system establishes an aura of executive credibility, academic rigor, and luxury commerce. Tailored for high-ticket digital education and masterclasses, it strips away the cheap visual tropes of aggressive affiliate funnels in favor of an understated, editorial atmosphere. The interface evokes quiet authority, high earning potential, and absolute operational security.

Balancing classic editorial refinement with modern digital precision, the aesthetic leverages crisp white surfaces, generous micro-spacing, whisper-thin borders, and jewelry-grade metallic accents. Micro-interactions are deliberate and physics-based, emphasizing intentionality and frictionless checkout confidence.

## Colors
The palette balances deep luxury with crisp utilitarian clarity:

- **Primary (`#4A0E2E` - Royal Plum):** Used for primary CTAs, active states, key navigation elements, and foundational branding. A deeper shade (`#380C24`) serves as the active/hover state for high-priority actions.
- **Secondary (`#C5A059` - Champagne Gold):** Applied sparingly to draw attention to high-value elements: verified badges, pricing highlights, active step indicators, and premium course card accents. Tints like `#FDFBF7` provide delicate contextual card fills.
- **Tertiary (`#25D366` - WhatsApp Green):** Reserved exclusively for instant transaction communication, WhatsApp receipt routing, and live concierge support.
- **Neutrals:**
  - Background Base: `#FFFFFF` (pure canvas) and `#FAFAFA` (section alternating fill).
  - Surface Muted: `#F8F9FA` for secondary inputs and subtle card wells.
  - Border Warm: `#F0EAE1` for editorial containment and `#E2E8F0` for structural form outlines.
  - Text Primary: `#1A1A1A` for commanding contrast.
  - Text Muted: `#718096` for secondary descriptions, timestamps, and crossed-out pricing.

## Typography
Typography creates an intentional cadence between editorial distinction and technical clarity.

- **Headlines:** `Playfair Display` provides literary pedigree for hero titles, section headlines, and course monikers, evoking the prestige of established publishing houses.
- **Body & Functional UI:** `Plus Jakarta Sans` delivers optical precision, geometric balance, and high legibility across catalog cards, descriptions, and transactional workflows.
- **Financial & Account Values:** Monospaced data displays (account numbers, bank sort codes, transaction hashes) render in `JetBrains Mono` to prevent digit confusion during manual bank transfers.

## Layout & Spacing
The layout follows a 12-column responsive fluid grid anchored by a maximum content container width of 1280px.

- **Breakpoints:**
  - Mobile: `< 640px` (4-column grid, compact spacing, full-width drawers).
  - Tablet: `640px - 1024px` (8-column grid, 2-column card layouts).
  - Desktop: `> 1024px` (12-column grid, 3-column course catalog, anchored right-rail checkout summaries).
- **Rhythm:** Spacing follows an 8pt base grid for structured, breathing room. Course cards, pricing tables, and checkout drawers leverage `space-lg` to `space-xl` internally to prevent visual density fatigue.

## Elevation & Depth
Elevation is executed through warm, multi-layered ambient drop shadows rather than harsh grey blurs, evoking soft gallery lighting.

- **Elevation Level 1 (Static Cards & Inputs):** `0 1px 3px rgba(74, 14, 46, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)`. Paired with a delicate border (`1px solid #F0EAE1`).
- **Elevation Level 2 (Hover States & Dropdowns):** `0 10px 25px -5px rgba(74, 14, 46, 0.06), 0 8px 10px -6px rgba(0, 0, 0, 0.03)`. Accompanied by a `-2px` vertical translation.
- **Elevation Level 3 (Drawers & Modals):** `0 25px 50px -12px rgba(56, 12, 36, 0.25)`. Paired with a tinted backdrop overlay of `rgba(26, 26, 26, 0.45)` with an `8px` background blur.
- **Elevation Level 4 (Sticky Floating Bars):** `0 -4px 16px rgba(0, 0, 0, 0.04)` over a frosted acrylic background (`rgba(255, 255, 255, 0.92)` with `backdrop-filter: blur(12px)`).

## Shapes
A consistent `roundedness` level of 2 (`0.5rem` / `8px` base) produces an architectural, tailored finish across all touchpoints.

- **Base Components (Inputs, Chips, Buttons):** `rounded-md` (`8px`) maintains crisp form definition.
- **Surfaces (Course Cards, Content Panels):** `rounded-lg` (`16px`) softens outer margins while anchoring interior media.
- **Drawers & Modals:** Top corners set to `rounded-xl` (`24px`) on mobile viewports for fluid sheet ergonomics, and all four corners at `16px` on desktop overlays.
- **Badge Indicators:** Full pill (`9999px`) to create optical contrast against square structured card layouts.

## Components

### 1. Course Cards
- **Structure:** Framed by a `1px` border in `#F0EAE1` with a `#FFFFFF` fill.
- **Image/Thumbnail:** 16:9 ratio container at the top with `rounded-t-[14px]` and a subtle inner overlay shadow.
- **Hover Lift:** Transitions `all 250ms cubic-bezier(0.16, 1, 0.3, 1)`, moving `-3px` along the Y-axis with Elevation Level 2 and the border shifting to `#DFB76C`.
- **Badges:** Pill-shaped categorical tags positioned top-left (`bg-[#FDFBF7]`, `border-[#C5A059]`, text `#4A0E2E`, uppercase `label-sm`).

### 2. Price Tags & Strikethroughs
- **Verified Current Price:** Displayed in `headline-sm` with `Plus Jakarta Sans` semi-bold in `#4A0E2E`.
- **Original Strikethrough Price:** Rendered in `body-sm` neutral slate (`#718096`) with a clean `line-through` stroke across the text center.
- **Discount Chip:** Adjacent mini-pill in champagne gold tint (`#FDFBF7`) with text `#C5A059` displaying percentage saved.

### 3. Buttons & CTAs
- **Primary:** Plum background (`#4A0E2E`), white text, `8px` radius, hover state shifting to `#380C24` with soft gold focus rings (`ring-2 ring-[#C5A059]/40`).
- **Secondary / Gold:** Champagne gold border (`1.5px solid #C5A059`), transparent fill, text `#4A0E2E`, with a subtle `#FDFBF7` background on hover.
- **WhatsApp Routing:** Green base (`#25D366`), white typography, featuring an integrated official WhatsApp SVG glyph. Hover darkens to `#20BA57`.

### 4. Checkout Drawer & Bank Details (Moniepoint Integration)
- **Modal Container:** Slides in smoothly from the right on desktop (440px wide) or bottom-up on mobile. Includes an explicit security reassurance header ("Encrypted & Direct Bank Clearance").
- **Account Detail Tile:** An inset container (`#F8F9FA`) with `border: 1px dashed #C5A059`. Displays the bank name (Moniepoint MFB), account title, and account number formatted in `JetBrains Mono` (`code-mono`).
- **Interactive Copy-to-Clipboard:** An integrated button next to the account number triggers an instant state swap from "Copy" to "Copied!" with subtle tactile micro-animation and haptic-aligned feedback.
- **Proof-of-Payment CTA:** Below the bank box, a dominant tertiary button routes directly to WhatsApp with prefilled URL-encoded metadata (`?text=Hello%2C%20I%20have%20transferred%20payment%20for%20[Course%20Name]%20Ref:%20[Order_ID]`).

### 5. Header Navigation
- **Architecture:** Sticky bar (`h-18`), white background at `95%` opacity with backdrop blur.
- **Desktop:** Centered navigation links in `#1A1A1A` hover-shifting to `#4A0E2E`, framed by brand mark left and dual actions right: Student Login + WhatsApp Concierge button.
- **Mobile:** Minimalist hamburger trigger opening an editorial full-screen canvas, with quick-action contact shortcuts pinned to the bottom.

### 6. Form Fields & Inputs
- **Inputs:** `44px` height, `#FFFFFF` background, `1px solid #E2E8F0`, rounded to `8px`. Focused state transitions to `border-[#4A0E2E]` with a delicate outer ring of `rgba(74, 14, 46, 0.08)`.
- **Labels:** Positioned atop inputs in `label-md` using `#1A1A1A`.