// Get all carousels on the page
const carousels = document.querySelectorAll('[data-carousel]');

carousels.forEach(carousel => {
  const container = carousel.querySelector('.carousel-container');
  const images = container.querySelectorAll('img');
  const prevButton = carousel.querySelector('[data-carousel-prev]');
  const nextButton = carousel.querySelector('[data-carousel-next]');
  let currentIndex = 0;

  // Move slides function
  function moveSlide(direction) {
    const totalImages = images.length;
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const offset = -currentIndex * 100;
    container.style.transform = `translateX(${offset}%)`;
  }

  // Add event listeners for navigation
  prevButton.addEventListener('click', () => moveSlide(-1));
  nextButton.addEventListener('click', () => moveSlide(1));

  // Auto-play for this carousel
  let autoPlay = setInterval(() => moveSlide(1), 3000);

  // Pause auto-play on hover
  carousel.addEventListener('mouseover', () => clearInterval(autoPlay));
  carousel.addEventListener('mouseout', () => autoPlay = setInterval(() => moveSlide(1), 3000));
});