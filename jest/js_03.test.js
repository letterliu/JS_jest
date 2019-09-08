

console.info = function () { }; // 註解 => jest過濾方法
const Matchers = require('../js_03');

describe('餘數主程式：ticketingSystem', () => {

  describe('主程式運作', () => {
    it('回傳：[] 帶有空值，請重新輸入資料。', () => {
      const invalidData = '';
      const result = Matchers.ticketingSystem(invalidData);
      expect(result).toContain(`[${invalidData}] 帶有空值，請重新輸入資料。`);
    });
    it('回傳：入場年齡：36 歲，優待票價：400 元。', () => {
      const exactAge = '36';
      const result = Matchers.ticketingSystem(exactAge);
      expect(result).toContain(`入場年齡：36 歲，全票票價：400 元。`);
    });
    it('回傳：入場年齡：75 歲，優待票價：200 元。', () => {
      const exactAge = '75';
      const result = Matchers.ticketingSystem(exactAge);
      expect(result).toContain(`入場年齡：${exactAge} 歲，優待票價：200 元。`);
    });
  });

  describe('空值與資料格式過濾', () => {
    it('過濾：[] 帶有空值，請重新輸入資料。', () => {
      const data = ' ';
      const result = () => Matchers.formatData(data);
      expect(result).toThrow(`[${data}] 帶有空值，請重新輸入資料。`);
    });
    it('過濾：格式錯誤，請重新輸入有效的正整數。', () => {
      const invalidData = 'a';
      const result = () => Matchers.formatData(invalidData);
      expect(result).toThrow('格式錯誤，請重新輸入有效的正整數。');
    });
  });

  describe('一般票價、優惠票', () => {
    it('一般：入場年齡：18 歲，全票票價：400 元。', () => {
      const exactAge = '18';
      const result = Matchers.bookingTickets(exactAge);
      expect(result).toContain(`入場年齡：${exactAge} 歲，全票票價：400 元。`);
    });
    it('優惠：入場年齡：3 歲，優待票價：200 元。', () => {
      const exactAge = '3';
      const result = Matchers.bookingTickets(exactAge);
      expect(result).toContain(`入場年齡：${exactAge} 歲，優待票價：200 元。`);
    });
  });
})
