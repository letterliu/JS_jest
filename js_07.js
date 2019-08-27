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

const heartPattern = [
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

// 啟動轉角度機
rotateＭachine(heartPattern);
function rotateＭachine(pattern) {
  let variationPattern = rotateLeft(pattern);
  console.log(variationPattern);
  // const result = variationPattern.map(pattern => pattern.reverse());
  // result.forEach(element => console.log(element));
}

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