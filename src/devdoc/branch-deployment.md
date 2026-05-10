---
title: Branch Deployment
layout: default
parent: Documentation Generation
nav_order: 90
---

# Branch Deployment & URL Path Handling

This document describes how the SAF Specification handles multi-branch deployments to GitHub Pages.

## Overview

Multiple branches can be deployed simultaneously to GitHub Pages, enabling:
- Preview of feature branches before merging to main
- Versioned documentation (e.g., `TdSE2024`, `TdSE2025`)
- Testing environments

## URL Structure

| Branch | Deployed URL | `baseurl` |
|--------|--------------|-----------|
| `main` | `https://saf.gfse.org/` | `""` (empty) |
| `testing` | `https://saf.gfse.org/version/testing/` | `/version/testing` |
| `TdSE2024` | `https://saf.gfse.org/version/TdSE2024/` | `/version/TdSE2024` |

## GitHub Pages Workflow

The deployment is configured in `.github/workflows/pages.yml`.

### Build Step

For non-main branches, the workflow sets:
1. Sets `baseurl: /version/{branch-name}`
2. Deploys to `gh-pages` branch under `version/{branch-name}/`

For the `main` branch:
1. Sets `baseurl: ""`
2. Deploys to root of `gh-pages` branch

The `version/` folder is preserved between deployments, allowing multiple versions to coexist.

## Path Handling in Templates

In HTML templates and includes, use `site.baseurl` directly:

{% raw %}
```liquid
<script src="{{ site.baseurl }}/assets/js/script.js"></script>
```
{% endraw %}

This ensures the correct path is generated:

| `site.baseurl` | Generated URL |
|----------------|--------------|
| `""` (main) | `/assets/js/script.js` |
| `"/version/testing"` | `/version/testing/assets/js/script.js` |

### Cache Busting

A cache buster using the build timestamp ensures users get the latest assets after deployments:

{% raw %}
```liquid
{%- assign cacheBuster = site.time | date: "%Y%m%d%H%M%S" %}
<script src="{{ site.baseurl }}/assets/js/script.js?v={{ cacheBuster }}"></script>
```
{% endraw %}

## JavaScript basePath Variable

The file `src/assets/js/site_constants.js` has frontmatter and is processed by Jekyll. It defines a JavaScript variable:

{% raw %}
```javascript
{%- if site.baseurl.size == 0 %}
const basePath = '';
{%- else %}
const basePath = '{{ site.baseurl }}';
{%- endif %}
```
{% endraw %}

This `basePath` is used by the version switcher menu for:
- Building version paths
- Detecting current page
- Building navigation links

## Version Switcher Menu

The version switcher allows switching between deployed versions.

### Current Version Detection

| `basePath` | `currentVersion` Display |
|-------------|---------------------|
| `""` (main) | Default branch from GitHub API |
| `"/version/testing"` | `"testing"` |
| `"/version/TdSE2024"` | `"TdSE2024"` |

### Navigation Links

| Clicking | Navigates to |
|-----------|--------------|
| "latest" | Root path (`/...`) |
| "TdSE2024" | `/version/TdSE2024/...` |
