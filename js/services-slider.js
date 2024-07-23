$(document).ready(function() {
    $('.services__slider>.services__list').slick({
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
      // initialSlide: 0, //починаємо з першого
      arrows: false, // Не відображати стрілки навігації
      responsive: [
        {
          breakpoint: 481, // Розмір екрану, на якому застосовуються ці налаштування
          settings: {
            slidesToShow: 1, // Кількість відгуків на мобільному
            // autoplay: true,
            // centerMode: true,
            // centerPadding: '15px',
          }
        },
        {
          breakpoint: 600,
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
        // {
        //   breakpoint: 900,
        //   settings: {
        //     slidesToShow: 2.5, // Кількість відгуків на планшеті
        //     // autoplay: true,
        //     // initialSlide: 0,
        //     infinite: false
        //   }
        // },
        {
          breakpoint: 1090,
          settings: {
            slidesToShow: 2.2,
          }
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slideWidth: 380, // Ширина слайда 380px
            centerMode: true,
            // centerPadding: '120px'
          }
        },
        {
          breakpoint: 1921,
          settings: {
            slidesToShow: 4,
            slideWidth: 400, // Ширина слайда 400px
            // centerMode: true, // Центрувати активний слайд
            // centerPadding: '100px' // Додати відступ 40px праворуч і ліворуч
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

  // $('.your-carousel').slick({
  //   slidesToShow: 1, // Показувати по одному слайду
  //   slideWidth: 400, // Ширина слайда 400px
  //   centerMode: true, // Центрувати активний слайд
  //   centerPadding: '40px' // Додати відступ 40px праворуч і ліворуч
  // });

  // cssEase: 'linear', // Рівномірна анімація переходу
  // centerPadding: '60px', // Початковий відступ для центрованих слайдів
  // cssEase: function(a, b, c) { // Функція для налаштування відступу
  //   if (c < b) {
  //     // Якщо слайд пересувається вліво, зменшити відступ
  //     return 'margin-left: -' + (60 + (b - c) * 80) + 'px;';
  //   } else {
  //     // Якщо слайд пересувається вправо, збільшити відступ
  //     return 'margin-left: -' + (60 - (c - b) * 80) + 'px;';
  //   }
  // }