

console.info = function () { }; // 註解 => jest過濾方法
const Matchers = require('../js_10');

describe('質數主程式：primeProgram', () => {

  describe('主程式運作', () => {
    it('回傳：[7, 3]。', () => {
      const receivedata = [8, 7, 9, 3, 1];
      const result = Matchers.primeProgram(receivedata);
      expect(result).toEqual([7, 3]);
    });
    it('回傳：[3, 13, 2, 11]。', () => {
      const termArray = [];
      const result = Matchers.primeProgram(termArray);
      expect(result).toEqual([3, 13, 2, 11]);
    });
  });

  describe('空值與資料格式過濾', () => {
    it('過濾：輸入值[a,b,9,3,1] => 格式錯誤，請重新輸入有效整數。', () => {
      const invalidData = ['a', 'b', 9, 3, 1];
      const result = () => Matchers.formatData(invalidData);
      expect(result).toThrow(`輸入值[${invalidData}] => 格式錯誤，請重新輸入有效正整數。`);
    });
    it('過濾：輸入有效數值，字串轉成數值。', () => {
      const validData = ['8', '7', '9', '3', '1'];
      const result = Matchers.formatData(validData);
      expect(result).toEqual([8, 7, 9, 3, 1]);
    });
  });

  describe('替換新陣列(無輸入)', () => {
    it('預設：[3, 50, 0, 13, 2, 4, 11]。', () => {
      const array = [], termArray = [3, 50, 0, 13, 2, 4, 11];
      const result = Matchers.arrayLength(array, termArray);
      expect(result).toEqual([3, 50, 0, 13, 2, 4, 11]);
    });
  });

  describe('判斷是否為質數', () => {
    it('成立：true。', () => {
      const integer = '10';
      const result = Matchers.isPrime(integer);
      expect(result).not.toBeTruthy();
    });
  });

  describe('宣告質數陣列結果', () => {
    it('打印：[3, 13, 2, 11]', () => {
      const referenceArray = [3, 50, 0, 13, 2, 4, 11];
      const result = Matchers.announced(referenceArray);
      expect(result).toEqual([3, 13, 2, 11]);
    });
  });

});
