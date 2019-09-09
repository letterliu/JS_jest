

console.info = function () { }; // 註解 => jest過濾方法
const Matchers = require('../js_11');

describe('會費主程式：gymnasium', () => {

  describe('主程式運作', () => {
    it('回傳：{ "cumulativeBonus": 200, "periods": 7, "sum": 3195 }。', () => {
      const receivedata = '7';
      const result = Matchers.gymnasium(receivedata);
      expect(result).toEqual({ "cumulativeBonus": 200, "periods": 7, "sum": 3195 });
    });
  });

  describe('空值與資料格式過濾', () => {
    it('過濾：[a] 格式錯誤，請重新輸入有效的正整數。', () => {
      const invalidData = 'a';
      const result = () => Matchers.formatData(invalidData);
      expect(result).toThrow(`[${invalidData}] 格式錯誤，請重新輸入有效的正整數。`);
    });
    it('過濾：輸入有效數值，字串轉成數值。', () => {
      const validData = '6';
      const result = Matchers.formatData(validData);
      expect(result).toBe(6);
    });
  });

  describe('會員資料紀錄', () => {
    it('運算：{ cumulativeBonus: 200, periods: 6, sum: 2695 }', () => {
      const validData = 6;
      const result = Matchers.members(validData);
      expect(result).toEqual({ 'cumulativeBonus': 200, 'periods': 6, 'sum': 2695 });
    });
  });

  describe('宣告總期數與會費', () => {
    it('打印：{ cumulativeBonus: 200, periods: 6, sum: 2695 }', () => {
      const validData = { 'cumulativeBonus': 200, 'periods': 6, 'sum': 2695 };
      const result = Matchers.announced(validData);
      expect(result).toEqual({ 'cumulativeBonus': 200, 'periods': 6, 'sum': 2695 });
    });
  });

});
