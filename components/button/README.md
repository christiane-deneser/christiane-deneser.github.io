# Button Component

## Purpose
This component provides a semantic, accessible, and keyboard-friendly button pattern for use in user interfaces.
It ensures that interactive elements are operable by all users, including those relying on assistive technologies, keyboard-only navigation, screen readers, and users with cognitive or motor impairments.
This component supports several WCAG 2.1 criteria, including:
- 1.4.3 Contrast (Minimum) – sufficient text/background contrast
- 1.4.11 Non-Text Contrast – clear focus and component states
- 2.1.1 Keyboard – fully operable via keyboard
- 2.4.7 Focus Visible – strong, visible focus indicator
- 4.1.2 Name, Role, Value – semantic `<button>` element exposes correct role and accessible name automatically

## Variants
- Primary: strong call to action
- Secondary: inverted, subtle action
- Disabled: non-interactive, keyboard-inert

## Accessibility Notes
- Uses the native `<button>` element, ensuring correct semantics, roles, and automatic accessibility mappings.
- No ARIA attributes are required.
- Keyboard behavior works out of the box:
- Enter and Space activate the button
- Button is reachable in the tab order
- Provides a high-contrast focus outline that is visible for all users (WCAG 2.4.7).
- Disabled state uses the disabled attribute, removing the element from the focus - order and assistive tech activation (better than aria-disabled).
- Hit area meets the recommended minimum target size (40×40 px).
- Hover, focus, and active states are visually distinct and maintain required contrast.

## Code Example
(HTML / CSS)
```html
<!-- HTML -->
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-primary" disabled>Disabled Button</button>
```

```css
/* CSS */
.btn {
  font: inherit;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  border: 2px solid transparent;
  cursor: pointer;
  min-width: 120px;
}

.btn:focus {
  outline: 3px solid #FFD54F;
  outline-offset: 2px;
}

.btn-primary {
  background: #1A73E8;
  color: #fff;
}

.btn-primary:hover:not([disabled]) {
  background: #1664c4;
}

.btn-secondary {
  background: #fff;
  color: #1A73E8;
  border-color: #1A73E8;
}

.btn-secondary:hover {
  background: #e8f0fe;
}

.btn[disabled] {
  background: #E0E0E0;
  color: #8C8C8C;
  cursor: not-allowed;
  opacity: 0.7;
}
```

## Reference
- WCAG 2.1
  - 1.4.3 Contrast (Minimum)
  - 1.4.11 Non-Text Contrast
  - 2.1.1 Keyboard
  - 2.4.7 Focus Visible
  - 4.1.2 Name, Role, Value
- WAI-ARIA Authoring Practices – Buttons
- W3C WAI Tutorials – Buttons
- HTML Living Standard – Button Element