/*
輸入 n 印出 1+2-3+4-5+6...n 的算式與總和
一個數列的所有元素加起來就稱為「級數」，此為「發散級數」。
*/

DivergentSeries();
function DivergentSeries() {
  let integer = process.argv.slice(2, 3);
  console.log(integer);
  // 正則表達式 英文 負值 浮點數 零值
  let eliminate = /[a-zA-Z-\\d\.\\d]/;
  let nought = /^[0].*/;
  let invalidValue = eliminate.test(integer);
  let zero = nought.test(integer);

  if (invalidValue || zero) {
    console.log('請重新輸入有效的正整數');
    return;
  }

  // 陣列轉為有效數值
  let referenceNumber = Number(integer);

  //統計數值
  function statistic(referenceNumber) {
    let grandTotal = seriesSum(referenceNumber);
    console.log(`發散級數總和: ${grandTotal}`);
  }
  statistic(referenceNumber);

  // 發散級數遞迴總和
  function seriesSum(number) {
    let benchmark = 2;
    if (!number) {
      return number;
    } else if ((number > 1) && (number % benchmark)) {
      return -(number) + seriesSum(number - 1);
    } else {
      return number + seriesSum(number - 1);
    }
  }
}
