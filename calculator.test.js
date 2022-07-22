const calc = require('./calculator');

describe('Addition', () => {
  test('Add the variables a and b', () => {
    expect(calc.addition(12, 4)).toEqual(16);
  });

  test('Add the variables a and b', () => {
    expect(calc.addition(3, 9)).toEqual(12);
  });
});
describe('subtraction', () => {
  test('subtract b from a', () => {
    expect(calc.subtraction(20, 20)).toEqual(0);
  });

  test('subtract b from a', () => {
    expect(calc.subtraction(200, 10)).toEqual(190);
  });
});

describe('division', () => {
  test('divide a by b', () => {
    expect(calc.division(1000, 10)).toEqual(100);
  });

  test('divide a by b', () => {
    expect(calc.division(40, 4)).toEqual(10);
  });
});

describe('multiplication', () => {
  test('multiply the variables a and b', () => {
    expect(calc.multiplication(0, 20)).toEqual(0);
  });

  test('multiply the variables a and b', () => {
    expect(calc.multiplication(1, 1)).toEqual(1);
  });
});
