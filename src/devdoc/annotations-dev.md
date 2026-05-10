---
title: Annotations Developer Docs
layout: default
parent: Documentation Generation
nav_order: 99
---

# Annotations System - Developer Documentation

This document describes the technical implementation of the personal annotations system. For user-facing documentation, see [Annotations](../userdoc/annotations.md).

## Overview

The annotations system allows users to attach personal notes to DOM elements on documentation pages. Notes are stored locally in the browser's `localStorage` and are never sent to any server.

### Key Components

| Component | File/Location | Purpose |
|-----------|---------------|---------|
| Core Logic | `assets/js/annotations.js` | All annotation functionality |
| Styles | `_sass/custom/custom.scss` | CSS for notes, lines, button |
| Integration | `_includes/header_custom.html` | Script inclusion |
| User Docs | `userdoc/annotations.md` | End-user documentation |
| Dev Docs | `devdoc/annotations-dev.md` | This file |

## Architecture

### Script Loading

The script is loaded via `_includes/header_custom.html`:

```html
<script src="{{ site.baseurl }}/assets/js/annotations.js"></script>
```

It self-initializes using:
- `DOMContentLoaded` event
- `window.load` event (for image-aware re-rendering)
- Immediate check of `document.readyState`

### State Variables

```javascript
let createModeEnabled = false;      // Create mode toggle
let annotationsDisplayed = false;    // Display mode toggle
let annotations = [];                 // Array of annotation objects
let activeAnnotation = null;          // Currently dragged annotation
let isDragging = false;               // Drag state
let dragOffset = { x: 0, y: 0 };     // Mouse offset during drag
```

## Annotation Data Structure

Each annotation is stored as a JSON object in `localStorage`:

```json
{
  "id": "ann_1234567890_abc123xyz",
  "selector": "#some-id > h2:nth-of-type(2)",
  "text": "My annotation text",
  "color": "yellow",
  "offsetFromElementX": 60,
  "offsetFromElementY": 0
}
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier: `ann_{timestamp}_{random}` |
| `selector` | string | CSS selector identifying target DOM element |
| `text` | string | The annotation text content |
| `color` | string | Color name: yellow, blue, green, red, purple |
| `offsetFromElementX` | number | Horizontal offset from element center (pixels) |
| `offsetFromElementY` | number | Vertical offset from element top (pixels) |

**Legacy fields** (still supported for backwards compatibility):
- `boxX` / `boxY` - absolute pixel positions (converted to offsets on load)

### Storage Key Format

```
saf_annotations_{page_path_hash}
```

Page path is derived from `window.location.pathname`:
1. URL-decoded via `decodeURIComponent()`
2. Lowercased
3. Trailing `/` → `/index.html`
4. All non-alphanumeric chars replaced with `_`

Example: `/devdoc/devdoc.html` → `saf_annotations__devdoc_devdoc_html`

## Selector Generation

### Stable Selector Algorithm (`generateStableSelector()`)

The system generates robust CSS selectors using this priority:

1. **ID selector**: If element has `id` attribute → `#element-id`
2. **Path selector**: Otherwise, build path from element to content root

Path selector construction:
- Uses `tagName.class1.class2` format
- Uses up to 2 class names (filters out annotation/js/is- prefixed classes)
- Adds `:nth-of-type(n)` when siblings have same tag AND same class
- Stops at content root (never goes up to `body`)

### Content Root Boundary

Selectors stop at these content container elements (in priority order):
1. `#main-content`
2. `main`
3. `#site-toc`
4. `document.body` (fallback)

This prevents selector collisions with navigation elements (which often use the same tag structure without classes).

### Element Lookup (`findElementBySelector()`)

When looking up elements by selector:
1. Calls `document.querySelectorAll(selector)` to get ALL matches
2. Iterates through matches and returns the FIRST one where `isInContent()` returns `true`
3. Returns `null` if no content-area matches

This is critical because ambiguous selectors like `ul:nth-of-type(1)` will match navigation ULs before content ULs in document order.

## Positioning System

### Element-Relative Offsets

Positions are stored as offsets from the annotated element, NOT absolute page pixels:

```
offsetFromElementX = boxLeft - (elementLeft + elementWidth / 2)
offsetFromElementY = boxTop - elementTop
```

This allows notes to maintain their relationship to annotated elements when:
- Window resizes
- Layout changes (responsive breakpoints)
- Page is scrolled

### Render-Time Calculation (`getNotePositionForRender()`)

```
left = elementCenterX + offsetFromElementX
top = elementTop + offsetFromElementY
```

With viewport boundary clamping (20px margin).

### Smart Initial Placement

When creating a new annotation:
1. Default: 60px to the **right** of element center
2. If that would go off-screen right: places to the **left** instead
3. Clamps to viewport boundaries

## Connector Lines (SVG)

### Coordinate System Fix (Critical)

**The Issue:** Originally, SVG used `position: fixed` (viewport-relative) with `height: 100vh`, but JavaScript calculated document-relative coordinates using `getPageOffset()` which includes `scrollY`. This caused:
- Lines not appearing for elements below the fold
- Mismatched coordinates when scrolled

