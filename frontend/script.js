document.addEventListener("DOMContentLoaded", function() {
    const searchTab = document.getElementById("search-tab");
    const summaryTab = document.getElementById("summary-tab");
    const documentSearch = document.getElementById("document-search");
    const documentSummary = document.getElementById("document-summary");

    searchTab.addEventListener("click", function() {
        documentSearch.classList.remove("hidden");
        documentSummary.classList.add("hidden");
        searchTab.classList.add("active");
        summaryTab.classList.remove("active");
    });

    summaryTab.addEventListener("click", function() {
        documentSummary.classList.remove("hidden");
        documentSearch.classList.add("hidden");
        summaryTab.classList.add("active");
        searchTab.classList.remove("active");
    });

    const clearButtons = document.querySelectorAll(".clear-btn");
    clearButtons.forEach(button => {
        button.addEventListener("click", function() {
            document.querySelectorAll("input").forEach(input => input.value = "");
        });
    });
});
