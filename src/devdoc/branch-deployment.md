---
title: Branch Deployment
layout: default
parent: Documentation Generation
nav_order: 90
---

# Branch Deployment & URL Path Handling

This document describes how the SAF Specification handles multi-branch deployments to GitHub Pages, including the `baseurl` configuration and JavaScript asset path management.

## Overview

The SAF project allows multiple branches to be deployed simultaneously to GitHub Pages, enabling:
- Preview of feature branches before merging to main
- Versioned documentation (e.g., `TdSE2024`, `TdSE2025`)
- Testing environments

## URL Structure

| Branch | Deployed URL | baseurl |
|--------|--------------|---------|
| `main` | `https://saf.gfse.org/` | `""` (empty) |
| `testing` | `https://saf.gfse.org/version/testing/` | `/version/testing` |
| `feature-xyz` | `https://saf.gfse.org/version/feature-xyz/` | `/version/feature-xyz` |

## GitHub Pages Workflow

The deployment is configured in `.github/workflows/pages.yml`.

### Key Environment Variables

```yaml
env:
  BRANCH_NAME: ${{ github.head_ref || github.ref_name }}
```

### Build Step Configuration

The workflow dynamically determines the `TARGET_FOLDER` and `baseurl`:

```bash
[[ "$BRANCH_NAME" != "main" ]] && TARGET_FOLDER="${{ github.ref_name }}"

if  [[ -n "${TARGET_FOLDER}" ]]
then
  echo "baseurl: /version/${TARGET_FOLDER}" >> ${TEMP_CONFIG}
else
  echo 'baseurl: ""' >> ${TEMP_CONFIG}
fi
```

**Logic:**
- For `main` branch: `baseurl = ""` (empty string)
- For other branches: `baseurl = "/version/{branch-name}"`

### Deployment Step

The built site is deployed to the `gh-pages` branch:

```yaml
- name: Deploy To gh-pages Branch 🚀
  uses: JamesIves/github-pages-deploy-action@v4.4.3
  with:
    branch: gh-pages
    folder: build
    force: false
    target-folder: ${{  env.BRANCH_NAME != 'main'  &&  format('version/{0}',env.BRANCH_NAME) || '' }}
    clean-exclude: |
      pr-preview/
      version/
```

**Key points:**
- `target-folder`: Non-main branches deploy to `version/{branch-name}/`
- `clean-exclude`: The `version/` folder is preserved between deployments, allowing multiple versions to coexist

## JavaScript Asset Path Handling

### The Problem

When JavaScript files reference other assets or when HTML templates include scripts, the paths must account for the `baseurl`. Without proper handling:

| Branch | Expected Path | Buggy Path | Result |
|--------|---------------|------------|--------|
| main | `/assets/js/script.js` | `/assets/js/script.js` | ✅ Works |
| testing | `/version/testing/assets/js/script.js` | `/assets/js/script.js` | ❌ 404 |

### The Solution: `basePath` in Templates

All HTML includes that reference JavaScript assets must use a dynamic `basePath` variable.

#### Files Using This Pattern

1. **`src/_includes/header_custom.html`** (main scripts)
2. **`src/_includes/viewpoint.md`** (example gallery)
3. **`src/_includes/dev-viewpoint.md`** (example gallery for dev views)

#### Template Logic

```liquid
{%- assign basePath = "" %}
{%- if site.plugin_script_base_path %}
{%-   assign basePath = site.plugin_script_base_path %}
{%- elsif site.baseurl and site.baseurl.size > 0 %}
{%-   assign basePath = site.baseurl %}
{%- endif %}

<script src="{{ basePath }}/assets/js/script.js"></script>
```

**Priority Order:**
1. `site.plugin_script_base_path` (if explicitly set)
2. `site.baseurl` (from workflow config)
3. Empty string `""` (fallback)

#### Cache Busting

To ensure users get the latest JavaScript after deployments, a cache buster using the build timestamp is added:

```liquid
{%- assign cacheBuster = site.time | date: "%Y%m%d%H%M%S" %}
<script src="{{ basePath }}/assets/js/annotations.js?v={{ cacheBuster }}"></script>
```

**Generated Output Example:**
```html
<script src="/version/testing/assets/js/annotations.js?v=20260510143022"></script>
```

## CSS and Image Paths

CSS files are referenced relative to the HTML file location, and images use the same `basePath` logic:

```html
<A href="https://gfse.org"><img src="{{ basePath }}/assets/images/gfse-logo.png" .../></A>
```

## Troubleshooting

### JavaScript 404 Errors

**Symptom:** Page loads but JavaScript features don't work. Browser console shows 404 for `.js` files.

**Possible Causes:**

1. **Missing `basePath` logic in template**
   - Fix: Ensure the template uses the `basePath` assignment logic

2. **Bug in `basePath` logic (common pitfall)**
   - **Wrong:** `{%- elsif site.baseurl.size != 0 %}{%-   assign basePath = "" %}`
   - **Right:** `{%- elsif site.baseurl and site.baseurl.size > 0 %}{%-   assign basePath = site.baseurl %}`

3. **Cache issue**
   - Fix: The `?v=timestamp` cache buster should handle this. If not, try a hard refresh (Ctrl+Shift+R).

### Debug Checklist

1. **Check deployed HTML source**: View page source and verify script URLs include the correct base path
   - Expected for testing: `/version/testing/assets/js/...`
   - Bug: `/assets/js/...` (missing `/version/testing`)

2. **Verify `_config.yml` after build**: The workflow appends `baseurl` dynamically

3. **Check template logic**: Ensure all three includes have the correct `basePath` logic

## Files to Update When Adding New JS

When adding a new JavaScript file to the project, update these files if they reference it:

| File | Purpose |
|------|---------|
| `src/_includes/header_custom.html` | Site-wide scripts loaded in header |
| `src/_includes/viewpoint.md` | Viewpoint-specific scripts |
| `src/_includes/dev-viewpoint.md` | Dev viewpoint-specific scripts |

Always use the `basePath` pattern with cache buster:

```liquid
{%- assign basePath = "" %}
{%- if site.plugin_script_base_path %}
{%-   assign basePath = site.plugin_script_base_path %}
{%- elsif site.baseurl and site.baseurl.size > 0 %}
{%-   assign basePath = site.baseurl %}
{%- endif %}
{%- assign cacheBuster = site.time | date: "%Y%m%d%H%M%S" %}

<script src="{{ basePath }}/assets/js/your-new-script.js?v={{ cacheBuster }}"></script>
```
