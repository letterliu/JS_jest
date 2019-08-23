/*
宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，
輸出第一個和第三個名字的單數個字母。
*/

//判斷空值 null undefined ...

// 判斷輸出格式是否正確
let member = process.argv.slice(2, 6);
console.log(member);

// 排除英文字母以外格式
let dataFormat = /[A-Za-z]/;
let numberFormat = /[\d\-\.]/;
let accurateData = dataFormat.test(member);
let precisionNumber = numberFormat.test(member);

// 提示錯誤格式
if (!accurateData || precisionNumber) {
  console.log('格式錯誤，請重新輸入英文名字');
  return;
}

// 參與會員需為四位
let attendance = 4;

if (member.length !== attendance) {
  console.log('請重新輸入四位會員英文名字');
  return;
}

// // 判斷符合身份的黃金會員
let goldeMember = member.filter((list, index) => !(index % 2));
console.log(goldeMember);

// // 名字拆解取出奇數字母
let characters = goldeMember.map(list => list.split('').filter((letter, index) => !(index % 2))).join();
console.log(characters);










// // 判斷輸出格式是否正確
// let member = process.argv.slice(2, 6);
// console.log(member);

// let invalidValue = !member.every(value => value);
// console.log(invalidValue);

// // 判斷是否為數字
// let numberFormat = /\d/;
// let attendance = 4;

// if (invalidValue || numberFormat.test(member) || member.length !== attendance) {
//   console.log('請重新輸入四位會員英文名字');
//   return;
// }

// // 判斷符合身份的黃金會員
// let goldeMember = member.filter((list, index) => !(index % 2));
// // console.log(goldeMember);

// // 名字拆解取出單字
// let characters = goldeMember.map(list => list.split('').filter((letter, index) => !(index % 2))).join();
// console.log(characters);









// 判斷是否空值
// let b = member.filter(value => value).every(value => value);
// console.log(b);

// let b = member.filter(value => !value).every(value => !value);
// console.log(b);

//過濾空字符、null、undefined
// let invalidValue = !member.filter(value => !value);
// console.log(b);

// let invalidValue = member.filter(value => !value).every(value => value);
// console.log(invalidValue);














// console.log(characters.join());
// let printResult = characters.map(value => value.filter((value, index) => !(index % 2)));
// console.log(printResult);

// printResult.forEach();















// let group = member.filter(function (string, index) {
//   return !(index % 2);
// });

// console.log(group);

// let segmentation = group.map(function (string) {
//   return string.split('');
// });

// console.log(segmentation);


// for (var item of segmentation) {
//   let newcomer = item.filter((item, index) => !(index % 2))
//   console.log(newcomer);

//   for (var dd of newcomer) {
//     printResult = printResult + dd;
//   }
// }
// console.log(printResult);


// console.log(segmentation.join(''));


// let newcomer = segmentation.filter(function (string, singleArrayIndex) {
//   return singleArrayIndex % 2 !== 0;
// });






// let start= ['ruru','letter','nike'];
// let printResult = "";
// let result = start.filter((item,index)=>!(index%2))
// let aa = result.map(item=>{
//   return item.split('')
// })



// let start= ['ruru','letter','nike'];
// let printResult = "";
// let result = start.map((item,index)=>{
//   if(!(index%2)){
//     let stringToArray = item.split('')
//     stringToArray = stringToArray.filter((singleArray,singleArrayIndex)=> singleArrayIndex%2 !== 0 )
//     for(word of stringToArray){
//       printResult= printResult+word;
//     }
//   }
// })
// console.log(printResult)