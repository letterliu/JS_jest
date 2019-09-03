/*
龜兔賽跑，兔子每秒可以跑6公尺，烏龜每秒跑0.5公尺，
他們參加100公尺競賽：兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，
請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽?
*/

// 龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，
// 他們參加300公尺競賽：兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，
// 請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽?

//不斷確定烏龜是否已到終點，如無兔子繼續等待。

const result = theTortoiseAndTheHare();
console.info(result);

function theTortoiseAndTheHare() {
  const TORTOISE = 0.28, HARE = 20, maximum = 300;
  const runner = marathon(TORTOISE);
  const sprinter = trackEvents(HARE);
  return finishLine(runner, sprinter);

  // 100公尺陸龜總共所需秒數
  function marathon(TORTOISE) {
    for (var sec = 0, ranMeters = 0; ranMeters <= maximum; sec++) {
      ranMeters += TORTOISE;
    }
    return {
      name: 'tortoise',
      took: sec
    };
  }

  // 100公尺野兔總共所需秒數
  function trackEvents(HARE) {
    for (var sec = 0, ranMeters = 0; ranMeters <= maximum; sec++) {
      ranMeters += HARE;
      if (!(sec % 5)) {
        --ranMeters;
      }
    }
    return {
      name: 'hare',
      took: sec
    };
  }

  // 龜兔賽跑公佈結果
  function finishLine(runner, sprinter) {
    console.info(`300 公尺賽程，${runner.name} 總需秒數：${runner.took} 秒，${sprinter.name} 總需秒數：${sprinter.took} 秒。`);
    const result = runner.took - sprinter.took;
    console.info(`${sprinter.name} 途中休息耍廢不超過 ${result} 秒，最終皆能提前抵達終點贏得比賽。`);
    return result;
  }
}