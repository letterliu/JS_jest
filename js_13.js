/*
龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，
他們參加1000公尺競賽：兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，
請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽?
*/

// Jest
module.exports = {
  theTortoiseAndTheHare,
  marathon,
  trackEvents,
  finishLine
};

const result = theTortoiseAndTheHare();
console.info(result);

function theTortoiseAndTheHare() {
  // 主程式，運轉順序
  const TORTOISE = 0.28, HARE = 20, maximum = 1000;
  const runner = marathon(TORTOISE, maximum);
  const sprinter = trackEvents(HARE, maximum);
  return finishLine(runner, sprinter);
}
// 100公尺陸龜總共所需秒數
function marathon(TORTOISE, maximum) {
  for (var sec = 0, ranMeters = 0; ranMeters <= maximum; sec++) {
    if (ranMeters + TORTOISE >= maximum) break;
    ranMeters += TORTOISE;
  }
  return {
    name: 'tortoise',
    took: sec,
    distance: ranMeters
  };
}

// 100公尺野兔總共所需秒數
function trackEvents(HARE, maximum) {
  for (var sec = 0, ranMeters = 0; ranMeters <= maximum; sec++) {
    if (ranMeters + HARE >= maximum) break;
    ranMeters += HARE;
    if (!(sec % 5))--ranMeters;
  }
  return {
    name: 'hare',
    took: sec,
    distance: ranMeters
  };
}

// 龜兔賽跑公佈結果
function finishLine(runner, sprinter) {
  const TORTOISE = new Map(Object.entries(runner));
  const HARE = new Map(Object.entries(sprinter));
  console.info(TORTOISE, HARE);
  console.info(`${runner.name} 已跑 ${runner.distance} 公尺，目前進行總秒數：${runner.took} 秒，即將到達終點。`);
  console.info(`已大於 ${sprinter.name} 目前休息位置 ${sprinter.distance} 公尺。`);
  console.info(`1000 公尺賽程，${runner.name} 總需秒數：${++runner.took} 秒，${sprinter.name} 總需秒數：${++sprinter.took} 秒。`);
  const result = runner.took - sprinter.took;
  console.info(`${sprinter.name} 途中休息耍廢不超過 ${result} 秒，最終皆能提前抵達終點贏得比賽。`);
  return result;
}