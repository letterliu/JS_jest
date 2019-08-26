/*
寫一個遞迴函數
function umleven(n) 來求算 2*4 + 4*6 + 6*8...+(n-2)*n
(n最小為 4, 只會出現偶數)
*/

class EvenError extends Error {
  constructor(msg) {
    super(msg);
  }
}

recursionGame();
function recursionGame() {
  try {
    const RECEIVEDATA = process.argv[2];
    let validData = formatData(RECEIVEDATA);
    let referenceNumber = evenNumber(validData);
    const result = recursionSum(referenceNumber);
    statistic(result);
  }
  catch (e) {
    if (e instanceof EvenError) {
      console.log(e.message);
    } else {
      console.log(e.message);
    }
  }
  finally {
    console.log('ヽ(✿ﾟ▽ﾟ)ノ 好想遞迴函數遊戲，全新上架中。');
  }

  // 資料保留有效正整數以外所有數值
  function formatData(data) {
    const ELIMINATEDATA = /[^0-9]/;
    let invalidData = ELIMINATEDATA.test(data);
    if (invalidData) {
      throw Error(`輸入值[${data}] => 格式錯誤，請重新輸入有效的正整數。`);
    } else {
      let validData = Number(data);
      return validData;
    }
  }

  // 判斷 n 最小為 4 並為偶數正整數
  function evenNumber(integer) {
    const ELIMINATEVALUE = /^[0-3]{1}$/;
    let invalidValue = ELIMINATEVALUE.test(integer);
    if (invalidValue || integer % 2) {
      throw new EvenError(`輸入值[${integer}] => 請重新輸入大於或等於 4 以上偶數值。`);
    } else {
      console.log(`輸入偶數值[${integer}] => 符合條件運算中。`);
      return integer;
    }
  }

  // 遞迴運算器
  function recursionSum(number) {
    if (!number) {
      return number;
    } else {
      return number * (number - 2) + recursionSum(number - 2);
    }
  }

  // 執行打印整數總和
  function statistic(result) {
    console.log(`遞迴函數總和：${result}`);
  }
}