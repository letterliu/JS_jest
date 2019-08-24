/*
好想樂園的門票一張400元，
優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，
試用「邏輯運算子」寫一程式，
讓使用者自行輸入年齡，並判斷門票價錢。
*/

ticketingSystem();
function ticketingSystem() {
  try {
    const RECEIVEDATA = process.argv[2];
    const exactAge = formatData(RECEIVEDATA);
    bookingTickets(exactAge);
  }
  catch (e) {
    console.log(e.message);
  }
  finally {
    console.log('( ͡° ͜ʖ ͡°) 好想樂園暑假優惠中，歡迎蒞臨。');
  }

  function formatData(data) {
    // 資料瞥除有效正整數以外所有數值
    let validNull = !data.trim();
    const ELIMINATEDATA = /[^\d*]/;
    let invalidData = ELIMINATEDATA.test(data);
    if (validNull || invalidData) {
      throw Error('格式錯誤，請重新輸入有效的正整數。');
    } else {
      let validData = Number(data);
      return validData;
    }
  }

  function bookingTickets(exactAge) {
    // 一般票價 優惠票(老人、兒童)
    const childhood = 6;
    const seniorCitizen = 65;
    const ADMISSION = 400;
    const HALFPRICE = 0.5;
    let concessionTicket = ADMISSION * HALFPRICE;
    if (childhood < exactAge && exactAge < seniorCitizen) {
      console.log(`入場年齡：${exactAge} 歲，全票票價：${ADMISSION} 元`);
    } else {
      console.log(`入場年齡：${exactAge} 歲，優待票價：${concessionTicket} 元`);
    }
  }
}

