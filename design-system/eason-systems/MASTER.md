# Eason Systems Design System

This file is the visual source of truth for the public Eason Systems website.

## Direction

- Product type: independent software product studio; developer tools and learning software.
- Tone: grounded, young, credible, technical, and direct.
- Style: utilitarian editorial minimalism. The site should resemble maintained product documentation and a small software company—not an agency portfolio or generic AI SaaS landing page.
- Variance: 5/10. Pages share tokens and navigation but use structures appropriate to their content.
- Motion: 2/10. Only short color, border, and underline state changes. No scroll reveals, parallax, or decorative entrance animation.
- Density: 7/10. Compact but readable; whitespace groups information instead of acting as decoration.

## Page Patterns

- Home: concise company introduction, current-product ledger, and one concrete history proof point.
- Products: catalog/list comparison rather than repeated promotional cards.
- LTA: technical detail with supported sources, integration routes, and capability list.
- EOT: development note and practice loop; never imply launch readiness.
- Story: chronological record with phases and concrete lessons.
- About: compact company/founder facts and links.

## Tokens

Color: background `#f6f5f1`, surface `#ffffff`, foreground `#191b1f`, muted `#5f646c`, border `#d9d9d4`, strong border `#aeb1b5`, cobalt `#2054d8`, cobalt soft `#e9eefc`, success `#16724f`, warning `#9a4f22`.

Typography uses the native system UI sans stack so the site reads like maintained software, loads without a webfont, and avoids the generic Inter-led SaaS look. Body is 16px/1.6. Display/H1 is `clamp(2.5rem, 4.2vw, 3.5rem)` at 1.1 line-height and no tighter than `-0.025em`. H2 is `clamp(1.75rem, 2.7vw, 2.5rem)` at 1.18. H3 is 1.25rem/1.3. Small labels are reserved for real status, sequence, or source information. Let headings wrap naturally; never insert decorative line breaks or narrow measures to manufacture short lines.

Spacing uses an 8px rhythm: `4, 8, 12, 16, 24, 32, 48, 64`. Desktop container is 1160px with 32px gutters; mobile gutters are 20px. Page intros use 64px/56px desktop and 48px/40px mobile. Section intervals are 64px desktop and 48px mobile. Avoid fixed minimum heights.

Radius is 4px for controls, 8px for small surfaces, and 12px for featured panels. Use flat surfaces, borders, and contrast; no decorative gradients, glass, or routine shadows. Pills are reserved for true statuses.

## Interaction and Accessibility

- Minimum 44px touch target for primary controls.
- Visible 2px focus outline with 2px offset.
- Native links/buttons and semantic landmarks.
- Active navigation uses `aria-current` plus underline/color.
- Reduced motion is respected and all information remains visible without animation.
- Body and muted text meet WCAG AA contrast; no horizontal overflow at 375px.

## Anti-patterns

- Giant hero type, compressed line-height, or tracking tighter than `-0.03em`.
- Repeated eyebrow + oversized heading + muted paragraph on every page.
- Forced editorial wrapping, decorative `<br>`, or narrow heading measures.
- Manifesto copy that names no product, user, capability, or learned constraint.
- Gradient SaaS cards, pill collections, excessive rounded containers, or repeated feature-card grids.
- Decorative whitespace above 64px between related sections.
- Scroll-triggered storytelling and non-functional motion.
