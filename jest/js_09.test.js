

console.info = function () { }; // 註解 => jest過濾方法
const Matchers = require('../js_09');

describe('陣列相加主程式：addendGame', () => {

  describe('主程式運作', () => {
    it('回傳：[10, 10, 10, 10, 10]。', () => {
      const referenceArray = [8, 7, 9, 3, 1];
      const result = Matchers.addendGame(referenceArray);
      expect(result).toEqual([10, 10, 10, 10, 10]);
    });
    it('回傳：陣列長度：3 => 尚未達標，請重新輸入五個整數。', () => {
      const invalidLength = [8, 7, 9];
      const result = Matchers.addendGame(invalidLength);
      expect(result).toContain(`陣列長度：${invalidLength.length} => 尚未達標，請重新輸入五個整數。`);
    });
  });

  describe('空值與資料格式過濾', () => {
    it('過濾：輸入值[tmp,] => 格式錯誤，請重新輸入有效整數。', () => {
      const invalidData = ['tmp', ''];
      const result = () => Matchers.formatData(invalidData);
      expect(result).toThrow(`輸入值[${invalidData}] => 格式錯誤，請重新輸入有效整數。`);
    });
    it('過濾：輸入有效數值，字串轉成數值。', () => {
      const validData = ['8', '7', '9', '3', '1'];
      const result = Matchers.formatData(validData);
      expect(result).toEqual([8, 7, 9, 3, 1]);
    });
  });

  describe('資料長度過濾', () => {
    it('過濾：陣列長度：3 => 尚未達標，請重新輸入五個整數。', () => {
      const invalidLength = [8, 7, 9];
      const result = () => Matchers.arrayLength(invalidLength);
      expect(result).toThrow(`陣列長度：${invalidLength.length} => 尚未達標，請重新輸入五個整數。`);
    });
  });

  describe('陣列合併相加器', () => {
    it('運算：[10, 10, 10, 10, 10]。', () => {
      const termArray = [2, 3, 1, 7, 9], referenceArray = [8, 7, 9, 3, 1];
      const result = Matchers.mergeAdder(termArray, referenceArray);
      expect(result).toEqual([10, 10, 10, 10, 10]);
    });
  });

  describe('宣告陣列結果', () => {
    it('打印：[10, 10, 10, 10, 10]', () => {
      const answer = [10, 10, 10, 10, 10];
      const result = Matchers.announced(answer);
      expect(result).toEqual([10, 10, 10, 10, 10]);
    });
  });

});
