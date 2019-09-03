/*
假設於某項實驗中，原有b隻細菌，
每經過20分鐘細菌數量會增加為原來的2倍(2b)，
試寫一遞迴函數function twofold(b, m) 。
讓使用者輸入分鐘數 m，
並計算在沒有細菌死亡的狀況下，m 分鐘後的細菌有幾隻。
(不是線性成長，ex: 十個月生一個小孩。)
*/

/*
細菌實驗中，原有 b 隻細菌，
每經過 20 分鐘細菌數量會增加為原來的2倍(2b)，
試寫一遞迴函數function twofold(b, m) 。
讓使用者輸入分鐘數 m，
並計算在沒有細菌死亡的狀況下，
m 分鐘後的細菌有幾隻。
(細菌線性成長)
*/

// let b = 40;
// let m = 40;

const integer = process.argv.slice(2, 4);
const a = integer.map((item, index) => Number(item));

function recursion(b, m) {
  if (m < 20 || m <= 0) {
    return b;
  } else {
    return recursion(2 * b, m - 20);
  }
}

// 執行打印整數總和
function integerSum(integer) {
  let result = recursion(integer[0], integer[1]);
  console.log(result);
  // console.log(`遞迴函數總和： ${result}`);
}
integerSum(a);

// console.log(recursion(integer));