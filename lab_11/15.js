// Создать функцию, которая возвращает аргумент, переданный ей в качестве параметра.
// Если аргументов нет, то вывести в консоль "Функция вызвана без параметров"

function getFirstArgument(firstArg = 'Функция вызвана без параметров') {
  return firstArg
}

console.log(getFirstArgument(42)) //42
console.log(getFirstArgument("foo")) // foo
console.log(getFirstArgument(42, "foo")) // 42
console.log(getFirstArgument()) // Функция вызвана без параметров\n undefined