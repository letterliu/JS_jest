

console.info = function () { }; // 註解 => jest過濾方法
const Matchers = require('../js_08');

describe('遞迴函數主程式：recursionSystem', () => {

  describe('主程式運作', () => {
    it('回傳：遞迴除法最終結果：0.0041，跳出遞迴系統。', () => {
      const number = '7';
      const result = Matchers.recursionSystem(number);
      expect(result).toContain(`遞迴除法最終結果：0.0096，跳出遞迴系統。`);
    });
  });

  describe('空值與資料格式過濾', () => {
    it('過濾：輸入值[-1] => 格式錯誤，請重新輸入有效的正整數。', () => {
      const invalidData = '-1';
      const result = () => Matchers.formatData(invalidData);
      expect(result).toThrow(`輸入值[${invalidData}] => 格式錯誤，請重新輸入有效的正整數。`);
    });
    it('過濾：輸入有效數值，字串轉成數值。', () => {
      const number = '7';
      const result = Matchers.formatData(number);
      expect(result).toBe(7);
    });
  });

  describe('遞迴運算器', () => {
    it('累加：{ number: 0.009602194787379972, roundTime: 6 }。', () => {
      const number = 7;
      const result = Matchers.divideMachine(number);
      expect(result).toEqual({ 'number': 0.009602194787379972, 'roundTime': 6 });
    });
  });

  describe('修整浮點位數', () => {
    it('運算：{ number: 0.0096, roundTime: 6 }。', () => {
      const receiver = { number: 0.009602194787379972, roundTime: 6 };
      const result = Matchers.remainder(receiver);
      expect(result).toEqual({ number: '0.0096', roundTime: 6 });
    });
  });

  describe('遞迴函數結果', () => {
    it('打印：最終進行次數：總共 6 次，遞迴除法最終結果：0.0096，跳出遞迴系統。', () => {
      const answer = { number: 0.0096, roundTime: 6 };
      const result = Matchers.announced(answer);
      expect(result).toContain(`最終進行次數：總共 ${answer.roundTime} 次，遞迴除法最終結果：${answer.number}，跳出遞迴系統。`);
    });
  });

});
