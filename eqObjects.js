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

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
// assertEqual(eqObjects({a: {aa: {aaa: 2, bbb: {c: 22}}, bb: 4}, b: 23}, {a: {aa: {aaa: 2, bbb: {c: 22}}, bb: 4}, b: 23}), true);