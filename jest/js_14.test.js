

console.info = function () { }; // 註解 => jest過濾方法
const Matchers = require('../js_14');

describe('病菌失控主程式：twoFold', () => {

  describe('主程式運作', () => {
    it('回傳：{ "contagion": 640, "countDown": 100, "virus": 20 }。', () => {
      const receivedata = ['20', '100'];
      const result = Matchers.twoFold(receivedata);
      expect(result).toEqual({ "contagion": 640, "countDown": 100, "virus": 20 });
    });
  });

  describe('空值與資料格式過濾', () => {
    it('過濾：輸入值[a] => 格式錯誤，請重新輸入兩個有效正整數。', () => {
      const invalidData = ['a'];
      const result = () => Matchers.formatData(invalidData);
      expect(result).toThrow(`輸入值[${invalidData}] => 格式錯誤，請重新輸入兩個有效正整數。`);
    });
    it('過濾：輸入值[20] => 格式錯誤，請重新輸入兩個有效正整數。', () => {
      const invalidData = [20];
      const result = () => Matchers.formatData(invalidData);
      expect(result).toThrow(`輸入值[${invalidData}] => 格式錯誤，請重新輸入兩個有效正整數。`);
    });
    it('過濾：輸入有效數值，字串轉成數值。', () => {
      const validData = ['6', '100'];
      const result = Matchers.formatData(validData);
      expect(result).toEqual([6, 100]);
    });
  });

  describe('時間靜止前，病毒2倍數成長', () => {
    it('運算：192。', () => {
      const virus = 6, countDown = 100, period = 20;
      const result = Matchers.recursion(virus, countDown, period);
      expect(result).toBe(192);
    });
  });

  describe('宣佈病毒報告', () => {
    it('打印：{ "contagion": 192, "countDown": 100, "virus": 6 }。', () => {
      const contagion = 192, virus = 6, countDown = 100;
      const result = Matchers.announced(contagion, virus, countDown);
      expect(result).toEqual({ "contagion": 192, "countDown": 100, "virus": 6 });
    });
  });

});
