---
title: Annotations
layout: default
nav_order: 99
---

# Page Annotations

The SAF documentation site supports **personal annotations** that you can attach to any documentation element. Annotations include your username, making it easy to share and collaborate with others by exporting/importing JSON files.

{: .highlight }
> **Privacy Note:** Annotations are stored in your browser's localStorage. They never leave your computer and are not shared with the SAF project or any server — unless you explicitly export and share them.

{: .highlight }
> **Auto-Display:** If you previously created annotations on a page, they automatically appear when you revisit. No manual enabling required.

## Toggle Button

The Annotations toggle button appears in the site header alongside the GfSE logo. It shows a pencil/edit icon (✎).

- **Blue active state:** Either annotations exist on page OR create mode is enabled
- **Left-click:** Toggles **create mode** on/off
- **Right-click:** Opens the full menu (username settings, filter, export/import)

## First Time: Set Your Username

When you create your first annotation, you'll be asked to enter a username. This identifies your annotations when sharing with others.

You can change your username at any time by **right-clicking** the annotation button and selecting **Change Username**.

## Display vs Create Mode

Annotations have two separate states:

| Mode | State | Description |
|------|-------|-------------|
| **Display** | Automatic | Your saved notes are visible (with connector lines). Read-only display. |
| **Create** | Manual toggle | Display + click-to-create, hover highlighting, crosshair cursor. |

## Creating Annotations

1. **Left-click** the Annotations button to enable create mode
2. **Click on any element** - heading, paragraph, table cell, list item, code block, or image
3. **Enter your note** in the dialog that appears
4. Click **OK** to save

Your annotation will show "Note (yourusername)" in the header to identify it as yours.

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

## Filtering Annotations

When multiple people's annotations are imported, you can filter what you see. **Right-click** the annotation button to see filter options:

| Filter Option | Description |
|---------------|-------------|
| 👁 Show All Annotations | Display everyone's annotations (default) |
| 👤 Show Only My Annotations | Display only annotations with your username |
| 👤 Show Only: [username] | Display only annotations from a specific user |

Filters are remembered between sessions.

## Sharing Annotations (Export & Import)

You can share your annotations with others, or import annotations from teammates, using JSON files.

### How to Export

**Right-click** the annotation button and choose:

| Option | Description |
|--------|-------------|
| 📄 Export This Page | Downloads only annotations from the current page |
| 📦 Export All Pages | Downloads ALL annotations from all pages you've annotated |

Send the downloaded JSON file to your collaborators.

### How to Import

1. **Right-click** the annotation button
2. Select **📥 Import Annotations...**
3. Choose a previously exported JSON file
4. Annotations are merged into your existing storage

**Important:** 
- Import uses annotation IDs to avoid duplicates. Importing the same file twice won't create duplicates.
- Annotations from other users will appear with their usernames in the note header.
- Use the **Filter** options to show/hide annotations from specific users.

### Collaboration Workflow Example

1. **Alice** creates annotations on several pages
2. **Alice** right-clicks → **📦 Export All Pages** → sends JSON to **Bob**
3. **Bob** right-clicks → **📥 Import Annotations...** → selects Alice's file
4. **Bob** sees Alice's annotations with "Note (alice)" in headers
5. **Bob** can filter: **👁 Show All** to see both his and Alice's notes, or **👤 Show Only My Annotations** to see only his

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Esc` while editing | Cancel edit |
| `Esc` while menu open | Close menu |

## Limitations

1. **Per-browser only:** Annotations in Chrome won't appear in Firefox (use Export/Import to transfer)
2. **Per-device only:** No automatic sync between computers (use Export/Import manually)
3. **No server backup:** If you clear browser data without exporting, annotations are lost
4. **Username-based filtering:** Filtering works by username string — make sure everyone uses consistent usernames when collaborating

## Troubleshooting

### Annotations not appearing?

1. **Button color:** Blue = annotations exist; Gray = no annotations saved
2. **Check filter:** Maybe you're filtering to show only certain users. Right-click → **👁 Show All Annotations**
3. **Auto-display:** Saved annotations should appear automatically
4. **Check in private/incognito:** localStorage is often disabled or ephemeral

### Annotations from other users not showing?

1. **Right-click** the annotation button
2. Make sure **👁 Show All Annotations** is selected (look for the blue highlight)
3. Or select the specific user's filter option
