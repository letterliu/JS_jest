/*
找出10~20的質數，並列出前述各質數在1~100的倍數
*/

const result = primeProgram(process.argv.slice(2, 10));
console.info(result);

function primeProgram(receivedata) {
  // 主程式，例外時拋出錯誤資訊
  try {
    const termArray = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const validData = formatData(receivedata);
    const referenceArray = arrayLength(validData, termArray);
    const selectPrime = primeArray(referenceArray);
    const answer = multiplePrime(selectPrime);
    return announced(answer);
  }
  catch (e) {
    return e.message;
  }
  finally {
    console.info(`@(･ｪ･｡)@ 陣列質數遊戲：於 100 範圍內，質數倍數化。`);
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

  // 判斷是否正確輸入數值，長度為零，替換預設新陣列
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
      return integer > 1;
    }
  }

  // 將質數組成新陣列
  function primeArray(referenceArray) {
    return referenceArray.filter((integer) => {
      if (isPrime(integer)) return integer;
    });
  }

  // 倍數化物件
  function multiplePrime(selectPrime) {
    return selectPrime.reduce((accumulator, prime) => {
      const selectArray = [], count = 1;
      accumulator[prime] = isMultiple(selectArray, prime, count);
      return accumulator;
    }, {});
  }

  // 質數倍數化
  function isMultiple(selectArray, prime, count, maximum = 100) {
    if (prime * count >= maximum) return selectArray;
    selectArray.push(prime * count);
    count++;
    return isMultiple(selectArray, prime, count);
  }

  // 打印陣列倍數後結果
  function announced(result) {
    return new Map(Object.entries(result));
    // result.forEach(element => console.info(element));
    // Object.entries(result).forEach(([key, value]) => {
    //   console.info(`質數：${key}，倍數${value}。`);
    // });
    // return result;
    // });
  }
}

//  // 質數倍數化
//  function isMultiple(prime) {
//   const selectArray = [], maximum = 100;
//   for (let i = 1; maximum >= prime * i; i++) {
//     const result = prime * i;
//     selectArray.push(result);
//   }
//   return selectArray;
// }

// // 倍數化陣列
// function multiplePrime(primeArray) {
//   return primeArray.map((prime) => isMultiple(prime));
// }