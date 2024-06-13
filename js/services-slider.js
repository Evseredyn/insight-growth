$(document).ready(function() {
    $('.services__slider>.services__list').slick({
      slidesToShow: 1, // Кількість відгуків, які відображаються одночасно
      slidesToScroll: 1, // Кількість відгуків, які прокручуються за один раз
      speed: 500,
      easing: 'cubic-bezier(0.4,0,0.2,1)',
      // autoplay: true, // Автоматичне прокручування
      autoplaySpeed: 3000, // Затримка між автоматичним прокручуванням (у мілісекундах)
      infinite: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      draggable: false,
      // centerMode:true,
      arrows: true, // Відображати стрілки навігації
      responsive: [
        {
          breakpoint: 361, // Розмір екрану, на якому застосовуються ці налаштування
          settings: {
            slidesToShow: 1, // Кількість відгуків на планшеті
            autoplay: true,
          }
        },
        {
          breakpoint: 745,
          settings: {
            slidesToShow: 2,
            autoplay: true,
          }
        },
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });

    $('.services-slider__prev-button').click(function() {
        $('.services__slider>.services__list').slick('slickPrev');
    });
    $('.services-slider__next-button').click(function() {
        $('.services__slider>.services__list').slick('slickNext');
    });
  });