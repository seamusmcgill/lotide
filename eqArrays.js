const eqArrays = function(array1, array2) {
  // Check if the arrays are different lengths
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    // Check if the array item is an array
    if (!Array.isArray(array1[i])) {
      // Check if array items are equal
      if (array1[i] !== array2[i]) {
        return false;
      }
      // Skip to end of loop
      continue;
    }
    
    // Run recursive function on array elements
    if (!eqArrays(array1[i], array2[i])) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;