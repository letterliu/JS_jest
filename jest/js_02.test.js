

console.info = function () { }; // 註解 => jest過濾方法
const Matchers = require('../js_02');

describe('餘數主程式：congruentNumber', () => {

  describe('主程式運作', () => {
    it('回傳：帶有空值，請重新輸入兩筆資料。', () => {
      const validNull = ['1', ''];
      const result = Matchers.congruentNumber(validNull);
      expect(result).toContain(`[${validNull}] 帶有空值，請重新輸入兩筆資料。`);
    });

    it('回傳：殘念！餘數相比出現差異，請試著再挑戰一次。', () => {
      const validData = ['1', '3'];
      const result = Matchers.congruentNumber(validData);
      expect(result).toContain('殘念！餘數相比出現差異，請試著再挑戰一次。');
    });

    it('回傳：恭喜！條件符合餘數相同，闖關成功。', () => {
      const validData = ['-2', '-5'];
      const result = Matchers.congruentNumber(validData);
      expect(result).toContain('恭喜！條件符合餘數相同，闖關成功。');
    });
  });

  describe('空值與資料長度過濾', () => {
    it('過濾：帶有空值，請重新輸入兩筆資料。', () => {
      const invalidData = ['1', ' '];
      const result = () => Matchers.formatData(invalidData);
      expect(result).toThrow(`[${invalidData}] 帶有空值，請重新輸入兩筆資料。`);
    });
  });

  describe('保留正負整數((零除外)', () => {
    it('無效：格式錯誤，請重新輸入兩個有效的正負整數。', () => {
      const invalidData = ['0', 'b'];
      const result = () => Matchers.validateData(invalidData);
      expect(result).toThrow(`[${invalidData}] 格式錯誤，請重新輸入兩個有效的正負整數。`);
    });
  });

  describe('判斷餘數是否相等。', () => {
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

  describe('揭曉答案。', () => {
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


// import goodIdeasCinema from '../js_01';
// expect(() => goodIdeasCinema.validateData('z')).toThrow('格式錯誤，請重新輸入有效的正整數。');
// expect(() => goodIdeasCinema.validateData('')).toThrow('無任何資料，請重新輸入。');
// expect(goodIdeasCinema.validateData('5')).toBe(5);
// expect(goodIdeasCinema.sneakPreview(1)).toContain('d(\`･∀･)b 進場人數: ${attendance}人，好想電影院試映場播放中。');
      // expect(func.sneakPreview(0)).toContain('好想電影院暫停播放，請稍待片刻。');


