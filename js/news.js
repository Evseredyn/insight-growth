const questions = document.querySelectorAll('.news__item');

questions.forEach(question => {
  const header = question.querySelector('.news__inner');
  const answer = question.querySelector('.news__answer');

  header.addEventListener('click', () => {
    answer.classList.toggle('open'); // Відкриваємо/закриваємо поточну відповідь
  });
});