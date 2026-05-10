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
| Styles | `_sass/custom/custom.scss` | CSS for notes, lines, button, context menu |
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

## Export & Import System

### Context Menu (Right-Click)

The toggle button has a `contextmenu` handler that shows a popup menu:

```javascript
btn.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  showContextMenu(e.clientX, e.clientY);
});
```

Menu options:
- **📄 Export This Page** - disabled if `annotations.length === 0`
- **📦 Export All Pages** - disabled if no `saf_annotations_*` keys in localStorage
- **📥 Import Annotations...** - always enabled

Menu closes on:
- Click outside menu (and outside button)
- Press `Esc` key
- Selecting any menu item

### Export Function (`exportAnnotations(scope)`)

| Scope | Behavior |
|-------|----------|
| `'page'` | Exports only `annotations` array (current page) |
| `'all'` | Scans localStorage for all `saf_annotations_*` keys |

**Page Export Format:**
```json
{
  "version": 1,
  "exportedAt": "2026-05-10T14:30:00.000Z",
  "scope": "page",
  "pageId": "_devdoc_devdoc_html",
  "pagePath": "/devdoc/devdoc.html",
  "annotations": [...]
}
```

**All Pages Export Format:**
```json
{
  "version": 1,
  "exportedAt": "2026-05-10T14:30:00.000Z",
  "scope": "all",
  "allAnnotations": {
    "_devdoc_devdoc_html": [...],
    "_index_html": [...],
    "_userdoc_faq_html": [...]
  }
}
```

**Download Mechanism:**
1. `JSON.stringify(data, null, 2)` - pretty-printed JSON
2. `new Blob([jsonStr], { type: 'application/json' })`
3. `URL.createObjectURL(blob)`
4. Create `<a>` element, set `download` attribute, trigger click

Filename: `saf-annotations-{scope}-{timestamp}.json`
- Timestamp: ISO format with `:` and `.` replaced with `-`

### Import Functions

**`importAnnotations()`** - Opens file picker:
```javascript
const input = document.createElement('input');
input.type = 'file';
input.accept = '.json,application/json';
// ... onchange handler reads file
```

**`processImportData(data)`** - Parses and merges:

**Validation:**
- Checks `data.version === 1`
- Checks `data.scope` is `'page'` or `'all'`

**Merge Strategy (Page Scope):**
1. Get existing annotations from `localStorage.getItem(key)`
2. Create `Set` of existing annotation `id`s
3. For each imported annotation:
   - If `id` NOT in existing Set → push to array
4. `localStorage.setItem(key, JSON.stringify(existing))`
5. If affected page is current page → update `annotations` array and re-render

**Merge Strategy (All Pages Scope):**
1. Iterate through each `pageId` in `data.allAnnotations`
2. For each page, apply same merge logic as page scope
3. Track `importedCount` and `pagesCount`
4. If current page was affected → re-render

**User Feedback:**
```javascript
alert('Import complete:\n\n' +
  '• ' + importedCount + ' annotation(s) imported\n' +
  '• ' + pagesCount + ' page(s) affected\n\n' +
  '(Existing annotations with same IDs were skipped to avoid duplicates)');
```

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

### Context Menu Structure

```html
<div id="annotation-context-menu" class="annotation-context-menu" style="left: Xpx; top: Ypx;">
  <div class="annotation-context-menu-info">Annotations: N on this page</div>
  <div class="annotation-context-menu-divider"></div>
  <button class="annotation-context-menu-item" id="ann-export-page">📄 Export This Page (N)</button>
  <button class="annotation-context-menu-item" id="ann-export-all">📦 Export All Pages (M pages)</button>
  <div class="annotation-context-menu-divider"></div>
  <button class="annotation-context-menu-item" id="ann-import">📥 Import Annotations...</button>
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

### Context Menu (Right-Click)

```
User right-clicks annotation button
  → contextmenu event
  → e.preventDefault()
  → showContextMenu(e.clientX, e.clientY)
    → creates #annotation-context-menu
    → calculates button states (disabled/enabled)
    → registers onclick handlers for menu items

