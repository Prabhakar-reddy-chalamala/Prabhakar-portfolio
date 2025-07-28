document.getElementById("searchBar").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const content = document.getElementById("content");
  const sections = content.querySelectorAll("section");

  sections.forEach((section) => {
    const text = section.innerText.toLowerCase();
    section.style.display = text.includes(query) ? "block" : "none";
  });
});
