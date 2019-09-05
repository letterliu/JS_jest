/*
有一輛搬運車，限重1噸，
啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg，
在不將空間列入考慮的情況下，
設一陣列 sport[3] 用來儲存三種器材的數量，
以一亂數決定每次要搬到車上的器材為何，
當超過限重時即停止搬運，
並列印出三種器材的個數及總重量。
*/

const equipment = gymnasium();
const result = announced(equipment);
console.info(result);

// 主程式，例外時拋出錯誤資訊
function gymnasium() {
  const pieceWeight = [30, 20, 50], max = pieceWeight.length, freightCar = [], weightLimit = 1000;
  for (let grossWeight = 0, i = 0; grossWeight <= weightLimit; i++) {
    const randomIndex = Math.floor(Math.random() * max);
    if (grossWeight + pieceWeight[randomIndex] > weightLimit) {
      return freightCar.sort((a, b) => a - b);
    }
    freightCar.push(pieceWeight[randomIndex])
    grossWeight += pieceWeight[randomIndex];
  }
}

// 執行打印結果
function announced(equipment) {
  const obj = {};
  obj.total = equipment.reduce((prev, next) => prev + next);
  obj.dumbbellBox = equipment.filter(value => value === 30).length;
  obj.horizontalBarBox = equipment.filter(value => value === 20).length;
  obj.Treadmill = equipment.filter(value => value === 50).length;
  return obj;
}

// console.log(`啞鈴總次數：${dumbbellBox}`);
// console.log(`單槓總次數：${horizontalBarBox}`);
// console.log(`跑步機總次數：${Treadmill}`);

// const dumbbellBox = 30, horizontalBarBox = 20, Treadmill = 50;