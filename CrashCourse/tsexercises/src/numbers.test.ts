import {
  isEven,
  isOdd,
  roundNumber,
  floorNumber,
  ceilNumber,
  absoluteValue,
  isPositive,
  isNegative,
  parseToInteger,
  numberToString,
} from './numbers';

describe('Number Exercises', () => {
  describe('isEven', () => {
    test('identifies even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(4)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(3)).toBe(false);
      expect(isEven(5)).toBe(false);
    });
  });

  describe('isOdd', () => {
    test('identifies odd numbers', () => {
      expect(isOdd(1)).toBe(true);
      expect(isOdd(3)).toBe(true);
      expect(isOdd(5)).toBe(true);
      expect(isOdd(2)).toBe(false);
      expect(isOdd(4)).toBe(false);
      expect(isOdd(0)).toBe(false);
    });
  });

  describe('roundNumber', () => {
    test('rounds to nearest integer', () => {
      expect(roundNumber(4.3)).toBe(4);
      expect(roundNumber(4.7)).toBe(5);
      expect(roundNumber(4.5)).toBe(5);
      expect(roundNumber(-4.3)).toBe(-4);
      expect(roundNumber(-4.7)).toBe(-5);
    });
  });

  describe('floorNumber', () => {
    test('rounds down to nearest integer', () => {
      expect(floorNumber(4.3)).toBe(4);
      expect(floorNumber(4.9)).toBe(4);
      expect(floorNumber(-4.3)).toBe(-5);
      expect(floorNumber(5)).toBe(5);
    });
  });

  describe('ceilNumber', () => {
    test('rounds up to nearest integer', () => {
      expect(ceilNumber(4.1)).toBe(5);
      expect(ceilNumber(4.9)).toBe(5);
      expect(ceilNumber(-4.9)).toBe(-4);
      expect(ceilNumber(5)).toBe(5);
    });
  });

  describe('absoluteValue', () => {
    test('returns absolute value', () => {
      expect(absoluteValue(5)).toBe(5);
      expect(absoluteValue(-5)).toBe(5);
      expect(absoluteValue(0)).toBe(0);
      expect(absoluteValue(-3.14)).toBe(3.14);
    });
  });

  describe('isPositive', () => {
    test('identifies positive numbers', () => {
      expect(isPositive(1)).toBe(true);
      expect(isPositive(5.5)).toBe(true);
      expect(isPositive(0)).toBe(false);
      expect(isPositive(-1)).toBe(false);
    });
  });

  describe('isNegative', () => {
    test('identifies negative numbers', () => {
      expect(isNegative(-1)).toBe(true);
      expect(isNegative(-5.5)).toBe(true);
      expect(isNegative(0)).toBe(false);
      expect(isNegative(1)).toBe(false);
    });
  });

  describe('parseToInteger', () => {
    test('parses string to integer', () => {
      expect(parseToInteger('123')).toBe(123);
      expect(parseToInteger('42')).toBe(42);
      expect(parseToInteger('0')).toBe(0);
      expect(parseToInteger('abc')).toBeNaN();
      expect(parseToInteger('')).toBeNaN();
    });
  });

  describe('numberToString', () => {
    test('converts number to string', () => {
      expect(numberToString(123)).toBe('123');
      expect(numberToString(0)).toBe('0');
      expect(numberToString(-42)).toBe('-42');
      expect(numberToString(3.14)).toBe('3.14');
    });
  });
});