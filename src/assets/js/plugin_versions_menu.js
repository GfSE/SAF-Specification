// source from https://github.com/vagrant-libvirt/vagrant-libvirt/blob/main/docs/assets/js/plugin_versions_menu.js#L214
//
// Menu entries come from _data/releases.yml, rendered into site_constants.js at build time.
//
// PUBLIC CONTRACT: released pages under /version/<x>/ load this file from the site root, so the
// contract with the page markup must stay backwards compatible:
//   - a <div id="plugin-version-menu"> element exists,
//   - site_constants.js defines `basePath` (string) and `releases` (array of menu entries).
// Additive changes are safe. Renaming or removing any of these, or requiring new markup, is a
// breaking change: leave this path untouched for the already-released pages and add a new
// revision directory (e.g. /assets/js/menu/r2/) referenced from _includes/header_custom.html.

// main function; the menu markup and the site constants are already in place when this runs
function handleVersionedDocs(basePath, releases) {
    menuBackgroundImageClosed = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='15 6 9 12 15 18'%3E%3C/polyline%3E%3C/svg%3E\")";
    menuBackgroundImageOpen = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")";

    function loadOptions(menu, dropdown) {
        const options = Array.isArray(releases) && releases.length > 0
            ? releases
            : [{ id: 'latest', label: 'latest' }];

        let currentPage = '';
        let currentId = 'latest';
        const versionPath = `${basePath}/version/`;
        const path = window.location.pathname;
        if (path.startsWith(versionPath)) {
            const start = versionPath.length;
            const end = path.indexOf('/', start + 1);
            currentId = path.substring(start, end < 0 ? path.length : end);
            currentPage = path.substring(end < 0 ? path.length : end);
        } else {
            currentPage = path.substring(basePath.length);
        }
        const current = options.find(item => item.id === currentId);
        menu.innerHTML = `Branch: ${current ? (current.label || current.id) : currentId}`;
        menu.appendChild(dropdown);

        options.forEach(item => {
            const link = document.createElement('a');
            const wrapper = document.createElement('div');
            if (item.url) {
                link.href = item.url;
            } else if (item.id === 'latest') {
                link.href = basePath + currentPage;
            } else {
                link.href = versionPath + item.id + currentPage;
            }
            link.innerHTML = item.label || item.id;
            if (item.note) {
                link.title = item.note;
            }
            link.className = 'plugin-version-menu-option';
            link.style.cssText = `
            width: 100%;
            padding: 0.5rem 2rem 0.5rem 1rem;
            display: block;
            `;
            wrapper.style.cssText = `
            width: 100%;
            height: 100%;
            display: block;
            backdrop-filter: brightness(0.85);
            `;

            wrapper.addEventListener('mouseover', function(e) { brightenMenuOption(e.target); });
            wrapper.addEventListener('mouseout', function(e) { restoreMenuOption(e.target); });

            if (item.id === currentId) {
                link.style.fontWeight = 'bold';
            }

            wrapper.appendChild(link);
            dropdown.appendChild(wrapper);
        });
    };

    function brightenMenuOption(option) {
        option.style.backdropFilter = 'brightness(1.1)';
        // possible alternatives
        //option.style.boxShadow = 'inset 0 0 0 10em rgba(255, 255, 255, 0.6)';
        //option.style.backgroundColor = 'rgba(255,255,255,0.5)';
    }

    function restoreMenuOption(option) {
        option.style.backdropFilter = 'brightness(0.9)';
        //option.style.boxShadow = 'none';
        //option.style.backgroundColor = 'transparent';
    }

    // get main menu element and style as needed
    menuElement = document.getElementById("plugin-version-menu");
    menuElement.style.backgroundImage = menuBackgroundImageOpen; // preload open image so no delay in rendering
    menuElement.className = 'plugin-version-menu-background-fonts-style';
    menuElement.style.cssText = `
      position: relative;
      width: 180px;
      border: 1px solit transparent;
      padding: 1rem 1rem;
      background-image: ${menuBackgroundImageClosed};
      background-repeat: no-repeat;
      background-position: 90% 40%;
      cursor: pointer;
    `;

    dropdown = document.createElement('div');
    dropdown.id = "plugin-version-dropdown";
    dropdown.className = 'plugin-version-menu-background-fonts-style';
    dropdown.style.cssText = `
      position: relative;
      top: 0.25rem;
      left: -0.25rem;
      min-width: 150px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);
      padding: 0;
      z-index: 1;
    `;

    function showMenu() {
        dropdown.style.display = 'block';
        menuElement.style.backgroundImage = menuBackgroundImageOpen;
    }

    function hideMenu() {
        dropdown.style.display = 'none';
        menuElement.style.backgroundImage = menuBackgroundImageClosed;
    }

    function toggleMenu() {
        if (dropdown.style.display == 'none') {
            showMenu();
        } else {
            hideMenu();
        }
    }

    function toggleMenuDisplay(e) {
        if (dropdown.contains(e.target)) {
            return;
        }

        if (menuElement.contains(e.target)) {
            toggleMenu();
        }
    }

    // ensure initial style of drop down menu is set
    toggleMenu();

    // populate menu with available options and current version
    loadOptions(menuElement, dropdown);
    menuElement.addEventListener('click', toggleMenuDisplay)
    window.addEventListener('click', function(e){
        if (!menuElement.contains(e.target)){
            // Clicked outside the drop down menu
            hideMenu();
        }
    });
}

handleVersionedDocs(basePath, releases);
