/*
運用Caesar cipher: 明文中的所有字母加密，
自訂一個平移參數。讓使用者輸入 5 個字母，
字每向後平移 3 個數，
印出加密結果
*/

function caesarCipher(str, num) {
  let newString = []
  num = num % 26      // num: 0 ~ 25

  for (let i = 0; i < str.length; i++) {
    let currentCharCode = str.charCodeAt(i)
    let newCharCode

    /**
     * 大寫英文字母的 ASCII Code 65 ~ 90
     * 小寫英文字母的 ASCII Code 97 ~ 122
    **/

    if (currentCharCode >= 65 && currentCharCode <= 90) {
      // 大寫英文字母轉換
      newCharCode = currentCharCode + num
      if (newCharCode < 65) {
        newCharCode = newCharCode + 26
      } else if (newCharCode > 90) {
        newCharCode = newCharCode - 26
      }
    } else if (currentCharCode >= 97 && currentCharCode <= 122) {
      // 小寫英文字母轉換
      newCharCode = currentCharCode + num
      if (newCharCode < 97) {
        newCharCode = newCharCode + 26
      } else if (newCharCode > 122) {
        newCharCode = newCharCode - 26
      }
    } else {
      // 其餘保留原樣
      newCharCode = currentCharCode
    }

    newString.push(String.fromCharCode(newCharCode))
  }
  return newString.join('')

}

console.log(caesarCipher('Zoo Keeper', 3))    //  Bqq Mggrgt
// console.log(caesarCipher('Big Car', -16))    //  Lsq Mkb
// console.log(caesarCipher('JavaScript', -900))    //  TkfkCmbszd