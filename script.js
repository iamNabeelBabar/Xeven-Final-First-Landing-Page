document.addEventListener('DOMContentLoaded', () => {

    const wrapper = document.querySelector('.carousel-wrapper');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');

    // KEY CHANGE: State is now managed by page, not individual slide index
    let currentPage = 0;
    const totalPages = dots.length; // Total pages is the number of nav dots

    // Function to update the carousel display
    function updateCarousel() {
        // The transform moves the wrapper by a multiple of the container's width (100%)
        // This makes the entire visible group of slides move at once.
        const offset = currentPage * 100;
        wrapper.style.transform = `translateX(-${offset}%)`;

        // Update the active state of the dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentPage].classList.add('active');
    }

    // Event listener for the "Next" button
    nextBtn.addEventListener('click', () => {
        // Move to the next page, wrapping around to the first page if at the end
        currentPage = (currentPage + 1) % totalPages;
        updateCarousel();
    });

    // Event listener for the "Previous" button
    prevBtn.addEventListener('click', () => {
        // Move to the previous page, wrapping around to the last page if at the beginning
        currentPage = (currentPage - 1 + totalPages) % totalPages;
        updateCarousel();
    });

    // Event listeners for the navigation dots
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            // Get the page index from the 'data-page' attribute
            currentPage = +e.target.getAttribute('data-page');
            updateCarousel();
        });
    });

    // Initialize the carousel to the first page
    updateCarousel();

    // Note: This simplified version does not dynamically adjust the number of pages in JavaScript
    // when the viewport changes for responsiveness. The CSS handles the visual layout,
    // but the JS navigation (how far it jumps) remains consistent.
});
