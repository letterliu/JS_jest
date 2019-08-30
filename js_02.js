
/*
使用者輸入兩個整數，將它們分別除以 3，
判斷餘數是否相同，
若相同，則於螢幕上顯示「餘數相同」。
*/

class FormatError extends Error {
  constructor(msg) {
    super(msg);
  }
}

const result = congruentNumber(process.argv.slice(2, 4));
console.info('%s', result);

function congruentNumber(receivedata) {
  try {
    const validData = formatData(receivedata);
    const comparingNumbers = validateData(validData);
    const answer = congruentEqual(comparingNumbers);
    return revealAnswer(answer);
  }
  catch (e) {
    if (e instanceof FormatError) {
      return e.message;
    } else {
      return e.message;
    }
  }
  finally {
    console.info('(つ´ω`)つ 好想餘數遊戲機，歡迎勇者挑戰！');
  }

  // 判斷除了空值以外，是否輸入兩個數值。
  function formatData(data) {
    const validNull = data.map(value => !value.trim()).some(value => value);
    // const validNull = data.includes('');
    const invalidLength = data.length !== 2;
    if (validNull || invalidLength) {
      throw new FormatError(`[${data}] 帶有空值，請重新輸入兩筆資料。`);
    }
    return data;
  }

  function validateData(data) {
    // 正則表達式 排除正負整數以外所有值
    const ELIMINATEDATA = /[^\d-]|^0$/;
    const invalidData = data.map(value => ELIMINATEDATA.test(value)).some(value => value);
    // const invalidData = data.includes('0');
    if (invalidData) {
      throw Error(`[${data}] 格式錯誤，請重新輸入兩個有效的正負整數。`);
    }
    const validData = data.map(value => Number(value));
    return validData;
  }

  // 相比兩個數值餘數是否相同
  function congruentEqual(comparingNumbers) {
    const benchmark = 3;
    const answer = comparingNumbers.map(value => value % benchmark).reduce((accumulator, currentValue) => accumulator === currentValue);
    console.info(`相比數值：[${comparingNumbers[0]}] 和 [${comparingNumbers[1]}]，程式運算中。`);
    return answer;
  }

  // 餘數是否相同，公佈最後答案
  function revealAnswer(answer) {
    if (answer) {
      return '恭喜！條件符合餘數相同，闖關成功。';
    } else {
      return '殘念！餘數相比出現差異，請試著再挑戰一次。';
    }
  }
}



