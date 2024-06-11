const reviewsSection = document.querySelector('.carusel');
const reviewsList = reviewsSection.querySelector('.reviews__list');
const reviewItems = reviewsList.querySelectorAll('.reviews__item');
const nextButton = document.querySelector('.carusel__next-button');
const prevButton = document.querySelector('.carusel__prev-button');

function showCurrentReview() {
  reviewsItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

let intervalId;

function nextReview() {
  currentIndex = (currentIndex + 1) % reviewsItems.length;
  showCurrentReview();
  clearInterval(intervalId);
  intervalId = setInterval(nextReview, 5000);
}

function prevReview() {
  currentIndex = (currentIndex - 1 + reviewsItems.length) % reviewsItems.length;
  showCurrentReview();
}

let currentIndex = 0;

function showCurrentReview() {
  reviewsItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('visible');
    } else {
      item.classList.remove('visible');
    }
  });
}

nextButton.addEventListener('click', nextReview);
prevButton.addEventListener('click', prevReview);

reviewsSection.addEventListener('click', (event) => {
  if (event.target === nextButton) {
    nextReview();
  } else if (event.target === prevButton) {
    prevReview();
  }
});

// let currentIndex = 0;
// const itemWidth = reviewItems[0].offsetWidth;
// let slideInterval;

// function moveLeft() {
//   currentIndex = (currentIndex - 1 + reviewItems.length) % reviewItems.length;
//   reviewsList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
// }

// function moveRight() {
//   currentIndex = (currentIndex + 1) % reviewItems.length;
//   reviewsList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
// }

// function autoSlide() {
//   slideInterval = setInterval(moveRight, 3000); // Гортання вправо кожні 3 секунди
// }

// prevBtn.addEventListener('click', moveLeft);
// nextBtn.addEventListener('click', moveRight);

// document.addEventListener('keydown', (event) => {
//   if (event.code === 'ArrowLeft') {
//     moveLeft();
//   } else if (event.code === 'ArrowRight') {
//     moveRight();
//   }
// });

// window.addEventListener('load', autoSlide);

