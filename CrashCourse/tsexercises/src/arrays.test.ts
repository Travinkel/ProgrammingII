import {
  getFirstElement,
  getLastElement,
  sumArray,
  filterEvenNumbers,
  doubleNumbers,
  findMaxNumber,
  containsValue,
  removeDuplicates,
} from './arrays';

describe('Array Exercises', () => {
  describe('getFirstElement', () => {
    test('returns first element of array', () => {
      expect(getFirstElement([1, 2, 3])).toBe(1);
      expect(getFirstElement(['a', 'b', 'c'])).toBe('a');
    });

    test('returns undefined for empty array', () => {
      expect(getFirstElement([])).toBeUndefined();
    });
  });

  describe('getLastElement', () => {
    test('returns last element of array', () => {
      expect(getLastElement([1, 2, 3])).toBe(3);
      expect(getLastElement(['a', 'b', 'c'])).toBe('c');
    });

    test('returns undefined for empty array', () => {
      expect(getLastElement([])).toBeUndefined();
    });
  });

  describe('sumArray', () => {
    test('returns sum of all numbers', () => {
      expect(sumArray([1, 2, 3, 4])).toBe(10);
      expect(sumArray([5, 10, 15])).toBe(30);
    });

    test('returns 0 for empty array', () => {
      expect(sumArray([])).toBe(0);
    });
  });

  describe('filterEvenNumbers', () => {
    test('filters only even numbers', () => {
      expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
      expect(filterEvenNumbers([1, 3, 5])).toEqual([]);
    });

    test('returns empty array for empty input', () => {
      expect(filterEvenNumbers([])).toEqual([]);
    });
  });

  describe('doubleNumbers', () => {
    test('doubles all numbers in array', () => {
      expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]);
      expect(doubleNumbers([5, 10])).toEqual([10, 20]);
    });

    test('returns empty array for empty input', () => {
      expect(doubleNumbers([])).toEqual([]);
    });
  });

  describe('findMaxNumber', () => {
    test('finds maximum number in array', () => {
      expect(findMaxNumber([1, 5, 3, 2])).toBe(5);
      expect(findMaxNumber([10, 20, 30])).toBe(30);
    });

    test('returns undefined for empty array', () => {
      expect(findMaxNumber([])).toBeUndefined();
    });
  });

  describe('containsValue', () => {
    test('returns true if value exists in array', () => {
      expect(containsValue([1, 2, 3], 2)).toBe(true);
      expect(containsValue(['a', 'b', 'c'], 'b')).toBe(true);
    });

    test('returns false if value does not exist', () => {
      expect(containsValue([1, 2, 3], 4)).toBe(false);
      expect(containsValue(['a', 'b', 'c'], 'd')).toBe(false);
    });
  });

  describe('removeDuplicates', () => {
    test('removes duplicate values', () => {
      expect(removeDuplicates([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
      expect(removeDuplicates(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
    });

    test('returns empty array for empty input', () => {
      expect(removeDuplicates([])).toEqual([]);
    });
  });
});