

console.info = function () { }; // 註解 => jest過濾方法
const Matchers = require('../js_05');

describe('遞迴主程式：recursionGame', () => {

  describe('主程式運作', () => {
    it('回傳：輸入值[a] => 格式錯誤，請重新輸入有效的正整數。', () => {
      const invalidData = 'a';
      const result = Matchers.recursionGame(invalidData);
      expect(result).toContain(`${result}`);
    });
    it('回傳：遞迴函數總和：160。', () => {
      const integer = '10';
      const result = Matchers.recursionGame(integer);
      expect(result).toContain(`${result}`);
    });
    it('回傳：輸入值[2] => 請重新輸入大於或等於 4 以上偶數值。', () => {
      const integer = '2';
      const result = Matchers.recursionGame(integer);
      expect(result).toContain(`輸入值[${integer}] => 請重新輸入大於或等於 4 以上偶數值。`);
    });
  });

  describe('空值與資料格式過濾', () => {
    it('過濾：輸入值[ ] => 格式錯誤，請重新輸入有效的正整數。', () => {
      const invalidData = ' ';
      const result = () => Matchers.formatData(invalidData);
      expect(result).toThrow(`輸入值[${invalidData}] => 格式錯誤，請重新輸入有效的正整數。`);
    });
    it('過濾：輸入有效數值，字串轉成數值。', () => {
      const validData = '6';
      const result = Matchers.formatData(validData);
      expect(result).toBe(6);
    });
  });

  describe('判斷4以上(包含4)並為偶數正整數', () => {
    it('過濾：輸入值[2] => 請重新輸入大於或等於 4 以上偶數值。', () => {
      const integer = 2;
      const result = () => Matchers.evenNumber(integer);
      expect(result).toThrow(`輸入值[${integer}] => 請重新輸入大於或等於 4 以上偶數值。`);
    });
    it('過濾：保留有效數值。', () => {
      const integer = 6;
      const result = Matchers.evenNumber(integer);
      expect(result).toBe(6);
    });
  });

  describe('遞迴運算器(數值：6)', () => {
    it('總和: 32。', () => {
      const integer = 6;
      const result = Matchers.recursionSum(integer);
      expect(result).toBe(32);
    });
  });

  describe('統計遞迴結果', () => {
    it('打印：遞迴函數總和: 32。', () => {
      const sum = 32;
      const result = Matchers.statistic(sum);
      expect(result).toContain(`遞迴函數總和：${sum}`);
    });
  });

});
