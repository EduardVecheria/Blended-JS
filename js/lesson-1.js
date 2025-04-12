// // //TODO: № 2 на тернарник =============================================
// // // Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно' через тернарник
// // let a = 10;
// // const result = a === 10 ? 'Вірно' : 'Невірно';
// // console.log(result);
// // //TODO: № 3 на if...else if ===============================================
// // // У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// // // Попадає це число (у першу, другу, третю або четверту).
// // let min = 25;
// // if (min >= 0 && min <= 14) {
// //     console.log('Перша чверть години');
// // }
// // else if (min >= 15 && min <= 29) {
// //     console.log('Друга чверть години');
// // }
// // else if (min >= 30 && min <= 44) {
// //     console.log('Третя чверть години');
// // }
// // else if (min >= 45 && min <= 59) {
// //     console.log('Четверта чверть години');
// // }
// // else {
// //     console.log('Введіть число від 0 до 59');
// // }
// //   //TODO: № 4 на switch ===========================================
// // // Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// // // значення '1', то у змінну result запишемо 'зима', якщо має значення
// // // '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.
// // let num = 3;
// // switch (num) {
// //     case 1:
// //         console.log('Зима');
// //         break;
// //     case 2:
// //         console.log('Весна');
// //         break;
// //     case 3:
// //         console.log('Літо');
// //         break;
// //     case 4:
// //         console.log('Осінь');
// //         break;
// //     default:
// //         console.log('Введіть число від 1 до 4');
// // }
// //TODO: № 5 на while ===================================================
// // скористаємося циклом while та виведіть у консоль числа від 0 до 20
// // let i = 0;
// // while(i<=20){
// //     console.log(i);
// //     i++;
// // }
// //TODO: № 6 на for ===================================
// //За допомогою циклу for додайте всі парні числа від min до max
// // function num(min, max) {
// //   let sum = 0;
// //   for (let i = min; i <= max; i++) {
// //     if (i % 2 === 0) {
// //       sum += i;
// //     }
// //   }
// //   return sum;
// // }
// // console.log(num(1, 10));

// // TODO: № 7 на for =====================================================
// //Напишіть цикл, який виводить у консоль
// // числа від max до min за спаданням
// // Додайте усі парні числа від min до max

// function wan(max, min) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   console.log("Summa:", sum);
// }
// wan(10, 1);

// TODO: № 8  =========================================================
// Напишіть if..else, що відповідає наступному switch:
// const browser = "Opera"
// if (browser === 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert('Okay we support these browsers too');
// } else{ alert( 'We hope that this page looks ok!' );}
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }