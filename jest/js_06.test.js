

console.info = function () { }; // 註解 => jest過濾方法
const Matchers = require('../js_06');

describe('字母表主程式：alphabetGame', () => {

  describe('主程式運作', () => {
    it('回傳：輸入值["9m88","letter"] => 格式錯誤，請重新輸入有效英文字母。', () => {
      const invalidData = ['9m88', 'letter'];
      const result = Matchers.alphabetGame(invalidData);
      expect(result).toContain(`輸入值[${invalidData}] => 格式錯誤，請重新輸入有效英文字母。`);
    });
    it('回傳：遊戲人數 2 人 => 尚未達標，請重新輸入參與挑戰，共四位英文名字。', () => {
      const invalidLength = ['letter', 'nick'];
      const result = Matchers.alphabetGame(invalidLength);
      expect(result).toContain(`遊戲人數 2 人 => 尚未達標，請重新輸入參與挑戰，共四位英文名字。`);
    });
    it('回傳：隨機取樣新字母：["l","t","e","p","n","y"]，您都唸對了嗎？', () => {
      const members = ['letter', 'nick', 'penny', 'dot'];
      const result = Matchers.alphabetGame(members);
      expect(result).toContain(`隨機取樣新字母：[l,t,e,p,n,y]，您都唸對了嗎？`);
    });
  });

  describe('空值與資料格式過濾', () => {
    it('過濾：輸入值[123,] => 格式錯誤，請重新輸入有效英文字母。', () => {
      const invalidData = ['123', ''];
      const result = () => Matchers.formatData(invalidData);
      expect(result).toThrow(`輸入值[${invalidData}] => 格式錯誤，請重新輸入有效英文字母。`);
    });
    it('過濾：保留有效字串。', () => {
      const validData = ['letter', 'dot'];
      const result = Matchers.formatData(validData);
      expect(result).toEqual(['letter', 'dot']);
    });
  });

  describe('資料長度過濾', () => {
    it('過濾：遊戲人數 3 人 => 尚未達標，請重新輸入參與挑戰，共四位英文名字。', () => {
      const invalidLength = ['letter', 'nick', 'dot'];
      const result = () => Matchers.attendance(invalidLength);
      expect(result).toThrow(`遊戲人數 ${invalidLength.length} 人 => 尚未達標，請重新輸入參與挑戰，共四位英文名字。`);
    });
  });

  describe('會員條件審核', () => {
    it('篩選：奇數黃金會員。', () => {
      const goldMembers = ['letter', 'dot', 'penny', 'nick'];
      const result = Matchers.selection(goldMembers);
      expect(result).toEqual(['letter', 'penny']);
    });
  });

  describe('保留會員姓名奇數字母', () => {
    it('篩選：["l", "t", "e", "p", "n", "y"]。', () => {
      const goldMembers = ['letter', 'penny'];
      const result = Matchers.oddCharacters(goldMembers);
      expect(result).toEqual(['l', 't', 'e', 'p', 'n', 'y']);
    });
  });

  describe('執行字母表結果', () => {
    it('打印：隨機取樣新字母：[l,t,e,p,n,y]，您都唸對了嗎？', () => {
      const answer = ['l', 't', 'e', 'p', 'n', 'y'];
      const result = Matchers.announced(answer);
      expect(result).toContain(`隨機取樣新字母：[${answer}]，您都唸對了嗎？`);
    });
  });

});
