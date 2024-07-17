$(document).ready(function() {
    $('.reviews__slider>.reviews__list').slick({
      slidesToShow: 5, // Кількість відгуків, які відображаються одночасно
      slidesToScroll: 1, // Кількість відгуків, які прокручуються за один раз
      speed: 500,
      easing: 'cubic-bezier(0.4,0,0.2,1)',
      autoplay: true, // Автоматичне прокручування
      autoplaySpeed: 3000, // Затримка між автоматичним прокручуванням (у мілісекундах)
      infinite: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      draggable: false,     
      initialSlide: 0,
      infinite: false,
      // centerMode:true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1921,
          settings: {
            slidesToShow: 3.3,
          }
        },
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 3.2,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2.9,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2.2,
          }
        },
        {
          breakpoint: 428,
          settings: {
            slidesToShow: 1.2,
          }
        },
        {
          breakpoint: 376,
          settings: {
            slidesToShow: 1, 
          }
        },
        {
          breakpoint: 321,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });

    $('.reviews-slider__prev-button').click(function() {
        $('.reviews__slider>.reviews__list').slick('slickPrev');
    });
    $('.reviews-slider__next-button').click(function() {
        $('.reviews__slider>.reviews__list').slick('slickNext');
    });
  });

  