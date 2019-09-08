/*
好想電影院規定除非完全沒有客人買票，
否則就算只有一位顧客也照常播放電影。
讓使用者輸入客人的人數，並用「!」判斷人數，
不為零顯示「照常播放電影」。
*/

// Jest
module.exports = {
  goodIdeasCinema,
  sneakPreview,
  validateData
};

// 新增newError模式 
class formatError extends Error {
  constructor(msg) {
    super(msg);
  }
}

// 接收資料打印結果
const result = goodIdeasCinema(process.argv[2]);
console.info('%s', result);

function goodIdeasCinema(receivedata) {
  // 好想電影院主程式，例外時拋出錯誤資訊
  try {
    const attendance = validateData(receivedata);
    return sneakPreview(attendance);
  }
  catch (e) {
    if (e instanceof formatError) return e.message;
    return e.message;
  }
  finally {
    console.info('d(\`･∀･)b 相關資訊請上好想電影院官網查訊。');
  }
}

// 資料格式過濾數字以外
function validateData(data) {
  const ELIMINATEDATA = /[^0-9]/;
  const invalidData = ELIMINATEDATA.test(data);
  const validNull = !data.trim();
  if (invalidData) throw new formatError('格式錯誤，請重新輸入有效的正整數。');
  if (validNull) throw Error('無任何資料，請重新輸入。');
  return Number(data);
}

// 好想電影院試映場
function sneakPreview(attendance) {
  if (attendance) return `進場人數: ${attendance} 人，好想電影院試映場播放中。`;
  else return '好想電影院暫停播放，請稍待片刻。';
}