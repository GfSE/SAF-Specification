(function() {
  'use strict';

  const STORAGE_KEY_PREFIX = 'saf_annotations_';
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
    btn.title = 'Toggle annotations create mode (click any element to annotate)';
    btn.onclick = toggleAnnotations;
    return btn;
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

    box.innerHTML = '<div class="annotation-note-header"><span class="annotation-note-title">Note</span><div class="annotation-note-controls"><button class="annotation-note-btn annotation-edit-btn" title="Edit">✏</button><button class="annotation-note-btn annotation-delete-btn" title="Delete">×</button></div></div><div class="annotation-note-content">' + escapeHtml(annotation.text) + '</div>';

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
      offsetFromElementY: 0
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
     if (!svg) {
       log('updateLines(): No SVG found - cannot draw lines');
       return;
     }

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

     log('=== updateLines() START ===');
     log('SVG height set to: ' + Math.max(document.body.scrollHeight, window.innerHeight));
     log('window.scrollY: ' + window.scrollY);

     let linesDrawn = 0;
     for (let i = 0; i < annotations.length; i++) {
       const annotation = annotations[i];
       log('--- Line[' + i + '] id=' + annotation.id + ' ---');
       
       const element = findElementBySelector(annotation.selector);
       const box = document.getElementById('note_' + annotation.id);

       if (!element) {
         log('    !!! NO ELEMENT for selector: ' + annotation.selector);
         continue;
       }
       if (!box) {
         log('    !!! NO NOTE BOX for id: ' + annotation.id);
         continue;
       }

       const elementOffset = getPageOffset(element);
       const boxRect = box.getBoundingClientRect();

       log('    elementOffset: top=' + elementOffset.top + ', left=' + elementOffset.left + ', width=' + elementOffset.width + ', height=' + elementOffset.height);
       log('    boxRect: top=' + boxRect.top + ', left=' + boxRect.left + ', width=' + boxRect.width + ', height=' + boxRect.height);

       const startX = elementOffset.left + elementOffset.width / 2;
       const startY = elementOffset.top + elementOffset.height / 2;

       const boxCenterX = boxRect.left + boxRect.width / 2 + window.scrollX;
       const boxCenterY = boxRect.top + 40 + window.scrollY;

       log('    start point: (' + startX + ', ' + startY + ')');
       log('    box point: (' + boxCenterX + ', ' + boxCenterY + ')');

       const midX = (startX + boxCenterX) / 2;

       const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
       const d = 'M ' + startX + ' ' + startY + ' C ' + midX + ' ' + startY + ', ' + midX + ' ' + boxCenterY + ', ' + boxCenterX + ' ' + boxCenterY;

       log('    path d="' + d + '"');

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

     log('=== renderAnnotations() START ===');
     log('Total annotations to render: ' + annotations.length);

     for (let i = 0; i < annotations.length; i++) {
       const annotation = annotations[i];
       log('--- Annotation[' + i + '] id=' + annotation.id + ' ---');
       log('    selector: ' + annotation.selector);
       log('    text preview: ' + annotation.text.substring(0, 50) + (annotation.text.length > 50 ? '...' : ''));
       
       const element = findElementBySelector(annotation.selector);
       
       if (!element) {
         log('    !!! ELEMENT NOT FOUND - skipping this annotation');
         continue;
       }

       log('    ELEMENT FOUND: ' + generateElementPath(element));
       const offset = getPageOffset(element);
       log('    element offset: top=' + offset.top + ', left=' + offset.left + ', width=' + offset.width + ', height=' + offset.height);
       
       const noteBox = createNoteBox(annotation, offset);
       boxesContainer.appendChild(noteBox);
       boxesRendered++;
       log('    Box created and appended');
     }

     log('=== renderAnnotations() END - Rendered ' + boxesRendered + '/' + annotations.length + ' ===');
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
