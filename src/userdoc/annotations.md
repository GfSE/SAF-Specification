---
title: Annotations
layout: default
nav_order: 99
---

# Page Annotations

The SAF documentation site supports **personal annotations** that you can attach to any documentation element. These annotations are stored locally in your browser and are only visible to you.

{: .highlight }
> **Privacy Note:** Annotations are stored in your browser's localStorage. They never leave your computer and are not shared with the SAF project or any server.

{: .highlight }
> **Auto-Display:** If you previously created annotations on a page, they automatically appear when you revisit. No manual enabling required.

## Display vs Create Mode

Annotations have two separate states:

| Mode | State | Description |
|------|-------|-------------|
| **Display** | Automatic | Your saved notes are visible (with connector lines). Read-only display. |
| **Create** | Manual toggle | Display + click-to-create, hover highlighting, crosshair cursor. |

## Toggle Button

The Annotations toggle button appears in the site header alongside the GfSE logo. It shows a pencil/edit icon (✎).

- **Blue active state:** Either annotations exist on page OR create mode is enabled
- **Click button:** Toggles **create mode** on/off
- **Hover:** See tooltip "Toggle annotations mode"

To add new annotations, click the button to enter **create mode** (crosshair cursor appears, elements highlight on hover).

## Creating Annotations

1. **Enable annotation mode** by clicking the Annotations button
2. **Click on any element** - heading, paragraph, table cell, list item, code block, or image
3. **Enter your note** in the dialog that appears
4. Click **OK** to save

A colored note box will appear, connected by a dashed line to the element you annotated.

## Annotatable Elements

You can annotate these content elements:

| Element Type | Example |
|--------------|---------|
| Headings | `# H1`, `## H2`, `### H3`, etc. |
| Paragraphs | Regular text blocks |
| Table cells | Individual `td` and `th` elements |
| List items | Ordered and unordered list `li` items |
| Code blocks | Preformatted text and `pre` blocks |
| Images | Any embedded image |
| Definition lists | `dl`, `dt`, `dd` elements |

## Working with Notes

### Dragging Notes

Click and drag the **header bar** of any note box to reposition it anywhere on the page. The connector line will automatically update.

Positions are automatically saved.

### Editing Notes

There are two ways to edit a note:

1. **Double-click** anywhere on the note
2. Click the **✏ (pencil icon)** button in the note header

While editing, you can:
- **Change the text** - type in the text area
- **Change the color** - click one of the colored circles

Click **Save** to keep changes or **Cancel** to discard.

### Available Colors

| Color | Purpose (Suggested) |
|-------|---------------------|
| Yellow | General notes |
| Blue | Questions / Need to research |
| Green | Important / Key points |
| Red | Warnings / Issues |
| Purple | Personal reminders |

### Deleting Notes

Click the **× (close icon)** button in the note header. The note and its connector line will be removed.

## Storage Details

### Where Annotations are Stored

Annotations are stored per-page using your browser's `localStorage`:

- **Storage key format:** `saf_annotations_{page_path_hash}`
- **Scope:** Each page has its own independent set of annotations
- **Capacity:** Approximately 5MB per origin (browser-dependent)

### Data Format

Each annotation is stored as a JSON object with position stored **relative to the annotated element**, ensuring notes maintain their relationship when the page resizes:

```json
{
  "id": "ann_1234567890_abc123xyz",
  "selector": "#some-id > h2:nth-of-type(2)",
  "text": "My annotation text here",
  "color": "yellow",
  "offsetFromElementX": 60,
  "offsetFromElementY": 0
}
```

| Field | Description |
|-------|-------------|
| `id` | Unique identifier |
| `selector` | CSS selector identifying the target DOM element |
| `text` | The annotation text |
| `color` | Color name (yellow, blue, green, red, purple) |
| `offsetFromElementX` | Horizontal offset from element center (pixels) |
| `offsetFromElementY` | Vertical offset from element top (pixels) |

### How Elements are Identified

The system generates stable CSS selectors:

1. **First choice:** If the element has an `id` attribute → `#element-id`
2. **Fallback:** A path using `:nth-of-type()` selectors from the nearest ancestor with an ID, or from `body`

Example paths:
- `#introduction > p:nth-of-type(3)`
- `body > main > h2:nth-of-type(2) > table > tbody > tr:nth-of-type(4) > td:nth-of-type(2)`

### Smart Initial Placement

When you create a new annotation, the system automatically positions the note:

1. **Default:** 60 pixels to the **right** of the element center
2. **If right-side would go off-screen:** Places the note to the **left** of the element instead
3. **Clamping:** Ensures notes stay within viewport boundaries (20px minimum margin)

### Responsive & Resize-Friendly

Note positions are stored as **offsets relative to the annotated element**, not absolute page pixels. This means:

- When your browser window resizes, notes maintain their relationship to what they annotate
- When the page layout changes (e.g., responsive breakpoint), notes flow with the content
- Notes automatically reposition on window resize using the stored offset values

{: .warning }
> **Persistence Note:** If the SAF documentation is restructured and elements move to different positions in the DOM hierarchy, annotations may not reconnect to their original elements. Element IDs provide the most stable reference.

## Export and Backup

### Exporting Annotations

(TODO - future feature: Add an export button to download annotations as JSON)

### Browser Data Considerations

Annotations are part of your browser's "site data." They may be cleared if:

- You explicitly clear browser data/localStorage for `saf.gfse.org`
- You use browser "private" or "incognito" mode (data is cleared when session ends)
- Some browser privacy/security extensions may limit or clear localStorage

{: .highlight }
> **Tip:** To ensure long-term preservation, consider copying important annotations to external notes. Future versions may add import/export functionality.

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Esc` while editing | Cancel edit (same as clicking Cancel) |

## Limitations

1. **Per-browser only:** Annotations created in Chrome won't appear in Firefox on the same machine
2. **Per-device only:** Annotations don't sync between computers or devices
3. **DOM-dependent:** Selectors are tied to page structure; major content updates may orphan annotations
4. **No server backup:** If you clear your browser data, annotations are permanently lost

## Troubleshooting

### Annotations not appearing?

1. Ensure you're clicking the **Annotations** button to enable the mode
2. Check that your browser allows localStorage (not in a restricted/incognito mode)
3. Check browser console (F12 → Console) for any errors

### Notes not connecting to the right element?

This can happen if the page structure changed significantly since you created the annotation. The CSS selector approach relies on:
- Stable element IDs when available
- Consistent DOM hierarchy and element ordering

### Button doesn't appear?

Try:
- Refreshing the page
- Clear browser cache and reload

---

## Feedback

Found a bug or have ideas for improving the annotation system? Use:

- [Raise an Issue](https://github.com/gfse/SAF-Specification/issues/new) on GitHub
- [Discuss on GitHub](https://github.com/gfse/SAF-Specification/discussions/new?category=ideas)
