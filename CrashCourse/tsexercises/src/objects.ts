// Object Exercises - Complete the functions below

// Exercise 1: Get all keys from an object
export function getObjectKeys(obj: Record<string, any>): string[] {
  // TODO: Return an array of all keys in the object
    const keys = Object.keys(obj);
    return keys;
}

// Exercise 2: Get all values from an object
export function getObjectValues(obj: Record<string, any>): any[] {
  // TODO: Return an array of all values in the object
    const values = Object.values(obj);
    return values;
}

// Exercise 3: Check if object has a specific property
export function hasProperty(obj: Record<string, any>, key: string): boolean {
  // TODO: Return true if object has the property, false otherwise
    if (obj.hasOwnProperty(key)) {
        return true;
    }
  return false;
}

// Exercise 4: Get the number of properties in an object
export function getPropertyCount(obj: Record<string, any>): number {
  // TODO: Return the number of properties in the object
    const keys = Object.keys(obj);
    return keys.length;
}

// Exercise 5: Create a shallow copy of an object
export function shallowCopy(obj: Record<string, any>): Record<string, any> {
  // TODO: Return a shallow copy of the object
    return {... obj};
}

// Exercise 6: Merge two objects
export function mergeObjects(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any> {
  // TODO: Return a new object with properties from both objects (obj2 properties should override obj1)

    return { ...obj1, ...obj2 };
}

// Exercise 7: Remove a property from an object (return new object)
export function removeProperty(obj: Record<string, any>, key: string): Record<string, any> {
  // TODO: Return a new object without the specified property
    const { [key]: _omit, ...rest } = obj;
    return rest;
}

// Exercise 8: Check if object is empty
export function isEmpty(obj: Record<string, any>): boolean {
  // TODO: Return true if object has no properties, false otherwise
    if (Object.keys(obj).length === 0) {
        return true;
    }
  return false;
}