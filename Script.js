document.getElementById('search-input').addEventListener('input', function() {
  const query = this.value.toLowerCase().trim();
  const sections = document.querySelectorAll('.section');
  const resultsContainer = document.getElementById('search-results');

  // Clear previous message
  resultsContainer.textContent = '';

  if (!query) {
    // If search is empty, show all sections
    sections.forEach(section => section.style.display = '');
    return;
  }

  let resultsFound = false;

  sections.forEach(section => {
    const text = section.textContent.toLowerCase();
    if (text.includes(query)) {
      section.style.display = ''; // Show matched sections
      resultsFound = true;
    } else {
      section.style.display = 'none'; // Hide unmatched sections
    }
  });

  if (!resultsFound) {
    resultsContainer.textContent = 'No results found';
  }
});
