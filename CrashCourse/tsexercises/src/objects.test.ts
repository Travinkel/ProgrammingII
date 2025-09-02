import {
  getObjectKeys,
  getObjectValues,
  hasProperty,
  getPropertyCount,
  shallowCopy,
  mergeObjects,
  removeProperty,
  isEmpty,
} from './objects';

describe('Object Exercises', () => {
  const sampleObject = { name: 'John', age: 30, city: 'New York' };

  describe('getObjectKeys', () => {
    test('returns all keys from object', () => {
      expect(getObjectKeys(sampleObject)).toEqual(['name', 'age', 'city']);
      expect(getObjectKeys({})).toEqual([]);
    });
  });

  describe('getObjectValues', () => {
    test('returns all values from object', () => {
      expect(getObjectValues(sampleObject)).toEqual(['John', 30, 'New York']);
      expect(getObjectValues({})).toEqual([]);
    });
  });

  describe('hasProperty', () => {
    test('checks if object has property', () => {
      expect(hasProperty(sampleObject, 'name')).toBe(true);
      expect(hasProperty(sampleObject, 'age')).toBe(true);
      expect(hasProperty(sampleObject, 'email')).toBe(false);
    });
  });

  describe('getPropertyCount', () => {
    test('returns number of properties', () => {
      expect(getPropertyCount(sampleObject)).toBe(3);
      expect(getPropertyCount({})).toBe(0);
      expect(getPropertyCount({ a: 1 })).toBe(1);
    });
  });

  describe('shallowCopy', () => {
    test('creates shallow copy of object', () => {
      const copy = shallowCopy(sampleObject);
      expect(copy).toEqual(sampleObject);
      expect(copy).not.toBe(sampleObject);
    });
  });

  describe('mergeObjects', () => {
    test('merges two objects', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      const merged = mergeObjects(obj1, obj2);
      expect(merged).toEqual({ a: 1, b: 3, c: 4 });
    });

    test('handles empty objects', () => {
      expect(mergeObjects({}, { a: 1 })).toEqual({ a: 1 });
      expect(mergeObjects({ a: 1 }, {})).toEqual({ a: 1 });
    });
  });

  describe('removeProperty', () => {
    test('removes property from object', () => {
      const result = removeProperty(sampleObject, 'age');
      expect(result).toEqual({ name: 'John', city: 'New York' });
      expect(result).not.toBe(sampleObject);
    });

    test('returns same object if property does not exist', () => {
      const result = removeProperty(sampleObject, 'email');
      expect(result).toEqual(sampleObject);
    });
  });

  describe('isEmpty', () => {
    test('checks if object is empty', () => {
      expect(isEmpty({})).toBe(true);
      expect(isEmpty({ a: 1 })).toBe(false);
      expect(isEmpty(sampleObject)).toBe(false);
    });
  });
});