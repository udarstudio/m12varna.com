# Project conventions

## Spacing system

- Use the Tailwind spacing scale `1`, `2`, `4`, `6`, `8`, and `12` for new layout and component spacing.
- Keep spacing consistent within the same component and across equivalent components.
- When adjusting responsive spacing, choose values from this scale and preserve the intended visual hierarchy.
- Exception: keep the gallery image grid at `gap-5` because this spacing is part of the intended image sizing.

## Color system

- `#000000` (`black`): headings, primary text, header and footer backgrounds, primary dark buttons, strong borders, and button hover states.
- `#ffffff` (`white`): cards, modals, accent sections, and text or icons placed on dark backgrounds.
- `#f5f7f6` (`var(--site-background-color)`): the main page background. Keep the canonical variable in `assets/css/tailwind.css` and reuse the variable instead of the raw value.
- `#0f766e` (`teal-700`): the main brand accent, primary consent actions on light backgrounds, active states, checked controls, and accent labels.
- `#2dd4bf` (`teal-400`): highlighted actions placed on black backgrounds.
- `#14b8a6` (`teal-500`): interactive borders, focus indicators, and subtle hover accents.
- `#1f2937` (`gray-800`): strong secondary text when black would be too heavy.
- `#374151` (`gray-700`): regular body copy that needs stronger contrast.
- `#4b5563` (`gray-600`): descriptions and supporting body copy.
- `#6b7280` (`gray-500`): muted metadata and secondary notes.
- `#9ca3af` (`gray-400`): subdued interface details and disabled states.
- `#b8bcbc` (`gray-300`, `var(--color-gray-300)`): input borders, stronger neutral dividers, and the darker end of the header gradient.
- `#d2d6d6` (`gray-200`, `var(--color-gray-200)`): neutral borders, separators, and card outlines between `gray-100` and `gray-300`.
- `#ecefef` (`gray-100`, `var(--color-gray-100)`): soft neutral section backgrounds and the lighter end of the header gradient.
- `#f5f7f6` (`gray-50`, `var(--color-gray-50)`): very subtle neutral surfaces and the main site background.
- Do not introduce dark blue or use slate colors as substitutes for black or neutral gray.
- Do not introduce close color variations when an assigned palette color already covers the role.

## Link system

- Use the shared `content-link` class for regular inline links inside the main content of pages.
- Content links are black and underlined by default. On hover, the underline fades away and the text becomes `teal-700` over 300ms.
- Do not use `content-link` for navigation links, cards, or button-style calls to action.
