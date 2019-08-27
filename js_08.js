/*
試寫一程式，讓使用者輸入一正整數 n 值，
並撰寫一遞迴函數 function divi(n) 來求算當 n 值不斷除以 3 時，
最少要除多少次，小數點後第 2 位會等於 0。
*/

recursionSystem();
function recursionSystem() {
  try {
    const RECEIVEDATA = process.argv[2];
    let validData = formatData(RECEIVEDATA);
    let receiver = divideMachine(validData);
    const result = remainder(receiver);
    announced(result);
  }
  catch (e) {
    console.log(e.message);
  }
  finally {
    console.log('(๑•́ ₃ •̀๑) 遞迴函數，輸入數值不斷除以 3 時，最少幾次後，小數點第 2 位會等於 0 ？');
  }

  // 資料瞥除有效正整數以外所有數值
  function formatData(data) {
    const ELIMINATEDATA = /^0|[^\d]/;
    let invalidData = ELIMINATEDATA.test(data);
    if (invalidData) {
      throw new Error(`輸入值[${data}] => 格式錯誤，請重新輸入有效的正整數。`);
    } else {
      let validData = Number(data);
      return validData;
    }
  }

  // 遞迴運算器
  function divideMachine(number, roundTime = 0) {
    const ELIMINATEDATA = /\d*\.[0-9][0][0-9]*/;
    if (ELIMINATEDATA.test(number)) {
      console.log(`最終進行次數：總共 ${roundTime} 次。`);
      return number;
    } else {
      console.log(`累加次數：${roundTime} 次，=> 尚剩餘值：${number}`);
      roundTime++;
      return divideMachine(number / 3, roundTime);
    }
  }

  // 執行遞迴除法打印結果
  function remainder(number) {
    result = Number.parseFloat(number).toFixed(4);
    return result;
  }

  // 統計級數結果
  function announced(result) {
    console.log(`遞迴除法最終結果：${result}，跳出遞迴系統。`);
  }
}

//-----------------------------------------

// /*
// 試寫一程式，讓使用者輸入一正整數 n 值，
// 並撰寫一遞迴函數 function divi(n) 來求算當 n 值不斷除以 3 時，
// 最少要除多少次，小數點後第 2 位會等於 0。
// */

// let integer = process.argv.slice(2, 3);

// let dataFormat = /[a-zA-Z\-\.]/;
// let accurateData = dataFormat.test(integer);
// let referenceNumber = Number(integer);


// // 提示錯誤格式 字母 負值 浮點數 空值
// if (accurateData || !referenceNumber) {
//   console.log('格式錯誤，請重新輸入正整數');
//   return;
// }

// // 陣列轉為有效數值
// // console.log(`輸入正整數： ${referenceNumber}`);

// let roundTime = 0;
// let remainder = 0;
// let benchmark = 0.01;

// // 遞迴運算器
// function integerDivide(number) {
//   if (number < benchmark) {
//     console.log(`最終進行總次數： ${roundTime} 次`);
//     return number;
//   } else {
//     console.log(`已進行次數： ${roundTime} 次，尚剩餘值： ${number}`);
//     roundTime++;
//     return integerDivide(number / 3);
//   }
// }

// // 執行遞迴除法打印結果
// function divideＭachine(number) {
//   let remainder = integerDivide(number);
//   result = Number.parseFloat(remainder).toFixed(3);
//   console.log(`遞迴除法最終結果： ${result} 已小於基準值`);
// }

// divideＭachine(referenceNumber);