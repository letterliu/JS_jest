
/*
使用者輸入兩個整數，將它們分別除以 3，
判斷餘數是否相同，
若相同，則於螢幕上顯示「餘數相同」。
*/

// Jest
module.exports = {
  congruentNumber: isCongruentNumber,
  formatData: confirmDataType,
  validateData: isInIntervalsOfNaturalNumbersWithoutZero,
  congruentEqual: isCongruentEqual,
  revealAnswer
};

// 新增newError模式
class FormatError extends Error {
  constructor(msg) {
    super(msg);
    this.msg = msg;
  }
  log() {
    return 'FormatError: ' + this.msg;
  }
}

// 接收資料打印結果
function main(argv) {
  const result = isCongruentNumber(argv);
  console.info('%s', result);
}

main(process.argv.slice(2));

function isCongruentNumber(receivedata) {
  // 主程式，例外時拋出錯誤資訊
  try {
    confirmDataType(receivedata);
    isInIntervalsOfNaturalNumbersWithoutZero(receivedata);
    const rightNumbers = transformDataTypeToNumber(receivedata);
    const answer = isCongruentEqual(rightNumbers);

    return revealAnswer(answer);
  }
  catch (e) {
    if (e instanceof FormatError) return e.log();
    return e.message;
  }
  finally {
    console.info('(つ´ω`)つ 好想餘數遊戲機，歡迎勇者挑戰！');
  }
}

function transformDataTypeToNumber(receivedata) {
  return receivedata.map(value => Number(value));
}

// 過濾空值以外，是否輸入兩個數值。
function confirmDataType(data) {
  const invalidLength = data.length !== 2;
  if (invalidLength) {
    throw new FormatError(`[${data}] 請重新輸入兩筆資料。`);
  }

  const isEmptyString = data.some(value => !value.trim());//.some(value => value);
  if (isEmptyString) {
    throw new FormatError(`[${data}] 帶有空字串。`);
  }
  // return data;
}

function isInIntervalsOfNaturalNumbersWithoutZero(data) {
  // 正則表達式 排除正負整數以外所有值，包含過濾零。
  const NOT_NUMBER_OR_NOT_ZERO = /[^\d-]|^0$/;
  const hasAnyString = data.some(value => NOT_NUMBER_OR_NOT_ZERO.test(value))
  // const hasAnyString = !!strArray.length
  if (hasAnyString) {
    throw Error(`[${data}] 錯誤，請重新輸入兩個有效的正負整數。`);
  }
}

// 相比兩個數值餘數是否相同
function isCongruentEqual(comparingNumbers) {
  const benchmark = 3;
  const answer = comparingNumbers
    .map(value => value % benchmark)
    .reduce((one, currentValue) => {
      if (!one.firstItem) one.firstItem = currentValue
      else {
        one.result = one.firstItem === currentValue
      }
      return one;
    }, {
      firstItem: null,
      result: false
    });
  console.info(`相比數值：[${comparingNumbers[0]}] 和 [${comparingNumbers[1]}]，程式運算中。`);
  return answer.result;
}

// 餘數是否相同，公佈最後答案
function revealAnswer(answer) {
  return (answer) ? '恭喜！條件符合餘數相同，闖關成功。' : '殘念！餘數相比出現差異，請試著再挑戰一次。';
}




