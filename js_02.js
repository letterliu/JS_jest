
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
    const comparingNumbers = validateData(validData);
    announceSystem(comparingNumbers);
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
    const ELIMINATEDATA = /[^1-9-]/;
    let invalidData = data.map(value => ELIMINATEDATA.test(value)).some(value => value);  // true or false
    // /-\d{1,}/
    // console.log(invalidData);
    if (invalidData) {
      throw Error(`[${data}] 格式錯誤，請重新輸入兩個有效的正負整數。`);
    } else {
      let validData = data.map(value => Number(value));
      return validData;
    }
  }

  // 相比兩個數值餘數是否相同
  function announceSystem(comparingNumbers) {
    const benchmark = 3;
    let result = comparingNumbers.map(value => value % benchmark).reduce((accumulator, currentValue) => accumulator === currentValue);
    if (result) {
      console.log(`[${comparingNumbers}] 恭喜！條件符合餘數相同，闖關成功。`);
    } else {
      console.log(`[${comparingNumbers}] 殘念！再接再勵，請試著再挑戰一次。`);
    }
  }
}