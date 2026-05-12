---
name: SF Chicken Company Design System
colors:
  surface: '#f9f9ff'
  surface-dim: '#d0daf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e8eeff'
  surface-container-high: '#dfe8ff'
  surface-container-highest: '#d9e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#45474a'
  inverse-surface: '#273143'
  inverse-on-surface: '#ecf0ff'
  outline: '#76777b'
  outline-variant: '#c6c6ca'
  surface-tint: '#5d5e62'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1a1c1f'
  on-primary-container: '#838487'
  inverse-primary: '#c6c6ca'
  secondary: '#006d3c'
  on-secondary: '#ffffff'
  secondary-container: '#70fda7'
  on-secondary-container: '#007440'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1d'
  on-tertiary-container: '#828485'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e6'
  primary-fixed-dim: '#c6c6ca'
  on-primary-fixed: '#1a1c1f'
  on-primary-fixed-variant: '#45474a'
  secondary-fixed: '#70fda7'
  secondary-fixed-dim: '#51df8e'
  on-secondary-fixed: '#00210e'
  on-secondary-fixed-variant: '#00522c'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d9e3fb'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-padding: 80px
---

## Brand & Style

This design system centers on a **Minimalist and Corporate Modern** aesthetic tailored for a national-scale poultry enterprise. The visual narrative is built on the pillars of **hygiene, transparency, and logistical precision**. By utilizing expansive white space and a restricted color palette, the system communicates a "clinical premium" feel—positioning the brand as a leader in food safety and modern agriculture.

The emotional response should be one of absolute trust and efficiency. Every interface element is designed to feel intentional and high-end, moving away from traditional "rustic" farm aesthetics toward a more technologically advanced and professional presentation.

## Colors

The palette is anchored by **Deep Charcoal** (#121417), providing a sophisticated foundation that replaces standard blacks for a softer, more premium feel. We have selected **Fresh Green** (#12B76A) as the primary accent; this "poultry green" evokes health, vitality, and sustainability, distinguishing the brand from the aggressive reds often associated with fast-food poultry.

- **Primary (Deep Charcoal):** Used for typography, navigation, and structural elements to convey authority.
- **Accent (Fresh Green):** Reserved for call-to-actions, status indicators, and subtle brand flourishes.
- **Neutrals:** A range of cool grays used for borders and secondary text to maintain a crisp, hygienic look.
- **White Space:** The primary "color" of the system, utilized to ensure the UI feels airy and uncluttered.

## Typography

The typography strategy pairs the geometric confidence of **Montserrat** for headings with the high-readability and contemporary precision of **Hanken Grotesk** for body copy. 

Headings should be set with tight tracking and generous leading to maintain a modern, editorial appearance. Body text emphasizes legibility, utilizing a slightly increased line height (1.6) to facilitate reading of technical or nutritional information. Labels and small metadata utilize uppercase Hanken Grotesk with increased letter spacing to provide a systematic, organized feel to data-heavy sections.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop to ensure a controlled, premium reading experience, transitioning to a fluid layout for mobile devices. 

- **Desktop:** 12-column grid with a 1280px max-width, 24px gutters, and significant 64px side margins.
- **Mobile:** 4-column fluid grid with 16px gutters and 20px margins.
- **Rhythm:** An 8px linear scale governs all padding and margin decisions. 
- **Philosophy:** Emphasize "Generous Whitespace." Section vertical padding should default to 80px or higher to isolate content blocks, mimicking the clean, organized environment of a modern production facility.

## Elevation & Depth

To maintain the sharp and minimalist aesthetic, depth is handled through **Low-Contrast Outlines** and **Ambient Shadows**. 

Surfaces should primarily remain flat and white. When depth is required (e.g., for cards or floating menus), use a singular, highly diffused shadow: `0px 4px 20px rgba(0, 0, 0, 0.05)`. Avoid heavy stacks or dark shadows. Structural separation is primarily achieved through 1px borders in a light gray (#E4E7EC) rather than elevation, keeping the interface feeling "grounded" and architectural.

## Shapes

The shape language is defined by **Precision**. We utilize "Soft" corners (0.25rem / 4px) to take the edge off the industrial feel while maintaining a crisp, professional silhouette. 

- **Standard Elements:** 4px radius (Buttons, Input fields, Chips).
- **Large Containers:** 8px radius (Cards, Image containers).
- **Photography:** All imagery must feature sharp or 4px rounded corners. Circular shapes are strictly reserved for user avatars or specific status icons.

## Components

### Buttons
Primary buttons use the Deep Charcoal background with white text for maximum contrast. Secondary buttons are outlined with 1px borders. Interaction states should be subtle—a slight opacity shift or a move to the Fresh Green accent on hover.

### Input Fields
Inputs feature a 1px border (#D0D5DD) and 4px radius. Labels are positioned above the field in the `label-md` style. Focus states use a 1px Fresh Green border with a subtle 2px outer glow.

### Cards
Cards are white with a 1px light gray border. Shadows are only applied on hover to indicate interactivity. High-quality photography should occupy the top half of the card, bleeding to the top and side edges.

### Progress & Status
Use the Fresh Green accent for "Certified," "Fresh," or "In-Transit" statuses. The iconography should be monolinear and geometric, maintaining the thin-stroke weight of the Hanken Grotesk typeface.

### Data Lists
For logistics and supply chain views, use clean rows with 1px horizontal dividers. Avoid alternating row colors; instead, use generous vertical padding within each row to create separation.