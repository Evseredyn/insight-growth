$(document).ready(function() {
    $('.reviews__slider>.reviews__list').slick({
      slidesToShow: 1, // Кількість відгуків, які відображаються одночасно
      slidesToScroll: 1, // Кількість відгуків, які прокручуються за один раз
      speed: 250,
      easing: 'cubic-bezier(0.4,0,0.2,1)',
      autoplay: true, // Автоматичне прокручування
      autoplaySpeed: 3000, // Затримка між автоматичним прокручуванням (у мілісекундах)
      // infinite: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      draggable: false,
      // centerMode:true,
      arrows: true, // Відображати стрілки навігації
      prevArrow: '<button class="reviews-slider__prev-button"></button>', // Кнопка "Попередній"
      nextArrow: '<button class="reviews-slider__next-button"></button>', // Кнопка "Наступний"
      responsive: [
        {
          breakpoint: 361, // Розмір екрану, на якому застосовуються ці налаштування
          settings: {
            slidesToShow: 1, // Кількість відгуків на планшеті
          }
        },
        {
          breakpoint: 745,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1921,
          settings: {
            slidesToShow: 4,
          }
        }
      ]
    });
  });