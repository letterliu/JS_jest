/*
試寫一程式，讓使用者輸入一正整數 n 值，
並撰寫一遞迴函數 function divi(n) 來求算當 n 值不斷除以 3 時，
最少要除多少次，小數點後第 2 位會等於 0。
*/

// Jest
module.exports = {
  recursionSystem,
  formatData,
  divideMachine,
  remainder,
  announced
};

// 接收資料打印結果
const result = recursionSystem(process.argv[2]);
console.info('%s', result);

function recursionSystem(receivedata) {
  // 主程式，例外時拋出錯誤資訊
  try {
    const validData = formatData(receivedata);
    const receiver = divideMachine(validData);
    const answer = remainder(receiver);
    return announced(answer);
  }
  catch (e) {
    return e.message;
  }
  finally {
    console.info('(๑•́ ₃ •̀๑) 遞迴函數，輸入數值不斷除以 3 時，最少幾次後，小數點第 2 位會等於 0 ？');
  }
}

// 資料瞥除有效正整數以外所有數值
function formatData(data) {
  const ELIMINATEDATA = /[^\d]|^0$/;
  const invalidData = ELIMINATEDATA.test(data);
  if (invalidData || !data.trim()) {
    throw Error(`輸入值[${data}] => 格式錯誤，請重新輸入有效的正整數。`);
  }
  return Number(data);
}

// 遞迴運算器
function divideMachine(number, roundTime = 0) {
  const ELIMINATEDATA = /\d*\.[0][0][0-9]*/;
  if (ELIMINATEDATA.test(number)) {
    return {
      number: number,
      roundTime: roundTime
    };
  }
  console.info(`累加次數：${roundTime} 次，=> 尚剩餘值：${number}`);
  roundTime++;
  return divideMachine(number / 3, roundTime);
}

// 執行遞迴除法打印結果
function remainder(receiver) {
  const number = Number.parseFloat(receiver.number).toFixed(4);
  return {
    number: number,
    roundTime: receiver.roundTime
  }
}

// 統計級數結果
function announced(answer) {
  console.info(new Map(Object.entries(answer)));
  return `最終進行次數：總共 ${answer.roundTime} 次，遞迴除法最終結果：${answer.number}，跳出遞迴系統。`;
}