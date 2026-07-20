# Handoff: Ruben Hagège — Ordering Website

## Overview
Mobile-first ordering site for Ruben Hagège (pâtissier, MAF 2021, Alfortville) — replaces WhatsApp ordering. Flow: Home → choose a delivery/pickup date → browse catalogue (filtered by that date's availability) → personalize/add to cart → checkout (livraison ou retrait → infos client → paiement) → confirmation.

## About the design files
Everything in this bundle is an **HTML/React design reference** built as a clickable prototype (inline Babel, no build step, no real backend) — not production code to copy verbatim. The task is to recreate this in the target codebase's real stack (recommend React + a proper bundler, or whatever this repo already uses) using production patterns: real routing, real form validation, a real payment integration (Stripe or similar) instead of the fake "Payer par carte / Payer sur place" buttons, and a real product/inventory backend instead of the hardcoded arrays in `Catalog.jsx`.

## Fidelity
**High-fidelity.** Colors, type, spacing, and component states are final and token-driven (`tokens/*.css`) — recreate pixel-for-pixel using the same CSS custom properties. Layout, copy, and interaction flow are also final.

## Screens / views
1. **Home** (`ui_kits/order-online/Home.jsx`) — full-bleed hero photo on a dark charcoal panel, "Passer commande" CTA, then a light "chef" section (circular portrait + one-paragraph bio). No product listing on this screen by design.
2. **DateSelect** (`ui_kits/order-online/DateSelect.jsx`) — pill list of the next 5 weekdays (Mon–Fri only). Friday is annotated "Individuels + Livraison". Selecting a date is required before continuing.
3. **Catalog** (`ui_kits/order-online/Catalog.jsx`) — category pills (Individuels / À partager / Indispensables). "Individuels" tab only appears if the selected date is a Friday; otherwise a note explains why. 2-column grid of `ProductGridCard`, each with a floating "+" quick-add button (`IconButton`) bottom-right of the image.
4. **ProductSheet** (`ui_kits/order-online/ProductSheetOnly.jsx`) — bottom sheet (`Sheet` component) opened by tapping a card. For "à partager" cakes: parts-count select (4/6/8/10/12), optional personalized plaque (checkbox + 45-char-limited textarea), quantity stepper, and an "Ajouter — {price}" button.
5. **Checkout** (`ui_kits/order-online/Checkout.jsx`), 3 steps with a progress-dot header:
   - **Livraison ou retrait**: radio cards. Delivery only offered if the chosen date is a Friday; otherwise shown disabled with an explanatory helper line. Pickup shows the lab's opening hours for that specific day (no time-slot picker — the brief says customers may come any time within opening hours). Delivery shows a note about the Thursday-6pm cutoff.
   - **Vos informations**: nom/prénom/téléphone/email, plus address (only if delivering) with a **simulated distance-based delivery-fee estimate** (`estimateDeliveryFee()` — a placeholder hash function; replace with a real distance/postcode-based pricing API). "Offrir cette commande" checkbox swaps the customer's own address for a recipient name + recipient delivery address + gift message.
   - **Récapitulatif**: cart line items, date/mode/fee badges, "Payer par carte" / "Payer sur place" buttons (both currently just navigate to Confirmation — wire to a real payment provider).
6. **Confirmation** (inside `Checkout.jsx`) — dark full-bleed confirmation panel with a checkmark, invoice-by-email note, "Retour à l'accueil".

## Components
All in `components/`, grouped `core/` (Button, IconButton, Badge, Sheet), `forms/` (Input, Select, Textarea, QuantityStepper, Checkbox, RadioGroup), `cards/` (ProductCard, ProductGridCard), `navigation/` (NavBar, SectionHeader, CategoryTabs). Each component is plain React + inline styles reading CSS custom properties from `tokens/` — no CSS-in-JS libraries, no external UI kit. Recreate these as real components in the target stack, preserving props/variants (see each `.d.ts` for the prop contract, and `.prompt.md` for usage).

## Interactions & behavior
- Button press: `scale(.97)` (buttons) / `scale(.9)` (icon buttons), ~120ms. Hover: opacity → .88. No color-shift hovers, no bounce/spring easing anywhere (`--ease-standard: cubic-bezier(.4,0,.2,1)`).
- Sheet: slides up from the bottom, drag-handle affordance, backdrop click closes it.
- Quick-add ("+") and sheet "Ajouter" both trigger a small bottom "X ajouté" toast (auto-dismiss ~1.6s) and increment the NavBar cart badge.
- Delivery availability and fee are date-dependent — see `dates.js` (`nextWeekdays()`, shared, plain JS, defines opening hours per weekday: Lun–Mer 9h–13h, Jeu 9h–16h, Ven 9h–17h).

## State management
- App-level (`index.html`'s `<App>`): `view` (home/date/catalog/checkout/confirmation), `date` (selected weekday key), `cart` (array of `{...product, qty, parts, plaque}`), `sheetProduct`/`sheetShareable` (open product sheet), `toast`.
- `Checkout`: local `stepIdx`, `mode` (pickup/delivery), `gift`, `address` (drives the simulated fee).
- None of this is persisted — a real build needs a cart store (context/redux/URL) and probably server-side order state.

## Design tokens
See `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css` (loaded via `styles.css`). Key values:
- `--color-burgundy:#4a1420` (primary accent/CTA), `--color-ink:#1a1817` (dark surfaces), `--color-taupe:#cab7a0`, `--color-cream:#f8f4ee` (page background), `--color-gold:#b3894f` (rare accent only).
- Display font: **Jost** (Google Fonts — a substitution for the brand's actual custom-lettered logo font; flagged in the design system's own readme, get the real font file if the client has one). Body/UI font: **Inter**.
- Radii: `--radius-md:14px` (cards/photos), `--radius-pill:999px` (buttons/pills). Shadows: mostly flat (`--shadow-sm`), `--shadow-lg` only for the bottom sheet and floating cart bar.

## Assets
`assets/logo/` — 3 raster JPEG logo lockups (black/white, on burgundy, on taupe). **These are raster exports, not vectors** — ask the client for the original vector file before shipping to production (a raster logo will look soft at large sizes). `assets/patterns/` — the brand's geometric tessellation motif (decorative use only, sparingly). Product photography referenced by the ordering site lives in `ui_kits/order-online/assets/` (already-cropped copies of the full photography set).

## Files
- `ui_kits/order-online/index.html` — app shell, view routing, cart/toast state (the file to open to see the whole flow).
- `ui_kits/order-online/{Home,DateSelect,Catalog,Checkout,ProductSheetOnly}.jsx` — screens.
- `ui_kits/order-online/dates.js` — shared date/opening-hours logic (plain JS, no JSX).
- `components/**` — the reusable UI primitives (`.jsx` + `.d.ts` prop contracts + `.prompt.md` usage notes + one `*.card.html` demo per folder).
- `tokens/*.css`, `styles.css` — design tokens.
