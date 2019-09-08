/*
運用Caesar cipher: 明文中的所有字母加密，
自訂一個平移參數。讓使用者輸入 5 個字母，
字每向後平移 3 個數，
印出加密結果。

大寫英文字母的 ASCII Code 65 ~ 90。
*/

// 新增newError模式
class formatError extends Error {
  constructor(msg) {
    super(msg);
  }
}

const result = caesarCipher(process.argv.slice(2, 3), process.argv[3]);
console.log('%s', result);

function caesarCipher(RECEIVEDATA, RECEIVENUMBER) {
  // 主程式，例外時拋出錯誤資訊
  try {
    const validNumber = formatData(RECEIVEDATA, RECEIVENUMBER);
    const referenceObject = ASCII(RECEIVEDATA, validNumber);
    const ciphertext = encryption(referenceObject);
    return announced(ciphertext);
  }
  catch (e) {
    if (e instanceof formatError) return e.message;
    return e.message;
  }
  finally {
    console.info(`Σ(っ °Д °;)っ 字母表按照一個固定數目，進行偏移後被替換成密文。`);
  }

  // 判斷格式是否為有效字母與偏移數
  function formatData(data, number) {
    const invalidData = /[^a-z]/i.test(data);
    const invalidNumber = /[^\d-]/.test(number);
    const validNull = data.includes('');
    if (invalidData || !data.length || validNull) {
      throw new formatError(`輸入值[${data}] => 格式錯誤，請重新輸入明文字母表。`);
    }
    if (invalidNumber || !number.length) {
      throw Error('尚未輸入平移位數，請重新填入數目。');
    }
    return Number(number);
  }

  // 轉換成 ASCII code
  function ASCII(receivedata, displacement) {
    const capitalization = receivedata.map(character => character.toUpperCase().split(''));
    const interChangeNumber = capitalization.reduce((previous, next) => [...previous, ...next]).map(character => character.charCodeAt());
    displacement = displacement % 26;
    return {
      ASCII: interChangeNumber,
      displacement: displacement
    }
  }

  // 明文加密運轉器
  function encryption(object) {
    displacement = object.displacement;
    const alphabet = 26;
    const encoded = object.ASCII.map((encode) => {
      if (encode + displacement > 90) encode -= alphabet;
      if (encode + displacement < 65) encode += alphabet;
      return String.fromCharCode(encode + displacement);
    }).join('');
    return {
      encoded: encoded,
      displacement: displacement
    }
  }

  // 打印密文結果
  function announced(ciphertext) {
    console.info(`凱撒加密：${ciphertext.encoded}，位移數：${ciphertext.displacement}。`);
    console.info(new Map(Object.entries(ciphertext)));
    return ciphertext;
  }
}







// let cc = aa.map((item, index) => item.charCodeAt(item));
// console.log(cc);

// function caesarCipher(str, num) {
//   const newString = [];
//   num = num % 26; // num: 0 ~ 25

//   for (let i = 0; i < str.length; i++) {
//     const currentCharCode = str.charCodeAt(i);
//     let newCharCode;

//     if (currentCharCode >= 65 && currentCharCode <= 90) {
//       // 大寫英文字母轉換
//       newCharCode = currentCharCode + num;
//       if (newCharCode < 65) {
//         newCharCode = newCharCode + 26;
//       } else if (newCharCode > 90) {
//         newCharCode = newCharCode - 26;
//       }
//     } else if (currentCharCode >= 97 && currentCharCode <= 122) {
//       // 小寫英文字母轉換
//       newCharCode = currentCharCode + num;
//       if (newCharCode < 97) {
//         newCharCode = newCharCode + 26;
//       } else if (newCharCode > 122) {
//         newCharCode = newCharCode - 26;
//       }
//     } else {
//       // 其餘保留原樣
//       newCharCode = currentCharCode;
//     }

//     newString.push(String.fromCharCode(newCharCode));
//   }
//   return newString.join('')

// }

// console.log(caesarCipher('Zoo Keeper', 3))