/*
好想健身房新開幕，每期會費500元，
第一期79折，每滿五期再折200元，
請讓使用者自行輸入所需期數，
並利用do while計算，印出總費用。
*/

const periods = process.argv[2];
// console.log(periods);

let membershipDues = 500;
let cashDiscount = 79 / 100;
let bonusPoint = 200;

let i = 1;
let sum = 0;

do {
  if (i === 1) {
    sum = membershipDues * cashDiscount;
    console.log('新會員獨享禮 79 折');
  } else {
    sum += membershipDues;
  }
  if (!(i % 5)) {
    sum -= bonusPoint;
    console.log('每滿五期，會員折扣金 200 元');
  }
  i++;
} while (i <= periods);

console.log(`報名總期數：${periods} 期，總金額：${sum} 元`);





// function test(periods, result) {
//   if (periods) {
//     result = memberDues * discount;
//   }
//   for (let i = 2; i <= periods; i++) {
//     if (!(i % 5)) {
//       result = result - bonus;
//     }
//     result = result + memberDues;
//   }
//   console.log(result);

// }
// test(periods);
