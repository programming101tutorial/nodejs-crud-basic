const sum = require('../app/services/sum');

test('adds 1 + 2 to equal 3', (done) => {
  expect(sum(1, 2)).toBe(3);
  done();
});