const eqArrays = require("./eqArrays");

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
    } else if (Array.isArray(object1[key])) {
      // Check if the arrays are equivalent
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      // Must be object - check if equivalent using recursion
    } else if (!eqObjects(object1[key], object2[key])) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;