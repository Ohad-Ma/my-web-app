// __tests__/script.test.js
const { sum, sub } = require('../script');
// const {greet} = require('../script');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtract 1 - 2 to equal -1', () => {
    expect(sub(1,2)).toBe(-1)
});