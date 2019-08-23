/*
好想樂園的門票一張400元，
優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，
試用「邏輯運算子」寫一程式，
讓使用者自行輸入年齡，並判斷門票價錢。
*/

(function ticketingSystem() {

  let exactAge = process.argv.slice(2, 3);
  // 正則表達式 英文 負值 浮點數
  let eliminate = /[a-zA-Z-\\d\.\\d]/;
  let invalidValue = eliminate.test(exactAge);

  if (invalidValue) {
    console.log('請重新輸入有效的正整數');
    return;
  }

  // 一般票價 優惠票(老人、兒童)
  let admission = 400;
  let concessionTicket = 200;
  let childhood = 6;
  let seniorCitizen = 65;
  console.log(`入場年齡：${exactAge} 歲`);
  if (!(childhood < exactAge && exactAge < seniorCitizen)) {
    console.log(`優待票價：${concessionTicket} 元`);
  } else {
    console.log(`全票票價：${admission} 元`);
  }
}
)();


// (function peopleCount() {

//   let exactAge = process.argv[2];
//   let ticket = 400;
//   let childhood = 6;
//   let seniorCitizen = 65;
//   console.log(exactAge);
//   if (childhood >= exactAge || exactAge >= seniorCitizen) {
//     console.log('半票200元');
//   } else {
//     console.log('全票400元');
//   }
// }
// )();