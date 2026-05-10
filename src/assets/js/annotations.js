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

  let annotationsEnabled = false;
  let currentPageId = getPageId();
  let annotations = loadAnnotations();
  let activeAnnotation = null;
  let isDragging = false;
  let dragOffset = { x: 0, y: 0 };

  function getPageId() {
    let path = window.location.pathname;
    if (path.endsWith('/')) {
      path += 'index.html';
    }
    return path.replace(/[^a-zA-Z0-9_-]/g, '_');
  }

  function getStorageKey() {
    return STORAGE_KEY_PREFIX + currentPageId;
  }

  function loadAnnotations() {
    try {
      const data = localStorage.getItem(getStorageKey());
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function saveAnnotations() {
    try {
      localStorage.setItem(getStorageKey(), JSON.stringify(annotations));
    } catch (e) {
      console.warn('Failed to save annotations:', e);
    }
  }

  function generateId() {
    return 'ann_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  function getElementSelector(element) {
    if (element.id) {
      return '#' + element.id;
    }
    const path = [];
    let el = element;
    while (el && el.nodeType === Node.ELEMENT_NODE) {
      let selector = el.tagName.toLowerCase();
      const parent = el.parentNode;
      if (!parent) break;
      const siblings = Array.from(parent.children).filter(
        child => child.tagName === el.tagName
      );
      if (siblings.length > 1) {
        const index = siblings.indexOf(el) + 1;
        selector += ':nth-of-type(' + index + ')';
      }
      path.unshift(selector);
      el = parent;
      if (el.id) {
        path.unshift('#' + el.id);
        break;
      }
    }
    return path.join(' > ');
  }

  function findElement(selector) {
    try {
      return document.querySelector(selector);
    } catch (e) {
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
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4L18.5 2.5z"/></svg> Annotations';
    btn.title = 'Toggle annotations mode';
    btn.onclick = toggleAnnotations;
    return btn;
  }

  function injectToggleButton() {
    const existing = document.getElementById('annotation-toggle');
    if (existing) return;
    
    const header = document.querySelector('.site-header');
    if (!header) return;
    
    const btn = createToggleButton();
    header.appendChild(btn);
  }

  function createAnnotationOverlay() {
    const existing = document.getElementById('annotation-overlay');
    if (existing) return existing;

    const overlay = document.createElement('div');
    overlay.id = 'annotation-overlay';
    overlay.className = 'annotation-overlay';
    overlay.innerHTML = '<svg id="annotation-svg" class="annotation-svg"></svg><div id="annotation-boxes"></div>';
    document.body.appendChild(overlay);
    return overlay;
  }

  function createColorPicker(selectedColor, callback) {
    const picker = document.createElement('div');
    picker.className = 'annotation-color-picker';
    for (const [name, color] of Object.entries(COLORS)) {
      const btn = document.createElement('button');
      btn.className = 'annotation-color-btn';
      btn.style.backgroundColor = color;
      btn.dataset.color = name;
      if (name === selectedColor) btn.classList.add('selected');
      btn.onclick = (e) => {
        e.stopPropagation();
        picker.querySelectorAll('.annotation-color-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        if (callback) callback(name);
      };
      picker.appendChild(btn);
    }
    return picker;
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function createNoteBox(annotation) {
    const box = document.createElement('div');
    box.className = 'annotation-note';
    box.id = 'note_' + annotation.id;
    box.dataset.id = annotation.id;
    box.style.left = annotation.boxX + 'px';
    box.style.top = annotation.boxY + 'px';
    box.style.backgroundColor = COLORS[annotation.color] || COLORS.yellow;

    box.innerHTML = '<div class="annotation-note-header"><span class="annotation-note-title">Note</span><div class="annotation-note-controls"><button class="annotation-note-btn annotation-edit-btn" title="Edit">✏</button><button class="annotation-note-btn annotation-delete-btn" title="Delete">×</button></div></div><div class="annotation-note-content">' + escapeHtml(annotation.text) + '</div>';

    const header = box.querySelector('.annotation-note-header');
    
    header.addEventListener('mousedown', (e) => {
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
    editBtn.onclick = (e) => {
      e.stopPropagation();
      editAnnotation(annotation, box);
    };

    const deleteBtn = box.querySelector('.annotation-delete-btn');
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      deleteAnnotation(annotation.id);
    };

    box.addEventListener('dblclick', (e) => {
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
    const colorPicker = createColorPicker(currentColor, (color) => {
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

    saveBtn.onclick = (e) => {
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

    cancelBtn.onclick = (e) => {
      e.stopPropagation();
      cleanup();
    };
  }

  function createAnnotation(element) {
    const selector = getElementSelector(element);
    const offset = getPageOffset(element);
    
    const initialText = prompt('Enter your annotation:');
    if (initialText === null || initialText.trim() === '') return;

    const annotation = {
      id: generateId(),
      selector: selector,
      text: initialText,
      color: 'yellow',
      elementX: offset.left + offset.width / 2,
      elementY: offset.top + offset.height / 2,
      boxX: offset.left + offset.width + 30,
      boxY: offset.top
    };

    annotations.push(annotation);
    saveAnnotations();
    renderAnnotations();
  }

  function deleteAnnotation(id) {
    annotations = annotations.filter(a => a.id !== id);
    saveAnnotations();
    const box = document.getElementById('note_' + id);
    if (box) box.remove();
    updateLines();
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

    annotations.forEach(annotation => {
      const element = findElement(annotation.selector);
      const box = document.getElementById('note_' + annotation.id);

      if (!element || !box) return;

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
    });
  }

  function renderAnnotations() {
    const boxesContainer = document.getElementById('annotation-boxes');
    if (!boxesContainer) return;

    boxesContainer.innerHTML = '';

    annotations.forEach(annotation => {
      const element = findElement(annotation.selector);
      if (element) {
        const offset = getPageOffset(element);
        annotation.elementX = offset.left + offset.width / 2;
        annotation.elementY = offset.top + offset.height / 2;
      }
      const noteBox = createNoteBox(annotation);
      boxesContainer.appendChild(noteBox);
    });

    updateLines();
  }

  function enableElementHover() {
    const contentContainer = document.querySelector('.main-content, main, #main-content, .content') || document.body;
    
    const contentElements = contentContainer.querySelectorAll('h1, h2, h3, h4, p, table, li, pre, img, dl, dt, dd, blockquote, code, td, th');
    contentElements.forEach(el => {
      if (el.closest('.annotation-note, .annotation-toggle-btn, .site-nav, .side-bar, .site-header, .site-footer')) return;
      el.classList.add('annotation-hover-target');
    });
  }

  function disableElementHover() {
    const elements = document.querySelectorAll('.annotation-hover-target');
    elements.forEach(el => {
      el.classList.remove('annotation-hover-target');
    });
  }

  function handleContentClick(e) {
    const target = e.target.closest('.annotation-hover-target');
    if (!target) return;
    if (e.target.closest('.annotation-note, .annotation-toggle-btn')) return;
    
    e.preventDefault();
    e.stopPropagation();
    createAnnotation(target);
  }

  function toggleAnnotations() {
    annotationsEnabled = !annotationsEnabled;
    const btn = document.getElementById('annotation-toggle');

    if (annotationsEnabled) {
      btn.classList.add('active');
      document.body.classList.add('annotations-mode');
      createAnnotationOverlay();
      renderAnnotations();
      document.addEventListener('click', handleContentClick, true);
      enableElementHover();
    } else {
      btn.classList.remove('active');
      document.body.classList.remove('annotations-mode');
      document.removeEventListener('click', handleContentClick, true);
      disableElementHover();
      const overlay = document.getElementById('annotation-overlay');
      if (overlay) overlay.remove();
    }
  }

  document.addEventListener('mousemove', (e) => {
    if (!isDragging || !activeAnnotation) return;

    const box = document.getElementById('note_' + activeAnnotation.id);
    if (box) {
      const newX = e.clientX - dragOffset.x + window.scrollX;
      const newY = e.clientY - dragOffset.y + window.scrollY;

      box.style.left = newX + 'px';
      box.style.top = newY + 'px';

      activeAnnotation.boxX = newX;
      activeAnnotation.boxY = newY;

      saveAnnotations();
      updateLines();
    }
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      activeAnnotation = null;
      document.querySelectorAll('.annotation-note').forEach(box => {
        box.style.zIndex = '1001';
      });
    }
  });

  window.addEventListener('scroll', () => {
    if (annotationsEnabled) {
      updateLines();
    }
  });

  window.addEventListener('resize', () => {
    if (annotationsEnabled) {
      updateLines();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    injectToggleButton();
  });

  if (document.readyState !== 'loading') {
    injectToggleButton();
  }

})();
