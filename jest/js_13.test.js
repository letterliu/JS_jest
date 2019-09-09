

console.info = function () { }; // 註解 => jest過濾方法
const Matchers = require('../js_13');

describe('龜兔賽跑主程式：theTortoiseAndTheHare', () => {

  describe('主程式運作', () => {
    it('回傳：3521。', () => {
      const result = Matchers.theTortoiseAndTheHare();
      expect(result).toBe(3521);
    });
  });

  describe('陸龜1000公尺競賽', () => {
    it('紀錄：{"distance": 999.8799999999285, "name": "tortoise", "took": 3571}。', () => {
      const TORTOISE = 0.28, maximum = 1000;
      const result = Matchers.marathon(TORTOISE, maximum);
      expect(result).toEqual({ "distance": 999.8799999999285, "name": "tortoise", "took": 3571 });
    });
  });

  describe('野兔1000公尺競賽', () => {
    it('紀錄：{ "distance": 990, "name": "hare", "took": 50 }。', () => {
      const HARE = 20, maximum = 1000;
      const result = Matchers.trackEvents(HARE, maximum);
      expect(result).toEqual({ "distance": 990, "name": "hare", "took": 50 });
    });
  });

  describe('龜兔賽跑公佈結果', () => {
    it('打印：3521', () => {
      const runner = { "distance": 999.8799999999285, "name": "tortoise", "took": 3571 }, sprinter = { "distance": 990, "name": "hare", "took": 50 };
      const result = Matchers.finishLine(runner, sprinter);
      expect(result).toBe(3521);
    });
  });

});
