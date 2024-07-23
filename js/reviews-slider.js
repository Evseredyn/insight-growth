$(document).ready(function() {
    $('.reviews__slider>.reviews__list').slick({
      slidesToShow: 1, // Кількість відгуків, які відображаються одночасно
      slidesToScroll: 1, // Кількість відгуків, які прокручуються за один раз
      speed: 500,
      easing: 'cubic-bezier(0.4,0,0.2,1)',
      autoplay: false, // Автоматичне прокручування
      autoplaySpeed: 3000, // Затримка між автоматичним прокручуванням (у мілісекундах)
      infinite: false,
      pauseOnFocus: true,
      pauseOnHover: true,
      draggable: false,
      arrows: false, // Не відображати стрілки навігації
      responsive: [
        {
          breakpoint: 420, // Розмір екрану, на якому застосовуються ці налаштування
          settings: {
            slidesToShow: 1, // Кількість відгуків на мобільному
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1.2, // Кількість відгуків на планшеті
          }
        },
        {
          breakpoint: 744,
          settings: {
            slidesToShow: 1.4, // Кількість відгуків на планшеті
          }
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 2.4, // Кількість відгуків на планшеті
          }
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1660,
          settings: {
            slidesToShow: 3.3,
            // centerPadding: '120px'
          }
        },
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 4.2,
          }
        },
        {
          breakpoint: 1921,
          settings: {
            slidesToShow: 4.3,
          }
        }
      ]
    });

    $('.reviews-slider__prev-button').click(function() {
        $('.reviews__slider>.reviews__list').slick('slickPrev');
    });
    $('.reviews-slider__next-button').click(function() {
        $('.reviews__slider>.reviews__list').slick('slickNext');
    });
  });