# Mobile Responsive Design - Learnings

## Viewport Configuration (Next.js 14)
- **Issue**: Next.js 14 deprecated `viewport` in metadata export
- **Fix**: Use separate `viewport` export instead of nested in metadata
- **Pattern**:
  ```typescript
  export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  };
  ```

## Touch Target Sizes
- **Requirement**: Minimum 44px for touch targets (WCAG 2.5.5)
- **Implementation**: Added `min-h-[44px]` to all interactive components:
  - Buttons: All sizes now have `min-h-[44px]`
  - Inputs: Changed from `h-11` to `h-12 min-h-[44px]`
  - Selects: Changed from `h-11` to `h-12 min-h-[44px]`, items have `py-3`

## Font Sizes for Mobile
- **Standard**: `text-base` (16px) for body text
- **Headings**: `text-xl` (20px) or larger for mobile
- **Button text**: `text-lg` (18px) for primary actions
- All pages already met mobile font size requirements

## Grid Layout for Mobile
- Use `grid-cols-1 sm:grid-cols-2` pattern for responsive grids
- Forms with 2-column layout on desktop stack vertically on mobile
- Added proper closing tags for grid containers to prevent syntax errors

## CSS Enhancement
- Existing `@media (pointer: coarse)` rule in globals.css already enforces 44px minimum for buttons, links, inputs, selects
- Component-level `min-h-[44px]` provides explicit fallback
