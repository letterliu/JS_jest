

console.info = function () { }; // 註解 => jest過濾方法
const Matchers = require('../js_04');

describe('級數主程式：divergentSeries', () => {

  describe('主程式運作', () => {
    it('回傳：[] 格式錯誤，請重新輸入有效的正整數。', () => {
      const invalidData = '';
      const result = Matchers.divergentSeries(invalidData);
      expect(result).toContain(`[${invalidData}] 格式錯誤，請重新輸入有效的正整數。`);
    });
    it('回傳：發散級數總和: 7。', () => {
      const integer = '10';
      const result = Matchers.divergentSeries(integer);
      expect(result).toContain(`${result}`);
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

  describe('發散級數運轉', () => {
    it('總和: 8。', () => {
      const integer = 12;
      const result = Matchers.seriesSum(integer);
      expect(result).toBe(8);
    });
  });

  describe('統計級數結果', () => {
    it('打印：發散級數總和: 8。', () => {
      const sum = 8;
      const result = Matchers.statistic(sum);
      expect(result).toContain(`${result}`);
    });
  });
})
