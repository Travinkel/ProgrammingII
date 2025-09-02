// Array Exercises - Complete the functions below

// Exercise 1: Get the first element of an array
export function getFirstElement<T>(arr: T[]): T | undefined {
    // TODO: Return the first element of the array, or undefined if empty
    return arr ? arr[0] : undefined;
}

// Exercise 2: Get the last element of an array
export function getLastElement<T>(arr: T[]): T | undefined {
    // TODO: Return the last element of the array, or undefined if empty
    return arr ? arr[arr.length - 1] : undefined;
}

// Exercise 3: Find the sum of all numbers in an array
export function sumArray(numbers: number[]): number {
    // TODO: Return the sum of all numbers in the array
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Exercise 4: Filter even numbers from an array
export function filterEvenNumbers(numbers: number[]): number[] {
    // TODO: Return a new array containing only even numbers
    return numbers.filter(index => index % 2 === 0);
}

// Exercise 5: Double all numbers in an array
export function doubleNumbers(numbers: number[]): number[] {
    // TODO: Return a new array with all numbers doubled
    return numbers.map(index => index * 2);
}

// Exercise 6: Find the maximum number in an array
export function findMaxNumber(numbers: number[]): number | undefined {
    // TODO: Return the largest number in the array, or undefined if empty
    var largestNum = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largestNum) {
            largestNum = numbers[i];
        }
    }
    if (numbers.length === 0) {
        return undefined;
    }
    return largestNum;
}

// Exercise 7: Check if an array contains a specific value
export function containsValue<T>(arr: T[], value: T): boolean {
    // TODO: Return true if the array contains the value, false otherwise
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

// Exercise 8: Remove duplicates from an array
export function removeDuplicates<T>(arr: T[]): T[] {
    // TODO: Return a new array with duplicate values removed
    return [...new Set(arr)];
}