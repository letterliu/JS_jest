
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

congruentNumber();
function congruentNumber() {
  try {
    const RECEIVEDATA = process.argv.slice(2, 4);
    let validData = formatData(RECEIVEDATA);
    let comparingNumbers = validateData(validData);
    const result = congruentEqual(comparingNumbers);
    revealAnswer(result);
  }
  catch (e) {
    if (e instanceof FormatError) {
      console.log(e.message);
    } else {
      console.log(e.message);
    }
  }
  finally {
    console.log('(つ´ω`)つ 好想餘數遊戲機，歡迎勇者挑戰！');
  }

  // 判斷除了空值以外，是否輸入兩個數值。
  function formatData(data) {
    let validNull = data.map(value => !value.trim()).some(value => value);
    let invalidData = data.length !== 2;
    if (validNull || invalidData) {
      throw new FormatError(`[${data}] 帶有空值，請重新輸入兩筆資料。`);
    } else {
      return data;
    }
  }

  function validateData(data) {
    // 正則表達式 排除正負整數以外所有值
    const ELIMINATEDATA = /[^0-9]|^[^1-9]|-\d{0}$/;
    let invalidData = data.map(value => ELIMINATEDATA.test(value)).some(value => value);  // true or false
    if (invalidData) {
      throw Error(`[${data}] 格式錯誤，請重新輸入兩個有效的正負整數。`);
    } else {
      let validData = data.map(value => Number(value));
      return validData;
    }
  }

  // 相比兩個數值餘數是否相同
  function congruentEqual(comparingNumbers) {
    const benchmark = 3;
    let result = comparingNumbers.map(value => value % benchmark).reduce((accumulator, currentValue) => accumulator === currentValue);
    console.log(`相比數值：${comparingNumbers[0]} 和 ${comparingNumbers[1]}，程式運算中。`);
    return result;
  }

  // 餘數是否相同，公佈最後答案
  function revealAnswer(result) {
    if (result) {
      console.log('恭喜！條件符合餘數相同，闖關成功。');
    } else {
      console.log('殘念！餘數相比出現差異，請試著再挑戰一次。');
    }
  }
}