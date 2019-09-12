

console.info = function () { }; // 註解 => jest過濾方法
const Matchers = require('../js_12');

describe('質數倍數主程式：primeProgram', () => {

  describe('主程式運作', () => {
    it('回傳：{ "11": [11, 22, 33, 44, 55, 66, 77, 88, 99], "13": [13, 26, 39, 52, 65, 78, 91], "17": [17, 34, 51, 68, 85], "19": [19, 38, 57, 76, 95] }。', () => {
      const termArray = [];
      const result = Matchers.primeProgram(termArray);
      expect(result).toEqual({ "11": [11, 22, 33, 44, 55, 66, 77, 88, 99], "13": [13, 26, 39, 52, 65, 78, 91], "17": [17, 34, 51, 68, 85], "19": [19, 38, 57, 76, 95] });
    });
    it('回傳：{ "7": [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98] }。', () => {
      const termArray = ['7'];
      const result = Matchers.primeProgram(termArray);
      expect(result).toEqual({ "7": [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98] });
    });
  });

  describe('空值與資料格式過濾', () => {
    it('過濾：輸入值["a"] => 格式錯誤，請重新輸入有效正整數。。', () => {
      const invalidData = ['a'];
      const result = () => Matchers.formatData(invalidData);
      expect(result).toThrow(`輸入值[${invalidData}] => 格式錯誤，請重新輸入有效正整數。`);
    });
    it('過濾：輸入有效數值，字串轉成數值。', () => {
      const validData = ['7'];
      const result = Matchers.formatData(validData);
      expect(result).toEqual([7]);
    });
  });

  describe('替換新陣列(無輸入)', () => {
    it('預設：[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]。', () => {
      const array = [], termArray = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
      const result = Matchers.arrayLength(array, termArray);
      expect(result).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });
  });

  describe('質數過濾器', () => {
    it('成立：true。', () => {
      const integer = 11;
      const result = Matchers.isPrime(integer);
      expect(result).toBeTruthy();
    });
  });

  describe('質數組成新陣列', () => {
    it('成立：[11, 19]。', () => {
      const referenceArray = [11, 12, 15, 19];
      const result = Matchers.primeArray(referenceArray);
      expect(result).toEqual([11, 19]);
    });
  });

  describe('倍數化物件', () => {
    it('運轉：{"11": [11, 22, 33, 44, 55, 66, 77, 88, 99], "19": [19, 38, 57, 76, 95]}。', () => {
      const selectArray = [11, 19];
      const result = Matchers.multiplePrime(selectArray);
      expect(result).toEqual({ "11": [11, 22, 33, 44, 55, 66, 77, 88, 99], "19": [19, 38, 57, 76, 95] });
    });
  });

  describe('質數倍數化', () => {
    it('運轉：[11, 22, 33, 44, 55, 66, 77, 88, 99]。', () => {
      const selectArray = [], prime = 11, count = 1, maximum = 100;
      const result = Matchers.isMultiple(selectArray, prime, count, maximum);
      expect(result).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99]);
    });
  });

  describe('陣列倍數後結果', () => {
    it('打印：{"19": [19, 38, 57, 76, 95] }。', () => {
      const termArray = { "19": [19, 38, 57, 76, 95] };
      const result = Matchers.announced(termArray);
      expect(result).toEqual({ "19": [19, 38, 57, 76, 95] });
    });
  });
});
