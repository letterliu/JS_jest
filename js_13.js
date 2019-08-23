/*
龜兔賽跑，兔子每秒可以跑6公尺，烏龜每秒跑0.5公尺，
他們參加100公尺競賽：兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，
請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽?
*/

//不斷確定烏龜是否已到終點，如無兔子繼續等待。


// console.log(123);

let turtle = 0.5;
let rabbit = 6;
// let result = 0;

function a() {
  let result = 0;
  for (var i = 1; result <= 100; i++) {
    result += rabbit;
    // console.log(result);
    if (!(i % 5)) {
      result -= 1;
    }
  }
  return i - 1;
}

console.log(a());


function race() {
  for (var i = 1; turtle * i <= 100; i++) {
    let result = turtle * i;
    // console.log(i);
  }
  return i - 1;
}

console.log(race()); 
