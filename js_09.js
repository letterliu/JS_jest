/*
宣告兩個具有5個元素的整數陣列 arr1 和 arr2 ，
並利用陣列設定初值的方式，將 arr1[0]~arr1[4] 分別設值為 2,3,1,7,9，
arr2[0]~arr2[4] 分別設值為 8,7,9,3,1，
將 arr1 與 arr2 兩陣列對應項相加，列印出相加後的陣列
*/

/*
流程：1.條件順序 2.有效命名 3.排除因素 4.用戶操作 5.使用回饋
判斷事件： 1.同一事件(關聯) 2.不同事件(獨立)
排除： 1.負值 2.字串 3.未輸入及送出(空) 4.任何符號 5.整數
*/

{
  const arrayA = [2, 3, 1, 7, 9];
  const RECEIVEDATA = process.argv.slice(2, 7);
  let arrayB = RECEIVEDATA.map(item => Number(item));

  let mergeResult = arrayA.reduce((accumulator, digit, index) => {
    accumulator[index] = accumulator[index] + digit;
    // console.log(accumulator);
    return accumulator;
  }, arrayB);

  console.log('陣列合併總和：', mergeResult);
}




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

