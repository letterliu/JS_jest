

let func = require('../js_01')

describe('電影院主程式：goodIdeasCinema', () => {

  describe('資料格式過濾', () => {
    test('過濾：英文、負數、浮點數', () => {
      // let invalidData = 'z';
      // let result = func.validateData(invalidData);
      // expect(() => { result }).toThrow('格式錯誤，請重新輸入有效的正整數。');
      expect(() => func.validateData('z')).toThrow('格式錯誤，請重新輸入有效的正整數。');
    })

    test('過濾：無填取任何資料', () => {
      expect(() => func.validateData(' ')).toThrow('無任何資料，請重新輸入。');
    })

    test('過濾：字串轉成數字', () => {
      let validData = '5';
      let result = func.validateData(validData);
      expect(result).toBe(5);
      // expect(func.validateData('5')).toBe(5);
    })
  });

  describe('進場總人數統計', () => {
    test('目前進場人數大於 1 位，試映場播放', () => {
      let attendance = 1;
      let result = func.sneakPreview(attendance);
      expect(result).toContain('d(\`･∀･)b 進場人數: ${attendance}人，好想電影院試映場播放中。');
      // expect(func.sneakPreview(1)).toContain('d(\`･∀･)b 進場人數: ${attendance}人，好想電影院試映場播放中。');
    })
    test('目前進場人數 0 位，試映場暫停播放', () => {
      let attendance = 0;
      let result = func.sneakPreview(attendance);
      expect(result).toContain('好想電影院暫停播放，請稍待片刻。');
      // expect(func.sneakPreview(0)).toContain('好想電影院暫停播放，請稍待片刻。');
    })
  });
})

// test('正則表達式', () => {
  //   expect(func.validateData('A')).toMatch(/A/);
  // });