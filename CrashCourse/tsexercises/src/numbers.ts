// Number Exercises - Complete the functions below

// Exercise 1: Check if a number is even
export function isEven(num: number): boolean {
  return num % 2 === 0;
}

// Exercise 2: Check if a number is odd
export function isOdd(num: number): boolean {
  return num % 2 !== 0;
}

// Exercise 3: Round a number to nearest integer
export function roundNumber(num: number): number {
  return Math.round(num);
}

// Exercise 4: Round a number down (floor)
export function floorNumber(num: number): number {
  return Math.floor(num);
}

// Exercise 5: Round a number up (ceiling)
export function ceilNumber(num: number): number {
  // TODO: Return the number rounded up to nearest integer
  return Math.ceil(num);
}

// Exercise 6: Get absolute value of a number
export function absoluteValue(num: number): number {
  // TODO: Return the absolute value of the number
  return Math.abs(num);
}

// Exercise 7: Check if number is positive
export function isPositive(num: number): boolean {
  // TODO: Return true if number is greater than 0
  return num > 0;
}

// Exercise 8: Check if number is negative
export function isNegative(num: number): boolean {
  // TODO: Return true if number is less than 0
  return num < 0;
}

// Exercise 9: Parse string to integer
export function parseToInteger(str: string): number {
  // TODO: Parse string to integer, return NaN if invalid
    if (isNaN(parseInt(str))) {
        return NaN;
    }
    else {
        return parseInt(str);
    }
}

// Exercise 10: Convert number to string
export function numberToString(num: number): string {
  // TODO: Convert number to string
  return num + '';
}