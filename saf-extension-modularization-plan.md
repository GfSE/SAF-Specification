# SAF Specification Modularization — Extension Mechanism

## Context

SAF is a SysML-based architecture framework documented at saf.gfse.org (Jekyll + just-the-docs, source in `src/`, deployed by `.github/workflows/pages.yml` to the `gh-pages` branch; main → site root, other branches → `/version/<branch>/`).

Goal: make SAF a modular, extensible specification. Independent users publish **extension repos** (own Jekyll sites, built from a SAF-controlled template) that add complementary viewpoints/pages referencing the core spec. Two directions:

1. **Core site shows extension content**: a header "Extensions" settings menu lets any visitor add an extension by URL, enable/disable/remove it; selections persist in browser `localStorage` (no accounts, no central registry). Enabled extensions appear in the sidebar nav; clicking an entry loads that page's content fragment into the core page's main area with a provenance banner. **No extension-supplied code is ever executed.**
2. **Extension site references the core spec**: the extension repo's generated landing page embeds the referenced core spec pages (fetched as fragments from saf.gfse.org) via the same SDK.
3. **Extension viewpoint documentation is generated from the extension's own JSON**: like the core, extension viewpoint pages are thin wrappers over `_includes/viewpoint.md` rendered from `site.data.*`. Extensions ship their own `_data/*.json` (viewpoints, examples) plus a vendored snapshot of the core spec data in `_data/core/`; cross-references to core items (stakeholders, concerns, concepts, stereotypes, related viewpoints, domains, aspects) resolve local-first and fall back to the snapshot, rendering as absolute links to `spec_baseurl`.

**First validation**: a concrete extension `extension-security/` in this repo containing the five core Security (C7) viewpoints, extracted from the core's JSON files into the extension's own data files — proving the full loop (own JSON → generated pages → JSON-level cross-links to core → embedded in core site → core spec pages embedded in extension site). The core spec is **not** modified: C7 viewpoints remain in the core; the extension duplicates them. Removing them from the core is a later, separate step once the mechanism is proven.

Scope boundary: v1 is **additive only** — extensions add new pages; they never modify or refine existing core content. Core SAF grid table (`grid.html`) and the core search index are not extended; extension entries appear in the sidebar nav only. Extension sites do not render the SAF grid (their landing page lists referenced core pages instead).

## Approach

All new code is vanilla JS, no dependencies, no build step, following the conventions of `src/assets/js/stereotypes_filter.js` (plain scripts, `DOMContentLoaded` where DOM is needed). SDK scripts live in a revision directory `/assets/js/saf-embed/r1/` — breaking contract changes later go to a new revision dir, never edits to `r1` (pattern established by the contract comment in `src/assets/js/plugin_versions_menu.js`).

### Step 1 — Core page index: `pages.json` generator (independent)

New file `src/_plugins/saf_pages_json_generator.rb` (the dir does not exist yet; create it). Jekyll generator plugin, auto-loaded by `jekyll build` (no Gemfile change needed — the CI build is `bundle exec jekyll build`, not the dockerized `actions/jekyll`, so local `_plugins/` work):

```ruby
require "json"

class SafPagesJsonGenerator < Jekyll::Generator
  def generate(site)
    entries = site.pages
      .select { |p| p.data["layout"] == "default" }
      .map { |p| { "title" => p.data["title"].to_s, "url" => p.url } }
      .sort_by { |e| e["url"] }
    site.write("assets/json/pages.json", JSON.generate(entries))
  end
end
```

Result: `assets/json/pages.json` = `[{"title": ..., "url": "/userdoc/...html"}, ...]` for every page with `layout: default` (index, userdoc, devdoc). `page.url` values contain spaces for multi-word page names — that is fine in JSON; consumers must percent-encode when fetching.

### Step 2 — Shared SDK: `src/assets/js/saf-embed/r1/saf-embed.js` (independent)

New file. IIFE exposing `window.SAFEmbed`. First lines: a contract comment modeled on `plugin_versions_menu.js` (revisioned path; additive changes safe; released/extension pages pin `r1`).

Exact API:

```js
SAFEmbed.extractFragment(htmlText, baseUrl)              // -> HTMLElement (sanitized clone of <main>)
SAFEmbed.mountFragment({ url, container })               // -> Promise<HTMLElement>; replaces container content
SAFEmbed.loadManifest(url)                               // -> Promise<manifest>; throws Error with human-readable message
SAFEmbed.loadPages(specBase)                             // -> Promise<Array<{title,url}>> from specBase + "/assets/json/pages.json"
SAFEmbed.mountExtensionNav({ basePath })                 // core site only: sidebar section + deep-link mounting
SAFEmbed.mountSpecReferences({ specBase, refs, list, content })  // extension site only
```

Behavior:

