/*
宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，
輸出第一個和第三個名字的單數個字母。
*/

class FormatError extends Error {
  constructor(msg) {
    super(msg);
  }
}

alphabetGame();
function alphabetGame() {
  try {
    const RECEIVEDATA = process.argv.slice(2, 6);
    let validData = formatData(RECEIVEDATA);
    let members = attendance(validData);
    let goldMembers = selection(members);
    const result = oddCharacters(goldMembers);
    announced(result);
  }
  catch (e) {
    if (e instanceof FormatError) {
      console.log(e.message);
    } else {
      console.log(e.message);
    }
  }
  finally {
    console.log('(❛◡❛✿) 好想認識字母表，從挑戰名字開始 !! Fighting !!');
  }

  // 判斷格式是否全英文字母
  function formatData(data) {
    const ELIMINATEDATA = /[^a-z]/i;
    let invalidData = data.map(value => ELIMINATEDATA.test(value)).some(value => value);
    if (invalidData) {
      throw new FormatError(`輸入值[${data}] => 格式錯誤，請重新輸入有效英文字母。`);
    } else {
      return data;
    }
  }

  // 參與會員需要四位
  function attendance(members) {
    let group = 4;
    if (members.length === group) {
      return members;
    } else {
      throw Error(`遊戲人數 ${members.length} 人 => 尚未達標，請重新輸入參與挑戰共四位英文名字。`);
    }
  }

  // // 判斷符合身份的黃金會員
  function selection(members) {
    let goldMembers = members.filter((list, index) => ++index % 2);
    console.log(`符合挑選資格：${goldMembers[0]} 和 ${goldMembers[1]}。`);
    return goldMembers;
  }

  // // 黃金會員名字拆解取出奇數字母
  function oddCharacters(name) {
    let characters = name.map(letters => letters.split('').filter((letters, index) => ++index % 2));
    let result = characters.reduce((prev, next) => [...prev, ...next]);
    return result;
  }

  function announced(result) {
    console.log(`隨機取樣新字母：[${result}]，您都唸對了嗎？`);
  }
}

// let characters = letters.map(list => list.split('').filter((letter, index) => !(index % 2))).join();
// let result = characters.reduce((previous, next) => previous.concat(next)).join('');
// a.map((item,index)=>item.charAt());