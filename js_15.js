/*
有一輛搬運車，限重1噸，
啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg，
在不將空間列入考慮的情況下，
設一陣列 sport[3] 用來儲存三種器材的數量，
以一亂數決定每次要搬到車上的器材為何，
當超過限重時即停止搬運，
並列印出三種器材的個數及總重量。
*/

let dumbbellBox = 30;
let horizontalBarBox = 20;
let Treadmill = 50;

// let sport = [0, 0, 0];

// function randomSort(a, b) {
//   return Math.random() > 0.5 ? 1 : -1;
// }

// var arr = [30, 20, 50];
// let a = arr.sort(randomSort);
// console.log(a);


var arr = [30, 20, 50];

let c = 0;
let sum = 0;
let sum1 = 0;
let sum2 = 0;
for (let i = 1; c <= 1000; i++) {
  let b = Math.ceil(Math.random() * 3) - 1;
  if (b == 0) {
    sum = sum + 1;
  } else if (b == 1) {
    sum1 = sum1 + 1;
  } else {
    sum2 = sum2 + 1;
  }
  c = c + arr[b];
  if (c > 1000) {
    break;
  }
  console.log(`編號${b + 1}: 總重：${c}`);
}
console.log(`啞鈴總次數：${sum}`);
console.log(`單槓總次數：${sum1}`);
console.log(`跑步機總次數：${sum2}`);


// function shuffle() {
//   for (var i = tempArray.length - 1; i >= 0; i--) {
//     var randomIndex = Math.floor(Math.random() * i);
//     var itemAtIndex = tempArray[randomIndex];
//     tempArray[randomIndex] = tempArray[i];
//     tempArray[i] = itemAtIndex;
//   }
//   return tempArray;
// }
// var tempArray = [30, 20, 50];
// console.log(shuffle());