 (function() {
   'use strict';
 
   const STORAGE_KEY_PREFIX = 'saf_annotations_';
   const USERNAME_STORAGE_KEY = 'saf_annotations_username';
   const FILTER_STORAGE_KEY = 'saf_annotations_filter';
   
   const COLORS = {
     yellow: '#FFF59D',
     blue: '#90CAF9',
     green: '#A5D6A7',
     red: '#EF9A9A',
     purple: '#CE93D8'
   };
 
   let createModeEnabled = false;
   let annotationsDisplayed = false;
   let annotations = [];
   let activeAnnotation = null;
   let isDragging = false;
   let dragOffset = { x: 0, y: 0 };
   
    let currentUsername = null;
    let userFilter = null;  // null = show all, 'me' = show only mine, array of usernames = show specific users

    function getPageAnnotationKeys() {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(STORAGE_KEY_PREFIX) && 
            key !== USERNAME_STORAGE_KEY && 
            key !== FILTER_STORAGE_KEY) {
          keys.push(key);
        }
      }
      return keys;
    }

  function log(msg, obj) {
    if (obj !== undefined) {
      console.log('[Annotations] ' + msg, obj);
    } else {
      console.log('[Annotations] ' + msg);
    }
  }

  function getPageId() {
    let path = window.location.pathname;
    try {
      path = decodeURIComponent(path);
    } catch (e) {
    }
    
    path = path.toLowerCase();
    
    if (path.endsWith('/')) {
      path += 'index.html';
    }
    
    const pageId = path.replace(/[^a-zA-Z0-9_-]/g, '_');
    log('pageId: ' + pageId + ' (from path: ' + path + ')');
    return pageId;
  }

  function getStorageKey() {
    return STORAGE_KEY_PREFIX + getPageId();
  }

  function loadAnnotations() {
    try {
      const key = getStorageKey();
      const data = localStorage.getItem(key);
      if (data) {
        const parsed = JSON.parse(data);
        log('Loaded ' + parsed.length + ' annotation(s) from key: ' + key);
        return parsed;
      } else {
        log('No annotations found for key: ' + key);
      }
    } catch (e) {
      console.warn('[Annotations] Failed to load:', e);
    }
    return [];
  }

  function saveAnnotations() {
    try {
      const key = getStorageKey();
      localStorage.setItem(key, JSON.stringify(annotations));
      log('Saved ' + annotations.length + ' annotation(s) to key: ' + key);
    } catch (e) {
      console.warn('[Annotations] Failed to save:', e);
    }
  }

   function generateId() {
     return 'ann_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
   }

   function getCurrentUsername() {
     if (currentUsername) {
       return currentUsername;
     }
     
     try {
       const stored = localStorage.getItem(USERNAME_STORAGE_KEY);
       if (stored && stored.trim()) {
         currentUsername = stored.trim();
         return currentUsername;
       }
     } catch (e) {}
     
     return null;
   }

   function setCurrentUsername(username) {
     if (username && username.trim()) {
       username = username.trim();
       currentUsername = username;
       try {
         localStorage.setItem(USERNAME_STORAGE_KEY, username);
       } catch (e) {}
       log('Username set to: ' + username);
     } else {
       currentUsername = null;
       try {
         localStorage.removeItem(USERNAME_STORAGE_KEY);
       } catch (e) {}
       log('Username cleared');
     }
   }

   function promptForUsername() {
     const current = getCurrentUsername();
     const message = current ? 
       'Enter your username (current: ' + current + '):\n\n(This identifies your annotations when sharing with others)' :
       'Enter your username:\n\n(This identifies your annotations when sharing with others)';
     
     const result = prompt(message, current || '');
     if (result !== null) {
       setCurrentUsername(result);
       if (annotationsDisplayed) {
         renderAnnotations();
       }
     }
   }

   function getUserFilter() {
     if (userFilter !== null && userFilter !== undefined) {
       return userFilter;
     }
     
     try {
       const stored = localStorage.getItem(FILTER_STORAGE_KEY);
       if (stored) {
         if (stored === 'all') {
           userFilter = null;
         } else if (stored === 'me') {
           userFilter = 'me';
         } else {
           try {
             userFilter = JSON.parse(stored);
           } catch (e) {
             userFilter = null;
           }
         }
       }
     } catch (e) {
       userFilter = null;
     }
     
     return userFilter;
   }

   function setUserFilter(filter) {
     userFilter = filter;
     
     try {
       if (filter === null) {
         localStorage.setItem(FILTER_STORAGE_KEY, 'all');
       } else if (filter === 'me') {
         localStorage.setItem(FILTER_STORAGE_KEY, 'me');
       } else {
         localStorage.setItem(FILTER_STORAGE_KEY, JSON.stringify(filter));
       }
     } catch (e) {}
     
     log('User filter set to: ' + (filter === null ? 'all' : JSON.stringify(filter)));
     
     if (annotationsDisplayed) {
       renderAnnotations();
     }
   }

    function getUniqueUsernames() {
      const usernames = new Set();
      
      const keys = getPageAnnotationKeys();
      
      for (let k = 0; k < keys.length; k++) {
       try {
         const data = JSON.parse(localStorage.getItem(keys[k]));
         for (let i = 0; i < data.length; i++) {
           if (data[i].username) {
             usernames.add(data[i].username);
           }
         }
       } catch (e) {}
     }
     
     for (let i = 0; i < annotations.length; i++) {
       if (annotations[i].username) {
         usernames.add(annotations[i].username);
       }
     }
     
     return Array.from(usernames).sort();
   }

   function isAnnotationVisible(annotation) {
     const filter = getUserFilter();
     
     if (filter === null) {
       return true;
     }
     
     if (filter === 'me') {
       const myUsername = getCurrentUsername();
       if (!myUsername) {
         return !annotation.username;
       }
       return annotation.username === myUsername;
     }
     
     if (Array.isArray(filter)) {
       if (filter.length === 0) {
         return true;
       }
       return filter.indexOf(annotation.username) >= 0;
     }
     
     return true;
   }

   function getContentRoots() {
    const roots = [];
    const seenIds = new Set();
    
    const addRoot = (el) => {
      if (el && !seenIds.has(el)) {
        seenIds.add(el);
        roots.push(el);
      }
    };
    
    const mainContent = document.getElementById('main-content');
    if (mainContent) addRoot(mainContent);
    
    const main = document.querySelector('main');
    if (main) addRoot(main);
    
    const toc = document.getElementById('site-toc');
    if (toc) addRoot(toc);
    
    if (roots.length === 0) {
      roots.push(document.body);
    }
    
    return roots;
  }

  function isInContent(el) {
    const roots = getContentRoots();
    for (let i = 0; i < roots.length; i++) {
      if (roots[i].contains(el)) {
        return true;
      }
    }
    return false;
  }

  function generateElementPath(el) {
    if (!el) return null;
    
    let part = el.tagName.toLowerCase();
    
    if (el.id) {
      return '#' + el.id;
    }
    
    if (el.className && typeof el.className === 'string') {
      const classes = el.className.trim().split(/\s+/).filter(function(c) {
        return c && c.length > 0;
      }).slice(0, 2);
      
      if (classes.length > 0) {
        part += '.' + classes.join('.');
      }
    }
    
    return part;
  }

  function generateStableSelector(element) {
    if (element.id) {
      const sel = '#' + element.id;
      log('Selector (has ID): ' + sel);
      return sel;
    }

    const path = [];
    let el = element;
    const roots = getContentRoots();
    let depth = 0;
    
    while (el && el.nodeType === Node.ELEMENT_NODE && depth < 20) {
      let isRoot = false;
      
      for (let r = 0; r < roots.length; r++) {
        if (el === roots[r]) {
          isRoot = true;
          break;
        }
      }
      
      let part = el.tagName.toLowerCase();
      
      if (el.className && typeof el.className === 'string') {
        const classes = el.className.trim().split(/\s+/).filter(function(c) {
          return c && 
                 c.length > 0 && 
                 !c.startsWith('annotation-') && 
                 !c.startsWith('js-') &&
                 !c.startsWith('is-');
        }).slice(0, 2);
        
        if (classes.length > 0) {
          part += '.' + classes.join('.');
        }
      }
      
      const parent = el.parentNode;
      if (parent && parent.nodeType === Node.ELEMENT_NODE) {
        const siblings = [];
        const children = parent.children;
        for (let s = 0; s < children.length; s++) {
          const sib = children[s];
          if (sib.tagName === el.tagName) {
            if (sib.className === el.className) {
              siblings.push(sib);
            }
          }
        }
        
        if (siblings.length > 1) {
          const idx = siblings.indexOf(el) + 1;
          part += ':nth-of-type(' + idx + ')';
        }
      }
      
      if (isRoot) {
        path.unshift(part);
        break;
      }
      
      path.unshift(part);
      
      if (el.id) {
        path.unshift('#' + el.id);
        break;
      }
      
      if (el === document.body) {
        break;
      }
      
      el = parent;
      depth++;
    }
    
    const selector = path.join(' > ');
    log('Generated NEW selector: ' + selector + ' (path length=' + path.length + ')');
    return selector;
  }

  function findElementBySelector(selector) {
    try {
      const allMatches = document.querySelectorAll(selector);
      for (let i = 0; i < allMatches.length; i++) {
        if (isInContent(allMatches[i])) {
          log('findElementBySelector: found in content area: ' + selector);
          return allMatches[i];
        }
      }
      log('findElementBySelector: NO matches in content area for: ' + selector + ' (total matches=' + allMatches.length + ')');
      return null;
    } catch (e) {
      log('findElementBySelector failed: ' + selector + ', error: ' + e);
      return null;
    }
  }

  function getPageOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
      height: rect.height
    };
  }

   function createToggleButton() {
     const btn = document.createElement('button');
     btn.id = 'annotation-toggle';
     btn.className = 'annotation-toggle-btn';
     btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4L18.5 2.5z"/></svg>';
     btn.title = 'Toggle annotations create mode (click to toggle, right-click for export/import)';
     btn.onclick = toggleAnnotations;
     
     btn.addEventListener('contextmenu', function(e) {
       e.preventDefault();
       showContextMenu(e.clientX, e.clientY);
     });
     
     return btn;
   }

    function showContextMenu(x, y) {
      hideContextMenu();
      
      const menu = document.createElement('div');
      menu.id = 'annotation-context-menu';
      menu.className = 'annotation-context-menu';
      menu.style.left = x + 'px';
      menu.style.top = y + 'px';
      
      const currentUser = getCurrentUsername();
      const hasPageAnnotations = annotations.length > 0;
      
        const allKeys = getPageAnnotationKeys();
      let totalAnnotationsAllPages = 0;
      for (let k = 0; k < allKeys.length; k++) {
        try {
          const data = JSON.parse(localStorage.getItem(allKeys[k]));
          if (Array.isArray(data)) {
            totalAnnotationsAllPages += data.length;
          }
        } catch (e) {}
      }
      const hasAnyAnnotations = allKeys.length > 0;
       
       const uniqueUsers = getUniqueUsernames();
      const currentFilter = getUserFilter();
      
      let html = '';
      
      html += '<div class="annotation-context-menu-info">';
      if (currentUser) {
        html += 'User: <strong>' + escapeHtml(currentUser) + '</strong>';
      } else {
        html += 'User: <em>(not set)</em>';
      }
      html += '</div>';
      
      html += '<button class="annotation-context-menu-item" id="ann-set-username">';
      html += '👤 ' + (currentUser ? 'Change Username' : 'Set Username');
      html += '</button>';
      
      html += '<div class="annotation-context-menu-divider"></div>';
      
      html += '<div class="annotation-context-menu-info">Filter:</div>';
      
      html += '<button class="annotation-context-menu-item ' + (currentFilter === null ? 'annotation-filter-active' : '') + '" id="ann-filter-all">';
      html += '👁 Show All Annotations';
      html += '</button>';
      
      html += '<button class="annotation-context-menu-item ' + (currentFilter === 'me' ? 'annotation-filter-active' : '') + '" id="ann-filter-me" ' + (!currentUser ? 'disabled' : '') + '>';
      html += '👤 Show Only My Annotations';
      if (!currentUser) {
        html += ' <em style="opacity:0.6">(set username first)</em>';
      }
      html += '</button>';
      
      if (uniqueUsers.length > 0) {
        html += '<div class="annotation-context-menu-info">Users in storage:</div>';
        for (let i = 0; i < uniqueUsers.length; i++) {
          const u = uniqueUsers[i];
          const isActiveFilter = Array.isArray(currentFilter) && currentFilter.length === 1 && currentFilter[0] === u;
          html += '<button class="annotation-context-menu-item ' + (isActiveFilter ? 'annotation-filter-active' : '') + '" id="ann-filter-user-' + i + '">';
          html += '👤 Show Only: ' + escapeHtml(u);
          html += '</button>';
        }
      }
      
      html += '<div class="annotation-context-menu-divider"></div>';
      
      html += '<button class="annotation-context-menu-item" id="ann-export-page" ' + (!hasPageAnnotations ? 'disabled' : '') + '>';
      html += '📄 Export This Page (' + annotations.length + ')';
      html += '</button>';
      
       html += '<button class="annotation-context-menu-item" id="ann-export-all" ' + (!hasAnyAnnotations ? 'disabled' : '') + '>';
       html += '📦 Export All Pages (' + totalAnnotationsAllPages + ' annotations across ' + allKeys.length + ' pages)';
       html += '</button>';
      
      html += '<div class="annotation-context-menu-divider"></div>';
      
      html += '<button class="annotation-context-menu-item" id="ann-import">';
      html += '📥 Import Annotations...';
      html += '</button>';
      
      menu.innerHTML = html;
      document.body.appendChild(menu);
      
      document.getElementById('ann-set-username').onclick = function() {
        hideContextMenu();
        promptForUsername();
      };
      
      document.getElementById('ann-filter-all').onclick = function() {
        hideContextMenu();
        setUserFilter(null);
      };
      
      if (document.getElementById('ann-filter-me')) {
        document.getElementById('ann-filter-me').onclick = function() {
          if (currentUser) {
            hideContextMenu();
            setUserFilter('me');
          }
        };
      }
      
      for (let i = 0; i < uniqueUsers.length; i++) {
        const btn = document.getElementById('ann-filter-user-' + i);
        if (btn) {
          const u = uniqueUsers[i];
          btn.onclick = (function(user) {
            return function() {
              hideContextMenu();
              setUserFilter([user]);
            };
          })(u);
        }
      }
      
      document.getElementById('ann-export-page').onclick = function() {
        hideContextMenu();
        exportAnnotations('page');
      };
      
      document.getElementById('ann-export-all').onclick = function() {
        hideContextMenu();
        exportAnnotations('all');
      };
      
      document.getElementById('ann-import').onclick = function() {
        hideContextMenu();
        importAnnotations();
      };
      
      log('Context menu shown, currentUser=' + currentUser + ', uniqueUsers=' + uniqueUsers.length);
    }

   function hideContextMenu() {
     const existing = document.getElementById('annotation-context-menu');
     if (existing) {
       existing.remove();
     }
   }

   document.addEventListener('click', function(e) {
     if (!e.target.closest('#annotation-context-menu') && !e.target.closest('#annotation-toggle')) {
       hideContextMenu();
     }
   });

   document.addEventListener('keydown', function(e) {
     if (e.key === 'Escape') {
       hideContextMenu();
     }
   });

   function exportAnnotations(scope) {
     let exportData;
     let filename;
     const timestamp = new Date().toISOString().replace(/[:.]/g, '-').substring(0, 19);
     
     if (scope === 'page') {
       exportData = {
         version: 1,
         exportedAt: new Date().toISOString(),
         scope: 'page',
         pageId: getPageId(),
         pagePath: window.location.pathname,
         annotations: annotations
       };
       filename = 'saf-annotations-page-' + timestamp + '.json';
       log('Exporting ' + annotations.length + ' annotation(s) from current page');
      } else {
        const allAnnotations = {};
        const pagePaths = {};
        
        const keys = getPageAnnotationKeys();
        for (let k = 0; k < keys.length; k++) {
          const key = keys[k];
          try {
            const data = JSON.parse(localStorage.getItem(key));
            const pageId = key.substring(STORAGE_KEY_PREFIX.length);
            allAnnotations[pageId] = data;
          } catch (e) {
            log('Failed to parse annotations from key: ' + key);
          }
        }
       
       exportData = {
         version: 1,
         exportedAt: new Date().toISOString(),
         scope: 'all',
         allAnnotations: allAnnotations
       };
       filename = 'saf-annotations-all-' + timestamp + '.json';
       log('Exporting annotations from ' + Object.keys(allAnnotations).length + ' page(s)');
     }
     
     const jsonStr = JSON.stringify(exportData, null, 2);
     const blob = new Blob([jsonStr], { type: 'application/json' });
     const url = URL.createObjectURL(blob);
     
     const a = document.createElement('a');
     a.href = url;
     a.download = filename;
     document.body.appendChild(a);
     a.click();
     document.body.removeChild(a);
     URL.revokeObjectURL(url);
     
     log('Exported to: ' + filename);
   }

   function importAnnotations() {
     const input = document.createElement('input');
     input.type = 'file';
     input.accept = '.json,application/json';
     
     input.onchange = function(e) {
       const file = e.target.files[0];
       if (!file) return;
       
       const reader = new FileReader();
       reader.onload = function(loadEvent) {
         try {
           const data = JSON.parse(loadEvent.target.result);
           processImportData(data);
         } catch (err) {
           alert('Failed to parse annotations file: ' + err.message);
           log('Import parse error:', err);
         }
       };
       reader.readAsText(file);
     };
     
     input.click();
   }

   function processImportData(data) {
     if (!data || !data.version) {
       alert('Invalid annotations file format (missing version)');
       return;
     }
     
     if (data.version !== 1) {
       alert('Unsupported annotations file version: ' + data.version);
       return;
     }
     
     let importedCount = 0;
     let pagesCount = 0;
     
     if (data.scope === 'page') {
       const pageId = data.pageId;
       const pageAnnotations = data.annotations || [];
       
       if (pageId && pageAnnotations.length > 0) {
         let existing = [];
         const key = STORAGE_KEY_PREFIX + pageId;
         const existingData = localStorage.getItem(key);
         if (existingData) {
           try {
             existing = JSON.parse(existingData);
           } catch (e) {}
         }
         
         const existingIds = new Set(existing.map(function(a) { return a.id; }));
         let added = 0;
         
         for (let i = 0; i < pageAnnotations.length; i++) {
           const ann = pageAnnotations[i];
           if (!existingIds.has(ann.id)) {
             existing.push(ann);
             added++;
           }
         }
         
         localStorage.setItem(key, JSON.stringify(existing));
         importedCount = added;
         pagesCount = 1;
         
         if (pageId === getPageId()) {
           annotations = existing;
           if (!annotationsDisplayed && annotations.length > 0) {
             showAnnotations();
           } else {
             renderAnnotations();
           }
           updateButtonState();
         }
       }
       
     } else if (data.scope === 'all') {
       const allAnnotations = data.allAnnotations || {};
       const pageIds = Object.keys(allAnnotations);
       
       for (let p = 0; p < pageIds.length; p++) {
         const pageId = pageIds[p];
         const pageAnnotations = allAnnotations[pageId] || [];
         
         if (pageAnnotations.length > 0) {
           let existing = [];
           const key = STORAGE_KEY_PREFIX + pageId;
           const existingData = localStorage.getItem(key);
           if (existingData) {
             try {
               existing = JSON.parse(existingData);
             } catch (e) {}
           }
           
           const existingIds = new Set(existing.map(function(a) { return a.id; }));
           let added = 0;
           
           for (let i = 0; i < pageAnnotations.length; i++) {
             const ann = pageAnnotations[i];
             if (!existingIds.has(ann.id)) {
               existing.push(ann);
               added++;
             }
           }
           
           if (added > 0) {
             localStorage.setItem(key, JSON.stringify(existing));
             importedCount += added;
             pagesCount++;
             
             if (pageId === getPageId()) {
               annotations = existing;
             }
           }
         }
       }
       
       if (getPageId() && annotations.length > 0) {
         if (!annotationsDisplayed) {
           showAnnotations();
         } else {
           renderAnnotations();
         }
         updateButtonState();
       }
     }
     
     log('Import complete: ' + importedCount + ' annotation(s) across ' + pagesCount + ' page(s)');
     
     let message = 'Import complete:\n\n';
     message += '• ' + importedCount + ' annotation(s) imported\n';
     message += '• ' + pagesCount + ' page(s) affected\n\n';
     message += '(Existing annotations with same IDs were skipped to avoid duplicates)';
     
     alert(message);
   }

  function injectToggleButton() {
    const existing = document.getElementById('annotation-toggle');
    if (existing) return;
    
    const header = document.querySelector('.site-header');
    if (!header) {
      log('No .site-header found, looking for alternatives...');
      return;
    }
    
    const btn = createToggleButton();
    header.appendChild(btn);
    log('Toggle button injected');
  }

  function createAnnotationOverlay() {
    const existing = document.getElementById('annotation-overlay');
    if (existing) return existing;

    const overlay = document.createElement('div');
    overlay.id = 'annotation-overlay';
    overlay.className = 'annotation-overlay';
    overlay.innerHTML = '<svg id="annotation-svg" class="annotation-svg"></svg><div id="annotation-boxes"></div>';
    document.body.appendChild(overlay);
    log('Overlay created');
    return overlay;
  }

  function createColorPicker(selectedColor, callback) {
    const picker = document.createElement('div');
    picker.className = 'annotation-color-picker';
    
    const colorEntries = Object.entries(COLORS);
    for (let i = 0; i < colorEntries.length; i++) {
      const name = colorEntries[i][0];
      const color = colorEntries[i][1];
      
      const btn = document.createElement('button');
      btn.className = 'annotation-color-btn';
      btn.style.backgroundColor = color;
      btn.dataset.color = name;
      
      if (name === selectedColor) {
        btn.classList.add('selected');
      }
      
      btn.onclick = (function(n, c) {
        return function(e) {
          e.stopPropagation();
          picker.querySelectorAll('.annotation-color-btn').forEach(function(b) { 
            b.classList.remove('selected'); 
          });
          this.classList.add('selected');
          if (callback) callback(n);
        };
      })(name, color);
      
      picker.appendChild(btn);
    }
    return picker;
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function getNotePositionForRender(annotation, elementOffset) {
    const elemCenterX = elementOffset.left + elementOffset.width / 2;
    const elemTop = elementOffset.top;
    const noteWidth = 200;
    const viewportWidth = window.innerWidth;
    const viewportRight = window.scrollX + viewportWidth;
    const margin = 20;

    let left, top;

    if (annotation.offsetFromElementX !== undefined) {
      left = elemCenterX + annotation.offsetFromElementX;
      top = elemTop + annotation.offsetFromElementY;
    } else if (annotation.boxX !== undefined) {
      left = annotation.boxX;
      top = annotation.boxY;
    } else {
      left = elemCenterX + 60;
      top = elemTop;
    }

    if (left + noteWidth > viewportRight - margin) {
      left = elemCenterX - noteWidth - 60;
    }
    if (left < window.scrollX + margin) {
      left = window.scrollX + margin;
    }

    return { left: left, top: top };
  }

  function updateAnnotationOffsets(annotation, boxLeft, boxTop, elementOffset) {
    const elemCenterX = elementOffset.left + elementOffset.width / 2;
    const elemTop = elementOffset.top;

    annotation.offsetFromElementX = boxLeft - elemCenterX;
    annotation.offsetFromElementY = boxTop - elemTop;

    delete annotation.boxX;
    delete annotation.boxY;
  }

  function createNoteBox(annotation, elementOffset) {
    const pos = getNotePositionForRender(annotation, elementOffset);

    const box = document.createElement('div');
    box.className = 'annotation-note';
    box.id = 'note_' + annotation.id;
    box.dataset.id = annotation.id;
    box.style.left = pos.left + 'px';
    box.style.top = pos.top + 'px';
    box.style.backgroundColor = COLORS[annotation.color] || COLORS.yellow;

     const titleText = annotation.username ? 
       'Note (' + escapeHtml(annotation.username) + ')' : 
       'Note';
     
     box.innerHTML = '<div class="annotation-note-header"><span class="annotation-note-title">' + titleText + '</span><div class="annotation-note-controls"><button class="annotation-note-btn annotation-edit-btn" title="Edit">✏</button><button class="annotation-note-btn annotation-delete-btn" title="Delete">×</button></div></div><div class="annotation-note-content">' + escapeHtml(annotation.text) + '</div>';

    const header = box.querySelector('.annotation-note-header');
    
    header.addEventListener('mousedown', function(e) {
      if (e.target.closest('button')) return;
      isDragging = true;
      activeAnnotation = annotation;
      const rect = box.getBoundingClientRect();
      dragOffset.x = e.clientX - rect.left;
      dragOffset.y = e.clientY - rect.top;
      box.style.zIndex = '1002';
      e.preventDefault();
    });

    const editBtn = box.querySelector('.annotation-edit-btn');
    editBtn.onclick = function(e) {
      e.stopPropagation();
      editAnnotation(annotation, box);
    };

    const deleteBtn = box.querySelector('.annotation-delete-btn');
    deleteBtn.onclick = function(e) {
      e.stopPropagation();
      deleteAnnotation(annotation.id);
    };

    box.addEventListener('dblclick', function(e) {
      if (e.target.closest('button')) return;
      e.stopPropagation();
      editAnnotation(annotation, box);
    });

    return box;
  }

  function editAnnotation(annotation, boxEl) {
    const contentEl = boxEl.querySelector('.annotation-note-content');
    const currentText = annotation.text;
    const currentColor = annotation.color;
    let selectedColor = currentColor;

    const editContainer = document.createElement('div');
    editContainer.className = 'annotation-edit-container';
    editContainer.innerHTML = '<textarea class="annotation-edit-textarea">' + escapeHtml(currentText) + '</textarea><div class="annotation-edit-controls"><div class="annotation-color-wrapper"></div><div><button class="annotation-save-btn">Save</button><button class="annotation-cancel-btn">Cancel</button></div></div>';

    const colorWrapper = editContainer.querySelector('.annotation-color-wrapper');
    const colorPicker = createColorPicker(currentColor, function(color) {
      selectedColor = color;
    });
    colorWrapper.appendChild(colorPicker);

    const textarea = editContainer.querySelector('.annotation-edit-textarea');
    contentEl.innerHTML = '';
    contentEl.appendChild(editContainer);
    textarea.focus();
    textarea.select();

    const saveBtn = editContainer.querySelector('.annotation-save-btn');
    const cancelBtn = editContainer.querySelector('.annotation-cancel-btn');

    function cleanup() {
      contentEl.innerHTML = escapeHtml(currentText);
    }

    saveBtn.onclick = function(e) {
      e.stopPropagation();
      const newText = textarea.value.trim();
      if (newText) {
        annotation.text = newText;
        annotation.color = selectedColor;
        saveAnnotations();
        boxEl.style.backgroundColor = COLORS[selectedColor] || COLORS.yellow;
        contentEl.innerHTML = escapeHtml(newText);
        updateLines();
      } else {
        cleanup();
      }
    };

    cancelBtn.onclick = function(e) {
      e.stopPropagation();
      cleanup();
    };
  }

   function createAnnotation(element) {
     if (!isInContent(element)) {
       log('Element not in content area, skipping', element);
       return;
     }

     let username = getCurrentUsername();
     if (!username) {
       const userInput = prompt('To create annotations, please enter your username:\n\n(This identifies your notes when sharing with others)');
       if (userInput === null || !userInput.trim()) {
         log('User cancelled username entry - not creating annotation');
         return;
       }
       username = userInput.trim();
       setCurrentUsername(username);
     }

     const selector = generateStableSelector(element);
     const verifyEl = findElementBySelector(selector);
     
     if (verifyEl !== element) {
       log('Warning: Selector verification failed for:', selector);
       if (element.id) {
         log('Using simple #id selector');
       } else {
         log('Generated selector may be unstable');
       }
     } else {
       log('Generated selector: ' + selector);
     }

     const initialText = prompt('Enter your annotation:');
     if (initialText === null || initialText.trim() === '') return;

     const offset = getPageOffset(element);
     const annotation = {
       id: generateId(),
       selector: selector,
       text: initialText,
       color: 'yellow',
       offsetFromElementX: 60,
       offsetFromElementY: 0,
       username: username
     };

    const noteWidth = 200;
    const elemCenterX = offset.left + offset.width / 2;
    const viewportRight = window.scrollX + window.innerWidth;
    const margin = 20;

    if (elemCenterX + 60 + noteWidth > viewportRight - margin) {
      annotation.offsetFromElementX = -noteWidth - 60;
    }

    annotations.push(annotation);
    saveAnnotations();
    
    if (!annotationsDisplayed) {
      showAnnotations();
    }
    renderAnnotations();
    updateButtonState();
  }

  function deleteAnnotation(id) {
    const newAnnotations = [];
    for (let i = 0; i < annotations.length; i++) {
      if (annotations[i].id !== id) {
        newAnnotations.push(annotations[i]);
      }
    }
    annotations = newAnnotations;
    saveAnnotations();
    
    const box = document.getElementById('note_' + id);
    if (box) box.remove();

    if (annotations.length === 0) {
      if (!createModeEnabled) {
        hideAnnotations();
      }
    } else {
      updateLines();
    }
    updateButtonState();
    log('Deleted annotation: ' + id + '. Remaining: ' + annotations.length);
  }

   function updateLines() {
     const svg = document.getElementById('annotation-svg');
     if (!svg) return;

     svg.innerHTML = '';
     svg.setAttribute('width', window.innerWidth);
     svg.setAttribute('height', Math.max(document.body.scrollHeight, window.innerHeight));
     svg.style.position = 'absolute';
     svg.style.top = '0';
     svg.style.left = '0';
     svg.style.width = '100%';
     svg.style.height = '100%';
     svg.style.pointerEvents = 'none';
     svg.style.zIndex = '999';

     let linesDrawn = 0;
     for (let i = 0; i < annotations.length; i++) {
       const annotation = annotations[i];
       const element = findElementBySelector(annotation.selector);
       const box = document.getElementById('note_' + annotation.id);

       if (!element) {
         log('Could not find element for selector: ' + annotation.selector);
         continue;
       }
       if (!box) {
         log('Could not find note box for id: ' + annotation.id);
         continue;
       }

       const elementOffset = getPageOffset(element);
       const boxRect = box.getBoundingClientRect();

       const startX = elementOffset.left + elementOffset.width / 2;
       const startY = elementOffset.top + elementOffset.height / 2;

       const boxCenterX = boxRect.left + boxRect.width / 2 + window.scrollX;
       const boxCenterY = boxRect.top + 40 + window.scrollY;

       const midX = (startX + boxCenterX) / 2;

       const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
       const d = 'M ' + startX + ' ' + startY + ' C ' + midX + ' ' + startY + ', ' + midX + ' ' + boxCenterY + ', ' + boxCenterX + ' ' + boxCenterY;

       path.setAttribute('d', d);
       path.setAttribute('stroke', '#555');
       path.setAttribute('stroke-width', '2');
       path.setAttribute('fill', 'none');
       path.setAttribute('stroke-dasharray', '6,3');
       path.style.pointerEvents = 'none';

       svg.appendChild(path);

       const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
       circle.setAttribute('cx', startX);
       circle.setAttribute('cy', startY);
       circle.setAttribute('r', 6);
       circle.setAttribute('fill', COLORS[annotation.color] || COLORS.yellow);
      circle.setAttribute('stroke', '#333');
      circle.setAttribute('stroke-width', '2');
      circle.style.pointerEvents = 'none';

      svg.appendChild(circle);
      linesDrawn++;
    }
    
    if (linesDrawn > 0) {
      log('Updated ' + linesDrawn + ' connector line(s)');
    }
  }

    function renderAnnotations() {
      const boxesContainer = document.getElementById('annotation-boxes');
      if (!boxesContainer) {
        log('No #annotation-boxes container found');
        return;
      }

      boxesContainer.innerHTML = '';
      let boxesRendered = 0;
      let filteredOut = 0;

      for (let i = 0; i < annotations.length; i++) {
        const annotation = annotations[i];
        
        if (!isAnnotationVisible(annotation)) {
          filteredOut++;
          continue;
        }
        
        const element = findElementBySelector(annotation.selector);
        
        if (!element) {
          log('Skipping annotation - element not found for selector: ' + annotation.selector);
          continue;
        }

        const offset = getPageOffset(element);
        const noteBox = createNoteBox(annotation, offset);
        boxesContainer.appendChild(noteBox);
        boxesRendered++;
      }

      const total = annotations.length;
      const visible = total - filteredOut;
      log('Rendered ' + boxesRendered + '/' + visible + ' visible annotation(s) (filtered out ' + filteredOut + ' of ' + total + ' total)');
      updateLines();
    }

  function enableElementHover() {
    const roots = getContentRoots();
    
    for (let r = 0; r < roots.length; r++) {
      const root = roots[r];
      const contentElements = root.querySelectorAll('h1, h2, h3, h4, p, table, li, pre, img, dl, dt, dd, blockquote, code, td, th');
      
      for (let i = 0; i < contentElements.length; i++) {
        const el = contentElements[i];
        if (el.closest('.annotation-note, .annotation-toggle-btn, .site-nav, .side-bar, .site-header, .site-footer')) {
          continue;
        }
        el.classList.add('annotation-hover-target');
      }
    }
    log('Create mode enabled - elements now hoverable');
  }

  function disableElementHover() {
    const elements = document.querySelectorAll('.annotation-hover-target');
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('annotation-hover-target');
    }
    log('Create mode disabled');
  }

  function handleContentClick(e) {
    const target = e.target.closest('.annotation-hover-target');
    if (!target) return;
    if (e.target.closest('.annotation-note, .annotation-toggle-btn')) return;
    
    e.preventDefault();
    e.stopPropagation();
    createAnnotation(target);
  }

  function showAnnotations() {
    if (annotationsDisplayed) return;
    annotationsDisplayed = true;
    createAnnotationOverlay();
    renderAnnotations();
    updateButtonState();
    log('showAnnotations() completed');
  }

  function hideAnnotations() {
    if (!annotationsDisplayed) return;
    annotationsDisplayed = false;
    const overlay = document.getElementById('annotation-overlay');
    if (overlay) overlay.remove();
    updateButtonState();
    log('hideAnnotations() completed');
  }

  function enableCreateMode() {
    if (createModeEnabled) return;
    createModeEnabled = true;
    document.body.classList.add('annotations-mode');
    document.addEventListener('click', handleContentClick, true);
    enableElementHover();
    if (!annotationsDisplayed) {
      showAnnotations();
    }
    updateButtonState();
    log('Create mode ENABLED');
  }

  function disableCreateMode() {
    if (!createModeEnabled) return;
    createModeEnabled = false;
    document.body.classList.remove('annotations-mode');
    document.removeEventListener('click', handleContentClick, true);
    disableElementHover();
    updateButtonState();
    log('Create mode DISABLED');
  }

  function updateButtonState() {
    const btn = document.getElementById('annotation-toggle');
    if (!btn) return;
    
    const isActive = createModeEnabled || (annotationsDisplayed && annotations.length > 0);
    
    if (isActive) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
    
    log('Button state updated. Active=' + isActive + 
        ' (createMode=' + createModeEnabled + 
        ', displayed=' + annotationsDisplayed + 
        ', count=' + annotations.length + ')');
  }

  function toggleAnnotations() {
    if (createModeEnabled) {
      disableCreateMode();
      if (annotations.length === 0) {
        hideAnnotations();
      }
    } else {
      enableCreateMode();
    }
  }

  document.addEventListener('mousemove', function(e) {
    if (!isDragging || !activeAnnotation) return;

    const box = document.getElementById('note_' + activeAnnotation.id);
    if (box) {
      const newX = e.clientX - dragOffset.x + window.scrollX;
      const newY = e.clientY - dragOffset.y + window.scrollY;

      box.style.left = newX + 'px';
      box.style.top = newY + 'px';

      const element = findElementBySelector(activeAnnotation.selector);
      if (element) {
        const elementOffset = getPageOffset(element);
        updateAnnotationOffsets(activeAnnotation, newX, newY, elementOffset);
      }

      saveAnnotations();
      updateLines();
    }
  });

  document.addEventListener('mouseup', function() {
    if (isDragging) {
      isDragging = false;
      activeAnnotation = null;
      const notes = document.querySelectorAll('.annotation-note');
      for (let i = 0; i < notes.length; i++) {
        notes[i].style.zIndex = '1001';
      }
    }
  });

  window.addEventListener('scroll', function() {
    if (annotationsDisplayed) {
      updateLines();
    }
  });

  window.addEventListener('resize', function() {
    if (annotationsDisplayed) {
      renderAnnotations();
    }
  });

  function initialize() {
    log('===== Initializing Annotations =====');
    log('URL: ' + window.location.href);
    log('pathname: ' + window.location.pathname);
    
    injectToggleButton();
    annotations = loadAnnotations();
    
    if (annotations.length > 0) {
      log('Found ' + annotations.length + ' annotation(s) - displaying automatically');
      showAnnotations();
    } else {
      log('No annotations found on this page');
      updateButtonState();
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    initialize();
  });

  window.addEventListener('load', function() {
    log('window.load fired - re-rendering after all resources loaded');
    if (annotations.length > 0 && annotationsDisplayed) {
      renderAnnotations();
    }
  });

  if (document.readyState === 'complete') {
    initialize();
  } else if (document.readyState === 'interactive') {
    initialize();
    setTimeout(function() {
      if (annotations.length > 0 && annotationsDisplayed) {
        log('Delayed re-render for late-loading content');
        renderAnnotations();
      }
    }, 500);
  } else if (document.readyState !== 'loading') {
    initialize();
  }

   window.safAnnotationsDebug = function() {
     console.group('[Annotations Debug Info]');
     console.log('Page ID:', getPageId());
     console.log('Storage key:', getStorageKey());
     
     const lsData = localStorage.getItem(getStorageKey());
     const lsAnnotations = lsData ? JSON.parse(lsData) : [];
     console.log('In localStorage (' + lsAnnotations.length + '):', lsAnnotations);
     console.log('In memory (' + annotations.length + '):', annotations);
     
     const roots = getContentRoots();
     console.log('Content roots:', roots);
     
     console.group('Testing each annotation selector:');
     for (let i = 0; i < annotations.length; i++) {
       const ann = annotations[i];
       console.group('Annotation[' + i + '] id=' + ann.id);
       console.log('  selector:', ann.selector);
       console.log('  text:', ann.text.substring(0, 60) + (ann.text.length > 60 ? '...' : ''));
       console.log('  offsetFromElementX:', ann.offsetFromElementX);
       console.log('  offsetFromElementY:', ann.offsetFromElementY);
       
       const allMatches = document.querySelectorAll(ann.selector);
       console.log('  document.querySelectorAll() found:', allMatches.length, 'match(es)');
       
       for (let j = 0; j < allMatches.length; j++) {
         const match = allMatches[j];
         const inContent = isInContent(match);
         const generatedSel = generateStableSelector(match);
         const offset = getPageOffset(match);
         console.log('    Match[' + j + ']: inContent=' + inContent);
         console.log('      tag:', match.tagName, 'class:', match.className);
         console.log('      generated selector:', generatedSel);
         console.log('      offset: top=' + offset.top + ', left=' + offset.left);
       }
       
       const foundElement = findElementBySelector(ann.selector);
       console.log('  findElementBySelector() returned:', foundElement ? 'FOUND' : 'NOT FOUND');
       if (foundElement) {
         const foundOffset = getPageOffset(foundElement);
         console.log('    -> offset: top=' + foundOffset.top + ', left=' + foundOffset.left);
       }
       
       const noteBox = document.getElementById('note_' + ann.id);
       console.log('  Note box exists:', noteBox ? 'YES' : 'NO');
       if (noteBox) {
         const boxRect = noteBox.getBoundingClientRect();
         console.log('    -> boxRect: top=' + boxRect.top + ', left=' + boxRect.left);
         console.log('    -> computed left:', noteBox.style.left);
         console.log('    -> computed top:', noteBox.style.top);
       }
       
       console.groupEnd();
     }
     console.groupEnd();
     
     console.log('document.body.scrollHeight:', document.body.scrollHeight);
     console.log('window.innerHeight:', window.innerHeight);
     console.log('window.scrollY:', window.scrollY);
     
     const svg = document.getElementById('annotation-svg');
     if (svg) {
       console.log('SVG width attr:', svg.getAttribute('width'));
       console.log('SVG height attr:', svg.getAttribute('height'));
       console.log('SVG bounding rect:', svg.getBoundingClientRect());
     } else {
       console.log('SVG does not exist (annotations not displayed?)');
     }
     
     console.groupEnd();
     return 'Debug info dumped to console';
   };

})();
