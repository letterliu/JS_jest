/*
好想樂園的門票一張400元，
優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，
試用「邏輯運算子」寫一程式，
讓使用者自行輸入年齡，並判斷門票價錢。
*/

// 新增newError模式
class formatError extends Error {
  constructor(msg) {
    super(msg);
  }
}

// 接收資料打印結果
const result = ticketingSystem(process.argv[2]);
console.info('%s', result);

function ticketingSystem(receivedata) {
  // 主程式，例外時拋出錯誤資訊
  try {
    const exactAge = formatData(receivedata);
    return bookingTickets(exactAge);
  }
  catch (e) {
    if (e instanceof formatError) return e.message;
    return e.message;
  }
  finally {
    console.info('( ͡° ͜ʖ ͡°) 好想樂園暑假優惠中，歡迎蒞臨。');
  }

  function formatData(data) {
    // 資料瞥除有效正整數以外所有數值，包含人瑞超過100歲。
    const ELIMINATEDATA = /[^\d]|^[0-9]{3,}$/;
    const invalidData = ELIMINATEDATA.test(data);
    if (typeof data === 'undefined' || !data.trim()) {
      throw Error(`[${data}] 帶有空值，請重新輸入資料。`);
    }
    if (invalidData) {
      throw new formatError('格式錯誤，請重新輸入有效的正整數。');
    }
    return Number(data);
  }

  function bookingTickets(exactAge) {
    // 一般票價 優惠票(老人、兒童)
    const childhood = 6, seniorCitizen = 65, ADMISSION = 400, HALFPRICE = 0.5, concessionTicket = ADMISSION * HALFPRICE;
    if (childhood < exactAge && exactAge < seniorCitizen) {
      return `入場年齡：${exactAge} 歲，全票票價：${ADMISSION} 元`;
    } else {
      return `入場年齡：${exactAge} 歲，優待票價：${concessionTicket} 元`;
    }
  }
}

