/*
宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，
輸出第一個和第三個名字的單數個字母。
*/

class FormatError extends Error {
  constructor(msg) {
    super(msg);
  }
}

// 接收資料打印結果
const result = alphabetGame(process.argv.slice(2, 6));
console.info('%s', result);

function alphabetGame(receivedata) {
  // 主程式，例外時拋出錯誤資訊
  try {
    const validData = formatData(receivedata);
    const members = attendance(validData);
    const goldMembers = selection(members);
    const answer = oddCharacters(goldMembers);
    return announced(answer);
  }
  catch (e) {
    if (e instanceof FormatError) {
      return e.message;
    } else {
      return e.message;
    }
  }
  finally {
    console.info('(❛◡❛✿) 好想認識字母表，從挑戰名字開始 !! Fighting !!');
  }

  // 判斷格式是否全英文字母，不分大小寫
  function formatData(data) {
    const ELIMINATEDATA = /[^a-z]/i;
    const invalidData = data.map(value => ELIMINATEDATA.test(value)).some(value => value);
    const validNull = data.includes('');
    if (invalidData || validNull) {
      throw new FormatError(`輸入值[${data}] => 格式錯誤，請重新輸入有效英文字母。`);
    }
    return data;
  }

  // 參與會員需要四位
  function attendance(members) {
    const group = 4;
    if (members.length !== group) {
      throw Error(`遊戲人數 ${members.length} 人 => 尚未達標，請重新輸入參與挑戰，共四位英文名字。`);
    }
    return members;
  }

  // // 判斷符合身份的黃金會員
  function selection(members) {
    const goldMembers = members.filter((list, index) => !(index % 2));
    console.info(`符合挑選資格：${goldMembers[0]} 和 ${goldMembers[1]}。`);
    return goldMembers;
  }

  // // 黃金會員名字拆解取出奇數字母
  function oddCharacters(name) {
    const characters = name.map(letters => letters.split('').filter((letters, index) => ++index % 2));
    const answer = characters.reduce((previous, next) => [...previous, ...next]);
    return answer;
  }

  function announced(answer) {
    return `隨機取樣新字母：[${answer}]，您都唸對了嗎？`;
  }
}

// let characters = letters.map(list => list.split('').filter((letter, index) => !(index % 2))).join();
// let result = characters.reduce((previous, next) => previous.concat(next)).join('');
// const answer = characters.flat();
// a.map((item,index)=>item.charAt());