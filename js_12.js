/*
找出10~20的質數，並列出前述各質數在1~100的倍數
*/

const arrayA = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(arrayA);

let a = arrayA.filter((item, index) => {
  if (isPrime(item)) {
    return item;
    // console.log(`質數: ${item}，索引值: ${index}`);
  }
});
console.log(a);

function isPrime(integer) {
  if (!integer) return false;
  for (let i = 2; i < integer - 1; i++) {
    if (!(integer % i)) {
      return false;
    }
  }
  return true;
}

function ismultiple(item) {
  let c = [];
  for (let i = 1; 100 > item * i; i++) {
    let result = item * i;
    c.push(result);
  }
  return c;
}

let b = a.map((item, index) => {
  return ismultiple(item);
});

console.log(b);















// function ismultiple(item) {
//   for (let i = 1; 100 > item * i; i++) {
//     result = item * i;
//     b.push(result);
//   }
//   return result;
// }

// let b = [];
// let b = a.map((item, index) => {
//   console.log(item);
//   let c = [];
//   for (let i = 1; i < 10; i++) {
//     if (i * item <= 100) {
//       // c.push(i*item);
//       item;
//     }
//   }
//   return c;

// });


// let b = a.reduce((acc, item) => {
//   for (let i = 1; i < 10; i++) {
//     if (i * item <= 100)
//       acc.push(i * item);
//   }
//   return acc;
// }, [])
// console.log(b.join(","));







// b = a.map((item, index) => {
//   for (let i = 1; 100 > result; i++) {
//     result = item * i;
//     if (result < 100) {
//       b.push(result);
//       // console.log(result);
//     }
//   }
//   return b;
// });
// console.log(b);











// let b = a.forEach((item, index) => {
//   for (let i = 1; 100 > result; i++) {
//     b.push() = item * i;
//     // console.log(result);
//     return b;
//   }
// });
// console.log(b);

// let mergeResult = a.reduce((accumulator, digit, index) => {
//   for (let i = 1; result < 100; i++) {
//     result = digit * i;
//     // console.log(result);
//     accumulator.push(result);
//   }
//   return accumulator;

// }, []);
// console.log(mergeResult);