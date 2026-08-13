---
name: Cyber-Logic Interactive
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#009eb9'
  on-tertiary-container: '#002f38'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#111318'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-xl:
    fontFamily: Outfit
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is built for a high-energy, premium educational environment that strips away the pretension of traditional computer science pedagogy. It leans into a **Futuristic Glassmorphism** aesthetic—combining the depth of a dark-first workspace with the high-contrast vibrancy of a gaming interface.

The brand personality is "Expert but Irreverent." It should evoke a sense of digital mastery and high-tech efficiency, while remaining approachable through rounded shapes and expressive motion. The UI should feel like a high-end IDE crossed with a modern skill-tree from an RPG.

**Design Principles:**
- **Visuals over Verbiage:** Reduce cognitive load by replacing dense paragraphs with interactive nodes and visual metaphors.
- **Electric Feedback:** Every interaction should trigger a subtle neon glow or state change, reinforcing the feeling of "live" code.
- **The "Hacker" Professionalism:** Maintain a clean, structured grid to ensure the content feels authoritative, despite the playful accents.

## Colors

This design system utilizes a deep, multi-layered dark palette to establish depth and focus. 

- **Background Strategy:** The base is `#0A0C10`. Surface layers use slightly elevated grays with a hint of navy to create a hierarchy of "containers."
- **Neon Accents:** Electric Purple is the primary action color. Neon Blue and Cyan are used for secondary logic paths and data visualization. Lime Green is strictly reserved for "Accepted" states and progress completion.
- **Glow & Bloom:** High-priority elements (like active streaks or current nodes) should utilize a 15% opacity drop-shadow glow of their parent color to simulate a neon light effect.
- **Contrast:** Ensure all text on dark surfaces meets a minimum of 7:1 contrast ratio by utilizing the lighter tints of the accent colors for secondary labels.

## Typography

The typography strategy balances high-impact "Display" headers with ultra-legible "Body" text. 

- **Headlines:** Use **Outfit** for its geometric clarity and modern weight distribution. H1 and Display styles should be used for gamified milestones and section starts.
- **UI & Reading:** **Plus Jakarta Sans** provides a friendly, rounded feel that softens the "technical" nature of DSA content. 
- **Code Blocks:** **JetBrains Mono** is mandatory for all code snippets and logic visualizations to ensure character distinction (e.g., distinguishing `0` from `O`).
- **Styling Note:** For H1 headers, use a subtle gradient from Cyan to Purple to reinforce the futuristic theme.

## Layout & Spacing

The layout is built on a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Visualization Areas:** Central content should be housed in a large "Canvas" area (spanning at least 8 columns on desktop) where interactive nodes and data structures are rendered.
- **The Sidebar/Control Panel:** Navigation and progress controls are docked to the left or right in 3-column containers.
- **Rhythm:** An 8px base unit governs all padding and margins. Use "Loose" vertical spacing (32px+) between conceptual blocks to keep the UI from feeling cluttered.
- **Interactive Cards:** Cards should maintain consistent internal padding of 24px (3 units) to feel premium and spacious.

## Elevation & Depth

This design system avoids traditional shadows in favor of **Tonal Layers** and **Glassmorphism**.

- **Level 0 (Background):** Deepest navy (#0A0C10).
- **Level 1 (Cards/Containers):** Slightly lighter navy with a 1px border of 10% white to define edges.
- **Level 2 (Active/Floating Elements):** Glassmorphic surfaces using a `backdrop-filter: blur(12px)` and a 20% opacity fill of the primary color. 
- **Edges:** Instead of drop shadows, use "Outer Glows" (box-shadow: 0 0 15px [color]) only for active states, such as a currently executing line of code or a selected tree node.
- **Connectors:** Lines connecting nodes should use 2px strokes with a gradient fade.

## Shapes

The shape language is consistently rounded to maintain a "friendly-tech" feel. 

- **Standard Elements:** Buttons and small inputs use `rounded-lg` (16px).
- **Containers:** Content cards and visualization blocks use `rounded-2xl` (24px) for a soft, modern silhouette.
- **Nodes:** Individual data points (like linked list nodes or tree circles) should be fully circular or use `rounded-xl` to contrast against the rectangular grid.
- **Interaction:** On hover, shapes should subtly expand (1.02x scale) to provide tactile feedback.

## Components

- **Action Buttons:** Use a solid primary color (Electric Purple) with white text for primary actions. Secondary actions use "Ghost" buttons with a 1px neon border.
- **Progress Roadmaps:** Represented as a series of connected hex-shaped nodes. Completed nodes glow with a Lime Green outer shadow; current nodes pulse with a Cyan border.
- **XP/Streak Chips:** Small, pill-shaped badges with a gradient background (Pink to Orange) and white bold text.
- **Interactive Code Editor:** A dark-themed pane with a "Glass" header. The active line being visualized is highlighted with a semi-transparent Cyan background.
- **Cards:** All cards feature a subtle `1px` border of `rgba(255, 255, 255, 0.1)` and a very dark background. They do not use shadows unless they are "Floating" (Modals).
- **Checkboxes & Radios:** High-contrast Neon Blue when checked, with a smooth spring animation during the transition.
- **Visualizer Nodes:** Interactive elements that can be dragged or clicked. When "Visited" in an algorithm (like DFS), they transition from Neutral to Purple with a 300ms ease-in-out.