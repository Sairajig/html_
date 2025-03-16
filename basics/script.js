// Filter videos based on the search input
function filterVideos() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const videoCards = document.querySelectorAll(".video-card");

    videoCards.forEach((card) => {
        const title = card.dataset.title.toLowerCase();
        if (title.includes(searchInput)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
