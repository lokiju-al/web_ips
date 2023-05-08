// Вывести n чисел в не четной последовательность 1 3 5 7 ... (не четность определяется i % 2 === 1).
// Для хранения результата использовать строку

function odd_sequence(number) {
  let final_string = ''
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 1) {
      final_string += i;
    }
  }
  console.log(final_string)
}

odd_sequence(11);