$(document).ready(function() {
    $('.reviews-slider').slick({
      slidesToShow: 1, // Кількість відгуків, які відображаються одночасно
      slidesToScroll: 1, // Кількість відгуків, які прокручуються за один раз
      autoplay: true, // Автоматичне прокручування
      autoplaySpeed: 5000, // Затримка між автоматичним прокручуванням (у мілісекундах)
      arrows: true, // Відображати стрілки навігації
      prevArrow: '<button class="slick-prev">Previous</button>', // Кнопка "Попередній"
      nextArrow: '<button class="slick-next">Next</button>', // Кнопка "Наступний"
      responsive: [
        {
          breakpoint: 768, // Розмір екрану, на якому застосовуються ці налаштування
          settings: {
            slidesToShow: 2, // Кількість відгуків на планшеті
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3, // Кількість відгуків на десктопі
          }
        }
      ]
    });
  });