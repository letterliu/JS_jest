/*
宣告一整數陣列 array = [3,50,0,13,2,4,11] 試寫一程式，
印出陣列中所包含的質數以及其索引值。
*/

// 指在大於1的自然數中，除了1和該數自身外，無法被其他自然數整除的數

// Jest
module.exports = {
  primeProgram,
  formatData,
  arrayLength,
  isPrime,
  announced
};

const result = primeProgram(process.argv.slice(2, 9));
console.info(result);

function primeProgram(receivedata) {
  // 主程式，例外時拋出錯誤資訊
  try {
    const termArray = [3, 50, 0, 13, 2, 4, 11];
    const validData = formatData(receivedata);
    const referenceArray = arrayLength(validData, termArray);
    return announced(referenceArray);
  }
  catch (e) {
    return e.message;
  }
  finally {
    console.info(`୧༼✿ ͡◕ д ◕͡ ༽୨ 陣列質數遊戲：試著分辨與合數之間，有何差異？`);
  }
}

// 判斷格式是否全整數
function formatData(data) {
  const ELIMINATEDATA = /[^\d]|^0$/;
  const invalidData = data.map(value => ELIMINATEDATA.test(value)).some(value => value);
  const validNull = data.includes('');
  if (invalidData || validNull) {
    throw Error(`輸入值[${data}] => 格式錯誤，請重新輸入有效正整數。`);
  }
  return data.map(value => Number(value));
}

// 判斷是否正確輸入數值，長度為零，替換預設新陣列。
function arrayLength(array, termArray) {
  if (!(array.length)) {
    console.info(`未輸入任何資料，預設新陣列數值：[${termArray}]，運算中，請稍候。`);
    return termArray;
  }
  console.info(`格式正確，新陣列數值：[${array}]，運算中，請稍候。`);
  return array;
}

// 質數過濾器
function isPrime(integer) {
  for (let i = 2; i < integer; i++) {
    if (!(integer % i)) return false;
  }
  return integer > 1;
}

// 打印結果
function announced(referenceArray) {
  return referenceArray.filter((integer, index) => {
    if (isPrime(integer)) {
      console.info(`質數: ${integer}，索引值: ${index}`);
      return integer;
    }
  });
}


// if (integer <= 1) return false;

// referenceArray.filter((item, index) => {
//   if (result[index]) {
//     console.info(`質數: ${item}，索引值: ${index}`);
//   }
// });

// const aa = termArray.map((item, index) => (isPrime(item)));
  // return aa;

  // const aa = termArray.map((item, index) => {
  //   if (isPrime(item)) {
  //     console.info(`質數: ${item}，索引值: ${index}`);
  //     return item;
  //   }
  //   return false;
  // });
  // return aa;
