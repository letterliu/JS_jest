/*
印出下圖，並轉 90°
  ** ** 
 ******* 
*********
*********
 *******
  *****
   ***
    *
*/

let heartPattern = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', '*', '*', ' ', '*', '*', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', '*', '*', ' '],
  ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
  [' ', '*', '*', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', '*', '*', '*', '*', '*', ' ', ' '],
  [' ', ' ', ' ', '*', '*', '*', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ']
];

// 陣列向左轉動90度
function rotateLeft(array) {
  let receiver = [[], [], [], [], [], [], [], [], []];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      receiver[j][i] = array[i][j];
    }
  }
  return receiver;
}

// 啟動轉角度機
function RotateＭachine(array) {
  let variationPattern = rotateLeft(array);
  let result = variationPattern.map(pattern => pattern.reverse());
  console.log(result);
}

RotateＭachine(heartPattern);











// function RotateRight(array) {
//   let newArr = [[], [], [], [], [], [], [], [], []];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       // newArr[j][len - 1 - i] = arr[i][j];
//       newArr[j][i] = array[i][j];
//     }
//   }
//   return newArr;
// }

// console.log(test(a));













// let n = 10;
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= n - i; j++) {
//     document.write("&nbsp;");
//   }
//   for (k = 1; k <= 2 * i - 1; k++) {
//     document.write("*");
//   }
//   document.write("<br/>");
// }
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= i; j++) {//要去掉下半部分的最上一行，第二行变为第一行,每行最前面的空格加一个，所以j<=i,而不是j<=j-1;
//     document.write("&nbsp;");
//   }
//   for (k = 1; k <= 2 * (n - i) - 1; k++) {//第一行为原来第二行，星号个数也随之变化;
//     document.write("*");
//   }
//   document.write("<br/>");
// }

// let j, z = 1, n = 19;
// Array(n).fill(0).map((a, i) => {
//   z > n ? j = j - 2 : j = z;
//   z += 2;
//   return ' '.repeat((n - j) / 2) + '*'.repeat(j) + '\n';
// }).join('');
