const countOnly = function(allItems, itemsToCount) {
  let output = {};
  // Loop through array
  for (const item of allItems) {
    // Check if item returns true in itemsToCount
    if (itemsToCount[item]) {
      // Add count to output object
      if (output[item]) {
        output[item]++;
      } else {
        output[item] = 1;
      }
    }
  }
  return output;
};

module.exports = countOnly;