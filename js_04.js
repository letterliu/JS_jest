/*
輸入 n 印出 1+2-3+4-5+6...n 的算式與總和
一個數列的所有元素加起來就稱為「級數」，此為「發散級數」。
*/

// 接收資料打印結果
const result = DivergentSeries(process.argv[2]);
console.info('%s', result);

function DivergentSeries(receivedata) {
  // 主程式，例外時拋出錯誤資訊
  try {
    const referenceNumber = formatData(receivedata);
    const answer = seriesSum(referenceNumber);
    return statistic(answer);
  }
  catch (e) {
    return e.message;
  }
  finally {
    console.info('(๑•̀ω•́)ノ好想發散級數遊戲，全新挑戰。');
  }

  function formatData(data) {
    // 正則表達式 資料瞥除有效正整數以外所有數值 
    const ELIMINATEDATA = /[^0-9]|^0$/;
    const invalidData = ELIMINATEDATA.test(data);
    if (invalidData) {
      throw Error(`[${data}] 格式錯誤，請重新輸入有效的正整數。`);
    }
    const validData = Number(data);
    console.info(`輸入有效數值：${validData}`);
    return validData;
  }

  // 發散級數遞迴
  function seriesSum(integer) {
    if (!integer) {
      return integer;
    } else if ((integer > 1) && (integer % 2)) {// 數字 1 是特例，判斷奇數遞迴
      return -(integer) + seriesSum(--integer);
    } else {
      return integer + seriesSum(--integer);// 判斷偶數遞迴
    }
  }

  // 統計級數結果
  function statistic(answer) {
    return `發散級數總和: ${answer}`;
  }
}