- **extractFragment(htmlText, baseUrl)**
  - Parse with `new DOMParser().parseFromString(htmlText, "text/html")`.
  - Take `doc.querySelector("main")` (just-the-docs wraps page content in `<main>` — verified in live DOM: `<div id="main-content" class="main-content"><main>…</main></div>`); fallback `doc.querySelector("body")`.
  - Remove all descendant `script, style, link, meta, noscript, iframe, object, embed, form, input, button, select, textarea, video, audio, canvas, dialog` elements (no code execution, no foreign CSS, no embedded origins — styling comes from the host theme). Consequence to document: the example gallery of a viewpoint page (its inline `images` array + `examplegallery.js`) is stripped, so an embedded page shows its first example statically without filter/prev-next controls — accepted in v1.
  - Remove every attribute whose name starts with `on` (event handlers).
  - URL sanitization, for every `a[href], img[src], source[src]`: value matching `^javascript:|^vbscript:` (case-insensitive) → set to `#`; `data:text/html` → `#` (img: remove the attribute); other `data:` allowed only for `img[src]` when matching `^data:image/`; value not matching `^(https?:|mailto:|data:|#|//)` → `new URL(value, baseUrl).href` (rewrites relative links/images to the extension's origin). Keep the `style` attribute (fragment-scoped; cosmetic spoofing only, bounded by the provenance banner).
  - ID namespacing: for every element in the fragment carrying an `id`, set `id = "saf-ext-" + id` (avoids duplicate-ID collisions with the host page's headings, e.g. `#purpose`, which would break anchor jumps).
  - Return a clone created in the host document (`document.importNode(fragment, true)`).

- **mountFragment({ url, container })**
  - `url = new URL(url).href` (normalizes spaces in page paths to `%20` before fetching — core page paths contain spaces).
  - `fetch(url)`; if `!res.ok` throw `Error("HTTP " + res.status)`; `extractFragment(await res.text(), url)`; `container.innerHTML = ""`; append fragment; scroll container to top. Return the element.

- **loadManifest(url)**
  - `url = new URL(url).href` — a relative/invalid input throws `Error("Invalid manifest: not an absolute URL")` before any fetch.
  - `fetch(url)` (must succeed cross-origin; GitHub Pages sends `Access-Control-Allow-Origin: *` — verified on saf.gfse.org); parse JSON.
  - Validate: object with string `id`, string `name`, non-empty array `entries` where each entry has string `id` and string `path` starting with `/`. On failure throw `Error("Invalid manifest: <reason>")`. Return the manifest.

- **loadPages(specBase)**: `fetch(new URL(specBase + "/assets/json/pages.json").href)`, parse, return array. (The SDK's public functions normalize every URL they fetch through `new URL(…).href` so paths containing spaces are encoded.)

- **mountExtensionNav({ basePath })** — core site. Idempotent (safe to re-run after settings changes):
  - Settings: `JSON.parse(localStorage.getItem("saf.settings.v1") || '{"extensions":[]}')`; shape `{"extensions":[{id,name,manifestUrl,enabled,author,version,firstEntry}]}`.
  - Deep link: read `location.search` → `ext` (URL-decoded manifest URL) and `page` (entry id).
  - Effective extensions = saved entries with `enabled: true`, plus the `ext`-param manifest as a one-shot session extension if its `manifestUrl` is not already saved (not persisted).
  - Sidebar: find `document.querySelector("nav#site-nav > ul.nav-list")` (verified live DOM: `<nav id="site-nav" class="site-nav"><ul class="nav-list">…`). Remove any existing `li#saf-extensions-nav`. If no effective extensions, stop (no section). Otherwise append, per effective extension, one flat `<li class="nav-list-item">` **per entry** (flat on purpose — JTD only auto-wires expander buttons for static nav; flat items need no expander mechanics):
    ```html
    <li class="nav-list-item">
      <a class="nav-list-link" href="{basePath}/?ext={encodeURIComponent(manifestUrl)}&page={entryId}">
        <span style="opacity:.6;font-size:.85em">{extension name} · </span>{entry title}
      </a>
    </li>
    ```
    preceded by one label row (first extension only): `<li class="nav-list-item"><span style="display:block;padding:.5rem 1rem;font-size:.85rem;opacity:.6">Extensions</span></li>`.
    If `location.search` matches, add class `active` to the corresponding link (JTD styles `.nav-list-link.active`).
  - Deep-link mounting: if `ext` param present → `loadManifest(decode(ext))` → entry = `entries.find(e => e.id === page) || entries[0]` → `mountFragment({ url: new URL(entry.path, manifestUrl).href, container: document.querySelector("#main-content main") })`. Before appending the fragment, prepend a provenance banner element:
    ```html
    <div id="saf-fragment-banner" style="padding:.75rem 1rem;margin-bottom:1rem;border-left:4px solid var(--bs-border-color,#ddd);background:var(--bs-bg-soft,#f8f8f8);font-size:.9rem">
      <strong>External extension content</strong> — <b>{name}</b> {version} by {author}.
      Not official GfSE content.
      <a href="{repository}">Repository</a> · <a href="{manifestUrl}">Manifest</a> · <a href="{basePath}/">Back to SAF</a><br>
      {if relations.length: "References: " + relations.map(r => `<a href="{r.target}">{r.target}</a>`).join(", ") + "<br>"}
      {if specVersion mismatch: <span style="color:var(--bs-warning-text,#856404)">⚠ Built for SAF {specVersion}; this site is SAF {current}.</span>}
    </div>
    ```
    (omit `repository`/`author`/`relations`/`version` spans when the manifest lacks the field).
    **Untrusted input**: every manifest field is attacker-controllable (the manifest URL comes from a user-pasted URL). Build the banner with `document.createElement` + `textContent` only — never interpolate manifest strings into an `innerHTML`/`insertAdjacentHTML` template. The `repository` link is rendered only when the value matches `^https?://`; each `relations[].target` is rendered as a link only when it matches `^https?://`, otherwise as plain text.
    Current site version: `basePath === "" ? "latest" : basePath.replace(/^\/version\//, "").replace(/\/$/, "")` (matches `_data/releases.yml` ids: `latest` + branch names). Mismatch = manifest `specVersion` present and not in `{current, "latest", "any"}`.
    On manifest fetch/parse failure: show the banner with an error line (`Could not load extension: <message>`, via `textContent`) and no fragment. Never throw into the page.
    Sidebar entry names/titles are likewise set via `textContent`, never innerHTML.

- **mountSpecReferences({ specBase, refs, list, content })** — extension site:
  - `pages = await loadPages(specBase)`; `selected = refs ? pages.filter(p => refs.includes(p.url)) : []`.
  - Render into `list`: `<ul>` with one `<li><a href="{specBase}{p.url}">{p.title}</a></li>` per selected page. Click handler: `e.preventDefault(); mountFragment({ url: specBase + p.url, container: content })`.
  - If `selected` empty: `list.textContent = "No referenced specification pages declared."`.
  - On `loadPages` failure (offline/no CORS): `list.textContent = "Could not load SAF specification index."`.
  - **Auto-init**: at the very top of the script file (synchronously, before any async boundary) capture `const scriptEl = document.currentScript;` — by `DOMContentLoaded` time `document.currentScript` is null. If `scriptEl?.dataset.specBase` is set, run on `DOMContentLoaded` with `specBase = scriptEl.dataset.specBase`, `refs = scriptEl.dataset.refs ? scriptEl.dataset.refs.split(",") : []`, `list = document.querySelector("#saf-spec-embed-list")`, `content = document.querySelector("#saf-spec-embed-content")`; if those containers are missing, do nothing.

### Step 3 — Settings menu (core site), depends on Step 2

New file `src/assets/js/saf-embed/r1/saf-settings.js`. Runs on `DOMContentLoaded`; builds UI inside `document.getElementById("saf-settings-menu")` (see markup change below). UI mechanics copied from `src/assets/js/plugin_versions_menu.js`: button with chevron background data-URIs (reuse the same two inline SVG data-URIs), inline `cssText` styling, dropdown div, click-outside-to-close (`window` click listener), open/closed background image swap. Button width 140px, label text `Extensions`, same `.site-footer` flex context as the version menu.

Storage (exact):
- Key: `saf.settings.v1`; value `JSON.stringify({ extensions: [{ id, name, manifestUrl, enabled, author, version, firstEntry }] })`.
- `loadSettings()` / `saveSettings(s)`: write, then `window.dispatchEvent(new CustomEvent("saf:settings-changed"))`.

Dropdown content (rebuilt each open):
- Saved extensions, each row: `<label><input type="checkbox"> {name} <small>{version} · {author}</small></label>` plus two small buttons:
  - **link** — copies `basePath + "/?ext=" + encodeURIComponent(manifestUrl) + "&page=" + firstEntry` to clipboard (`navigator.clipboard.writeText`).
  - **×** — removes the entry.
  - Checkbox change: toggle `enabled`, save. If unchecking while `location.search` contains `ext=` → `location.href = basePath + "/"` (leaves the fragment view).
- Add form: `<input id="saf-ext-url" placeholder="Manifest or site URL">` + `Add` button. URL resolution order (try each with `loadManifest`, first success wins):
  1. the input as-is (trimmed);
  2. input + `/saf-extension.json` (site root form; only when input does not already end in `.json`);
  3. if input matches `^https://github\.com/([^/]+/[^/]+?)/?$` → `https://{owner}.github.io/{repo}/saf-extension.json`.
  All fail → inline error text in the dropdown (last error message); nothing saved. Success → append `{ id: m.id, name: m.name, manifestUrl: resolvedUrl, enabled: true, author: m.author || "", version: m.version || "", firstEntry: m.entries[0].id }`, save, close dropdown.
- `Reset` button — `localStorage.removeItem("saf.settings.v1")`, save, close.
- Empty state (no saved extensions): text `No extensions added yet. Paste a manifest URL above.`
- On load and on `saf:settings-changed`: call `SAFEmbed.mountExtensionNav({ basePath })` (`basePath` is a top-level `const` from `site_constants.js`, already loaded earlier in the same header include).

Markup change in `src/_includes/header_custom.html` — insert directly after the existing `plugin_versions_menu.js` script tag (the existing `site_constants.js` tag, `basePath` derivation, and `cacheBuster` variable are already in this file; keep their pattern):

```html
<div id="saf-settings-menu" class="site-footer"></div>
<script src="{{ basePath }}/assets/js/saf-embed/r1/saf-embed.js?v={{ cacheBuster }}"></script>
<script src="{{ basePath }}/assets/js/saf-embed/r1/saf-settings.js?v={{ cacheBuster }}"></script>
```

Script order in the file becomes: `site_constants.js` → `plugin_versions_menu.js` → `stereotypes_filter.js` → new `saf-embed.js` → new `saf-settings.js` (the two new tags go after the `stereotypes_filter.js` tag).

### Step 4 — Documentation (core), depends on Steps 2–3 existing

New file `src/userdoc/extensions.md`, front matter `title: Extensions`, `layout: default`, `nav_order: 85` (sits between Contributing at 80 and Standard Traceability at 90). Sections:

1. **What extensions are** — independent repositories adding complementary SAF content (viewpoints, concepts, examples); never modify core content; always visibly marked as external.
2. **Adding extensions** — header Extensions menu: paste a manifest URL, an extension site root, or a GitHub repo URL; enable/disable; copy link; reset. Selections live only in this browser's localStorage.
3. **Deep links** — `?ext=<URL-encoded manifest URL>&page=<entry id>` opens an extension entry directly (works without prior settings).
4. **Provenance & compatibility** — the banner (name, version, author, repository, relations); `specVersion` mismatch shows a warning but content still renders; pin exact versions by adding a release-specific manifest URL.
5. **Trust & security** — fragments are sanitized before mounting: all `script`, `style`, `link`, `meta`, `noscript`, `iframe`, `object`, `embed`, `form`, `input`, `button`, `select`, `textarea`, `video`, `audio`, `canvas`, `dialog` elements removed; all `on*` event-handler attributes removed; `javascript:`/`vbscript:`/`data:text/html` URLs neutralized; relative links and images rewritten to the extension's origin; element IDs namespaced with a `saf-ext-` prefix. No extension code executes. Consequence: interactive widgets in embedded pages (e.g. the example-gallery filter) are inert — the first example shows statically. Manifest fields are rendered as text, never as HTML. Content is served by the extension author; extensions are not endorsed by GfSE.
6. **Extension authoring** — manifest schema table (required marked `*`): `id*` (unique string), `name*`, `version`, `specVersion` (`"latest"` or a release id from `_data/releases.yml`), `author`, `repository`, `documentation`, `description`, `entries*` (`[{id*, title, path*}]`, `path` = URL path from the extension site origin, e.g. `/vp-example.html`), `references` (core spec page paths as listed in `pages.json`, used by the extension's landing page), `relations` (`[{type: extends|refines|references|recommends, target}]`). Fragment contract: pages must be just-the-docs pages (theme pinned to the same version as the core site, as in the template's Gemfile); the `<main>` element is what gets embedded; do not rely on inline `<script>`/`<style>` — they are stripped; relative links are rewritten to the extension's origin.
7. **JSON data model & cross-references** — extension viewpoint pages are generated from the extension's own `src/_data/viewpoints.json` (+ `mdexamples.json`/`rhyexamples.json`/`eaexamples.json`) exactly like core pages (wrapper page + `{% include viewpoint.md %}`). Core items are referenced **by their core IDs** in the extension's JSON (stakeholders, concerns, exposed concepts, `RequiredVP`/`RecommendedVP`); the template resolves each lookup local-first and falls back to the vendored core snapshot in `src/_data/core/`, rendering core items as links to `spec_baseurl` (e.g. `https://saf.gfse.org/userdoc/stakeholders.html#<ID>`). Retargeting to another spec release = re-copy the 8 snapshot files from that release + set `spec_baseurl` (both must come from the **same** release — page paths differ between releases, e.g. the TdSE2025 release serves its security viewpoints under `userdoc/Functional Domain/` while main serves them under `userdoc/Conceptual Domain/`; the snapshot data's `Domain` fields drive the rendered core links).
8. **Creating an extension site** — copy the `extension-template/` directory of this repository (GfSE/SAF-Specification) into a new GitHub repository; set `url`/`title`/`repository`/`spec_baseurl` in its `_config.yml`; fill in `src/saf-extension.json`; add viewpoint records to the local JSON files + one wrapper page per viewpoint (see the template README); deploy with the included Pages workflow. The landing page embeds the referenced core spec pages; to target a released spec, set `data-spec-base="https://saf.gfse.org/version/<release>"` in its script tag. Reference implementation: the `extension-security/` directory of this repository (the five core security viewpoints as an extension).
9. **Notes** — extension pages are not part of the core site's search index; the SAF grid table is not extended (entries appear in the sidebar only); hosting outside GitHub Pages requires the manifest and pages to be served with `Access-Control-Allow-Origin: *`.

Edit `src/index.md` — after the `# Tool Implementations` section, before `# References`, add:

```markdown
# Extensions
SAF is designed to be extended by independent parties. Anyone can publish an extension repository with complementary viewpoints and content that references the core specification, and selectively load such extensions on this site via the **Extensions** menu in the header. See [Extensions](./userdoc/extensions.md) for details, the manifest format, and the extension template.
```

### Step 5 — Extension template (independent)

New directory `extension-template/` at repo root: a complete, standalone Jekyll site that an extension author copies into their own GitHub repository. It contains the full machinery — theme, workflow, SDK wiring, and the **viewpoint generation mechanism** (the same data-driven `viewpoint.md` include the core uses, extended for cross-references) — but the extension's own data files are left unpopulated (empty arrays). The core data snapshot is pre-populated with the current core's files, so cross-reference resolution works out of the box.

Background (verified): core viewpoint pages are thin wrappers — front matter (`title`, `parent`, `layout: default`, `nav_order`) + `{% include viewpoint.md %}` — and `src/_includes/viewpoint.md` renders everything by joining `site.data.viewpoints` (self, matched by `Name == page.title`), `site.data.mdexamples`/`rhyexamples`/`eaexamples` (by `ExampleForVPID`), `stakeholders`/`concerns` (by ID), `exposes` (by `Viewpoint.Name`) → `realizeconcept`/`scmstereotypes`/`stereotypes`/`special-implementations` (by ID), and links to related viewpoints (by `RequiredVP`/`RecommendedVP` IDs) plus anchor pages (`domains.html#…`, `aspects.html#…`, `maturity.html#…`, `stakeholders.html#ID`, `concerns.html#ID`, `stereotypes.html#ID`). Example diagram srcs are `../../diagrams/{{ File }}` relative to `/diagrams/`; the maturity badge is `../../assets/images/maturity-{{ Maturity | replace: " ", "-" }}.svg`.

Files:

- `_config.yml`:
  ```yaml
  title: My SAF Extension
  description: Example extension for the System Architecture Framework (saf.gfse.org)
  theme: just-the-docs
  source: src
  # Set this to your deployment URL, e.g. https://<owner>.github.io/<repo>
  url: https://<owner>.github.io/<repo>
  repository: <owner>/<repo>
  # Base URL of the SAF core spec this extension targets.
  # Latest main: https://saf.gfse.org ; a release: https://saf.gfse.org/version/<release>
  spec_baseurl: https://saf.gfse.org
  plugins:
    - jekyll-relative-links
    - "jekyll-github-metadata"
  relative_links:
    enabled: true
  ```
- `src/_includes/viewpoint.md` — a **resolved copy** of the core's `src/_includes/viewpoint.md` (start from the core file, change only the resolution rules below; keep every other expression verbatim). Resolution rules, per section of the template:
  | Template section | Data lookup | Link rendering |
  |---|---|---|
  | Self (`vp` from `page.title`) | local `site.data.viewpoints`, else `site.data.core.viewpoints` | — (guard: if neither found, render `<p>No viewpoint data found for "{{ page.title }}" — check the local `_data/viewpoints.json` and the core snapshot.</p>` and stop) |
  | Examples (`mdexamples`/`rhyexamples`/`eaexamples` by `ExampleForVPID`) | **local only** | diagram src stays `../../diagrams/{{ File }}` (extension's own `/diagrams/` dir) |
  | Domain link | — (domains are always core items) | `{{ site.spec_baseurl }}/userdoc/domains.html#{{ vp.Domain \| downcase }}-domain` |
  | Aspect link | — | `{{ site.spec_baseurl }}/userdoc/aspects.html#{{ vp.Aspect \| downcase \| replace: " ","-" \| replace: "&",""}}-aspect` |
  | Maturity link | — | `{{ site.spec_baseurl }}/userdoc/maturity.html#{{ vp.Maturity }}`; maturity **image** stays local (`../../assets/images/…`, the template ships the SVGs) |
  | Stakeholders (by ID) | local `site.data.stakeholders`, else `site.data.core.stakeholders` | local → `../stakeholders.html#{{ id }}`; core → `{{ site.spec_baseurl }}/userdoc/stakeholders.html#{{ id }}` |
  | Concern (by ID) | local `site.data.concerns`, else `site.data.core.concerns` | local → `../concerns.html#{{ id }}`; core → `{{ site.spec_baseurl }}/userdoc/concerns.html#{{ id }}` |
  | Profile Model Reference (`exposes` by `Viewpoint.Name`, then `realizeconcept` by `RealizedConcept.ID`, display text via `scmstereotypes`/`stereotypes`/`special-implementations` by ID) | each lookup local first, else the same table under `site.data.core.*` | stereotype link always core: `{{ site.spec_baseurl }}/userdoc/stereotypes.html#{{ real.ID }}` |
  | Required / Recommended Viewpoints (by ID) | local `site.data.viewpoints`, else `site.data.core.viewpoints` | local → `../{{ vp.Domain }} Domain/{{ vp.Name }}.html` (unchanged); core → `{{ site.spec_baseurl }}/userdoc/{{ vp.Domain }} Domain/{{ vp.Name }}.html` |

  Local-first lookup idiom (Jekyll `where` on a missing nested data file fails, so the local file must always exist — the template ships it as `[]`):
  ```liquid
  {% assign stk = site.data.stakeholders | where: "ID", stk_id %}
  {% assign core_ref = false %}
  {% if stk.size == 0 %}
    {% assign stk = site.data.core.stakeholders | where: "ID", stk_id %}
    {% assign core_ref = true %}
  {% endif %}
  …
  <li><a href="{% if core_ref %}{{ site.spec_baseurl }}/userdoc/stakeholders.html{% else %}../stakeholders.html{% endif %}#{{ stk_id }}">{{ stk.first.Name }}</a></li>
  ```
  (Same pattern for concerns, viewpoints, exposes, realizeconcept, and the three stereotype tables — set `core_ref` per lookup; for the related-viewpoint links use the per-item `core_ref` to choose between the relative and the `spec_baseurl` href. Related-viewpoint lookups keep the core's `where: "ID", …` — the `RequiredVP`/`RecommendedVP` arrays contain viewpoint `ID` values, not `VP_ID`s (verified in `src/_data/viewpoints.json`, which carries both keys).)
  One deliberate deviation from the core file: add `{% assign basePath = site.baseurl %}` as the first line. The core template relies on `basePath` being *undefined* (renders empty — the core serves all plugin JS from the site root even on version pages); the extension serves its own site, so `site.baseurl` is the correct value (empty at the root, `/repo` on a GitHub project site without a custom domain).
- `src/_data/` — **local data tables, one `[]` file per table the resolved `viewpoint.md` looks up**: `viewpoints.json`, `mdexamples.json`, `rhyexamples.json`, `eaexamples.json`, `stakeholders.json`, `concerns.json`, `exposes.json`, `realizeconcept.json`, `stereotypes.json`, `scmstereotypes.json`, `special-implementations.json` (11 files) — all `[]` (unpopulated). The local file must exist for every looked-up table, because a missing `site.data.<table>` makes the local-first lookup silently skip the core fallback. (No local `domains`/`aspects`/`concepts` files: the template never data-looks-up those tables — domain/aspect links render from the viewpoint record's own `Domain`/`Aspect` strings.) `File` paths in example rows are relative to the extension's `/diagrams/`.
- `src/assets/js/examplegallery.js` — copied verbatim from the core's `src/assets/js/examplegallery.js` (the resolved `viewpoint.md` references it; the extension's own pages run it natively — it is stripped only when the page is embedded elsewhere).
- `src/_data/core/` — **vendored core snapshot**, pre-populated by copying these 8 files verbatim from the core repo's `src/_data/` (current main) — exactly the tables the resolved `viewpoint.md` falls back to: `viewpoints.json`, `stakeholders.json`, `concerns.json`, `exposes.json`, `realizeconcept.json`, `stereotypes.json`, `scmstereotypes.json`, `special-implementations.json`. (The core's `domains`/`aspects`/`domaincolors`/`concepts` tables are not data-looked-up by the template, so they are not snapshotted.) Plus `src/_data/core/README.md`: one paragraph — these files are a snapshot of the core spec data at the version named in `spec_baseurl`/`specVersion`; when retargeting the extension to another spec release, re-copy these 8 files from that release branch/tag of GfSE/SAF-Specification; they are read-only inputs, never edited.
- `src/assets/images/maturity-proposed.svg`, `maturity-released.svg`, `maturity-under-construction.svg` — copied verbatim from the core's `src/assets/images/` (needed by the maturity badge; the extension ships its own copies so the relative src works).
- `Gemfile`: copy of the core's (`jekyll ~> 4.4.1`, `just-the-docs` unpinned as in core, `jekyll-relative-links`, `jekyll-github-metadata`, `jekyll-sass-converter ~> 3.1`).
- `src/index.md` — front matter `title: My SAF Extension`, `layout: default`, `nav_order: 1`; body: a `## About this extension` placeholder paragraph (instructions to replace), then:
  ```html
  ## Referenced SAF specification pages
  <div id="saf-spec-embed">
    <div id="saf-spec-embed-list"></div>
    <div id="saf-spec-embed-content"></div>
  </div>
  <script src="https://saf.gfse.org/assets/js/saf-embed/r1/saf-embed.js"
    data-spec-base="https://saf.gfse.org"
    data-refs="/userdoc/Conceptual Domain/System Context Definition Viewpoint.html,/userdoc/Conceptual Domain/System Context Interaction Viewpoint.html"></script>
  ```
- `src/vp-example.md` — front matter `title: Example Viewpoint`, `layout: default`, `nav_order: 10`; body: placeholder explaining this is a sample extension page demonstrating the fragment contract.
- `src/saf-extension.json` — sample manifest:
  ```json
  {
    "id": "example.my-extension",
    "name": "My SAF Extension",
    "version": "0.1.0",
    "specVersion": "latest",
    "author": "Example Author",
    "repository": "https://github.com/example/my-extension",
    "documentation": "https://example.github.io/my-extension/",
    "description": "Example extension for the System Architecture Framework.",
    "entries": [
      {"id": "overview", "title": "Overview", "path": "/"},
      {"id": "vp-example", "title": "Example Viewpoint", "path": "/vp-example.html"}
    ],
    "references": [
      "/userdoc/Conceptual Domain/System Context Definition Viewpoint.html",
      "/userdoc/Conceptual Domain/System Context Interaction Viewpoint.html"
    ],
    "relations": [
      {"type": "extends", "target": "SAF core specification"},
      {"type": "references", "target": "/userdoc/Conceptual Domain/System Context Definition Viewpoint.html"}
    ]
  }
  ```
- `.github/workflows/pages.yml` — simplified copy of the core workflow: triggers `push` on `main` + `workflow_dispatch`; same Ruby/bundler setup; Configure step always `baseurl: ""`; build `bundle exec jekyll build --destination build`; deploy `JamesIves/github-pages-deploy-action@v4.4.3` to `gh-pages`, `force: false`, no `target-folder`.
- `README.md` — authoring guide: copy this directory to a new repo (delete this file's instructions as you go); set `_config.yml` values including `spec_baseurl` (which core spec release the extension targets); fill `src/saf-extension.json` (`id` must be unique, `entries[].path` are paths from the site origin — include a baseurl prefix if you deploy under a subpath); **adding viewpoints**: append the viewpoint record to `src/_data/viewpoints.json`, add example rows to `src/_data/mdexamples.json` (SVGs under `src/diagrams/`), then add one wrapper page per viewpoint:
  ```markdown
  ---
  title: My Viewpoint
  parent: My Domain
  layout: default
  nav_order: 10
  ---
  {% include viewpoint.md %}
  ```
  (`title` must equal the viewpoint `Name`; the include resolves it from `page.title`); cross-referencing core items requires no extra work — reference them by their core IDs in your JSON (stakeholders, concerns, exposed concepts, `RequiredVP`/`RecommendedVP`) and links render to `spec_baseurl` automatically (see `_data/core/README.md` for retargeting); the landing page's script tag lists which core pages your extension references (`data-refs`, comma-separated paths from the core `pages.json`) and which spec release it targets (`data-spec-base`); deploy; how the core site shows your extension and the provenance banner.

### Step 6 — First validation: `extension-security/` (depends on Step 5)

New directory `extension-security/` at repo root: the template populated with the five core Security (C7) viewpoints, proving the mechanism end-to-end. All content is **extracted from the core repo** (no new content authored; core stays unchanged).

Build it from `extension-template/` (copy the directory), then populate:

1. `_config.yml`: `title: SAF Security Extension`; `description: Security viewpoints for the System Architecture Framework (validation extension)`; `spec_baseurl: https://saf.gfse.org`.
2. `src/_data/viewpoints.json` — the five C7 records extracted from the core's `src/_data/viewpoints.json`:
   `python3 -c "import json; d=json.load(open('src/_data/viewpoints.json')); json.dump([v for v in d if v['VP_ID'].startswith('C7')], open('extension-security/src/_data/viewpoints.json','w'), indent=1)"`
   (yields `C7_ASID`, `C7_IMAN`, `C7_SECT`, `C7_RIAN`, `C7_THSC` — 5 entries).
3. `src/_data/mdexamples.json` — the C7 example rows from the core's `src/_data/mdexamples.json`:
   `python3 -c "import json; d=json.load(open('src/_data/mdexamples.json')); json.dump([x for x in d if x['ExampleForVPID'].startswith('C7')], open('extension-security/src/_data/mdexamples.json','w'), indent=1)"`
   (yields 7 rows; `rhyexamples.json`/`eaexamples.json` stay `[]`).
4. `src/diagrams/examples_md/` — copy the 7 SVG files named by the extracted rows' `File` fields (e.g. `examples_md/exa_2024x_4c5019a_1724845803763_752788_524.svg`) from the core's `src/diagrams/examples_md/` into `extension-security/src/diagrams/examples_md/`.
5. Five wrapper pages under `extension-security/src/userdoc/Conceptual Domain/`, one per C7 viewpoint, `title` = viewpoint Name, `parent: Conceptual Domain`, `layout: default`, `nav_order: 2`–`6` (landing page keeps `nav_order: 1`; do not collide with it) — Asset Identification (2), Impact Analysis (3), Security Context (4), Security Risk Analysis (5), Threat Szenario (6) — body exactly `{% include viewpoint.md %}`.
6. `src/index.md` — landing page: `## About this extension` paragraph (this extension demonstrates the SAF extension mechanism with the five security viewpoints; content duplicated from the core for validation); keep the `#saf-spec-embed` block + SDK script tag with `data-refs="/userdoc/Conceptual Domain/System Context Definition Viewpoint.html,/userdoc/Conceptual Domain/System Use Case Viewpoint.html"` (two core conceptual-domain pages as reference targets — C7 has no `RequiredVP`/`RecommendedVP` cross-refs, so no JSON-derived page set exists).
7. `src/saf-extension.json` — manifest: `id: "gfse.saf-security"`, `name: "SAF Security Extension"`, `version: "0.1.0"`, `specVersion: "latest"`, `author: "GfSE SAF Working Group"`, `repository: "https://github.com/GfSE/SAF-Specification/tree/main/extension-security"`, `documentation` = the placeholder deployment URL, `description: "Security viewpoints for SAF — first validation of the extension mechanism."`, `entries`: `overview` (`/`) + the 5 viewpoint pages (`/userdoc/Conceptual Domain/<Name> Viewpoint.html`), `references`: the two `data-refs` pages, `relations`: `{"type": "extends", "target": "SAF core specification"}` + one `references` per `data-refs` page.
8. `.github/workflows/pages.yml`, `Gemfile`, `src/_data/core/`, `src/assets/images/maturity-*.svg`, `src/_includes/viewpoint.md` — inherited from the template unchanged (the snapshot already covers all C7 cross-referenced items).

Expected rendered cross-links on the extension's C7 pages (verification target): Stakeholder/Concern items → `https://saf.gfse.org/userdoc/stakeholders.html#<ID>` / `…/concerns.html#<ID>`; Profile Model Reference items → `https://saf.gfse.org/userdoc/stereotypes.html#<ID>`; Domain/Aspect/Maturity links → `https://saf.gfse.org/userdoc/{domains,aspects,maturity}.html#…`; example gallery → local `/diagrams/examples_md/…` SVGs; Related Viewpoints sections empty (C7 has none).

Only two existing files are modified in total: `src/_includes/header_custom.html` (add 3 lines) and `src/index.md` (add one section). Everything else is new files.

## Critical files & anchors

- `src/_includes/header_custom.html` — injection point: `basePath` + `cacheBuster` already computed here; the version-menu `<div id="plugin-version-menu" class="site-footer">` and its script tags show the exact pattern the new settings menu follows.
- `src/assets/js/plugin_versions_menu.js` — model for the header dropdown UI (chevron data-URIs, inline styles, click-outside close) and for the PUBLIC CONTRACT comment style that `saf-embed.js` must carry.
- `src/assets/js/stereotypes_filter.js` — vanilla-JS conventions for site custom scripts.
- `src/_data/releases.yml` — the set of valid `specVersion` values (`latest` + branch names) used by the compatibility check.
- Live DOM (verified on saf.gfse.org, 2026-10-31): nav = `<nav id="site-nav" class="site-nav"><ul class="nav-list">…`; content = `<div id="main-content" class="main-content"><main>…</main></div>`; header flex bar ends with the version menu div and the GfSE logo div. These are the injection points for the sidebar section and the fragment.

## Verification

Prerequisites: Ruby 3.x + bundler (repo has `.devcontainer/` if no local Ruby), python3. Work from `SAF-Specification/`.

1. **Core build**: `bundle install && bundle exec jekyll build --destination tmp/build-core`. Check: `tmp/build-core/assets/json/pages.json` exists, parses as JSON, and contains an entry with `url` `/userdoc/Conceptual Domain/System Context Definition Viewpoint.html`.
2. **Template build**: `cd extension-template && bundle exec jekyll build --destination ../tmp/build-ext`. Check: `../tmp/build-ext/saf-extension.json`, `index.html`, `vp-example.html` all exist.
3. **Security extension build**: `cd extension-security && bundle exec jekyll build --destination ../tmp/build-sec`. Checks (all on the unmodified build output):
   - `../tmp/build-sec/saf-extension.json` exists and has 6 `entries`; all five pages `../tmp/build-sec/userdoc/Conceptual Domain/{Asset Identification,Impact Analysis,Security Context,Security Risk Analysis,Threat Szenario} Viewpoint.html` exist.
   - `Security Context Viewpoint.html` contains the JSON-level cross-links to core: at least one `href="https://saf.gfse.org/userdoc/stakeholders.html#` and one `href="https://saf.gfse.org/userdoc/concerns.html#` link, at least one `href="https://saf.gfse.org/userdoc/stereotypes.html#` link, a `href="https://saf.gfse.org/userdoc/domains.html#conceptual-domain"` link, and a local `src="../../assets/images/maturity-proposed.svg"`; its Example section references the local diagram `diagrams/examples_md/exa_2024x_4c5019a_1725563964505_357247_43.svg` (the C7_SECT example) and that SVG file exists at `../tmp/build-sec/diagrams/examples_md/`.
4. **CORS servers** (throwaway script `tmp/cors_server.py`, never committed):
   ```python
   #!/usr/bin/env python3
   import http.server, functools, sys
   class H(http.server.SimpleHTTPRequestHandler):
       def end_headers(self):
           self.send_header("Access-Control-Allow-Origin", "*")
           super().end_headers()
   port = int(sys.argv[1]); root = sys.argv[2]
   httpd = http.server.ThreadingHTTPServer(("", port), functools.partial(H, directory=root))
   httpd.serve_forever()
   ```
   Run in background: `python3 tmp/cors_server.py 4100 tmp/build-core`, `python3 tmp/cors_server.py 4101 tmp/build-ext`, `python3 tmp/cors_server.py 4102 tmp/build-sec`.
5. **Point the extension builds at the local core** (build artifacts only, never the source): in every `*.html` under `tmp/build-ext/` and `tmp/build-sec/`, replace `https://saf.gfse.org` with `http://localhost:4100` (SDK script `src`, `data-spec-base`, and — in the security build — the C7 cross-links, so they resolve locally).
6. **Core-side browser checks** (open `http://localhost:4100/` with the browser tool) — primary test with the security extension:
   - Header shows an `Extensions` button next to the version menu; clicking opens a dropdown with the empty state and the Add form.
   - Add `http://localhost:4102/saf-extension.json` → dropdown closes; sidebar gains an `Extensions` section with `SAF Security Extension · Overview` plus the five viewpoint entries.
   - Click `Security Context Viewpoint` → main area shows the generated page (title line `C7_SECT Security Context Viewpoint`, Domain/Aspect/Maturity table, Purpose/Applicability/Presentation, Example gallery with the C7_SECT SVG, Stakeholder/Concern lists) under the provenance banner: `External extension content — SAF Security Extension 0.1.0 by GfSE SAF Working Group` with `Repository`/`Manifest`/`Back to SAF` links and a `References:` line; URL contains `?ext=…&page=<the C7_SECT entry id>`.
   - **Fragment sanitization** (browser console on the mounted page): `document.querySelector('#main-content main script') === null` (the extension page's inline `images` script and `examplegallery.js` tag are stripped — gallery shows the first example statically), and `document.querySelector('#main-content main h2[id]')?.id` starts with `saf-ext-` (ID namespacing).
   - The page's stakeholder links resolve locally (after step 5 rewrite) and load `localhost:4100/userdoc/stakeholders.html#…`.
   - Reload the deep-link URL → content auto-mounts (deep link without prior interaction).
   - Persistence: reload plain `/` → extension still listed and enabled; uncheck it → reload → sidebar section gone; `Reset` → empty state.
   - Error path: Add `http://localhost:4102/nope.json` → inline error in dropdown, nothing saved, no JS crash (console clean).
   - Template smoke: Add `http://localhost:4101/saf-extension.json` → `My SAF Extension · Example Viewpoint` appears; click it → placeholder content + banner `My SAF Extension 0.1.0 by Example Author`.
7. **Extension-side browser check**: open `http://localhost:4102/` — the `Referenced SAF specification pages` list shows the two core pages with titles (from `pages.json`); clicking one renders the core page fragment below the list. Open `http://localhost:4101/` — same behavior with its two reference pages.
8. **Compatibility warning**: edit `tmp/build-sec/saf-extension.json` (build artifact), set `"specVersion": "TdSE2025"`, reload the deep link from 6 → banner shows the `⚠ Built for SAF TdSE2025; this site is SAF latest` line.
9. **Cleanup**: kill all three servers; delete `tmp/` entirely. Do not commit `tmp/`, `build/`, or `_site/`.

## Assumptions & contingencies

- The core spec is **not modified** by this change. `extension-security/` duplicates the five C7 viewpoints into an extension for validation; actually removing them from the core (core JSON cleanup, grid, cross-links) is a follow-up change once the mechanism is proven. If the user wants removal included, it becomes a separate plan step — do not start it during this implementation.
- GitHub Pages sends `Access-Control-Allow-Origin: *` on all assets (verified on saf.gfse.org on 2026-10-31). Extension hosts outside GitHub Pages must do the same; if not, features degrade to visible error banners (verification step 6 error path), never page breakage.
- The template ships as an in-repo directory (`extension-template/`), not as a separate GitHub repository — creating a new repo is out of scope for this change. The template README covers the copy-to-new-repo flow.
- Deep links carry the full manifest URL, so they are self-sufficient; unknown/broken manifests in deep links show the error banner and are never auto-saved to localStorage (saving happens only via the settings menu).
- If a fetched extension page has no `<main>` element (non-JTD page), `extractFragment` falls back to `<body>` with identical sanitization; the documented contract remains "just-the-docs pages".
- Theme version drift between core and an extension (both use unpinned `just-the-docs`) can cause minor style differences in embedded fragments; accepted, not mitigated.
- If `nav#site-nav > ul.nav-list` is absent on a page (defensive), `mountExtensionNav` returns silently — no nav injection, deep-link mounting still works.
- Deep links generated on a `/version/<x>/` page point at the site root (`/?ext=…`), because the SDK's JS `basePath` is always `""` (the core serves all plugin JS from the root; verified in `header_custom.html`/`site_constants.js`). Extension content is version-independent, so the only effect is losing the host page's version context; the `specVersion` warning is then computed against `latest`. Accepted.
- The extension landing page loads the SDK from the saf.gfse.org root without a cache-busting query, so browsers may serve a cached `saf-embed.js`. Additive changes are safe by the r1 contract; breaking changes go to a new revision directory, never an edit of `r1` (same pattern as `plugin_versions_menu.js`).
- Embedded pages lose their interactive example gallery (scripts stripped by sanitization): the first example renders statically, filter/prev-next controls are inert. Documented in `extensions.md` §5; a v2 could re-drive the gallery from the host's own `examplegallery.js` without executing extension code.
