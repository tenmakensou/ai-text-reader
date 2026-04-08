# Design Brief: AI Text Reader

## Tone
Clean, modern, approachable. Productive tool inspired by Linear and Notion. Warm, curious, empowering. Dark mode primary. No decoration — pure functional elegance.

## Visual Direction
Minimal text-to-speech interface. Mobile-first. Dark charcoal backgrounds with emerald-teal accents. Coral warmth for interactive highlights. High readability, intentional spacing, clear hierarchy.

## Differentiation
Emerald-teal primary palette with warm coral accents for playfulness. Dark mode as default. Micro-interactions on play/pause, visual feedback on language selection. Tamil cultural pride through thoughtful localization, not decoration.

## Color Palette (OKLCH)

| Token | Light | Dark |
|-------|-------|------|
| Background | 0.98 0 0 | 0.13 0 0 |
| Foreground | 0.2 0 0 | 0.92 0 0 |
| Card | 0.99 0 0 | 0.16 0 0 |
| Primary (Emerald) | 0.5 0.18 210 | 0.72 0.19 210 |
| Accent (Coral) | 0.65 0.2 25 | 0.72 0.22 25 |
| Success (Green) | 0.68 0.15 165 | 0.75 0.18 165 |
| Muted | 0.93 0.02 210 | 0.22 0.01 210 |
| Border | 0.88 0.01 210 | 0.25 0.01 210 |

## Typography
Display: **Bricolage Grotesque** — modern geometric, distinctive personality, headers & titles. Body: **DM Sans** — clear, efficient, excellent mobile readability. Mono: **Geist Mono** — character counts, code snippets.

## Elevation & Depth
Light hierarchy: flat background < muted cards < card-foreground text. Subtle shadow tokens (shadow-sm, shadow-md) for layering. No shadows on typography — only card surfaces.

## Structural Zones

| Zone | Treatment |
|------|-----------|
| Header | bg-card with border-bottom, subtle elevation |
| Main Content | bg-background with card sections alternating |
| Reader Controls | bg-card elevated, high contrast for clarity |
| Footer | bg-background, minimal separator border |

## Spacing & Rhythm
Mobile-first: 16px base padding, 12px gaps, 8px micro-spacing. Desktop: scale to 24px padding, 16px gaps. Breathing room around text input, compact controls below.

## Component Patterns
- Button: Primary (emerald), Secondary (muted), Destructive (red)
- Input: Rounded corners with subtle border, focus-ring teal
- Select: Dropdown with checkmark feedback, language/voice selection
- Slider: Teal track, rounded thumb, labeled feedback
- Cards: Rounded corners, subtle border, consistent padding

## Motion
Smooth transitions (0.3s cubic-bezier) on all interactive states. Pulse animation on play/pause feedback. Fade-in on language/voice selection changes. No bouncy animations — restrained, professional.

## Accessibility
WCAG AA contrast achieved in light and dark. Focus states always visible via teal ring. Semantic HTML, ARIA labels on controls, keyboard navigation supported.

## Constraints
- No full-page gradients
- No rainbow palettes
- Dark mode as primary
- Tamil pronunciation support non-negotiable
- Mobile responsiveness mandatory (sm, md, lg breakpoints)

## Signature Detail
Emerald-teal accent buttons with subtle pulse feedback on play state. When text is being read, a soft glow and smooth animation on the active play button signals processing. Language selector highlights Tamil as primary option without dominance hierarchy.
