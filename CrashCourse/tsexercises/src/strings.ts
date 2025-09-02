// String Exercises - Complete the functions below

// Exercise 1: Get the length of a string
export function getStringLength(str: string): number {
  return str.length;
}

// Exercise 2: Convert string to uppercase
export function toUpperCase(str: string): string {
  // TODO: Return the string in uppercase
  return str.toUpperCase();
}

// Exercise 3: Convert string to lowercase
export function toLowerCase(str: string): string {
  // TODO: Return the string in lowercase
  return str.toLowerCase();
}

// Exercise 4: Check if string starts with a specific prefix
export function startsWith(str: string, prefix: string): boolean {
  // TODO: Return true if str starts with prefix, false otherwise
    console.log(str[0]);
    console.log(prefix);
    console.log(str[0] === prefix);
    console.log(str.startsWith(prefix));

    if (str.startsWith(prefix)) {
        return true;
    }
    else {
        return false;
    }
}

// Exercise 5: Check if string ends with a specific suffix
export function endsWith(str: string, suffix: string): boolean {
  // TODO: Return true if str ends with suffix, false otherwise
    if (str.endsWith(suffix)) {
        return true;
    }
    else {
        return false;
    }
}

// Exercise 6: Remove whitespace from beginning and end
export function trimString(str: string): string {
  // TODO: Return the string with leading and trailing whitespace removed
  return str.trim();
}

// Exercise 7: Replace all occurrences of a substring
export function replaceAll(str: string, search: string, replacement: string): string {
    // TODO: Replace all occurrences of 'search' with 'replacement'
    if (search === '') return str;
    return str.split(search).join(replacement);
}

// Exercise 8: Split string into an array
export function splitString(str: string, separator: string): string[] {
  // TODO: Split the string by separator and return array
  return str.split(separator);
}

// Exercise 9: Check if string contains a substring
export function containsSubstring(str: string, substring: string): boolean {
  // TODO: Return true if str contains substring, false otherwise
  return str.includes(substring);
}

// Exercise 10: Reverse a string
export function reverseString(str: string): string {
  // TODO: Return the string reversed
  return str.split('').reverse().join('');
}