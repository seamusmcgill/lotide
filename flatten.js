const flatten = function(array) {
  // Create empty flattened array
  let flattenedArray = [];
  // Loop through array elements
  for (const element of array) {
    // Check if element is a subarray
    if (Array.isArray(element)) {
      // Loop through subarray and push each element to flattened array
      for (const subElement of element) {
        flattenedArray.push(subElement);
      }
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

module.exports = flatten;