// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];

// styles.push("rock-n-roll");
// const index = styles.indexOf("blues");

// if (index === -1) {
//   console.log("Element not found");
// } else {
//   styles[index] = "classic";
// }

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// logItems(styles);

// for (const style of styles) {
//   console.log(style);
// }

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(logins) {
//   const nameLogin = prompt("Введіть ім'я:");
//   for (const login of logins) {
//     if (login === nameLogin) {
//       return alert(`Welcome, ${login}!`);
//     }
//   }
//   alert(`User not found`);
// }
// checkLogin(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function calculateAverage(...args) {
//   let summa = 0;
//   let count = 0;
//   for (const arg of args) {
//     if (typeof arg === "number") {
//       summa += arg;
//       count += 1;
//       //   console.log(count);
//     }
//   }
//   return summa / count;
// }

// console.log(calculateAverage(1, 2, 3, 4, 10, "lalala"));

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};

user.mood = "happy";
user["mood"] = "happy";
