/*
宣告一整數陣列 array = [3,50,0,13,2,4,11] 試寫一程式，
印出陣列中所包含的質數以及其索引值。
*/

// 指在大於1的自然數中，除了1和該數自身外，無法被其他自然數整除的數

// let member = process.argv.slice(2, 9);
const integer = [3, 50, 0, 13, 2, 4, 11];
console.log(arrayA);

arrayA.forEach((item, index) => {
  if (isPrime(item)) {
    console.log(`質數: ${item}，索引值: ${index}`);
  }
});

function isPrime(integer) {
  if (!integer) return false;
  for (let i = 2; i < integer - 1; i++) {
    if (!(integer % i)) {
      return false;
    }
  }
  return true;
}


// let b = member.filter((item, index) => isPrime(item));
// console.log(b);

// function isPrime(number) {
//   if (number === 1) return fals;;
//   if (!number) return false;
//   for (let i = 2; i < number; i++) {
//     if (!(number % i)) {
//       return false;
//     }
//   }
//   return true;
// }

// integer.forEach((item, index) => {
//   if (integer === 1 || isPrime(item)) {
//     console.log('質數為' + item + '索引值為' + index);
//   }
// });


// const integer = [1, 50, 0, 13, 2, 4];

// integer.forEach((item, index) => {
//   if (isPrime(item)) {
//     console.log(`質數: ${item}，索引值: ${index}`);
//   }
// });

// function isPrime(integer) {
//   if (integer === 1) return false;
//   if (integer === 2) return true;
//   for (let i = 2; i < integer; i++) {
//     if (!(integer % i)) {
//       return false;
//     }
//   }
//   return integer;
// }