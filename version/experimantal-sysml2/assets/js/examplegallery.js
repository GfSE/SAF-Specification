let currentIndex = 0;
let filteredExamples = [...examplesData]; // aus Template

function renderExample(example) {

  const img = document.getElementById("gallery-image");
  const text = document.getElementById("gallery-text");

  if (!example) return;

  // --- SYSML2 TEXT RENDERING ---
  if (example.tool === "SysML2") {

    img.style.display = "none";
    text.style.display = "block";
    text.textContent = "Loading...";

    fetch(example.src)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to load SysML2 file");
        }
        return response.text();
      })
      .then(content => {
        text.textContent = content;
      })
      .catch(err => {
        text.textContent = "Error loading SysML2 file.";
        console.error(err);
      });

  } 
  // --- IMAGE RENDERING ---
  else {

    text.style.display = "none";
    img.style.display = "block";

    img.src = example.src;
    img.alt = example.alt;
  }
}

function showCurrent() {
  if (filteredExamples.length === 0) return;
  renderExample(filteredExamples[currentIndex]);
}

function prevImage() {
  if (filteredExamples.length === 0) return;

  currentIndex =
    (currentIndex - 1 + filteredExamples.length) %
    filteredExamples.length;

  showCurrent();
}

function nextImage() {
  if (filteredExamples.length === 0) return;

  currentIndex =
    (currentIndex + 1) %
    filteredExamples.length;

  showCurrent();
}

function onToolFilterChange() {

  const select = document.getElementById("tool-filter");
  const selectedTool = select.value;

  if (selectedTool === "All") {
    filteredExamples = [...examplesData];
  } else {
    filteredExamples = examplesData.filter(
      ex => ex.tool === selectedTool
    );
  }

  currentIndex = 0;
  showCurrent();
}

// --- INITIAL RENDER ---
document.addEventListener("DOMContentLoaded", () => {
  showCurrent();
});
