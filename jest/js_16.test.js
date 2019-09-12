

console.info = function () { }; // 註解 => jest過濾方法
const Matchers = require('../js_16');

describe('凱撒密碼主程式：caesarCipher', () => {

  describe('主程式運作', () => {
    // it('回傳：尚未輸入平移位數，請重新填入數目。', () => {
    //   const RECEIVEDATA = [''], RECEIVENUMBER = '12';
    //   const result = Matchers.caesarCipher(RECEIVEDATA, RECEIVENUMBER);
    //   expect(result).toContain('輸入值[] => 格式錯誤，請重新輸入明文字母表。');
    // });
    it('回傳：尚未輸入平移位數，請重新填入數目。', () => {
      const RECEIVEDATA = ['letter'], RECEIVENUMBER = '';
      const result = Matchers.caesarCipher(RECEIVEDATA, RECEIVENUMBER);
      expect(result).toContain('尚未輸入平移位數，請重新填入數目。');
    });
    it('回傳：{ displacement: 5, encoded: "ETJ" }。', () => {
      const RECEIVEDATA = ['zoe'], RECEIVENUMBER = '5';
      const result = Matchers.caesarCipher(RECEIVEDATA, RECEIVENUMBER);
      expect(result).toEqual({ "displacement": 5, "encoded": "ETJ" });
    });
    it('回傳：{ displacement: -3, encoded: "XIBU" }。', () => {
      const RECEIVEDATA = ['alex'], RECEIVENUMBER = '-3';
      const result = Matchers.caesarCipher(RECEIVEDATA, RECEIVENUMBER);
      expect(result).toEqual({ "displacement": -3, "encoded": "XIBU" });
    });
  });

  describe('空值與資料格式過濾', () => {
    it('過濾：輸入值[123] => 格式錯誤，請重新輸入明文字母表。', () => {
      const RECEIVEDATA = ['123'], RECEIVENUMBER = '-3';
      const result = () => Matchers.formatData(RECEIVEDATA, RECEIVENUMBER);
      expect(result).toThrow(`輸入值[${RECEIVEDATA}] => 格式錯誤，請重新輸入明文字母表。`);
    });
    it('過濾：尚未輸入平移位數，請重新填入數目。', () => {
      const RECEIVEDATA = ['letter'], RECEIVENUMBER = '';
      const result = () => Matchers.formatData(RECEIVEDATA, RECEIVENUMBER);
      expect(result).toThrow('尚未輸入平移位數，請重新填入數目。');
    });
    it('過濾：輸入有效數值，字串轉成數值。', () => {
      const RECEIVEDATA = ['letter'], RECEIVENUMBER = '7';
      const result = Matchers.formatData(RECEIVEDATA, RECEIVENUMBER);
      expect(result).toBe(7);
    });
  });

  describe('ASCII code 位移數', () => {
    it('轉換：{ ASCII: [ 76, 69, 84, 84, 69, 82 ], displacement: 7 }。', () => {
      const receivedata = ['letter'], displacement = 7;
      const result = Matchers.ASCII(receivedata, displacement);
      expect(result).toEqual({ ASCII: [76, 69, 84, 84, 69, 82], displacement: 7 });
    });
  });

  describe('明文加密運轉器', () => {
    it('轉換：{ encoded: "SLAALY", displacement: 7 }。', () => {
      const object = { ASCII: [76, 69, 84, 84, 69, 82], displacement: 7 };
      const result = Matchers.encryption(object);
      expect(result).toEqual({ 'encoded': 'SLAALY', displacement: 7 });
    });
  });

  describe('公佈密文結果', () => {
    it('加密：{ displacement: 7, encoded: "SLAALY" }。', () => {
      const ciphertext = { 'encoded': 'SLAALY', displacement: 7 };
      const result = Matchers.announced(ciphertext);
      expect(result).toEqual({ displacement: 7, encoded: 'SLAALY' });
    });
  });

});
