/*
宣告兩個具有5個元素的整數陣列 arr1 和 arr2 ，
並利用陣列設定初值的方式，將 arr1[0]~arr1[4] 分別設值為 2,3,1,7,9，
arr2[0]~arr2[4] 分別設值為 8,7,9,3,1，
將 arr1 與 arr2 兩陣列對應項相加，列印出相加後的陣列。
*/

class formatError extends Error {
  constructor(msg) {
    super(msg);
  }
}

gameMachine();
function gameMachine() {
  try {
    const arrayA = [2, 3, 1, 7, 9];
    const RECEIVEDATA = process.argv.slice(2, 7);
    let validData = formatData(RECEIVEDATA);
    let referenceArray = arrayLength(validData);
    const mergeResult = mergeAdder(arrayA, referenceArray);
    mergeResult.forEach((element, index) => console.log(`第 ${++index} 排序 => 數值加總：${element}`));
  }
  catch (e) {
    if (e instanceof formatError) {
      console.log(e.message);
    } else {
      console.log(e.message);
    }
  }
  finally {
    console.log(`(๑¯∀¯๑) 陣列加法遊戲：[ 2, 3, 1, 7, 9 ] 試著與輸入數值相加，返回皆同數值陣列。`);
  }

  // 判斷格式是否全整數
  function formatData(data) {
    const ELIMINATEDATA = /[^\d-]/;
    let invalidData = data.map(value => ELIMINATEDATA.test(value)).some(value => value);
    if (invalidData) {
      throw new formatError(`輸入值[${data}] => 格式錯誤，請重新輸入有效整數。`);
    } else {
      let validData = data.map(value => Number(value));
      return validData;
    }
  }

  // 判斷是否正確輸入數值，長度為 5 新陣列。
  function arrayLength(array) {
    const ELIMINATEDATA = /[^5]/;
    if (ELIMINATEDATA.test(array.length)) {
      throw Error(`陣列長度：${array.length} => 尚未達標，請重新輸入五個整數。`);
    } else {
      console.log(`格式正確，新陣列數值：[${array}]，運算中，請稍候。`);
      return array;
    }
  }

  // 陣列合併相加器
  function mergeAdder(arrayA, referenceArray) {
    let mergeResult = referenceArray.reduce((accumulator, digit, index) => {
      accumulator[index] = accumulator[index] + digit;
      return accumulator;
    }, arrayA);
    return mergeResult;
  }
}

// ------------------------

// {
//   const arrayA = [2, 3, 1, 7, 9];
//   const arrayB = [8, 7, 9, 3, 1];

//   let mergeResult = arrayA.reduce((accumulator, digit, index) => {
//     accumulator[index] = accumulator[index] + digit;
//     console.log(accumulator);
//     return accumulator;
//   }, arrayB);

//   console.log(mergeResult);
// }







// let c = arrayA.reduce((accumulator, integer, index) => {
//   let result = integer + arrayB[index];
//   accumulator.push(result);

//   // console.log(accumulator);
//   return accumulator;
// }, []);

// console.log(c);



// let result = arrayA.map((integer, index) => integer + arrayB[index]);
// console.log(result);












// newArray = newArray.push(arrayA.concat(arrayB));
// console.log(newArray);


// let newArray = [];

// result = [10, 10, 10, 10, 10];
// let a = arrayA.concat(arrayB);
// console.log(a);
// let a = [[2, 3, 1, 7, 9], [8, 7, 9, 3, 1]];
// let a = [2, 3, 1, 7, 9];
// console.log(a);


// let b = a.map(item => item[inedx] * 2));
// console.log(b);


// let b = a.filter((item, index) => item[index]).map((item) =>
//   item.reduce((accumulator, currentValue) =>
//     accumulator + currentValue));
// console.log(b);


// let c = a.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(c);

