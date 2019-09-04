/*
好想健身房新開幕，每期會費500元，
第一期79折，每滿五期再折200元，
請讓使用者自行輸入所需期數，
並利用do while計算，印出總費用。
*/

const result = gymnasium(process.argv[2]);
console.info(result);

function gymnasium(receivedata) {
  // 主程式，例外時拋出錯誤資訊
  try {
    const validData = formatData(receivedata);
    const membershipDues = members(validData);
    return announced(membershipDues);
  }
  catch (e) {
    return e.message;
  }
  finally {
    console.info(`Ψ(｀∀´#)ﾉ 好想健身房新開幕，新會員優惠中。`);
  }

  // 正則表達式 資料瞥除有效正整數以外所有數值 
  function formatData(data) {
    const ELIMINATEDATA = /[^0-9]|^0$/g;
    const invalidData = ELIMINATEDATA.test(data);
    if (invalidData || !data.trim()) {
      throw Error(`[${data}] 格式錯誤，請重新輸入有效的正整數。`);
    }
    return Number(data);
  }

  // 會員費用總計算
  function members(periods) {
    const membershipDues = 500, cashDiscount = 79 / 100, bonusPoint = 200, discountCondition = 5;
    let i = 1, sum = 0, cumulativeBonus = 0;
    cumulativeBonus = parseInt(periods / 5) * bonusPoint;

    do {
      if (i === 1) sum = membershipDues * cashDiscount;
      else sum += membershipDues;
      if (!(i % discountCondition)) sum -= bonusPoint;
    } while (++i <= periods);

    return {
      periods: periods,
      cumulativeBonus: cumulativeBonus,
      sum: sum
    };
  }

  // 宣告總期數與總會費
  function announced(membershipDues) {
    console.info('新會員獨享禮 79 折。');
    console.info(`會員累積折扣金 ${membershipDues.cumulativeBonus} 元。`);
    console.info(`報名總期數：${membershipDues.periods} 期，總金額：${membershipDues.sum} 元。`);
    return membershipDues;
  }
}