User clicks menu item
  → hideContextMenu()
  → exportAnnotations(scope) OR importAnnotations()

User clicks outside OR presses Esc
  → hideContextMenu()
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

### Export Flow

```
User selects "Export This Page"
  → exportAnnotations('page')
    → builds exportData with scope='page'
    → JSON.stringify with indent=2
    → creates Blob, URL.createObjectURL
    → creates <a download=...>, clicks it
    → URL.revokeObjectURL
```

### Import Flow

```
User selects "Import Annotations..."
  → importAnnotations()
    → creates <input type="file" accept=".json">
    → input.click()

User selects file
  → FileReader.readAsText()
  → JSON.parse(loadEvent.target.result)
  → processImportData(data)
    → validate version and scope
    → for each page: load existing, merge by ID, save
    → if current page affected: renderAnnotations()
    → alert() with summary
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

## CSS Classes

### Button Styles

| Class | Purpose |
|-------|---------|
| `.annotation-toggle-btn` | The pencil button in header |
| `.annotation-toggle-btn.active` | Blue active state |
| `.annotations-mode` | On body when create mode enabled (crosshair cursor) |
| `.annotation-hover-target` | Elements that highlight on hover in create mode |

### Note Styles

| Class | Purpose |
|-------|---------|
| `.annotation-overlay` | Container for SVG and boxes |
| `.annotation-svg` | The connector lines SVG |
| `#annotation-boxes` | Container for all note boxes |
| `.annotation-note` | Individual note box |
| `.annotation-note-header` | Draggable header with title and controls |
| `.annotation-note-title` | "Note" text |
| `.annotation-note-controls` | Container for edit/delete buttons |
| `.annotation-note-btn` | Edit/delete buttons |
| `.annotation-note-content` | The note text |

### Edit Mode Styles

| Class | Purpose |
|-------|---------|
| `.annotation-edit-container` | Wrapper around textarea + controls |
| `.annotation-edit-textarea` | The text input area |
| `.annotation-edit-controls` | Color picker + Save/Cancel buttons |
| `.annotation-color-wrapper` | Container for color picker |
| `.annotation-color-picker` | The color buttons container |
| `.annotation-color-btn` | Individual color circle button |
| `.annotation-color-btn.selected` | Selected color (dark border) |
| `.annotation-save-btn` | Save button (blue) |
| `.annotation-cancel-btn` | Cancel button (gray) |

### Context Menu Styles

| Class | Purpose |
|-------|---------|
| `.annotation-context-menu` | The popup menu container |
| `.annotation-context-menu-item` | Individual menu button |
| `.annotation-context-menu-item:disabled` | Grayed out button |
| `.annotation-context-menu-divider` | Horizontal line separator |
| `.annotation-context-menu-info` | Info text at top of menu |

## Browser Support

- Uses `localStorage` - IE8+
- Uses `getBoundingClientRect()` - all modern browsers
- Uses `classList` - IE10+
- Uses SVG - all modern browsers
- Uses `Blob`/`URL.createObjectURL` - IE10+
- Uses `FileReader` - IE10+

## Known Limitations

1. **DOM-dependent**: If page structure changes significantly, annotations may not reconnect
2. **No automatic sync**: Per-browser, per-device only (use Export/Import manually)
3. **Private browsing**: localStorage often disabled or ephemeral

## Troubleshooting

Key developer debug points:

1. **Selector not finding element**: Check `generateStableSelector()` stops at correct content root
2. **Lines not appearing**: Verify SVG uses `position: absolute`, not `fixed`
3. **Wrong element matched**: Verify `findElementBySelector()` is filtering by `isInContent()`
4. **Positions wrong on reload**: Check `offsetFromElementX/Y` vs legacy `boxX/Y` fields
5. **Export not working**: Check `Blob`/`URL.createObjectURL` availability
6. **Import not merging**: Verify annotation `id`s are being compared correctly
