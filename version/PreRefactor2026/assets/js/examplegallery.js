
  let filteredImages = images.slice();
  let currentIndex = 0;

  function showImage(index) {
    const img = document.getElementById("gallery-image");
    if (!filteredImages.length) {
      img.src = "";
      img.alt = "No image available";
      document.getElementById("prev-btn").style.display = "none";
      document.getElementById("next-btn").style.display = "none";
      return;
    }
    currentIndex = (index + filteredImages.length) % filteredImages.length;
    img.src = filteredImages[currentIndex].src;
    img.alt = filteredImages[currentIndex].alt;
    const showNav = filteredImages.length > 1;
    document.getElementById("prev-btn").style.display = showNav ? "inline-block" : "none";
    document.getElementById("next-btn").style.display = showNav ? "inline-block" : "none";
  }

  function nextImage() {
    if (!filteredImages.length) return;
    currentIndex = (currentIndex + 1) % filteredImages.length;
    showImage(currentIndex);
  }

  function prevImage() {
    if (!filteredImages.length) return;
    currentIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    showImage(currentIndex);
  }

  function updateFilteredImages() {
    const select = document.getElementById("tool-filter");
    const tool = select.value;
    if (tool === "All") {
      filteredImages = images.slice();
    } else {
      filteredImages = images.filter(i => i.tool === tool);
    }
    currentIndex = 0;
    showImage(0);
  }

  function onToolFilterChange() {
    updateFilteredImages();
  }

  // Touch swipe support
  let startX = 0;
  let endX = 0;
  const threshold = 50;

  const gallery = document.getElementById("gallery-container");

  gallery.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  }, { passive: true });

  gallery.addEventListener("touchend", function (e) {
    endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (Math.abs(diff) > threshold) {
      if (diff < 0) {
        nextImage();
      } else {
        prevImage(); 
      }
    }
  }, { passive: true });

  // Initialize
  document.addEventListener("DOMContentLoaded", function() {
    updateFilteredImages();
  });
