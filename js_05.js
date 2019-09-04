/*
寫一個遞迴函數
function umleven(n) 來求算 2*4 + 4*6 + 6*8...+(n-2)*n
(n最小為 4, 只會出現偶數)
*/

// 新增newError模式
class evenError extends Error {
  constructor(msg) {
    super(msg);
  }
}

// 接收資料打印結果
const result = recursionGame(process.argv[2]);
console.info('%s', result);

function recursionGame(receivedata) {
  // 主程式，例外時拋出錯誤資訊
  try {
    const validData = formatData(receivedata);
    const referenceNumber = evenNumber(validData);
    const answer = recursionSum(referenceNumber);
    return statistic(answer);
  }
  catch (e) {
    if (e instanceof evenError) return e.message;
    return e.message;
  }
  finally {
    console.info('ヽ(✿ﾟ▽ﾟ)ノ 好想遞迴函數遊戲，全新上架中。');
  }

  // 資料瞥除有效正整數以外所有數值
  function formatData(data) {
    const ELIMINATEDATA = /[^0-9]/;
    const invalidData = ELIMINATEDATA.test(data);
    if (invalidData || !data.trim()) {
      throw Error(`輸入值[${data}] => 格式錯誤，請重新輸入有效的正整數。`);
    }
    return Number(data);
  }

  // 判斷 n 最小為 4 並為偶數正整數
  function evenNumber(integer) {
    const ELIMINATEVALUE = /^[0-3]{1}$/;
    const invalidValue = ELIMINATEVALUE.test(integer);
    if (invalidValue || integer % 2) {
      throw new evenError(`輸入值[${integer}] => 請重新輸入大於或等於 4 以上偶數值。`);
    }
    console.info(`輸入偶數值[${integer}] => 符合條件運算中。`);
    return integer;
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
  function statistic(answer) {
    return `遞迴函數總和：${answer}`;
  }
}