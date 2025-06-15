// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// const doubleNum = numbers.map((number) => number ** 2);
// console.log(doubleNum);

// Task 2 ----------------------------------------------------

// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const array = (arr) => 
//     data.flatMap(item => item.values);


// console.log(array(data));

// Task 3 ---------------

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const peopleNew = item => item.some(person => person.age < 20);

// console.log(peopleNew(people));

// Task 4----------------------------------

// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const  result = numbers.every (num => num % 2 ===0);

// console.log(result);

// Task 5 



// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const result = numbers.find(num => num % 2 !== 0);

// console.log(result);

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const result = numbersArray.toSorted((a, b) => a - b);
// console.log(result);


// Task 7 

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const result = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(result);

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// const sumUser = user.filter(obj => obj.age > 20);

// console.log(sumUser);


// // інший приклад
// // const getUser = (obj) => obj.filter(el => el.age > 20);

// // console.log(getUser(user));


// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sumNum = numbers.reduce((sum, number) => sum + number, 0);

// console.log(sumNum);
