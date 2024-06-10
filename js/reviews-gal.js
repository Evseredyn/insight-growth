const reviewsSection = document.querySelector('.carusel');
const reviewsList = reviewsSection.querySelector('.reviews__list');
const reviewItems = reviewsList.querySelectorAll('.reviews__item');
const prevBtn = reviewsSection.querySelector('.carusel::before');
const nextBtn = reviewsSection.querySelector('.carusel::after');

let currentIndex = 0;
const itemWidth = reviewItems[0].offsetWidth;

function moveLeft() {
  currentIndex = (currentIndex - 1 + reviewItems.length) % reviewItems.length;
  reviewsList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function moveRight() {
  currentIndex = (currentIndex + 1) % reviewItems.length;
  reviewsList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

prevBtn.addEventListener('click', moveLeft);
nextBtn.addEventListener('click', moveRight);