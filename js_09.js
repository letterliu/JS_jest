/*
宣告兩個具有5個元素的整數陣列 arr1 和 arr2 ，
並利用陣列設定初值的方式，將 arr1[0]~arr1[4] 分別設值為 2,3,1,7,9，
arr2[0]~arr2[4] 分別設值為 8,7,9,3,1，
將 arr1 與 arr2 兩陣列對應項相加，列印出相加後的陣列。
*/

// Jest
module.exports = {
  addendGame,
  formatData,
  arrayLength,
  mergeAdder,
  announced
};

// 新增newError模
class formatError extends Error {
  constructor(msg) {
    super(msg);
  }
}

// 接收資料打印結果
const result = addendGame(process.argv.slice(2, 7));
console.info(result);

function addendGame(receivedata) {
  // 主程式，例外時拋出錯誤資訊
  try {
    const termArray = [2, 3, 1, 7, 9];
    const validData = formatData(receivedata);
    const referenceArray = arrayLength(validData);
    const mergeResult = mergeAdder(termArray, referenceArray);
    return announced(mergeResult);
  }
  catch (e) {
    if (e instanceof formatError) return e.message;
    return e.message;
  }
  finally {
    console.info(`(๑¯∀¯๑) 陣列加法遊戲：[ 2, 3, 1, 7, 9 ] 試著與輸入數值相加，返回皆同數值陣列。`);
  }
}

// 判斷格式是否全整數
function formatData(data) {
  const ELIMINATEDATA = /[^\d-]/;
  const invalidData = data.map(value => ELIMINATEDATA.test(value)).some(value => value);
  const validNull = data.includes('');
  if (invalidData || validNull) {
    throw new formatError(`輸入值[${data}] => 格式錯誤，請重新輸入有效整數。`);
  }
  return data.map(value => Number(value));
}

// 判斷是否正確輸入數值，長度為 5 新陣列。
function arrayLength(array) {
  const ELIMINATEDATA = /^[^5]$/;
  if (ELIMINATEDATA.test(array.length)) {
    throw Error(`陣列長度：${array.length} => 尚未達標，請重新輸入五個整數。`);
  }
  console.info(`格式正確，新陣列數值：[${array}]，運算中，請稍候。`);
  return array;
}

// 陣列合併相加器
function mergeAdder(termArray, referenceArray) {
  const mergeResult = referenceArray.reduce((accumulator, digit, index) => {
    accumulator[index] = accumulator[index] + digit;
    return accumulator;
  }, termArray);
  return mergeResult;
}

// 統計陣列相加結果
function announced(result) {
  result.forEach((element, index) => console.info(`第 ${++index} 排序 => 數值加總：${element}`));
  return result;
}


//--------------------------------------------------------------------------

// let result = arrayA.reduce((accumulator, integer, index) => {
//   let sum = integer + arrayB[index];
//   accumulator.push(sum);
//   return accumulator;
// }, []);
// console.log(result);

// let result = arrayA.map((integer, index) => integer + arrayB[index]);
// console.log(result);

