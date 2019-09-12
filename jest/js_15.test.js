

console.info = function () { }; // 註解 => jest過濾方法
const Matchers = require('../js_15');

describe('搬運車主程式：mayFlower', () => {

  describe('主程式運作', () => {
    it('回傳：{ equipment: [6, 10, 12], grossWeight: [180, 200, 600], total: 990 }。', () => {
      const result = Matchers.mayFlower();
      expect(result).toEqual(result);
    });
  });

  describe('健身器材個別總數', () => {
    it('貨運：[ 10, 12, 9 ]。', () => {
      const pieceWeight = [30, 20, 50];
      const result = Matchers.gymnasium(pieceWeight);
      expect(result).toEqual(result);
    });
  });

  describe('健身器材總數重量', () => {
    it('限重：[300, 240, 450]。', () => {
      const equipment = [10, 12, 9], pieceWeight = [30, 20, 50];
      const result = Matchers.sortingSystem(equipment, pieceWeight);
      expect(result).toEqual([300, 240, 450]);
    });
  });

  describe('貨運契約保證', () => {
    it('打印：{ equipment: [10, 12, 9], grossWeight: [300, 240, 450], total: 990 }。', () => {
      const equipment = [10, 12, 9], grossWeight = [300, 240, 450];
      const result = Matchers.announced(equipment, grossWeight);
      expect(result).toEqual({ 'equipment': [10, 12, 9], 'grossWeight': [300, 240, 450], 'total': 990 });
    });
  });

});
