const sum = require('./sum'); // Asegúrate de que solo haya una declaración

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});