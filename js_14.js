
/*
細菌實驗中，原有 b 隻細菌，
每經過 20 分鐘細菌數量會增加為原來的2倍(2b)，
試寫一遞迴函數function twofold(b, m) 。
讓使用者輸入分鐘數 m，
並計算在沒有細菌死亡的狀況下，
m 分鐘後的細菌有幾隻。
(細菌線性成長)
*/

// Jest
module.exports = {
  twoFold,
  formatData,
  recursion,
  announced
};

const result = twoFold(process.argv.slice(2, 4));
console.info(result);

function twoFold(receivedata) {
  // 主程式，例外時拋出錯誤資訊
  try {
    const validData = formatData(receivedata);
    const contagion = recursion(validData[0], validData[1]);
    return announced(contagion, validData[0], validData[1]);
  }
  catch (e) {
    return e.message;
  }
  finally {
    console.info(`↑_(ΦwΦ;)Ψ 生化武器病菌爆發中，請立即終止按鈕封鎖全境。`);
  }
}

// 判斷格式是否兩個有效正整數
function formatData(data) {
  const ELIMINATEDATA = /[^\d]|^0$/;
  const invalidData = data.map(value => ELIMINATEDATA.test(value)).some(value => value);
  const validNull = data.includes('');
  if (invalidData || validNull || data.length !== 2) {
    throw Error(`輸入值[${data}] => 格式錯誤，請重新輸入兩個有效正整數。`);
  }
  return data.map(value => Number(value));
}

// 病毒2倍數成長，直到時間停止
function recursion(virus, countDown, period = 20) {
  if (countDown < period) return virus;
  return recursion(2 * virus, countDown - period);
}

// 宣佈病毒報告
function announced(contagion, virus, countDown) {
  console.info(`好想實驗中 ${virus} 隻病毒，經過 ${countDown} 分鐘，已倍速失控成 ${contagion} 隻病毒。`);
  return {
    virus: virus,
    countDown: countDown,
    contagion: contagion
  }
}

 // function cc(validData) {
  //   return validData.reduce((accumulator, value) => {
  //     const selectArray = [], countDown = validData[1], virus = validData[0];
  //     accumulator[value] = recursion(selectArray, virus, countDown);
  //     return accumulator;
  //   }, {});
  // }

  // 病毒2倍數成長，直到時間停止
  // function recursion(virus, countDown, period = 20) {
  //   if (countDown < period) {
  //     // console.log(selectArray);
  //     return virus;
  //     // return virus;
  //   }
  //   // selectArray.push(2 * virus);
  //   return recursion(2 * virus, countDown - period);
  // }