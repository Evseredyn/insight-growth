const questions = document.querySelectorAll('.questions__item');

// function closeAllAnswers() {
//   questionItems.forEach(item => {
//     const answer = item.querySelector('.questions__answer');
//     answer.classList.remove('open');
//   });
// }

questions.forEach(question => {
  const header = question.querySelector('.questions__inner');
  const answer = question.querySelector('.questions__answer');

  header.addEventListener('click', () => {
    // closeAllAnswers(); // Закриваємо всі відповіді
    answer.classList.toggle('open'); // Відкриваємо/закриваємо поточну відповідь
  });

  // header.addEventListener('click', () => {
  //   if (answer.classList.contains('open')) {
  //     // Якщо відповідь вже відкрита, закриваємо її
  //     answer.classList.remove('open');
  //   } else {
  //     // Інакше закриваємо всі відповіді і відкриваємо поточну
  //     closeAllAnswers();
  //     answer.classList.add('open');
  //   }
  // });
});