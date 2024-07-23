$(document).ready(function() {
    $('.reviews__slider>.reviews__list').slick({
      slidesToShow: 1, // Кількість відгуків, які відображаються одночасно
      slidesToScroll: 1, // Кількість відгуків, які прокручуються за один раз
      speed: 500,
      easing: 'cubic-bezier(0.4,0,0.2,1)',
      autoplay: true, // Автоматичне прокручування
      autoplaySpeed: 3000, // Затримка між автоматичним прокручуванням (у мілісекундах)
      infinite: false,
      pauseOnFocus: true,
      pauseOnHover: true,
      draggable: false,
      arrows: false, // Не відображати стрілки навігації
      responsive: [
        {
          breakpoint: 360, // Розмір екрану, на якому застосовуються ці налаштування
          settings: {
            // infinite: true,
            slidesToShow: 1, // Кількість відгуків на мобільному
          }
        },
        {
          breakpoint: 744,
          settings: {
            // infinite: false,
            slidesToShow: 1, // Кількість відгуків на планшеті
          }
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 2.15,
          }
        },
        // {
        //   breakpoint: 1441,
        //   settings: {
        //     slidesToShow: 3.3,
        //     // centerPadding: '120px'
        //   }
        // },
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 3.3,
          }
        },
        {
          breakpoint: 1921,
          settings: {
            slidesToShow: 4.2,
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