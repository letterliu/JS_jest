
console.info = function () { }; // 註解 => jest過濾方法
const Matchers = require('../js_01');

describe('電影院主程式：goodIdeasCinema', () => {

  describe('主程式運作', () => {
    it('回傳：有效人數，試映場播放中。', () => {
      const validData = '1';
      const result = Matchers.goodIdeasCinema(validData);
      expect(result).toContain('電影院試映場播放中。');
    })
    it('回傳：無效空值，重新輸入。', () => {
      const validNull = '';
      const result = Matchers.goodIdeasCinema(validNull)
      expect(result).toContain('無任何資料，請重新輸入。');
    })
  });

  describe('資料格式過濾', () => {
    it('過濾：保留數字，瞥除其他數值。', () => {
      const invalidData = '-0.3';
      expect(invalidData).toMatch(/[^0-9]/);
    })
    it('過濾：將字串轉成數字。', () => {
      const validData = '5';
      const result = Matchers.validateData(validData);
      expect(result).toBe(5);
    })
    it('過濾：格式錯誤，請重新輸入有效的正整數。', () => {
      const invalidData = '測試文字';
      const result = () => Matchers.validateData(invalidData);
      expect(result).toThrow('格式錯誤，請重新輸入有效的正整數。');
    })
    it('過濾：印出無任何資料，請重新輸入。', () => {
      const invalidData = '';
      const result = () => Matchers.validateData(invalidData);
      expect(result).toThrow('無任何資料，請重新輸入。');
    })
  });

  describe('進場總人數統計', () => {
    it('播放：進場人數大於 1 位，打印試映場播放。', () => {
      const attendance = 1;
      const result = Matchers.sneakPreview(attendance);
      expect(result).toContain(`進場人數: ${attendance} 人，好想電影院試映場播放中。`);
    })
    it('暫停：進場人數等於 0 位，打印試映場暫停播放。', () => {
      const attendance = 0;
      const result = Matchers.sneakPreview(attendance);
      expect(result).toContain('好想電影院暫停播放，請稍待片刻。');
    })
  });
})


// import goodIdeasCinema from '../js_01';
// expect(() => goodIdeasCinema.validateData('z')).toThrow('格式錯誤，請重新輸入有效的正整數。');
// expect(() => goodIdeasCinema.validateData('')).toThrow('無任何資料，請重新輸入。');
// expect(goodIdeasCinema.validateData('5')).toBe(5);
// expect(goodIdeasCinema.sneakPreview(1)).toContain('d(\`･∀･)b 進場人數: ${attendance}人，好想電影院試映場播放中。');
      // expect(func.sneakPreview(0)).toContain('好想電影院暫停播放，請稍待片刻。');


