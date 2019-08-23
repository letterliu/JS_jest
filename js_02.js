/*
使用者輸入兩個整數，將它們分別除以 3，
判斷餘數是否相同，
若相同，則於螢幕上顯示「餘數相同」。
*/

/*
流程：1.條件順序 2.有效命名 3.排除因素 4.用戶操作 5.使用回饋
判斷事件： 1.同一事件(關聯) 2.不同事件(獨立)
排除： 1.負值 2.字串 3.未輸入及送出(空) 4.任何符號 5.整數
*/

module.exports = congruentNumber;

function congruentNumber(integerArray) {

  // let integerArray = process.argv.slice(2, 4);
  console.log(integerArray);

  // 正則表達式 英文 負值 浮點數
  let eliminate = /[a-zA-z-\\d\.\\d]/;
  let invalidValue = eliminate.test(integerArray);

  if (invalidValue) {
    console.log('請重新輸入有效的正整數');
    return;
  }

  //判斷餘數為 true false
  let benchmark = 3;
  let answer = integerArray.map(value => value % benchmark).reduce((accumulator, currentValue) => accumulator === currentValue);
  // console.log(answer);

  if (answer) {
    console.log('恭喜！條件符合餘數相同');
  } else {
    console.log('加油！請再挑戰一次');
  }
}
// )();



// let invalidValue = integerArray.every(value => value)
// let integerA = process.argv[2];
// let integerB = process.argv[3];
// let benchmark = 3;
// console.log(integerA);
// console.log(integerB);
// if (integerA % benchmark === integerB % benchmark) {
//   console.log('餘數相同');
// } else {
//   console.log('餘數不同');
// }
;