---
title: Annotations
layout: default
parent: Documentation Generation
nav_order: 99
---

# Annotations System - Developer Documentation

This document describes the technical implementation of the personal annotations system. For user-facing documentation, see [Annotations](../userdoc/annotations.md).

## Overview

The annotations system allows users to attach personal notes to DOM elements on documentation pages. Notes are stored locally in the browser's `localStorage` and are never sent to any server.

**Multi-user collaboration** is supported through:
- Username field in each annotation
- Export/import of JSON files
- User-based filtering

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

let currentUsername = null;           // Cached current username
let userFilter = null;                // null=show all, 'me'=show only mine, [users]=filter list
```

### Storage Keys

| Key | Purpose |
|-----|---------|
| `saf_annotations_{pageId}` | Per-page annotation arrays |
| `saf_annotations_username` | Current user's username |
| `saf_annotations_filter` | User filter preference |

## Annotation Data Structure

Each annotation is stored as a JSON object in `localStorage`:

```json
{
  "id": "ann_1234567890_abc123xyz",
  "selector": "#some-id > h2:nth-of-type(2)",
  "text": "My annotation text",
  "color": "yellow",
  "offsetFromElementX": 60,
  "offsetFromElementY": 0,
  "username": "alice"
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
| `username` | string | **New in v2** - Username of annotation author |

**Legacy fields** (still supported for backwards compatibility):
- `boxX` / `boxY` - absolute pixel positions (converted to offsets on load)
- Annotations without `username` field are treated as "unknown" user

### Username Management

**`getCurrentUsername()`** - Returns cached or stored username:
```javascript
function getCurrentUsername() {
  if (currentUsername) return currentUsername;
  try {
    const stored = localStorage.getItem(USERNAME_STORAGE_KEY);
    if (stored && stored.trim()) {
      currentUsername = stored.trim();
      return currentUsername;
    }
  } catch (e) {}
  return null;
}
```

**`setCurrentUsername(username)`** - Saves username to localStorage:
```javascript
function setCurrentUsername(username) {
  if (username && username.trim()) {
    username = username.trim();
    currentUsername = username;
    localStorage.setItem(USERNAME_STORAGE_KEY, username);
  } else {
    currentUsername = null;
    localStorage.removeItem(USERNAME_STORAGE_KEY);
  }
}
```

**`promptForUsername()`** - Shows prompt dialog to set/change username:
- Shows current username if set
- After setting, re-renders annotations if displayed

**Username Enforcement:** When `createAnnotation()` is called without a username set:
1. User is prompted to enter a username
2. If cancelled, annotation creation is aborted
3. Username is saved before proceeding

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

## User Filtering System

### Filter Storage

Filter preferences are stored in localStorage as `saf_annotations_filter`:

| Stored Value | Meaning |
|--------------|---------|
| `"all"` | Show all annotations (userFilter = null) |
| `"me"` | Show only current user's annotations |
| `["alice"]` | JSON array - show only specific users |

### Filter Functions

**`getUserFilter()`** - Returns cached or stored filter:
```javascript
function getUserFilter() {
  if (userFilter !== null && userFilter !== undefined) {
    return userFilter;
  }
  // Read from localStorage and parse
  // 'all' → null, 'me' → 'me', JSON → array
}
```

**`setUserFilter(filter)`** - Saves filter and re-renders:
```javascript
function setUserFilter(filter) {
  userFilter = filter;
  // Save to localStorage: null→'all', 'me'→'me', array→JSON.stringify
  if (annotationsDisplayed) {
    renderAnnotations();  // Re-render with new filter
  }
}
```

**`getUniqueUsernames()`** - Scans localStorage for all unique usernames:
```javascript
function getUniqueUsernames() {
  const usernames = new Set();
  // Scan ALL saf_annotations_* keys in localStorage
  // Also check current page's annotations array
  return Array.from(usernames).sort();
}
```

**`isAnnotationVisible(annotation)`** - Core filtering logic:
```javascript
function isAnnotationVisible(annotation) {
  const filter = getUserFilter();
  
  if (filter === null) return true;  // Show all
  
  if (filter === 'me') {
    const myUsername = getCurrentUsername();
    if (!myUsername) {
      return !annotation.username;  // No user set → show only unknown annotations
    }
    return annotation.username === myUsername;
  }
  
  if (Array.isArray(filter)) {
    if (filter.length === 0) return true;
    return filter.indexOf(annotation.username) >= 0;
  }
  
  return true;
}
```

### Filtered Rendering

`renderAnnotations()` checks `isAnnotationVisible()` for each annotation:

```javascript
for (let i = 0; i < annotations.length; i++) {
  const annotation = annotations[i];
  
  if (!isAnnotationVisible(annotation)) {
    filteredOut++;
    continue;  // Skip this annotation
  }
  // ... render annotation
}
```

## Context Menu (Right-Click)

The context menu is shown on `contextmenu` event of the toggle button.

### Menu Structure

```
┌─────────────────────────────┐
│ User: alice                 │  ← Info with current username
│ 👤 Change Username          │  ← Prompts for new username
├─────────────────────────────┤
│ Filter:                     │  ← Section header
│ 👁 Show All Annotations     │  ← Highlighted if active
│ 👤 Show Only My Annotations │  ← Disabled if no username set
│ Users in storage:           │
│ 👤 Show Only: alice         │  ← Dynamic from getUniqueUsernames()
│ 👤 Show Only: bob           │
├─────────────────────────────┤
│ 📄 Export This Page (3)     │  ← Disabled if no annotations
│ 📦 Export All Pages (5)     │  ← Disabled if no annotations
├─────────────────────────────┤
│ 📥 Import Annotations...    │  ← Always enabled
└─────────────────────────────┘
```

### Active Filter Highlighting

- `.annotation-filter-active` class applied to currently selected filter
- Blue background (`#e8f4fc`) and blue text (`#2563eb`)

### Menu Closing

Menu closes on:
- Click outside menu AND outside toggle button
- Press `Esc` key
- Clicking any menu item

## Export & Import System

### Export Functions

**`exportAnnotations(scope)`** - Downloads annotations as JSON:

| Scope | Behavior |
|-------|----------|
| `'page'` | Exports only `annotations` array (current page) |
| `'all'` | Scans localStorage for ALL `saf_annotations_*` keys |

**Page Export Format:**
```json
{
  "version": 1,
  "exportedAt": "2026-05-10T14:30:00.000Z",
  "scope": "page",
  "pageId": "_devdoc_devdoc_html",
  "pagePath": "/devdoc/devdoc.html",
  "annotations": [
    { "id": "...", "username": "alice", ... },
    { "id": "...", "username": "bob", ... }
  ]
}
```

**All Pages Export Format:**
```json
{
  "version": 1,
  "exportedAt": "2026-05-10T14:30:00.000Z",
  "scope": "all",
  "allAnnotations": {
    "_devdoc_devdoc_html": [
      { "id": "...", "username": "alice", ... }
    ],
    "_index_html": [
      { "id": "...", "username": "bob", ... }
    ]
  }
}
```

**Download Mechanism:**
1. `JSON.stringify(data, null, 2)` - pretty-printed JSON
2. `new Blob([jsonStr], { type: 'application/json' })`
3. `URL.createObjectURL(blob)`
4. Create `<a>` element, set `download` attribute, trigger click
5. `URL.revokeObjectURL`

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

**Merge Strategy (ID-based):**
```javascript
const existingIds = new Set(existing.map(function(a) { return a.id; }));

for (let i = 0; i < pageAnnotations.length; i++) {
  const ann = pageAnnotations[i];
  if (!existingIds.has(ann.id)) {  // Only add if ID doesn't exist
    existing.push(ann);
    added++;
  }
}
```

**This means:**
- Same annotation imported twice → no duplicate (ID already exists)
- Edited annotation re-imported → NOT updated (same ID skipped)
- For true collaboration, users should use different usernames and filter views

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
    <span class="annotation-note-title">Note (alice)</span>  <!-- Shows username now -->
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
  <div class="annotation-context-menu-info">User: <strong>alice</strong></div>
  <button class="annotation-context-menu-item" id="ann-set-username">👤 Change Username</button>
  <div class="annotation-context-menu-divider"></div>
  <div class="annotation-context-menu-info">Filter:</div>
  <button class="annotation-context-menu-item annotation-filter-active" id="ann-filter-all">👁 Show All</button>
  <!-- ... more buttons ... -->
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
User left-clicks annotation button
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
    → gets currentUser, uniqueUsers, currentFilter
    → builds menu HTML with dynamic filter options
    → registers onclick handlers

User clicks menu item
  → hideContextMenu()
  → action: promptForUsername() OR setUserFilter() OR export/import

User clicks outside OR presses Esc
  → hideContextMenu()
```

### Creating an Annotation

```
User clicks element in create mode
  → handleContentClick(e)
    → e.preventDefault(), e.stopPropagation()
    → createAnnotation(targetElement)
      → Check/get username: if not set, promptForUsername()
      → If user cancels username prompt → return (don't create)
      → generateStableSelector(element)
      → findElementBySelector() verification
      → prompt() for text
      → calculate smart initial position
      → create annotation object with username field
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

### Filter Change Flow

```
User selects "Show Only My Annotations"
  → setUserFilter('me')
    → userFilter = 'me'
    → save to localStorage
    → renderAnnotations()
      → isAnnotationVisible() checks each annotation
      → filtered annotations are skipped
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

## CSS Classes Reference

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
| `.annotation-note-title` | "Note (username)" text |
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
| `.annotation-context-menu-info` | Info text at top of sections |
| `.annotation-filter-active` | Currently selected filter (blue highlight) |

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
4. **ID-based merge**: Import doesn't update existing annotations with same ID (only adds new ones)
5. **Username-based filtering**: No user management - filtering based on username strings only

## Troubleshooting

Key developer debug points:

1. **Selector not finding element**: Check `generateStableSelector()` stops at correct content root
2. **Lines not appearing**: Verify SVG uses `position: absolute`, not `fixed`
3. **Wrong element matched**: Verify `findElementBySelector()` is filtering by `isInContent()`
4. **Positions wrong on reload**: Check `offsetFromElementX/Y` vs legacy `boxX/Y` fields
5. **Export not working**: Check `Blob`/`URL.createObjectURL` availability
6. **Import not merging**: Verify annotation `id`s are being compared correctly
7. **Filter not working**: Check `isAnnotationVisible()` logic and `userFilter` state
8. **Username not saving**: Check `localStorage.setItem()` for USERNAME_STORAGE_KEY