**The Fix:** Changed to `position: absolute` so SVG coordinates match document coordinates.

### SVG Dimensions

```javascript
svg.setAttribute('width', window.innerWidth);
svg.setAttribute('height', Math.max(document.body.scrollHeight, window.innerHeight));
```

### Line Drawing

Each connector uses a cubic Bézier curve:

```
start = (elementCenterX, elementCenterY)
end = (boxCenterX, boxTop + 40)
control = (midX, startY) and (midX, endY)

Path: M startX,startY C midX,startY midX,endY endX,endY
```

Plus a colored circle at the element end (6px radius, matching note color).

### Re-render Triggers

Lines are updated on:
- `renderAnnotations()` call
- `window.scroll` event
- `window.resize` event
- After dragging a note

## DOM Elements Created

### Overlay Structure

```html
<div id="annotation-overlay" class="annotation-overlay">
  <svg id="annotation-svg" class="annotation-svg"></svg>
  <div id="annotation-boxes"></div>
</div>
```

Added to `document.body` when first needed.

### Note Box Structure

```html
<div id="note_{id}" class="annotation-note" style="left: Xpx; top: Ypx; background-color: ...">
  <div class="annotation-note-header">
    <span class="annotation-note-title">Note</span>
    <div class="annotation-note-controls">
      <button class="annotation-note-btn annotation-edit-btn">✏</button>
      <button class="annotation-note-btn annotation-delete-btn">×</button>
    </div>
  </div>
  <div class="annotation-note-content">...</div>
</div>
```

## Event Flow

### Initialization

```
DOMContentLoaded (or document.readyState check)
  → initialize()
    → injectToggleButton()
    → loadAnnotations()
    → if annotations exist: showAnnotations() → renderAnnotations()

window.load
  → if annotations displayed: renderAnnotations() (image-aware)
```

### Create Mode Toggle

```
User clicks annotation button
  → toggleAnnotations()
    → if creating: disableCreateMode()
    → else: enableCreateMode()
      → document.body.classList.add('annotations-mode')
      → add 'click' capture listener
      → enableElementHover() - adds .annotation-hover-target class
```

### Creating an Annotation

```
User clicks element in create mode
  → handleContentClick(e)
    → e.preventDefault(), e.stopPropagation()
    → createAnnotation(targetElement)
      → generateStableSelector(element)
      → findElementBySelector() verification
      → prompt() for text
      → calculate smart initial position
      → push to annotations array
      → saveAnnotations()
      → renderAnnotations()
```

### Dragging a Note

```
mousedown on note header
  → isDragging = true
  → activeAnnotation = annotation
  → dragOffset = mouse position relative to box

mousemove (anywhere)
  → if isDragging:
    → calculate new box position
    → updateAnnotationOffsets() - stores relative to element
    → saveAnnotations()
    → updateLines()

mouseup (anywhere)
  → isDragging = false
  → activeAnnotation = null
```

## Content Area Detection

### `isInContent(el)`

Checks if element is within one of the content roots. This is used to:
1. Filter selector matches (prefer content over nav)
2. Validate elements during annotation creation
3. Determine which elements get hover highlighting

### `enableElementHover()`

Adds `.annotation-hover-target` class to these element types within content roots:
- `h1, h2, h3, h4` - headings
- `p` - paragraphs
- `table, td, th` - tables
- `li` - list items
- `pre, code` - code blocks
- `img` - images
- `dl, dt, dd` - definition lists
- `blockquote` - blockquotes

Excludes elements within: `.annotation-note`, `.annotation-toggle-btn`, `.site-nav`, `.side-bar`, `.site-header`, `.site-footer`

## Debug Helper

```javascript
window.safAnnotationsDebug()
```

Dumps comprehensive debug info to console:
- Page ID and storage key
- Annotations in localStorage vs memory
- Content roots
- Per-annotation selector testing (all matches, content check, positions)
- Note box existence and computed styles
- SVG dimensions and position

## Browser Support

- Uses `localStorage` - IE8+
- Uses `getBoundingClientRect()` - all modern browsers
- Uses `classList` - IE10+
- Uses SVG - all modern browsers

## Known Limitations

1. **DOM-dependent**: If page structure changes significantly, annotations may not reconnect
2. **No sync**: Per-browser, per-device only
3. **Private browsing**: localStorage often disabled or ephemeral
4. **No export**: Currently no way to backup/transfer annotations (planned feature)

## Future Enhancements (Ideas)

- Export/import annotations as JSON
- Markdown support in notes
- Annotation search
- Per-page annotation count in UI
- Collapsible notes
- Note z-index management

## Troubleshooting

See user documentation for troubleshooting guide. Key developer debug points:

1. **Selector not finding element**: Check `generateStableSelector()` stops at correct content root
2. **Lines not appearing**: Verify SVG uses `position: absolute`, not `fixed`
3. **Wrong element matched**: Verify `findElementBySelector()` is filtering by `isInContent()`
4. **Positions wrong on reload**: Check `offsetFromElementX/Y` vs legacy `boxX/Y` fields
