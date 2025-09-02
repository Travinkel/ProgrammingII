import {
  getStringLength,
  toUpperCase,
  toLowerCase,
  startsWith,
  endsWith,
  trimString,
  replaceAll,
  splitString,
  containsSubstring,
  reverseString,
} from './strings';

describe('String Exercises', () => {
  describe('getStringLength', () => {
    test('returns correct string length', () => {
      expect(getStringLength('hello')).toBe(5);
      expect(getStringLength('TypeScript')).toBe(10);
      expect(getStringLength('')).toBe(0);
    });
  });

  describe('toUpperCase', () => {
    test('converts string to uppercase', () => {
      expect(toUpperCase('hello')).toBe('HELLO');
      expect(toUpperCase('TypeScript')).toBe('TYPESCRIPT');
    });
  });

  describe('toLowerCase', () => {
    test('converts string to lowercase', () => {
      expect(toLowerCase('HELLO')).toBe('hello');
      expect(toLowerCase('TypeScript')).toBe('typescript');
    });
  });

  describe('startsWith', () => {
    test('checks if string starts with prefix', () => {
      expect(startsWith('hello world', 'hello')).toBe(true);
      expect(startsWith('TypeScript', 'Type')).toBe(true);
      expect(startsWith('hello', 'world')).toBe(false);
    });
  });

  describe('endsWith', () => {
    test('checks if string ends with suffix', () => {
      expect(endsWith('hello world', 'world')).toBe(true);
      expect(endsWith('TypeScript', 'Script')).toBe(true);
      expect(endsWith('hello', 'world')).toBe(false);
    });
  });

  describe('trimString', () => {
    test('removes leading and trailing whitespace', () => {
      expect(trimString('  hello  ')).toBe('hello');
      expect(trimString('\t\nworld\n\t')).toBe('world');
      expect(trimString('no-spaces')).toBe('no-spaces');
    });
  });

  describe('replaceAll', () => {
    test('replaces all occurrences of substring', () => {
      expect(replaceAll('hello world hello', 'hello', 'hi')).toBe('hi world hi');
      expect(replaceAll('aaa', 'a', 'b')).toBe('bbb');
      expect(replaceAll('test', 'xyz', 'abc')).toBe('test');
    });
  });

  describe('splitString', () => {
    test('splits string by separator', () => {
      expect(splitString('a,b,c', ',')).toEqual(['a', 'b', 'c']);
      expect(splitString('hello world', ' ')).toEqual(['hello', 'world']);
      expect(splitString('single', ',')).toEqual(['single']);
    });
  });

  describe('containsSubstring', () => {
    test('checks if string contains substring', () => {
      expect(containsSubstring('hello world', 'world')).toBe(true);
      expect(containsSubstring('TypeScript', 'Script')).toBe(true);
      expect(containsSubstring('hello', 'xyz')).toBe(false);
    });
  });

  describe('reverseString', () => {
    test('reverses the string', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('TypeScript')).toBe('tpircSepyT');
      expect(reverseString('a')).toBe('a');
      expect(reverseString('')).toBe('');
    });
  });
});