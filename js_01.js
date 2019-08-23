
// Jest
module.exports = {
  sneakPreview,
  validateData
};

// 新增newError模式 
class FormatError extends Error {
  constructor(msg) {
    super(msg);
  }
}

goodIdeasCinema();
function goodIdeasCinema() {

  //好想電影院主程式，例外時拋出錯誤資訊
  try {
    const RECEIVEDATA = process.argv[2];
    const attendance = validateData(RECEIVEDATA);
    sneakPreview(attendance);

  }
  catch (e) {
    if (e instanceof FormatError) {
      console.log(e.message);
    } else {
      console.log(e.message);
    }
  }
  finally {
    console.log('相關資訊請上好想電影院官網查訊。');
  }
}

//判斷資料失效與否
function validateData(data) {
  let invalidData = /[a-zA-Z\-\.]/;
  invalidData = invalidData.test(data); // true or false
  const invalidNull = !data.trim();
  if (invalidData) {
    throw new FormatError('格式錯誤，請重新輸入有效的正整數。');
    // return data;
  } else if (invalidNull) {
    throw Error('無任何資料，請重新輸入。');
  } else {
    const validData = Number(data);
    return validData;
  }
}

// 好想電影院試映場
function sneakPreview(attendance) {
  if (attendance) {
    console.log(`d(\`･∀･)b 進場人數: ${attendance}人，好想電影院試映場播放中。`);
    return 'd(\`･∀･)b 進場人數: ${attendance}人，好想電影院試映場播放中。'
  } else {
    console.log('好想電影院暫停播放，請稍待片刻。');
    return '好想電影院暫停播放，請稍待片刻。';
  }
}

//----------------------------------------------------

// (function goodIdeasCinema() {
//   // 新增newError模式 
//   class FormatError extends Error {
//     constructor(msg) {
//       super(msg);
//     }
//   }

//   //好想電影院主程式，例外時拋出錯誤資訊
//   try {
//     const RECEIVEDATA = process.argv[2];
//     const attendance = validateData(RECEIVEDATA);
//     sneakPreview(attendance);
//   }
//   catch (e) {
//     // console.log(e);
//     if (e instanceof FormatError) {
//       console.log(e.message);
//     } else {
//       console.log(e.message);
//     }
//   }
//   finally {
//     console.log('相關資訊請上好想電影院官網查訊。');
//   }

//   //判斷資料失效與否
//   function validateData(data) {
//     let invalidData = /[a-zA-Z\-\.]/;
//     invalidData = invalidData.test(data);
//     const invalidNull = !data.trim();
//     if (invalidData) {
//       throw new FormatError('格式錯誤，請重新輸入有效的正整數。');
//     } else if (invalidNull) {
//       throw Error('無任何資料，請重新輸入。');
//     } else {
//       const validData = Number(data);
//       return validData;
//     }
//   }

//   // 好想電影院試映場
//   function sneakPreview(attendance) {
//     if (attendance) {
//       console.log(`d(\`･∀･)b 進場人數: ${attendance}人，好想電影院試映場播放中。`);
//     } else {
//       console.log('好想電影院暫停播放，請稍待片刻。');
//     }
//   }
// })();



