//
// Filter for the stereotypes table on userdoc/stereotypes.html:
// category checkboxes (one per data-cat row group) and an incremental
// text filter that narrows the visible rows on every keystroke.
// The table is identified by id "stereotypes-table"; on pages without
// it, the script does nothing.
document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("stereotypes-table");
    const search = document.getElementById("stereotypes-search");
    if (!table || !search) {
        return;
    }
    const rows = Array.from(table.querySelectorAll("tr[data-cat]"));
    const checks = Array.from(document.querySelectorAll(".stereo-cat-check"));

    function apply() {
        const active = new Set(checks.filter((c) => c.checked).map((c) => c.value));
        const q = search.value.trim().toLowerCase();
        for (const row of rows) {
            const catVisible = active.has(row.dataset.cat);
            const textVisible = q === "" || row.textContent.toLowerCase().includes(q);
            row.style.display = catVisible && textVisible ? "" : "none";
        }
    }

    checks.forEach((c) => c.addEventListener("change", apply));
    search.addEventListener("input", apply);
});
