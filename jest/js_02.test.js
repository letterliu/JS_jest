

console.info = function () { }; // 註解 => jest過濾方法
const Matchers = require('../js_02');

describe('餘數主程式：congruentNumber', () => {

  describe('主程式運作', () => {
    it('不能輸入""', () => {
      const validNull = ['1', ''];

      const result = Matchers.congruentNumber(validNull);

      expect(result).toContain(`FormatError:`);
      expect(result).toContain(`[${validNull}]`);
      expect(result).toContain(`空字串`);
      // expect(result).toContain(`重新輸入兩筆資料`);
    });
    it('不能輸入字串', () => {
      const validData = ['a', 'b'];
      const result = Matchers.congruentNumber(validData);
      expect(result).toContain(`[${validData}]`);
      expect(result).toContain(`兩個`);
      expect(result).toContain(`正負整數`);
    });
    it('餘數不相同，回傳殘念！', () => {
      const validData = ['1', '3'];
      const result = Matchers.congruentNumber(validData);
      expect(result).toContain('殘念！餘數相比出現差異，請試著再挑戰一次。');
    });
    it('餘數相同，闖關成功。', () => {
      const validData = ['-2', '-5'];
      const result = Matchers.congruentNumber(validData);
      expect(result).toContain('恭喜！條件符合餘數相同，闖關成功。');
    });
  });

  describe('空字串與資料長度過濾', () => {
    it('測試空字串', () => {
      const invalidData = ['1', ' '];
      const result = () => Matchers.formatData(invalidData);
      // expect(result).toThrow(`FormatError:`);
      expect(result).toThrow(`[${invalidData}]`);
      expect(result).toThrow(`空字串`);
      // expect(result).toThrow(`重新輸入兩筆資料`);
    });
    it('測試資料長度', () => {
      const invalidData = ['1'];
      const result = () => Matchers.formatData(invalidData);

      // expect(result).toThrow(`FormatError:`);
      expect(result).toThrow(`[${invalidData}]`);
      // expect(result).toThrow(`空字串`);
      expect(result).toThrow(`重新輸入兩筆資料`);
    });
  });

  describe('保留正負整數((零除外)', () => {
    it('無效：格式錯誤，請重新輸入兩個有效的正負整數。', () => {
      const invalidData = ['a', 'b'];
      const result = () => Matchers.validateData(invalidData);
      expect(result).toThrow(`[${invalidData}] 格式錯誤，請重新輸入兩個有效的正負整數。`);
    });
  });

  describe('判斷餘數是否相等', () => {
    it('相等：true。', () => {
      const comparingNumbers = [2, 5];
      const result = Matchers.congruentEqual(comparingNumbers);
      expect(result).toBeTruthy();
    });
    it('差異：false。', () => {
      const comparingNumbers = [1, 3];
      const result = Matchers.congruentEqual(comparingNumbers);
      expect(result).toBeFalsy();
    });
  });

  describe('揭曉答案', () => {
    it('成立：恭喜！條件符合餘數相同，闖關成功。', () => {
      const answer = true;
      const result = Matchers.revealAnswer(answer);
      expect(result).toContain('恭喜！條件符合餘數相同，闖關成功。');
    });
    it('否定：殘念！餘數相比出現差異，請試著再挑戰一次。', () => {
      const answer = false;
      const result = Matchers.revealAnswer(answer);
      expect(result).toContain('殘念！餘數相比出現差異，請試著再挑戰一次。');
    });
  });
})
