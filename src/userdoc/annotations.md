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

## Toggle Button

The Annotations toggle button appears in the site header alongside the GfSE logo. It shows a pencil/edit icon (✎).

- **Blue active state:** Either annotations exist on page OR create mode is enabled
- **Left-click:** Toggles **create mode** on/off
- **Right-click:** Opens export/import menu (see below)

## Display vs Create Mode

Annotations have two separate states:

| Mode | State | Description |
|------|-------|-------------|
| **Display** | Automatic | Your saved notes are visible (with connector lines). Read-only display. |
| **Create** | Manual toggle | Display + click-to-create, hover highlighting, crosshair cursor. |

## Creating Annotations

1. **Enable annotation mode** by **left-clicking** the Annotations button (pencil icon)
2. **Click on any element** - heading, paragraph, table cell, list item, code block, or image
3. **Enter your note** in the dialog that appears
4. Click **OK** to save

A colored note box will appear, connected by a dashed line to the element you annotated.

## Annotatable Elements

You can annotate: headings, paragraphs, table cells, list items, code blocks, images, and definition lists.

## Working with Notes

### Dragging Notes

Click and drag the **header bar** of any note box to reposition it. The connector line automatically updates. Positions are saved automatically.

### Editing Notes

- **Double-click** anywhere on the note, or
- Click the **✏ (pencil icon)** button in the note header

While editing, you can change the text and choose a different color. Click **Save** or **Cancel**.

### Available Colors

| Color | Suggested Purpose |
|-------|-------------------|
| Yellow | General notes |
| Blue | Questions / Need to research |
| Green | Important / Key points |
| Red | Warnings / Issues |
| Purple | Personal reminders |

### Deleting Notes

Click the **× (close icon)** button in the note header.

## Export & Import

You can backup and transfer your annotations using JSON files. Access these features by **right-clicking** the Annotations button in the header.

### Export Options

| Option | Description |
|--------|-------------|
| **📄 Export This Page** | Downloads only annotations from the current page |
| **📦 Export All Pages** | Downloads annotations from ALL pages you've annotated |

Filename format: `saf-annotations-{scope}-{timestamp}.json`

### Import Annotations

1. **Right-click** the Annotations button
2. Select **📥 Import Annotations...**
3. Choose a previously exported JSON file
4. Annotations are merged into your existing storage

**Important:** Import uses annotation IDs to avoid duplicates. If you import the same file twice, the second import won't create duplicates.

### Example Workflow - Transfer to Another Computer

1. On source computer: Right-click → **📦 Export All Pages**
2. Copy the downloaded JSON file to target computer
3. On target computer: Right-click → **📥 Import Annotations...**
4. Select the JSON file
5. All annotations are now available on the target computer

### Example Workflow - Backup Before Clearing Browser Data

1. Right-click → **📦 Export All Pages**
2. Save the JSON file in a safe location
3. Clear browser data
4. Later: Right-click → **📥 Import Annotations...** to restore

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Esc` while editing | Cancel edit |
| `Esc` while context menu open | Close menu |

## Limitations

1. **Per-browser only:** Annotations in Chrome won't appear in Firefox (but you can use Export/Import to transfer)
2. **Per-device only:** No automatic sync between computers (use Export/Import manually)
3. **No server backup:** If you clear browser data without exporting, annotations are lost

## Troubleshooting

### Annotations not appearing?

1. **Button color:** Blue = annotations exist; Gray = no annotations saved
2. **Auto-display:** Saved annotations should appear automatically
3. **Check in private/incognito:** localStorage is often disabled or ephemeral
