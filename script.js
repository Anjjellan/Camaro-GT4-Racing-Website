document.addEventListener("DOMContentLoaded", function() {
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselSlide = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");
    const prevBtn = document.querySelector(".carousel-btn:first-of-type");
    const nextBtn = document.querySelector(".carousel-btn:last-of-type");

    let counter = 0;
    const imageCount = images.length;

    // Function to update container height to fit the current image
    function updateContainerHeight() {
        const currentImage = images[counter];
        carouselContainer.style.height = `${currentImage.naturalHeight * (carouselContainer.offsetWidth / currentImage.naturalWidth)}px`;
    }

    // Show the first image's height on load
    updateContainerHeight();

    // Next button event
    nextBtn.addEventListener("click", () => {
        counter = (counter + 1) % imageCount; // Cycle through images
        carouselSlide.style.transform = `translateX(-${counter * 100}%)`;
        updateContainerHeight(); // Update height after image change
    });

    // Prev button event
    prevBtn.addEventListener("click", () => {
        counter = (counter - 1 + imageCount) % imageCount; // Cycle in reverse
        carouselSlide.style.transform = `translateX(-${counter * 100}%)`;
        updateContainerHeight(); // Update height after image change
    });

    // Optional: Automatically update height on window resize for better responsiveness
    window.addEventListener("resize", updateContainerHeight);
});
