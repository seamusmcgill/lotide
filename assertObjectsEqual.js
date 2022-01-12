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
    // Check if the value is an array
    if (Array.isArray(object1[key])) {
      // Check if the arrays are equivalent
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      // Otherwise check equivalency of primitive values
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  // Ensure objects print properly
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });

const bestTVShowsByGenre = {
  // eslint-disable-next-line camelcase
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const raptorsStarters = {
  C: "Pascal Siakam",
  PF : "Scottie Barnes",
  SF: "OG Anunoby",
  SG: "Gary Trent Jr.",
  PG: "Fred VanVleet",
};

assertObjectsEqual(bestTVShowsByGenre, raptorsStarters);