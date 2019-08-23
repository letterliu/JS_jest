
const congruentNumber = require('./js_02');

test('恭喜！條件符合餘數相同', () => {
  expect(congruentNumber([3, 5])).toContain('恭喜！條件符合餘數相同');
});
