const assertEqual = function(actual, expected) {
  // Output passing/failing messages (emojis included)
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  // Check if the arrays are different lengths
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    // If any element isn't equal the array is not equal
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  // Immediately return false if objects don't have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    // Check if the value is an object
    if (typeof object1[key] !== "object") {
      // If not check equivalency of primitive values
      if (object1[key] !== object2[key]) {
        return false;
      }
      continue;
    }
    // Check if the value is an array
    if (Array.isArray(object1[key])) {
      // Check if the arrays are equivalent
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    // Otherwise check equivalency of primitive values
    if (object1[key] !== object2[key]) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({a: {aa: {aaa: 2, bbb: {c: 22}}, bb: 4}, b: 23}, {a: {aa: {aaa: 2, bbb: {c: 22}}, bb: 4}, b: 23}), true);