/*
有一輛搬運車，限重1噸，
啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg，
在不將空間列入考慮的情況下，
設一陣列 sport[3] 用來儲存三種器材的數量，
以一亂數決定每次要搬到車上的器材為何，
當超過限重時即停止搬運，
並列印出三種器材的個數及總重量。
*/

// Jest
module.exports = {
  mayFlower,
  gymnasium,
  sortingSystem,
  announced
};

const result = mayFlower();
console.info(new Map(Object.entries(result)));

function mayFlower() {
  // 主程式，運轉順序
  const pieceWeight = [30, 20, 50];
  const equipment = gymnasium(pieceWeight);
  const grossWeight = sortingSystem(equipment, pieceWeight);
  return announced(equipment, grossWeight);
}

// 搬運啞鈴，單槓，跑步機個別總數
function gymnasium(pieceWeight) {
  const max = pieceWeight.length, weightLimit = 1000, equipment = [0, 0, 0];
  for (let grossWeight = 0, i = 0; grossWeight <= weightLimit; i++) {
    const randomIndex = Math.floor(Math.random() * max);
    if (grossWeight + pieceWeight[randomIndex] > weightLimit) {
      return equipment;
    }
    equipment[randomIndex]++;
    grossWeight += pieceWeight[randomIndex];
  }
}

// 計算啞鈴，單槓，跑步機總數重量結果
function sortingSystem(equipment, pieceWeight) {
  return equipment.reduce((accumulator, amount, index) => {
    accumulator[index] = accumulator[index] * amount;
    return accumulator;
  }, pieceWeight);
}

// 貨運契約保證
function announced(equipment, grossWeight) {
  console.info(`啞鈴總次數：${equipment[0]}`);
  console.info(`單槓總次數：${equipment[1]}`);
  console.info(`跑步機總次數：${equipment[2]}`);
  const sum = grossWeight.reduce((previous, next) => previous + next);
  return {
    equipment: equipment,
    grossWeight: grossWeight,
    total: sum
  }
}

// const dumbbellBox = 30, horizontalBarBox = 20, Treadmill = 50;

// function announced(equipment) {
//   const obj = {};
//   obj.total = equipment.reduce((prev, next) => prev + next);
//   obj.dumbbellBox = equipment.filter(value => value === 30).length;
//   obj.horizontalBarBox = equipment.filter(value => value === 20).length;
//   obj.Treadmill = equipment.filter(value => value === 50).length;
//   return obj;
// }