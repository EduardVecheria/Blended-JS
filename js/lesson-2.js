//TODO: № 1  ============================================================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
// //Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];

// function findSmallerNumber() {
//     return Math.min(...numbers);
// };

// console.log(findSmallerNumber(numbers));


//TODO: № 2 =============================================================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function calculateAverage(...args) {
//    let sum = 0;
//   let count = 0;
//   for (const arg of args) {
//     if (typeof arg === "number") {
//       sum += arg;
//       count += 1;
//       }
//     }
//   return sum / count;
// }
// console.log(calculateAverage(2, 4, 6, 8, 10, 12));
// console.log(calculateAverage(15, "aaaa", 25));
// console.log(calculateAverage("aaa", "bbbb", "cccc"));

//TODO: № 3  ============================================================
// Напишіть функцію min(a,b), яка повертає менше чисело з a і b.

// function min(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         return "ERROR";
//     }
//     return a < b ? a : b;
// }
// console.log(min(5, 10)); // 5
// console.log(min("a", 10)); // 10

//TODO: № 4 ==============================================================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumAdjacent(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length - 1 ; i++) {
//         const sum = arr[i] + arr[i + 1];
//         result.push(sum);
//     }
//     return result;
// }
// console.log(sumAdjacent(someArr));




//TODO: № 5 ==============================================================
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//const array = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// function logItems(array) {
//     for (let i = 0; i < array.length; i++){
//         console.log(`${i+1} - ${array[i]}`);
//     }
// }
// console.log(logItems(['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']));


// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
// };
  
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const keys = Object.keys(user);


// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

//   const values = Object.values(salaries);
// let sum = 0;
// for (const value of values) {
//     sum += value;
// }
// console.log(sum); // 1730

// function vasii(key, obj) {
//     const values = Object.keys(obj);
//     for (const value of values) {
//         if (key === value) {
//             return true;
//         }
//     }
//     return false;
// };

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };
// console.log(vasii("Poly", salaries)); // true

// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
//   return obj;
// };

// const menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// console.log(multiplyNumeric(menu));