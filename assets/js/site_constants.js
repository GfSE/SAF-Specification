
const basePath = '';

// Public contract for the root-served plugin scripts (see plugin_versions_menu.js): released
// pages under /version/<x>/ load this file from the site root, so `basePath` and `releases`
// must keep their names and shapes; additions are fine.
// release menu entries; curated in _data/releases.yml, order = menu order
const releases = [{"id":"latest","label":"main"},{"id":"PreRefactor2026"},{"id":"TdSE2025"},{"id":"TdSE2024"},{"id":"TdSE2023","url":"https://github.com/GfSE/SAF-Specification/tree/TdSE2023/README.md","note":"Opens the release branch on GitHub"},{"id":"TdSE2022","url":"https://github.com/GfSE/SAF-Specification/tree/TdSE2022/README.md","note":"Opens the release branch on GitHub"},{"id":"Initial-Release","url":"https://github.com/GfSE/SAF-Specification/tree/Initial-Release/README.md","note":"Opens the release branch on GitHub"}];

