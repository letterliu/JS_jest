/*
寫一個遞迴函數
function umleven(n) 來求算 2*4 + 4*6 + 6*8...+(n-2)*n
(n最小為 4, 只會出現偶數)
*/

let integer = process.argv.slice(2, 3);
// console.log(integer);

// 正則表達式 英文 負值 浮點數 零值
let eliminate = /[a-zA-Z-\\d\.\\d]/;
let nought = /^[0].*/;
eliminate = eliminate.test(integer);
nought = nought.test(integer);

// 陣列轉為有效數值
let referenceValue = Number(integer);
//  標點符號
let punctuation = Number.isNaN(referenceValue);

// 判斷失效數值
if (eliminate || nought || punctuation || !referenceValue) {
  console.log('請重新輸入有效的正整數');
  return;
}

// 判斷 n 最小為 4 並為偶數值
if (referenceValue < 4 || referenceValue % 2) {
  console.log('請重新輸入大於或等於 4 以上偶數值');
  return;
}

console.log(`有效正整數： ${referenceValue}`);

// 執行打印整數總和
function integerSum(number) {
  let result = recursion(number);
  console.log(`遞迴函數總和： ${result}`);
}
integerSum(referenceValue);

// 遞迴運算器
function recursion(number) {
  if (!number) {
    return number;
  } else {
    return number * (number - 2) + recursion(number - 2);
  }
}







// let num = process.argv[2];
// num = Number(num);
// function peopleCount(num) {
//   let a = factorial(num);
//   console.log(a);
// }
// peopleCount(num);

// function factorial(num) {
//   if (num === 1) {
//     return num
//   } else {
//     return num * factorial(num - 1)
//   }
// }

// function factorial(num) {
//   if (!num) {
//     return num;
//   } else {
//     return num * (num - 2) + factorial(num - 2);
//   }
// }