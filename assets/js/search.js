document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("siteSearch");
  if (!searchInput) return;

  const searchableCards = document.querySelectorAll("[data-search]");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    searchableCards.forEach(card => {
      const text = card.getAttribute("data-search").toLowerCase();
      const match = text.includes(query);
      card.classList.toggle("hidden-card", !match);
    });
  });
});